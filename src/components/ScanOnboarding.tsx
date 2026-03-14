"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, Camera, Sun, Focus } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface OnboardingStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const steps: OnboardingStep[] = [
  {
    title: "光线充足",
    description: "选择光线明亮的地方，自然光最佳。避免背光或阴影遮挡口腔。",
    icon: <Sun className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "对焦清晰",
    description: "保持手机稳定，点击屏幕对焦牙齿区域，确保照片清晰不模糊。",
    icon: <Focus className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "露出牙齿",
    description: "尽量张大嘴巴，露出更多牙齿和牙龈，以便AI准确分析。",
    icon: <Camera className="w-8 h-8 text-green-500" />,
  },
];

export default function ScanOnboarding() {
  const [showOnboarding, setShowOnboarding] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasSeenOnboarding = localStorage.getItem("scanOnboardingSeen");
    return !hasSeenOnboarding;
  });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Component mounted, initial state already set via lazy initialization
    // Track that onboarding was shown
    if (showOnboarding) {
      trackEvent("page_view", { step: currentStep });
    }
  }, []);

  const handleClose = () => {
    setShowOnboarding(false);
    localStorage.setItem("scanOnboardingSeen", "true");
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!showOnboarding) return null;

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep ? "bg-blue-600" : "bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center">
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
          <p className="text-slate-600 text-sm">{step.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            上一步
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {currentStep === steps.length - 1 ? "开始检测" : "下一步"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Skip */}
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleClose}
            className="w-full text-center text-sm text-slate-400 hover:text-slate-600 mt-4"
          >
            跳过教程
          </button>
        )}
      </div>
    </div>
  );
}
