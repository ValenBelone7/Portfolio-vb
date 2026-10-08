"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "top" | "scrolled" | "hidden";

/**
 * Píldora flotante del encabezado. Arriba de todo es ancha; al bajar se compacta,
 * y si se sigue bajando se esconde (vuelve apenas se sube).
 */
export function HeaderFrame({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("top");
  const last = useRef(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - last.current;
      last.current = y;
      if (y < 24) setMode("top");
      else if (delta > 4 && y > 480) setMode("hidden");
      else if (delta < -4 || y <= 480) setMode("scrolled");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      data-mode={mode}
      // Con foco de teclado adentro nunca se esconde.
      className="group/header fixed inset-x-0 top-0 z-40 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[mode=hidden]:not-focus-within:-translate-y-[130%] sm:px-5 sm:pt-4"
    >
      <div className="relative mx-auto max-w-[1400px] rounded-full border border-chalk/10 bg-stage text-chalk shadow-[0_0_0_rgb(0_0_0/0)] transition-[max-width,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[mode=scrolled]/header:max-w-[64rem] group-data-[mode=scrolled]/header:shadow-[0_18px_40px_-18px_rgb(0_0_0/0.55)]">
        {children}
      </div>
    </header>
  );
}
