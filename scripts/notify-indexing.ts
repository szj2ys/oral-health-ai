/**
 * Google Indexing API Notification Script
 * Run this after build to notify Google about new/updated pages
 *
 * Usage: ts-node scripts/notify-indexing.ts
 */

import { google } from "googleapis";

// Service account credentials from environment variable
const credentialsJson = process.env.GOOGLE_INDEXING_CREDENTIALS;

if (!credentialsJson) {
  console.log("⚠️  GOOGLE_INDEXING_CREDENTIALS not set. Skipping indexing notification.");
  console.log("To enable, set GOOGLE_INDEXING_CREDENTIALS with your service account JSON.");
  process.exit(0);
}

const URLs_TO_NOTIFY = [
  "https://oral-health-ai.vercel.app/",
  "https://oral-health-ai.vercel.app/scan/",
  "https://oral-health-ai.vercel.app/history/",
  "https://oral-health-ai.vercel.app/faq/",
  "https://oral-health-ai.vercel.app/guide/",
  "https://oral-health-ai.vercel.app/privacy/",
  // Guide pages
  "https://oral-health-ai.vercel.app/guide/gum-bleeding/",
  "https://oral-health-ai.vercel.app/guide/teeth-whitening/",
  "https://oral-health-ai.vercel.app/guide/dental-calculus/",
  "https://oral-health-ai.vercel.app/guide/tooth-decay/",
  "https://oral-health-ai.vercel.app/guide/bad-breath/",
  "https://oral-health-ai.vercel.app/guide/sensitive-teeth/",
  "https://oral-health-ai.vercel.app/guide/wisdom-teeth/",
  "https://oral-health-ai.vercel.app/guide/mouth-ulcers/",
  "https://oral-health-ai.vercel.app/guide/braces-care/",
  "https://oral-health-ai.vercel.app/guide/children-oral-health/",
  "https://oral-health-ai.vercel.app/guide/gum-recession/",
  "https://oral-health-ai.vercel.app/guide/teeth-grinding/",
  "https://oral-health-ai.vercel.app/guide/dental-implants/",
  "https://oral-health-ai.vercel.app/guide/dry-mouth/",
  "https://oral-health-ai.vercel.app/guide/elderly-oral-care/",
];

async function notifyGoogleIndexing(url: string, credentials: object): Promise<void> {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const indexing = google.indexing({ version: "v3", auth });

  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url,
        type: "URL_UPDATED",
      },
    });

    console.log(`✅ Notified: ${url} (${response.status})`);
  } catch (error) {
    // Check for rate limit (429)
    const errorCode = (error as { code?: number }).code;
    if (errorCode === 429) {
      console.log(`⏳ Rate limited for: ${url}. Will retry...`);
      throw error; // Re-throw to trigger retry
    }
    console.error(`❌ Failed to notify: ${url}`, (error as Error).message);
  }
}

async function main(): Promise<void> {
  console.log("🔍 Starting Google Indexing API notifications...\n");

  let credentials: object;
  try {
    credentials = JSON.parse(credentialsJson!);
  } catch {
    console.error("❌ Failed to parse GOOGLE_INDEXING_CREDENTIALS. Must be valid JSON.");
    process.exit(1);
  }

  let successCount = 0;
  let failCount = 0;

  for (const url of URLs_TO_NOTIFY) {
    // Retry logic for rate limiting
    let retries = 3;
    while (retries > 0) {
      try {
        await notifyGoogleIndexing(url, credentials);
        successCount++;
        break;
      } catch (error) {
        const errorCode = (error as { code?: number }).code;
        if (errorCode === 429 && retries > 1) {
          retries--;
          // Exponential backoff: 2s, 4s, 8s
          await new Promise((resolve) => setTimeout(resolve, (4 - retries) * 2000));
          console.log(`🔄 Retrying ${url} (${retries} retries left)...`);
        } else {
          failCount++;
          break;
        }
      }
    }

    // Rate limiting: max 200 requests per minute per property
    // Adding small delay between requests
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log(`\n✨ Done! Successfully notified ${successCount} URLs.`);
  if (failCount > 0) {
    console.log(`⚠️  ${failCount} URLs failed.`);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
