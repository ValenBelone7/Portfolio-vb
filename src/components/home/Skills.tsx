import { skills, type Skill, type SkillGroup } from "@/content/skills";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";
import { TechLogo } from "../TechLogo";
import { Section } from "../ui";

const label = (s: Skill, locale: Locale) => (typeof s.label === "string" ? s.label : s.label[locale]);
const byId = (id: string) => skills.find((g) => g.id === id)!;

function Layer({
  group,
  step,
  locale,
  dict,
  core = false,
  dashed = false,
}: {
  group: SkillGroup;
  step: string;
  locale: Locale;
  dict: Dictionary;
  core?: boolean;
  dashed?: boolean;
}) {
  const layerName = dict.sections.layers[group.id as keyof Dictionary["sections"]["layers"]];
  return (
    <SpotlightCard
      className={`h-full rounded-2xl p-5 sm:p-6 ${
        dashed ? "border border-dashed border-line" : core ? "panel border-accent!" : "panel"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className={`eyebrow ${core ? "text-accent" : "text-muted"}`}>
          {step} · {layerName}
        </p>
        {core && (
          <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] text-accent-fg uppercase">
            {dict.sections.core}
          </span>
        )}
      </div>
      <h3 className="mt-3 font-display text-lg">{group.category[locale]}</h3>
      <ul className="mt-4 space-y-2">
        {group.items.map((item) => (
          <li key={label(item, "es")} className="group flex items-center gap-2.5 font-mono text-sm">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-surface-strong text-muted">
              {item.icon ? (
                <TechLogo icon={item.icon} brand className="size-3.5" />
              ) : (
                <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
              )}
            </span>
            {label(item, locale)}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

/** Conector entre capas: la petición va, la respuesta vuelve. */
function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
      <div className="relative flex flex-col items-center gap-1.5 font-mono text-[10px] text-muted lg:w-full">
        <span>request</span>
        <span className="relative block h-8 w-px overflow-hidden bg-line lg:h-px lg:w-full">
          <span className="absolute top-0 left-0 size-1.5 -translate-x-1/2 animate-[flow-y_2s_linear_infinite] rounded-full bg-accent lg:-translate-y-1/2 lg:animate-[flow-x_2s_linear_infinite]" />
        </span>
        <span>response</span>
      </div>
    </div>
  );
}

/** Habilidades como el recorrido de una petición: cliente → API y lógica → datos. */
export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="skills" index="04" title={dict.sections.skills} intro={dict.sections.skillsIntro} wide>
      <Reveal>
        <div className="grid lg:grid-cols-[1fr_4.5rem_1.25fr_4.5rem_1fr] lg:items-stretch">
          <Layer group={byId("frontend")} step="01" locale={locale} dict={dict} />
          <Connector />
          <Layer group={byId("backend")} step="02" locale={locale} dict={dict} core />
          <Connector />
          <Layer group={byId("databases")} step="03" locale={locale} dict={dict} />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <Layer group={byId("ai")} step="+" locale={locale} dict={dict} />
          <Layer group={byId("tools")} step="+" locale={locale} dict={dict} />
          <Layer group={byId("learning")} step="→" locale={locale} dict={dict} dashed />
        </div>
      </Reveal>
    </Section>
  );
}
