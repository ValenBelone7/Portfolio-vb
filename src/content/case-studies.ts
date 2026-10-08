import type { StaticImageData } from "next/image";
import criptoAnalisis from "@/assets/projects/criptodery/analisis-ia.webp";
import criptoGrafico from "@/assets/projects/criptodery/grafico.webp";
import criptoIndice from "@/assets/projects/criptodery/indice-trampa.webp";
import criptoResultado from "@/assets/projects/criptodery/resultado-trade.webp";
import criptoValidador from "@/assets/projects/criptodery/validador.webp";
import contrataDashboard from "@/assets/projects/contrata/panel-de-control.webp";
import contrataDetalle from "@/assets/projects/contrata/detalle-propiedad.webp";
import contrataPanel from "@/assets/projects/contrata/panel-propiedades.webp";
import contrataHistorial from "@/assets/projects/contrata/portal-inquilino-historial.webp";
import contrataMonto from "@/assets/projects/contrata/portal-inquilino-monto.webp";
import contrataSitio from "@/assets/projects/contrata/sitio-publico.webp";
import kioscoDashboard from "@/assets/projects/gestor-kioscos/dashboard.webp";
import kioscoVenta from "@/assets/projects/gestor-kioscos/nueva-venta.webp";
import kioscoProductos from "@/assets/projects/gestor-kioscos/productos.webp";
import kioscoReportes from "@/assets/projects/gestor-kioscos/reportes.webp";
import type { Localized } from "./types";

export type DiagramBox = { title: string | Localized; detail?: Localized };

export type Architecture = {
  /** Solo si el proyecto muestra más de un diagrama. */
  title?: Localized;
  /** Cadena principal, de arriba hacia abajo. `edge` es la etiqueta de la flecha hacia el siguiente. */
  flow: (DiagramBox & { edge?: string | Localized })[];
  /** Servicios conectados al nodo `flow[attachTo]`. */
  integrations: DiagramBox[];
  attachTo: number;
  note?: Localized;
};

export type ListGroup = { title: Localized; items: Localized<string[]> };

export type Screenshot = {
  src: StaticImageData;
  alt: Localized;
  device: "desktop" | "mobile";
};

export type CaseStudy = {
  problem: Localized;
  solution: Localized<string[]>;
  /** Bloque extra dentro de Solución (p. ej. lo que se sumó al pasar a SaaS). */
  subsection?: ListGroup;
  role: { summary: Localized; groups?: ListGroup[]; note?: Localized };
  architectures: Architecture[];
  challenges: { title: Localized; body: Localized }[];
  result: Localized<string[]>;
  screenshots: Screenshot[];
  screenshotsNote: Localized;
};

const testData: Localized = {
  es: "Capturas de la demo, con datos de prueba.",
  en: "Screenshots from the demo, with test data.",
};

