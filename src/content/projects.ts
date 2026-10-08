import type { FeaturedProject, Project } from "./types";

// Fuente: PORTFOLIO_CONTEXT.md, sección 6.
// Contrata y Gestor de Kioscos todavía no tienen clientes de suscripción: no afirmarlo.

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "contrata",
    name: "Contrata",
    subtitle: { es: "Gestor de contratos inmobiliarios", en: "Real estate contract manager" },
    kind: { es: "Cliente real + producto SaaS", en: "Real client + SaaS product" },
    summary: {
      es: "Sistema a medida para Giordano Conti Inmobiliaria, generalizado como SaaS: índices oficiales (IPC, ICL, Casa Propia) desde APIs, aumentos, mora y estado de pago por mes, recibos en PDF y DOCX enviados por WhatsApp, sitio público y portal de inquilinos.",
      en: "Custom system for Giordano Conti real estate, generalized as SaaS: official indexes (IPC, ICL, Casa Propia) from APIs, rent increases, late fees and monthly payment status, PDF and DOCX receipts sent over WhatsApp, a public site and a tenant portal.",
    },
    highlight: {
      es: "En producción desde 2025 · 300 a 400 contratos activos",
      en: "In production since 2025 · 300–400 active contracts",
    },
    stack: ["Django REST Framework", "React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    links: [
      { kind: "product", href: "https://gestorcontratos.pb-devhouse.com/" },
      { kind: "caseStudy", href: "https://github.com/ValenBelone7/contrata-case-study" },
    ],
    privateCode: { es: "Código privado (cliente)", en: "Private code (client)" },
  },
  {
    slug: "criptodery",
    name: "Criptodery",
    subtitle: { es: "Mini app de trading dentro de Lemon Cash", en: "Trading Mini App inside Lemon Cash" },
    kind: { es: "Empleo part-time + cliente de PB DevHouse", en: "Part-time role + PB DevHouse client" },
    summary: {
      es: "Como empleado desarrollé la pasarela de pagos con el SDK de Lemon Cash para suscribirse al plan PRO desde la wallet de Lemon. Con PB DevHouse desarrollamos Criptodery Eye: gráfico con TradingView, un índice de riesgo por moneda que cruza 21 variables de mercado y una IA coach que analiza el trade planeado.",
      en: "As an employee, I built the payment gateway with the Lemon Cash SDK so users can subscribe to the PRO plan from their Lemon wallet. With PB DevHouse we built Criptodery Eye: a TradingView chart, a per-coin risk index that combines 21 market variables, and an AI coach that analyzes the planned trade.",
    },
    highlight: { es: "Más de 1.400 usuarios verificados", en: "1,400+ verified users" },
    stack: ["Lemon Cash SDK", "Polygon", "TradingView"],
    links: [],
    privateCode: { es: "Código privado (empresa)", en: "Private code (company)" },
  },
  {
    slug: "gestor-kioscos",
    name: "Gestor de Kioscos",
    subtitle: {
      es: "Stock, ventas y fiado para comercios chicos",
      en: "Stock, sales and store credit for small retailers",
    },
    kind: { es: "Cliente real (Punto Kiosco) + producto SaaS", en: "Real client (Punto Kiosco) + SaaS product" },
    summary: {
      es: "SaaS multi-tenant de stock, compras y ventas que nació del sistema de Punto Kiosco: stock que solo cambia a través de funciones atómicas de PostgreSQL, punto de venta con lector de código de barras, fiado con cobros parciales, reportes de ganancia real, ventas sin conexión y facturación electrónica con ARCA.",
      en: "Multi-tenant stock, purchasing and sales SaaS that started as Punto Kiosco's system: stock that only changes through atomic PostgreSQL functions, a point of sale with barcode scanning, store credit with partial payments, real-profit reports, offline sales and electronic invoicing through ARCA.",
    },
    highlight: {
      es: "En producción desde agosto de 2026 · desarrollador principal",
      en: "In production since August 2026 · main developer",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    links: [
      { kind: "product", href: "https://gestorkiosco.pb-devhouse.com/" },
      { kind: "demo", href: "https://demo-kiosco-web-app.vercel.app/" },
      { kind: "caseStudy", href: "https://github.com/ValenBelone7/stock-case-study" },
    ],
    privateCode: { es: "Código privado (cliente)", en: "Private code (client)" },
  },
];

