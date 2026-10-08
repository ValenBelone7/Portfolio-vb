import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { caseStudyMetadata, caseStudyParams, findProject } from "@/lib/case-study-route";

export const generateStaticParams = caseStudyParams;

export async function generateMetadata({ params }: PageProps<"/proyectos/[slug]">) {
  return caseStudyMetadata("es", (await params).slug);
}

export default async function Page({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = findProject((await params).slug);
  return <CaseStudyPage locale="es" slug={slug} />;
}
