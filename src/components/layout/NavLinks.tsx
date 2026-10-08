"use client";

import { useEffect, useState } from "react";

type Item = { href: string; id: string; label: string };

/** Links de sección que resaltan la sección visible. */
export function NavLinks({ items, vertical = false }: { items: Item[]; vertical?: boolean }) {
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
    <ul className={`flex gap-1 text-sm ${vertical ? "flex-col items-start" : "items-center"}`}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            aria-current={active === item.id ? "true" : undefined}
            className={`block rounded-full px-3 py-1.5 transition-colors duration-300 ${
              active === item.id ? "bg-accent/15 text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
