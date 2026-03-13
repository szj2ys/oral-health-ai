"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, ChevronRight, Loader2 } from "lucide-react";

interface HistoryItem {
  id: string;
  date: string;
  score: number;
  status: string;
  issues: number;
  thumbnail?: string;
}

interface HistoryData {
  items: HistoryItem[];
  total: number;
  hasMore: boolean;
}

// 获取设备ID（简单的匿名标识）
function getDeviceId(): string {
  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem("deviceId", deviceId);
  }
  return deviceId;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      setLoading(true);
      setError(null);

      const deviceId = getDeviceId();
      const response = await fetch(`/api/history?deviceId=${deviceId}&limit=20`);
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error?.message || "获取失败");
      }

      setHistory(result.data);
    } catch (err) {
      console.error("获取历史记录失败:", err);
      setError(err instanceof Error ? err.message : "获取历史记录失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </Link>
          <h1 className="font-semibold text-slate-900">检测历史</h1>
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
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">加载失败</h3>
            <p className="text-slate-600 mb-4">{error}</p>
            <button
              onClick={fetchHistory}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              重试
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && history?.items.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">暂无记录</h3>
            <p className="text-slate-600 mb-6">您还没有进行过口腔健康检测</p>
            <Link
              href="/scan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              开始首次检测
            </Link>
          </div>
        )}

        {/* History List */}
        {!loading && !error && history && history.items.length > 0 && (
          <>
            <div className="space-y-4">
              {history.items.map((record) => (
                <Link
                  key={record.id}
                  href={`/history/${record.id}`}
                  className="block bg-white rounded-2xl p-4 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg ${
                        record.score >= 80 ? "bg-green-100 text-green-700" :
                        record.score >= 70 ? "bg-blue-100 text-blue-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {record.score}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-600">{record.date}</span>
                        </div>
                        <p className="text-slate-900 font-medium">
                          检测到 {record.issues} 个问题 · {record.status}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Stats Summary */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <p className="text-2xl font-bold text-slate-900">{history.total}</p>
                <p className="text-sm text-slate-600">总检测次数</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {Math.round(history.items.reduce((acc, item) => acc + item.score, 0) / history.items.length)}
                </p>
                <p className="text-sm text-slate-600">平均分</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <p className="text-2xl font-bold text-green-600">
                  {history.items.filter(item => item.score >= 80).length}
                </p>
                <p className="text-sm text-slate-600">优秀次数</p>
              </div>
            </div>

            {/* Trend Chart Placeholder */}
            <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="font-semibold text-slate-900 mb-4">健康趋势</h2>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center">
                <p className="text-slate-400">趋势图表即将推出</p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
