"use client";

import { useState } from "react";
import { Trophy, Users, Loader2, AlertCircle } from "lucide-react";
import { trackChallengeCreate, trackChallengeCreateError } from "@/lib/analytics";

interface ChallengeCreatorProps {
  scanId: string;
  score: number;
  onChallengeCreated?: (challengeId: string, shareUrl: string) => void;
  onCancel?: () => void;
}

export default function ChallengeCreator({
  scanId,
  score,
  onChallengeCreated,
  onCancel,
}: ChallengeCreatorProps) {
  const [creatorName, setCreatorName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!creatorName.trim()) {
      setError("请输入您的昵称");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorScanId: scanId,
          creatorName: creatorName.trim(),
          creatorScore: score,
          friendName: friendName.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "创建挑战失败");
      }

      trackChallengeCreate(score);
      onChallengeCreated?.(data.data.challengeId, data.data.shareUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : "创建挑战失败";
      setError(message);
      trackChallengeCreateError("CREATE_FAILED", message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={onCancel}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="关闭"
            disabled={isLoading}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <Trophy className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">发起挑战</h3>
          <p className="text-sm text-slate-500">邀请好友PK口腔健康分数</p>
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-slate-600 mb-1">您的口腔健康评分</p>
        <p className="text-4xl font-bold text-amber-600">{score}</p>
        <p className="text-xs text-slate-500 mt-1">分</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              您的昵称
            </span>
          </label>
          <input
            type="text"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            placeholder="例如：张三"
            maxLength={20}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              好友昵称（可选）
            </span>
          </label>
          <input
            type="text"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            placeholder="例如：李四"
            maxLength={20}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            disabled={isLoading}
          />
          <p className="text-xs text-slate-400 mt-1">填写后挑战链接会显示为专属邀请</p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 py-3 px-4 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            取消
          </button>
          <button
            type="submit"
            disabled={isLoading || !creatorName.trim()}
            className="flex-1 py-3 px-4 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                创建中...
              </>
            ) : (
              <>
                <Trophy className="w-4 h-4" />
                创建挑战
              </>
            )}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
