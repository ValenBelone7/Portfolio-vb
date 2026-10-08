import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { caseStudyMetadata, caseStudyParams, findProject } from "@/lib/case-study-route";

export const generateStaticParams = caseStudyParams;

export async function generateMetadata({ params }: PageProps<"/en/proyectos/[slug]">) {
  return caseStudyMetadata("en", (await params).slug);
}

export default async function Page({ params }: PageProps<"/en/proyectos/[slug]">) {
  const { slug } = findProject((await params).slug);
  return <CaseStudyPage locale="en" slug={slug} />;
}
