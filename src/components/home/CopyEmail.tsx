"use client";

import { useState } from "react";

/** Botón que copia el email y confirma con una animación breve. */
export function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const icon = "absolute size-4 transition-[transform,opacity] duration-300";

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex h-11 max-w-full items-center gap-3 rounded-lg border border-cream/30 pr-4 pl-1.5 font-mono text-xs tracking-[0.1em] text-cream uppercase transition-colors hover:border-blush"
    >
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-md bg-cream text-wine">
        <svg
          className={`${icon} ${copied ? "scale-0 opacity-0" : "scale-100"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
        <svg
          className={`${icon} ${copied ? "scale-100 rotate-0" : "scale-0 -rotate-45 opacity-0"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
      <span className="shrink-0 transition-colors group-hover:text-blush">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
}
