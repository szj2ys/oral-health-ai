"use client";

import { useState, useCallback } from "react";
import { MapPin, Phone, Navigation, ExternalLink } from "lucide-react";
import { trackDentistCTA } from "@/lib/analytics";

interface Clinic {
  name: string;
  address: string;
  phone?: string;
  distance?: string;
}

interface DentistCTAProps {
  severity: "轻微" | "轻度" | "中度" | "重度" | "unknown";
  issuesCount: number;
}

// Sample clinics data for major cities
const SAMPLE_CLINICS: Record<string, Clinic[]> = {
  default: [
    { name: "建议到当地正规口腔医院", address: "请选择您所在的城市查看附近诊所", phone: "", distance: "" },
  ],
  beijing: [
    { name: "北京大学口腔医院", address: "北京市海淀区中关村南大街22号", phone: "010-82195390", distance: "" },
    { name: "北京协和医院口腔科", address: "北京市东城区帅府园1号", phone: "010-69156114", distance: "" },
  ],
  shanghai: [
    { name: "上海交通大学医学院附属第九人民医院", address: "上海市黄浦区制造局路639号", phone: "021-63138341", distance: "" },
    { name: "复旦大学附属华山医院口腔科", address: "上海市静安区乌鲁木齐中路12号", phone: "021-52889999", distance: "" },
  ],
  guangzhou: [
    { name: "中山大学光华口腔医学院附属口腔医院", address: "广州市越秀区陵园西路56号", phone: "020-83842830", distance: "" },
    { name: "广东省口腔医院", address: "广州市海珠区江南大道中366号", phone: "020-84403333", distance: "" },
  ],
  shenzhen: [
    { name: "深圳市口腔医院", address: "深圳市罗湖区桂园路2号", phone: "0755-25199191", distance: "" },
    { name: "北京大学深圳医院口腔科", address: "深圳市福田区莲花路1120号", phone: "0755-83923333", distance: "" },
  ],
  hangzhou: [
    { name: "浙江大学医学院附属口腔医院", address: "杭州市西湖区灵隐路14号", phone: "0571-87783777", distance: "" },
    { name: "浙江省人民医院口腔科", address: "杭州市上塘路158号", phone: "0571-85893000", distance: "" },
  ],
};

export default function DentistCTA({ severity, issuesCount }: DentistCTAProps) {
  const [showClinics, setShowClinics] = useState(false);
  const [selectedCity, setSelectedCity] = useState("default");

  // Determine urgency level and styling
  const getUrgencyInfo = () => {
    if (severity === "重度" || issuesCount >= 3) {
      return {
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        iconColor: "text-red-600",
        buttonColor: "bg-red-600 hover:bg-red-700",
        title: "建议尽快预约专业牙医",
        description: "检测到较严重的口腔问题，建议尽快咨询专业牙医进行进一步检查和治疗。",
        urgency: "high",
      };
    } else if (severity === "中度" || issuesCount >= 2) {
      return {
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        iconColor: "text-amber-600",
        buttonColor: "bg-amber-600 hover:bg-amber-700",
        title: "建议预约牙医咨询",
        description: "检测到一些需要关注的问题，建议预约牙医进行专业咨询。",
        urgency: "medium",
      };
    } else {
      return {
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        iconColor: "text-blue-600",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
        title: "定期口腔检查",
        description: "建议每6个月进行一次专业口腔检查，保持口腔健康。",
        urgency: "low",
      };
    }
  };

  const urgency = getUrgencyInfo();
  const clinics = SAMPLE_CLINICS[selectedCity] || SAMPLE_CLINICS.default;

  const handleNavigate = useCallback((clinic: Clinic) => {
    if (clinic.name.includes("请选择")) return;
    const query = encodeURIComponent(`${clinic.name} ${clinic.address}`);
    window.open(`https://maps.google.com/?q=${query}`, "_blank");
  }, []);

  const handleCall = useCallback((phone: string) => {
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  }, []);

  return (
    <div className={`${urgency.bgColor} rounded-2xl p-6 border ${urgency.borderColor}`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${urgency.iconColor}`}>
          <MapPin className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 mb-1">{urgency.title}</h3>
          <p className="text-sm text-slate-600">{urgency.description}</p>
        </div>
      </div>

      {/* City Selector */}
      {!showClinics && (
        <div className="mb-4">
          <label className="text-sm font-medium text-slate-700 mb-2 block">选择您所在的城市</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">-- 选择城市 --</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
            <option value="shenzhen">深圳</option>
            <option value="hangzhou">杭州</option>
          </select>
        </div>
      )}

      {/* Action Button */}
      {!showClinics ? (
        <button
          onClick={() => {
            setShowClinics(true);
            // Track CTA click
            trackDentistCTA(severity, issuesCount);
          }}
          className={`w-full py-3 ${urgency.buttonColor} text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2`}
        >
          <Navigation className="w-4 h-4" />
          查找附近口腔诊所
        </button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-slate-900">推荐诊所</h4>
            <button
              onClick={() => setShowClinics(false)}
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              重新选择
            </button>
          </div>

          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-slate-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h5 className="font-medium text-slate-900">{clinic.name}</h5>
                  <p className="text-sm text-slate-500 mt-1">{clinic.address}</p>
                  {clinic.phone && (
                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {clinic.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                {clinic.phone && (
                  <button
                    onClick={() => handleCall(clinic.phone!)}
                    className="flex-1 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    拨打电话
                  </button>
                )}
                {!clinic.name.includes("请选择") && (
                  <button
                    onClick={() => handleNavigate(clinic)}
                    className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors flex items-center justify-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    导航前往
                  </button>
                )}
              </div>
            </div>
          ))}

          <p className="text-xs text-slate-400 text-center mt-2">
            *以上为知名口腔医院推荐，您也可以选择附近的社区口腔诊所
          </p>
        </div>
      )}
    </div>
  );
}
