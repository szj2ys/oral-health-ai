import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "牙龈出血怎么办？原因、预防和治疗 - 口腔健康指南",
  description: "牙龈出血是口腔健康的重要警示信号。了解牙龈出血的常见原因、预防方法和治疗方案，使用AI技术在家自测牙龈健康状况。",
  keywords: ["牙龈出血", "牙龈出血怎么办", "牙龈出血原因", "牙龈炎", "预防牙龈出血", "牙龈健康"],
  openGraph: {
    title: "牙龈出血怎么办？原因、预防和治疗",
    description: "了解牙龈出血的常见原因和预防方法，AI智能检测牙龈健康状况",
  },
};

const causes = [
  { title: "牙菌斑堆积", desc: "口腔细菌形成牙菌斑，刺激牙龈导致炎症和出血" },
  { title: "刷牙方式不当", desc: "用力过猛或使用硬毛牙刷损伤牙龈组织" },
  { title: "缺乏维生素", desc: "维生素C和K缺乏会影响牙龈健康和凝血功能" },
  { title: "激素变化", desc: "孕期、青春期激素变化会使牙龈更敏感易出血" },
];

const solutions = [
  { title: "正确刷牙", desc: "使用软毛牙刷，巴氏刷牙法，每天2次，每次2分钟" },
  { title: "使用牙线", desc: "每天使用牙线清洁牙缝，去除牙刷触及不到的牙菌斑" },
  { title: "定期洗牙", desc: "每6-12个月进行一次专业洗牙，去除牙结石" },
  { title: "补充营养", desc: "多吃富含维生素C的水果蔬菜，必要时补充复合维生素" },
];

export default function GumBleedingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-blue-500/30 rounded-full text-sm mb-4">
            口腔健康指南
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            牙龈出血怎么办？
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            牙龈出血是口腔健康的重要警示信号。了解原因、学会预防，
            使用AI技术在家自测牙龈健康状况。
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            免费检测牙龈健康
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-amber-800 mb-1">重要提醒</h2>
              <p className="text-amber-700 text-sm">
                如果牙龈出血持续超过一周，或伴有肿胀、疼痛、口臭等症状，
                建议尽快就医检查，排除牙周病等严重问题。
              </p>
            </div>
          </div>
        </div>

        {/* Causes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">牙龈出血的常见原因</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{cause.title}</h3>
                <p className="text-slate-600 text-sm">{cause.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Detection */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">不确定自己的牙龈状况？</h2>
              <p className="text-blue-100 mb-6">
                使用我们的AI口腔健康检测，只需拍摄口腔照片，
                30秒内获得专业的牙龈健康评估报告。
              </p>
              <ul className="space-y-2 mb-6">
                {["AI智能识别牙龈红肿", "评估牙龈健康程度", "获取个性化护理建议"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-200" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/scan"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                立即免费检测
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center text-6xl">
              🦷
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">如何预防和改善</h2>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{solution.title}</h3>
                  <p className="text-slate-600 text-sm">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When to See Doctor */}
        <section className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-red-800 mb-4">什么时候应该看医生？</h2>
          <ul className="space-y-2 text-red-700">
            <li>• 牙龈出血持续超过1周</li>
            <li>• 牙龈肿胀、疼痛明显</li>
            <li>• 伴有口臭或牙龈萎缩</li>
            <li>• 牙齿松动或咀嚼疼痛</li>
            <li>• 服用血液稀释药物后出血不止</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">常见问题</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">刷牙时牙龈出血正常吗？</h3>
              <p className="text-slate-600 text-sm">
                不正常。健康的牙龈刷牙时不会出血。如果经常出血，说明牙龈已经发炎，需要改善口腔卫生习惯。
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">牙龈出血会自己好吗？</h3>
              <p className="text-slate-600 text-sm">
                轻度牙龈炎通过改善口腔卫生可能会好转，但如果持续出血，建议及时就医，避免发展成牙周炎。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">关注您的牙龈健康</h2>
          <p className="text-slate-600 mb-6">
            定期检测，及早发现问题，守护口腔健康
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/scan"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              开始AI检测
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              查看更多问题
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
