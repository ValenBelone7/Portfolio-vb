import type { TechIcon } from "./tech-icons";

/** Logo para cada nombre de tecnología usado en el contenido (si hay uno). */
const map: Record<string, TechIcon> = {
  Python: "python",
  Django: "django",
  "Django REST Framework": "django",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Tailwind CSS": "tailwindcss",
  JWT: "jsonwebtokens",
};

export const iconFor = (name: string): TechIcon | undefined => map[name];
