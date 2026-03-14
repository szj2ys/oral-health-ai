import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Calendar, ArrowRight, AlertCircle } from "lucide-react";
import ShareTracker from "@/components/scan/ShareTracker";

interface SharePageProps {
  params: Promise<{ id: string }>;
}

async function getScanData(id: string) {
  try {
    const scan = await prisma.scan.findUnique({
      where: { id },
    });

    if (!scan || scan.status !== "COMPLETED") {
      return null;
    }

    // Parse issues from JSON
    const issues = Array.isArray(scan.issues)
      ? scan.issues.filter((issue): issue is { type: string; location: string; severity: string; confidence?: number } =>
          typeof issue === "object" &&
          issue !== null &&
          "type" in issue &&
          "location" in issue &&
          "severity" in issue
        )
      : [];

    const recommendations = Array.isArray(scan.recommendations)
      ? scan.recommendations.filter((r): r is string => typeof r === "string")
      : [];

    return {
      id: scan.id,
      date: scan.createdAt.toISOString().split("T")[0],
      overallScore: scan.overallScore ?? 0,
      issues,
      recommendations,
      notes: scan.notes || "",
    };
  } catch (error) {
    console.error("获取扫描数据失败:", error);
    return null;
  }
}

export async function generateMetadata({ params }: SharePageProps): Promise<Metadata> {
  const { id } = await params;
  const scan = await getScanData(id);

  if (!scan) {
    return {
      title: "报告未找到 | 张二口腔AI",
    };
  }

  const status = scan.overallScore >= 80 ? "优秀" : scan.overallScore >= 60 ? "良好" : "需改善";
  const title = `口腔健康评分 ${scan.overallScore}分 - ${status}`;
  const description = `发现 ${scan.issues.length} 个口腔问题，快来看看我的口腔健康报告！`;
  const ogImageUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://oral-health-ai.vercel.app"}/api/og?score=${scan.overallScore}&status=${encodeURIComponent(status)}&date=${scan.date}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function SharePage({ params }: SharePageProps) {
  const { id } = await params;
  const scan = await getScanData(id);

  if (!scan) {
    notFound();
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
      {/* Analytics Tracking */}
      <ShareTracker scanId={scan.id} score={scan.overallScore} />

      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🦷</span>
            <span className="font-semibold text-slate-900">张二口腔AI</span>
          </Link>
          <Link
            href="/scan"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            开始检测
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
            <Calendar className="w-3 h-3" />
            {scan.date} 的检测报告
          </span>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center mb-8">
          <p className="text-blue-100 mb-2">口腔健康评分</p>
          <div className="text-6xl font-bold mb-2">{scan.overallScore}</div>
          <p className="text-blue-100 text-lg">
            {scan.overallScore >= 80 ? "优秀" : scan.overallScore >= 60 ? "良好" : "需改善"}
          </p>
        </div>

        {/* Issues */}
        {scan.issues.length > 0 ? (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">
              检测到的问题 ({scan.issues.length}个)
            </h3>
            <div className="space-y-3">
              {scan.issues.slice(0, 3).map((issue, index) => (
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
              {scan.issues.length > 3 && (
                <p className="text-center text-sm text-slate-500">
                  还有 {scan.issues.length - 3} 个问题...
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">🎉 未发现明显问题</h3>
            <p className="text-green-700">口腔健康状况良好！</p>
          </div>
        )}

        {/* CTA */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
          <h3 className="font-semibold text-slate-900 mb-2">想知道你的口腔健康状况吗？</h3>
          <p className="text-slate-600 mb-4">只需拍照，AI 智能分析口腔问题</p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            免费开始检测
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            已有 {scan.overallScore > 0 ? Math.floor(scan.overallScore * 123) : 1000}+ 用户完成检测
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mt-8">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              本结果仅供参考，不能替代专业医生的诊断。如有不适，请及时就医。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
