import type { Localized } from "./types";

// Fuente: PORTFOLIO_CONTEXT.md, secciones 4 y 8. Textos tal cual.
export const about: Localized<string[]> = {
  es: [
    "Soy desarrollador backend con Python y Django. Junto a mi socio en PB DevHouse desarrollé cuatro sistemas de gestión que hoy están en producción; el más grande administra entre 300 y 400 contratos de alquiler para una inmobiliaria de Río Cuarto y Serrano. Además trabajo de forma remota en Criptodery, una mini app de trading cripto dentro de Lemon Cash App con más de 1.400 usuarios verificados.",
    "Lo que más me interesa es el backend, el modelado de bases de datos y la IA aplicada a problemas concretos. Para entender de verdad lo que programo, mantengo un repositorio público, Laboratorio, donde practico fundamentos sin usar IA.",
    "Soy aplicado y responsable con lo que me toca, y no tengo problema en preguntar: me gusta aprender de gente que sabe más que yo. Estoy terminando la Tecnicatura Superior en Desarrollo de Software y busco un puesto remoto en un equipo donde seguir creciendo.",
  ],
  en: [
    "I'm a backend developer working with Python and Django. With my partner at PB DevHouse, I've built four management systems that are running in production; the largest one manages 300–400 rental contracts for a real estate agency in Río Cuarto and Serrano, Argentina. I also work remotely at Criptodery, a crypto trading Mini App inside Lemon Cash App with more than 1,400 verified users.",
    "I'm most interested in backend development, database design and AI applied to concrete problems. To make sure I truly understand what I write, I keep a public repository, Laboratorio, where I practice fundamentals without AI.",
    "I'm diligent and take ownership of my work, and I'm never shy to ask questions: I enjoy learning from people who know more than I do. I'm finishing my degree in Software Development and I'm looking for a remote role on a team where I can keep growing.",
  ],
};

export const education = {
  degree: {
    es: "Técnico Superior en Desarrollo de Software",
    en: "Higher Technical Degree in Software Development",
  } satisfies Localized,
  institution: "Instituto Tecnológico Río Cuarto (ITEC)",
  dates: { es: "Feb 2024 – Dic 2026 (esperado)", en: "Feb 2024 – Dec 2026 (expected)" } satisfies Localized,
  status: {
    es: "Cursando el tercer y último año, con todas las materias anteriores aprobadas.",
    en: "In the third and final year, with all previous courses passed.",
  } satisfies Localized,
  subjects: {
    es: [
      "Ingeniería de Software (Django y DRF)",
      "Bases de Datos",
      "Validación y Verificación de Programas",
      "Redes",
      "Sistemas Operativos",
      "Prácticas Profesionalizantes (APIs REST, JWT, CI/CD, Docker, Nginx)",
    ],
    en: [
      "Software Engineering (Django and DRF)",
      "Databases",
      "Program Validation and Verification",
      "Networking",
      "Operating Systems",
      "Professional Practice (REST APIs, JWT, CI/CD, Docker, Nginx)",
    ],
  } satisfies Localized<string[]>,
};

export const languages: Localized<string[]> = {
  es: [
    "Español: nativo.",
    "Inglés: intermedio. Lectura técnica y comprensión auditiva fluidas, conversación en desarrollo.",
  ],
  en: ["Spanish: native.", "English: intermediate. Fluent technical reading and listening, conversation in progress."],
};
