import type { TechIcon } from "./tech-icons";
import type { Localized } from "./types";

export type Skill = { label: string | Localized; icon?: TechIcon };
export type SkillGroup = { id: string; category: Localized; items: Skill[] };

// Fuente: PORTFOLIO_CONTEXT.md, sección 7. Sin niveles ni porcentajes.
// No agregar: Flask, R, Bootstrap, Chakra UI, Astro, MongoDB, SQLite.
export const skills: SkillGroup[] = [
  {
    id: "backend",
    category: { es: "Backend", en: "Backend" },
    items: [
      { label: "Python", icon: "python" },
      { label: "Django", icon: "django" },
      { label: "Django REST Framework", icon: "django" },
      { label: { es: "APIs REST", en: "REST APIs" } },
      { label: { es: "Autenticación JWT", en: "JWT authentication" }, icon: "jsonwebtokens" },
      { label: { es: "Roles y permisos", en: "Roles & permissions" } },
    ],
  },
  {
    id: "databases",
    category: { es: "Bases de datos", en: "Databases" },
    items: [
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MySQL", icon: "mysql" },
      { label: "SQL" },
      { label: { es: "Funciones RPC", en: "RPC functions" } },
      { label: { es: "Modelado relacional y normalización", en: "Relational modeling & normalization" } },
    ],
  },
  {
    id: "ai",
    category: { es: "IA y automatización", en: "AI & automation" },
    items: [
      { label: { es: "Integración de LLMs", en: "LLM integration" } },
      { label: { es: "Agentes de IA", en: "AI agents" } },
      { label: "n8n" },
      { label: { es: "Bots de WhatsApp", en: "WhatsApp bots" }, icon: "whatsapp" },
      { label: { es: "Bots de Telegram", en: "Telegram bots" }, icon: "telegram" },
    ],
  },
  {
    id: "frontend",
    category: { es: "Frontend (complementario)", en: "Frontend (complementary)" },
    items: [
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "nextdotjs" },
      { label: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "tools",
    category: { es: "Herramientas", en: "Tools" },
    items: [
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "GitHub Actions (CI/CD)", icon: "githubactions" },
      { label: "Linux", icon: "linux" },
      { label: "Scrum" },
      { label: "Jira", icon: "jira" },
    ],
  },
  {
    id: "learning",
    category: { es: "En formación", en: "Currently learning" },
    items: [{ label: "Docker", icon: "docker" }, { label: "Cloud computing" }],
  },
];
