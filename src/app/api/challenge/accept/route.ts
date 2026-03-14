import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { checkRateLimit, getClientIP, createRateLimitResponse } from "@/lib/rate-limit";

// Cache control headers
const CACHE_CONTROL = "public, max-age=0, must-revalidate";

/**
 * POST /api/challenge/accept
 * Accept a challenge - creates a friend scan and updates challenge status
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const { isLimited, resetTime } = checkRateLimit(`challenge:accept:${clientIP}`);

    if (isLimited) {
      return createRateLimitResponse(resetTime);
    }

    const body = await request.json();
    const { challengeId, friendName, deviceId } = body;

    // Validation
    if (!challengeId) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "MISSING_CHALLENGE_ID", message: "缺少挑战ID" },
        },
        { status: 400, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    // Find the challenge
    const challenge = await prisma.challenge.findUnique({
      where: { id: challengeId },
    });

    if (!challenge) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "CHALLENGE_NOT_FOUND", message: "挑战不存在或已过期" },
        },
        { status: 404, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    // Fetch creator scan separately for imageUrl
    const creatorScan = challenge.creatorScanId ? await prisma.scan.findUnique({
      where: { id: challenge.creatorScanId },
      select: { imageUrl: true },
    }) : null;

    // Check if challenge is still pending
    if (challenge.status !== "PENDING") {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "CHALLENGE_NOT_PENDING",
            message: challenge.status === "COMPLETED"
              ? "挑战已完成"
              : challenge.status === "EXPIRED"
                ? "挑战已过期"
                : "挑战已被取消",
          },
        },
        { status: 400, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    // Check if challenge has expired
    if (challenge.expiresAt && challenge.expiresAt < new Date()) {
      await prisma.challenge.update({
        where: { id: challengeId },
        data: { status: "EXPIRED" },
      });

      return NextResponse.json(
        {
          success: false,
          error: { code: "CHALLENGE_EXPIRED", message: "挑战已过期" },
        },
        { status: 410, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    // Update friend name if provided
    if (friendName && friendName !== challenge.friendName) {
      await prisma.challenge.update({
        where: { id: challengeId },
        data: { friendName: friendName.slice(0, 20) },
      });
    }

    // Update challenge status to ACCEPTED
    await prisma.challenge.update({
      where: { id: challengeId },
      data: { status: "ACCEPTED" },
    });

    const processingTime = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      data: {
        challengeId: challenge.id,
        creatorName: challenge.creatorName,
        creatorScore: challenge.creatorScore,
        status: "ACCEPTED",
        // Return creator scan info for reference
        creatorScanInfo: {
          imageUrl: creatorScan?.imageUrl,
        },
        // Redirect to scan page
        redirectUrl: `/scan?challenge=${challengeId}&mode=challenge`,
      },
      meta: {
        processingTime,
      },
      message: "挑战接受成功，开始您的检测吧！",
    }, {
      headers: {
        "Cache-Control": CACHE_CONTROL,
        "X-Processing-Time": String(processingTime),
      },
    });
  } catch (error) {
    console.error("接受挑战失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "ACCEPT_CHALLENGE_ERROR",
          message: "接受挑战失败，请重试",
        },
      },
      { status: 500, headers: { "Cache-Control": CACHE_CONTROL } }
    );
  }
}
