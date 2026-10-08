import { body, display, mono } from "@/app/fonts";
import { getDictionary, type Locale } from "@/i18n";
import { RevealScript } from "@/components/motion/RevealScript";
import { Backdrop } from "./Backdrop";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ThemeScript } from "./ThemeScript";

/** <html> compartido por los root layouts de cada idioma. */
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);

  return (
    // suppressHydrationWarning: ThemeScript agrega data-theme antes de hidratar.
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${body.variable} ${mono.variable} ${display.variable} antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col font-sans">
        <ThemeScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
        >
          {dict.skipToContent}
        </a>
        <Backdrop />
        <Header locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer dict={dict} />
        <RevealScript />
      </body>
    </html>
  );
}
