"use client";

import { usePathname } from "next/navigation";
import { localizePath, splitLocale } from "@/i18n/config";

export function LanguageSwitch({ text, label }: { text: string; label: string }) {
  const { locale, path } = splitLocale(usePathname());
  const target = locale === "es" ? "en" : "es";

  // <a> y no <Link>: cada idioma tiene su propio root layout, así que el cambio
  // es siempre una carga completa.
  return (
    <a
      href={localizePath(path, target)}
      hrefLang={target}
      lang={target}
      // Sin aria-label: el nombre accesible tiene que coincidir con el texto visible.
      title={label}
      className="inline-flex h-10 items-center rounded-full px-3 font-mono text-xs text-muted transition-colors hover:bg-glass-strong hover:text-fg"
    >
      {text}
    </a>
  );
}
