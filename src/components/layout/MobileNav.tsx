"use client";

import { useState } from "react";

type Props = {
  items: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
};

export function MobileNav({ items, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const line = "origin-center transition-transform duration-300 [transform-box:fill-box]";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-glass-strong hover:text-fg"
      >
        <svg className="size-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="4" y1="8" x2="20" y2="8" className={`${line} ${open ? "translate-y-1 rotate-45" : ""}`} />
          <line x1="4" y1="16" x2="20" y2="16" className={`${line} ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </svg>
      </button>
      {open && (
        <nav id="mobile-nav" className="glass-strong absolute inset-x-0 top-full mt-2 animate-pop rounded-3xl p-2">
          <ul>
            {items.map((item, i) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${30 * i}ms` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-display text-lg text-fg hover:bg-glass-strong"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
