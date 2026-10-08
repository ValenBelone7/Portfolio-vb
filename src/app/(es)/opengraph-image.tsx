import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Valentín Belone — Desarrollador Backend";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("es");
}
