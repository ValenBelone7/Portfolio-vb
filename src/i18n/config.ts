export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** Español vive en la raíz (`/proyectos/x`), inglés bajo `/en` (`/en/proyectos/x`). */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Separa un pathname en idioma y ruta sin prefijo. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return { locale: "en", path: pathname.slice(3) || "/" };
  }
  return { locale: defaultLocale, path: pathname };
}
