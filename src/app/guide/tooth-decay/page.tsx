import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "蛀牙怎么办？龋齿形成原因、症状与治疗方法全解析",
  description:
    "了解蛀牙的形成原因、早期症状、治疗方法和预防措施。学习如何识别龋齿征兆，获取专业的口腔护理建议，使用AI技术检测牙齿健康状况。",
  keywords: [
    "蛀牙",
    "龋齿",
    "蛀牙治疗",
    "龋齿预防",
    "牙齿黑洞",
    "蛀牙症状",
    "蛀牙怎么办",
    "龋齿填补",
  ],
  alternates: {
    canonical: "/guide/tooth-decay/",
  },
  openGraph: {
    title: "蛀牙怎么办？龋齿形成原因、症状与治疗方法全解析",
    description: "了解蛀牙的形成原因、早期症状、治疗方法和预防措施。",
    url: "/guide/tooth-decay/",
    type: "article",
  },
};

export default function ToothDecayPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="蛀牙怎么办？龋齿形成原因、症状与治疗方法全解析"
        description="了解蛀牙的形成原因、早期症状、治疗方法和预防措施。"
        url="/guide/tooth-decay/"
        publishedAt="2024-03-13"
        modifiedAt="2024-03-13"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/guide/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回指南</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          {/* Title */}
          <header className="mb-8">
            <div className="text-sm text-blue-600 font-medium mb-2">口腔健康指南</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              蛀牙怎么办？龋齿形成原因、症状与治疗方法全解析
            </h1>
            <p className="text-slate-600 text-lg">
              蛀牙（龋齿）是最常见的口腔问题之一。本文详细介绍蛀牙的形成机制、早期识别方法和科学治疗方案，帮助您保护牙齿健康。
            </p>
          </header>

          {/* Quick Navigation */}
          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#symptoms" className="text-blue-600 hover:underline">
                  蛀牙的常见症状
                </a>
              </li>
              <li>
                <a href="#causes" className="text-blue-600 hover:underline">
                  蛀牙形成的原因
                </a>
              </li>
              <li>
                <a href="#treatment" className="text-blue-600 hover:underline">
                  蛀牙的治疗方法
                </a>
              </li>
              <li>
                <a href="#prevention" className="text-blue-600 hover:underline">
                  如何预防蛀牙
                </a>
              </li>
              <li>
                <a href="#faq" className="text-blue-600 hover:underline">
                  常见问题解答
                </a>
              </li>
            </ul>
          </nav>

          {/* Symptoms Section */}
          <section id="symptoms" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">蛀牙的常见症状</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                蛀牙在早期可能没有明显症状，但随着病情发展，会出现以下表现：
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <h3 className="font-semibold text-amber-900 mb-2">早期症状</h3>
                  <ul className="text-slate-700 space-y-1 text-sm">
                    <li>• 牙齿表面出现白垩色斑点</li>
                    <li>• 对冷热酸甜食物敏感</li>
                    <li>• 牙齿表面可见褐色或黑色斑点</li>
                    <li>• 进食时轻微不适</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                  <h3 className="font-semibold text-red-900 mb-2">中晚期症状</h3>
                  <ul className="text-slate-700 space-y-1 text-sm">
                    <li>• 明显的牙齿疼痛或酸痛</li>
                    <li>• 牙齿出现明显黑洞</li>
                    <li>• 持续性疼痛，影响睡眠</li>
                    <li>• 牙龈肿胀或脓液渗出</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Causes Section */}
          <section id="causes" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">蛀牙形成的原因</h2>
            <p className="text-slate-600 mb-4">
              蛀牙是由细菌、食物、牙齿敏感性和时间四个因素共同作用的结果：
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">细菌作用</h3>
                  <p className="text-slate-600 text-sm">
                    口腔中的变形链球菌等细菌会分解食物中的糖分，产生酸性物质腐蚀牙釉质。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">饮食习惯</h3>
                  <p className="text-slate-600 text-sm">
                    频繁摄入高糖食物、碳酸饮料会为细菌提供繁殖的养分，加速蛀牙形成。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">口腔卫生</h3>
                  <p className="text-slate-600 text-sm">
                    刷牙不彻底、不使用牙线会导致牙菌斑堆积，增加蛀牙风险。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">牙齿结构</h3>
                  <p className="text-slate-600 text-sm">
                    牙齿排列不齐、窝沟较深等结构问题容易积存食物残渣，难以清洁。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section id="treatment" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">蛀牙的治疗方法</h2>
            <p className="text-slate-600 mb-4">
              根据蛀牙的严重程度，医生会采用不同的治疗方案：
            </p>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                    早期
                  </span>
                  <h3 className="font-semibold text-slate-900">再矿化治疗</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  使用含氟牙膏、氟化物涂布或窝沟封闭剂，帮助牙釉质重新矿化，修复早期脱矿区域。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">
                    中期
                  </span>
                  <h3 className="font-semibold text-slate-900">补牙（充填治疗）</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  去除龋坏组织后，使用树脂或玻璃离子材料填充龋洞，恢复牙齿形态和功能。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                    较严重
                  </span>
                  <h3 className="font-semibold text-slate-900">根管治疗</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  当龋坏波及牙髓时，需要清除感染的牙髓组织，进行根管充填并做牙冠保护。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                    严重
                  </span>
                  <h3 className="font-semibold text-slate-900">拔牙</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  当牙齿无法保留时，需要拔除后考虑种植牙、烤瓷桥或活动假牙修复。
                </p>
              </div>
            </div>
          </section>

          {/* Prevention Section */}
          <section id="prevention" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">如何预防蛀牙</h2>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-4">日常防护措施</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">每天刷牙两次，每次至少2分钟</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">使用含氟牙膏增强牙釉质</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">每天使用牙线清洁牙缝</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">饭后漱口，减少食物残留</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">减少糖分摄入频率</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">定期进行口腔检查（每6个月）</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">考虑窝沟封闭（儿童和成人）</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">✓</span>
                    <p className="text-slate-700 text-sm">使用含氟漱口水</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Detection CTA */}
          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI智能蛀牙检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                不确定自己是否有蛀牙？使用手机拍照，AI快速识别口腔问题，生成专业健康报告。
              </p>
              <Link
                href="/scan/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Camera className="w-4 h-4" />
                免费检测牙齿健康
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">常见问题解答</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  蛀牙会自己好吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  早期轻微的脱矿（白斑）通过加强口腔护理和使用含氟产品可能逆转。但一旦形成实质性龋洞，蛀牙无法自愈，必须就医治疗。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  补牙后还会蛀牙吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  补牙材料本身不会蛀牙，但填充物边缘、牙齿其他部位仍可能发生新的蛀牙。因此补牙后仍需保持良好的口腔卫生习惯。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  蛀牙和吃糖有多大关系？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  糖分为口腔细菌提供能量，细菌代谢糖产生酸性物质腐蚀牙齿。但更重要的是吃糖的频率——频繁吃糖让口腔长期处于酸性环境，比一次吃大量糖更容易导致蛀牙。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  儿童蛀牙需要治疗吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  需要。乳牙蛀牙不仅会引起疼痛、影响进食，还可能影响恒牙发育和排列。即使乳牙会脱落，也应及时治疗，必要时做预成冠保护。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  如何判断是否有蛀牙？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  可以通过以下方式判断：照镜子观察牙齿是否有黑点或黑洞；感受是否对冷热敏感；注意是否有食物嵌塞。最准确的方法是使用AI口腔检测工具或就诊检查。
                </div>
              </details>
            </div>
          </section>

          {/* Related Guides */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/guide/sensitive-teeth/"
                className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-medium text-slate-900 mb-1">牙齿敏感</h3>
                <p className="text-sm text-slate-600">冷热酸甜引发的酸痛问题</p>
              </Link>
              <Link
                href="/guide/teeth-whitening/"
                className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-medium text-slate-900 mb-1">牙齿美白</h3>
                <p className="text-sm text-slate-600">安全有效的牙齿美白方法</p>
              </Link>
              <Link
                href="/guide/dental-calculus/"
                className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-medium text-slate-900 mb-1">牙结石</h3>
                <p className="text-sm text-slate-600">牙结石的形成与清除</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
