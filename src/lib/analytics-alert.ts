/**
 * Analytics Alert System
 * Real-time funnel monitoring and alerting
 *
 * Monitors key metrics and triggers alerts when:
 * - Conversion rates drop below thresholds
 * - Drop-off rates exceed acceptable limits
 * - Challenge viral metrics degrade
 */

import { prisma } from "./db";

// Alert thresholds configuration
const ALERT_THRESHOLDS = {
  // Scan funnel thresholds
  scan: {
    minConversionRate: 30, // Alert if overall conversion drops below 30%
    maxDropoffRate: 70, // Alert if any stage dropoff exceeds 70%
    minCompletionRate: 25, // Alert if completion rate drops below 25%
  },
  // Challenge thresholds
  challenge: {
    minKFactor: 0.3, // Alert if K-factor drops below 0.3
    minInviteAcceptanceRate: 30, // Alert if acceptance rate drops below 30%
    minCompletionRate: 20, // Alert if challenge completion drops below 20%
    maxExpirationRate: 60, // Alert if expiration rate exceeds 60%
  },
};

// Alert severity levels
type AlertSeverity = "info" | "warning" | "critical";

interface Alert {
  id: string;
  type: "scan" | "challenge";
  metric: string;
  severity: AlertSeverity;
  message: string;
  currentValue: number;
  threshold: number;
  timestamp: Date;
  acknowledged: boolean;
}

interface FunnelCheckResult {
  alerts: Alert[];
  healthy: boolean;
  summary: {
    totalAlerts: number;
    criticalCount: number;
    warningCount: number;
  };
}

/**
 * Check scan funnel health and generate alerts
 */
export async function checkScanFunnelHealth(days: number = 1): Promise<FunnelCheckResult> {
  const alerts: Alert[] = [];

  try {
    // Get recent scan data
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const scans = await prisma.scan.groupBy({
      by: ["status"],
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
    });

    const statusCounts = scans.reduce(
      (acc, curr) => {
        acc[curr.status] = curr._count.id;
        return acc;
      },
      {} as Record<string, number>
    );

    const totalScans = Object.values(statusCounts).reduce((a, b) => a + b, 0);
    const completedScans = statusCounts["COMPLETED"] || 0;
    const failedScans = statusCounts["FAILED"] || 0;

    if (totalScans === 0) {
      return {
        alerts: [],
        healthy: true,
        summary: { totalAlerts: 0, criticalCount: 0, warningCount: 0 },
      };
    }

    // Check completion rate
    const completionRate = (completedScans / totalScans) * 100;
    if (completionRate < ALERT_THRESHOLDS.scan.minCompletionRate) {
      alerts.push({
        id: `scan-completion-${Date.now()}`,
        type: "scan",
        metric: "completionRate",
        severity: completionRate < 15 ? "critical" : "warning",
        message: `扫描完成率异常: ${completionRate.toFixed(1)}% (阈值: ${ALERT_THRESHOLDS.scan.minCompletionRate}%)`,
        currentValue: completionRate,
        threshold: ALERT_THRESHOLDS.scan.minCompletionRate,
        timestamp: new Date(),
        acknowledged: false,
      });
    }

    // Check failure rate
    const failureRate = (failedScans / totalScans) * 100;
    if (failureRate > 20) {
      alerts.push({
        id: `scan-failure-${Date.now()}`,
        type: "scan",
        metric: "failureRate",
        severity: failureRate > 40 ? "critical" : "warning",
        message: `扫描失败率过高: ${failureRate.toFixed(1)}%`,
        currentValue: failureRate,
        threshold: 20,
        timestamp: new Date(),
        acknowledged: false,
      });
    }

    return {
      alerts,
      healthy: alerts.length === 0,
      summary: {
        totalAlerts: alerts.length,
        criticalCount: alerts.filter((a) => a.severity === "critical").length,
        warningCount: alerts.filter((a) => a.severity === "warning").length,
      },
    };
  } catch (error) {
    console.error("Scan funnel health check failed:", error);
    return {
      alerts: [
        {
          id: `system-error-${Date.now()}`,
          type: "scan",
          metric: "system",
          severity: "critical",
          message: "扫描健康检查系统错误",
          currentValue: 0,
          threshold: 0,
          timestamp: new Date(),
          acknowledged: false,
        },
      ],
      healthy: false,
      summary: { totalAlerts: 1, criticalCount: 1, warningCount: 0 },
    };
  }
}

