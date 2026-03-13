import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "牙齿黄怎么变白？美白方法与误区 - 口腔健康指南",
  description: "牙齿发黄影响自信？了解牙齿变色的原因、科学的美白方法和常见误区。使用AI检测牙齿状况，获取个性化美白建议。",
  keywords: ["牙齿美白", "牙齿黄怎么办", "牙齿变白方法", "牙渍去除", "美白牙齿", "牙齿黄原因"],
  openGraph: {
    title: "牙齿黄怎么变白？科学美白方法与误区",
    description: "了解牙齿变黄的原因和科学美白方法，AI智能检测牙齿状况",
  },
};

const causes = [
  { title: "食物色素", desc: "咖啡、茶、红酒、可乐等深色饮料容易在牙齿表面留下色素" },
  { title: "吸烟", desc: "烟草中的尼古丁和焦油会附着在牙齿表面，形成难以去除的黄渍" },
  { title: "口腔卫生不良", desc: "牙菌斑和牙结石堆积会使牙齿看起来发黄" },
  { title: "年龄增长", desc: "牙釉质随年龄变薄，露出里面黄色的牙本质" },
];

const methods = [
  { title: "正确刷牙", desc: "使用美白牙膏，每天刷牙2次，每次2分钟，重点清洁牙缝" },
  { title: "定期洗牙", desc: "每6个月洗牙一次，去除牙结石和表面色素" },
  { title: "减少染色食物", desc: "减少咖啡、茶、红酒的摄入，或用吸管饮用" },
  { title: "戒烟", desc: "戒烟是改善牙齿颜色的最有效方法之一" },
];

const myths = [
  { myth: "柠檬汁可以美白牙齿", fact: "柠檬汁酸性太强，会腐蚀牙釉质，反而伤害牙齿" },
  { myth: "小苏打刷牙效果好", fact: "过度使用会磨损牙釉质，建议偶尔使用" },
  { myth: "美白牙膏可以大幅美白", fact: "只能去除表面轻微色素，对深层变色效果有限" },
];

export default function TeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            口腔健康指南
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            牙齿黄怎么变白？
          </h1>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto mb-8">
            了解牙齿变色的原因、科学的美白方法，避开常见误区。
            使用AI技术检测牙齿状况，获取个性化建议。
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
          >
            免费检测牙齿状况
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Causes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">牙齿变黄的常见原因</h2>
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
        <section className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">AI检测牙齿状况</h2>
              <p className="text-cyan-100 mb-6">
                拍摄牙齿照片，AI智能分析牙齿颜色、牙渍情况，
                评估是否需要专业美白处理。
              </p>
              <Link
                href="/scan"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
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

        {/* Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">科学的美白方法</h2>
          <div className="space-y-4">
            {methods.map((method, index) => (
              <div key={index} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                  <p className="text-slate-600 text-sm">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Myths vs Facts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">美白误区 vs 真相</h2>
          <div className="space-y-4">
            {myths.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-500 font-semibold text-sm">误区</span>
                  <p className="text-slate-900">{item.myth}</p>
                </div>
                <div className="flex items-start gap-3 pl-2 border-l-2 border-green-400">
                  <span className="text-green-600 font-semibold text-sm">真相</span>
                  <p className="text-slate-600 text-sm">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">了解您的牙齿状况</h2>
          <p className="text-slate-600 mb-6">
            AI智能检测，获取个性化牙齿护理建议
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors"
          >
            开始AI检测
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
    </div>
  );
}
