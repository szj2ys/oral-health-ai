import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "牙结石怎么去除？预防与清除方法 - 口腔健康指南",
  description: "牙结石是牙菌斑钙化形成的硬块，会导致牙龈炎和口臭。了解牙结石的形成原因、去除方法和预防措施，AI检测帮助您及早发现。",
  keywords: ["牙结石", "牙结石去除", "牙结石怎么去除", "牙菌斑", "洗牙", "预防牙结石"],
  openGraph: {
    title: "牙结石怎么去除？预防与清除方法",
    description: "了解牙结石的形成原因和去除方法，AI智能检测口腔状况",
  },
};

export default function DentalCalculusPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-600 to-orange-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            口腔健康指南
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            牙结石怎么去除？
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-8">
            牙结石是牙菌斑钙化形成的硬块，会导致牙龈炎和口臭。
            了解去除方法和预防措施，AI检测帮助及早发现。
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-colors shadow-lg"
          >
            免费检测口腔状况
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* What is */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">什么是牙结石？</h2>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-slate-700 mb-4">
              牙结石（又称牙石）是牙菌斑长期堆积后钙化形成的硬质沉积物，通常呈黄色或棕色，质地坚硬，无法通过刷牙去除。
            </p>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                牙结石的危害
              </h3>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• 刺激牙龈，导致牙龈炎和牙龈出血</li>
                <li>• 滋生细菌，引起口臭</li>
                <li>• 长期不清理会发展成牙周病</li>
                <li>• 导致牙龈萎缩、牙齿松动</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">牙结石是怎么形成的？</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { step: "1", title: "牙菌斑堆积", desc: "食物残渣和细菌形成软垢" },
              { step: "2", title: "矿化开始", desc: "唾液中的钙质沉积在菌斑上" },
              { step: "3", title: "形成结石", desc: "24-72小时后形成硬质牙结石" },
              { step: "4", title: "持续堆积", desc: "不及时清理会越来越厚" },
            ].map((item, index) => (
              <div key={index} className="flex-1 bg-white rounded-xl p-5 border border-slate-200">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Removal */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">如何去除牙结石？</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">🦷 专业洗牙（最有效）</h3>
              <p className="text-slate-600 text-sm mb-2">
                牙结石一旦形成，必须通过超声波洗牙才能彻底清除。建议每6-12个月洗牙一次。
              </p>
              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded">推荐</span>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">🪥 预防性措施</h3>
              <p className="text-slate-600 text-sm">
                虽然刷牙不能去除已形成的牙结石，但可以预防新的结石形成。每天刷牙2次，使用牙线，减少牙菌斑堆积。
              </p>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">如何预防牙结石？</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "正确刷牙", desc: "巴氏刷牙法，每次2分钟，重点清洁牙龈沟" },
              { title: "使用牙线", desc: "每天使用牙线清洁牙缝，去除牙刷够不到的地方" },
              { title: "定期洗牙", desc: "每6-12个月专业洗牙一次" },
              { title: "漱口水辅助", desc: "使用抗菌漱口水，减少口腔细菌" },
              { title: "饮食注意", desc: "减少高糖食物，多喝水" },
              { title: "戒烟限酒", desc: "烟酒会加速牙结石形成" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Detection CTA */}
        <section className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">AI检测牙结石</h2>
            <p className="text-amber-100 mb-6">
              拍摄口腔照片，AI智能识别牙结石、牙菌斑等口腔问题
            </p>
            <Link
              href="/scan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
            >
              免费检测
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">常见问题</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">牙结石可以自己抠掉吗？</h3>
              <p className="text-slate-600 text-sm">
                不建议。牙结石非常坚硬，自己抠可能会损伤牙龈和牙釉质，甚至导致感染。应该去专业牙科诊所洗牙。
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">洗牙会伤害牙齿吗？</h3>
              <p className="text-slate-600 text-sm">
                不会。正规洗牙不会损伤牙齿，反而能保护牙龈健康。洗牙后可能会有短暂敏感，通常1-2天就会恢复。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors"
          >
            开始AI口腔检测
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
    </div>
  );
}
