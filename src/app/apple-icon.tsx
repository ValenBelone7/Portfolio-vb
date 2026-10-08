import { ImageResponse } from "next/og";

// Ícono para iOS (pantalla de inicio): mismo monograma que el favicon.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0d10",
        color: "#c6f432",
        fontSize: 76,
        fontWeight: 700,
        letterSpacing: -4,
      }}
    >
      VB
    </div>,
    size,
  );
}
