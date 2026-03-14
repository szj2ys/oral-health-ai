import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from query string
    const score = searchParams.get("score") || "85";
    const status = searchParams.get("status") || "良好";
    const date = searchParams.get("date") || new Date().toLocaleDateString("zh-CN");

    // Determine color based on score
    const scoreNum = parseInt(score, 10);
    const scoreColor = scoreNum >= 80 ? "#22c55e" : scoreNum >= 60 ? "#3b82f6" : "#ef4444";
    const bgGradient = scoreNum >= 80
      ? "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)"
      : scoreNum >= 60
        ? "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"
        : "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)";

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: bgGradient,
            fontFamily: "system-ui, -apple-system, sans-serif",
            position: "relative",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.4)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: "60px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.3)",
            }}
          />

          {/* Logo/Brand */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "40px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
                口
              </span>
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#1e293b",
              }}
            >
              张二口腔AI
            </span>
          </div>

          {/* Main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontSize: "28px",
                color: "#64748b",
                fontWeight: "500",
              }}
            >
              口腔健康检测报告
            </span>

            {/* Score circle */}
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                border: `6px solid ${scoreColor}`,
              }}
            >
              <span
                style={{
                  fontSize: "72px",
                  fontWeight: "800",
                  color: scoreColor,
                  lineHeight: 1,
                }}
              >
                {score}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                分
              </span>
            </div>

            <span
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: scoreColor,
              }}
            >
              {status}
            </span>

            <span
              style={{
                fontSize: "18px",
                color: "#94a3b8",
                marginTop: "8px",
              }}
            >
              检测日期: {date}
            </span>
          </div>

          {/* Footer CTA */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 32px",
              background: "white",
              borderRadius: "50px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                color: "#1e293b",
                fontWeight: "500",
              }}
            >
              拍照测口腔健康
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#2563eb",
                fontWeight: "600",
              }}
            >
              免费体验 →
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("OG image generation error:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
