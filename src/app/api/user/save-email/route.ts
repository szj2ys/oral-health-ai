import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

// 请求体验证 schema
const saveEmailSchema = z.object({
  email: z.string().email("无效的邮箱格式"),
  deviceId: z.string().min(1, "设备标识不能为空"),
  scanId: z.string().optional(),
});

/**
 * POST /api/user/save-email
 * 保存用户邮箱，关联 deviceId
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证输入
    const validation = saveEmailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "输入验证失败",
          errors: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const { email, deviceId, scanId } = validation.data;

    // 查找是否已存在该 deviceId 的用户
    const existingDeviceUser = await prisma.user.findUnique({
      where: { deviceId },
      include: { scans: true },
    });

    // 查找是否已存在该 email 的用户
    const existingEmailUser = await prisma.user.findUnique({
      where: { email },
      include: { scans: true },
    });

    let user;
    let merged = false;

    if (existingEmailUser && existingDeviceUser) {
      // 情况1: email 和 deviceId 分别对应两个不同用户 - 需要合并
      if (existingEmailUser.id !== existingDeviceUser.id) {
        // 将 device 用户的 scans 转移到 email 用户
        await prisma.scan.updateMany({
          where: { userId: existingDeviceUser.id },
          data: { userId: existingEmailUser.id },
        });

        // 删除 device 用户（匿名用户）
        await prisma.user.delete({
          where: { id: existingDeviceUser.id },
        });

        // 更新 email 用户的 deviceId
        user = await prisma.user.update({
          where: { id: existingEmailUser.id },
          data: { deviceId },
        });

        merged = true;
      } else {
        // 同一个用户，无需操作
        user = existingEmailUser;
      }
    } else if (existingEmailUser) {
      // 情况2: 只有 email 用户存在 - 添加 deviceId
      user = await prisma.user.update({
        where: { id: existingEmailUser.id },
        data: { deviceId },
      });
    } else if (existingDeviceUser) {
      // 情况3: 只有 device 用户存在 - 添加 email
      user = await prisma.user.update({
        where: { id: existingDeviceUser.id },
        data: { email },
      });
    } else {
      // 情况4: 都不存在 - 创建新用户
      user = await prisma.user.create({
        data: {
          email,
          deviceId,
        },
      });
    }

    // 如果有 scanId，确保该 scan 关联到正确用户
    if (scanId) {
      await prisma.scan.updateMany({
        where: {
          id: scanId,
          OR: [{ userId: null }, { userId: user.id }],
        },
        data: {
          userId: user.id,
          deviceId: null, // 已关联用户，清除 deviceId
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        userId: user.id,
        email: user.email,
        merged,
      },
      message: merged ? "邮箱已关联，检测记录已合并" : "邮箱保存成功",
    });
  } catch (error) {
    console.error("Save email error:", error);

    // 处理唯一约束冲突
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return NextResponse.json(
        {
          success: false,
          message: "该邮箱已被其他用户使用",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "服务器错误，请稍后重试",
      },
      { status: 500 }
    );
  }
}
