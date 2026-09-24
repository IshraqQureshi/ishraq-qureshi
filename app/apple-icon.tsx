import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      // iOS applies its own corner rounding to apple-touch-icon, and doesn't
      // handle transparency well — keep this a full-bleed, opaque square.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3b5bff",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 96,
          letterSpacing: -3,
          color: "#f4f5f8",
        }}
      >
        IQ
      </div>
    ),
    { ...size }
  );
}
