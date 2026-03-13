import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "老年人牙齿护理指南：保持晚年口腔健康",
  description:
    "了解老年人常见口腔问题、假牙护理、种植牙选择、慢性病口腔管理。帮助老年人维护口腔健康，提高生活质量。",
  keywords: [
    "老年人牙齿护理",
    "老人口腔健康",
    "假牙护理",
    "老年人口腔",
    "种植牙老年人",
    "老年口腔疾病",
    "老人护牙",
    "晚年口腔",
  ],
  alternates: {
    canonical: "/guide/elderly-oral-care/",
  },
  openGraph: {
    title: "老年人牙齿护理指南：保持晚年口腔健康",
    description: "了解老年人常见口腔问题、假牙护理、种植牙选择、慢性病口腔管理。",
    url: "/guide/elderly-oral-care/",
    type: "article",
  },
};

export default function ElderlyOralCarePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="老年人牙齿护理指南：保持晚年口腔健康"
        description="了解老年人常见口腔问题、假牙护理、种植牙选择、慢性病口腔管理。"
        url="/guide/elderly-oral-care/"
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
              老年人牙齿护理指南：保持晚年口腔健康
            </h1>
            <p className="text-slate-600 text-lg">
              "老掉牙"并非不可避免。良好的口腔护理可以帮助老年人保留更多天然牙，维护咀嚼功能，提高生活质量。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#problems" className="text-blue-600 hover:underline">老年人常见口腔问题</a></li>
              <li><a href="#care" className="text-blue-600 hover:underline">日常护理要点</a></li>
              <li><a href="#denture" className="text-blue-600 hover:underline">假牙护理</a></li>
              <li><a href="#chronic" className="text-blue-600 hover:underline">慢性病与口腔</a></li>
              <li><a href="#treatment" className="text-blue-600 hover:underline">治疗选择</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="problems" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">老年人常见口腔问题</h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">根面龋</h3>
                <p className="text-slate-600 text-sm">
                  牙龈退缩后牙根暴露，牙根没有珐琅质保护，极易发生龋坏。老年人龋病多发生在牙根表面。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">牙周病</h3>
                <p className="text-slate-600 text-sm">
                  老年人牙周病患病率高，长期牙周病是导致牙齿脱落的主要原因。表现为牙龈出血、牙齿松动、口臭。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">口干症</h3>
                <p className="text-slate-600 text-sm">
                  唾液腺功能随年龄减退，加上多种药物影响，老年人常感口干，增加龋齿和口腔感染风险。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">口腔黏膜病</h3>
                <p className="text-slate-600 text-sm">
                  口腔白斑、扁平苔藓、灼口综合征等在老年人中较常见，部分有恶变风险，需定期检查。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">牙齿磨损</h3>
                <p className="text-slate-600 text-sm">
                  数十年咀嚼导致牙齿磨损严重，咬合面变平，影响咀嚼效率，甚至引起颞下颌关节问题。
                </p>
              </div>
            </div>
          </section>

          <section id="care" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">日常护理要点</h2>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">刷牙建议</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 使用软毛牙刷</li>
                    <li>• 巴氏刷牙法，轻柔施力</li>
                    <li>• 每天刷牙2次，每次2分钟</li>
                    <li>• 使用含氟牙膏防蛀</li>
                    <li>• 牙缝大处用牙缝刷</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">辅助清洁</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 每天使用牙线</li>
                    <li>• 冲牙器冲洗牙缝</li>
                    <li>• 含氟漱口水</li>
                    <li>• 刺激唾液分泌</li>
                    <li>• 多喝水保持湿润</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="denture" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">假牙护理</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2">活动假牙</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 餐后取下清洗</li>
                  <li>• 用软毛刷清洁</li>
                  <li>• 睡前取下浸泡</li>
                  <li>• 勿用热水浸泡</li>
                  <li>• 定期调整更换</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-2">固定假牙</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 像真牙一样刷牙</li>
                  <li>• 使用牙线穿线器</li>
                  <li>• 清洁桥体下方</li>
                  <li>• 定期专业清洁</li>
                  <li>• 注意牙龈健康</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="chronic" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">慢性病与口腔健康</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-slate-900">糖尿病</h3>
                <p className="text-slate-600 text-sm mt-1">
                  血糖控制不佳者牙周病风险高3倍，且愈合差。需要：控制血糖、加强口腔卫生、每3-6个月检查。
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">高血压/心脏病</h3>
                <p className="text-slate-600 text-sm mt-1">
                  牙周病可能增加心血管风险。拔牙或手术前需告知医生用药情况（如抗凝药）。保持口腔健康有助全身健康。
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900">骨质疏松</h3>
                <p className="text-slate-600 text-sm mt-1">
                  颌骨密度下降影响牙齿稳固，也可能影响种植牙成功率。需：补充钙和维生素D、适度运动、定期口腔检查。
                </p>
              </div>
            </div>
          </section>

          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">修复治疗选择</h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">经济</span>
                  <h3 className="font-semibold text-slate-900">活动假牙</h3>
                </div>
                <p className="text-slate-600 text-sm">价格较低，可取下清洁。但咀嚼效率较低，需要适应期，需定期调整。</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">推荐</span>
                  <h3 className="font-semibold text-slate-900">种植牙</h3>
                </div>
                <p className="text-slate-600 text-sm">最接近天然牙，咀嚼效率高，保护颌骨。费用较高，需评估骨量和全身状况。</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">传统</span>
                  <h3 className="font-semibold text-slate-900">固定桥</h3>
                </div>
                <p className="text-slate-600 text-sm">需要磨损邻牙，适合缺牙数少、邻牙健康的情况。舒适度好但损伤邻牙。</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI口腔健康检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                老年人行动不便，AI口腔检测让在家就能了解口腔状况，及时发现龋齿、牙周病等问题，指导就医。
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
                  老年人还能种植牙吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  年龄不是绝对禁忌。只要全身健康状况良好、骨量足够，80岁以上也可以种植牙。关键是控制慢性病（如糖尿病）、评估骨密度和愈合能力。建议咨询专业种植医生。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  老人牙齿松动一定要拔吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  不一定。轻度松动可通过牙周治疗稳固；中度松动可尝试固定；重度松动、影响进食、反复发炎才考虑拔除。能保留的天然牙应尽量保留。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  假牙不舒服怎么办？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  假牙需要适应期（2-4周），初期可能有异物感、发音不清。如持续疼痛、溃疡、松动，需及时复诊调整。假牙使用3-5年后因牙槽骨吸收可能需重衬或更换。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  老年人多久看一次牙医？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  建议每6个月检查一次，有牙周病、口干症、戴假牙者建议每3个月检查。定期检查可早期发现问题，早期治疗更简单、费用更低。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/dental-implants/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">种植牙</h3>
                <p className="text-sm text-slate-600">老年人种植牙指南</p>
              </Link>
              <Link href="/guide/dry-mouth/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">口干</h3>
                <p className="text-sm text-slate-600">老年口干护理</p>
              </Link>
              <Link href="/guide/gum-recession/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈萎缩</h3>
                <p className="text-sm text-slate-600">老年牙周护理</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
