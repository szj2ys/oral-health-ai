"use client";

import { useState } from "react";
import { Mail, X, Loader2, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface EmailCaptureProps {
  scanId?: string;
  onSkip?: () => void;
  onComplete?: () => void;
}

export default function EmailCapture({ scanId, onSkip, onComplete }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 验证邮箱格式
  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("请输入邮箱地址");
      return;
    }

    if (!validateEmail(email)) {
      setError("请输入有效的邮箱地址");
      return;
    }

    setLoading(true);

    try {
      // 获取或生成 deviceId
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        deviceId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("deviceId", deviceId);
      }

      const response = await fetch("/api/user/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          deviceId,
          scanId,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "保存失败");
      }

      // 追踪邮箱收集成功
      trackEvent("email_capture_complete", {
        scan_id: scanId?.slice(0, 8),
        has_existing_user: result.data?.merged || false,
      });

      // 保存邮箱到 localStorage
      localStorage.setItem("userEmail", email.trim());

      setSuccess(true);
      onComplete?.();
    } catch (err) {
      const message = err instanceof Error ? err.message : "保存失败，请重试";
      setError(message);

      // 追踪错误
      trackEvent("email_capture_error", {
        error: message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    trackEvent("email_capture_skip", {
      scan_id: scanId?.slice(0, 8),
    });
    onSkip?.();
  };

  if (success) {
    return (
      <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="font-semibold text-green-800 mb-1">保存成功！</h3>
        <p className="text-sm text-green-700">
          检测结果已保存到您的邮箱 {email}
        </p>
        <p className="text-xs text-green-600 mt-2">
          您将收到口腔护理提醒和后续检测通知
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">保存检测结果</h3>
            <p className="text-sm text-slate-600">输入邮箱查看完整报告</p>
          </div>
        </div>
        {onSkip && (
          <button
            onClick={handleSkip}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="跳过"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            disabled={loading}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              保存中...
            </>
          ) : (
            "保存到邮箱"
          )}
        </button>

        {onSkip && (
          <button
            type="button"
            onClick={handleSkip}
            className="w-full py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            跳过，暂不保存
          </button>
        )}
      </form>

      <div className="mt-4 pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-500 text-center">
          我们尊重您的隐私，邮箱仅用于发送检测报告和口腔护理提醒
        </p>
      </div>
    </div>
  );
}
