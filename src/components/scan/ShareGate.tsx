"use client";

import { useState, useEffect } from "react";
import { Share2, Lock, Unlock, Check, Link2 } from "lucide-react";
import { trackShareCopy, trackShareGateView, trackShareUnlock } from "@/lib/analytics";

interface ShareGateProps {
  scanId: string;
  children: React.ReactNode;
  onShare?: () => void;
}

const SHARE_STORAGE_KEY = "oral_ai_shared_scans";

/**
 * ShareGate - Locks premium content until user shares
 * Uses localStorage to track which scans have been shared
 */
export default function ShareGate({ scanId, children, onShare }: ShareGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    try {
      if (typeof window === "undefined") return false;
      const sharedScans = JSON.parse(localStorage.getItem(SHARE_STORAGE_KEY) || "[]");
      return sharedScans.includes(scanId);
    } catch {
      // localStorage not available, default to unlocked
      return true;
    }
  });
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Track gate view when component mounts
  useEffect(() => {
    trackShareGateView(scanId);
  }, [scanId]);

  const handleShare = async (method: string) => {
    const shareUrl = `${window.location.origin}/share/${scanId}`;

    // Track share event
    if (typeof window !== "undefined" && (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag("event", "share", {
        method,
        item_id: scanId,
      });
    }

    if (method === "copy") {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // Track share copy
      trackShareCopy(scanId);
    }

    // Mark as unlocked
    try {
      const sharedScans = JSON.parse(localStorage.getItem(SHARE_STORAGE_KEY) || "[]");
      if (!sharedScans.includes(scanId)) {
        sharedScans.push(scanId);
        localStorage.setItem(SHARE_STORAGE_KEY, JSON.stringify(sharedScans));
      }
    } catch {
      // Ignore localStorage errors
    }

    // Track share unlock event
    trackShareUnlock(scanId, method);

    setIsUnlocked(true);
    setShowShareModal(false);
    onShare?.();
  };

  const handleNativeShare = async () => {
    const shareUrl = `${window.location.origin}/share/${scanId}`;
    const shareData = {
      title: "我的口腔健康检测报告",
      text: `我在张二口腔AI做了口腔健康检测，快来看看我的报告！`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        handleShare("native");
      } else {
        setShowShareModal(true);
      }
    } catch {
      // User cancelled or share failed
      setShowShareModal(true);
    }
  };

  if (isUnlocked) {
    return (
      <div className="relative">
        {/* Unlocked badge */}
        <div className="absolute -top-3 -right-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
          <Unlock className="w-3 h-3" />
          已解锁
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Locked overlay */}
      <div className="absolute inset-0 bg-slate-100/80 backdrop-blur-sm rounded-2xl z-10 flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
          <Lock className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-2">分享解锁完整报告</h3>
        <p className="text-sm text-slate-600 text-center mb-4 max-w-xs">
          分享您的检测报告，即可查看完整分析内容和详细护理建议
        </p>
        <button
          onClick={handleNativeShare}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          立即分享解锁
        </button>
      </div>

      {/* Content behind lock (blurred) */}
      <div className="blur-sm opacity-50 pointer-events-none">
        {children}
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="font-semibold text-slate-900 mb-4 text-center">分享报告</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleShare("wechat")}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                分享到微信
              </button>
              <button
                onClick={() => handleShare("weibo")}
                className="w-full py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              >
                分享到微博
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    已复制链接
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4" />
                    复制链接
                  </>
                )}
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full mt-3 py-2 text-slate-500 text-sm hover:text-slate-700"
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
