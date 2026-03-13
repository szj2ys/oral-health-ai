import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { checkRateLimit, getClientIP, createRateLimitResponse } from "@/lib/rate-limit";

// 标记为动态路由，支持静态导出
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const { isLimited, remaining, resetTime } = checkRateLimit(`upload:${clientIP}`);

    if (isLimited) {
      return createRateLimitResponse(resetTime);
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: { code: 'MISSING_FILE', message: '请选择要上传的文件' } },
        { status: 400 }
      );
    }

    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_TYPE', message: '只能上传图片文件' } },
        { status: 400 }
      );
    }

    // 验证文件大小（10MB）
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: { code: 'FILE_TOO_LARGE', message: '文件大小不能超过10MB' } },
        { status: 400 }
      );
    }

    // 生成唯一文件名
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const filename = `oral-scan/${timestamp}-${random}.jpg`;

    // 上传到Vercel Blob
    const blob = await put(filename, file, {
      access: 'public',
    });

    return NextResponse.json({
      success: true,
      data: {
        url: blob.url,
        filename: filename,
        size: file.size,
      },
      message: '上传成功',
    });
  } catch (error) {
    console.error('上传错误:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'UPLOAD_ERROR',
          message: '上传失败，请重试',
        },
      },
      { status: 500 }
    );
  }
}
