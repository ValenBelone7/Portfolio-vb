import "../globals.css";
import { RootDocument } from "@/components/layout/RootDocument";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es");
export { viewport } from "@/lib/metadata";

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
