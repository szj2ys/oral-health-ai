import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { checkRateLimit, getClientIP, createRateLimitResponse } from "@/lib/rate-limit";

// Cache control headers for API responses
const CACHE_CONTROL = "public, max-age=0, must-revalidate";

/**
 * POST /api/challenge
 * Create a new challenge
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const { isLimited, resetTime } = checkRateLimit(`challenge:create:${clientIP}`);

    if (isLimited) {
      return createRateLimitResponse(resetTime);
    }

    const body = await request.json();
    const { creatorScanId, creatorName, creatorScore, friendName } = body;

    // Validation
    if (!creatorScanId || !creatorName) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "MISSING_FIELDS", message: "缺少必要参数: creatorScanId, creatorName" },
        },
        { status: 400, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    // Verify the scan exists and is completed
    const scan = await prisma.scan.findUnique({
      where: { id: creatorScanId },
    });

    if (!scan) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "SCAN_NOT_FOUND", message: "未找到检测记录" },
        },
        { status: 404, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    if (scan.status !== "COMPLETED") {
      return NextResponse.json(
        {
          success: false,
          error: { code: "SCAN_NOT_COMPLETED", message: "检测尚未完成，无法创建挑战" },
        },
        { status: 400, headers: { "Cache-Control": CACHE_CONTROL } }
      );
    }

    // Create challenge with 7-day expiration
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const challenge = await prisma.challenge.create({
      data: {
        creatorScanId,
        creatorName: creatorName.slice(0, 20), // Limit name length
        creatorScore: creatorScore || scan.overallScore || 0,
        friendName: friendName?.slice(0, 20) || null,
        status: "PENDING",
        expiresAt,
      },
    });

    const processingTime = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      data: {
        challengeId: challenge.id,
        creatorName: challenge.creatorName,
        creatorScore: challenge.creatorScore,
        friendName: challenge.friendName,
        status: challenge.status,
        expiresAt: challenge.expiresAt,
        shareUrl: `${process.env.NEXT_PUBLIC_APP_URL || ""}/challenge/${challenge.id}`,
      },
      meta: {
        processingTime,
      },
      message: "挑战创建成功",
    }, {
      headers: {
        "Cache-Control": CACHE_CONTROL,
        "X-Processing-Time": String(processingTime),
      },
    });
  } catch (error) {
    console.error("创建挑战失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "CREATE_CHALLENGE_ERROR",
          message: "创建挑战失败，请重试",
        },
      },
      { status: 500, headers: { "Cache-Control": CACHE_CONTROL } }
    );
  }
}
