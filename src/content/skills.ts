import type { Localized } from "./types";

// Fuente: PORTFOLIO_CONTEXT.md, sección 7. Sin niveles ni porcentajes.
// No agregar: Flask, R, Bootstrap, Chakra UI, Astro, MongoDB, SQLite.
export const skills: { category: Localized; items: Localized<string[]> }[] = [
  {
    category: { es: "Backend", en: "Backend" },
    items: {
      es: ["Python", "Django", "Django REST Framework", "APIs REST", "Autenticación JWT", "Roles y permisos"],
      en: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT authentication", "Roles & permissions"],
    },
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    items: {
      es: ["PostgreSQL", "MySQL", "SQL", "Funciones RPC", "Modelado relacional y normalización"],
      en: ["PostgreSQL", "MySQL", "SQL", "RPC functions", "Relational modeling & normalization"],
    },
  },
  {
    category: { es: "IA y automatización", en: "AI & automation" },
    items: {
      es: ["Integración de LLMs", "Agentes de IA", "n8n", "Bots de WhatsApp y Telegram"],
      en: ["LLM integration", "AI agents", "n8n", "WhatsApp & Telegram bots"],
    },
  },
  {
    category: { es: "Frontend (complementario)", en: "Frontend (complementary)" },
    items: {
      es: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      en: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: {
      es: ["Git", "GitHub", "GitHub Actions (CI/CD)", "Linux", "Scrum", "Jira"],
      en: ["Git", "GitHub", "GitHub Actions (CI/CD)", "Linux", "Scrum", "Jira"],
    },
  },
  {
    category: { es: "En formación", en: "Currently learning" },
    items: {
      es: ["Docker", "Cloud computing"],
      en: ["Docker", "Cloud computing"],
    },
  },
];
