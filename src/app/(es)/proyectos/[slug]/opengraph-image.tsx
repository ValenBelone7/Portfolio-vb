import { ogSize, renderProjectOgImage } from "@/lib/og";
import { caseStudyParams } from "@/lib/case-study-route";

export const alt = "Caso de estudio de Valentín Belone";
export const size = ogSize;
export const contentType = "image/png";
export const generateStaticParams = caseStudyParams;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  return renderProjectOgImage("es", (await params).slug);
}
