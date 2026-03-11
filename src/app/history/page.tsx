import Link from "next/link";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";

// 模拟历史数据
const mockHistory = [
  {
    id: 1,
    date: "2024-03-10",
    score: 78,
    status: "良好",
    issues: 2,
  },
  {
    id: 2,
    date: "2024-02-15",
    score: 72,
    status: "一般",
    issues: 3,
  },
  {
    id: 3,
    date: "2024-01-20",
    score: 68,
    status: "需关注",
    issues: 4,
  },
];

export default function HistoryPage() {
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
        <div className="space-y-4">
          {mockHistory.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer"
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
            </div>
          ))}
        </div>

        {/* 趋势图占位 */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-semibold text-slate-900 mb-4">健康趋势</h2>
          <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center">
            <p className="text-slate-400">趋势图表（开发中）</p>
          </div>
        </div>
      </main>
    </div>
  );
}
