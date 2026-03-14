import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "口干是什么原因？口干症的症状、原因与缓解方法",
  description:
    "了解口干症的常见原因、症状危害和有效缓解方法。学习如何改善口腔干燥，保护牙齿和口腔黏膜健康。",
  keywords: [
    "口干",
    "口干症",
    "口腔干燥",
    "唾液少",
    "口干原因",
    "缓解口干",
    "口干治疗",
    "唾液分泌",
  ],
  alternates: {
    canonical: "/guide/dry-mouth/",
  },
  openGraph: {
    title: "口干是什么原因？口干症的症状、原因与缓解方法",
    description: "了解口干症的常见原因、症状危害和有效缓解方法。",
    url: "/guide/dry-mouth/",
    type: "article",
  },
};

export default function DryMouthPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="口干是什么原因？口干症的症状、原因与缓解方法"
        description="了解口干症的常见原因、症状危害和有效缓解方法。"
        url="/guide/dry-mouth/"
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
              口干是什么原因？口干症的症状、原因与缓解方法
            </h1>
            <p className="text-slate-600 text-lg">
              口干不仅仅是&quot;口渴&quot;，长期口干会严重影响口腔健康，增加蛀牙、口腔感染风险。本文详解口干症的原因和应对方法。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#symptoms" className="text-blue-600 hover:underline">口干的症状</a></li>
              <li><a href="#causes" className="text-blue-600 hover:underline">口干的原因</a></li>
              <li><a href="#harm" className="text-blue-600 hover:underline">口干的危害</a></li>
              <li><a href="#relief" className="text-blue-600 hover:underline">缓解方法</a></li>
              <li><a href="#treatment" className="text-blue-600 hover:underline">治疗建议</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="symptoms" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">口干的症状</h2>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">口腔症状</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 口腔黏腻、干燥</li>
                    <li>• 说话或吞咽困难</li>
                    <li>• 味觉改变</li>
                    <li>• 舌头粗糙、裂纹</li>
                    <li>• 嘴唇干裂</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">其他表现</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 口臭加重</li>
                    <li>• 咀嚼困难</li>
                    <li>• 佩戴假牙不适</li>
                    <li>• 频繁口渴</li>
                    <li>• 夜间口干影响睡眠</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">口干的原因</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">药物因素（最常见）</h3>
                <p className="text-slate-600 text-sm mt-2">
                  超过600种药物可引起口干，包括抗抑郁药、降压药、抗过敏药、利尿剂等。
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900">生理因素</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>年龄增长：</strong>唾液腺功能自然衰退</li>
                  <li>• <strong>张口呼吸：</strong>鼻炎、睡眠呼吸暂停</li>
                  <li>• <strong>脱水：</strong>饮水不足、大量出汗</li>
                  <li>• <strong>压力焦虑：</strong>紧张时唾液分泌减少</li>
                </ul>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-slate-900">疾病因素</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>自身免疫病：</strong>干燥综合征（Sjögren）</li>
                  <li>• <strong>糖尿病：</strong>血糖控制不佳</li>
                  <li>• <strong>头颈放疗：</strong>损伤唾液腺</li>
                  <li>• <strong>唾液腺疾病：</strong>结石、感染、肿瘤</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="harm" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">口干的危害</h2>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <span><strong>蛀牙风险增加：</strong>唾液减少，牙齿失去自然清洁和保护</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <span><strong>口腔感染：</strong>口干易滋生细菌、真菌（如鹅口疮）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <span><strong>牙周病加重：</strong>唾液抗菌作用下降</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <span><strong>口腔黏膜炎：</strong>黏膜干燥、易受损</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <span><strong>营养不良：</strong>咀嚼吞咽困难影响进食</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="relief" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">缓解方法</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">日常措施</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 少量多次饮水</li>
                  <li>• 咀嚼无糖口香糖</li>
                  <li>• 使用人工唾液</li>
                  <li>• 加湿器增加空气湿度</li>
                  <li>• 避免张口呼吸</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2">饮食建议</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 选择湿润、软质食物</li>
                  <li>• 避免过咸、辛辣食物</li>
                  <li>• 限制咖啡、酒精</li>
                  <li>• 多吃蔬果（含水分）</li>
                  <li>• 汤类食物</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 mb-2">口腔护理</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 含氟牙膏防蛀</li>
                  <li>• 使用保湿漱口水</li>
                  <li>• 定期涂氟</li>
                  <li>• 保持口腔清洁</li>
                  <li>• 定期口腔检查</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-2">刺激唾液</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 酸甜味刺激（无糖）</li>
                  <li>• 冰块含服</li>
                  <li>• 唾液替代品</li>
                  <li>• 穴位按摩（如翳风穴）</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">治疗建议</h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">药物调整</h3>
                <p className="text-slate-600 text-sm">
                  如怀疑药物导致口干，咨询医生是否可以调整用药或更换药物，切勿自行停药。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">药物治疗</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 唾液分泌促进剂（需医生处方）</li>
                  <li>• 治疗原发病（如糖尿病）</li>
                  <li>• 治疗干燥综合征</li>
                </ul>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">专业护理</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 每3个月口腔检查</li>
                  <li>• 定期涂氟防蛀</li>
                  <li>• 专业清洁</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI检测口腔健康</h3>
              <p className="text-blue-100 mb-4 text-sm">
                长期口干容易引发蛀牙。使用AI口腔检测，监测牙齿健康状况，及早发现龋齿和牙周问题。
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
                  口干能治好吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  取决于原因。药物或脱水引起的口干可改善；年龄相关的唾液减少不可逆，但可通过各种方法缓解症状；干燥综合征等需长期管理。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  口干需要看医生吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  如果口干持续数周、严重影响生活，或伴有眼干、关节痛等症状，应就医排查干燥综合征等疾病。长期口干者也建议定期口腔检查。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  人工唾液有效吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  人工唾液可以暂时缓解口干不适，但效果不如天然唾液。它主要用于润滑和保护口腔黏膜，不能替代唾液的保护功能。需配合其他口腔护理措施。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">口干易蛀牙</p>
              </Link>
              <Link href="/guide/bad-breath/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">口臭</h3>
                <p className="text-sm text-slate-600">口干导致口臭</p>
              </Link>
              <Link href="/guide/elderly-oral-care/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">老年口腔</h3>
                <p className="text-sm text-slate-600">老年人口干护理</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
