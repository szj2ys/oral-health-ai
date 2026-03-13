import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "牙套/正畸护理指南：戴牙套期间的口腔护理与注意事项",
  description:
    "全面了解牙套佩戴期间的口腔护理方法、饮食注意事项、常见问题处理。帮助正畸患者保持口腔健康，顺利完成矫正治疗。",
  keywords: [
    "牙套护理",
    "正畸注意事项",
    "戴牙套怎么刷牙",
    "正畸口腔护理",
    "牙套清洁",
    "牙齿矫正",
    "戴牙套吃什么",
    "正畸期间",
  ],
  alternates: {
    canonical: "/guide/braces-care/",
  },
  openGraph: {
    title: "牙套/正畸护理指南：戴牙套期间的口腔护理与注意事项",
    description: "全面了解牙套佩戴期间的口腔护理方法、饮食注意事项、常见问题处理。",
    url: "/guide/braces-care/",
    type: "article",
  },
};

export default function BracesCarePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="牙套/正畸护理指南：戴牙套期间的口腔护理与注意事项"
        description="全面了解牙套佩戴期间的口腔护理方法、饮食注意事项、常见问题处理。"
        url="/guide/braces-care/"
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
              牙套/正畸护理指南：戴牙套期间的口腔护理与注意事项
            </h1>
            <p className="text-slate-600 text-lg">
              牙齿矫正期间，牙套会增加口腔清洁难度，容易引发蛀牙、牙龈炎等问题。本文详解正畸期间的护理要点，助您顺利完成矫正之旅。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#cleaning" className="text-blue-600 hover:underline">牙套清洁方法</a></li>
              <li><a href="#diet" className="text-blue-600 hover:underline">饮食注意事项</a></li>
              <li><a href="#problems" className="text-blue-600 hover:underline">常见问题处理</a></li>
              <li><a href="#checkups" className="text-blue-600 hover:underline">复诊与检查</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">常见问题解答</a></li>
            </ul>
          </nav>

          <section id="cleaning" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">牙套清洁方法</h2>
            <p className="text-slate-600 mb-4">
              戴牙套后清洁难度增加，需要更细致的护理。推荐以下清洁流程：
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">推荐清洁步骤</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">1</span>
                    <div>
                      <p className="font-medium text-slate-900">冲牙器冲洗</p>
                      <p className="text-slate-600 text-sm">用冲牙器清除牙缝和托槽周围的食物残渣</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">2</span>
                    <div>
                      <p className="font-medium text-slate-900">牙缝刷清洁</p>
                      <p className="text-slate-600 text-sm">使用牙缝刷清洁托槽周围和钢丝下方</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">3</span>
                    <div>
                      <p className="font-medium text-slate-900">正畸专用牙刷</p>
                      <p className="text-slate-600 text-sm">V型或凹型牙刷清洁牙齿和托槽表面</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">4</span>
                    <div>
                      <p className="font-medium text-slate-900">牙线清洁</p>
                      <p className="text-slate-600 text-sm">使用穿线器辅助牙线清洁牙缝</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-medium">5</span>
                    <div>
                      <p className="font-medium text-slate-900">漱口水</p>
                      <p className="text-slate-600 text-sm">含氟漱口水强化牙釉质，预防蛀牙</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <h3 className="font-semibold text-green-900 mb-2">必备工具</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 正畸专用牙刷/V型刷</li>
                    <li>• 牙缝刷（I型/L型）</li>
                    <li>• 冲牙器</li>
                    <li>• 牙线+穿线器</li>
                    <li>• 含氟漱口水</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <h3 className="font-semibold text-amber-900 mb-2">清洁频率</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 餐后必须刷牙</li>
                    <li>• 每天至少3次</li>
                    <li>• 冲牙器每次餐后使用</li>
                    <li>• 漱口水每晚使用</li>
                    <li>• 牙线每天至少1次</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="diet" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">饮食注意事项</h2>

            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-semibold text-red-900 mb-3">❌ 避免食用</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">硬脆食物</p>
                    <p className="text-slate-600 text-sm">坚果、冰块、硬糖、玉米棒</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">粘性食物</p>
                    <p className="text-slate-600 text-sm">口香糖、年糕、软糖、牛轧糖</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">染色食物</p>
                    <p className="text-slate-600 text-sm">咖喱、咖啡、红酒、浓茶</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">需啃咬食物</p>
                    <p className="text-slate-600 text-sm">苹果、玉米、排骨（需切小块）</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">✅ 推荐食用</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">软质食物</p>
                    <p className="text-slate-600 text-sm">粥、面条、蒸蛋、豆腐、鱼肉</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">高钙食物</p>
                    <p className="text-slate-600 text-sm">牛奶、酸奶、奶酪、豆浆</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">蔬果（切小块）</p>
                    <p className="text-slate-600 text-sm">香蕉、猕猴桃、煮熟的蔬菜</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">高蛋白</p>
                    <p className="text-slate-600 text-sm">鸡蛋、瘦肉泥、鱼肉</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="problems" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">常见问题处理</h2>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">托槽磨嘴/溃疡</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 使用正畸保护蜡覆盖尖锐处</li>
                  <li>• 涂抹溃疡药物</li>
                  <li>• 一般1-2周口腔会适应</li>
                  <li>• 如托槽松动及时复诊</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">牙齿酸软疼痛</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 加力后2-3天正常现象</li>
                  <li>• 吃软食，避免刺激</li>
                  <li>• 可服用止痛药</li>
                  <li>• 持续剧痛需就医</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">钢丝扎嘴</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 用铅笔橡皮头推回</li>
                  <li>• 涂抹保护蜡</li>
                  <li>• 尽快预约医生剪短</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">托槽脱落</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 保存好脱落的托槽</li>
                  <li>• 联系医生预约重粘</li>
                  <li>• 不要自行粘贴</li>
                  <li>• 避免吃硬食防再次脱落</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="checkups" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">复诊与检查</h2>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">复诊频率</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 传统托槽：4-6周/次</li>
                    <li>• 自锁托槽：6-8周/次</li>
                    <li>• 隐形矫正：6-8周/次</li>
                    <li>• 保持器阶段：3-6月/次</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">额外检查</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• 每6个月洗牙</li>
                    <li>• 定期检查蛀牙</li>
                    <li>• 牙龈健康评估</li>
                    <li>• 牙齿脱矿检查</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI监测正畸期间口腔健康</h3>
              <p className="text-blue-100 mb-4 text-sm">
                戴牙套期间更需关注口腔健康。使用AI检测定期监测牙齿和牙龈状况，及时发现蛀牙、牙龈炎等问题。
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
                  戴牙套期间可以洗牙吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  可以，且更应该定期洗牙。建议每6个月洗牙一次，去除牙结石，预防牙龈炎。洗牙时告知医生正在矫正，医生会小心操作，不会损坏托槽。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  正畸期间怎么预防蛀牙？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  1) 每次餐后刷牙；2) 使用含氟牙膏和漱口水；3) 少吃甜食和碳酸饮料；4) 定期涂氟；5) 使用冲牙器清洁托槽周围。如发现有白斑（脱矿早期）要及时处理。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  牙套要戴多久？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  矫正时间因人而异：简单病例1-1.5年，中等复杂1.5-2.5年，复杂病例2.5-3年或更长。成年人矫正通常比青少年时间稍长。矫正结束后还需戴保持器1-2年甚至更久。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  矫正期间牙缝变大正常吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  是正常的。矫正过程中牙齿移动，可能出现暂时性牙缝，特别是排齐阶段。后期医生会收缝调整。如果担心可以咨询主治医生确认治疗进度。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">蛀牙的预防与治疗</p>
              </Link>
              <Link href="/guide/gum-bleeding/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙龈出血</h3>
                <p className="text-sm text-slate-600">牙龈健康护理</p>
              </Link>
              <Link href="/guide/teeth-whitening/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙齿美白</h3>
                <p className="text-sm text-slate-600">牙齿美白方法</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
