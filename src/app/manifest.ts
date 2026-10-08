import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Desarrollador Backend`,
    short_name: profile.name,
    description: "Desarrollador backend con Python, Django y PostgreSQL.",
    start_url: "/",
    display: "browser",
    background_color: "#0b0d10",
    theme_color: "#0b0d10",
    lang: "es",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
