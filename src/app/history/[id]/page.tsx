"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Loader2, AlertCircle } from "lucide-react";
import { trackHistoryDetailView } from "@/lib/analytics";

interface AnalysisIssue {
  type: string;
  location: string;
  severity: "轻微" | "轻度" | "中度" | "重度";
  confidence: number;
}

interface ScanDetail {
  id: string;
  date: string;
  overallScore: number;
  issues: AnalysisIssue[];
  recommendations: string[];
  notes: string;
  status: string;
}

export default function HistoryDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [scan, setScan] = useState<ScanDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchScanDetail();
      // Track detail view
      trackHistoryDetailView(id);
    }
  }, [id]);

  async function fetchScanDetail() {
    try {
      setLoading(true);
      setError(null);

      const deviceId = localStorage.getItem("deviceId") || "";
      const response = await fetch(`/api/history?id=${id}&deviceId=${deviceId}`);
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error?.message || "获取失败");
      }

      setScan(result.data);
    } catch (err) {
      console.error("获取详情失败:", err);
      setError(err instanceof Error ? err.message : "获取详情失败");
    } finally {
      setLoading(false);
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "轻微": return "bg-green-100 text-green-800";
      case "轻度": return "bg-blue-100 text-blue-800";
      case "中度": return "bg-amber-100 text-amber-800";
      case "重度": return "bg-red-100 text-red-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/history" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </Link>
          <h1 className="font-semibold text-slate-900">检测详情</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-600">加载中...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">加载失败</h3>
            <p className="text-slate-600 mb-4">{error}</p>
            <button
              onClick={fetchScanDetail}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              重试
            </button>
          </div>
        )}

        {/* Scan Detail */}
        {!loading && !error && scan && (
          <div className="space-y-6">
            {/* Date */}
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span>{scan.date}</span>
            </div>

            {/* Score Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
              <p className="text-blue-100 mb-2">口腔健康评分</p>
              <div className="text-5xl font-bold mb-2">{scan.overallScore}</div>
              <p className="text-blue-100">
                {scan.overallScore >= 80 ? "优秀" : scan.overallScore >= 60 ? "良好" : "需改善"}
              </p>
            </div>

            {/* Issues */}
            {scan.issues && scan.issues.length > 0 ? (
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">
                  检测到的问题 ({scan.issues.length}个)
                </h3>
                <div className="space-y-3">
                  {scan.issues.map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div>
                        <p className="font-medium text-slate-900">{issue.type}</p>
                        <p className="text-sm text-slate-600">{issue.location}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full ${getSeverityColor(issue.severity)}`}>
                        {issue.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🎉 未发现明显问题</h3>
                <p className="text-green-700">您的口腔健康状况良好！</p>
              </div>
            )}

            {/* Notes */}
            {scan.notes && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <p className="text-amber-800">{scan.notes}</p>
              </div>
            )}

            {/* Recommendations */}
            {scan.recommendations && scan.recommendations.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">护理建议</h3>
                <ul className="space-y-3">
                  {scan.recommendations.map((rec, index) => (
                    <li key={index} className="flex gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <Link
                href="/history"
                className="flex-1 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors text-center"
              >
                返回列表
              </Link>
              <Link
                href="/scan"
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-center"
              >
                再次检测
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
