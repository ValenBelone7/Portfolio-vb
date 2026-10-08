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
    "mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-fg placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="contact-status">
      <h3 className="font-semibold">{t.form}</h3>
      <label className="block text-sm">
        {t.name}
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-sm">
        {t.email}
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm">
        {t.message}
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      {/* Campo trampa para bots: FormSubmit descarta envíos que lo completan. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.send}
      </button>
      <p id="contact-status" role="status" className="text-sm">
        {status === "success" && <span className="text-accent">{t.success}</span>}
        {status === "error" && <span className="text-red-600 dark:text-red-400">{t.error}</span>}
      </p>
    </form>
  );
}
