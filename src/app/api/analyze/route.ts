import { NextRequest, NextResponse } from "next/server";
import { analyzeOralImage, generateMockAnalysis } from "@/lib/ai";
import { prisma } from "@/lib/db";

// 标记为动态路由，支持静态导出
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageBase64, useMock = false, deviceId } = body;

    if (!imageBase64) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "MISSING_IMAGE", message: "请上传口腔照片" },
        },
        { status: 400 }
      );
    }

    // 检查图片大小
    const base64Size = Buffer.from(imageBase64, "base64").length;
    if (base64Size > 10 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "IMAGE_TOO_LARGE", message: "图片大小不能超过10MB" },
        },
        { status: 400 }
      );
    }

    // 创建检测记录（初始状态）
    const scan = await prisma.scan.create({
      data: {
        deviceId: deviceId || null,
        imageUrl: "data:image/jpeg;base64," + imageBase64.slice(0, 100) + "...", // 简化存储，实际应该上传到存储服务
        imageHash: await generateImageHash(imageBase64),
        status: "ANALYZING",
      },
    });

    let result;
    let usedRealAI = false;
    let errorMessage: string | null = null;

    // 如果明确要求使用模拟数据，或者没有配置API密钥
    if (useMock || !process.env.ANTHROPIC_API_KEY) {
      console.log("Using mock analysis (mock requested or no API key)");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      result = generateMockAnalysis();
    } else {
      // 使用真实AI分析
      try {
        console.log("Using real AI analysis with Claude API");
        result = await analyzeOralImage(imageBase64);
        usedRealAI = true;
      } catch (aiError) {
        console.error("AI analysis failed, falling back to mock:", aiError);
        errorMessage =
          aiError instanceof Error ? aiError.message : "AI分析失败";
        // 降级到模拟数据
        await new Promise((resolve) => setTimeout(resolve, 2000));
        result = generateMockAnalysis();
      }
    }

    // 更新检测记录
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const issues: any = result.issues;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recommendations: any = result.recommendations;

    await prisma.scan.update({
      where: { id: scan.id },
      data: {
        status: "COMPLETED",
        overallScore: result.overallScore,
        issues,
        recommendations,
        notes: result.notes,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        ...result,
        scanId: scan.id,
      },
      meta: {
        usedRealAI,
        fallback: !usedRealAI && !!process.env.ANTHROPIC_API_KEY,
        error: errorMessage,
        scanId: scan.id,
      },
      message: usedRealAI ? "AI分析完成" : "分析完成（演示模式）",
    });
  } catch (error) {
    console.error("AI分析错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "ANALYSIS_ERROR",
          message: "分析过程中出现错误，请重试",
        },
      },
      { status: 500 }
    );
  }
}

/**
 * 生成图片哈希（简单实现，用于去重）
 */
async function generateImageHash(base64: string): Promise<string> {
  // 使用图片的前1000个字符作为简单哈希
  // 实际生产环境应该使用更可靠的哈希算法
  const data = base64.slice(0, 1000);
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return hash.toString(16);
}
