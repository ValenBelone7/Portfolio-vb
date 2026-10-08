import "./globals.css";
import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

// URLs que no coinciden con ninguna ruta. Hay un root layout por idioma, así que
// no existe un layout único del cual colgar el 404: se muestra en los dos idiomas.
export const metadata: Metadata = {
  title: "404 — Valentín Belone",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="es">
      <NotFoundContent locale="es" />
      <div lang="en" className="-mt-20">
        <NotFoundContent locale="en" />
      </div>
    </RootDocument>
  );
}
