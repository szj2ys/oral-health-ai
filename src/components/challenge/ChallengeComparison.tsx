"use client";

import { Trophy, Crown, Medal, Sparkles } from "lucide-react";

interface ChallengeComparisonProps {
  creatorName: string;
  creatorScore: number;
  friendName: string | null;
  friendScore: number;
  winner: "creator" | "friend" | "tie";
}

export default function ChallengeComparison({
  creatorName,
  creatorScore,
  friendName,
  friendScore,
  winner,
}: ChallengeComparisonProps) {
  const displayFriendName = friendName || "好友";

  const getWinnerStyles = (isWinner: boolean) => {
    if (!isWinner) return "opacity-60";
    return "ring-4 ring-amber-400 ring-offset-2 scale-105";
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
          <Trophy className="w-6 h-6 text-amber-500" />
          PK结果
        </h3>
        {winner === "tie" ? (
          <p className="text-amber-600 font-medium mt-2">势均力敌，打成平手！</p>
        ) : (
          <p className="text-amber-600 font-medium mt-2">
            {winner === "creator" ? creatorName : displayFriendName} 获胜！
          </p>
        )}
      </div>

      {/* Comparison Cards */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {/* Creator Card */}
        <div
          className={`flex-1 max-w-[160px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 text-center transition-all ${getWinnerStyles(
            winner === "creator"
          )}`}
        >
          {winner === "creator" && (
            <div className="flex justify-center mb-2">
              <Crown className="w-6 h-6 text-amber-500" />
            </div>
          )}
          <p className="text-sm text-slate-600 mb-2 font-medium">{creatorName}</p>
          <p className="text-4xl font-bold text-amber-600">{creatorScore}</p>
          <p className="text-xs text-slate-500 mt-1">分</p>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-slate-300">VS</span>
        </div>

        {/* Friend Card */}
        <div
          className={`flex-1 max-w-[160px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 text-center transition-all ${getWinnerStyles(
            winner === "friend"
          )}`}
        >
          {winner === "friend" && (
            <div className="flex justify-center mb-2">
              <Crown className="w-6 h-6 text-blue-500" />
            </div>
          )}
          <p className="text-sm text-slate-600 mb-2 font-medium">{displayFriendName}</p>
          <p className="text-4xl font-bold text-blue-600">{friendScore}</p>
          <p className="text-xs text-slate-500 mt-1">分</p>
        </div>
      </div>

      {/* Score Difference */}
      {winner !== "tie" && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            <Medal className="w-4 h-4" />
            <span className="font-medium">
              领先 {Math.abs(creatorScore - friendScore)} 分
            </span>
          </div>
        </div>
      )}

      {/* Winner Badge */}
      {winner === "tie" ? (
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 text-center">
          <Sparkles className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <p className="font-medium text-slate-700">两位都是口腔健康达人！</p>
          <p className="text-sm text-slate-500 mt-1">继续保持良好的口腔护理习惯</p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 text-center">
          <Crown className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <p className="font-medium text-slate-700">
            恭喜 {winner === "creator" ? creatorName : displayFriendName}！
          </p>
          <p className="text-sm text-slate-500 mt-1">
            {winner === "creator"
              ? "继续保持口腔健康好习惯"
              : "下次再接再厉！"}
          </p>
        </div>
      )}

      {/* Health Tips */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
        <p className="text-sm font-medium text-slate-700 mb-2">💡 小贴士</p>
        <p className="text-sm text-slate-600">
          {creatorScore >= 80 && friendScore >= 80
            ? "两位口腔健康状况都很好！建议继续保持每天刷牙两次、使用牙线的习惯。"
            : creatorScore >= 60 || friendScore >= 60
              ? "口腔健康需要持续关注，建议定期检查和保持良好的清洁习惯。"
              : "建议两位都关注口腔健康，定期做口腔检查，改善日常护理习惯。"}
        </p>
      </div>
    </div>
  );
}
