import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "夜磨牙怎么办？原因、危害与治疗方法",
  description:
    "了解夜间磨牙的原因、危害和有效治疗方法。学习如何保护牙齿免受磨牙损伤，改善睡眠质量，缓解颞下颌关节压力。",
  keywords: [
    "夜磨牙",
    "磨牙",
    "磨牙怎么办",
    "磨牙治疗",
    "咬合垫",
    "颞下颌关节",
    "磨牙原因",
    "夜间磨牙",
  ],
  alternates: {
    canonical: "/guide/teeth-grinding/",
  },
  openGraph: {
    title: "夜磨牙怎么办？原因、危害与治疗方法",
    description: "了解夜间磨牙的原因、危害和有效治疗方法。",
    url: "/guide/teeth-grinding/",
    type: "article",
  },
};

export default function TeethGrindingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="夜磨牙怎么办？原因、危害与治疗方法"
        description="了解夜间磨牙的原因、危害和有效治疗方法。"
        url="/guide/teeth-grinding/"
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
              夜磨牙怎么办？原因、危害与治疗方法
            </h1>
            <p className="text-slate-600 text-lg">
              夜磨牙（睡眠相关磨牙症）困扰着很多人，长期磨牙会严重损伤牙齿和颞下颌关节。本文详解磨牙的成因、危害和科学应对方法。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#symptoms" className="text-blue-600 hover:underline">磨牙的症状与表现</a></li>
              <li><a href="#causes" className="text-blue-600 hover:underline">磨牙的原因</a></li>
              <li><a href="#harm" className="text-blue-600 hover:underline">磨牙的危害</a></li>
              <li><a href="#treatment" className="text-blue-600 hover:underline">治疗方法</a></li>
              <li><a href="#prevention" className="text-blue-600 hover:underline">预防与缓解</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="symptoms" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">磨牙的症状与表现</h2>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-semibold text-amber-900 mb-3">如何判断自己有磨牙</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-slate-900 text-sm">夜间表现</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 伴侣反映夜间有磨牙声</li>
                    <li>• 晨起面部肌肉酸痛</li>
                    <li>• 早晨起床时头痛</li>
                    <li>• 睡眠质量差，易醒</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">牙齿表现</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 牙齿表面磨耗变平</li>
                    <li>• 牙釉质磨损，牙本质暴露</li>
                    <li>• 牙齿敏感</li>
                    <li>• 牙齿出现裂纹或崩缺</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">磨牙的原因</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-slate-900">主要因素</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>精神压力：</strong>焦虑、紧张、压力是最常见诱因</li>
                  <li>• <strong>睡眠障碍：</strong>睡眠呼吸暂停、睡眠片段化</li>
                  <li>• <strong>咬合因素：</strong>牙齿排列不齐、咬合不平衡</li>
                  <li>• <strong>遗传因素：</strong>家族中有磨牙史</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">其他因素</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>药物影响：</strong>某些抗抑郁药可能引起磨牙</li>
                  <li>• <strong>生活习惯：</strong>吸烟、饮酒、咖啡因摄入</li>
                  <li>• <strong>神经系统：</strong>帕金森病、脑损伤等</li>
                  <li>• <strong>营养缺乏：</strong>镁、钙缺乏可能与磨牙相关</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="harm" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">磨牙的危害</h2>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">牙齿损害</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 牙釉质严重磨损</li>
                    <li>• 牙齿变短、变敏感</li>
                    <li>• 牙冠裂纹、崩缺</li>
                    <li>• 牙髓暴露，需根管治疗</li>
                    <li>• 牙齿松动甚至脱落</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">其他危害</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 颞下颌关节疼痛</li>
                    <li>• 咀嚼肌肥大、酸痛</li>
                    <li>• 张口受限</li>
                    <li>• 晨起头痛</li>
                    <li>• 影响睡眠质量</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">治疗方法</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">首选治疗：咬合垫</h3>
                <p className="text-slate-700 text-sm mb-3">
                  咬合垫（磨牙垫）是目前最有效的保护方法，由医生定制，夜间佩戴。
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 分散咬合力，保护牙齿</li>
                  <li>• 缓解颞下颌关节压力</li>
                  <li>• 软垫和硬垫两种类型</li>
                  <li>• 需定期更换（6-12个月）</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">其他治疗</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">牙科治疗</p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• 调颌（调整咬合）</li>
                      <li>• 正畸治疗</li>
                      <li>• 修复磨损牙齿</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">医学治疗</p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• 肉毒素注射（严重病例）</li>
                      <li>• 治疗睡眠呼吸暂停</li>
                      <li>• 心理咨询</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="prevention" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">预防与缓解方法</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">减压放松</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 睡前冥想、深呼吸</li>
                  <li>• 规律运动</li>
                  <li>• 热水澡放松</li>
                  <li>• 避免睡前过度兴奋</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">生活习惯</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 减少咖啡因摄入</li>
                  <li>• 戒烟限酒</li>
                  <li>• 避免睡前大量进食</li>
                  <li>• 规律作息</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">物理缓解</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 热敷咀嚼肌</li>
                  <li>• 面部按摩</li>
                  <li>• 张口训练</li>
                  <li>• 避免紧咬牙</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">营养补充</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 补充镁、钙</li>
                  <li>• 维生素D</li>
                  <li>• 均衡饮食</li>
                  <li>• 必要时遵医嘱补充</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI检测牙齿磨损</h3>
              <p className="text-blue-100 mb-4 text-sm">
                担心磨牙已经损伤牙齿？使用AI口腔检测，评估牙齿磨损程度，及早发现问题。
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
                  磨牙垫需要戴多久？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  通常需要长期佩戴。有些人随着年龄增长或压力减轻，磨牙会自然减少，可以逐渐停用。建议定期复查，根据牙齿状况和症状决定是否需要继续佩戴。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  磨牙能治好吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  磨牙很难完全&quot;治愈&quot;，但可以有效控制。通过减压、佩戴咬合垫等方法，可以减少磨牙频率和强度，保护牙齿免受损伤。关键是找到诱因并针对性处理。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  药店买的磨牙垫能用吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  临时可以使用，但不建议长期用。成品磨牙垫与牙齿贴合度差，可能影响舒适度、咬合和颞下颌关节。建议在牙医处定制个性化咬合垫，效果更好。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  儿童磨牙需要治疗吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  儿童磨牙较常见，乳牙期和换牙期可能随生长发育自然消失。但如果磨损严重、影响睡眠或有其他症状，应就医评估。可考虑儿童专用咬合垫保护恒牙。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">牙齿磨损后保护</p>
              </Link>
              <Link href="/guide/sensitive-teeth/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙齿敏感</h3>
                <p className="text-sm text-slate-600">磨损导致的敏感</p>
              </Link>
              <Link href="/guide/children-oral-health/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">儿童口腔</h3>
                <p className="text-sm text-slate-600">儿童磨牙护理</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
