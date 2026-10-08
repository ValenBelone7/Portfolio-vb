"use client";

import { useRef } from "react";
import { useScrollProgress } from "./useScrollProgress";

// Se llena desde que el contenedor llega al 75% de la pantalla hasta que su final pasa el 60%.
const measure = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const vh = innerHeight;
  return (vh * 0.75 - rect.top) / (rect.height + vh * 0.15);
};
const apply = (el: HTMLElement, p: number) => {
  (el.firstElementChild as HTMLElement).style.transform = `scaleY(${p})`;
};

/** Línea vertical que se llena a medida que el contenedor pasa por la pantalla. */
export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, apply, measure);
  return (
    <div ref={ref} aria-hidden="true" className={`absolute top-0 bottom-0 w-px bg-line ${className ?? ""}`}>
      <div
        style={{ transform: "scaleY(0)" }}
        className="h-full w-full origin-top bg-linear-to-b from-accent via-accent to-transparent"
      />
    </div>
  );
}
