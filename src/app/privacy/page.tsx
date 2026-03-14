import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "隐私政策 - 张二口腔AI",
  description: "了解张二口腔AI如何收集、使用和保护您的个人信息。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回首页</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-6">隐私政策</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              最后更新日期：2024年3月13日
            </p>

            <p className="text-slate-600 mb-6">
              张二口腔AI（以下简称&quot;我们&quot;或&quot;本服务&quot;）重视您的隐私保护。本隐私政策说明我们如何收集、使用和保护您的个人信息。
            </p>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">1. 我们收集的信息</h2>
            <p className="text-slate-600 mb-2">我们收集以下类型的信息：</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
              <li><strong>口腔照片：</strong>您上传用于AI分析的口腔照片</li>
              <li><strong>设备标识：</strong>用于关联您的检测历史记录</li>
              <li><strong>使用数据：</strong>页面访问、功能使用等匿名统计数据</li>
              <li><strong>技术信息：</strong>浏览器类型、IP地址（用于安全和服务优化）</li>
            </ul>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">2. 信息的使用</h2>
            <p className="text-slate-600 mb-2">我们使用收集的信息用于：</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
              <li>提供口腔健康AI分析服务</li>
              <li>保存您的检测历史记录</li>
              <li>改进我们的算法和服务质量</li>
              <li>保障服务安全和防止滥用</li>
            </ul>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">3. 信息的存储与保护</h2>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
              <li>您的照片存储在加密的安全服务器上</li>
              <li>我们采用行业标准的加密技术保护数据传输</li>
              <li>您可以随时删除您的历史记录</li>
              <li>我们不会将您的个人数据出售给第三方</li>
            </ul>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">4. 信息共享</h2>
            <p className="text-slate-600 mb-4">
              我们不会与第三方共享您的个人身份信息，除非：
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
              <li>获得您的明确同意</li>
              <li>法律法规要求</li>
              <li>保护我们的合法权益</li>
            </ul>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">5. 您的权利</h2>
            <p className="text-slate-600 mb-2">您对您的数据拥有以下权利：</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
              <li>查看您的检测历史</li>
              <li>删除您的数据</li>
              <li>导出您的报告</li>
              <li>停止使用我们的服务</li>
            </ul>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">6. Cookie 和类似技术</h2>
            <p className="text-slate-600 mb-4">
              我们使用 Cookie 和类似技术来改善用户体验、分析使用情况和保障服务安全。您可以通过浏览器设置管理 Cookie 偏好。
            </p>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">7. 医疗免责声明</h2>
            <p className="text-slate-600 mb-4">
              本服务提供的口腔健康分析仅供参考，不能替代专业医生的诊断。如有严重不适，请及时就医。
            </p>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">8. 政策更新</h2>
            <p className="text-slate-600 mb-4">
              我们可能会不时更新本隐私政策。重大变更将通过服务通知您。
            </p>

            <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-3">9. 联系我们</h2>
            <p className="text-slate-600 mb-4">
              如果您对本隐私政策有任何疑问，请联系我们。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
