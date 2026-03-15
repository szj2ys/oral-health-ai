"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  MousePointer,
  Loader2,
  AlertCircle,
  Trophy,
  Share2,
  Target,
  Zap,
} from "lucide-react";

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

interface ChallengeAnalyticsData {
  period: {
    days: number;
    startDate: string;
    endDate: string;
  };
  summary: {
    totalChallenges: number;
    pendingChallenges: number;
    completedChallenges: number;
    expiredChallenges: number;
  };
  viral: {
    kFactor: number;
    inviteAcceptanceRate: number;
    completionRate: number;
    expirationRate: number;
    creatorCount: number;
    newUsersFromChallenges: number;
  };
  acquisition: {
    sources: Array<{
      source: string;
      count: number;
      percentage: number;
      acceptanceRate: number;
    }>;
    total: number;
  };
}

type TabType = "scan" | "challenge";

export default function AdminAnalyticsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("scan");
  const [days, setDays] = useState(7);

  // Scan analytics state
  const [scanData, setScanData] = useState<AnalyticsData | null>(null);
  const [scanLoading, setScanLoading] = useState(true);
  const [scanError, setScanError] = useState<string | null>(null);

  // Challenge analytics state
  const [challengeData, setChallengeData] = useState<ChallengeAnalyticsData | null>(null);
  const [challengeLoading, setChallengeLoading] = useState(true);
  const [challengeError, setChallengeError] = useState<string | null>(null);

  // Fetch scan analytics
  useEffect(() => {
    async function fetchScanAnalytics() {
      try {
        setScanLoading(true);
        setScanError(null);
        const response = await fetch(`/api/admin/analytics?days=${days}`);
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error?.message || "Failed to fetch scan analytics");
        }

        setScanData(result.data);
      } catch (err) {
        setScanError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setScanLoading(false);
      }
    }

    fetchScanAnalytics();
  }, [days]);

  // Fetch challenge analytics
  useEffect(() => {
    async function fetchChallengeAnalytics() {
      try {
        setChallengeLoading(true);
        setChallengeError(null);
        const response = await fetch(`/api/admin/analytics/challenge?days=${days}`);
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error?.message || "Failed to fetch challenge analytics");
        }

        setChallengeData(result.data);
      } catch (err) {
        setChallengeError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setChallengeLoading(false);
      }
    }

    fetchChallengeAnalytics();
  }, [days]);

  // Calculate overall conversion for scan funnel
  const overallConversion = useMemo(() => {
    if (scanData?.funnel && scanData.funnel.length >= 2) {
      const enterCount = scanData.funnel[0].count;
      const completeCount = scanData.funnel[scanData.funnel.length - 1].count;
      return enterCount > 0 ? Math.round((completeCount / enterCount) * 100) : 0;
    }
    return 0;
  }, [scanData]);

  const dateRangeOptions = [
    { value: 7, label: "最近7天" },
    { value: 30, label: "最近30天" },
    { value: 90, label: "最近90天" },
  ];

  const loading = activeTab === "scan" ? scanLoading : challengeLoading;
  const error = activeTab === "scan" ? scanError : challengeError;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-slate-900">数据分析中心</h1>
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

      {/* Tab Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-6">
            <TabButton
              active={activeTab === "scan"}
              onClick={() => setActiveTab("scan")}
              icon={<MousePointer className="w-4 h-4" />}
              label="扫描漏斗"
            />
            <TabButton
              active={activeTab === "challenge"}
              onClick={() => setActiveTab("challenge")}
              icon={<Trophy className="w-4 h-4" />}
              label="挑战传播"
            />
          </div>
        </div>
      </div>

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

        {/* Scan Analytics Tab */}
        {!loading && !error && activeTab === "scan" && scanData && (
          <ScanAnalyticsView data={scanData} overallConversion={overallConversion} />
        )}

        {/* Challenge Analytics Tab */}
        {!loading && !error && activeTab === "challenge" && challengeData && (
          <ChallengeAnalyticsView data={challengeData} />
        )}
      </main>
    </div>
  );
}

// Tab Button Component
function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 py-4 text-sm font-medium transition-colors relative ${
        active ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
      }`}
    >
      {icon}
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
      )}
    </button>
  );
}

// Scan Analytics View
function ScanAnalyticsView({
  data,
  overallConversion,
}: {
  data: AnalyticsData;
  overallConversion: number;
}) {
  return (
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
                    <span
                      className={`inline-flex items-center gap-1 ${
                        metric.conversionRate >= 80
                          ? "text-green-600"
                          : metric.conversionRate >= 50
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
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
  );
}

