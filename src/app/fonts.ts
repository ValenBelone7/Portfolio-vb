import { IBM_Plex_Mono, IBM_Plex_Serif, Martian_Mono } from "next/font/google";

/** Títulos: monoespaciada ancha, se lee como código. */
export const display = Martian_Mono({
  variable: "--font-display",
  subsets: ["latin"],
});

/** Texto largo: serif técnica de IBM, de la misma familia que la mono de etiquetas. */
export const body = IBM_Plex_Serif({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

/** Etiquetas, fechas, stack y datos. */
export const mono = IBM_Plex_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
});