/**
 * Check challenge viral health and generate alerts
 */
export async function checkChallengeViralHealth(days: number = 1): Promise<FunnelCheckResult> {
  const alerts: Alert[] = [];

  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get challenge data
    const challenges = await prisma.challenge.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        id: true,
        status: true,
        creatorScanId: true,
        friendScanId: true,
      },
    });

    if (challenges.length === 0) {
      return {
        alerts: [],
        healthy: true,
        summary: { totalAlerts: 0, criticalCount: 0, warningCount: 0 },
      };
    }

    const totalChallenges = challenges.length;
    const completedChallenges = challenges.filter((c) => c.status === "COMPLETED").length;
    const expiredChallenges = challenges.filter((c) => c.status === "EXPIRED").length;
    const acceptedOrCompleted = challenges.filter(
      (c) => c.status === "ACCEPTED" || c.status === "COMPLETED"
    ).length;

    // Unique creators
    const uniqueCreators = new Set(challenges.map((c) => c.creatorScanId)).size;
    const newUsersFromChallenges = challenges.filter((c) => c.friendScanId !== null).length;

    // Calculate K-factor
    const kFactor = uniqueCreators > 0 ? newUsersFromChallenges / uniqueCreators : 0;

    // Check K-factor
    if (kFactor < ALERT_THRESHOLDS.challenge.minKFactor) {
      alerts.push({
        id: `challenge-kfactor-${Date.now()}`,
        type: "challenge",
        metric: "kFactor",
        severity: kFactor < 0.15 ? "critical" : "warning",
        message: `病毒系数偏低: ${kFactor.toFixed(2)} (健康阈值: ${ALERT_THRESHOLDS.challenge.minKFactor})`,
        currentValue: kFactor,
        threshold: ALERT_THRESHOLDS.challenge.minKFactor,
        timestamp: new Date(),
        acknowledged: false,
      });
    }

    // Check invite acceptance rate
    const inviteAcceptanceRate = (acceptedOrCompleted / totalChallenges) * 100;
    if (inviteAcceptanceRate < ALERT_THRESHOLDS.challenge.minInviteAcceptanceRate) {
      alerts.push({
        id: `challenge-acceptance-${Date.now()}`,
        type: "challenge",
        metric: "inviteAcceptanceRate",
        severity: inviteAcceptanceRate < 15 ? "critical" : "warning",
        message: `邀请接受率偏低: ${inviteAcceptanceRate.toFixed(1)}% (阈值: ${ALERT_THRESHOLDS.challenge.minInviteAcceptanceRate}%)`,
        currentValue: inviteAcceptanceRate,
        threshold: ALERT_THRESHOLDS.challenge.minInviteAcceptanceRate,
        timestamp: new Date(),
        acknowledged: false,
      });
    }

    // Check completion rate
    const completionRate = (completedChallenges / totalChallenges) * 100;
    if (completionRate < ALERT_THRESHOLDS.challenge.minCompletionRate) {
      alerts.push({
        id: `challenge-completion-${Date.now()}`,
        type: "challenge",
        metric: "completionRate",
        severity: completionRate < 10 ? "critical" : "warning",
        message: `挑战完成率偏低: ${completionRate.toFixed(1)}% (阈值: ${ALERT_THRESHOLDS.challenge.minCompletionRate}%)`,
        currentValue: completionRate,
        threshold: ALERT_THRESHOLDS.challenge.minCompletionRate,
        timestamp: new Date(),
        acknowledged: false,
      });
    }

    // Check expiration rate
    const expirationRate = (expiredChallenges / totalChallenges) * 100;
    if (expirationRate > ALERT_THRESHOLDS.challenge.maxExpirationRate) {
      alerts.push({
        id: `challenge-expiration-${Date.now()}`,
        type: "challenge",
        metric: "expirationRate",
        severity: expirationRate > 75 ? "critical" : "warning",
        message: `挑战过期率过高: ${expirationRate.toFixed(1)}% (阈值: ${ALERT_THRESHOLDS.challenge.maxExpirationRate}%)`,
        currentValue: expirationRate,
        threshold: ALERT_THRESHOLDS.challenge.maxExpirationRate,
        timestamp: new Date(),
        acknowledged: false,
      });
    }

    return {
      alerts,
      healthy: alerts.length === 0,
      summary: {
        totalAlerts: alerts.length,
        criticalCount: alerts.filter((a) => a.severity === "critical").length,
        warningCount: alerts.filter((a) => a.severity === "warning").length,
      },
    };
  } catch (error) {
    console.error("Challenge viral health check failed:", error);
    return {
      alerts: [
        {
          id: `system-error-${Date.now()}`,
          type: "challenge",
          metric: "system",
          severity: "critical",
          message: "挑战健康检查系统错误",
          currentValue: 0,
          threshold: 0,
          timestamp: new Date(),
          acknowledged: false,
        },
      ],
      healthy: false,
      summary: { totalAlerts: 1, criticalCount: 1, warningCount: 0 },
    };
  }
}

