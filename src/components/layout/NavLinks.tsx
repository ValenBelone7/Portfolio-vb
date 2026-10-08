"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Item = { href: string; id: string; label: string };

/**
 * Links de sección que resaltan la sección visible.
 * - Barra: una píldora marca la sección activa y sigue al mouse mientras recorre la
 *   barra; el texto de cada link "rueda" hacia arriba y entra una copia en lima.
 * - Índice lateral: se marca el borde izquierdo.
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

  // Mueve la píldora a un link, o la oculta si no hay ninguno.
  function movePill(link: HTMLElement | null) {
    const pill = pillRef.current;
    if (!pill) return;
    if (!link) {
      pill.style.opacity = "0";
      return;
    }
    pill.style.opacity = "1";
    pill.style.width = `${link.offsetWidth}px`;
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
  }

  function activeLink() {
    return active ? (listRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`) ?? null) : null;
  }

  useLayoutEffect(() => {
    if (!vertical) movePill(activeLink());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, vertical]);

  return (
    <ul
      ref={listRef}
      onPointerLeave={vertical ? undefined : () => movePill(activeLink())}
      className={`relative flex ${vertical ? "flex-col items-stretch" : "items-center"}`}
    >
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
            onPointerEnter={vertical ? undefined : (e) => movePill(e.currentTarget)}
            className={
              vertical
                ? `block border-l-2 py-1.5 pl-4 text-sm transition-colors duration-300 ${
                    active === item.id ? "border-accent text-fg" : "border-line text-muted hover:text-fg"
                  }`
                : `group/link relative block rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                    active === item.id ? "text-chalk" : "text-chalk/70 hover:text-chalk"
                  }`
            }
          >
            {vertical ? (
              item.label
            ) : (
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:-translate-y-full">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full text-signal transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-y-0"
                >
                  {item.label}
                </span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
