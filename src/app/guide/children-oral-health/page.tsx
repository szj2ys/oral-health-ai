import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "儿童口腔健康护理指南：从出生到换牙的全面护理",
  description:
    "了解0-12岁儿童口腔发育特点、刷牙方法、蛀牙预防。帮助家长建立孩子良好的口腔卫生习惯，守护乳牙和恒牙健康。",
  keywords: [
    "儿童口腔护理",
    "儿童刷牙",
    "宝宝牙齿护理",
    "儿童蛀牙预防",
    "乳牙护理",
    "换牙期护理",
    "儿童口腔健康",
    "儿童牙膏",
  ],
  alternates: {
    canonical: "/guide/children-oral-health/",
  },
  openGraph: {
    title: "儿童口腔健康护理指南：从出生到换牙的全面护理",
    description: "了解0-12岁儿童口腔发育特点、刷牙方法、蛀牙预防。",
    url: "/guide/children-oral-health/",
    type: "article",
  },
};

export default function ChildrenOralHealthPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ArticleJsonLd
        title="儿童口腔健康护理指南：从出生到换牙的全面护理"
        description="了解0-12岁儿童口腔发育特点、刷牙方法、蛀牙预防。"
        url="/guide/children-oral-health/"
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
              儿童口腔健康护理指南：从出生到换牙的全面护理
            </h1>
            <p className="text-slate-600 text-lg">
              儿童期是口腔健康的基础阶段，乳牙健康和口腔习惯将直接影响恒牙发育。本文为家长提供各年龄段儿童口腔护理的完整指南。
            </p>
          </header>

          <nav className="bg-slate-50 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">目录</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#stages" className="text-blue-600 hover:underline">各年龄段护理要点</a></li>
              <li><a href="#brushing" className="text-blue-600 hover:underline">正确刷牙方法</a></li>
              <li><a href="#diet" className="text-blue-600 hover:underline">饮食与蛀牙预防</a></li>
              <li><a href="#problems" className="text-blue-600 hover:underline">常见问题</a></li>
              <li><a href="#checkups" className="text-blue-600 hover:underline">定期检查</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">家长常见问题</a></li>
            </ul>
          </nav>

          <section id="stages" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">各年龄段护理要点</h2>

            <div className="space-y-4">
              <div className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-pink-200 text-pink-800 text-xs font-medium rounded">0-1岁</span>
                  <h3 className="font-semibold text-slate-900">出牙前</h3>
                </div>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 每次喂奶后用纱布擦拭牙龈和舌头</li>
                  <li>• 避免含奶瓶入睡（预防奶瓶龋）</li>
                  <li>• 第一颗牙萌出后开始刷牙</li>
                  <li>• 戒除夜奶习惯</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded">1-3岁</span>
                  <h3 className="font-semibold text-slate-900">乳牙期</h3>
                </div>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 家长帮助刷牙，早晚各一次</li>
                  <li>• 使用米粒大小含氟牙膏</li>
                  <li>• 第一颗牙萌出后6个月内首次看牙医</li>
                  <li>• 开始戒除安抚奶嘴</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-medium rounded">3-6岁</span>
                  <h3 className="font-semibold text-slate-900">学龄前</h3>
                </div>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 家长监督孩子刷牙（豌豆大小牙膏）</li>
                  <li>• 教授圆弧刷牙法（Fones法）</li>
                  <li>• 考虑涂氟和窝沟封闭</li>
                  <li>• 培养独立刷牙习惯（家长最后检查）</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-amber-200 text-amber-800 text-xs font-medium rounded">6-12岁</span>
                  <h3 className="font-semibold text-slate-900">换牙期</h3>
                </div>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 使用巴氏刷牙法</li>
                  <li>• 关注六龄齿萌出，及时窝沟封闭</li>
                  <li>• 乳牙滞留或早失需就医</li>
                  <li>• 评估是否需要早期矫正</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="brushing" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">正确刷牙方法</h2>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
              <h3 className="font-semibold text-blue-900 mb-3">儿童刷牙要点</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-slate-900 text-sm">牙刷选择</p>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• 刷头小巧，适合口腔</li>
                    <li>• 软毛，保护牙龈</li>
                    <li>• 卡通图案增加兴趣</li>
                    <li>• 3个月更换一次</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">牙膏用量</p>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• 3岁以下：米粒大小</li>
                    <li>• 3-6岁：豌豆大小</li>
                    <li>• 6岁以上：1厘米长条</li>
                    <li>• 含氟牙膏（500-1000ppm）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">1</div>
                <div>
                  <p className="font-medium text-slate-900">圆弧刷牙法（适合幼儿）</p>
                  <p className="text-slate-600 text-sm">刷毛放在牙面上，画大圆圈，从后牙开始，逐颗向前。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">2</div>
                <div>
                  <p className="font-medium text-slate-900">巴氏刷牙法（适合较大儿童）</p>
                  <p className="text-slate-600 text-sm">刷毛45度角朝向牙龈，小幅度水平颤动，逐颗清洁。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">3</div>
                <div>
                  <p className="font-medium text-slate-900">每个面都要刷</p>
                  <p className="text-slate-600 text-sm">外侧面、内侧面、咬合面都要刷到，舌面也要清洁。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">4</div>
                <div>
                  <p className="font-medium text-slate-900">刷够时间</p>
                  <p className="text-slate-600 text-sm">每次刷牙2-3分钟，可以播放儿歌或使用计时器。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="diet" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">饮食与蛀牙预防</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h3 className="font-semibold text-red-900 mb-2">❌ 限制摄入</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 糖果、巧克力</li>
                  <li>• 碳酸饮料、果汁</li>
                  <li>• 蛋糕、饼干等 sticky 食物</li>
                  <li>• 含奶瓶入睡</li>
                  <li>• 频繁吃零食</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2">✅ 鼓励食用</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• 白开水、牛奶</li>
                  <li>• 新鲜水果（非果汁）</li>
                  <li>• 蔬菜、坚果</li>
                  <li>• 奶酪、酸奶</li>
                  <li>• 定时进餐，减少零食</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mt-4">
              <h3 className="font-semibold text-amber-900 mb-2">⚠️ 蛀牙高危习惯</h3>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• 含奶瓶入睡（奶瓶龋）</li>
                <li>• 频繁吃糖果、饼干</li>
                <li>• 喝果汁、碳酸饮料</li>
                <li>• 刷牙后不漱口直接睡觉</li>
              </ul>
            </div>
          </section>

          <section id="problems" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">常见口腔问题</h2>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">奶瓶龋</h3>
                <p className="text-slate-600 text-sm">
                  含奶瓶入睡导致前牙严重蛀牙。预防：1岁后戒除夜奶，不用奶瓶哄睡，睡前刷牙。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">乳牙早失</h3>
                <p className="text-slate-600 text-sm">
                  乳牙过早脱落导致恒牙萌出空间不足。需做间隙保持器，防止邻牙倾斜。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">乳牙滞留</h3>
                <p className="text-slate-600 text-sm">
                  恒牙已萌出但乳牙未脱落（双排牙）。应及时拔除乳牙，给恒牙空间。
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">吮指、口呼吸</h3>
                <p className="text-slate-600 text-sm">
                  影响颌骨发育和牙齿排列。3岁后应戒除，必要时咨询正畸医生。
                </p>
              </div>
            </div>
          </section>

          <section id="checkups" className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">定期检查建议</h2>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>第一次看牙医：</strong>第一颗牙萌出后6个月内，或1岁前</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>定期检查：</strong>每6个月检查一次</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>涂氟：</strong>每3-6个月一次（根据蛀牙风险）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>窝沟封闭：</strong>乳磨牙2-3岁，六龄齿6-7岁，第二恒磨牙11-13岁</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">AI儿童口腔健康检测</h3>
              <p className="text-blue-100 mb-4 text-sm">
                担心孩子牙齿健康？使用AI口腔检测，快速了解乳牙、恒牙发育状况，及早发现问题。
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">家长常见问题</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  乳牙蛀牙需要治疗吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  需要。乳牙蛀牙会引起疼痛、影响进食，还可能导致恒牙发育异常。乳牙龋坏应尽早治疗，必要时做预成冠保护，保持到正常换牙。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  孩子几岁可以自己刷牙？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  6-8岁前需要家长帮助刷牙。即使孩子自己刷，家长也应在最后检查并补刷。10岁前都需要家长监督。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  儿童可以用含氟牙膏吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  可以。第一颗牙萌出后就可以使用含氟牙膏（500-1000ppm），但要控制用量：3岁以下米粒大小，3-6岁豌豆大小。氟化物能有效预防蛀牙。
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  换牙期牙齿不整齐要矫正吗？
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-600 text-sm">
                  换牙期牙齿暂时不齐是正常的。但如果出现地包天、严重拥挤、不良习惯（口呼吸、吮指）等，应咨询正畸医生是否需要早期干预（7-10岁）。
                </div>
              </details>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">相关指南</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/guide/tooth-decay/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">蛀牙/龋齿</h3>
                <p className="text-sm text-slate-600">儿童蛀牙预防</p>
              </Link>
              <Link href="/guide/braces-care/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙套护理</h3>
                <p className="text-sm text-slate-600">正畸期间护理</p>
              </Link>
              <Link href="/guide/teeth-whitening/" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-medium text-slate-900 mb-1">牙齿美白</h3>
                <p className="text-sm text-slate-600">牙齿美白知识</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
