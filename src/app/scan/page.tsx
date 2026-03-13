"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Camera, ArrowLeft, RotateCcw, Check, AlertCircle } from "lucide-react";

// 分析结果类型
interface AnalysisIssue {
  type: string;
  location: string;
  severity: "轻微" | "轻度" | "中度" | "重度";
  confidence?: number;
}

interface AnalysisResult {
  overallScore: number;
  issues: AnalysisIssue[];
  recommendations: string[];
  notes?: string;
}

export default function ScanPage() {
  const [step, setStep] = useState<"guide" | "camera" | "preview" | "analyzing" | "result" | "error">("guide");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
        setStep("preview");
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleAnalyze = useCallback(async () => {
    if (!capturedImage) return;

    setStep("analyzing");
    setErrorMessage("");

    try {
      // 提取base64数据（移除data:image前缀）
      const base64Data = capturedImage.split(',')[1];

      // 调用AI分析API
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: base64Data,
          deviceId: localStorage.getItem("deviceId") || Math.random().toString(36).substring(2, 15),
          // useMock: true, // 开发测试时可设为true使用模拟数据
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error?.message || '分析失败');
      }

      setAnalysisResult(result.data);
      setStep("result");
    } catch (error) {
      console.error('分析错误:', error);
      setErrorMessage(error instanceof Error ? error.message : '分析过程中出现错误');
      setStep("error");
    }
  }, [capturedImage]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </Link>
          <h1 className="font-semibold text-slate-900">口腔健康检测</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {step === "guide" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-2">拍摄准备</h2>
              <p className="text-slate-600">请按照以下指引拍摄口腔照片，以获得最准确的分析结果</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">拍摄技巧</h3>
              <ul className="space-y-3">
                <GuideItem text="确保光线充足，自然光最佳" />
                <GuideItem text="保持手机稳定，避免照片模糊" />
                <GuideItem text="尽量张大嘴巴，露出更多牙齿" />
                <GuideItem text="建议拍摄多个角度：正面、左右侧" />
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  <strong>重要提示：</strong>本工具仅供参考，不能替代专业医生的诊断。如有严重不适，请及时就医。
                </p>
              </div>
            </div>

            <button
              onClick={() => setStep("camera")}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Camera className="w-5 h-5" />
              开始拍摄
            </button>
          </div>
        )}

        {step === "camera" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-2">上传口腔照片</h2>
              <p className="text-slate-600">请选择或拍摄清晰的口腔照片</p>
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="aspect-[4/3] bg-white rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <Camera className="w-12 h-12 text-slate-400 mb-4" />
              <p className="text-slate-600 font-medium">点击选择照片</p>
              <p className="text-sm text-slate-400 mt-1">支持 JPG、PNG 格式</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>
        )}

        {step === "preview" && capturedImage && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-2">照片预览</h2>
              <p className="text-slate-600">确认照片清晰后，开始AI分析</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <img src={capturedImage} alt="口腔照片" className="w-full" />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setCapturedImage(null);
                  setStep("camera");
                }}
                className="flex-1 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                重新拍摄
              </button>
              <button
                onClick={handleAnalyze}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                开始分析
              </button>
            </div>
          </div>
        )}

        {step === "analyzing" && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6" />
            <h2 className="text-xl font-bold text-slate-900 mb-2">AI分析中...</h2>
            <p className="text-slate-600">正在识别口腔健康状况，请稍候</p>
          </div>
        )}

        {step === "error" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-red-600 mb-2">分析失败</h2>
              <p className="text-slate-600">{errorMessage || "分析过程中出现错误，请重试"}</p>
            </div>
            <button
              onClick={() => setStep("preview")}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              返回重试
            </button>
          </div>
        )}

        {step === "result" && analysisResult && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-2">分析完成</h2>
              <p className="text-slate-600">您的口腔健康评估报告已生成</p>
            </div>

            {/* 总分卡片 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
              <p className="text-blue-100 mb-2">口腔健康评分</p>
              <div className="text-5xl font-bold mb-2">{analysisResult.overallScore}</div>
              <p className="text-blue-100">{analysisResult.overallScore >= 80 ? "优秀" : analysisResult.overallScore >= 60 ? "良好" : "需改善"}</p>
            </div>

            {/* 发现问题 */}
            {analysisResult.issues && analysisResult.issues.length > 0 ? (
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">检测到的问题 ({analysisResult.issues.length}个)</h3>
                <div className="space-y-3">
                  {analysisResult.issues.map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                      <div>
                        <p className="font-medium text-slate-900">{issue.type}</p>
                        <p className="text-sm text-slate-600">{issue.location}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        issue.severity === "轻微" ? "bg-green-200 text-green-800" :
                        issue.severity === "轻度" ? "bg-blue-200 text-blue-800" :
                        issue.severity === "中度" ? "bg-amber-200 text-amber-800" :
                        "bg-red-200 text-red-800"
                      }`}>
                        {issue.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🎉 未发现明显问题</h3>
                <p className="text-green-700">您的口腔健康状况良好，请继续保持！</p>
              </div>
            )}

            {/* AI备注 */}
            {analysisResult.notes && (
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600 italic">{analysisResult.notes}</p>
              </div>
            )}

            {/* 建议 */}
            {analysisResult.recommendations && analysisResult.recommendations.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">护理建议</h3>
                <ul className="space-y-3">
                  {analysisResult.recommendations.map((rec, index) => (
                    <li key={index} className="flex gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <Link
                href="/history"
                className="flex-1 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors text-center"
              >
                查看历史
              </Link>
              <button
                onClick={() => {
                  setCapturedImage(null);
                  setAnalysisResult(null);
                  setStep("guide");
                }}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                再次检测
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function GuideItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
        ✓
      </span>
      <span className="text-slate-600">{text}</span>
    </li>
  );
}
