"use client";

import { useEffect, type RefObject } from "react";

/**
 * Llama a `apply` con un progreso 0..1 en cada frame en que cambia el scroll.
 * `measure` calcula el progreso; por defecto, el de la página completa.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  apply: (el: HTMLElement, p: number) => void,
  measure?: (el: HTMLElement) => number,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      let p: number;
      if (measure) p = measure(el);
      else {
        const h = document.documentElement;
        p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      }
      apply(el, Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref, apply, measure]);
}
