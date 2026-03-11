import { NextRequest, NextResponse } from 'next/server';

// 标记为动态路由，支持静态导出
export const dynamic = 'force-dynamic';

// 模拟历史数据
const mockHistory = [
  {
    id: 'scan-001',
    date: '2024-03-10',
    score: 78,
    status: '良好',
    issues: 2,
    thumbnail: '/mock/oral-1.jpg',
  },
  {
    id: 'scan-002',
    date: '2024-02-15',
    score: 72,
    status: '一般',
    issues: 3,
    thumbnail: '/mock/oral-2.jpg',
  },
  {
    id: 'scan-003',
    date: '2024-01-20',
    score: 68,
    status: '需关注',
    issues: 4,
    thumbnail: '/mock/oral-3.jpg',
  },
];

// 获取历史记录列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    // TODO: 从数据库获取真实数据
    // const history = await prisma.scan.findMany({
    //   where: { userId: session.user.id },
    //   orderBy: { createdAt: 'desc' },
    //   take: limit,
    //   skip: offset,
    // });

    return NextResponse.json({
      success: true,
      data: {
        items: mockHistory.slice(offset, offset + limit),
        total: mockHistory.length,
        hasMore: offset + limit < mockHistory.length,
      },
      message: '获取成功',
    });
  } catch (error) {
    console.error('获取历史记录错误:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'FETCH_ERROR',
          message: '获取历史记录失败',
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
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: { code: 'MISSING_ID', message: '请提供记录ID' } },
        { status: 400 }
      );
    }

    // TODO: 从数据库删除
    // await prisma.scan.delete({
    //   where: { id },
    // });

    return NextResponse.json({
      success: true,
      message: '删除成功',
    });
  } catch (error) {
    console.error('删除历史记录错误:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'DELETE_ERROR',
          message: '删除失败',
        },
      },
      { status: 500 }
    );
  }
}
