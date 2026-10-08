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
        className="inline-flex size-10 items-center justify-center rounded-full text-chalk/80 transition-colors hover:bg-chalk/10 hover:text-chalk"
      >
        <svg className="size-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="4" y1="8" x2="20" y2="8" className={`${line} ${open ? "translate-y-1 rotate-45" : ""}`} />
          <line x1="4" y1="16" x2="20" y2="16" className={`${line} ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full mt-2 animate-pop rounded-3xl border border-chalk/10 bg-stage px-4 pb-3 text-chalk shadow-[0_18px_40px_-18px_rgb(0_0_0/0.55)]"
        >
          <ul>
            {items.map((item, i) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${30 * i}ms` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-chalk/10 px-2 py-4 font-display text-xl last:border-0 hover:text-signal"
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
