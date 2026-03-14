import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Cache control headers - allow short caching for GET
const CACHE_CONTROL_GET = "public, max-age=5, stale-while-revalidate=60";
const CACHE_CONTROL_ERROR = "public, max-age=0, must-revalidate";

/**
 * GET /api/challenge/[id]
 * Get challenge details by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const startTime = Date.now();
  const { id } = await params;

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { id },
    });

    if (!challenge) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "CHALLENGE_NOT_FOUND", message: "未找到挑战" },
        },
        { status: 404, headers: { "Cache-Control": CACHE_CONTROL_ERROR } }
      );
    }

    // Fetch scan details separately
    const [creatorScan, friendScan] = await Promise.all([
      challenge.creatorScanId ? prisma.scan.findUnique({
        where: { id: challenge.creatorScanId },
        select: { id: true, overallScore: true, status: true },
      }) : null,
      challenge.friendScanId ? prisma.scan.findUnique({
        where: { id: challenge.friendScanId },
        select: { id: true, overallScore: true, status: true },
      }) : null,
    ]);

    // Check if challenge has expired
    const now = new Date();
    if (challenge.expiresAt && challenge.expiresAt < now && challenge.status === "PENDING") {
      // Update status to expired
      await prisma.challenge.update({
        where: { id },
        data: { status: "EXPIRED" },
      });
      challenge.status = "EXPIRED";
    }

    const processingTime = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      data: {
        id: challenge.id,
        creatorName: challenge.creatorName,
        creatorScore: challenge.creatorScore,
        creatorScanId: challenge.creatorScanId,
        friendName: challenge.friendName,
        friendScore: challenge.friendScore,
        friendScanId: challenge.friendScanId,
        status: challenge.status,
        createdAt: challenge.createdAt,
        updatedAt: challenge.updatedAt,
        expiresAt: challenge.expiresAt,
        // Determine winner
        winner: challenge.status === "COMPLETED"
          ? determineWinner(challenge.creatorScore, challenge.friendScore)
          : null,
      },
      meta: {
        processingTime,
      },
    }, {
      headers: {
        "Cache-Control": CACHE_CONTROL_GET,
        "X-Processing-Time": String(processingTime),
      },
    });
  } catch (error) {
    console.error("获取挑战详情失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "GET_CHALLENGE_ERROR",
          message: "获取挑战详情失败",
        },
      },
      { status: 500, headers: { "Cache-Control": CACHE_CONTROL_ERROR } }
    );
  }
}

/**
 * PATCH /api/challenge/[id]
 * Update challenge (for completing or cancelling)
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { action, friendScanId, friendScore, friendName } = body;

    const challenge = await prisma.challenge.findUnique({
      where: { id },
    });

    if (!challenge) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "CHALLENGE_NOT_FOUND", message: "未找到挑战" },
        },
        { status: 404 }
      );
    }

    if (action === "complete") {
      // Complete the challenge
      if (!friendScanId) {
        return NextResponse.json(
          {
            success: false,
            error: { code: "MISSING_FRIEND_SCAN", message: "缺少好友检测记录" },
          },
          { status: 400 }
        );
      }

      const updatedChallenge = await prisma.challenge.update({
        where: { id },
        data: {
          friendScanId,
          friendScore: friendScore || 0,
          status: "COMPLETED",
        },
      });

      return NextResponse.json({
        success: true,
        data: {
          challenge: updatedChallenge,
          winner: determineWinner(updatedChallenge.creatorScore, updatedChallenge.friendScore),
        },
        message: "挑战完成",
      });
    }

    if (action === "cancel") {
      const updatedChallenge = await prisma.challenge.update({
        where: { id },
        data: { status: "CANCELLED" },
      });

      return NextResponse.json({
        success: true,
        data: updatedChallenge,
        message: "挑战已取消",
      });
    }

    if (action === "updateFriendName") {
      const updatedChallenge = await prisma.challenge.update({
        where: { id },
        data: { friendName: friendName?.slice(0, 20) || null },
      });

      return NextResponse.json({
        success: true,
        data: updatedChallenge,
        message: "已更新好友名称",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: { code: "INVALID_ACTION", message: "无效的操作" },
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("更新挑战失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "UPDATE_CHALLENGE_ERROR",
          message: "更新挑战失败",
        },
      },
      { status: 500 }
    );
  }
}

/**
 * Determine the winner of a challenge
 */
function determineWinner(creatorScore: number | null, friendScore: number | null): "creator" | "friend" | "tie" {
  const cScore = creatorScore || 0;
  const fScore = friendScore || 0;

  if (cScore > fScore) return "creator";
  if (fScore > cScore) return "friend";
  return "tie";
}
