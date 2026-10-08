"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Item = { href: string; id: string; label: string };

/**
 * Links de sección que resaltan la sección visible. En la barra, una píldora se
 * desliza hasta el link activo; en el índice lateral, se marca el borde.
 */
export function NavLinks({ items, variant = "toc" }: { items: Item[]; variant?: "bar" | "toc" }) {
  const vertical = variant === "toc";
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

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

  // Mueve la píldora al link activo (solo en la barra).
  useLayoutEffect(() => {
    const pill = pillRef.current;
    const list = listRef.current;
    if (!pill || !list) return;
    const link = active ? list.querySelector<HTMLElement>(`[data-id="${active}"]`) : null;
    if (!link) {
      pill.style.opacity = "0";
      return;
    }
    pill.style.opacity = "1";
    pill.style.width = `${link.offsetWidth}px`;
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
  }, [active]);

  return (
    <ul ref={listRef} className={`relative flex ${vertical ? "flex-col items-stretch" : "items-center"}`}>
      {!vertical && (
        <span
          ref={pillRef}
          aria-hidden="true"
          style={{ opacity: 0 }}
          className="absolute top-0 left-0 h-full rounded-full bg-chalk/10 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      )}
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            data-id={item.id}
            aria-current={active === item.id ? "true" : undefined}
            className={
              variant === "bar"
                ? `relative block rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                    active === item.id ? "text-chalk" : "text-chalk/70 hover:text-chalk"
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
