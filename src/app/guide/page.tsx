import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "口腔健康指南 - 牙龈出血、牙结石、牙齿美白",
  description: "全面的口腔健康知识指南，包含牙龈出血、牙结石、牙齿美白等常见问题的解决方案。AI智能检测，守护您的口腔健康。",
  keywords: ["口腔健康指南", "牙龈出血", "牙结石", "牙齿美白", "口腔护理"],
};

const guides = [
  {
    title: "牙龈出血怎么办？",
    desc: "了解牙龈出血的原因、预防方法和治疗方案",
    href: "/guide/gum-bleeding",
    color: "from-red-500 to-red-600",
    icon: "🩸",
  },
  {
    title: "牙齿黄怎么变白？",
    desc: "科学的美白方法和常见误区解析",
    href: "/guide/teeth-whitening",
    color: "from-cyan-500 to-blue-600",
    icon: "✨",
  },
  {
    title: "牙结石怎么去除？",
    desc: "牙结石的形成原因、去除方法和预防技巧",
    href: "/guide/dental-calculus",
    color: "from-amber-500 to-orange-600",
    icon: "🦷",
  },
];

export default function GuideIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            口腔健康指南
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            全面的口腔健康知识，帮助您了解和解决常见口腔问题
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {guide.icon}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">{guide.title}</h2>
              <p className="text-slate-600 text-sm mb-4">{guide.desc}</p>
              <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                阅读指南
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">不确定自己的口腔状况？</h2>
          <p className="text-blue-100 mb-6">
            使用AI技术，30秒获取专业口腔健康评估
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            免费开始检测
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
    </div>
  );
}
