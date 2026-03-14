"use client";

import { useState, useCallback } from "react";
import { Copy, Check, Share2, Link2, MessageCircle } from "lucide-react";
import { trackChallengeShare } from "@/lib/analytics";

interface ChallengeShareCardProps {
  challengeId: string;
  creatorName: string;
  creatorScore: number;
  friendName?: string | null;
  onClose: () => void;
}

export default function ChallengeShareCard({
  challengeId,
  creatorName,
  creatorScore,
  friendName,
  onClose,
}: ChallengeShareCardProps) {
  const [copied, setCopied] = useState(false);
  const [showNativeShare, setShowNativeShare] = useState(false);

  // Compute share URL
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/challenge/${challengeId}`
    : `/challenge/${challengeId}`;

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      trackChallengeShare(challengeId, "copy");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      trackChallengeShare(challengeId, "copy_failed");
    }
  }, [shareUrl, challengeId]);

  const handleNativeShare = useCallback(async () => {
    const shareData = {
      title: "口腔健康PK挑战",
      text: `${creatorName} 邀请你进行口腔健康评分PK！TA的分数是 ${creatorScore} 分，快来挑战吧！`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        trackChallengeShare(challengeId, "native");
      } else {
        setShowNativeShare(true);
      }
    } catch (err) {
      // User cancelled or share failed
      if (err instanceof Error && err.name !== "AbortError") {
        console.error("Share failed:", err);
        setShowNativeShare(true);
      }
    }
  }, [shareUrl, challengeId, creatorName, creatorScore]);

  const shareMessage = `${creatorName} 邀请你进行口腔健康评分PK！\n\nTA的分数：${creatorScore} 分\n\n快来挑战，看看谁的口腔更健康！\n\n${shareUrl}`;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="关闭"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <TrophyIcon className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">挑战已创建！</h3>
        <p className="text-sm text-slate-500 mt-1">
          {friendName
            ? `向 ${friendName} 发起挑战`
            : "邀请好友来PK"}
        </p>
      </div>

      {/* Score Card */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-sm text-slate-600 mb-1">{creatorName}</p>
            <p className="text-3xl font-bold text-amber-600">{creatorScore}</p>
            <p className="text-xs text-slate-500">分</p>
          </div>
          <div className="px-4">
            <span className="text-2xl font-bold text-slate-300">VS</span>
          </div>
          <div className="text-center flex-1">
            <p className="text-sm text-slate-600 mb-1">{friendName || "???"}</p>
            <p className="text-3xl font-bold text-slate-300">?</p>
            <p className="text-xs text-slate-500">分</p>
          </div>
        </div>
      </div>

      {/* Share Actions */}
      <div className="space-y-3">
        {/* Primary: Native Share */}
        <button
          onClick={handleNativeShare}
          className="w-full py-3 px-4 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          分享给好友
        </button>

        {/* Secondary: Copy Link */}
        <button
          onClick={handleCopyLink}
          className="w-full py-3 px-4 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-600">已复制链接</span>
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              复制挑战链接
            </>
          )}
        </button>
      </div>

      {/* Share Preview */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
        <p className="text-xs text-slate-500 mb-2">分享预览：</p>
        <p className="text-sm text-slate-700 whitespace-pre-wrap">{shareMessage}</p>
      </div>

      {/* Tips */}
      <div className="mt-4 text-center">
        <p className="text-xs text-slate-400">
          好友接受挑战后，双方完成检测即可查看PK结果
        </p>
      </div>

      {/* Fallback Share Modal */}
      {showNativeShare && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h4 className="font-semibold text-slate-900 mb-4 text-center">分享到</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  trackChallengeShare(challengeId, "wechat");
                  handleCopyLink();
                  setShowNativeShare(false);
                }}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                微信（复制链接）
              </button>
              <button
                onClick={() => {
                  trackChallengeShare(challengeId, "copy");
                  handleCopyLink();
                  setShowNativeShare(false);
                }}
                className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                复制链接
              </button>
            </div>
            <button
              onClick={() => setShowNativeShare(false)}
              className="w-full mt-3 py-2 text-slate-500 text-sm hover:text-slate-700"
            >
              取消
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
