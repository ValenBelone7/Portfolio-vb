import { skills } from "@/content/skills";
import type { Dictionary, Locale } from "@/i18n";
import { Section, Tags } from "../ui";

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="skills" title={dict.sections.skills}>
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category.es}>
            <dt className="mb-3 font-medium">{group.category[locale]}</dt>
            <dd>
              <Tags items={group.items[locale]} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
