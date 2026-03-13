import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "种植牙多少钱？种植牙流程、优缺点与注意事项",
  description:
    "全面了解种植牙的费用、手术流程、优缺点和术后护理。帮助缺牙患者做出明智的修复选择，重获完整咀嚼功能。",
  keywords: [
    "种植牙",
    "种牙",
    "种植牙费用",
    "种植牙价格",
    "缺牙修复",
    "牙齿种植",
    "种植牙流程",
    "种植牙多少钱",
  ],
  alternates: {
    canonical: "/guide/dental-implants/",
  },
  openGraph: {
    title: "种植牙多少钱？种植牙流程、优缺点与注意事项",
    description: "全面了解种植牙的费用、手术流程、优缺点和术后护理。",
    url: "/guide/dental-implants/",
    type: "article",
  },
};

export default function DentalImplantsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="种植牙多少钱？种植牙流程、优缺点与注意事项"
        description="全面了解种植牙的费用、手术流程、优缺点和术后护理。"
        url="/guide/dental-implants/"
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
              种植牙多少钱？种植牙流程、优缺点与注意事项
            </h1>
            <p className="text-slate-600 text-lg">
              种植牙是目前最接近天然牙的缺牙修复方式。本文详解种植牙的费用构成、手术流程、优缺点和维护要点，帮助您做出明智决策。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#cost" className="text-blue-600 hover:underline">种植牙费用</a></li>
              <li><a href="#process" className="text-blue-600 hover:underline">手术流程</a></li>
              <li><a href="#pros-cons" className="text-blue-600 hover:underline">优缺点对比</a></li>
              <li><a href="#suitable" className="text-blue-600 hover:underline">适合人群</a></li>
              <li><a href="#aftercare" className="text-blue-600 hover:underline">术后护理</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="cost" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">种植牙费用</h2>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
              <h3 className="font-semibold text-blue-900 mb-3">费用构成</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700">种植体（进口）</span>
                  <span className="font-medium text-slate-900">6000-15000元/颗</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">基台</span>
                  <span className="font-medium text-slate-900">1500-4000元/颗</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">牙冠</span>
                  <span className="font-medium text-slate-900">2000-8000元/颗</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">手术费</span>
                  <span className="font-medium text-slate-900">2000-5000元</span>
                </div>
                <div className="border-t border-blue-200 pt-2 mt-2 flex justify-between">
                  <span className="font-semibold text-slate-900">总计（单颗）</span>
                  <span className="font-bold text-blue-700">8000-30000元/颗</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              价格差异主要源于种植体品牌（欧美、韩系、国产）、牙冠材料（烤瓷、全瓷）和手术难度。集采政策后价格有所下降。
            </p>
          </section>

          <section id="process" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">种植牙手术流程</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900">术前检查</h3>
                  <p className="text-slate-600 text-sm">全景片、CT检查骨量，评估种植条件，制定治疗方案</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900">植入种植体</h3>
                  <p className="text-slate-600 text-sm">局部麻醉下植入种植体（人工牙根），缝合伤口</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900">骨愈合期</h3>
                  <p className="text-slate-600 text-sm">等待3-6个月，种植体与颌骨结合（骨结合）</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">4</div>
                <div>
                  <h3 className="font-semibold text-slate-900">安装基台</h3>
                  <p className="text-slate-600 text-sm">二期手术暴露种植体，安装愈合基台</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">5</div>
                <div>
                  <h3 className="font-semibold text-slate-900">取模戴冠</h3>
                  <p className="text-slate-600 text-sm">取牙模制作牙冠，安装永久牙冠，完成修复</p>
                </div>
              </div>
            </div>
          </section>

          <section id="pros-cons" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">优缺点对比</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2">✓ 优点</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 外观和功能接近真牙</li>
                  <li>• 咀嚼效率高</li>
                  <li>• 不损伤邻牙</li>
                  <li>• 防止牙槽骨吸收</li>
                  <li>• 使用寿命长（10-20年+）</li>
                  <li>• 舒适无异物感</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h3 className="font-semibold text-red-900 mb-2">✗ 缺点</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 费用较高</li>
                  <li>• 治疗周期长（3-6个月）</li>
                  <li>• 需要手术</li>
                  <li>• 对骨量有要求</li>
                  <li>• 存在失败风险</li>
                  <li>• 需要定期维护</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="suitable" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">适合人群</h2>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">适合条件</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 年满18岁，骨骼发育完成</li>
                    <li>• 全身健康状况良好</li>
                    <li>• 有足够骨量或可做植骨</li>
                    <li>• 能配合长期维护</li>
                    <li>• 无法适应活动假牙</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">禁忌症</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 严重全身疾病未控制</li>
                    <li>• 严重骨质疏松</li>
                    <li>• 放疗后颌骨</li>
                    <li>• 未控制的糖尿病</li>
                    <li>• 吸烟严重者（相对禁忌）</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="aftercare" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">术后护理</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">术后即刻</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 咬紧纱布30-40分钟</li>
                  <li>• 24小时内不漱口</li>
                  <li>• 冰敷减轻肿胀</li>
                  <li>• 避免剧烈运动</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">长期维护</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 每天认真刷牙</li>
                  <li>• 使用牙线/冲牙器</li>
                  <li>• 定期复查（每年1-2次）</li>
                  <li>• 专业清洁</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI口腔健康检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                缺牙多年担心骨量不足？AI分析口腔状况，了解牙周健康、邻牙倾斜程度，评估种植条件。
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
                  种植牙能用多久？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  种植体本身可使用20年以上甚至终身，牙冠一般10-15年。寿命取决于口腔卫生、定期维护和全身健康。吸烟者、糖尿病患者需更加注意维护。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  种植牙手术痛吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  手术在局部麻醉下进行，过程中无痛。术后可能有轻微肿胀和不适，可用止痛药控制。大多数人反应比拔牙还轻松。复杂病例可能需要植骨，恢复时间更长。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  骨量不足可以种牙吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  可以。骨量不足可通过植骨手术解决：植入人工骨粉或自体骨，等待3-6个月骨量恢复后再种植。也可以选择短种植体或倾斜种植技术，减少植骨需求。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  种牙后可以咬硬物吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  完全愈合后可以正常咀嚼，但不建议刻意咬极硬的东西（如骨头、蟹壳、瓶盖等），以免损伤牙冠或种植体。种植牙虽坚固，但仍需爱护。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">蛀牙治疗与拔除</p>
              </Link>
              <Link href="/guide/wisdom-teeth/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">智齿</h3>
                <p className="text-sm text-slate-600">拔牙后修复</p>
              </Link>
              <Link href="/guide/sensitive-teeth/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙齿敏感</h3>
                <p className="text-sm text-slate-600">术后敏感护理</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