/** Se muestra aparte: es prueba de método, no un proyecto más. */
export const laboratorio: Project = {
  name: "Laboratorio",
  kind: { es: "Aprendizaje personal", en: "Personal learning" },
  summary: {
    es: "Practico fundamentos de backend sin IA, organizados en fases, lecciones, teoría, ejercicios, repasos y notas. Existe para entender de verdad lo que programo y poder resolver ejercicios en vivo.",
    en: "I practice backend fundamentals without AI, organized into phases, lessons, theory, exercises, reviews and notes. It exists so I truly understand what I write and can solve exercises live.",
  },
  stack: ["Python", "SQL"],
  links: [{ kind: "repo", href: "https://github.com/ValenBelone7/Laboratorio" }],
};

export const otherProjects: Project[] = [
  {
    name: "Safe Legacy API",
    kind: { es: "Proyecto académico · 2026", en: "Academic project · 2026" },
    summary: {
      es: "API REST de herencia digital: los usuarios se reportan con vida periódicamente, registran sus activos y designan herederos, que los reciben si el usuario deja de reportarse. Con Tiago Pescara.",
      en: "Digital inheritance REST API: users periodically check in, register their assets and designate heirs, who receive them if the user stops checking in. Built with Tiago Pescara.",
    },
    stack: ["Python", "Django REST Framework", "JWT"],
    links: [{ kind: "repo", href: "https://github.com/ValenBelone7/safe-legacy-api" }],
  },
  {
    name: "El Gaucho Transporte",
    kind: { es: "Cliente real", en: "Real client" },
    summary: {
      es: "Control de viajes para una empresa con 2 camiones, con reportes y autocompletado de datos. Redujo la carga administrativa de unos 40 a 15 minutos, aproximadamente.",
      en: "Trip tracking for a company with 2 trucks, with reports and data autocompletion. Cut administrative work from about 40 to roughly 15 minutes.",
    },
    stack: ["Django", "Next.js"],
    links: [],
  },
  {
    name: "MB Reparaciones",
    kind: { es: "Cliente real", en: "Real client" },
    summary: {
      es: "Stock y cuentas corrientes para un servicio técnico de celulares.",
      en: "Stock and current accounts for a phone repair shop.",
    },
    stack: ["Django", "Next.js"],
    links: [],
  },
  {
    name: "Gym Tracker",
    kind: { es: "Proyecto personal", en: "Personal project" },
    summary: {
      es: "App de seguimiento de entrenamientos con API en Django y frontend en React.",
      en: "Workout tracking app with a Django API and a React frontend.",
    },
    stack: ["Django", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { kind: "repo", href: "https://github.com/ValenBelone7/gym-tracker-api", label: "API" },
      { kind: "repo", href: "https://github.com/ValenBelone7/gym-tracker-web", label: "Web" },
    ],
  },
  {
    name: "Vinoteca",
    kind: { es: "Proyecto personal", en: "Personal project" },
    summary: {
      es: "Sitio con Django y templates, autenticación y CRUD completo.",
      en: "Django site with templates, authentication and full CRUD.",
    },
    stack: ["Django"],
    links: [{ kind: "repo", href: "https://github.com/ValenBelone7/vinoteca-django" }],
  },
  {
    name: "Cotizador IA",
    kind: { es: "En desarrollo", en: "In progress" },
    summary: {
      es: "Recibe por WhatsApp fotos y descripciones de los clientes, las analiza con IA a partir del stock y los datos del negocio y genera un presupuesto que el negocio confirma y envía.",
      en: "Receives photos and descriptions from customers over WhatsApp, analyzes them with AI against the business's stock and data, and drafts a quote the business confirms and sends.",
    },
    stack: [],
    links: [],
    upcoming: true,
  },
];
