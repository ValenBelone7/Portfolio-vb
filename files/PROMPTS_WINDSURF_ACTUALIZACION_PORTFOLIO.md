# 🚀 PROMPTS PARA WINDSURF - ACTUALIZACIÓN PORTFOLIO VALENTÍN BELONE

**Contexto General:** Actualización del portfolio React (React 19.2.0 + Vite + Tailwind CSS) con información del CV actualizado de Valentín Belone. El portfolio está desplegado en Vercel.

---

## 📌 RESUMEN DE CAMBIOS A REALIZAR

| Sección | Cambio | Prioridad |
|---------|--------|-----------|
| **About** | Reescribir con balance de full-stack + IA + producción | 🔴 Alta |
| **Projects** | Reemplazar 2 proyectos (Inmobiliaria + R) por Telegram Bot IA + SaaS | 🔴 Alta |
| **Projects** | Mejorar descripción del Miniblog (menos técnico, más impacto) | 🟡 Media |
| **Skills** | Actualizar tecnologías (agregar n8n, Django, etc.) | 🟡 Media |
| **Contact** | Mejorar botón "Enviar mensaje" con colores dorados | 🟡 Media |
| **General** | Asegurar responsive y accesibilidad | 🟢 Baja |

---

## 1️⃣ PROMPT: ACTUALIZAR SECCIÓN "SOBRE MÍ" (About.jsx)

**Contexto:** El usuario ahora tiene experiencia real en IA, automatización y proyectos en producción. La sección debe reflejar esto sin sonar genérica.

```markdown
### PROMPT PARA WINDSURF:

Actualiza el componente About.jsx con el siguiente contenido y estilo:

#### NUEVO CONTENIDO DE TEXTO:

"Soy Valentín Belone, Técnico Superior en Desarrollo de Software especializado 
en crear soluciones web completas desde el relevamiento de requerimientos hasta 
el despliegue en producción.

Mi experiencia incluye:
- Desarrollo Full-Stack: React, Django, Python en proyectos reales
- Automatización e IA: Agentes conversacionales, bots inteligentes, workflows complejos
- Proyectos en Producción: Sistemas SaaS, gestión de datos en tiempo real, integraciones
- Metodologías Ágiles: Scrum, trabajo colaborativo, buenas prácticas

Me apasiona resolver problemas reales con tecnología y construir aplicaciones que 
generen impacto genuino en negocios y usuarios finales."

#### CAMBIOS VISUALES Y FUNCIONALES:

1. **Badge "DISPONIBLE PARA TRABAJAR":**
   - Color actual: mantener dorado (#d4af37)
   - Animación: pulse más suave y natural (opacity 0.6 → 1, duración 3s)
   - Responsive: asegurar que sea visible en móvil sin romper layout

2. **Foto de Perfil (avatar.png):**
   - Mantener tamaño actual
   - Agregar border sutil dorado (1px) si no lo tiene
   - Asegurar que sea responsive (max-width en móvil)

3. **Tipografía:**
   - Título: Cinzel, bold, color #d4d4d4
   - Descripción: Inter, peso 400, color #d4d4d4
   - Bullets: usar símbolos "▸" con color #d4af37 (no unicode, usar CSS)

4. **Layout:**
   - Desktop: 2 columnas (foto | texto)
   - Tablet: 2 columnas con spacing ajustado
   - Móvil: 1 columna (foto arriba, texto abajo) con padding adecuado

5. **Animaciones:**
   - fadeIn suave al cargar la sección
   - Sin transiciones bruscas
   - Badge con pulse-slow (CSS custom ya existe)

#### CÓDIGO ESPERADO:
- Mantener estructura modular
- Usar Tailwind CSS para estilos
- Sin componentes externos nuevos
- Accesibilidad: roles ARIA, contrast ratios ✓

#### VALIDACIÓN:
✓ Texto legible en todos los tamaños de pantalla
✓ Badge visible sin overflow
✓ Imagen responsive
✓ Colores consistentes con paleta (#d4d4d4, #d4af37, #0d0d0d)
```

---

## 2️⃣ PROMPT: ACTUALIZAR SECCIÓN PROYECTOS (Projects.jsx)

**Contexto:** Necesitas reemplazar 2 proyectos (Sistema Inmobiliario viejo + R) por Telegram Bot IA y SaaS. El Miniblog se mantiene pero necesita mejor descripción.

