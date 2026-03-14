import { put, del } from "@vercel/blob";

/**
 * Upload image to Vercel Blob
 * @param imageBase64 - Base64 encoded image
 * @param filename - Optional filename
 * @returns URL of the uploaded blob
 */
export async function uploadImage(
  imageBase64: string,
  filename?: string
): Promise<string> {
  // Remove data URL prefix if present
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

  // Convert base64 to buffer
  const buffer = Buffer.from(base64Data, "base64");

  // Determine file extension from base64 prefix or default to jpg
  const ext = imageBase64.match(/data:image\/(\w+);base64/)?.[1] || "jpg";
  const name = filename || `scan-${Date.now()}.${ext}`;

  // Upload to Vercel Blob
  const blob = await put(name, buffer, {
    access: "public",
    contentType: `image/${ext === "jpg" ? "jpeg" : ext}`,
  });

  return blob.url;
}

/**
 * Delete image from Vercel Blob
 * @param url - Blob URL to delete
 */
export async function deleteImage(url: string): Promise<void> {
  try {
    await del(url);
  } catch (error) {
    console.error("Failed to delete blob:", error);
    // Don't throw - deletion failure shouldn't break the app
  }
}

/**
 * Generate a unique filename for scan images
 * @param deviceId - Device identifier
 * @returns Unique filename
 */
export function generateScanFilename(deviceId?: string): string {
  const timestamp = Date.now();
  const device = deviceId?.slice(0, 8) || "anon";
  return `scans/${device}-${timestamp}.jpg`;
}
