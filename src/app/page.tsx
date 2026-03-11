import Link from "next/link";
import { Camera, FileText, History, Shield, Sparkles, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-slate-900">张二口腔AI</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/scan" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              开始检测
            </Link>
            <Link href="/history" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              历史记录
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" />
            AI驱动的居家口腔健康助手
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            居家口腔健康
            <span className="text-blue-600">AI初筛</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            无需预约，随时随地使用手机拍摄口腔照片，AI智能分析口腔健康状况，
            快速发现潜在的龋齿、牙龈问题等口腔健康隐患。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/scan"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              <Camera className="w-5 h-5" />
              立即开始检测
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors"
            >
              了解工作原理
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4" id="features">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">核心功能</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Camera className="w-6 h-6 text-blue-600" />}
              title="智能拍照引导"
              description="实时引导用户调整拍摄角度和光线，确保获取清晰有效的口腔照片"
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-purple-600" />}
              title="AI智能分析"
              description="基于深度学习的多模态AI模型，识别龋齿、牙龈炎、牙结石等常见口腔问题"
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6 text-green-600" />}
              title="专业健康报告"
              description="生成详细的健康评估报告，包含问题分析和护理建议"
            />
            <FeatureCard
              icon={<History className="w-6 h-6 text-orange-600" />}
              title="健康档案追踪"
              description="建立个人口腔健康档案，长期追踪健康变化趋势"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-red-600" />}
              title="隐私安全保护"
              description="端到端加密存储，严格遵守医疗数据隐私保护规范"
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-cyan-600" />}
              title="专业医生对接"
              description="发现严重问题时，可快速预约专业口腔医生进行进一步诊疗"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-slate-100" id="how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">使用流程</h2>
          <div className="space-y-8">
            <Step number={1} title="拍摄口腔照片" description="按照引导拍摄多张口腔不同角度的清晰照片" />
            <Step number={2} title="AI智能分析" description="上传照片后，AI模型自动分析口腔健康状况" />
            <Step number={3} title="查看健康报告" description="获取详细的口腔健康评估报告和护理建议" />
            <Step number={4} title="追踪与跟进" description="定期复查，追踪口腔健康变化，必要时预约医生" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">开始关注您的口腔健康</h2>
          <p className="text-slate-600 mb-8">仅需几分钟，即可获取专业的口腔健康初筛结果</p>
          <Link
            href="/scan"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            <Camera className="w-5 h-5" />
            免费开始检测
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            *本工具仅供参考，不能替代专业医生的诊断
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-slate-400" />
            <span className="text-sm text-slate-600">张二口腔AI © 2024</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-700">隐私政策</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-700">用户协议</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-700">联系我们</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