```markdown
### PROMPT PARA WINDSURF:

Actualiza Projects.jsx con la siguiente estructura y contenido:

#### NUEVO ORDEN Y CONTENIDO DE PROYECTOS:

---

**PROYECTO 1: SaaS Inmobiliario (NUEVO - CON IMÁGENES)**

**Título:** "SaaS de Gestión de Contratos Inmobiliarios"

**Descripción Breve:** 
"Plataforma completa para gestionar contratos de alquiler. Automatiza cálculos 
de ajustes por inflación, seguimiento de pagos, detección de moras y genera 
recibos legales automáticamente. Proyecto entregado en producción y en uso."

**Descripción Técnica (para hover o expandible):**
"Desarrollado en equipo full-stack. El sistema integra datos de fuentes externas 
(IPC, ICL) para actualizar automáticamente los índices de ajuste sin intervención 
manual. Frontend en React con Tailwind, backend en Django/DRF con PostgreSQL."

**Tecnologías (como tags):** 
React | Django | TypeScript | PostgreSQL | JWT | Docker | Vercel | Render

**Enlaces:**
- GitHub: [si existe repo, agregar] O "Código en repositorio privado"
- Live Demo: [enlace a producción si existe]
- Caso de uso: Cliente pasó de gestionar en Excel a sistema centralizado

**Imagen:**
- Usar foto que el usuario proporcione (screenshot del dashboard)
- Tamaño mínimo: 1200x800px (landscape)
- Fallback: si falta imagen, mostrar gradient dorado + icono de "gestión"

**Orden en lista:** PRIMERO (es el más reciente y profesional)

---

**PROYECTO 2: Agente IA para Compra de Tickets (NUEVO - SIN IMÁGENES)**

**Título:** "Agente de IA para Compra de Tickets de Bus"

**Descripción Breve:**
"Bot conversacional con IA que automatiza la compra de tickets de bus vía Telegram. 
Busca destinos, selecciona horarios, gestiona pasajeros y completa compras por chat. 
Diseñado como alternativa moderna a portales tradicionales."

**Descripción Técnica:**
"Agente central orquestador con múltiples subworkflows especializados para cada 
etapa del proceso. Integración con base de datos propia, manejo de estados 
conversacionales y flujo de compra automatizado. Proyecto completado en enero 2026."

**Tecnologías (como tags):**
n8n | LLMs | Telegram API | Automatización | IA | Workflows | Backend

**Enlaces:**
- GitHub: [si existe documentación pública, agregar]
- Demo: "No disponible (proyecto de cliente)" O [enlace a bot si es público]
- Descripción: "Proyecto en posesión del cliente - Workflow guardado en n8n"

**Imagen:**
- ALTERNATIVA A: Usar mockup/illustration del chat de Telegram
- ALTERNATIVA B: Screenshot de UI del bot conversacional (si tienes)
- ALTERNATIVA C: Icono + gradient si no tienes imagen (recomendado)
- Usar colores consistentes: dorado + azul oscuro

**Orden en lista:** SEGUNDO (muestra especialización en IA/automatización)

---

**PROYECTO 3: Miniblog Full-Stack (MEJORADO - EXISTENTE)**

**Título ACTUAL:** "Miniblog Full Stack"
**NUEVO Título:** "Plataforma de Blogs - Sistema Full-Stack" (menos técnico, más descriptivo)

**Descripción Breve NUEVA:**
"Aplicación web para crear y publicar blogs con panel de administración. 
Incluye autenticación de usuarios, gestión de artículos con editor enriquecido 
y sistema de roles. Proyecto académico implementado con arquitectura profesional."

**Descripción Técnica:**
"API REST construida con Flask (JWT, Marshmallow, roles). Frontend en React + Vite 
con componentes de PrimeReact. Base de datos relacional con MySQL. Proyecto colaborativo 
que demuestra integración full-stack desde backend hasta deployment."

**Tecnologías (como tags):**
React | Flask | Python | Vite | PrimeReact | MySQL | JWT | Marshmallow

**Enlaces:**
- Backend GitHub: https://github.com/ValenBelone7/efi-miniblog
- Frontend GitHub: https://github.com/Tiagooo10/efi-javascript
- Live Demo: [si existe, agregar]

**Imagen:**
- Mantener la que ya tienes (desktop-miniblog.png)
- Si no existe, crear mockup de "blog admin dashboard"

**Orden en lista:** TERCERO (proyecto académico sólido, mantener como base)

---

#### CAMBIOS VISUALES EN ProjectCard.jsx:

1. **Card Styling:**
   - Border: sutil dorado (#d4af37) en hover
   - Sombra: dorada al hover (0 0 20px rgba(212, 175, 55, 0.3))
   - Transición: 0.3s ease-in-out
   - Border-radius: 8px (mantener consistencia)

2. **Imágenes en Cards:**
   - Altura: 220px en desktop, 180px en móvil
   - Object-fit: cover
   - Lazy loading: sí (usar loading="lazy" en <img>)
   - Fallback: gradient + icono si falta imagen

3. **Tags de Tecnologías:**
   - Fondo: gris muy oscuro (#1e1e1e)
   - Texto: gris (#8c8c8c)
   - Hover: color dorado (#d4af37)
   - Separador: " | " (simple, sin estilos extra)

4. **Descripción:**
   - Máximo 3 líneas en desktop, 2 en móvil
   - Text overflow: ellipsis
   - Color: #d4d4d4

5. **Botones de Enlaces:**
   - "Ver GitHub" / "Demo" en la misma línea
   - Estilo: outlined dorado, hover relleno dorado
   - Tamaño: pequeño pero clickeable (min 44px alto)
   - Si no hay enlace: mostrar "Privado" con estilo deshabilitado

#### RESPONSIVIDAD:

- **Móvil (< 768px):** 1 columna, full width con padding
- **Tablet (768px - 1024px):** 2 columnas
- **Desktop (> 1024px):** 3 columnas (si caben bien)
- **Imágenes:** responsive, sin distorsión

#### VALIDACIÓN:

✓ Proyectos en orden: SaaS → Bot IA → Miniblog
✓ Descripciones actualizadas y sin errores
✓ Imágenes se muestran correctamente (con fallback si falta)
✓ Enlaces funcionan (verificar URLs)
✓ Responsive en todos los tamaños
✓ Accesibilidad: alt text en imágenes, focus states en botones
✓ Colores consistentes con paleta

#### CÓDIGO ESPERADO:

- Archivo: src/components/Projects.jsx y ProjectCard.jsx
- Sin cambios en estructura general, solo contenido + estilos
- Mantener animaciones suaves
- Usar Tailwind para responsive (md:, lg:)
```

