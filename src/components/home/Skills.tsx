import { skills, type Skill } from "@/content/skills";
import { techIcons, type TechIcon } from "@/content/tech-icons";
import type { Dictionary, Locale } from "@/i18n";
import { Marquee } from "../motion/Marquee";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";
import { TechLogo } from "../TechLogo";
import { Section } from "../ui";

const label = (s: Skill, locale: Locale) => (typeof s.label === "string" ? s.label : s.label[locale]);

// Disposición del bento: Backend ocupa el bloque grande.
const layout: Record<string, string> = {
  backend: "md:col-span-2",
  databases: "",
  ai: "",
  frontend: "",
  tools: "",
  learning: "md:col-span-2 lg:col-span-3",
};

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // Cinta de logos: cada ícono una sola vez.
  const logos = [...new Set(skills.flatMap((g) => g.items.map((i) => i.icon)).filter(Boolean))] as TechIcon[];

  return (
    <Section id="skills" index="04" title={dict.sections.skills}>
      <Reveal>
        <div className="mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <Marquee duration="45s">
            {logos.map((icon) => (
              <span
                key={icon}
                className="group glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-muted"
              >
                <TechLogo icon={icon} brand className="size-4" />
                {techIcons[icon].title}
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const big = group.id === "backend";
          const learning = group.id === "learning";
          return (
            <li key={group.id} className={layout[group.id]}>
              <Reveal className="h-full" delay={0.05 * (i % 3)}>
                <SpotlightCard
                  className={`h-full rounded-3xl p-6 sm:p-7 ${
                    learning ? "border border-dashed border-accent/40 bg-transparent" : "glass"
                  }`}
                >
                  <h3 className={`font-display font-semibold ${big ? "text-3xl" : "text-xl"}`}>
                    {group.category[locale]}
                  </h3>
                  <ul
                    className={`mt-6 grid gap-2 ${big ? "sm:grid-cols-2" : ""} ${learning ? "sm:grid-cols-2 lg:grid-cols-4" : ""}`}
                  >
                    {group.items.map((item) => (
                      <li
                        key={label(item, "es")}
                        className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-glass-border hover:bg-glass"
                      >
                        <span
                          className={`flex shrink-0 items-center justify-center rounded-lg bg-glass-strong text-muted transition-transform duration-300 group-hover:scale-110 ${
                            big ? "size-10" : "size-8"
                          }`}
                        >
                          {item.icon ? (
                            <TechLogo icon={item.icon} brand className={big ? "size-5" : "size-4"} />
                          ) : (
                            <span aria-hidden="true" className="size-1.5 rotate-45 bg-accent" />
                          )}
                        </span>
                        <span className={big ? "text-base" : "text-sm"}>{label(item, locale)}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
