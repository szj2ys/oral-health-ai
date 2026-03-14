import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// 标记为动态路由，支持静态导出
export const dynamic = "force-dynamic";

// 获取健康状态描述
function getHealthStatus(score: number | null): string {
  if (score === null) return "待分析";
  if (score >= 80) return "良好";
  if (score >= 70) return "一般";
  if (score >= 60) return "需关注";
  return "建议就医";
}

// 获取历史记录列表或单个记录
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");
    const deviceId = searchParams.get("deviceId");

    // 如果提供了id，返回单个记录详情
    if (id) {
      const scan = await prisma.scan.findUnique({
        where: { id },
      });

      if (!scan) {
        return NextResponse.json(
          {
            success: false,
            error: { code: "NOT_FOUND", message: "记录不存在" },
          },
          { status: 404 }
        );
      }

      // 简单的权限检查
      if (deviceId && scan.deviceId !== deviceId) {
        return NextResponse.json(
          {
            success: false,
            error: { code: "FORBIDDEN", message: "无权访问此记录" },
          },
          { status: 403 }
        );
      }

      return NextResponse.json({
        success: true,
        data: {
          id: scan.id,
          date: scan.createdAt.toISOString().split("T")[0],
          overallScore: scan.overallScore ?? 0,
          issues: scan.issues || [],
          recommendations: scan.recommendations || [],
          notes: scan.notes || "",
          status: scan.status,
          imageUrl: scan.imageUrl,
        },
        message: "获取成功",
      });
    }

    // 查询条件
    const where = deviceId ? { deviceId } : {};

    // 从数据库获取真实数据
    const [scans, total] = await Promise.all([
      prisma.scan.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.scan.count({ where }),
    ]);

    // 格式化响应数据
    const items = scans.map((scan) => ({
      id: scan.id,
      date: scan.createdAt.toISOString().split("T")[0],
      score: scan.overallScore ?? 0,
      status: getHealthStatus(scan.overallScore),
      issues: Array.isArray(scan.issues) ? scan.issues.length : 0,
      thumbnail: scan.imageUrl.startsWith("data:")
        ? scan.imageUrl.slice(0, 100)
        : scan.imageUrl,
    }));

    return NextResponse.json({
      success: true,
      data: {
        items,
        total,
        hasMore: offset + limit < total,
      },
      message: "获取成功",
    });
  } catch (error) {
    console.error("获取历史记录错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "FETCH_ERROR",
          message: "获取历史记录失败",
        },
      },
      { status: 500 }
    );
  }
}

// 删除历史记录
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const deviceId = searchParams.get("deviceId");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "MISSING_ID", message: "请提供记录ID" },
        },
        { status: 400 }
      );
    }

    // 先检查记录是否存在且属于当前设备
    const scan = await prisma.scan.findUnique({
      where: { id },
    });

    if (!scan) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "NOT_FOUND", message: "记录不存在" },
        },
        { status: 404 }
      );
    }

    // 如果提供了deviceId，检查是否匹配（简单的权限控制）
    if (deviceId && scan.deviceId !== deviceId) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "FORBIDDEN", message: "无权删除此记录" },
        },
        { status: 403 }
      );
    }

    // 删除记录
    await prisma.scan.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "删除成功",
    });
  } catch (error) {
    console.error("删除历史记录错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "DELETE_ERROR",
          message: "删除失败",
        },
      },
      { status: 500 }
    );
  }
}