// Challenge Analytics View
function ChallengeAnalyticsView({ data }: { data: ChallengeAnalyticsData }) {
  const { summary, viral, acquisition } = data;

  // Determine viral health
  const viralHealth = useMemo(() => {
    if (viral.kFactor >= 1) return { label: "爆发式增长", color: "green" as const };
    if (viral.kFactor >= 0.5) return { label: "稳定增长", color: "blue" as const };
    if (viral.kFactor >= 0.3) return { label: "缓慢增长", color: "amber" as const };
    return { label: "需优化", color: "red" as const };
  }, [viral.kFactor]);

  return (
    <>
      {/* Viral Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <OverviewCard
          title="K-factor (病毒系数)"
          value={viral.kFactor.toFixed(2)}
          icon={<Zap className="w-5 h-5" />}
          trend={viral.kFactor >= 0.5 ? "up" : "down"}
          trendValue={viralHealth.label}
          trendColor={viralHealth.color}
        />
        <OverviewCard
          title="邀请接受率"
          value={`${viral.inviteAcceptanceRate.toFixed(1)}%`}
          icon={<Share2 className="w-5 h-5" />}
          trend={viral.inviteAcceptanceRate >= 50 ? "up" : "down"}
          trendValue={viral.inviteAcceptanceRate >= 50 ? "健康" : "需优化"}
        />
        <OverviewCard
          title="挑战完成率"
          value={`${viral.completionRate.toFixed(1)}%`}
          icon={<Target className="w-5 h-5" />}
          trend={viral.completionRate >= 40 ? "up" : "down"}
          trendValue={`${summary.completedChallenges} 完成`}
        />
        <OverviewCard
          title="新增用户"
          value={viral.newUsersFromChallenges.toString()}
          icon={<Users className="w-5 h-5" />}
          trend="up"
          trendValue={`来自 ${viral.creatorCount} 个创建者`}
        />
      </div>

      {/* Challenge Summary & Acquisition Source */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Challenge Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">挑战概览</h2>

          <div className="space-y-4">
            <SummaryRow
              label="总挑战数"
              value={summary.totalChallenges}
              color="blue"
            />
            <SummaryRow
              label="进行中"
              value={summary.pendingChallenges}
              percentage={(summary.pendingChallenges / summary.totalChallenges) * 100}
              color="amber"
            />
            <SummaryRow
              label="已完成"
              value={summary.completedChallenges}
              percentage={(summary.completedChallenges / summary.totalChallenges) * 100}
              color="green"
            />
            <SummaryRow
              label="已过期"
              value={summary.expiredChallenges}
              percentage={(summary.expiredChallenges / summary.totalChallenges) * 100}
              color="red"
            />
          </div>
        </div>

        {/* Acquisition Sources */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">邀请来源分布</h2>

          {acquisition.sources.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <Share2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>暂无来源数据</p>
            </div>
          ) : (
            <div className="space-y-4">
              {acquisition.sources.map((source) => (
                <div key={source.source}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      {getSourceLabel(source.source)}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500">
                        {source.count} ({source.percentage}%)
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          source.acceptanceRate >= 50 ? "text-green-600" : "text-amber-600"
                        }`}
                      >
                        {source.acceptanceRate}% 接受
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Viral Explanation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">病毒增长指标说明</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <span className="font-medium text-slate-900">K-factor (病毒系数):</span>
                <p className="mt-1">
                  每个创建者平均带来的新用户数。K ≥ 1 表示自传播增长，K ≥ 0.5 表示健康传播。
                </p>
              </div>
              <div>
                <span className="font-medium text-slate-900">邀请接受率:</span>
                <p className="mt-1">收到邀请后接受挑战的用户比例。越高说明邀请文案/渠道越有效。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Helper function for source labels
function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    wechat: "微信分享",
    link: "链接分享",
    copy: "复制链接",
    qr: "二维码",
    unknown: "未知来源",
  };
  return labels[source] || source;
}

// Summary Row Component
function SummaryRow({
  label,
  value,
  percentage,
  color,
}: {
  label: string;
  value: number;
  percentage?: number;
  color: "blue" | "green" | "amber" | "red";
}) {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-24 text-sm font-medium text-slate-700">{label}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-slate-900">{value}</span>
          {percentage !== undefined && (
            <span className="text-xs text-slate-500">{percentage.toFixed(1)}%</span>
          )}
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
            style={{ width: percentage !== undefined ? `${percentage}%` : "0%" }}
          />
        </div>
      </div>
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
  trendColor,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: "up" | "down";
  trendValue: string;
  trendColor?: "green" | "blue" | "amber" | "red";
}) {
  const colorClasses = {
    green: "text-green-600",
    blue: "text-blue-600",
    amber: "text-amber-600",
    red: "text-red-600",
  };

  const defaultColor = trend === "up" ? "text-green-600" : "text-red-600";
  const trendClass = trendColor ? colorClasses[trendColor] : defaultColor;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-500 text-sm">{title}</span>
        <span className="text-slate-400">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        <span className={`text-sm font-medium ${trendClass}`}>
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
                <span className="text-white text-sm font-medium">{count.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
        <div className="w-32 text-right">
          {!isFirst && (
            <>
              <span className="text-sm text-green-600 font-medium">{conversionRate}% 转化</span>
              {dropoffRate > 0 && (
                <span className="text-sm text-red-500 ml-2">-{dropoffRate}%</span>
              )}
            </>
          )}
          {isFirst && <span className="text-sm text-slate-500">起点</span>}
        </div>
      </div>
    </div>
  );
}
