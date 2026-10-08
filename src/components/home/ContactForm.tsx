"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";

type Status = "idle" | "sending" | "success" | "error";

// FormSubmit reenvía el mensaje al mail; es el mismo servicio que usaba el sitio viejo.
const ENDPOINT = "https://formsubmit.co/ajax/valenbelone14@gmail.com";

export function ContactForm({ t }: { t: Dictionary["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), _subject: t.subject }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full rounded-2xl border border-glass-border bg-glass-strong px-4 py-3 text-fg transition-[border-color,box-shadow] placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_4px_rgb(231_111_60/0.15)] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="contact-status">
      <h3 className="font-display text-xl font-semibold">{t.form}</h3>
      <label className="block text-sm text-muted">
        {t.name}
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-sm text-muted">
        {t.email}
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm text-muted">
        {t.message}
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      {/* Campo trampa para bots: FormSubmit descarta envíos que lo completan. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg shadow-[0_10px_30px_-10px_var(--accent)] transition-[transform,opacity] active:scale-[0.98] disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <span
            className="size-4 animate-spin rounded-full border-2 border-accent-fg/30 border-t-accent-fg"
            aria-hidden="true"
          />
        ) : (
          <svg
            className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        )}
        {status === "sending" ? t.sending : t.send}
      </button>
      <p id="contact-status" role="status" className="text-sm">
        {status === "success" && <span className="text-accent">{t.success}</span>}
        {status === "error" && <span className="text-red-700 dark:text-red-300">{t.error}</span>}
      </p>
    </form>
  );
}
