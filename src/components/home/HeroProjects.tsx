"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "../motion/useReducedMotion";

type Item = { name: string; kind: string; href: string; image: StaticImageData; alt: string };

type Props = {
  items: Item[];
  label: string;
  prev: string;
  next: string;
};

/** Tarjeta del hero que rota los proyectos en producción, con contador 01/03. */
export function HeroProjects({ items, label, prev, next }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);
  const item = items[index];
  const pad = (n: number) => String(n).padStart(2, "0");
  const arrow =
    "inline-flex size-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-cream hover:bg-cream hover:text-wine";

  return (
    <div
      className="w-full max-w-sm rounded-xl border border-cream/15 bg-wine-deep/85 p-3 text-cream shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Link href={item.href} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-ink">
          {items.map((it, i) => (
            <Image
              key={it.href}
              src={it.image}
              alt={i === index ? it.alt : ""}
              sizes="360px"
              className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 group-hover:scale-[1.04] ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-end justify-between gap-3 px-1">
          <div>
            <p className="eyebrow text-blush">{label}</p>
            <p className="mt-1 font-display text-2xl leading-tight">{item.name}</p>
            <p className="text-sm text-cream/75">{item.kind}</p>
          </div>
          <span
            aria-hidden="true"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-cream text-wine transition-transform group-hover:rotate-45"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </div>
      </Link>
      <div className="mt-3 flex items-center gap-3 px-1">
        <span className="font-mono text-xs text-cream/80" aria-live="polite">
          {pad(index + 1)}/{pad(items.length)}
        </span>
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {items.map((it, i) => (
            <span key={it.href} className="h-px flex-1 overflow-hidden bg-cream/20">
              <span
                key={`${i}-${index}`}
                // El fin de la animación del segmento activo pasa al siguiente proyecto.
                onAnimationEnd={i === index ? () => go(1) : undefined}
                style={{ animationPlayState: paused ? "paused" : "running" }}
                className={`block h-full bg-cream ${
                  i < index ? "w-full" : i === index && !reduce ? "w-0 animate-[grow_5s_linear_forwards]" : "w-0"
                }`}
              />
            </span>
          ))}
        </div>
        <button type="button" onClick={() => go(-1)} aria-label={prev} className={arrow}>
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" onClick={() => go(1)} aria-label={next} className={arrow}>
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
