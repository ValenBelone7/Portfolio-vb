import type { Experience } from "./types";

// Fuente: PORTFOLIO_CONTEXT.md, sección 5.
export const experience: Experience[] = [
  {
    role: { es: "Co-fundador y Desarrollador de Software", en: "Co-founder & Software Developer" },
    company: "PB DevHouse",
    companyUrl: "https://www.pb-devhouse.com/",
    dates: { es: "Abr 2025 – presente", en: "Apr 2025 – present" },
    location: { es: "Río Cuarto, Córdoba · Híbrido", en: "Río Cuarto, Córdoba · Hybrid" },
    context: {
      es: "Sistemas de gestión a medida para PyMEs, de punta a punta: relevamiento con el cliente, modelado de datos, API, despliegue y soporte. Freelance desde abril de 2025 y agencia desde agosto de 2026, junto a Tiago Pescara.",
      en: "Custom management systems for small businesses, end to end: client discovery, data modeling, API, deployment and support. Freelance since April 2025 and an agency since August 2026, with my partner Tiago Pescara.",
    },
    bullets: {
      es: [
        "Giordano Conti Inmobiliaria: sistema que administra entre 300 y 400 contratos activos y reemplazó los contratos en papel y planillas de Excel y el cálculo de cobros con calculadora (Django REST Framework, PostgreSQL, React, Tailwind).",
        "Aumentos por IPC, ICL y Casa Propia con índices obtenidos de las APIs oficiales y guardados en PostgreSQL, cálculo de cuotas mensuales y mora.",
        "Recibos mensuales en PDF y DOCX para inquilinos y propietarios, enviados por WhatsApp.",
        "El Gaucho Transporte: control de viajes con reportes y autocompletado; la carga administrativa bajó de unos 40 a 15 minutos, aproximadamente (Django, Next.js).",
        "MB Reparaciones: stock y cuentas corrientes para un servicio técnico de celulares (Django, Next.js).",
        "Punto Kiosco: sistema de stock, ventas y fiado como desarrollador principal, hoy el SaaS Gestor de Kioscos (Next.js, PostgreSQL).",
        "Generalización de los sistemas inmobiliario y de kiosco como productos SaaS por suscripción, multi-tenant con Row Level Security en PostgreSQL.",
      ],
      en: [
        "Giordano Conti real estate: a system that manages 300–400 active contracts and replaced paper and Excel contracts and calculator-based billing (Django REST Framework, PostgreSQL, React, Tailwind).",
        "Rent increases by IPC, ICL and Casa Propia using indexes fetched from the official APIs and stored in PostgreSQL, plus monthly installment and late-fee calculation.",
        "Monthly PDF and DOCX receipts for tenants and owners, sent over WhatsApp.",
        "El Gaucho Transporte: trip tracking with reports and autocompletion; administrative work dropped from about 40 to roughly 15 minutes (Django, Next.js).",
        "MB Reparaciones: stock and current accounts for a phone repair shop (Django, Next.js).",
        "Punto Kiosco: stock, sales and store credit system as the main developer, now the Gestor de Kioscos SaaS (Next.js, PostgreSQL).",
        "Turned the real estate and convenience store systems into multi-tenant subscription SaaS products, isolated with PostgreSQL Row Level Security.",
      ],
    },
  },
  {
    role: { es: "Desarrollador de Software (part-time)", en: "Software Developer (part-time)" },
    company: "Criptodery",
    dates: { es: "Abr 2026 – presente", en: "Apr 2026 – present" },
    location: { es: "Remoto", en: "Remote" },
    context: {
      es: "Mini App de análisis de trading cripto dentro de Lemon Cash App, con más de 1.400 usuarios verificados. Además, Criptodery contrató a PB DevHouse para desarrollar Criptodery Eye, la herramienta del plan PRO.",
      en: "Crypto trading analysis Mini App inside Lemon Cash App, with more than 1,400 verified users. Criptodery also hired PB DevHouse to build Criptodery Eye, the PRO plan tool.",
    },
    bullets: {
      es: [
        "Pasarela de pagos en criptomonedas para la suscripción PRO con el SDK de Lemon Cash, que habilitó la monetización de la app. Cada pago se verifica también en la red Polygon antes de activar el plan.",
        "Criptodery Eye (con PB DevHouse): validación de trades con gráficos de TradingView y un índice de riesgo por moneda que cruza 21 variables de mercado (liquidaciones, funding rate, transacciones, entre otras).",
        "Criptodery Eye: integración de una IA coach que analiza el trade planeado por el usuario y le devuelve datos y recomendaciones.",
      ],
      en: [
        "Crypto payment gateway for the PRO subscription using the Lemon Cash SDK, which enabled the app's monetization. Every payment is also verified on the Polygon network before the plan is activated.",
        "Criptodery Eye (with PB DevHouse): trade validation with TradingView charts and a per-coin risk index that combines 21 market variables (liquidations, funding rate, transactions, among others).",
        "Criptodery Eye: integrated an AI coach that analyzes the user's planned trade and returns data and recommendations.",
      ],
    },
  },
  {
    role: { es: "Pasante de Automatización con IA", en: "AI Automation Intern" },
    company: "Business Development Agency LLC (BDAgencyPro)",
    dates: { es: "Mar 2026 – Abr 2026", en: "Mar 2026 – Apr 2026" },
    location: { es: "Remoto (EE. UU.)", en: "Remote (US)" },
    bullets: {
      es: [
        "Mantenimiento y mejora de un workflow en n8n para reservar pasajes de colectivo por Telegram, con un agente de IA conversacional que guía al usuario por destinos, horarios y pasajeros.",
        "Trabajo sobre subworkflows por etapa, coordinados por un agente central con memoria y base de datos propia.",
      ],
      en: [
        "Maintained and improved an n8n workflow for booking bus tickets over Telegram, with a conversational AI agent that guides users through destinations, schedules and passengers.",
        "Worked on stage-specific subworkflows coordinated by a central agent with its own memory and database.",
      ],
    },
  },
];
