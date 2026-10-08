import { skills, type Skill } from "@/content/skills";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { TechLogo } from "../TechLogo";
import { Section } from "../ui";

const label = (s: Skill, locale: Locale) => (typeof s.label === "string" ? s.label : s.label[locale]);

/** Índice tipográfico: una fila por categoría, sin tarjetas. */
export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="skills" index="04" title={dict.sections.skills}>
      <dl className="border-t border-line">
        {skills.map((group, i) => (
          <Reveal
            key={group.id}
            delay={0.04 * i}
            className="grid gap-3 border-b border-line py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
          >
            <dt className={`eyebrow pt-1.5 ${group.id === "backend" ? "text-accent" : "text-muted"}`}>
              {group.category[locale]}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={label(item, "es")}
                    className={`group flex items-center gap-2 ${
                      group.id === "backend" ? "font-display text-2xl" : "text-lg"
                    } ${group.id === "learning" ? "text-muted italic" : ""}`}
                  >
                    {item.icon && (
                      <TechLogo
                        icon={item.icon}
                        brand
                        className={`shrink-0 text-muted ${group.id === "backend" ? "size-5" : "size-4"}`}
                      />
                    )}
                    {label(item, locale)}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
