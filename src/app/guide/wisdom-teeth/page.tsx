import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "智齿要不要拔？智齿发炎、阻生智齿的处理方法",
  description:
    "智齿一定要拔吗？了解智齿生长的常见问题、阻生智齿的危害、拔智齿的时机和术后护理。帮助您做出正确的智齿处理决策。",
  keywords: [
    "智齿",
    "拔智齿",
    "阻生智齿",
    "智齿发炎",
    "智齿痛",
    "智齿要不要拔",
    "智齿拔除",
    "智齿护理",
  ],
  alternates: {
    canonical: "/guide/wisdom-teeth/",
  },
  openGraph: {
    title: "智齿要不要拔？智齿发炎、阻生智齿的处理方法",
    description: "了解智齿生长的常见问题、阻生智齿的危害和拔智齿的时机。",
    url: "/guide/wisdom-teeth/",
    type: "article",
  },
};

export default function WisdomTeethPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="智齿要不要拔？智齿发炎、阻生智齿的处理方法"
        description="了解智齿生长的常见问题、阻生智齿的危害和拔智齿的时机。"
        url="/guide/wisdom-teeth/"
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
              智齿要不要拔？智齿发炎、阻生智齿的处理方法
            </h1>
            <p className="text-slate-600 text-lg">
              智齿（第三磨牙）是最后长出的牙齿，常常带来各种问题。本文详解智齿的生长过程、常见问题及处理建议，帮助您做出明智决策。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#what" className="text-blue-600 hover:underline">什么是智齿</a></li>
              <li><a href="#problems" className="text-blue-600 hover:underline">智齿常见问题</a></li>
              <li><a href="#when-to-remove" className="text-blue-600 hover:underline">什么情况下需要拔除</a></li>
              <li><a href="#removal" className="text-blue-600 hover:underline">拔智齿的过程</a></li>
              <li><a href="#aftercare" className="text-blue-600 hover:underline">术后护理要点</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="what" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">什么是智齿</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                智齿是人类口腔中最后萌出的牙齿，位于牙列最末端，上下左右各一颗，共4颗。因其通常在17-25岁萌出，此时人的心智趋于成熟，故被称为&quot;智齿&quot;。
              </p>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">智齿萌出时间</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-slate-900">正常萌出期</p>
                    <p className="text-slate-600">17-25岁</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">阻生智齿发现期</p>
                    <p className="text-slate-600">18-30岁</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600">
                随着人类饮食精细化，颌骨逐渐变小，很多人颌骨空间不足以容纳智齿正常萌出，导致智齿错位、阻生或无法萌出。
              </p>
            </div>
          </section>

          <section id="problems" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">智齿常见问题</h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">常见</span>
                  <h3 className="font-semibold text-slate-900">智齿冠周炎</h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  智齿部分萌出时，牙龈与牙冠之间形成盲袋，容易积存食物残渣和细菌，引发炎症。
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 症状：牙龈红肿疼痛、张口受限、咀嚼困难、口臭</li>
                  <li>• 严重时可引起面部肿胀、发热</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">严重</span>
                  <h3 className="font-semibold text-slate-900">阻生智齿</h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  智齿因空间不足无法正常萌出，可能被牙龈覆盖、倾斜生长或完全埋伏在颌骨内。
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 水平阻生、垂直阻生、近中阻生、远中阻生</li>
                  <li>• 可能顶坏邻牙、形成囊肿</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">注意</span>
                  <h3 className="font-semibold text-slate-900">顶坏邻牙</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  倾斜生长的智齿会持续推挤第二磨牙，导致邻牙龋坏、牙根吸收或牙周炎。
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">其他</span>
                  <h3 className="font-semibold text-slate-900">咬合问题</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  上颌智齿过度萌出、下颌智齿缺失等情况可能导致咬合干扰、咀嚼效率下降。
                </p>
              </div>
            </div>
          </section>

          <section id="when-to-remove" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">什么情况下需要拔除</h2>
            <p className="text-slate-600 mb-4">
              并非所有智齿都需要拔除。以下情况建议拔除：
            </p>

            <div className="bg-red-50 rounded-xl p-5 border border-red-100 mb-4">
              <h3 className="font-semibold text-red-900 mb-3">建议拔除的情况</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <span>反复发炎的阻生智齿</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <span>已经顶坏或可能顶坏邻牙</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <span>引起囊肿或肿瘤</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <span>无对颌牙而过度萌出</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <span>正畸治疗需要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <span>清洁困难、经常塞牙</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-900 mb-3">可以保留的情况</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>完全萌出且位置正常</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>有对颌牙，咬合关系正常</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>易于清洁，无龋坏</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>未引起任何临床症状</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="removal" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">拔智齿的过程</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900">术前检查</h3>
                  <p className="text-slate-600 text-sm">拍摄全景片或CT，了解智齿位置、牙根形态及与神经的关系。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900">局部麻醉</h3>
                  <p className="text-slate-600 text-sm">注射局部麻醉药，确保手术过程无痛。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900">拔除智齿</h3>
                  <p className="text-slate-600 text-sm">简单智齿可直接拔除；阻生智齿可能需要切开牙龈、去除部分骨组织。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-slate-900">缝合止血</h3>
                  <p className="text-slate-600 text-sm">伤口缝合，咬紧纱布止血30-40分钟。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="aftercare" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">术后护理要点</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2">24小时内</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 不要漱口、吐口水</li>
                  <li>• 不要吸吮伤口</li>
                  <li>• 避免热食热饮</li>
                  <li>• 可冰敷面颊减少肿胀</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">24小时后</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 温盐水轻轻漱口</li>
                  <li>• 保持口腔清洁</li>
                  <li>• 遵医嘱服药</li>
                  <li>• 避免剧烈运动</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-2">饮食建议</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 流质或软食为主</li>
                  <li>• 避免辛辣刺激</li>
                  <li>• 避免硬脆食物</li>
                  <li>• 不要用吸管</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h3 className="font-semibold text-red-900 mb-2">注意事项</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 不要吸烟</li>
                  <li>• 不要饮酒</li>
                  <li>• 避免飞行（高空）</li>
                  <li>• 7-10天拆线复诊</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI口腔健康检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                不确定智齿状况？AI分析口腔照片，识别智齿萌出情况、牙龈健康等问题，帮助您了解是否需要就医。
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
                  拔智齿会瘦脸吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  不会。智齿位于颌骨内，拔除后不会改变面部轮廓。面部轮廓主要由颌骨形状和咬肌决定。拔除智齿后短期内可能因肿胀显得&quot;脸肿&quot;，消肿后恢复原状。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  拔智齿会影响智商吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  不会。智齿与智力无关，&quot;智齿&quot;名称仅因萌出时间较晚（17-25岁）而得名。拔除智齿不会影响记忆力或智商。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  拔智齿痛吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  手术过程中因麻醉不会疼痛。术后麻醉消退后可能有疼痛和肿胀，医生会开具止痛药。复杂阻生智齿拔除后的不适可能持续3-5天，简单智齿恢复较快。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  智齿发炎时可以拔吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  急性炎症期不宜拔除，需先消炎控制感染。可在医生指导下使用抗生素和漱口水，炎症消退后再择期拔除。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  一次可以拔几颗智齿？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  通常建议一次拔除同侧上下两颗，或分两次拔除。四颗同时拔除创伤较大，恢复困难。具体方案需医生根据智齿难度评估。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">蛀牙的形成与治疗</p>
              </Link>
              <Link href="/guide/gum-bleeding/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈出血</h3>
                <p className="text-sm text-slate-600">牙龈健康护理指南</p>
              </Link>
              <Link href="/guide/dental-calculus/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙结石</h3>
                <p className="text-sm text-slate-600">牙结石的预防与清除</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
