"use client";

import { useState, useEffect } from "react";
import { Trophy, Loader2, AlertCircle, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { trackChallengeView, trackChallengeAccept, trackChallengeAcceptError } from "@/lib/analytics";

interface ChallengeAcceptProps {
  challengeId: string;
}

interface ChallengeData {
  id: string;
  creatorName: string;
  creatorScore: number;
  friendName: string | null;
  status: string;
  expiresAt: string;
}

export default function ChallengeAccept({ challengeId }: ChallengeAcceptProps) {
  const router = useRouter();
  const [challenge, setChallenge] = useState<ChallengeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAccepting, setIsAccepting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [friendName, setFriendName] = useState("");

  useEffect(() => {
    fetchChallenge();
  }, [challengeId]);

  const fetchChallenge = async () => {
    try {
      const response = await fetch(`/api/challenge/${challengeId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "获取挑战信息失败");
      }

      setChallenge(data.data);
      trackChallengeView(challengeId, data.data.status);

      // Pre-fill friend name if already set
      if (data.data.friendName) {
        setFriendName(data.data.friendName);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "获取挑战信息失败");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccept = async () => {
    setIsAccepting(true);
    setError(null);

    try {
      const response = await fetch("/api/challenge/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challengeId,
          friendName: friendName.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "接受挑战失败");
      }

      trackChallengeAccept(challengeId);

      // Redirect to scan page with challenge mode
      router.push(data.data.redirectUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : "接受挑战失败";
      setError(message);
      trackChallengeAcceptError("ACCEPT_FAILED", message);
      setIsAccepting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600 mx-auto mb-4" />
        <p className="text-slate-600">加载挑战信息...</p>
      </div>
    );
  }

  if (error || !challenge) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">挑战加载失败</h3>
        <p className="text-slate-600">{error || "挑战不存在或已过期"}</p>
      </div>
    );
  }

  // Show different UI based on challenge status
  if (challenge.status === "COMPLETED") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">挑战已完成</h3>
        <p className="text-slate-600 mb-4">双方都已经完成检测，点击查看结果</p>
        <button
          onClick={() => router.push(`/challenge/${challengeId}/result`)}
          className="px-6 py-3 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors"
        >
          查看结果
        </button>
      </div>
    );
  }

  if (challenge.status === "EXPIRED") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">挑战已过期</h3>
        <p className="text-slate-600">这个挑战已经超过7天有效期</p>
      </div>
    );
  }

  if (challenge.status === "CANCELLED") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">挑战已取消</h3>
        <p className="text-slate-600">发起人取消了这个挑战</p>
      </div>
    );
  }

  // PENDING or ACCEPTED - Show accept form
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Trophy className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">接受挑战</h3>
        <p className="text-sm text-slate-500 mt-1">
          {challenge.creatorName} 向你发起了口腔健康PK
        </p>
      </div>

      {/* Creator Score */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 mb-6 text-center">
        <p className="text-sm text-slate-600 mb-1">{challenge.creatorName}的分数</p>
        <p className="text-4xl font-bold text-amber-600">{challenge.creatorScore}</p>
        <p className="text-xs text-slate-500 mt-1">分</p>
      </div>

      {/* Friend Name Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          <span className="flex items-center gap-1">
            <UserPlus className="w-4 h-4" />
            您的昵称（可选）
          </span>
        </label>
        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          placeholder="例如：李四"
          maxLength={20}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg mb-4">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {/* Accept Button */}
      <button
        onClick={handleAccept}
        disabled={isAccepting}
        className="w-full py-3 px-4 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isAccepting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            接受中...
          </>
        ) : (
          <>
            <Trophy className="w-4 h-4" />
            接受挑战
          </>
        )}
      </button>

      {/* Info */}
      <p className="text-xs text-slate-400 text-center mt-4">
        接受后将开始口腔检测，检测完成后即可查看PK结果
      </p>
    </div>
  );
}
