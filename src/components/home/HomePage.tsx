import { getDictionary, type Locale } from "@/i18n";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { FeaturedProjects } from "./FeaturedProjects";
import { Hero } from "./Hero";
import { MoreProjects } from "./MoreProjects";
import { PersonJsonLd } from "./PersonJsonLd";
import { Skills } from "./Skills";

// Orden según PORTFOLIO_CONTEXT.md, sección 9. Las métricas viven en el hero.
export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PersonJsonLd locale={locale} />
      <Hero locale={locale} dict={dict} />
      <FeaturedProjects locale={locale} dict={dict} />
      <MoreProjects locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Skills locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
