import { getDictionary, localizePath, type Locale } from "@/i18n";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <div className="mx-auto max-w-5xl px-4 py-28 sm:px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h1>
      <p className="mt-4 text-muted">{t.text}</p>
      <a
        href={localizePath("/", locale)}
        className="mt-8 inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-fg hover:opacity-90"
      >
        {t.home}
      </a>
    </div>
  );
}