/**
 * Run all health checks
 */
export async function runHealthChecks(days: number = 1): Promise<{
  scan: FunnelCheckResult;
  challenge: FunnelCheckResult;
  overallHealthy: boolean;
}> {
  const [scan, challenge] = await Promise.all([
    checkScanFunnelHealth(days),
    checkChallengeViralHealth(days),
  ]);

  return {
    scan,
    challenge,
    overallHealthy: scan.healthy && challenge.healthy,
  };
}

/**
 * Format alerts for display
 */
export function formatAlertsForDisplay(result: FunnelCheckResult): string {
  if (result.healthy) {
    return "✅ 所有指标正常";
  }

  const lines = result.alerts.map((alert) => {
    const icon = alert.severity === "critical" ? "🔴" : "🟡";
    return `${icon} ${alert.message}`;
  });

  return lines.join("\n");
}

/**
 * Send alert notification (placeholder for integration)
 * Can be extended to send:
 * - Email notifications
 * - Slack/Discord webhooks
 * - SMS alerts
 * - In-app notifications
 */
export async function sendAlertNotification(
  alert: Alert,
  channels: Array<"email" | "slack" | "webhook"> = ["webhook"]
): Promise<void> {
  const payload = {
    alert,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  };

  // Log alert (always)
  console.log(`[ALERT-${alert.severity.toUpperCase()}] ${alert.message}`);

  // Slack webhook
  if (channels.includes("slack") && process.env.SLACK_WEBHOOK_URL) {
    try {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `*${alert.severity.toUpperCase()} Alert*\n${alert.message}`,
          attachments: [
            {
              color: alert.severity === "critical" ? "danger" : "warning",
              fields: [
                {
                  title: "Metric",
                  value: alert.metric,
                  short: true,
                },
                {
                  title: "Current Value",
                  value: String(alert.currentValue),
                  short: true,
                },
                {
                  title: "Threshold",
                  value: String(alert.threshold),
                  short: true,
                },
              ],
            },
          ],
        }),
      });
    } catch (error) {
      console.error("Failed to send Slack notification:", error);
    }
  }

  // Generic webhook
  if (channels.includes("webhook") && process.env.ALERT_WEBHOOK_URL) {
    try {
      await fetch(process.env.ALERT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Failed to send webhook notification:", error);
    }
  }
}

// Export configuration for customization
export { ALERT_THRESHOLDS };
export type { Alert, AlertSeverity, FunnelCheckResult };
