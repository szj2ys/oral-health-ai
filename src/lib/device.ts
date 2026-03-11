/**
 * 设备标识管理
 * 用于在没有用户系统的情况下区分不同设备
 */

const DEVICE_ID_KEY = "oral_health_device_id";

/**
 * 生成唯一设备ID
 */
function generateDeviceId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 10);
  return `device_${timestamp}_${random}`;
}

/**
 * 获取或创建设备ID
 * 在客户端使用localStorage存储
 */
export function getDeviceId(): string {
  // 检查是否在浏览器环境
  if (typeof window === "undefined") {
    return "server";
  }

  try {
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);

    if (!deviceId) {
      deviceId = generateDeviceId();
      localStorage.setItem(DEVICE_ID_KEY, deviceId);
    }

    return deviceId;
  } catch {
    // localStorage可能不可用（隐私模式等）
    return "unknown";
  }
}

/**
 * 清除设备ID
 * 用于退出或重置
 */
export function clearDeviceId(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(DEVICE_ID_KEY);
  } catch {
    // 忽略错误
  }
}

/**
 * 检查设备ID是否存在
 */
export function hasDeviceId(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return !!localStorage.getItem(DEVICE_ID_KEY);
  } catch {
    return false;
  }
}
