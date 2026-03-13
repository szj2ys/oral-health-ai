import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "口臭怎么解决？原因分析与有效改善方法",
  description:
    "了解口臭的常见原因、自我检测方法和有效改善方案。学习如何消除口腔异味，恢复清新口气，提升社交自信。",
  keywords: [
    "口臭",
    "口气重",
    "口臭原因",
    "口臭治疗",
    "口腔异味",
    "清新口气",
    "口臭怎么办",
    "去口臭方法",
  ],
  alternates: {
    canonical: "/guide/bad-breath/",
  },
  openGraph: {
    title: "口臭怎么解决？原因分析与有效改善方法",
    description: "了解口臭的常见原因、自我检测方法和有效改善方案。",
    url: "/guide/bad-breath/",
    type: "article",
  },
};

export default function BadBreathPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="口臭怎么解决？原因分析与有效改善方法"
        description="了解口臭的常见原因、自我检测方法和有效改善方案。"
        url="/guide/bad-breath/"
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
              口臭怎么解决？原因分析与有效改善方法
            </h1>
            <p className="text-slate-600 text-lg">
              口臭（halitosis）困扰着很多人，却常被忽视。本文深入分析口臭的各种成因，提供科学有效的解决方案，帮助您重获清新口气。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#causes" className="text-blue-600 hover:underline">口臭的主要原因</a></li>
              <li><a href="#self-check" className="text-blue-600 hover:underline">如何自我检测口臭</a></li>
              <li><a href="#solutions" className="text-blue-600 hover:underline">改善口臭的方法</a></li>
              <li><a href="#when-to-see-doctor" className="text-blue-600 hover:underline">何时需要就医</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">口臭的主要原因</h2>
            <p className="text-slate-600 mb-4">口臭约80%-90%来自口腔本身，少数由全身性疾病引起：</p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">口腔源性原因（最常见）</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>舌苔堆积：</strong>舌头背面的细菌和食物残渣是口臭主要来源</li>
                  <li>• <strong>牙周疾病：</strong>牙龈炎、牙周炎导致牙周袋内细菌繁殖</li>
                  <li>• <strong>龋齿：</strong>蛀牙洞内腐败的食物残渣产生异味</li>
                  <li>• <strong>食物嵌塞：</strong>牙缝中的食物被细菌分解产生硫化物</li>
                  <li>• <strong>口干：</strong>唾液减少降低口腔自洁能力</li>
                  <li>• <strong>不良修复体：</strong>不合适的假牙、牙套容易积存食物</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-slate-900">非口腔原因</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>饮食因素：</strong>大蒜、洋葱、咖喱等气味强烈的食物</li>
                  <li>• <strong>扁桃体结石：</strong>扁桃体隐窝内的钙化物质</li>
                  <li>• <strong>鼻窦炎：</strong>鼻腔分泌物倒流至咽喉</li>
                  <li>• <strong>胃肠道问题：</strong>反流性食管炎、幽门螺杆菌感染</li>
                  <li>• <strong>全身性疾病：</strong>糖尿病（烂苹果味）、肝肾疾病、肺部感染</li>
                  <li>• <strong>药物因素：</strong>某些药物导致口干作为副作用</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="self-check" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">如何自我检测口臭</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">方法一：手腕测试</h3>
                <p className="text-slate-600 text-sm">舔一下手腕内侧，等待5-10秒后闻气味，如果有异味说明可能有口臭。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">方法二：牙线测试</h3>
                <p className="text-slate-600 text-sm">用牙线清洁牙缝后闻牙线味道，能反映牙缝内的气味状况。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">方法三：勺子测试</h3>
                <p className="text-slate-600 text-sm">用勺子刮几下舌头后部，等待几秒后闻勺子上的残留物。</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">方法四：AI检测</h3>
                <p className="text-slate-600 text-sm">使用口腔AI检测工具，分析舌苔、牙龈等整体口腔健康状况。</p>
              </div>
            </div>
          </section>

          <section id="solutions" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">改善口臭的方法</h2>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">日常护理（立即可做）</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">1</span>
                    <p className="text-slate-700 text-sm"><strong>刷舌苔：</strong>每天用舌刷或牙刷背面清洁舌头，特别是舌根部</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">2</span>
                    <p className="text-slate-700 text-sm"><strong>正确刷牙：</strong>巴氏刷牙法，每次至少2分钟，覆盖所有牙面</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">3</span>
                    <p className="text-slate-700 text-sm"><strong>使用牙线：</strong>每天清理牙缝，去除牙刷无法触及的食物残渣</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">4</span>
                    <p className="text-slate-700 text-sm"><strong>漱口水：</strong>使用含氯己定或精油的漱口水（不宜长期连续使用）</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">5</span>
                    <p className="text-slate-700 text-sm"><strong>多喝水：</strong>保持口腔湿润，促进唾液分泌</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">6</span>
                    <p className="text-slate-700 text-sm"><strong>嚼无糖口香糖：</strong>刺激唾液分泌，快速改善口气</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">专业治疗（针对病因）</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• <strong>洗牙：</strong>清除牙结石和牙菌斑，治疗牙龈炎</li>
                  <li>• <strong>补牙：</strong>治疗龋齿，清除腐败组织</li>
                  <li>• <strong>牙周治疗：</strong>深度清洁牙周袋，控制牙周病</li>
                  <li>• <strong>治疗基础病：</strong>如鼻窦炎、胃食管反流等</li>
                  <li>• <strong>调整用药：</strong>在医生指导下更换导致口干的药物</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="when-to-see-doctor" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">何时需要就医</h2>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-3">建议尽快就诊的情况</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-600">⚠️</span>
                  口臭持续存在，日常护理无法改善
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">⚠️</span>
                  伴有牙龈出血、牙齿松动等牙周症状
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">⚠️</span>
                  口干症状严重，唾液分泌明显减少
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">⚠️</span>
                  口臭气味特殊（如烂苹果味、尿味、甜味）
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">⚠️</span>
                  伴有胃痛、反酸、鼻塞等其他症状
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">检测口腔健康状况</h3>
              <p className="text-blue-100 mb-4 text-sm">
                不确定口臭原因？使用AI口腔检测，快速分析牙龈、舌苔等口腔健康状况，找到问题根源。
              </p>
              <Link
                href="/scan/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Camera className="w-4 h-4" />
                免费口腔检测
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <section id="faq" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">常见问题解答</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  为什么刷牙后还是有口臭？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  可能是因为：1) 没有刷舌苔；2) 牙缝没有清洁干净；3) 存在牙周疾病；4) 非口腔原因如鼻窦炎、胃部问题。建议全面检查，找到根本原因。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  漱口水能长期每天使用吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  含氯己定的治疗性漱口水不建议长期使用（一般不超过2周），可能导致牙齿染色和味觉改变。日常可使用不含酒精的保健型漱口水，但仍要以机械清洁（刷牙、牙线）为主。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  口臭会传染吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  口臭本身不会传染，但导致口臭的细菌（如引起牙周病的细菌）可能通过共用餐具、亲吻等方式传播。保持良好的个人卫生习惯可以减少细菌传播。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  早晨起床口气重正常吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  晨起口气较重是正常的生理现象。夜间唾液分泌减少，口腔自洁作用减弱，细菌活动增加。刷牙、喝水或吃早餐后通常会改善。如果清洁后仍有明显异味，则需要进一步检查。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  肠胃不好会引起口臭吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  会。胃食管反流、幽门螺杆菌感染、消化不良等都可能引起口臭，通常伴有酸味或腐臭味。如果口腔检查无异常但口臭持续，建议消化内科就诊排查。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">蛀牙的形成原因与治疗方法</p>
              </Link>
              <Link href="/guide/dental-calculus/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙结石</h3>
                <p className="text-sm text-slate-600">牙结石的形成与清除</p>
              </Link>
              <Link href="/guide/gum-bleeding/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈出血</h3>
                <p className="text-sm text-slate-600">牙龈出血的原因与护理</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
