import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "口腔溃疡怎么好得快？原因、治疗与预防方法",
  description:
    "了解口腔溃疡的常见类型、形成原因、快速愈合方法和预防措施。学习如何区分普通溃疡和严重病变，有效缓解疼痛加速康复。",
  keywords: [
    "口腔溃疡",
    "口疮",
    "溃疡治疗",
    "溃疡怎么好得快",
    "复发性口腔溃疡",
    "口腔溃疡原因",
    "溃疡预防",
    "口腔黏膜炎",
  ],
  alternates: {
    canonical: "/guide/mouth-ulcers/",
  },
  openGraph: {
    title: "口腔溃疡怎么好得快？原因、治疗与预防方法",
    description: "了解口腔溃疡的常见类型、形成原因、快速愈合方法和预防措施。",
    url: "/guide/mouth-ulcers/",
    type: "article",
  },
};

export default function MouthUlcersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="口腔溃疡怎么好得快？原因、治疗与预防方法"
        description="了解口腔溃疡的常见类型、形成原因、快速愈合方法和预防措施。"
        url="/guide/mouth-ulcers/"
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
              口腔溃疡怎么好得快？原因、治疗与预防方法
            </h1>
            <p className="text-slate-600 text-lg">
              口腔溃疡（口疮）是最常见的口腔黏膜疾病，虽然能自愈，但疼痛影响进食和说话。本文详解溃疡的成因、治疗方法和预防措施。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#types" className="text-blue-600 hover:underline">口腔溃疡的类型</a></li>
              <li><a href="#causes" className="text-blue-600 hover:underline">形成原因</a></li>
              <li><a href="#treatment" className="text-blue-600 hover:underline">快速治疗方法</a></li>
              <li><a href="#prevention" className="text-blue-600 hover:underline">预防措施</a></li>
              <li><a href="#when-to-see-doctor" className="text-blue-600 hover:underline">何时就医</a></li>
            </ul>
          </nav>

          <section id="types" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">口腔溃疡的类型</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">轻型溃疡</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 最常见，占80%</li>
                  <li>• 直径&lt;10mm</li>
                  <li>• 7-14天自愈</li>
                  <li>• 不留疤痕</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-2">重型溃疡</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 直径&gt;10mm</li>
                  <li>• 深凹如弹坑</li>
                  <li>• 1-2月愈合</li>
                  <li>• 可能留疤</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 mb-2">疱疹样溃疡</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 数十个小溃疡</li>
                  <li>• 如满天星</li>
                  <li>• 伴发热</li>
                  <li>• 需就医</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">口腔溃疡的形成原因</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">常见诱因</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>免疫力下降：</strong>熬夜、压力大、感冒后易发</li>
                  <li>• <strong>局部创伤：</strong>咬伤、牙刷刮伤、食物划伤</li>
                  <li>• <strong>营养缺乏：</strong>维生素B族、铁、锌不足</li>
                  <li>• <strong>激素变化：</strong>女性经期前后易发</li>
                  <li>• <strong>精神压力：</strong>焦虑、紧张诱发或加重</li>
                  <li>• <strong>饮食刺激：</strong>辛辣、过烫、坚硬食物</li>
                </ul>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-slate-900">疾病相关</h3>
                <ul className="text-slate-600 text-sm mt-2 space-y-1">
                  <li>• <strong>系统性疾病：</strong>白塞病、红斑狼疮、炎症性肠病</li>
                  <li>• <strong>感染：</strong>疱疹病毒、手足口病、梅毒</li>
                  <li>• <strong>血液疾病：</strong>贫血、白血病（长期不愈需警惕）</li>
                  <li>• <strong>药物反应：</strong>某些药物可能引起口腔溃疡</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">快速治疗方法</h2>
            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">局部用药（推荐）</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-green-600 font-bold">1</span>
                    <div>
                      <p className="font-medium text-slate-900">溃疡贴膜/贴片</p>
                      <p className="text-slate-600">如醋酸地塞米松贴片，保护创面，止痛促愈合</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 font-bold">2</span>
                    <div>
                      <p className="font-medium text-slate-900">含漱液</p>
                      <p className="text-slate-600">复方氯己定、康复新液等消炎促愈合</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 font-bold">3</span>
                    <div>
                      <p className="font-medium text-slate-900">喷雾剂</p>
                      <p className="text-slate-600">西瓜霜、冰硼散等中成药，清热解毒</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 font-bold">4</span>
                    <div>
                      <p className="font-medium text-slate-900">凝胶</p>
                      <p className="text-slate-600">重组人表皮生长因子凝胶，加速愈合</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">辅助方法</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• <strong>盐水漱口：</strong>淡盐水杀菌消炎</li>
                  <li>• <strong>蜂蜜涂抹：</strong>天然抗菌，促进愈合</li>
                  <li>• <strong>维生素补充：</strong>维B族、维C、锌</li>
                  <li>• <strong>充足睡眠：</strong>提高免疫力</li>
                  <li>• <strong>避免刺激：</strong>忌辛辣、烫食、酸性食物</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-3">严重情况用药（需医生）</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• 糖皮质激素口服或注射</li>
                  <li>• 免疫调节剂（反复发作）</li>
                  <li>• 激光治疗（加速愈合）</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="prevention" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">如何预防口腔溃疡</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">生活习惯</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 规律作息，保证睡眠</li>
                  <li>• 减压，保持心情愉快</li>
                  <li>• 适度运动，增强免疫力</li>
                  <li>• 避免过度疲劳</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">饮食调理</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 多吃新鲜蔬果</li>
                  <li>• 补充维B族食物</li>
                  <li>• 避免过辣过烫食物</li>
                  <li>• 均衡饮食，不挑食</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">口腔卫生</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 温和刷牙，避免划伤</li>
                  <li>• 使用软毛牙刷</li>
                  <li>• 饭后漱口</li>
                  <li>• 定期口腔检查</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">特殊注意</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 女性经期加强预防</li>
                  <li>• 矫正牙齿要当心</li>
                  <li>• 假牙要合适</li>
                  <li>• 有复发史常备药物</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="when-to-see-doctor" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">何时需要就医</h2>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-semibold text-red-900 mb-3">出现以下情况请及时就诊</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-600">⚠️</span>
                  溃疡超过2周不愈合
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">⚠️</span>
                  溃疡直径大于1cm或数量多
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">⚠️</span>
                  伴有发热、皮疹、腹泻等其他症状
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">⚠️</span>
                  溃疡质地硬、边缘隆起不规则
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">⚠️</span>
                  每月反复发作，严重影响生活
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">⚠️</span>
                  伴有生殖器溃疡或眼部炎症
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI口腔健康检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                口腔溃疡反复出现？AI分析口腔照片，识别口腔黏膜健康状况，发现潜在问题。
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
                  口腔溃疡会传染吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  普通复发性口腔溃疡不会传染。但由疱疹病毒、手足口病等感染引起的溃疡具有传染性。如果溃疡伴有发热、全身症状，建议就医明确病因。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  维C片贴在溃疡上有用吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  不建议。维C是酸性的，直接贴在溃疡上会造成化学灼伤，引起剧烈疼痛，反而延缓愈合。补充维生素C应通过口服或多吃蔬果。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  口腔溃疡和口腔癌怎么区分？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  普通溃疡：圆形或椭圆形，表面凹陷呈黄色，边缘整齐，7-14天自愈。口腔癌溃疡：边缘不规则隆起、质地硬、基底凹凸不平、超过2周不愈合。如有疑虑请尽早就医。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  为什么溃疡刚好又长新的？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  这是复发性口腔溃疡的特点，与遗传、免疫、营养、压力等多种因素相关。建议记录发作规律，排查诱因，必要时做系统检查，排除潜在疾病。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/bad-breath/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">口臭</h3>
                <p className="text-sm text-slate-600">口臭的原因与解决</p>
              </Link>
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">蛀牙的形成与治疗</p>
              </Link>
              <Link href="/guide/gum-bleeding/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈出血</h3>
                <p className="text-sm text-slate-600">牙龈健康护理指南</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
