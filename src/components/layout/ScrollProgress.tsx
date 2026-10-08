"use client";

import { useRef } from "react";
import { useScrollProgress } from "../motion/useScrollProgress";

const apply = (el: HTMLElement, p: number) => {
  el.style.transform = `scaleX(${p})`;
};

/** Línea de progreso de lectura en el borde inferior de la barra de navegación. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, apply);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="absolute inset-x-6 bottom-0 h-px origin-left bg-linear-to-r from-transparent via-accent to-transparent"
    />
  );
}
