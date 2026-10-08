import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Títulos: más carácter que la sans del cuerpo. */
export const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});