// Fuentes: PORTFOLIO_CONTEXT.md y los README públicos de contrata-case-study y stock-case-study.
// No nombrar servicios de hosting: Supabase se presenta como PostgreSQL.
export const caseStudies: Record<string, CaseStudy> = {
  contrata: {
    problem: {
      es: "La inmobiliaria Giordano Conti llevaba sus contratos de alquiler en papel y en planillas de Excel. Los cobros se calculaban con calculadora, cada aumento obligaba a buscar a mano los índices que publica el gobierno, contrato por contrato, y la mora se calculaba cuando alguien se acordaba.",
      en: "Giordano Conti real estate agency kept its rental contracts on paper and in Excel spreadsheets. Payments were calculated with a calculator, every rent increase meant looking up government-published indexes by hand, contract by contract, and late fees were computed whenever someone remembered.",
    },
    solution: {
      es: [
        "Contratos centralizados con inquilino, garantes, propietario, fechas, montos, gastos extra y porcentajes.",
        "Calendario de pagos generado automáticamente para todo el plazo del contrato.",
        "Aumentos por índice oficial (IPC, ICL, Casa Propia), porcentaje fijo o monto fijo, según el ciclo de cada contrato: mensual, trimestral, cada 4 o 6 meses o anual.",
        "Índices obtenidos automáticamente de las fuentes oficiales y guardados en PostgreSQL.",
        "Mora (monto fijo por día o porcentaje diario), estado de pago de cada mes y una vista de los meses impagos de toda la cartera.",
        "Recibos para inquilino y propietario en PDF y DOCX con la marca de la inmobiliaria, enviados por WhatsApp.",
        "Dashboard y estadísticas con los números clave de la inmobiliaria.",
      ],
      en: [
        "Centralized contracts with tenant, guarantors, owner, dates, amounts, extra charges and percentages.",
        "A payment calendar generated automatically for the whole contract term.",
        "Rent increases by official index (IPC, ICL, Casa Propia), fixed percentage or fixed amount, on each contract's own cycle: monthly, quarterly, every 4 or 6 months, or yearly.",
        "Index values fetched automatically from official sources and stored in PostgreSQL.",
        "Late fees (fixed per day or daily percentage), payment status for every month and a portfolio-wide view of unpaid months.",
        "Receipts for tenant and owner as PDF and DOCX with the agency's branding, sent over WhatsApp.",
        "Dashboard and statistics with the agency's key numbers.",
      ],
    },
    subsection: {
      title: { es: "De sistema a medida a producto: Contrata", en: "From custom system to product: Contrata" },
      items: {
        es: [
          "Varias inmobiliarias en el mismo sistema, cada una aislada con Row Level Security en PostgreSQL.",
          "Marca, datos de contacto, textos legales, honorarios e IVA configurables por inmobiliaria.",
          "Planes Lite y Pro.",
          "Sitio web público de propiedades, portal para que los inquilinos vean sus pagos y carga de comprobantes.",
          "Más índices de actualización.",
        ],
        en: [
          "Many agencies in the same system, each one isolated with PostgreSQL Row Level Security.",
          "Per-agency branding, contact details, legal text, fees and VAT.",
          "Lite and Pro plans.",
          "Public property website, a tenant portal to check payments, and payment receipt uploads.",
          "More adjustment indexes.",
        ],
      },
    },
    role: {
      summary: {
        es: "Lo desarrollamos con Tiago Pescara en PB DevHouse. Soy el dueño del repositorio de la primera versión y trabajé en las dos, sobre todo en el backend y los datos.",
        en: "Built with Tiago Pescara at PB DevHouse. I own the first version's repository and worked on both versions, mostly on the backend and data side.",
      },
      groups: [
        {
          title: {
            es: "Sistema a medida (Django REST Framework, en producción)",
            en: "Custom system (Django REST Framework, in production)",
          },
          items: {
            es: [
              "Soporte multiusuario: la API devuelve a cada cuenta solo sus contratos.",
              "Lógica de aumentos: ajuste manual del alquiler de un mes, aumentos encadenados correctamente sobre un ajuste manual y una protección para no aplicar dos veces el mismo aumento.",
              "Adjuntos de pago por mes, ajustes de suma y resta en los dos recibos (inquilino y propietario) y el diseño del recibo de Giordano Conti.",
              "Calidad: reparé una suite de tests que llevaba meses rota, agregué un test de “golden fixture” para comprobar que la API devuelve lo mismo antes y después de un refactor, eliminé una consulta N+1 del listado de contratos y sumé un comando seed_demo.",
              "Seguridad: saqué credenciales del código, protegí los endpoints de mantenimiento con un token y resolví un incidente en producción causado por un DATABASE_URL mal configurado.",
            ],
            en: [
              "Multi-user support: the API only returns each account's own contracts.",
              "Increase logic: manual override of a single month's rent, increases chained correctly on top of a manual adjustment, and a guard so an increase is never applied twice.",
              "Payment attachments per month, add/subtract adjustments on both receipts (tenant and owner), and the Giordano Conti receipt layout.",
              "Code health: repaired a test suite that had been broken for months, added a “golden fixture” test to prove the API returns the same data before and after a refactor, removed an N+1 query from the contract list and added a seed_demo command.",
              "Security: removed hardcoded credentials, protected maintenance endpoints with a token, and handled a production incident caused by a misconfigured DATABASE_URL.",
            ],
          },
        },
        {
          title: { es: "Contrata (SaaS)", en: "Contrata (SaaS)" },
          items: {
            es: [
              "Aumentos manuales y automáticos y mora (interfaz y funciones en la base), incluida la aplicación en orden de los ciclos vencidos cuando se carga un contrato viejo.",
              "Las tres funciones programadas que obtienen IPC, ICL y Casa Propia, ejecutadas con pg_cron y con acceso restringido.",
              "La página de estadísticas y el cierre de un hueco de RLS en el historial de aumentos.",
              "Un “kill switch” de cuentas que se verifica en cada request.",
              "Un plan de QA de 10 fases (paridad con la primera versión, responsive, navegadores, contraste) y las correcciones que salieron: zona horaria de Argentina, errores de redondeo e IDs inválidos que devolvían 500.",
            ],
            en: [
              "Manual and automatic rent increases and late fees (UI and database functions), including applying overdue cycles in order when an old contract is loaded.",
              "The three scheduled functions that fetch IPC, ICL and Casa Propia, run with pg_cron and with restricted access.",
              "The statistics page, and closing an RLS gap in the increase history table.",
              "An account “kill switch” enforced on every request.",
              "A 10-phase QA plan (parity with the first version, responsive, cross-browser, contrast) and the fixes it found: Argentina time zone, rounding bugs and invalid IDs returning 500.",
            ],
          },
        },
      ],
      note: {
        es: "Tiago construyó la mayor parte de la base y el esquema de la versión SaaS, el plan Pro (panel de inquilinos, bandeja de comprobantes y portal del inquilino), el sitio público de propiedades y la carga de contratos asistida por IA.",
        en: "Tiago built most of the SaaS version's scaffold and schema, the Pro plan (tenant panel, payment proof inbox and tenant portal), the public property site and the AI-assisted contract upload.",
      },
    },
    architectures: [
      {
        title: { es: "Sistema a medida", en: "Custom system" },
        flow: [
          { title: "React + Vite + Tailwind", edge: "API REST · JWT" },
          {
            title: "Django REST Framework",
            detail: { es: "Contratos, aumentos, mora y pagos", en: "Contracts, increases, late fees, payments" },
          },
          { title: "PostgreSQL" },
        ],
        attachTo: 1,
        integrations: [
          {
            title: { es: "Fuentes oficiales", en: "Official sources" },
            detail: { es: "IPC · ICL · Casa Propia", en: "IPC · ICL · Casa Propia" },
          },
          { title: "PDF · DOCX", detail: { es: "Recibos con la marca", en: "Branded receipts" } },
          { title: "WhatsApp", detail: { es: "Envío de recibos", en: "Receipt delivery" } },
        ],
      },
      {
        title: { es: "Contrata (SaaS)", en: "Contrata (SaaS)" },
        flow: [
          {
            title: "Next.js + Tailwind",
            detail: { es: "App Router · Server Actions", en: "App Router · Server Actions" },
            edge: { es: "sesión del usuario", en: "user session" },
          },
          {
            title: "PostgreSQL",
            detail: { es: "Row Level Security por inmobiliaria", en: "Row Level Security per agency" },
          },
        ],
        attachTo: 1,
        integrations: [
          {
            title: { es: "Funciones RPC", en: "RPC functions" },
            detail: { es: "Meses, aumentos, mora", en: "Months, increases, late fees" },
          },
          {
            title: "pg_cron",
            detail: { es: "Trae IPC, ICL y Casa Propia", en: "Fetches IPC, ICL and Casa Propia" },
          },
        ],
      },
    ],
    challenges: [
      {
        title: {
          es: "Modelar los contratos y sus períodos de aumento",
          en: "Modeling contracts and their increase periods",
        },
        body: {
          es: "Un contrato genera una fila por mes durante todo su plazo, con un monto base y uno final (alquiler + gastos extra + IVA + mora). Cada aumento se aplica desde un mes en adelante y queda en un historial al que solo se agregan registros. Los ciclos se identifican por el mes en que empiezan y no por el porcentaje, así dos ciclos con la misma tasa no se confunden. Los meses pagados nunca se modifican, y si alguien no entra por un tiempo, los ciclos vencidos se aplican uno por uno y en orden.",
          en: "A contract generates one row per month for its whole term, each with a base amount and a final amount (rent + extra charges + VAT + late fee). Every increase applies from a given month forward and is written to an append-only history. Cycles are identified by the month they start in, not by percentage, so two cycles with the same rate can't be confused. Paid months are never touched, and when a user hasn't logged in for a while, overdue cycles are applied one by one, in order.",
        },
      },
      {
        title: {
          es: "Obtener y aplicar los índices automáticamente",
          en: "Fetching and applying indexes automatically",
        },
        body: {
          es: "Tareas programadas traen el IPC (INDEC), el ICL (BCRA) y el coeficiente Casa Propia desde fuentes oficiales. Esas fuentes publican con 2 a 4 semanas de atraso, lo que dejaba la mayoría de los ciclos bloqueados. Agregué una sustitución controlada: si solo falta el último mes, se completa con el último valor publicado (nunca dos sustitutos seguidos), el usuario ve un aviso con la fuente atrasada antes de confirmar y el motivo queda en el historial. La aplicación masiva automática sigue siendo estricta y se frena ante datos incompletos.",
          en: "Scheduled jobs pull IPC (INDEC), ICL (BCRA) and the Casa Propia coefficient from official sources. Those sources publish 2–4 weeks late, which left most cycles blocked. I added a controlled substitution: if only the most recent month is missing, it's filled with the last published value (never two substitutes in a row), the user sees a warning naming the late source before confirming, and the reason is stored in the history. Automatic bulk application stays strict and stops at incomplete data.",
        },
      },
      {
        title: { es: "Pasar de un cliente a un SaaS", en: "Turning a single-client system into a SaaS" },
        body: {
          es: "La primera versión asumía una sola inmobiliaria: marca, honorarios y textos de los recibos estaban fijos en el código. En Contrata cada tabla tiene dueño y el aislamiento se aplica en PostgreSQL con Row Level Security, así ni siquiera un bug en la app puede mostrar datos de otra inmobiliaria. La configuración pasó a un perfil por inmobiliaria, y cuatro endpoints de recibos que se habían desincronizado quedaron unificados en uno.",
          en: "The first version assumed a single agency: branding, fees and receipt texts were hardcoded. In Contrata every table has an owner and isolation is enforced in PostgreSQL with Row Level Security, so even a bug in the app can't leak another agency's data. Settings moved to a per-agency profile, and four receipt endpoints that had drifted apart became a single one.",
        },
      },
    ],
    result: {
      es: [
        "En producción desde 2025.",
        "Administra entre 300 y 400 contratos activos en Río Cuarto y Serrano.",
        "Generalizado como producto SaaS: Contrata, con planes Lite y Pro.",
      ],
      en: [
        "In production since 2025.",
        "Manages 300–400 active contracts in Río Cuarto and Serrano.",
        "Turned into a SaaS product: Contrata, with Lite and Pro plans.",
      ],
    },
    screenshots: [
      {
        src: contrataDashboard,
        device: "desktop",
        alt: {
          es: "Panel de control con contratos activos, por vencer, vencidos e ingreso mensual",
          en: "Dashboard with active, expiring and expired contracts and monthly income",
        },
      },
      {
        src: contrataPanel,
        device: "desktop",
        alt: { es: "Panel interno con la cartera de propiedades", en: "Internal panel with the property portfolio" },
      },
      {
        src: contrataSitio,
        device: "desktop",
        alt: { es: "Sitio público de propiedades de la inmobiliaria", en: "The agency's public property site" },
      },
      {
        src: contrataDetalle,
        device: "desktop",
        alt: { es: "Detalle de una propiedad con formulario de consulta", en: "Property detail with an inquiry form" },
      },
      {
        src: contrataMonto,
        device: "desktop",
        alt: { es: "Portal del inquilino: monto del mes con desglose", en: "Tenant portal: monthly amount breakdown" },
      },
      {
        src: contrataHistorial,
        device: "desktop",
        alt: {
          es: "Portal del inquilino: historial de pagos, con un mes pagado con mora",
          en: "Tenant portal: payment history, including a month paid with a late fee",
        },
      },
    ],
    screenshotsNote: testData,
  },

  criptodery: {
    problem: {
      es: "El trader común no tiene acceso fácil a datos de mercado como liquidaciones, funding rate o transacciones antes de abrir una operación. Además, la app necesitaba cobrar su suscripción PRO dentro de Lemon Cash.",
      en: "Regular traders don't have easy access to market data such as liquidations, funding rate or transactions before opening a trade. The app also needed a way to charge for its PRO subscription inside Lemon Cash.",
    },
    solution: {
      es: [
        "Pasarela de pagos con el SDK de Lemon Cash: el usuario paga en cripto desde su wallet de Lemon y se suscribe al plan PRO.",
      ],
      en: [
        "Payment gateway built with the Lemon Cash SDK: users pay in crypto from their Lemon wallet to subscribe to the PRO plan.",
      ],
    },
    subsection: {
      title: {
        es: "Criptodery Eye: datos que el trader convencional no ve",
        en: "Criptodery Eye: data regular traders don't see",
      },
      items: {
        es: [
          "Gráfico propio por moneda con la librería de TradingView.",
          "“Índice de trampa”: un índice de riesgo por moneda que cruza 21 variables de distintas fuentes de datos del mundo cripto (liquidaciones, funding rate, transacciones, entre otras).",
          "Validador de trades: el usuario carga el trade que planea (long o short, entrada, take profit, stop loss, capital y apalancamiento) y una IA que funciona como coach le devuelve datos y consejos.",
        ],
        en: [
          "Per-coin chart built with the TradingView library.",
          "“Trap index”: a per-coin risk index that combines 21 variables from different crypto data sources (liquidations, funding rate, transactions, among others).",
          "Trade validator: users enter the trade they plan (long or short, entry, take profit, stop loss, capital and leverage) and an AI coach returns data and advice.",
        ],
      },
    },
    role: {
      summary: {
        es: "Trabajo en Criptodery como desarrollador part-time desde abril de 2026; ahí desarrollé la pasarela de pagos del plan PRO. Además, Criptodery contrató a PB DevHouse, mi agencia con Tiago Pescara, para desarrollar Criptodery Eye: el gráfico, el índice de trampa, el validador de trades y la integración con la IA.",
        en: "I've worked at Criptodery as a part-time developer since April 2026, where I built the PRO plan payment gateway. Criptodery also hired PB DevHouse, my agency with Tiago Pescara, to build Criptodery Eye: the chart, the trap index, the trade validator and the AI integration.",
      },
    },
    architectures: [
      {
        flow: [
          {
            title: "Lemon Cash App",
            edge: {
              es: "SDK de Lemon · pago en cripto con la wallet",
              en: "Lemon SDK · crypto payment from the wallet",
            },
          },
          {
            title: "Criptodery",
            detail: { es: "Mini App · suscripción PRO", en: "Mini App · PRO subscription" },
            edge: "PRO",
          },
          { title: "Criptodery Eye", detail: { es: "Herramienta del plan PRO", en: "PRO plan tool" } },
        ],
        attachTo: 2,
        integrations: [
          { title: "TradingView", detail: { es: "Gráfico por moneda", en: "Per-coin chart" } },
          {
            title: "21 variables",
            detail: { es: "Fuentes de datos cripto → índice de trampa", en: "Crypto data sources → trap index" },
          },
          {
            title: { es: "IA coach", en: "AI coach" },
            detail: { es: "Datos y consejos sobre el trade", en: "Data and advice on the trade" },
          },
        ],
        note: {
          es: "Vista de alto nivel: el código es privado.",
          en: "High-level view: the code is private.",
        },
      },
    ],
    challenges: [
      {
        title: { es: "Confirmar que el pago llegó de verdad", en: "Confirming the payment really arrived" },
        body: {
          es: "Antes de activar el plan PRO había que asegurarse de que la transacción cripto realmente había impactado en la wallet que recibe los pagos. Lo resolví en el backend: no alcanzaba con el hash de la firma que devuelve Lemon, así que además verifico la transacción en la red Polygon.",
          en: "Before activating the PRO plan, I had to make sure the crypto transaction had actually reached the wallet that receives payments. I solved it in the backend: Lemon's signature hash wasn't enough on its own, so the transaction is also verified on the Polygon network.",
        },
      },
      {
        title: { es: "El peso de cada variable en el índice", en: "Weighting the variables in the index" },
        body: {
          es: "Lo más difícil del índice de trampa fue el análisis matemático: definir cuánto pesa cada una de las 21 variables (liquidaciones, funding rate, transacciones, entre otras) en el resultado final.",
          en: "The hardest part of the trap index was the math: deciding how much each of the 21 variables (liquidations, funding rate, transactions, among others) weighs in the final score.",
        },
      },
    ],
    result: {
      es: [
        "Más de 1.400 usuarios verificados.",
        "La pasarela de pagos habilitó la monetización de la app con la suscripción PRO.",
      ],
      en: [
        "More than 1,400 verified users.",
        "The payment gateway enabled the app's monetization through the PRO subscription.",
      ],
    },
    screenshots: [
      {
        src: criptoGrafico,
        device: "mobile",
        alt: {
          es: "Gráfico de BTC con TradingView dentro de la Mini App",
          en: "BTC chart with TradingView inside the Mini App",
        },
      },
      {
        src: criptoIndice,
        device: "mobile",
        alt: { es: "Índice de trampa de BTC: 39 sobre 100", en: "BTC trap index: 39 out of 100" },
      },
      {
        src: criptoValidador,
        device: "mobile",
        alt: {
          es: "Validador de trade: long o short, entrada, take profit, stop loss, capital y apalancamiento",
          en: "Trade validator: long or short, entry, take profit, stop loss, capital and leverage",
        },
      },
      {
        src: criptoResultado,
        device: "mobile",
        alt: {
          es: "Resultado: el trade del usuario contra el mercado",
          en: "Result: the user's trade versus the market",
        },
      },
      {
        src: criptoAnalisis,
        device: "mobile",
        alt: { es: "Análisis del trade de la IA coach", en: "The AI coach's trade analysis" },
      },
    ],
    screenshotsNote: {
      es: "Capturas de la Mini App en producción, dentro de Lemon Cash.",
      en: "Screenshots of the Mini App in production, inside Lemon Cash.",
    },
  },

  "gestor-kioscos": {
    problem: {
      es: "Punto Kiosco llevaba el stock en un cuaderno o una planilla, así que nadie sabía el stock real al cierre del día. El fiado a clientes habituales se anotaba a mano, y el dueño no podía saber qué productos le dejaban ganancia: los márgenes se estimaban con los precios del día, no con lo que costó cada producto al comprarlo.",
      en: "Punto Kiosco tracked stock in a notebook or a spreadsheet, so nobody knew the real stock at the end of the day. Store credit (fiado) for regular customers was written down by hand, and the owner couldn't tell which products actually made money: margins were guessed from today's prices, not from what each item cost when it was bought.",
    },
    solution: {
      es: [
        "Catálogo de productos, categorías y proveedores, con búsqueda, filtros y baja lógica para los productos con historial.",
        "Stock que no se desfasa: cada compra, venta y ajuste manual pasa por una función atómica de PostgreSQL y deja un movimiento rastreable.",
        "Punto de venta rápido, con totales en vivo, descuentos por línea, combos y lector de código de barras.",
        "Fiado: deuda por cliente, cobros parciales aplicados en orden (FIFO) e historial de compras de cada persona.",
        "Reportes calculados en la base: ventas, compras, inventario valorizado, ganancia y margen por período, y los productos más y menos vendidos y rentables.",
        "Dashboard con los indicadores del día, ventas de los últimos 14 días y alertas de stock bajo.",
        "Ventas seguras sin conexión: si se corta internet mientras se cobra, la venta queda en cola y se sincroniza cuando vuelve la conexión.",
      ],
      en: [
        "Catalog of products, categories and suppliers, with search, filters and soft delete for products that have history.",
        "Stock that can't drift: every purchase, sale and manual adjustment goes through an atomic PostgreSQL function and leaves a traceable movement.",
        "Fast point of sale, with live totals, per-line discounts, combos and barcode scanner support.",
        "Store credit (fiado): a debt per customer, partial payments applied FIFO and a purchase history for each person.",
        "Reports aggregated in the database: sales, purchases, valued inventory, profit and margin per period, plus best and worst sellers and the most and least profitable products.",
        "Dashboard with the day's KPIs, a 14-day sales chart and low-stock alerts.",
        "Offline-safe checkout: if the connection drops while a sale is being charged, the sale is queued and synced when the connection comes back.",
      ],
    },
    subsection: {
      title: { es: "Plan Pro", en: "Pro plan" },
      items: {
        es: [
          "Roles de administrador y empleado, con registro de auditoría.",
          "Impresión de tickets térmicos de 58 y 80 mm.",
          "Facturación electrónica (Factura C) con ARCA, a través de un proveedor de facturación.",
        ],
        en: [
          "Admin and employee roles, with an audit trail.",
          "58 and 80 mm thermal ticket printing.",
          "Electronic invoicing (Factura C) with ARCA, through an invoicing provider.",
        ],
      },
    },
    role: {
      summary: {
        es: "Soy el desarrollador principal del proyecto (91 de sus 94 commits). Lo hicimos con Tiago Pescara en PB DevHouse.",
        en: "I'm the main developer on the project (91 of its 94 commits). Built with Tiago Pescara at PB DevHouse.",
      },
      groups: [
        {
          title: { es: "Lo que construí", en: "What I built" },
          items: {
            es: [
              "La migración a multi-tenant: una columna kiosco_id en cada tabla del negocio, políticas RLS por comercio, una función mi_kiosco_id() y unicidad por comercio para códigos de barras, códigos de producto y nombres de clientes.",
              "Las funciones RPC atómicas de stock (registrar_venta, registrar_ingreso, ajustar_stock, registrar_pago_fiado) y su refuerzo: control de stock sumado por producto, bloqueo de filas, fechas en la zona horaria correcta y validaciones del lado del servidor.",
              "Los módulos del plan Pro: control del plan en el servidor, roles con auditoría, lector de códigos de barras, impresión de tickets y la integración de facturación con ARCA.",
              "Descuentos, combos y la cola de ventas offline.",
              "Una auditoría de seguridad y sus correcciones: CSP y headers de seguridad, límite de intentos de login, verificación de pertenencia en las Server Actions y auditoría de dependencias.",
              "El diseño responsive y el rediseño visual.",
            ],
            en: [
              "The multi-tenant migration: a kiosco_id column on every business table, per-tenant RLS policies, a mi_kiosco_id() helper, and per-tenant uniqueness for barcodes, product codes and customer names.",
              "The atomic stock RPCs (registrar_venta, registrar_ingreso, ajustar_stock, registrar_pago_fiado) and their hardening: stock checks summed per product, row locks, timezone-correct dates and server-side validation.",
              "The Pro plan modules: server-side plan gating, roles with an audit trail, the barcode scanner, ticket printing and the ARCA invoicing integration.",
              "Discounts, combos and the offline sales queue.",
              "A security audit and the hardening that came out of it: CSP and security headers, login throttling, ownership checks in Server Actions and a dependency audit.",
              "The responsive layout and the visual redesign.",
            ],
          },
        },
      ],
      note: {
        es: "Tiago hizo la primera versión de los reportes y el módulo de fiado. Cada cambio importante empezó con un plan escrito (fases y una checklist de pruebas) y pasó por una rama y un pull request antes de llegar a producción: hasta ahora, 14 planes y 28 migraciones SQL.",
        en: "Tiago built the first version of the reports and the store credit module. Every non-trivial change started from a written plan (phases plus a test checklist) and went through a branch and a pull request before production: 14 plans and 28 SQL migrations so far.",
      },
    },
    architectures: [
      {
        flow: [
          {
            title: "Next.js + Tailwind",
            detail: { es: "App Router · Server Actions", en: "App Router · Server Actions" },
            edge: { es: "sesión del usuario", en: "user session" },
          },
          {
            title: "PostgreSQL",
            detail: { es: "Row Level Security por comercio", en: "Row Level Security per store" },
          },
        ],
        attachTo: 1,
        integrations: [
          {
            title: { es: "RPC atómicas", en: "Atomic RPCs" },
            detail: {
              es: "Ventas · compras · ajustes · cobros de fiado",
              en: "Sales · purchases · adjustments · credit payments",
            },
          },
          {
            title: { es: "Funciones de reportes", en: "Report functions" },
            detail: { es: "Agregados en la base", en: "Aggregated in the database" },
          },
          {
            title: { es: "Cola offline", en: "Offline queue" },
            detail: { es: "En el navegador, se sincroniza al reconectar", en: "In the browser, synced on reconnect" },
          },
        ],
        note: {
          es: "La app también se conecta con un proveedor de facturación para emitir facturas en ARCA.",
          en: "The app also connects to an invoicing provider to issue invoices through ARCA.",
        },
      },
    ],
    challenges: [
      {
        title: { es: "Stock consistente con ventas simultáneas", en: "Stock consistency under concurrency" },
        body: {
          es: "El cliente nunca escribe el stock directamente. Cada cambio pasa por una única función de PostgreSQL que bloquea las filas afectadas, valida la cantidad contra el stock (sumada por producto, para que el mismo artículo en dos líneas de una venta no deje el stock en negativo) y registra el movimiento en la misma transacción.",
          en: "The client never writes stock directly. Every change goes through a single PostgreSQL function that locks the affected rows, validates the quantity against stock (summed per product, so the same item on two lines of one sale can't push stock below zero) and records the movement in the same transaction.",
        },
      },
      {
        title: { es: "De un comercio a un SaaS multi-tenant", en: "From one store to a multi-tenant SaaS" },
        body: {
          es: "El comercio se resuelve en el servidor a partir del usuario autenticado y nunca lo envía el cliente. Como las funciones RPC saltean RLS, cada una verifica que todos los IDs que recibe (producto, proveedor, cliente) pertenezcan al comercio de quien llama. El aislamiento se probó con dos comercios reales antes de salir a producción.",
          en: "The tenant is resolved on the server from the authenticated user and is never sent by the client. Because the RPCs bypass RLS, each one checks that every ID it receives (product, supplier, customer) belongs to the caller's tenant. Tenant isolation was tested with two real tenants before going live.",
        },
      },
      {
        title: { es: "Ganancia real con ventas fiadas", en: "Accurate profit with credit sales" },
        body: {
          es: "Una venta fiada descuenta stock el día que se hace, pero cuenta como ingreso recién cuando se cobra. Cada cobro se aplica en orden a una venta concreta y registra la proporción cobrada de sus ingresos, su costo congelado y sus unidades en la fecha del cobro. Así los reportes siguen siendo correctos aunque haya pagos parciales.",
          en: "A credit sale removes stock on the day it happens but only counts as income when it's paid. Each payment is applied FIFO to a specific sale and books the paid fraction of that sale's revenue, frozen cost and units on the payment date. That keeps reports correct even with partial payments.",
        },
      },
      {
        title: { es: "Precios históricos", en: "Historical prices" },
        body: {
          es: "El costo y el precio unitario quedan congelados en cada línea de venta y de compra, así cambiar el precio de un producto nunca reescribe márgenes pasados. El precio de un combo se reparte entre sus componentes en proporción al precio de lista, con un ajuste de redondeo en la última línea para que sume exacto al centavo.",
          en: "Unit cost and price are frozen on each sale and purchase line, so changing a product's price never rewrites past margins. Combo prices are split across their components in proportion to list price, with a rounding fix on the last line so the parts add up to the exact cent.",
        },
      },
      {
        title: { es: "Reportes que no mienten", en: "Reports that don't lie" },
        body: {
          es: "La API de datos corta las respuestas en 1000 filas sin avisar, lo que subestimaba los períodos largos. Todos los reportes se agregan en funciones de PostgreSQL, con los períodos calculados en la zona horaria de Argentina y no en UTC.",
          en: "The data API silently caps responses at 1000 rows, which under-reported long ranges. All reports are aggregated in PostgreSQL functions, with periods computed in Argentina's time zone, not UTC.",
        },
      },
      {
        title: { es: "No perder una venta sin conexión", en: "Not losing a sale offline" },
        body: {
          es: "Una venta que falla por la red queda en cola con los datos exactos de la función RPC y se reenvía cuando vuelve la conexión, sin romper la regla de que el stock solo cambia a través de esa función. Si mientras tanto se acabó el stock, el servidor la rechaza y la cola la muestra como rechazada en vez de reintentar para siempre.",
          en: "A sale that fails because of the network is queued with the exact RPC payload and replayed when the connection returns, without breaking the rule that stock only changes through that function. If stock ran out in the meantime, the server rejects it and the queue shows it as rejected instead of retrying forever.",
        },
      },
    ],
    result: {
      es: [
        "En producción desde agosto de 2026.",
        "Nació del sistema de Punto Kiosco y está pensado para que cualquier comercio chico (librerías, minimercados, ferreterías) lo use sin cambiar el modelo.",
      ],
      en: [
        "In production since August 2026.",
        "It started as Punto Kiosco's system and is designed so any small retailer (bookstores, minimarkets, hardware stores) can use it without changing the core model.",
      ],
    },
    screenshots: [
      {
        src: kioscoDashboard,
        device: "desktop",
        alt: {
          es: "Dashboard con stock bajo, ventas del día, ganancia estimada y fiado por cobrar",
          en: "Dashboard with low stock, daily sales, estimated profit and outstanding store credit",
        },
      },
      {
        src: kioscoProductos,
        device: "desktop",
        alt: { es: "Listado de productos con stock y estado", en: "Product list with stock and status" },
      },
      {
        src: kioscoVenta,
        device: "desktop",
        alt: { es: "Registro de una nueva venta", en: "Registering a new sale" },
      },
      {
        src: kioscoReportes,
        device: "desktop",
        alt: {
          es: "Reporte: ranking de productos con ingresos, costo, ganancia y margen",
          en: "Report: product ranking with revenue, cost, profit and margin",
        },
      },
    ],
    screenshotsNote: testData,
  },
};
