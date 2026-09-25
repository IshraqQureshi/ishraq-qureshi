import { ImageResponse } from "next/og";

export const alt =
  "Turn Your Validated SaaS or AI Idea Into a Working MVP — Without Hiring a Full-Time Engineering Team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#05060a",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(59,91,255,0.25) 0%, rgba(5,6,10,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(59,91,255,0.35)",
            background: "rgba(59,91,255,0.12)",
            color: "#5470ff",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 2,
            padding: "10px 20px",
            borderRadius: 8,
            marginBottom: 36,
          }}
        >
          AI PRODUCT ENGINEERING FOR FOUNDERS
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#f4f5f8",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          Turn Your Validated SaaS or AI Idea Into a Working MVP
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#5470ff",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Without Hiring a Full-Time Engineering Team
        </div>
      </div>
    ),
    { ...size }
  );
}
