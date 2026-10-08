import { metrics } from "@/content/metrics";
import type { Dictionary, Locale } from "@/i18n";
import { NumberTicker } from "../motion/NumberTicker";
import { Reveal } from "../motion/Reveal";

export function Metrics({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const intl = locale === "es" ? "es-AR" : "en-US";
  return (
    <section aria-label={dict.sections.metrics} className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <dl className="glass grid grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label.es}
              className={`flex flex-col-reverse gap-2 border-glass-border p-6 sm:p-8 ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i % 2 === 0 ? "border-r" : ""
              } ${i === 1 ? "lg:border-r" : ""}`}
            >
              <dt className="text-sm leading-snug text-muted">{m.label[locale]}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                {m.value.kind === "number" ? (
                  <NumberTicker
                    value={m.value.n}
                    locale={intl}
                    prefix={m.value.prefix?.[locale]}
                    suffix={m.value.suffix?.[locale]}
                  />
                ) : (
                  m.value.text
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
