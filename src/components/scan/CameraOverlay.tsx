"use client";

import { useState, useEffect, useRef } from "react";
import { Check, Smile, AlertCircle } from "lucide-react";

interface CameraOverlayProps {
  isActive: boolean;
  onAlignmentComplete?: (isAligned: boolean) => void;
}

type AlignmentState = "checking" | "aligned" | "misaligned";

const tips = [
  "将牙齿对准辅助线框",
  "尽量张大嘴巴，露出牙龈",
  "保持手机稳定，避免模糊",
  "光线要充足，避免阴影",
  "正面拍摄，不要倾斜角度",
];

export default function CameraOverlay({
  isActive,
  onAlignmentComplete,
}: CameraOverlayProps) {
  const [alignmentState, setAlignmentState] = useState<AlignmentState>("checking");
  const [showTips, setShowTips] = useState(true);
  const [currentTip, setCurrentTip] = useState(0);
  const onAlignmentCompleteRef = useRef(onAlignmentComplete);

  // Keep ref in sync with latest callback
  useEffect(() => {
    onAlignmentCompleteRef.current = onAlignmentComplete;
  }, [onAlignmentComplete]);

  // Simulate alignment detection (in real app, this would use computer vision)
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      // Simulate random alignment state changes
      const states: AlignmentState[] = ["checking", "aligned", "misaligned"];
      const randomState = states[Math.floor(Math.random() * states.length)];
      setAlignmentState(randomState);
      onAlignmentCompleteRef.current?.(randomState === "aligned");
    }, 2000);

    return () => clearInterval(interval);
  }, [isActive]);

  // Cycle through tips
  useEffect(() => {
    if (!isActive || !showTips) return;

    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive, showTips]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Alignment Frame - Dental Arch Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-3/5">
          {/* Outer frame with dental arch shape */}
          <svg
            viewBox="0 0 300 200"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Top arch guide */}
            <path
              d="M 20 180 Q 150 20 280 180"
              fill="none"
              stroke={alignmentState === "aligned" ? "#22c55e" : "#ffffff"}
              strokeWidth="2"
              strokeDasharray="8 4"
              opacity={0.8}
            />
            {/* Bottom arch guide */}
            <path
              d="M 20 20 Q 150 180 280 20"
              fill="none"
              stroke={alignmentState === "aligned" ? "#22c55e" : "#ffffff"}
              strokeWidth="2"
              strokeDasharray="8 4"
              opacity={0.8}
            />
            {/* Corner markers */}
            <g stroke="#ffffff" strokeWidth="2" fill="none" opacity={0.6}>
              {/* Top-left */}
              <path d="M 0 40 L 0 0 L 40 0" />
              {/* Top-right */}
              <path d="M 260 0 L 300 0 L 300 40" />
              {/* Bottom-left */}
              <path d="M 0 160 L 0 200 L 40 200" />
              {/* Bottom-right */}
              <path d="M 260 200 L 300 200 L 300 160" />
            </g>
          </svg>

          {/* Alignment Status Indicator */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
            {alignmentState === "aligned" ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">位置合适</span>
              </>
            ) : alignmentState === "misaligned" ? (
              <>
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span className="text-white text-sm font-medium">调整位置</span>
              </>
            ) : (
              <>
                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                <span className="text-white text-sm font-medium">检测中...</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tips Carousel */}
      {showTips && (
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 flex items-start gap-3">
            <Smile className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium transition-all duration-300">
                {tips[currentTip]}
              </p>
              <div className="flex gap-1 mt-2">
                {tips.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentTip ? "w-4 bg-blue-400" : "w-1 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowTips(false)}
              className="text-white/60 hover:text-white text-xs pointer-events-auto"
            >
              隐藏
            </button>
          </div>
        </div>
      )}

      {/* Posture Guide */}
      <div className="absolute bottom-20 left-4 right-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center justify-between text-white/80 text-xs">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${alignmentState === "aligned" ? "bg-green-400" : "bg-amber-400"}`} />
              <span>光线充足</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${alignmentState === "aligned" ? "bg-green-400" : "bg-amber-400"}`} />
              <span>保持稳定</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${alignmentState === "aligned" ? "bg-green-400" : "bg-amber-400"}`} />
              <span>嘴巴张开</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
