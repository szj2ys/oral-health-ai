import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * Challenge Analytics API
 * Returns viral metrics for the challenge feature
 *
 * Query params:
 * - days: Number of days to look back (default: 7, max: 90)
 */
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const days = Math.min(parseInt(searchParams.get("days") || "7", 10), 90);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Query challenge data for the period
    const challenges = await prisma.challenge.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        expiresAt: true,
        acquisitionSource: true,
        creatorScanId: true,
        friendScanId: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Calculate viral metrics
    const viralMetrics = calculateViralMetrics(challenges);

    // Calculate acquisition source breakdown
    const acquisitionBreakdown = calculateAcquisitionBreakdown(challenges);

    return NextResponse.json({
      success: true,
      data: {
        period: {
          days,
          startDate: startDate.toISOString(),
          endDate: new Date().toISOString(),
        },
        summary: {
          totalChallenges: challenges.length,
          pendingChallenges: challenges.filter((c) => c.status === "PENDING").length,
          completedChallenges: challenges.filter((c) => c.status === "COMPLETED").length,
          expiredChallenges: challenges.filter((c) => c.status === "EXPIRED").length,
        },
        viral: viralMetrics,
        acquisition: acquisitionBreakdown,
      },
    });
  } catch (error) {
    console.error("Challenge Analytics API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Failed to fetch challenge analytics data",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 500 }
    );
  }
}

/**
 * Calculate viral metrics from challenge records
 * - K-factor (viral coefficient): new_users_from_challenges / challenge_creators
 * - Invite acceptance rate: ACCEPTED challenges / total challenges
 * - Completion rate: COMPLETED challenges / total challenges
 * - Expiration rate: EXPIRED challenges / total challenges
 */
function calculateViralMetrics(
  challenges: Array<{
    id: string;
    status: string;
    creatorScanId: string;
    friendScanId: string | null;
  }>
) {
  const totalChallenges = challenges.length;

  if (totalChallenges === 0) {
    return {
      kFactor: 0,
      inviteAcceptanceRate: 0,
      completionRate: 0,
      expirationRate: 0,
      creatorCount: 0,
      newUsersFromChallenges: 0,
    };
  }

  // Count unique creators (by creatorScanId)
  const uniqueCreators = new Set(challenges.map((c) => c.creatorScanId)).size;

  // Count new users from challenges (friendScanId exists = friend completed a scan)
  const newUsersFromChallenges = challenges.filter((c) => c.friendScanId !== null).length;

  // Calculate K-factor: new users acquired per creator
  const kFactor = uniqueCreators > 0 ? newUsersFromChallenges / uniqueCreators : 0;

  // Invite acceptance rate: challenges that were accepted or completed
  const acceptedChallenges = challenges.filter(
    (c) => c.status === "ACCEPTED" || c.status === "COMPLETED"
  ).length;
  const inviteAcceptanceRate = (acceptedChallenges / totalChallenges) * 100;

  // Completion rate: challenges that were fully completed
  const completedChallenges = challenges.filter((c) => c.status === "COMPLETED").length;
  const completionRate = (completedChallenges / totalChallenges) * 100;

  // Expiration rate: challenges that expired
  const expiredChallenges = challenges.filter((c) => c.status === "EXPIRED").length;
  const expirationRate = (expiredChallenges / totalChallenges) * 100;

  return {
    kFactor: Math.round(kFactor * 100) / 100, // Round to 2 decimal places
    inviteAcceptanceRate: Math.round(inviteAcceptanceRate * 100) / 100,
    completionRate: Math.round(completionRate * 100) / 100,
    expirationRate: Math.round(expirationRate * 100) / 100,
    creatorCount: uniqueCreators,
    newUsersFromChallenges,
  };
}

/**
 * Calculate acquisition source breakdown
 * Groups challenges by acquisitionSource
 */
function calculateAcquisitionBreakdown(
  challenges: Array<{
    acquisitionSource: string | null;
    status: string;
  }>
) {
  const totalChallenges = challenges.length;

  if (totalChallenges === 0) {
    return {
      sources: [],
      total: 0,
    };
  }

  // Group by acquisition source
  const sourceMap = new Map<
    string,
    {
      source: string;
      count: number;
      completed: number;
      acceptanceRate: number;
    }
  >();

  for (const challenge of challenges) {
    const source = challenge.acquisitionSource || "unknown";

    if (!sourceMap.has(source)) {
      sourceMap.set(source, {
        source,
        count: 0,
        completed: 0,
        acceptanceRate: 0,
      });
    }

    const stats = sourceMap.get(source)!;
    stats.count++;

    if (challenge.status === "COMPLETED" || challenge.status === "ACCEPTED") {
      stats.completed++;
    }
  }

  // Calculate percentages and acceptance rates
  const sources = Array.from(sourceMap.values()).map((stats) => ({
    source: stats.source,
    count: stats.count,
    percentage: Math.round((stats.count / totalChallenges) * 10000) / 100,
    acceptanceRate: Math.round((stats.completed / stats.count) * 10000) / 100,
  }));

  // Sort by count descending
  sources.sort((a, b) => b.count - a.count);

  return {
    sources,
    total: totalChallenges,
  };
}