---

## 3️⃣ PROMPT: ACTUALIZAR HABILIDADES TÉCNICAS (Skills.jsx)

**Contexto:** Agregar nuevas tecnologías del CV (Django, TypeScript, n8n, Docker, GitHub Actions) manteniendo el scroll infinito.

```markdown
### PROMPT PARA WINDSURF:

Actualiza Skills.jsx con la nueva pila tecnológica actualizada:

#### NUEVA LISTA DE TECNOLOGÍAS (FILA 1 - IZQUIERDA):

Python | Django | Flask | React | TypeScript | JavaScript | 
PostgreSQL | MySQL | Docker | Git

#### NUEVA LISTA DE TECNOLOGÍAS (FILA 2 - DERECHA):

HTML5 | CSS3 | Tailwind CSS | n8n | JWT | REST APIs | 
GitHub Actions | Vercel | Render | Scrum

#### MEJORAS VISUALES:

1. **Iconografía:**
   - Cada tecnología con emoji o logo SVG simple
   - Ejemplos: 🐍 Python, ⚛️ React, 🐘 PostgreSQL, 🐳 Docker, 🤖 n8n
   - O usar logos en blanco/gris desde iconify si los emojis no encajan
   - Altura: 24px para logos SVG

2. **Tamaño de Items:**
   - Aumentar ligeramente font-size: 0.95rem → 1.1rem
   - Padding: mejorar espaciado interno
   - Mantener legibilidad en móvil

3. **Scroll Infinito:**
   - Velocidad: duración 30s (mantener natural)
   - FILA 1: scroll izquierda → derecha
   - FILA 2: scroll derecha → izquierda (opuesto)
   - Sin pausa entre ciclos (seamless)
   - Usar CSS animations (no JavaScript si es posible)

4. **Colores:**
   - Texto por defecto: #d4d4d4 (gris claro)
   - Hover: #d4af37 (dorado) con transición suave (0.2s)
   - Sombra hover: sutil, sin exagerar
   - Fondo: transparente (hereda #0d0d0d de body)

5. **Responsividad:**
   - Desktop: 2 filas paralelas, scroll visible
   - Tablet (md): 1 fila completa o 2 con ajustes
   - Móvil: 1 fila, scroll más lento (duración 40s)
   - Evitar overflow horizontal

#### ANIMACIONES:

- Fade-in suave al entrar la sección
- Hover glow sutil (box-shadow dorada)
- Sin animaciones excesivas

#### CÓDIGO ESPERADO:

- Archivo: src/components/Skills.jsx
- CSS animations (preferible) o Tailwind animations
- Usar @keyframes para scroll infinito
- Estructura: <div class="skills-container"> → <div class="skill-row">

#### VALIDACIÓN:

✓ Scroll infinito sin saltos
✓ Todas las tecnologías visibles (sin cortes)
✓ Responsive en móvil (sin horizontal scroll incómodo)
✓ Hover effects claros
✓ Iconografía consistente y legible
✓ Colores de la paleta
```

