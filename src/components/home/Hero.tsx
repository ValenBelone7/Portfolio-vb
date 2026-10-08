import Image from "next/image";
import photo from "@/assets/valentin-belone.webp";
import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Magnetic } from "../motion/Magnetic";
import { TiltCard } from "../motion/TiltCard";
import { Arrow, buttonGhost, buttonPrimary } from "../ui";
import { ApiConsole, type ConsoleLine } from "./ApiConsole";
import { HighlightUnderline } from "./HighlightUnderline";

/** Respuesta "JSON" armada con datos reales del perfil (PORTFOLIO_CONTEXT.md). */
function consoleLines(locale: Locale, dict: Dictionary): ConsoleLine[] {
  const users = locale === "es" ? "+1.400" : "1,400+";
  const field = (key: string, value: string, kind: "str" | "num" | "bool", last = false): ConsoleLine => [
    { t: "  " },
    { t: `"${key}"`, c: "key" },
    { t: ": ", c: "punct" },
    { t: kind === "str" ? `"${value}"` : value, c: kind },
    { t: last ? "" : ",", c: "punct" },
  ];
  return [
    [{ t: "GET ", c: "method" }, { t: "/api/v1/developers/valentin-belone" }],
    [
      { t: "HTTP/1.1 ", c: "dim" },
      { t: "200 OK", c: "ok" },
    ],
    [],
    [{ t: "{", c: "punct" }],
    field("name", profile.name, "str"),
    field("role", dict.hero.role, "str"),
    [
      { t: "  " },
      { t: '"stack"', c: "key" },
      { t: ": [", c: "punct" },
      { t: '"Python"', c: "str" },
      { t: ", ", c: "punct" },
      { t: '"Django"', c: "str" },
      { t: ", ", c: "punct" },
      { t: '"DRF"', c: "str" },
      { t: ", ", c: "punct" },
      { t: '"PostgreSQL"', c: "str" },
      { t: "],", c: "punct" },
    ],
    field("systems_in_production", "4", "num"),
    field("active_contracts", "300–400", "str"),
    field("verified_users", users, "str"),
    field("location", "Córdoba, AR (UTC-3)", "str"),
    field("open_to_work", "true", "bool"),
    field("remote", "true", "bool", true),
    [{ t: "}", c: "punct" }],
  ];
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
      <div className="min-w-0">
        <div className="animate-rise">
          <p className="glass inline-flex items-center gap-3 rounded-full py-1.5 pr-4 pl-1.5 text-sm">
            <Image src={photo} alt="" sizes="28px" className="size-7 rounded-full object-cover" />
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {dict.hero.available}
          </p>
        </div>

        <h1 className="mt-8">
          <span className="block animate-rise [animation-delay:60ms]">
            <span className="block font-mono text-sm tracking-wide text-muted sm:text-base">
              {profile.name} · <span className="text-accent">{dict.hero.role}</span>
            </span>
          </span>
          <span className="block">
            <span className="mt-4 block font-display text-[2.6rem] leading-[1.04] font-semibold tracking-tight text-balance sm:text-6xl xl:text-[4.5rem]">
              {dict.hero.titleBefore}{" "}
              <span className="relative inline-block whitespace-nowrap text-accent">
                {dict.hero.titleHighlight}
                <HighlightUnderline />
              </span>{" "}
              {dict.hero.titleAfter}
            </span>
          </span>
        </h1>

        <div className="animate-rise [animation-delay:220ms]">
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted">{dict.hero.lead}</p>
        </div>

        <div className="animate-rise [animation-delay:300ms]">
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#projects" className={buttonPrimary}>
                {dict.hero.viewProjects}
                <svg
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cvPath} download className={buttonGhost}>
                {dict.hero.downloadCv}
              </a>
            </Magnetic>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={buttonGhost}>
              GitHub
              <Arrow />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={buttonGhost}>
              LinkedIn
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      <div className="min-w-0 animate-rise [animation-delay:200ms]">
        <TiltCard max={7} className="rounded-3xl">
          <ApiConsole lines={consoleLines(locale, dict)} title={dict.hero.consoleTitle} />
        </TiltCard>
      </div>
    </section>
  );
}
