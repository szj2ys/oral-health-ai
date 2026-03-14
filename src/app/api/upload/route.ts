import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { checkRateLimit, getClientIP, createRateLimitResponse } from "@/lib/rate-limit";

// Use Edge Runtime for minimal cold start and best TTFB
export const runtime = 'edge';

// Cache control headers for API responses
const CACHE_CONTROL = 'public, max-age=0, must-revalidate';

export async function POST(request: NextRequest) {
  // Start timing for performance monitoring
  const startTime = Date.now();

  try {
    // Rate limiting - early return for limited clients
    const clientIP = getClientIP(request);
    const { isLimited, resetTime } = checkRateLimit(`upload:${clientIP}`);

    if (isLimited) {
      return createRateLimitResponse(resetTime);
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: { code: 'MISSING_FILE', message: '请选择要上传的文件' } },
        { status: 400, headers: { 'Cache-Control': CACHE_CONTROL } }
      );
    }

    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_TYPE', message: '只能上传图片文件' } },
        { status: 400, headers: { 'Cache-Control': CACHE_CONTROL } }
      );
    }

    // 验证文件大小（10MB）
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: { code: 'FILE_TOO_LARGE', message: '文件大小不能超过10MB' } },
        { status: 400, headers: { 'Cache-Control': CACHE_CONTROL } }
      );
    }

    // 生成唯一文件名
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const filename = `oral-scan/${timestamp}-${random}.jpg`;

    // 上传到Vercel Blob
    const blob = await put(filename, file, {
      access: 'public',
      // Add token for faster uploads
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    // Calculate processing time
    const processingTime = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      data: {
        url: blob.url,
        filename: filename,
        size: file.size,
      },
      meta: {
        processingTime,
      },
      message: '上传成功',
    }, {
      headers: {
        'Cache-Control': CACHE_CONTROL,
        'X-Processing-Time': String(processingTime),
      },
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
      { status: 500, headers: { 'Cache-Control': CACHE_CONTROL } }
    );
  }
}
