import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3b5bff",
          borderRadius: 8,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: -0.5,
          color: "#f4f5f8",
        }}
      >
        IQ
      </div>
    ),
    { ...size }
  );
}
