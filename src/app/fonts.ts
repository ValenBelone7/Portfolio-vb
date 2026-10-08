import { Instrument_Serif, JetBrains_Mono, Newsreader } from "next/font/google";

/** Títulos: serif editorial de alto contraste. */
export const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/** Cuerpo: serif pensada para leer en pantalla. */
export const body = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

/** Detalles técnicos: etiquetas, fechas, stack. */
export const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
});
