import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * Admin Analytics API
 * Returns real scan funnel data from the database
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

    // Query scan data for the period
    const scans = await prisma.scan.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        status: true,
        createdAt: true,
        overallScore: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Calculate funnel metrics from scan data
    const funnelData = calculateFunnelFromScans(scans, days);

    return NextResponse.json({
      success: true,
      data: {
        period: {
          days,
          startDate: startDate.toISOString(),
          endDate: new Date().toISOString(),
        },
        summary: {
          totalScans: scans.length,
          completedScans: scans.filter((s) => s.status === "COMPLETED").length,
          averageScore: calculateAverageScore(scans),
        },
        funnel: funnelData,
      },
    });
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Failed to fetch analytics data",
          details: error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 500 }
    );
  }
}

/**
 * Calculate funnel metrics from scan records
 * Maps scan statuses to funnel stages
 */
function calculateFunnelFromScans(
  scans: Array<{ status: string; createdAt: Date; overallScore: number | null }>,
  days: number
) {
  // Define funnel stages based on scan status
  const stages = [
    { key: "scan_enter", label: "进入扫描", status: null }, // All scans start here
    { key: "scan_photo_captured", label: "照片拍摄", status: ["UPLOADING", "PREPROCESSING", "ANALYZING", "COMPLETED", "FAILED"] },
    { key: "scan_analysis_start", label: "开始分析", status: ["ANALYZING", "COMPLETED", "FAILED"] },
    { key: "scan_analysis_complete", label: "分析完成", status: ["COMPLETED", "FAILED"] },
    { key: "scan_report_view", label: "查看报告", status: ["COMPLETED"] },
  ];

  // Calculate counts for each stage
  let previousCount = scans.length;

  return stages.map((stage, index) => {
    let count: number;

    if (index === 0) {
      // First stage: all scans
      count = scans.length;
    } else {
      // Subsequent stages: scans with appropriate status
      count = scans.filter((scan) =>
        stage.status?.includes(scan.status)
      ).length;
    }

    const conversionRate = index === 0 ? 100 : previousCount > 0 ? Math.round((count / previousCount) * 100) : 0;
    const dropoffRate = index === 0 ? 0 : 100 - conversionRate;

    if (index > 0) {
      previousCount = count;
    }

    return {
      stage: stage.key,
      label: stage.label,
      count,
      conversionRate,
      dropoffRate,
    };
  });
}

/**
 * Calculate average score from completed scans
 */
function calculateAverageScore(
  scans: Array<{ overallScore: number | null }>
): number {
  const completedScans = scans.filter(
    (s) => s.overallScore !== null && s.overallScore !== undefined
  );

  if (completedScans.length === 0) return 0;

  const sum = completedScans.reduce((acc, s) => acc + (s.overallScore || 0), 0);
  return Math.round(sum / completedScans.length);
}
