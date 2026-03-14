import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { deleteImage } from "@/lib/blob";

export const dynamic = "force-dynamic";

/**
 * DELETE /api/scans/[id]
 * Delete a scan and its associated blob image
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const deviceId = searchParams.get("deviceId");

    // Find the scan
    const scan = await prisma.scan.findUnique({
      where: { id },
    });

    if (!scan) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "NOT_FOUND", message: "检测记录不存在" },
        },
        { status: 404 }
      );
    }

    // Verify ownership (deviceId matches)
    if (scan.deviceId && scan.deviceId !== deviceId) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "FORBIDDEN", message: "无权删除此记录" },
        },
        { status: 403 }
      );
    }

    // Delete the blob image if it exists and is a valid blob URL
    if (scan.imageUrl && scan.imageUrl.includes("blob.vercel-storage.com")) {
      await deleteImage(scan.imageUrl);
    }

    // Delete the scan record
    await prisma.scan.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "检测记录已删除",
    });
  } catch (error) {
    console.error("Delete scan error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "DELETE_ERROR",
          message: "删除过程中出现错误，请重试",
        },
      },
      { status: 500 }
    );
  }
}