---

## 4️⃣ PROMPT: MEJORAR BOTÓN "ENVIAR MENSAJE" EN CONTACTO (Contact.jsx)

**Contexto:** El botón de envío debe tener mejor visual con dorado prominente.

```markdown
### PROMPT PARA WINDSURF:

Mejora el botón "Enviar Mensaje" en Contact.jsx con el siguiente diseño:

#### CAMBIOS DE COLOR Y ESTILO:

**Estado Normal:**
- Background: Degradado lineal dorado
  - De: #d4af37
  - A: #c39920
  - Ángulo: 135deg (diagonal)
- Color de texto: #0d0d0d (negro oscuro - máximo contraste)
- Border: ninguno (o 1px #d4af37 muy sutil si lo prefieres)
- Padding: aumentar a px-8 py-3 (más espacioso)
- Border-radius: 6px
- Font-weight: 600 (más notorio)
- Font-size: 1rem (base, mantener legible)

**Estado Hover:**
- Background: Intensificar degradado (#d4af37 → #b89020)
- Box-shadow: 0 0 25px rgba(212, 175, 55, 0.5) (glow dorado)
- Transform: scale(1.05) o translateY(-2px)
- Transición: 0.3s ease-in-out
- Cursor: pointer

**Estado Active (click):**
- Background: Oscurecer (#c39920 → #9d7819)
- Box-shadow: menor (0 0 15px rgba(212, 175, 55, 0.3))
- Transform: scale(0.98) (efecto de presión)
- Transición: 0.1s

**Estado Disabled (si aplica):**
- Background: gris (#666)
- Color de texto: gris más oscuro (#ccc)
- Cursor: not-allowed
- Opacity: 0.6

**Estado Focus (accesibilidad):**
- Outline: 2px solid #d4af37 (visible pero elegante)
- Outline-offset: 3px

#### ANIMACIONES:

1. **Glow Pulse al Hover:**
   ```
   @keyframes glowPulse {
     0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.4); }
     50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.7); }
   }
   ```

2. **Feedback Visual de Envío Exitoso:**
   - Si la forma se envía exitosamente:
   - Cambiar texto a "✓ Mensaje enviado" por 2 segundos
   - Cambiar color de fondo a verde suave (#4ade80) por 2 segundos
   - Luego volver a normal

#### LOADING STATE (IMPORTANTE):

- Si el formulario está enviándose:
  - Mostrar spinner o puntos animados: "Enviando..."
  - Desabilitar el botón (opacity 0.7, cursor not-allowed)
  - Mantener el glow pero más suave

#### ESTRUCTURA HTML ESPERADA:

```html
<button 
  type="submit" 
  disabled={isLoading}
  className="bg-gradient-to-r from-[#d4af37] to-[#c39920] 
             text-[#0d0d0d] px-8 py-3 rounded-md font-semibold
             hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] 
             hover:scale-105 transition-all duration-300
             focus:outline-2 focus:outline-[#d4af37] focus:outline-offset-2
             active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
>
  {isLoading ? "Enviando..." : "Enviar Mensaje"}
</button>
```

#### RESPONSIVIDAD:

- Móvil: mantener tamaño (min 44px de altura)
- Tablet/Desktop: igual tamaño
- Ancho: full-width en formulario (max-width: 100% del form)
- Padding: ajustable para no ser excesivamente grande en móvil

#### VALIDACIÓN:

✓ Color dorado consistente (#d4af37)
✓ Contraste de texto suficiente para accesibilidad
✓ Hover effect visible y placentero
✓ Loading state claro
✓ Success state visible si el formulario se envía
✓ Focus state para accesibilidad (keyboard navigation)
✓ Sin lag en animaciones (60fps)
```

---

## 5️⃣ PROMPT: REVISIÓN GENERAL DE ACCESIBILIDAD Y PERFORMANCE

**Contexto:** Asegurar que el portfolio sea accesible, rápido y profesional en todos los dispositivos.

```markdown
### PROMPT PARA WINDSURF:

Realiza una auditoría general del portfolio y asegúrate de lo siguiente:

#### 1. ACCESIBILIDAD (A11Y):

**Contrast Ratios:**
- ✓ Texto #d4d4d4 sobre fondo #0d0d0d: ratio 12.8:1 (EXCELENTE)
- ✓ Dorado #d4af37 sobre #0d0d0d: verificar ratio (debería ser 5:1+)
- ✓ Si algo no cumple, ajustar colores manteniendo estética

**Navegación:**
- ✓ Todos los botones tienen focus state visible (outline dorado)
- ✓ Enlaces tienen underline o cambio de color en focus
- ✓ Menú hamburguesa funciona con teclado (Enter/Space)
- ✓ Tab order es lógico (de arriba a abajo, izq a derecha)

**Imágenes:**
- ✓ Todos los <img> tienen atributo "alt" descriptivo
- ✓ Alt text NO repite palabras (ej: "imagen de un proyecto")
- ✓ Icons SVG decorativos tienen aria-hidden="true"

**Semántica HTML:**
- ✓ Encabezados en orden: <h1>, <h2>, <h3> (sin saltos)
- ✓ Botones reales (<button>) no <div onclick>
- ✓ Enlaces reales (<a>) no <button> para navegación
- ✓ Formulario: <label> asociados con <input> (htmlFor)

**ARIA (si necesario):**
- ✓ Nav principal: <nav role="navigation">
- ✓ Botones de redes: aria-label="LinkedIn", "GitHub"
- ✓ Icono de menú: aria-label="Abrir menú"

#### 2. PERFORMANCE:

**Imágenes:**
- ✓ Formato optimizado: WebP con fallback JPG
- ✓ Tamaños responsive: srcset en <img> si es necesario
- ✓ Lazy loading: loading="lazy" en imágenes below the fold
- ✓ Compresión: < 100KB por imagen (idealmente < 50KB)

**CSS & JavaScript:**
- ✓ Tailwind CSS purged (solo clases usadas en bundle)
- ✓ Sin CSS no utilizado
- ✓ JavaScript optimizado: sin librerías innecesarias
- ✓ Async/defer en scripts si aplica

**Vite Config:**
- ✓ Minificación habilitada en producción
- ✓ Code splitting configurado
- ✓ Assets hasheados para cache busting

**Métricas (usar Lighthouse en Chrome):**
- ✓ Lighthouse Performance: > 90
- ✓ Lighthouse Accessibility: 95+
- ✓ Lighthouse Best Practices: 90+
- ✓ Lighthouse SEO: 90+

#### 3. RESPONSIVE DESIGN:

**Breakpoints Tailwind:**
- ✓ sm: 640px (teléfono grande)
- ✓ md: 768px (tablet)
- ✓ lg: 1024px (laptop)
- ✓ xl: 1280px (desktop)

**Testing en Dispositivos:**
- ✓ iPhone 12/13 (390px)
- ✓ iPad (768px)
- ✓ Desktop (1920px)
- ✓ Landscape/Portrait orientations

**Mobile-First Checklist:**
- ✓ No hay overflow horizontal (< 390px)
- ✓ Botones son >= 44px (tappable size)
- ✓ Texto es legible (font-size >= 16px en inputs)
- ✓ Menú hamburguesa funciona
- ✓ Formulario es usable en móvil
- ✓ Scroll infinito no es incómodo

#### 4. SEO & META TAGS:

**index.html:**
- ✓ <title>: "Valentín Belone - Desarrollador de Software Full-Stack"
- ✓ <meta name="description">: breve descripción del portfolio
- ✓ <meta name="keywords">: Python, React, Full-Stack, Desarrollo
- ✓ <meta name="viewport">: responsive meta tag
- ✓ <link rel="canonical">: URL del sitio
- ✓ Open Graph meta tags (og:title, og:description, og:image)

**robots.txt y sitemap (si es necesario):**
- ✓ Permitir indexación del portfolio
- ✓ Si hay un sitemap.xml, incluirlo

#### 5. INFORMACIÓN ACTUALIZADA:

**Datos de Contacto:**
- ✓ Email: valenbelone14@gmail.com
- ✓ Teléfono: +54 9 3385 404898
- ✓ LinkedIn: https://www.linkedin.com/in/valentín-belone-a447b42b7/
- ✓ GitHub: https://github.com/ValenBelone7
- ✓ Ubicación: Serrano, Córdoba, Argentina

**CV Descargable:**
- ✓ Ruta: /CV_Valentin_Belone_Desarrollador_Software.pdf
- ✓ Botón "Descargar CV" funciona
- ✓ PDF es la versión más reciente del CV

**Enlaces en Proyectos:**
- ✓ Verificar que todos los enlaces a GitHub funcionan
- ✓ Verificar links a Live Demo (si existen)
- ✓ Verificar enlace a bot de Telegram (si es público)

#### 6. BUGS & TESTING:

**Funcionalidad General:**
- ✓ Smooth scroll funciona en todos los navegadores
- ✓ Formulario de contacto envía correctamente
- ✓ Scroll infinito en Skills sin saltos
- ✓ Animaciones no causen lag (uso de will-change si aplica)
- ✓ Transiciones suaves (no bruscas)

**Cross-browser:**
- ✓ Chrome/Edge: 100%
- ✓ Firefox: 100%
- ✓ Safari: 100%
- ✓ Mobile browsers: iOS Safari, Chrome Android

**Deployment (Vercel):**
- ✓ Build exitoso en Vercel
- ✓ No hay errores en consola
- ✓ Variables de entorno configuradas si aplica

#### CHECKLIST FINAL:

- [ ] Accesibilidad audit pasado
- [ ] Performance > 90 en Lighthouse
- [ ] Responsive en móvil/tablet/desktop
- [ ] Información contacto actualizada
- [ ] Todos los enlaces funcionan
- [ ] Imágenes optimizadas
- [ ] Sin errores en consola
- [ ] Build en Vercel exitoso
- [ ] Proyecto desplegado y visible
```

---

## 📋 ORDEN SUGERIDO DE IMPLEMENTACIÓN

1. **PRIMERO:** Actualizar About.jsx (rápido, alto impacto)
2. **SEGUNDO:** Actualizar Projects.jsx (toma más tiempo, muy visible)
3. **TERCERO:** Mejorar botón Contact (rápido, mejora UX)
4. **CUARTO:** Actualizar Skills.jsx (rápido, visual)
5. **QUINTO:** Auditoría general (verifica todo funcione)

**Tiempo estimado:** 2-4 horas en total

---

## 🎯 PREGUNTAS ADICIONALES PARA WINDSURF

Si necesitas claridades mientras trabajas, puedes hacer estas preguntas a Windsurf:

### Sobre Imágenes del SaaS:
```
"Tengo screenshots del SaaS Inmobiliario que quiero agregar a Projects. 
¿Cómo las optimizo y dónde las guardo en la carpeta /public para que 
se carguen correctamente? ¿Necesito hacer algo en ProjectCard.jsx 
para mostrarlas responsivamente?"
```

### Sobre el Bot de n8n:
```
"No tengo imágenes reales del bot porque es proyecto de cliente. 
¿Cómo presento visualmente un proyecto de n8n/automatización sin screenshot? 
¿Puedo usar un mockup o illustration de chat? ¿Cómo lo integro al estilo 
actual del portfolio?"
```

### Sobre Performance:
```
"¿Debería implementar lazy loading en las imágenes de proyectos? 
¿Cómo lo hago con React + Vite? ¿Es necesario para este portfolio?"
```

### Sobre Testing:
```
"¿Debería agregar tests unitarios con Vitest? ¿Vale la pena para 
un portfolio? ¿Qué debería testear?"
```

---

## 🚀 PRÓXIMOS PASOS

1. **Guardar este documento** y compartirlo con Windsurf
2. **Copiar-pegar los prompts** cuando abras Windsurf
3. **Proporcionar imágenes del SaaS** cuando las tengas listas
4. **Hacer deploy a Vercel** una vez estén todos los cambios listos
5. **Verificar URLs** de GitHub y LinkedIn antes de ir a producción

---

## 📞 CONTACTO ACTUALIZADO (para referencia)

- **Nombre:** Valentín Belone
- **Email:** valenbelone14@gmail.com
- **Teléfono:** +54 9 3385 404898
- **GitHub:** https://github.com/ValenBelone7
- **LinkedIn:** https://www.linkedin.com/in/valentín-belone-a447b42b7/
- **Portfolio URL:** https://www.belone-dev.com.ar/
- **Ubicación:** Serrano, Córdoba, Argentina

---

**Documento generado:** Basado en CV actualizado de Valentín Belone y contexto técnico del portfolio React.

**Última actualización:** 2026-05-20

¡Listo para mejorar el portfolio! 🎯
