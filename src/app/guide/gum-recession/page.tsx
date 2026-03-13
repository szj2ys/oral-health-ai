import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "牙龈萎缩怎么办？原因、治疗与恢复方法",
  description:
    "了解牙龈萎缩的原因、症状、治疗方法和预防措施。学习如何减缓牙龈退缩、保护牙根暴露，维护牙周健康。",
  keywords: [
    "牙龈萎缩",
    "牙龈退缩",
    "牙根暴露",
    "牙龈萎缩治疗",
    "牙龈萎缩恢复",
    "牙周炎",
    "牙龈萎缩怎么办",
    "牙周病",
  ],
  alternates: {
    canonical: "/guide/gum-recession/",
  },
  openGraph: {
    title: "牙龈萎缩怎么办？原因、治疗与恢复方法",
    description: "了解牙龈萎缩的原因、症状、治疗方法和预防措施。",
    url: "/guide/gum-recession/",
    type: "article",
  },
};

export default function GumRecessionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="牙龈萎缩怎么办？原因、治疗与恢复方法"
        description="了解牙龈萎缩的原因、症状、治疗方法和预防措施。"
        url="/guide/gum-recession/"
        publishedAt="2024-03-13"
        modifiedAt="2024-03-13"
      />

      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link href="/guide/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回指南</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <header className="mb-8">
            <div className="text-sm text-blue-600 font-medium mb-2">口腔健康指南</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              牙龈萎缩怎么办？原因、治疗与恢复方法
            </h1>
            <p className="text-slate-600 text-lg">
              牙龈萎缩是牙周健康的重要警示信号，会导致牙根暴露、牙齿敏感甚至牙齿松动。本文详解牙龈萎缩的成因、治疗和预防方法。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#symptoms" className="text-blue-600 hover:underline">牙龈萎缩的症状</a></li>
              <li><a href="#causes" className="text-blue-600 hover:underline">形成原因</a></li>
              <li><a href="#treatment" className="text-blue-600 hover:underline">治疗方法</a></li>
              <li><a href="#prevention" className="text-blue-600 hover:underline">预防措施</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="symptoms" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">牙龈萎缩的症状</h2>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-semibold text-amber-900 mb-3">早期识别信号</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>牙齿看起来变长</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>牙根暴露，呈黄色</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>牙齿对冷热酸甜敏感</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>牙龈边缘呈V型缺损（楔形缺损）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>牙缝变大，容易塞牙</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>牙龈红肿、出血</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">牙龈萎缩的形成原因</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-slate-900">牙周疾病（最常见）</h3>
                <p className="text-slate-600 text-sm mt-2">
                  牙周炎导致牙槽骨吸收，牙龈随之退缩。这是成年人牙龈萎缩的主要原因，需及时治疗。
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">刷牙方式不当</h3>
                <p className="text-slate-600 text-sm mt-2">
                  横向用力刷牙、使用硬毛牙刷会造成机械性牙龈损伤，导致牙龈退缩和楔状缺损。
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-slate-900">其他原因</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>遗传因素：</strong>天生牙龈薄、牙槽骨浅</li>
                  <li>• <strong>牙齿错位：</strong>牙齿排列不齐导致局部牙龈薄弱</li>
                  <li>• <strong>咬合创伤：</strong>不正常的咬合力损伤牙周组织</li>
                  <li>• <strong>不良习惯：</strong>磨牙、咬硬物等</li>
                  <li>• <strong>激素变化：</strong>孕期、更年期激素波动</li>
                  <li>• <strong>吸烟：</strong>影响牙周血液循环</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">治疗方法</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">基础治疗</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li><strong>洗牙：</strong>清除牙结石，控制牙龈炎症</li>
                  <li><strong>牙周治疗：</strong>龈下刮治，清除牙周袋内菌斑</li>
                  <li><strong>根面平整：</strong>光滑暴露的牙根表面</li>
                  <li><strong>改正刷牙方法：</strong>学习正确刷牙技巧</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">手术治疗</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li><strong>牙龈移植手术：</strong>从腭部取结缔组织移植到退缩部位</li>
                  <li><strong>游离龈移植：</strong>增加牙龈厚度，防止进一步退缩</li>
                  <li><strong>引导组织再生：</strong>促进牙周组织再生</li>
                  <li><strong>正畸治疗：</strong>矫正错位牙齿，改善咬合</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-3">修复治疗</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li><strong>脱敏治疗：</strong>缓解牙根敏感症状</li>
                  <li><strong>树脂充填：</strong>修复楔状缺损</li>
                  <li><strong>牙冠修复：</strong>严重缺损牙齿做全冠保护</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="prevention" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">如何预防牙龈萎缩</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">正确刷牙</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 使用软毛牙刷</li>
                  <li>• 巴氏刷牙法</li>
                  <li>• 轻柔施力</li>
                  <li>• 避免横向拉锯</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">定期护理</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 每6个月洗牙</li>
                  <li>• 定期检查牙周</li>
                  <li>• 每天使用牙线</li>
                  <li>• 漱口水辅助</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">生活习惯</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 戒烟</li>
                  <li>• 治疗磨牙</li>
                  <li>• 避免咬硬物</li>
                  <li>• 均衡饮食</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">早期干预</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 发现牙龈出血及时就医</li>
                  <li>• 矫正错位牙齿</li>
                  <li>• 治疗咬合问题</li>
                  <li>• 定期牙周检查</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI口腔健康检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                担心牙龈健康？AI分析口腔照片，识别牙龈退缩、红肿等牙周问题，及早发现及早治疗。
              </p>
              <Link
                href="/scan/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Camera className="w-4 h-4" />
                免费检测口腔
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <section id="faq" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">常见问题解答</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  牙龈萎缩可以恢复吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  轻度萎缩通过改善刷牙方式可能稳定，但已退缩的牙龈不会自行长回。中度以上萎缩可通过牙龈移植手术改善，但无法完全恢复到原始状态。关键是要及早发现、及早治疗，防止进一步恶化。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  牙龈萎缩手术痛苦吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  手术在局部麻醉下进行，过程中无痛。术后可能有轻微不适，医生会开具止痛药。腭部取牙龈处可能有几天的异物感，一般1-2周恢复。相比长期的牙齿健康，手术带来的不适是可以接受的。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  牙龈萎缩必须手术吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  不一定。轻度萎缩且稳定、无美观需求、无症状者可以观察。但以下情况建议手术：持续进展的退缩、严重影响美观、牙根敏感严重影响生活、牙根已有缺损。需医生评估后决定。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  年轻人也会牙龈萎缩吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  会。虽然牙龈萎缩多见于中老年人，但年轻人因刷牙方式不当、牙周炎、咬合问题等也可能发生。如果发现牙齿变长、牙根暴露，无论年龄都应及早就医。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/gum-bleeding/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈出血</h3>
                <p className="text-sm text-slate-600">牙龈炎的症状与治疗</p>
              </Link>
              <Link href="/guide/dental-calculus/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙结石</h3>
                <p className="text-sm text-slate-600">牙结石的形成与清除</p>
              </Link>
              <Link href="/guide/sensitive-teeth/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙齿敏感</h3>
                <p className="text-sm text-slate-600">牙根敏感的护理</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
