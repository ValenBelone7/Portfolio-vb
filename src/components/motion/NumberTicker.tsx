"use client";

// Idea de Magic UI (MIT): https://magicui.design/docs/components/number-ticker
// Reescrito sin librerías: requestAnimationFrame + IntersectionObserver.

import { useEffect, useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Props = {
  value: number;
  /** Formato de miles según el idioma: 1.400 (es) / 1,400 (en). */
  locale: string;
  prefix?: string;
  suffix?: string;
  className?: string;
};

function format(n: number, locale: string, prefix: string, suffix: string) {
  return `${prefix}${new Intl.NumberFormat(locale).format(Math.round(n))}${suffix}`;
}

export function NumberTicker({ value, locale, prefix = "", suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  // El HTML del servidor trae el valor final (buscadores, sin JS). Antes del primer
  // pintado se pasa a 0 para que la cuenta no salte del final al cero.
  useLayoutEffect(() => {
    if (!reduce && ref.current) ref.current.textContent = format(0, locale, prefix, suffix);
  }, [reduce, locale, prefix, suffix]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1600);
        el.textContent = format(value * (1 - Math.pow(1 - p, 3)), locale, prefix, suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, locale, prefix, suffix, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {format(value, locale, prefix, suffix)}
    </span>
  );
}
