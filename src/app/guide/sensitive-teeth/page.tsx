import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "牙齿敏感怎么办？冷热酸甜都酸痛的原因与缓解方法",
  description:
    "了解牙齿敏感的成因、症状和有效治疗方法。学习如何缓解冷热酸甜引起的牙齿酸痛，选择适合的抗敏感牙膏，保护牙釉质健康。",
  keywords: [
    "牙齿敏感",
    "牙齿酸痛",
    "冷热敏感",
    "牙本质过敏",
    "抗敏感牙膏",
    "牙齿敏感怎么办",
    "牙釉质修复",
    "牙齿敏感治疗",
  ],
  alternates: {
    canonical: "/guide/sensitive-teeth/",
  },
  openGraph: {
    title: "牙齿敏感怎么办？冷热酸甜都酸痛的原因与缓解方法",
    description: "了解牙齿敏感的成因、症状和有效治疗方法。",
    url: "/guide/sensitive-teeth/",
    type: "article",
  },
};

export default function SensitiveTeethPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="牙齿敏感怎么办？冷热酸甜都酸痛的原因与缓解方法"
        description="了解牙齿敏感的成因、症状和有效治疗方法。"
        url="/guide/sensitive-teeth/"
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
              牙齿敏感怎么办？冷热酸甜都酸痛的原因与缓解方法
            </h1>
            <p className="text-slate-600 text-lg">
              牙齿敏感是常见的口腔问题，很多人在吃冷饮、热食或甜食时会感到短暂而尖锐的酸痛。本文详解牙齿敏感的原因和解决方案。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#symptoms" className="text-blue-600 hover:underline">牙齿敏感的症状</a></li>
              <li><a href="#causes" className="text-blue-600 hover:underline">牙齿敏感的原因</a></li>
              <li><a href="#treatment" className="text-blue-600 hover:underline">治疗方法与缓解措施</a></li>
              <li><a href="#prevention" className="text-blue-600 hover:underline">如何预防牙齿敏感</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="symptoms" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">牙齿敏感的症状</h2>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-semibold text-amber-900 mb-3">典型表现</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>吃冷饮、冰淇淋时感到尖锐刺痛</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>喝热茶、热汤时牙齿酸痛不适</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>进食柠檬、醋等酸性食物时敏感</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>吃甜食时牙齿短暂酸痛</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>冷空气吸入时牙齿不适</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>刷牙时接触某些部位有刺痛感</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm mt-4">
                <strong>注意：</strong>牙齿敏感引起的疼痛通常是短暂的刺激痛，刺激去除后疼痛很快消失。如果疼痛持续，可能是蛀牙或牙髓炎，需要及时就医。
              </p>
            </div>
          </section>

          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">牙齿敏感的原因</h2>
            <p className="text-slate-600 mb-4">
              牙齿敏感主要是由于牙本质暴露引起。牙本质含有微细小管，直接通向牙髓神经，当小管暴露时，外界刺激就会引起酸痛。
            </p>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">🦷 牙釉质磨损</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 横向用力刷牙导致楔状缺损</li>
                  <li>• 使用硬毛牙刷过度清洁</li>
                  <li>• 长期磨牙（夜磨牙症）</li>
                  <li>• 频繁食用酸性食物腐蚀牙釉质</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">🔴 牙龈退缩</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 牙周炎导致牙龈萎缩</li>
                  <li>• 刷牙方式不当损伤牙龈</li>
                  <li>• 年龄增长自然退缩</li>
                  <li>• 牙齿排列不齐导致局部牙龈薄</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">⚡ 其他原因</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 牙齿美白治疗后暂时敏感</li>
                  <li>• 补牙、洗牙后短期敏感</li>
                  <li>• 牙齿隐裂</li>
                  <li>• 胃酸反流腐蚀牙齿</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">治疗方法与缓解措施</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">居家护理</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">1</span>
                    <div>
                      <p className="font-medium text-slate-900">使用抗敏感牙膏</p>
                      <p className="text-slate-600 text-sm">含硝酸钾或氟化亚锡的牙膏可封闭牙本质小管。需持续使用2-4周见效。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">2</span>
                    <div>
                      <p className="font-medium text-slate-900">正确刷牙方法</p>
                      <p className="text-slate-600 text-sm">使用软毛牙刷，45度角轻柔刷牙，避免横向用力刷。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">3</span>
                    <div>
                      <p className="font-medium text-slate-900">含氟漱口水</p>
                      <p className="text-slate-600 text-sm">使用含氟漱口水强化牙釉质，减少敏感。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">4</span>
                    <div>
                      <p className="font-medium text-slate-900">避免刺激</p>
                      <p className="text-slate-600 text-sm">暂时避免过冷过热、酸性食物和甜食。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">专业治疗</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li><strong>脱敏治疗：</strong>医生使用专业脱敏剂封闭牙本质小管</li>
                  <li><strong>涂氟：</strong>高浓度氟化物强化牙釉质</li>
                  <li><strong>树脂充填：</strong>修复楔状缺损部位</li>
                  <li><strong>牙龈手术：</strong>严重牙龈退缩可进行牙龈移植</li>
                  <li><strong>牙冠修复：</strong>严重磨损牙齿做全冠保护</li>
                  <li><strong>治疗夜磨牙：</strong>佩戴咬合垫保护牙齿</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="prevention" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">如何预防牙齿敏感</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">正确刷牙</h3>
                <p className="text-slate-600 text-sm">使用软毛牙刷，巴氏刷牙法，轻柔施力，避免横向拉锯式刷牙。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">使用含氟牙膏</h3>
                <p className="text-slate-600 text-sm">选择含氟牙膏，帮助强化牙釉质，增强牙齿抗酸能力。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">控制酸性食物</h3>
                <p className="text-slate-600 text-sm">减少碳酸饮料、柑橘类水果摄入，食用后漱口，30分钟后再刷牙。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">定期洗牙</h3>
                <p className="text-slate-600 text-sm">每6-12个月洗牙，预防牙周病导致的牙龈退缩。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">治疗夜磨牙</h3>
                <p className="text-slate-600 text-sm">如有磨牙习惯，及时佩戴咬合垫，防止牙釉质过度磨损。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">定期检查</h3>
                <p className="text-slate-600 text-sm">每6个月口腔检查，早期发现问题，早期干预。</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI智能口腔检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                不确定牙齿敏感的原因？AI分析口腔照片，识别牙龈退缩、牙釉质磨损等问题，提供个性化护理建议。
              </p>
              <Link
                href="/scan/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Camera className="w-4 h-4" />
                免费检测口腔健康
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <section id="faq" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">常见问题解答</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  抗敏感牙膏多久能见效？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  一般需要持续使用2-4周才能感受到明显效果。使用时应将牙膏直接涂抹在敏感部位，停留1-2分钟后再刷牙，效果更佳。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  洗牙后牙齿敏感正常吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  是正常的。洗牙后牙结石被清除，牙龈消肿，原本被牙结石覆盖的牙根暴露，可能会出现短暂敏感。通常1-2周内会自行缓解，可使用抗敏感牙膏加速恢复。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  牙齿敏感可以做美白吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  建议先治疗敏感问题再做美白。美白剂会加剧牙齿敏感，可能导致强烈不适。可先使用抗敏感牙膏2-4周，或咨询医生进行专业脱敏治疗后再考虑美白。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  牙齿敏感会自愈吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  轻度敏感通过改善刷牙方式、使用抗敏感产品可能缓解。但牙釉质一旦磨损无法再生，严重的牙龈退缩也不会自行恢复。建议及早就医，防止情况恶化。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  为什么只有某颗牙齿敏感？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  单颗牙齿敏感可能原因：1) 该牙有楔状缺损；2) 该位置牙龈局部退缩；3) 牙齿隐裂；4) 该牙曾接受过治疗。建议重点检查这颗牙齿，可能需要针对性治疗。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">蛀牙的形成与治疗方法</p>
              </Link>
              <Link href="/guide/gum-bleeding/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈出血</h3>
                <p className="text-sm text-slate-600">牙龈出血的原因与护理</p>
              </Link>
              <Link href="/guide/teeth-whitening/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙齿美白</h3>
                <p className="text-sm text-slate-600">安全美白方法与注意事项</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
