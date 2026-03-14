"use client";

import { useState, useEffect, useCallback } from "react";
import { Camera, Shield, AlertCircle, RefreshCw } from "lucide-react";
import { trackCameraPermissionState } from "@/lib/analytics";

interface CameraPermissionProps {
  onPermissionGranted: () => void;
  onPermissionDenied: () => void;
  onSkipToUpload: () => void;
}

type PermissionState = "prompt" | "granted" | "denied" | "checking";

export default function CameraPermission({
  onPermissionGranted,
  onPermissionDenied,
  onSkipToUpload,
}: CameraPermissionProps) {
  const [permissionState, setPermissionState] = useState<PermissionState>("checking");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkPermission = useCallback(async () => {
    try {
      // Check if browser supports getUserMedia
      if (!navigator.mediaDevices?.getUserMedia) {
        setPermissionState("denied");
        setErrorMessage("您的浏览器不支持相机功能");
        trackCameraPermissionState("unsupported");
        return;
      }

      // Query current permission state
      if (navigator.permissions?.query) {
        const result = await navigator.permissions.query({ name: "camera" as PermissionName });
        if (result.state === "granted") {
          setPermissionState("granted");
          onPermissionGranted();
          return;
        } else if (result.state === "denied") {
          setPermissionState("denied");
          setErrorMessage("相机权限已被拒绝，请在浏览器设置中开启");
          trackCameraPermissionState("denied");
          return;
        }
      }

      setPermissionState("prompt");
      trackCameraPermissionState("prompt");
    } catch {
      // Some browsers don't support querying camera permission
      setPermissionState("prompt");
      trackCameraPermissionState("prompt");
    }
  }, [onPermissionGranted]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkPermission();
  }, [checkPermission]);

  const requestPermission = async () => {
    setPermissionState("checking");
    setErrorMessage("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      // Stop all tracks immediately - we just needed permission
      stream.getTracks().forEach(track => track.stop());

      setPermissionState("granted");
      trackCameraPermissionState("granted");
      onPermissionGranted();
    } catch (error) {
      setPermissionState("denied");
      const message = error instanceof Error ? error.message : "无法访问相机";
      setErrorMessage(message.includes("Permission denied") ? "相机权限被拒绝" : message);
      trackCameraPermissionState("denied", { error: message });
      onPermissionDenied();
    }
  };

  if (permissionState === "checking") {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-slate-600">正在检查相机权限...</p>
      </div>
    );
  }

  if (permissionState === "granted") {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Camera className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">需要相机权限</h2>
        <p className="text-slate-600">
          为了拍摄口腔照片进行分析，我们需要访问您的相机
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Camera className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900">实时拍摄</p>
            <p className="text-sm text-slate-600">直接拍摄，无需保存到相册</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900">隐私保护</p>
            <p className="text-sm text-slate-600">照片仅用于AI分析，不会被保存</p>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-red-800">{errorMessage}</p>
              {permissionState === "denied" && (
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  刷新页面重试
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3">
        {permissionState === "prompt" && (
          <button
            onClick={requestPermission}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            允许使用相机
          </button>
        )}

        <button
          onClick={onSkipToUpload}
          className="w-full py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors"
        >
          从相册选择照片
        </button>
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-slate-400 text-center">
        您的照片仅用于口腔健康分析，不会被存储或分享给第三方
      </p>
    </div>
  );
}
