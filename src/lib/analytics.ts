/**
 * Analytics tracking utility
 * Supports GA4 and Vercel Analytics
 */

import { track as vercelTrack } from "@vercel/analytics";

// Event names for type safety
export type AnalyticsEvent =
  // Scan funnel events
  | "scan_enter"
  | "scan_camera_permission"
  | "scan_photo_captured"
  | "scan_analysis_start"
  | "scan_analysis_complete"
  | "scan_report_view"
  | "scan_dropoff"
  // Email capture events
  | "email_capture_view"
  | "email_capture_complete"
  | "email_capture_skip"
  | "email_capture_error"
  // Legacy events
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

// ==================== Scan Funnel Events ====================

/**
 * Track when user enters the scan page
 */
export function trackScanEnter(source?: string) {
  trackEvent("scan_enter", {
    source: source || "direct",
    timestamp: Date.now(),
  });
}

/**
 * Track camera permission request/result
 */
export function trackCameraPermission(granted: boolean) {
  trackEvent("scan_camera_permission", {
    granted,
  });
}

/**
 * Track camera permission with detailed state
 */
export function trackCameraPermissionState(
  state: "prompt" | "granted" | "denied" | "unsupported" | "checking",
  extra?: { error?: string }
) {
  trackEvent("scan_camera_permission", {
    state,
    ...extra,
  });
}

/**
 * Track when photo is captured/uploaded
 */
export function trackPhotoCaptured(source: "camera" | "upload") {
  trackEvent("scan_photo_captured", {
    source,
  });
}

/**
 * Track when analysis starts
 */
export function trackAnalysisStart() {
  trackEvent("scan_analysis_start");
}

/**
 * Track when analysis completes
 */
export function trackAnalysisComplete(durationMs: number) {
  trackEvent("scan_analysis_complete", {
    duration_ms: durationMs,
  });
}

/**
 * Track when user views the report
 */
export function trackReportView(scanId: string) {
  trackEvent("scan_report_view", {
    scan_id: scanId.slice(0, 8),
  });
}

/**
 * Track when user drops off from scan flow
 */
export function trackScanDropoff(step: string, reason?: string) {
  trackEvent("scan_dropoff", {
    step,
    reason: reason || "unknown",
  });
}

// ==================== Funnel Analysis Utilities ====================

/**
 * Funnel stage definitions in order
 */
export const FUNNEL_STAGES = [
  { event: "scan_enter", label: "进入扫描" },
  { event: "scan_camera_permission", label: "相机权限" },
  { event: "scan_photo_captured", label: "照片拍摄" },
  { event: "scan_analysis_start", label: "开始分析" },
  { event: "scan_analysis_complete", label: "分析完成" },
  { event: "scan_report_view", label: "查看报告" },
] as const;

/**
 * Calculate conversion rate between two stages
 */
export function calculateConversionRate(
  fromCount: number,
  toCount: number
): number {
  if (fromCount === 0) return 0;
  return Math.round((toCount / fromCount) * 100 * 100) / 100;
}

/**
 * Calculate funnel metrics from event counts
 */
export interface FunnelMetrics {
  stage: string;
  label: string;
  count: number;
  conversionRate: number; // from previous stage
  dropoffRate: number;
}

export function calculateFunnelMetrics(
  stageCounts: Record<string, number>
): FunnelMetrics[] {
  return FUNNEL_STAGES.map((stage, index) => {
    const count = stageCounts[stage.event] || 0;
    const prevCount = index > 0 ? stageCounts[FUNNEL_STAGES[index - 1].event] || 0 : count;

    const conversionRate = index === 0
      ? 100
      : calculateConversionRate(prevCount, count);

    return {
      stage: stage.event,
      label: stage.label,
      count,
      conversionRate,
      dropoffRate: Math.round((100 - conversionRate) * 100) / 100,
    };
  });
}

/**
 * Get overall funnel conversion rate (enter to report view)
 */
export function getOverallConversionRate(metrics: FunnelMetrics[]): number {
  if (metrics.length === 0) return 0;
  const enterCount = metrics[0]?.count || 0;
  const completeCount = metrics[metrics.length - 1]?.count || 0;
  return calculateConversionRate(enterCount, completeCount);
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
