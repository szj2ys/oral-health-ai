/**
 * Analytics tracking utility
 * Supports GA4 and Vercel Analytics
 */

import { track as vercelTrack } from "@vercel/analytics";

// Event names for type safety
export type AnalyticsEvent =
  | "scan_upload"
  | "scan_analyze"
  | "scan_complete"
  | "scan_error"
  | "share_card_view"
  | "share_card_copy"
  | "share_gate_view"
  | "share_unlock"
  | "dentist_cta_click"
  | "history_view"
  | "history_detail_view"
  | "history_delete"
  | "page_view";

// Event parameters interface
interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event
 * Sends to both GA4 and Vercel Analytics
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  params?: EventParams
) {
  // Vercel Analytics
  try {
    vercelTrack(eventName, params);
  } catch (e) {
    // Silent fail - analytics shouldn't break the app
  }

  // GA4 (gtag)
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", eventName, params);
    } catch (e) {
      // Silent fail
    }
  }
}

/**
 * Track scan upload event
 */
export function trackScanUpload(fileSize: number, fileType: string) {
  trackEvent("scan_upload", {
    file_size: fileSize,
    file_type: fileType,
  });
}

/**
 * Track scan analysis completion
 */
export function trackScanComplete(score: number, issuesCount: number) {
  trackEvent("scan_complete", {
    score,
    issues_count: issuesCount,
    health_status: score >= 80 ? "excellent" : score >= 60 ? "good" : "needs_improvement",
  });
}

/**
 * Track scan error
 */
export function trackScanError(errorCode: string, errorMessage: string) {
  trackEvent("scan_error", {
    error_code: errorCode,
    error_message: errorMessage.slice(0, 100), // Truncate long messages
  });
}

/**
 * Track share card interactions
 */
export function trackShareView(scanId: string, score: number) {
  trackEvent("share_card_view", {
    scan_id: scanId.slice(0, 8), // Only track first 8 chars for privacy
    score,
  });
}

export function trackShareCopy(scanId: string) {
  trackEvent("share_card_copy", {
    scan_id: scanId.slice(0, 8),
  });
}

/**
 * Track dentist CTA click
 */
export function trackDentistCTA(severity: string, issuesCount: number) {
  trackEvent("dentist_cta_click", {
    severity,
    issues_count: issuesCount,
  });
}

/**
 * Track history interactions
 */
export function trackHistoryView(recordCount: number) {
  trackEvent("history_view", {
    record_count: recordCount,
  });
}

export function trackHistoryDetailView(scanId: string) {
  trackEvent("history_detail_view", {
    scan_id: scanId.slice(0, 8),
  });
}

export function trackHistoryDelete() {
  trackEvent("history_delete");
}

/**
 * Track page view (for manual page tracking in SPA)
 */
export function trackPageView(path: string) {
  trackEvent("page_view", {
    path,
  });
}

/**
 * Track share gate view
 */
export function trackShareGateView(scanId: string) {
  trackEvent("share_gate_view", {
    scan_id: scanId.slice(0, 8),
  });
}

/**
 * Track share unlock
 */
export function trackShareUnlock(scanId: string, method: string) {
  trackEvent("share_unlock", {
    scan_id: scanId.slice(0, 8),
    method,
  });
}

// Type augmentation for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: EventParams
    ) => void;
  }
}
