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
      className="group glass inline-flex h-12 max-w-full items-center gap-3 rounded-full pr-5 pl-2 text-sm transition-colors hover:border-accent/60"
    >
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg">
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
      <span className="truncate font-mono">{email}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
      <span aria-hidden="true" className="shrink-0 text-xs text-muted transition-colors group-hover:text-accent">
        {copied ? copiedLabel : copyLabel}
      </span>
    </button>
  );
}
