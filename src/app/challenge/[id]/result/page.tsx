"use client";

import { use, useState, useEffect } from "react";
import { ArrowLeft, Trophy, Loader2, AlertCircle, Share2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChallengeComparison from "@/components/challenge/ChallengeComparison";
import { trackChallengeView, trackChallengeShare } from "@/lib/analytics";

interface ChallengeResultPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface ChallengeData {
  id: string;
  creatorName: string;
  creatorScore: number;
  friendName: string | null;
  friendScore: number | null;
  status: string;
  winner: "creator" | "friend" | "tie" | null;
}

export default function ChallengeResultPage({ params }: ChallengeResultPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [challenge, setChallenge] = useState<ChallengeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchChallenge();
  }, [id]);

  const fetchChallenge = async () => {
    try {
      const response = await fetch(`/api/challenge/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "获取挑战结果失败");
      }

      // Check if challenge is completed
      if (data.data.status !== "COMPLETED") {
        // Redirect to challenge page if not completed
        router.push(`/challenge/${id}`);
        return;
      }

      setChallenge(data.data);
      trackChallengeView(id, "completed_result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "获取挑战结果失败");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/challenge/${id}`;
    const shareData = {
      title: "口腔健康PK结果",
      text: `${challenge?.creatorName} vs ${challenge?.friendName || "好友"} 的口腔健康PK结果出炉！`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        trackChallengeShare(id, "native_result");
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        trackChallengeShare(id, "copy_result");
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      // User cancelled
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600 mx-auto mb-4" />
          <p className="text-slate-600">加载结果...</p>
        </div>
      </div>
    );
  }

  if (error || !challenge) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">加载失败</h3>
          <p className="text-slate-600">{error || "挑战不存在"}</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  // Ensure we have both scores for comparison
  if (!challenge.friendScore) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">挑战进行中</h3>
          <p className="text-slate-600">好友尚未完成检测</p>
          <Link
            href={`/challenge/${id}`}
            className="mt-6 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
          >
            查看挑战
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center">
          <Link
            href="/"
            className="p-2 -ml-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h1 className="font-semibold text-slate-900">PK结果</h1>
          </div>
          <button
            onClick={handleShare}
            className="p-2 text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-8">
        <ChallengeComparison
          creatorName={challenge.creatorName}
          creatorScore={challenge.creatorScore}
          friendName={challenge.friendName}
          friendScore={challenge.friendScore}
          winner={challenge.winner || "tie"}
        />

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleShare}
            className="w-full py-3 px-4 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            {copied ? "已复制链接" : "分享结果"}
          </button>

          <Link
            href="/scan"
            className="w-full py-3 px-4 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            发起新挑战
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 text-center mt-6">
          本检测仅供参考，不能替代专业口腔医生的诊断
        </p>
      </main>
    </div>
  );
}
