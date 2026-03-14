"use client";

import { useMemo } from "react";
import { calculateFunnelMetrics } from "@/lib/analytics";
import { BarChart3, TrendingUp, Users, MousePointer } from "lucide-react";

// Mock data for demonstration - in production this would come from an API
const MOCK_EVENT_COUNTS: Record<string, number> = {
  scan_enter: 1000,
  scan_camera_permission: 850,
  scan_photo_captured: 720,
  scan_analysis_start: 680,
  scan_analysis_complete: 650,
  scan_report_view: 620,
};

export default function AdminAnalyticsPage() {
  // Calculate funnel metrics using useMemo to avoid cascading renders
  const funnelMetrics = useMemo(
    () => calculateFunnelMetrics(MOCK_EVENT_COUNTS),
    []
  );

  // Calculate overall conversion (enter to report view)
  const overallConversion = useMemo(() => {
    if (funnelMetrics.length >= 2) {
      const enterCount = funnelMetrics[0].count;
      const completeCount = funnelMetrics[funnelMetrics.length - 1].count;
      return Math.round((completeCount / enterCount) * 100);
    }
    return 0;
  }, [funnelMetrics]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-slate-900">扫描漏斗分析</h1>
          </div>
          <div className="text-sm text-slate-500">
            最后更新: {new Date().toLocaleString("zh-CN")}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <OverviewCard
            title="总访问量"
            value={MOCK_EVENT_COUNTS.scan_enter.toLocaleString()}
            icon={<Users className="w-5 h-5" />}
            trend="up"
            trendValue="+12%"
          />
          <OverviewCard
            title="完成率"
            value={`${overallConversion}%`}
            icon={<MousePointer className="w-5 h-5" />}
            trend={overallConversion >= 50 ? "up" : "down"}
            trendValue={overallConversion >= 50 ? "良好" : "需优化"}
          />
          <OverviewCard
            title="今日转化"
            value={MOCK_EVENT_COUNTS.scan_report_view.toLocaleString()}
            icon={<TrendingUp className="w-5 h-5" />}
            trend="up"
            trendValue="+5%"
          />
        </div>

        {/* Funnel Chart */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">转化漏斗</h2>

          <div className="space-y-4">
            {funnelMetrics.map((metric, index) => (
              <FunnelBar
                key={metric.stage}
                label={metric.label}
                count={metric.count}
                maxCount={funnelMetrics[0]?.count || 1}
                conversionRate={metric.conversionRate}
                dropoffRate={metric.dropoffRate}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Metrics Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">详细数据</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">阶段</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-slate-600">用户数</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-slate-600">转化率</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-slate-600">流失率</th>
                </tr>
              </thead>
              <tbody>
                {funnelMetrics.map((metric) => (
                  <tr key={metric.stage} className="border-b border-slate-100 last:border-0">
                    <td className="py-3 px-4 text-slate-900">{metric.label}</td>
                    <td className="py-3 px-4 text-right text-slate-600">
                      {metric.count.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className={`inline-flex items-center gap-1 ${
                        metric.conversionRate >= 80
                          ? "text-green-600"
                          : metric.conversionRate >= 50
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}>
                        {metric.conversionRate >= 80 && <TrendingUp className="w-4 h-4" />}
                        {metric.conversionRate}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-slate-600">
                      {metric.dropoffRate > 0 ? `${metric.dropoffRate}%` : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

// Overview Card Component
function OverviewCard({
  title,
  value,
  icon,
  trend,
  trendValue,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: "up" | "down";
  trendValue: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-500 text-sm">{title}</span>
        <span className="text-slate-400">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        <span
          className={`text-sm font-medium ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {trend === "up" ? "↑" : "↓"} {trendValue}
        </span>
      </div>
    </div>
  );
}

// Funnel Bar Component
function FunnelBar({
  label,
  count,
  maxCount,
  conversionRate,
  dropoffRate,
  isFirst,
}: {
  label: string;
  count: number;
  maxCount: number;
  conversionRate: number;
  dropoffRate: number;
  isFirst: boolean;
}) {
  const percentage = Math.round((count / maxCount) * 100);

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <div className="w-24 text-sm font-medium text-slate-700">{label}</div>
        <div className="flex-1">
          <div className="h-10 bg-slate-100 rounded-lg overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-end px-3 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            >
              {percentage >= 20 && (
                <span className="text-white text-sm font-medium">
                  {count.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="w-32 text-right">
          {!isFirst && (
            <>
              <span className="text-sm text-green-600 font-medium">
                {conversionRate}% 转化
              </span>
              {dropoffRate > 0 && (
                <span className="text-sm text-red-500 ml-2">
                  -{dropoffRate}%
                </span>
              )}
            </>
          )}
          {isFirst && (
            <span className="text-sm text-slate-500">起点</span>
          )}
        </div>
      </div>
    </div>
  );
}
