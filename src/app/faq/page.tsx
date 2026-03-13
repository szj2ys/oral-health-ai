import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "常见问题 - 口腔健康AI检测",
  description: "关于居家口腔健康AI初筛的常见问题解答，包括检测准确性、隐私保护、如何使用等。",
  keywords: ["口腔健康FAQ", "AI口腔检测问题", "牙齿健康问答", "口腔检查常见问题"],
};

const faqs = [
  {
    question: "AI口腔检测的准确性如何？",
    answer: "我们的AI模型基于 Claude 多模态大模型，能够识别常见的口腔问题如龋齿、牙龈红肿、牙结石等。但请注意，AI检测仅供参考，不能替代专业牙医的诊断。如有严重不适，请及时就医。",
    category: "准确性",
  },
  {
    question: "我的口腔照片会被保存吗？",
    answer: "我们会 temporarily 保存您的口腔照片用于AI分析，但所有数据都经过加密处理。您可以在历史记录中删除任何不想保留的检测记录。我们严格遵守《个人信息保护法》，不会将您的数据用于其他用途或与第三方共享。",
    category: "隐私",
  },
  {
    question: "检测需要多长时间？",
    answer: "通常情况下，AI分析会在10-30秒内完成。如果网络状况不佳或AI服务繁忙，可能会稍微延长。请耐心等待，不要重复提交。",
    category: "使用",
  },
  {
    question: "什么样的照片效果最好？",
    answer: "为了获得最佳检测效果，请：1) 确保光线充足，自然光最佳；2) 保持手机稳定，避免模糊；3) 尽量张大嘴巴，露出更多牙齿；4) 建议拍摄多个角度：正面、左右侧面。",
    category: "使用",
  },
  {
    question: "检测结果会显示哪些口腔问题？",
    answer: "AI可以识别以下常见问题：龋齿（蛀牙）、牙龈红肿/出血、牙结石、牙菌斑、牙齿排列异常、牙齿变色、口腔溃疡等。检测结果会给出综合评分和具体问题列表。",
    category: "功能",
  },
  {
    question: "发现口腔问题后该怎么办？",
    answer: "如果AI检测到口腔问题，我们会提供护理建议和就医指导。对于轻微问题，可以改善口腔卫生习惯；对于中重度问题，建议预约牙医进行专业检查。记住，AI检测不能替代医生的专业诊断。",
    category: "建议",
  },
  {
    question: "可以检测儿童的口腔吗？",
    answer: "可以，但需要儿童配合拍摄清晰的口腔照片。对于儿童，我们建议家长协助拍摄，并注意安抚孩子情绪。儿童口腔健康问题建议咨询儿童口腔专科医生。",
    category: "使用",
  },
  {
    question: "多久应该检测一次？",
    answer: "建议每1-3个月进行一次口腔健康自测，特别是如果您有口腔问题史。定期检测有助于及早发现问题，追踪口腔健康变化趋势。",
    category: "建议",
  },
  {
    question: "这个服务收费吗？",
    answer: "目前基础的AI口腔检测完全免费。未来可能会推出高级功能（如详细报告PDF下载、家庭账户等），但基础检测将始终保持免费。",
    category: "价格",
  },
  {
    question: "如何分享我的检测报告？",
    answer: "检测完成后，您可以在结果页面点击「分享」按钮，复制分享链接给家人或医生。也可以下载报告文本保存。分享链接不包含您的个人信息，只有评分和建议内容。",
    category: "功能",
  },
];

const categories = Array.from(new Set(faqs.map(f => f.category)));

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回</span>
          </Link>
          <h1 className="font-semibold text-slate-900">常见问题</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">常见问题解答</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            关于居家口腔健康AI检测的常见疑问，帮您快速了解如何使用我们的服务
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Link
            href="#all"
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium"
          >
            全部
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`#${category}`}
              className="px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4" id="all">
          {faqs.map((faq, index) => (
            <div
              key={index}
              id={faq.category}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                  Q
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">还有其他问题？</h3>
          <p className="text-blue-100 mb-6">开始体验AI口腔检测，亲自了解我们的服务</p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
          >
            免费开始检测
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
