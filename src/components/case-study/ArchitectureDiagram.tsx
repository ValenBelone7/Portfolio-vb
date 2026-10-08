import type { Architecture, DiagramBox } from "@/content/case-studies";
import type { Locale } from "@/i18n";

function Box({ box, locale, variant = "main" }: { box: DiagramBox; locale: Locale; variant?: "main" | "side" }) {
  const title = typeof box.title === "string" ? box.title : box.title[locale];
  return (
    <div
      className={
        variant === "main"
          ? "rounded-2xl border border-accent/50 bg-glass-strong px-4 py-3 shadow-[0_0_30px_-12px_var(--accent)] transition-transform duration-300 hover:-translate-y-0.5"
          : "rounded-2xl border border-dashed border-glass-border bg-glass px-4 py-3 transition-colors duration-300 hover:border-accent/50"
      }
    >
      <p className="font-mono text-sm font-semibold">{title}</p>
      {box.detail && <p className="mt-0.5 text-xs text-muted">{box.detail[locale]}</p>}
    </div>
  );
}

/** Cadena principal vertical; las integraciones cuelgan del nodo `attachTo`. */
export function ArchitectureDiagram({ arch, locale }: { arch: Architecture; locale: Locale }) {
  return (
    <figure>
      <ol>
        {arch.flow.map((node, i) => (
          <li key={i}>
            <div className="grid items-center gap-3 md:grid-cols-[16rem_2.5rem_1fr]">
              <Box box={node} locale={locale} />
              {i === arch.attachTo && arch.integrations.length > 0 && (
                <>
                  <span
                    className="hidden h-px bg-linear-to-r from-accent/70 to-glass-border md:block"
                    aria-hidden="true"
                  />
                  <ul className="grid gap-2 border-l border-glass-border pl-3 sm:grid-cols-2 md:border-l-0 md:pl-0">
                    {arch.integrations.map((side, j) => (
                      <li key={j}>
                        <Box box={side} locale={locale} variant="side" />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {i < arch.flow.length - 1 && (
              <div className="flex w-full items-center gap-2 py-2.5 pl-6 md:w-64">
                <span className="font-mono text-accent" aria-hidden="true">
                  ↓
                </span>
                {node.edge && (
                  <span className="font-mono text-xs text-muted">
                    {typeof node.edge === "string" ? node.edge : node.edge[locale]}
                  </span>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
      {arch.note && <figcaption className="mt-5 text-sm text-muted">{arch.note[locale]}</figcaption>}
    </figure>
  );
}
