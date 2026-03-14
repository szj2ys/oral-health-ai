"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Lightbulb, Heart, Shield } from "lucide-react";

interface AnalysisLoadingProps {
  duration?: number; // Estimated duration in ms
  onComplete?: () => void;
}

const healthTips = [
  {
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    title: "每天刷牙两次",
    description: "早晚各刷一次，每次至少2分钟",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
    title: "使用牙线清洁",
    description: "牙线可以清洁牙刷无法触及的牙缝",
  },
  {
    icon: <Heart className="w-5 h-5 text-red-500" />,
    title: "定期口腔检查",
    description: "每6个月进行一次专业口腔检查",
  },
  {
    icon: <Shield className="w-5 h-5 text-green-500" />,
    title: "少吃甜食",
    description: "糖分是导致蛀牙的主要原因之一",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    title: "使用含氟牙膏",
    description: "氟化物可以强化牙齿，预防蛀牙",
  },
];

const analysisSteps = [
  { label: "图像预处理", progress: 20 },
  { label: "牙齿区域检测", progress: 40 },
  { label: "问题识别分析", progress: 70 },
  { label: "生成健康报告", progress: 100 },
];

export default function AnalysisLoading({
  duration = 15000,
  onComplete,
}: AnalysisLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  const [scanLinePosition, setScanLinePosition] = useState(0);
  const onCompleteRef = useRef(onComplete);

  // Keep ref in sync with latest callback
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Progress animation
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 99);
      setProgress(newProgress);

      // Determine current step based on progress
      const stepIndex = analysisSteps.findIndex(
        step => newProgress <= step.progress
      );
      if (stepIndex >= 0) {
        setCurrentStep(stepIndex);
      }

      if (newProgress >= 99) {
        onCompleteRef.current?.();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  // Tips carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % healthTips.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Scan line animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLinePosition(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-8">
      {/* AI Visualization */}
      <div className="relative w-48 h-48">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-blue-100 rounded-full" />
        <div
          className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
          style={{ animationDuration: "2s" }}
        />

        {/* Inner pulsing ring */}
        <div
          className="absolute inset-4 border-4 border-blue-300 rounded-full animate-pulse"
        />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Sparkles className="w-12 h-12 text-blue-500 mb-2" />
          <span className="text-2xl font-bold text-slate-900">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Scanning line effect */}
        <div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"
          style={{ top: `${scanLinePosition}%` }}
        />
      </div>

      {/* Analysis Status */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-slate-900">AI分析中...</h2>
        <p className="text-slate-600">
          {analysisSteps[currentStep]?.label || "正在处理"}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs space-y-2">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          {analysisSteps.map((step, index) => (
            <span
              key={step.label}
              className={index <= currentStep ? "text-blue-600 font-medium" : ""}
            >
              {step.label.split("").slice(0, 2).join("")}...
            </span>
          ))}
        </div>
      </div>

      {/* Tips Carousel */}
      <div className="w-full max-w-sm">
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              {healthTips[currentTip].icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 mb-1">
                {healthTips[currentTip].title}
              </h3>
              <p className="text-sm text-slate-600">
                {healthTips[currentTip].description}
              </p>
            </div>
          </div>

          {/* Tip indicators */}
          <div className="flex gap-1.5 mt-4">
            {healthTips.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentTip
                    ? "w-6 bg-blue-500"
                    : "w-1.5 bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Estimated time */}
      <p className="text-sm text-slate-400">
        预计还需 {Math.max(0, Math.ceil((duration * (100 - progress)) / 100 / 1000))} 秒
      </p>
    </div>
  );
}
