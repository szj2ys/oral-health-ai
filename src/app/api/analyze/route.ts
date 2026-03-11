import { NextRequest, NextResponse } from "next/server";
import { analyzeOralImage, generateMockAnalysis } from "@/lib/ai";

// 标记为动态路由，支持静态导出
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageBase64, useMock = false } = body;

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

    return NextResponse.json({
      success: true,
      data: result,
      meta: {
        usedRealAI,
        fallback: !usedRealAI && !!process.env.ANTHROPIC_API_KEY,
        error: errorMessage,
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
