"use client";

import { useEffect, useMemo, useState } from "react";
import { calculateFunnelMetrics } from "@/lib/analytics";
import { BarChart3, TrendingUp, Users, MousePointer, Loader2, AlertCircle } from "lucide-react";

interface AnalyticsData {
  period: {
    days: number;
    startDate: string;
    endDate: string;
  };
  summary: {
    totalScans: number;
    completedScans: number;
    averageScore: number;
  };
  funnel: Array<{
    stage: string;
    label: string;
    count: number;
    conversionRate: number;
    dropoffRate: number;
  }>;
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState(7);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/admin/analytics?days=${days}`);
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error?.message || "Failed to fetch analytics");
        }

        setData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, [days]);

  // Calculate overall conversion (enter to report view)
  const overallConversion = useMemo(() => {
    if (data?.funnel && data.funnel.length >= 2) {
      const enterCount = data.funnel[0].count;
      const completeCount = data.funnel[data.funnel.length - 1].count;
      return enterCount > 0 ? Math.round((completeCount / enterCount) * 100) : 0;
    }
    return 0;
  }, [data]);

  const dateRangeOptions = [
    { value: 7, label: "最近7天" },
    { value: 30, label: "最近30天" },
    { value: 90, label: "最近90天" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-slate-900">扫描漏斗分析</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Date Range Selector */}
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="px-3 py-1.5 text-sm border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {dateRangeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="text-sm text-slate-500">
              最后更新: {new Date().toLocaleString("zh-CN")}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <span className="ml-3 text-slate-600">加载数据中...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <div>
                <h3 className="font-medium text-red-900">加载失败</h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Data Content */}
        {!loading && !error && data && (
          <>
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <OverviewCard
                title="总访问量"
                value={data.summary.totalScans.toLocaleString()}
                icon={<Users className="w-5 h-5" />}
                trend="up"
                trendValue="实时"
              />
              <OverviewCard
                title="完成率"
                value={`${overallConversion}%`}
                icon={<MousePointer className="w-5 h-5" />}
                trend={overallConversion >= 50 ? "up" : "down"}
                trendValue={overallConversion >= 50 ? "良好" : "需优化"}
              />
              <OverviewCard
                title="完成检测"
                value={data.summary.completedScans.toLocaleString()}
                icon={<TrendingUp className="w-5 h-5" />}
                trend="up"
                trendValue={`平均 ${data.summary.averageScore}分`}
              />
            </div>

            {/* Funnel Chart */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">转化漏斗</h2>

              <div className="space-y-4">
                {data.funnel.map((metric, index) => (
                  <FunnelBar
                    key={metric.stage}
                    label={metric.label}
                    count={metric.count}
                    maxCount={data.funnel[0]?.count || 1}
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
                    {data.funnel.map((metric) => (
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
          </>
        )}
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
