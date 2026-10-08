import { metrics } from "@/content/metrics";
import type { Dictionary, Locale } from "@/i18n";

export function Metrics({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-label={dict.sections.metrics} className="border-y border-border bg-surface">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label.es} className="flex flex-col-reverse gap-1">
            <dt className="text-sm leading-snug text-muted">{m.label[locale]}</dt>
            <dd className="font-mono text-3xl font-semibold text-accent sm:text-4xl">{m.value[locale]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
