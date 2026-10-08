"use client";

import { useEffect, useState } from "react";

type Item = { href: string; id: string; label: string };

/** Links de sección que resaltan la sección visible. */
export function NavLinks({ items, variant = "toc" }: { items: Item[]; variant?: "bar" | "toc" }) {
  const vertical = variant === "toc";
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <ul className={`flex ${vertical ? "flex-col items-stretch" : "items-center gap-1"}`}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            aria-current={active === item.id ? "true" : undefined}
            className={
              variant === "bar"
                ? `relative block px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-blush after:transition-transform after:duration-300 ${
                    active === item.id
                      ? "text-cream after:scale-x-100"
                      : "text-cream/70 after:scale-x-0 hover:text-cream"
                  }`
                : `block border-l-2 py-1.5 pl-4 text-sm transition-colors duration-300 ${
                    active === item.id ? "border-accent text-fg" : "border-line text-muted hover:text-fg"
                  }`
            }
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
