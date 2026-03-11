import { NextRequest, NextResponse } from 'next/server';
import { analyzeOralImage } from '@/lib/ai';

// 模拟AI分析结果（MVP阶段）
const mockAnalysisResult = {
  overallScore: 76,
  issues: [
    {
      type: '牙龈红肿',
      location: '左下磨牙区',
      severity: '轻微',
      confidence: 0.82,
    },
    {
      type: '牙菌斑',
      location: '门牙内侧',
      severity: '轻度',
      confidence: 0.75,
    },
  ],
  recommendations: [
    '建议加强牙龈清洁，使用软毛牙刷',
    '每天使用牙线清洁牙缝',
    '建议3个月内预约牙医检查',
    '注意控制糖分摄入',
  ],
  notes: '整体口腔状况良好，建议保持日常护理习惯',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageBase64, useRealAI = false } = body;

    if (!imageBase64) {
      return NextResponse.json(
        { success: false, error: { code: 'MISSING_IMAGE', message: '请上传口腔照片' } },
        { status: 400 }
      );
    }

    // 检查图片大小
    const base64Size = Buffer.from(imageBase64, 'base64').length;
    if (base64Size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: { code: 'IMAGE_TOO_LARGE', message: '图片大小不能超过10MB' } },
        { status: 400 }
      );
    }

    let result;

    if (useRealAI && process.env.ANTHROPIC_API_KEY) {
      // 使用真实AI分析
      result = await analyzeOralImage(imageBase64);
    } else {
      // 模拟AI分析延迟
      await new Promise((resolve) => setTimeout(resolve, 2000));
      result = mockAnalysisResult;
    }

    return NextResponse.json({
      success: true,
      data: result,
      message: '分析完成',
    });
  } catch (error) {
    console.error('AI分析错误:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'ANALYSIS_ERROR',
          message: '分析过程中出现错误，请重试',
        },
      },
      { status: 500 }
    );
  }
}
