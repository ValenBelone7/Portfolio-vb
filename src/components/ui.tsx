import type { ProjectLink } from "@/content/types";
import type { Dictionary } from "@/i18n";
import { Reveal } from "./motion/Reveal";

/**
 * Sección con encabezado asimétrico: en pantallas grandes el título queda fijo en la
 * columna izquierda y el contenido ocupa el resto. `wide` pone el contenido debajo,
 * a todo el ancho.
 */
export function Section({
  id,
  index,
  title,
  intro,
  children,
  wide = false,
  className,
}: {
  id: string;
  /** Numeración visible ("01"), decorativa. */
  index?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}) {
  const heading = (
    <Reveal>
      {index && (
        <p className="eyebrow mb-5 flex items-center gap-3 text-accent" aria-hidden="true">
          <span>{index}</span>
          <span className="h-px w-10 bg-accent/50" />
        </p>
      )}
      <h2
        id={`${id}-title`}
        className="font-display text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-[5.25rem]"
      >
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
    </Reveal>
  );

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`shell py-20 sm:py-28 ${className ?? ""}`}>
      {wide ? (
        <>
          <div className="max-w-3xl">{heading}</div>
          <div className="mt-14 sm:mt-20">{children}</div>
        </>
      ) : (
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">{heading}</div>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      )}
    </section>
  );
}

export function Tags({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={`size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

// Chips como los de la referencia de paleta: uno relleno y uno con borde.
export const buttonPrimary =
  "group inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-5 font-mono text-xs tracking-[0.12em] text-accent-fg uppercase transition-[transform,background-color] hover:bg-accent/90 active:scale-[0.97]";

export const buttonGhost =
  "group inline-flex h-12 items-center gap-2 rounded-lg border border-current/25 px-5 font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:border-accent hover:text-accent active:scale-[0.97]";

export function ProjectLinks({ links, dict }: { links: ProjectLink[]; dict: Dictionary }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group link-underline inline-flex items-center gap-1 pb-0.5 font-mono text-xs tracking-[0.1em] uppercase transition-colors hover:text-accent"
          >
            {link.label ?? dict.project[link.kind]}
            <Arrow className="size-3.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
