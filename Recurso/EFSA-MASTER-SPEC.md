# EFSA — El Fin Se Acerca: Master Project Specification

> **Documento maestro** para la continuación del proyecto por un agente de IA.
> Última actualización: Julio 2025.

---

## 1. Visión General del Proyecto

**El Fin Se Acerca (EFSA)** es la landing page de un ministerio evangelístico pentecostal con presencia en Chile, Perú y México. La plataforma centraliza contenido ministerial: radio 24/7, biblioteca de recursos bíblicos, eventos, y canales multimedia.

La identidad visual es **editorial, minimalista, de alta tipografía** — inspirada en estudios como Cognitra, con animaciones sutiles CSS-only (sin dependencias de animación JS en runtime) que comunican seriedad, autoridad doctrinal y modernidad.

### Principios de Diseño Fundamentales

| Principio | Regla |
|---|---|
| **Flat design** | Sin gradientes, sin sombras pesadas, sin texturas. Color sólido puro. |
| **Alto contraste** | Fondo `#FAFAFA` / texto `#0A0A0A`. Nunca gris sobre gris claro. |
| **Tipografía como hero** | Space Grotesk para headings, Inter para cuerpo. Tamaños agresivos (hasta `9xl`). |
| **Animación CSS-only** | `@keyframes` + `IntersectionObserver` + `transition-delay`. Cero GSAP/Framer en runtime. |
| **Espacio generoso** | Padding vertical de secciones: `py-20 sm:py-28`. Gap entre cards: `gap-4 sm:gap-5`. |
| **Responsive mobile-first** | Todo debe verse perfecto en 320px antes de escalar a desktop. |

---

## 2. Stack Tecnológico

### 2.1 Core (No Negociable)

| Tecnología | Versión | Rol |
|---|---|---|
| **Next.js** | 16.x (App Router) | Framework principal, `output: "standalone"` |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Lenguaje (strict mode) |
| **Bun** | — | Package manager y runtime |

### 2.2 Estilo y UI

| Tecnología | Versión | Rol |
|---|---|---|
| **Tailwind CSS** | 4.x (`@tailwindcss/postcss`) | Sistema de estilos. Usa `@theme inline` para custom properties. |
| **shadcn/ui** | New York style | Componentes base pre-construidos (`src/components/ui/`) |
| **Lucide React** | 0.525.x | Iconografía |
| **tw-animate-css** | 1.3.x | Animaciones base para shadcn |
| **class-variance-authority** | 0.7.x | Variants de componentes |
| **clsx** + **tailwind-merge** | — | Merge de clases |
| **next-themes** | 0.4.x | Toggle light/dark mode |

### 2.3 Fuentes (Google Fonts via `next/font`)

```tsx
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
```

- **`--font-heading`** → `font-heading` → Space Grotesk (todos los h1-h4, labels, hero)
- **`--font-sans`** → `font-sans` → Inter (body text, párrafos, descripciones)

### 2.4 Base de Datos (Actualmente sin uso en landing, lista para expansión)

| Tecnología | Rol |
|---|---|
| **Prisma ORM** | Schema definition + client generator |
| **SQLite** | Database engine (`provider = "sqlite"`) |

### 2.5 Dependencias Instaladas pero NO Usadas en Runtime

Estas están en `package.json` pero **NO deben importarse** en los componentes actuales (causaron crash del sandbox):

- `gsap` + `gsap/ScrollTrigger` — Disponible para futuro uso, NO importar ahora
- `@studio-freight/lenis` — Disponible para futuro smooth scroll, NO importar ahora
- `framer-motion` — Disponible para futuro uso, NO importar ahora

> **REGLA CRÍTICA:** Todas las animaciones actuales son CSS-puro. Solo se permiten GSAP/Lenis/Framer si el entorno de producción lo soporta sin crash.

### 2.6 Otras Dependencias Disponibles

- `zustand` — Client state management
- `@tanstack/react-query` — Server state / data fetching
- `next-auth` — Authentication
- `react-hook-form` + `zod` + `@hookform/resolvers` — Form handling + validation
- `recharts` — Charts
- `sonner` — Toast notifications
- `sharp` — Image optimization
- `z-ai-web-dev-sdk` — AI skills SDK (backend only)

---

## 3. Arquitectura de Archivos

```
my-project/
├── public/
│   ├── logo.svg              # Logo SVG del ministerio (usado en Navbar)
│   ├── logo.png              # Logo PNG alternativo
│   └── robots.txt
│
├── prisma/
│   ├── schema.prisma         # Schema actual (User, Post models genéricos)
│   └── (db.sqlite)           # Base de datos SQLite auto-generada
│
├── src/
│   ├── app/
│   │   ├── globals.css       # ⭐ SISTEMA COMPLETO DE ESTILOS Y ANIMACIONES
│   │   ├── layout.tsx        # Root layout con fuentes + metadata SEO
│   │   └── page.tsx          # ⭐ CLIENT COMPONENT - Composición principal
│   │
│   ├── components/
│   │   ├── efsa/             # ⭐ TODOS LOS COMPONENTES DEL PROYECTO
│   │   │   ├── index.ts              # Barrel exports
│   │   │   ├── navbar.tsx             # Navegación fija
│   │   │   ├── hero.tsx               # Sección hero full-viewport
│   │   │   ├── library-grid.tsx       # Cuadrícula de 6 categorías
│   │   │   ├── events-section.tsx     # Eventos con sticky header
│   │   │   ├── media-section.tsx      # Contadores animados + canales
│   │   │   ├── about-section.tsx      # 4 pilares del ministerio
│   │   │   ├── radio-player.tsx       # Reproductor de radio persistente
│   │   │   ├── footer.tsx             # Footer 4 columnas
│   │   │   ├── text-reveal.tsx        # ⭐ Utility: Word-by-word reveal
│   │   │   ├── scroll-reveal.tsx      # ⭐ Utility: Fade+translateY reveal
│   │   │   └── smooth-scroll-provider.tsx  # RESERVADO (Lenis, no usado)
│   │   │
│   │   └── ui/                # shadcn/ui components (46 archivos)
│   │       ├── button.tsx, card.tsx, dialog.tsx, etc.
│   │       └── toaster.tsx    # Usado en layout.tsx
│   │
│   └── lib/
│       └── db.ts              # Prisma client instance
│
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

### Ruta Única

> **IMPORTANTE:** Solo existe una ruta visible: `/` definida en `src/app/page.tsx`. No se crean otras rutas. Todo el contenido de la landing está en esta única página.

---

## 4. Sistema de Diseño (Design Tokens)

### 4.1 Paleta de Colores (Light Mode — Principal)

| Token | Valor | Uso |
|---|---|---|
| `--background` | `#FAFAFA` | Fondo principal de la página |
| `--foreground` | `#0A0A0A` | Texto principal |
| `--efsa-red` | `#DC2626` | Acento primario (CTAs, badges, iconos) |
| `--efsa-red-light` | `#FEE2E2` | Fondo sutil rojo |
| `--efsa-dark` | `#0A0A0A` | Texto headings, botones sólidos |
| `--efsa-muted` | `#71717A` | Texto secundario |
| `--efsa-border` | `#E4E4E7` | Bordes de cards, separadores |
| `--efsa-surface` | `#FFFFFF` | Superficie de cards |
| `--card` | `#FFFFFF` | Fondo de tarjetas |
| `--muted` | `#F4F4F5` | Fondo de elementos secundarios |
| `--border` | `#E4E4E7` | Bordes estándar |
| `--primary` | `#0A0A0A` | Color primario |
| `--destructive` | `#DC2626` | Color de error/destructivo |

### 4.2 Paleta de Colores (Dark Mode)

| Token | Valor |
|---|---|
| `--background` | `#09090B` |
| `--foreground` | `#FAFAFA` |
| `--efsa-red` | `#EF4444` |
| `--efsa-dark` | `#FAFAFA` |
| `--efsa-muted` | `#A1A1AA` |
| `--efsa-border` | `#27272A` |
| `--efsa-surface` | `#18181B` |
| `--card` | `#18181B` |

### 4.3 Tipografía

| Elemento | Font | Weight | Tamaño Mobile | Tamaño Desktop |
|---|---|---|---|---|
| H1 Hero | Space Grotesk | 700 (bold) | `text-5xl` | `text-9xl` |
| H2 Sección | Space Grotesk | 700 (bold) | `text-3xl` | `text-5xl` |
| H3 Card | Space Grotesk | 600 (semibold) | `text-lg` | `text-lg` |
| H4 Footer | Space Grotesk | 600 (semibold) | `text-xl` | `text-xl` |
| Overline | Space Grotesk | 500 (medium) | `text-xs` | `text-xs` |
| Body | Inter | 400 (regular) | `text-sm`–`text-base` | `text-base`–`text-lg` |
| Caption | Inter | 400 | `text-[11px]`–`text-xs` | `text-xs`–`text-sm` |

### 4.4 Espaciado Vertical de Secciones

- **Padding vertical estándar:** `py-20 sm:py-28`
- **Padding horizontal estándar:** `px-4` (container: `max-w-7xl mx-auto`)
- **Gap entre cards:** `gap-4 sm:gap-5`
- **Margin inferior de header de sección:** `mb-14 sm:mb-20`

### 4.5 Bordes

- Estilo consistente: `border border-efsa-border dark:border-zinc-800`
- No redondeo excesivo: sin `rounded-` en cards (bordes cuadrados / minimalistas)
- El radio global por defecto es `0.5rem` pero las cards EFSA NO lo usan

---

## 5. Detalle de Componentes

### 5.1 `page.tsx` — Composición Principal

```tsx
"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LibraryGrid />
        <EventsSection />
        <MediaSection />
        <AboutSection />
      </main>
      <Footer />
      <RadioPlayer />
    </div>
  );
}
```

**Orden de renderizado (top → bottom):**
1. `Navbar` — Fixed, z-50
2. `Hero` — Full viewport, id="inicio"
3. `LibraryGrid` — id="biblioteca"
4. `EventsSection` — Fondo blanco, id="eventos"
5. `MediaSection` — Fondo blanco, contadores + canales
6. `AboutSection` — id="nosotros"
7. `Footer` — pb-20 (para compensar radio player)
8. `RadioPlayer` — Fixed bottom, z-40

### 5.2 `Navbar` — Navegación Fija

- **Comportamiento:** `fixed top-0 z-50`, con transición `backdrop-blur-md` al hacer scroll (>40px)
- **Entrada:** CSS animation `nav-entrance` (slide-down con 0.2s delay)
- **Logo:** `next/image` con `/logo.svg`, 36×36px
- **Links:** Inicio, Biblioteca, Eventos, Nosotros, Radio — smooth scroll con `scrollIntoView`
- **Botón CTA:** "En Vivo" con badge rojo pulsante (`live-pulse`)
- **Mobile:** Hamburger menu (Menu/X icons), dropdown con links
- **Detalles:** `nav-entrance` animation, `scrolled` state via scroll event listener (passive)

### 5.3 `Hero` — Sección Principal

- **Layout:** `min-h-screen flex flex-col items-center justify-center`
- **Decoraciones:** Elementos geométricos posicionados absolutamente (bordes rotados, punto rojo, punto gris)
- **Overline:** Línea horizontal + "MINISTERIO EVANGELÍSTICO PENTECOSTAL" en `text-xs tracking-[0.2em]`
- **Título:** 4 palabras ("El", "Fin", "Se", "Acerca") con animación `hero-word-anim` individual (stagger 80ms cada una)
- **Parallax:** Al hacer scroll, el bloque del título se mueve hacia arriba (`translateY(-progress * 60px)`) y se desvanece (`opacity 1 - progress * 0.85`)
- **CTAs:** "Explorar Biblioteca" (sólido negro) + "Radio en Vivo" (outlined con punto rojo pulsante)
- **Scroll indicator:** Flecha `ArrowDown` con animación `arrow-bounce` en la parte inferior

### 5.4 `LibraryGrid` — Biblioteca Pentecostal

- **Header:** Overline rojo "Recursos" + TextReveal "Biblioteca Pentecostal"
- **Grid:** 6 cards en `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Cards:** Sin redondeo, `border border-efsa-border`, `p-6 sm:p-7`
  - Icono en contenedor cuadrado con borde
  - Número de items en la esquina superior derecha
  - Hover: `border-efsa-dark` + h3 se desplaza `translate-x-1`
- **Categorías:**
  1. Predicaciones (120 items) — `BookOpen`
  2. Bosquejos (85 items) — `FileText`
  3. Estudios Bíblicos (64 items) — `GraduationCap`
  4. Escatología (42 items) — `ShieldCheck`
  5. Apologética (38 items) — `Layers`
  6. Recursos PDF (96 items) — `Download`
- **Animación:** `ScrollReveal` con `staggerChildren={true}`, `stagger={0.08}`, `y={30}`

### 5.5 `EventsSection` — Próximos Eventos

- **Layout:** `grid-cols-1 lg:grid-cols-12` — Header sticky (col-span-4) + Lista (col-span-8)
- **Header (sticky):** Overline "Próximos" + TextReveal "Eventos" + Descripción + Botón "Ver todos"
- **Lista:** Dividida con `divide-y`, cada evento tiene:
  - Bloque de fecha en rojo (`text-efsa-red tracking-wider uppercase`)
  - Título con hover `translate-x-1`
  - Badge "En Vivo" (solo primer evento) con punto pulsante
  - Ubicación con icono `MapPin`
  - Flecha `ArrowUpRight` a la derecha
- **Fondo:** `bg-white dark:bg-zinc-900`
- **Animación:** `ScrollReveal` con `staggerChildren`, `stagger={0.12}`, `y={25}`

### 5.6 `MediaSection` — Ecosistema Digital

- **Contadores animados:** 4 stats en `grid-cols-2 md:grid-cols-4`
  - 500+ Predicaciones
  - 24/7 Radio en Vivo
  - 3 Países
  - 12,000+ Oyentes Mensuales
  - **Animación:** `requestAnimationFrame` + `IntersectionObserver` (threshold 0.3), easeOutCubic, 2s duration, formato `es-CL`
- **Canales:** 3 cards verticales (YouTube, Instagram, TikTok) con:
  - YouTube: borde rojo `border-efsa-red/20`, hover `bg-efsa-red/5`
  - Instagram/TikTok: borde estándar, hover `bg-zinc-100`
  - Icono `ExternalLink` a la derecha
- **Fondo:** `bg-white dark:bg-zinc-900`

### 5.7 `AboutSection` — Nuestra Visión

- **Header:** Overline "Nuestra Visión" + TextReveal "Un ecosistema digital para la evangelización"
- **Grid de pilares:** 2×2 con `border` compartido entre celdas
  - Radio Tiempos Finales — `Radio` icon
  - Centro Multimedia — `Mic` icon
  - Escuela Bíblica Online — `BookMarked` icon
  - Alcance Global — `Globe` icon
- **Bordes condicionales:** Cada celda calcula sus bordes (right, bottom) según su posición en el grid
- **Animación:** Cada pilar envuelto en `ScrollReveal` individual

### 5.8 `RadioPlayer` — Reproductor de Radio Persistente

- **Posición:** `fixed bottom-0 left-0 right-0 z-40`
- **Stream URL:** `https://stream.zeno.fm/yn65fsaurfhvv`
- **Estado:** `isPlaying`, `isMuted`, `expanded`, `isLoading`, `error`
- **Audio:** HTML5 `new Audio()` programático (no `<audio>` tag)
  - Eventos: `playing`, `waiting`, `error`, `pause`
  - Volumen: 0.7 por defecto, toggle mute
- **Glassmorphism:** Clase `glass-bar` → `backdrop-filter: blur(20px) saturate(180%)`, fondo semi-transparente
- **Visualizador:** 5 barras CSS con animaciones individuales (`audio-bar-1` a `audio-bar-5`), activas solo cuando `isPlaying`
- **Handle de expand/collapse:** Botón `ChevronUp` posicionado arriba del bar, rotación 180° al expandir
- **Contenido expandido:** Badge "Transmitiendo" + nombre + descripción de la programación
- **Barra compacta:**
  - Izquierda: Visualizador + nombre + estado ("En vivo" / "Conectando..." / "Sin conexión")
  - Centro (desktop): Botón Play/Pause
  - Derecha: Volume toggle (desktop) + Botón Play mobile
- **Footer padding:** El footer tiene `pb-20` para compensar el espacio del player

### 5.9 `Footer` — Pie de Página

- **Layout:** `grid-cols-1 md:grid-cols-12` con 4 columnas:
  1. **Brand** (col-span-4): Título, descripción, iconos sociales (YouTube, Instagram, Radio)
  2. **Plataforma** (col-span-2): Links internos (Biblioteca, Escuela, Librería, Radio)
  3. **Ministerio** (col-span-2): Links (Nosotros, Doctrina, Pastores, Iglesias)
  4. **Ubicación** (col-span-4): Santiago de Chile, Lima Perú, Ciudad de México
- **Bottom bar:** Copyright + "Hecho con fe y propósito"
- **Social icons:** 36×36px, borde cuadrado, hover invierte colores
- **Animación:** `ScrollReveal` en todo el grid

### 5.10 `TextReveal` — Utilidad de Animación

- **Función:** Divide texto en palabras y las revela secuencialmente al entrar en viewport
- **Props:** `children` (string), `className`, `delay`, `stagger` (default 0.06s), `as` (tag HTML)
- **Mecanismo:**
  1. Divide string por espacios
  2. Cada palabra en `span.reveal-word` con `overflow-hidden`
  3. `IntersectionObserver` (threshold 0.2) agrega clase `.revealed` con `transitionDelay` incremental
- **CSS:** `.reveal-word` inicia en `translateY(110%) opacity:0`, `.revealed` transiciona a `translateY(0) opacity:1`

### 5.11 `ScrollReveal` — Utilidad de Animación

- **Función:** Fade-in + translateY al entrar en viewport, con stagger opcional por hijo
- **Props:** `children`, `className`, `delay`, `y` (default 40px), `stagger` (default 0.08s), `staggerChildren` (boolean)
- **Mecanismo:**
  1. Si `staggerChildren`: envuelve cada hijo en `div.scroll-reveal-item` con `--reveal-y` CSS variable
  2. `IntersectionObserver` (threshold 0.1, rootMargin "0px 0px -40px 0px") agrega `.revealed`
- **CSS:** `.scroll-reveal-item` inicia en `opacity:0 translateY(var(--reveal-y))`, `.revealed` transiciona a `opacity:1 translateY(0)`

### 5.12 `SmoothScrollProvider` — RESERVADO

- **Estado:** Presente en el código pero **NO usado** en `page.tsx`
- **Contenido:** Integración Lenis + GSAP ScrollTrigger
- **NOTA:** No importar hasta que el entorno de destino lo soporte

---

## 6. Sistema de Animaciones CSS

### 6.1 Animaciones Definidas en `globals.css`

| Nombre | Tipo | Descripción | Duración |
|---|---|---|---|
| `hero-fade-in` | `@keyframes` | Fade + translateY para elementos del hero | 0.8s |
| `word-reveal-up` | `@keyframes` | Palabra individual del hero sube desde abajo | 0.9s |
| `nav-slide-down` | `@keyframes` | Navbar desliza desde arriba | 0.8s, delay 0.2s |
| `arrow-bounce` | `@keyframes` | Flecha de scroll rebota verticalmente | 1.2s infinite |
| `audio-bar-1` a `audio-bar-5` | `@keyframes` | Barras del visualizador de audio | 0.5–0.8s infinite |
| `live-pulse` | `@keyframes` | Punto "En Vivo" pulsa opacidad | 1.5s infinite |
| `count-up` | `@keyframes` | Placeholder para contadores (no usado, los contadores usan rAF) | 2s |
| `.scroll-reveal-item` | CSS class | Fade + translateY con CSS custom property | 0.7s |
| `.reveal-word` | CSS class | Word reveal con mask overflow | 0.8s |

### 6.2 Curva de Easing Principal

Todas las animaciones usan: **`cubic-bezier(0.16, 1, 0.3, 1)`**

Esta curva produce un movimiento suave con desaceleración natural (similar a easeOutExpo pero más suave al inicio).

### 6.3 Sistema de Stagger

El stagger se implementa via `transition-delay` en JavaScript:

```tsx
// En ScrollReveal
childEl.style.transitionDelay = `${delay + (staggerChildren ? i * stagger * 1000 : 0)}ms`;
childEl.classList.add("revealed");
```

Valores típicos:
- Cards de grid: `stagger={0.08}` (80ms entre cada item)
- Eventos: `stagger={0.12}` (120ms)
- Palabras en TextReveal: `stagger={0.06}` (60ms)

### 6.4 Parallax del Hero

Implementado con scroll event listener (passive):

```tsx
const progress = Math.min(scrollY / vh, 1);
heroRef.current.style.transform = `translateY(${-progress * 60}px)`;
heroRef.current.style.opacity = `${1 - progress * 0.85}`;
```

---

## 7. Detalles Técnicos Específicos

### 7.1 Configuración Next.js

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "standalone",
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
};
```

### 7.2 PostCSS

```js
// postcss.config.mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};
```

### 7.3 Tailwind CSS v4 — Sistema de Custom Properties

Las custom properties se definen en `@theme inline` y se mapean a variables CSS reales en `:root` / `.dark`:

```css
@theme inline {
  --color-efsa-red: var(--efsa-red);
  --font-heading: var(--font-heading), ui-sans-serif, system-ui, sans-serif;
  /* ... */
}

:root {
  --efsa-red: #DC2626;
  /* ... */
}
```

Esto permite usar `text-efsa-red`, `bg-efsa-dark`, `border-efsa-border` directamente en className.

### 7.4 SEO y Metadata

```ts
export const metadata: Metadata = {
  title: "El Fin Se Acerca — Ministerio Evangelístico Pentecostal",
  description: "Proclamamos el evangelio con una voz protestante, firme y actual...",
  keywords: ["El Fin Se Acerca", "EFSA", "ministerio pentecostal", "evangelio", "Radio Tiempos Finales", "biblia", "predicaciones"],
  icons: { icon: "/logo.svg" },
  openGraph: { title: "El Fin Se Acerca", description: "Ministerio Evangelístico Pentecostal...", type: "website" },
};
```

### 7.5 Estructura HTML Semántica

```html
<html lang="es" suppressHydrationWarning>
  <body class="antialiased bg-background text-foreground">
    <div class="min-h-screen flex flex-col">
      <nav />           <!-- Navbar -->
      <main class="flex-1">
        <section id="inicio" />    <!-- Hero -->
        <section id="biblioteca" /> <!-- Library -->
        <section id="eventos" />    <!-- Events -->
        <section />                 <!-- Media -->
        <section id="nosotros" />   <!-- About -->
      </main>
      <footer />         <!-- Footer -->
      <div />            <!-- RadioPlayer (fixed) -->
    </div>
  </body>
</html>
```

### 7.6 Accesibilidad

- `aria-label` en todos los botones icon-only (menu, volume, play/pause)
- `lang="es"` en `<html>`
- `suppressHydrationWarning` para next-themes
- Semantic tags: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h4>`
- `-webkit-tap-highlight-color: transparent` para touch

### 7.7 Scrollbar Personalizado

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #D4D4D8; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #A1A1AA; }
```

### 7.8 Selección de Texto

```css
::selection { background: #DC2626; color: #FFFFFF; }
```

---

## 8. Estado Actual y Próximos Pasos

### 8.1 Lo que Está Completo ✅

- [x] Landing page completa con 7 secciones
- [x] Sistema de diseño con tokens CSS (light + dark)
- [x] Todas las animaciones en CSS-puro (sin crash)
- [x] Radio player funcional con stream zeno.fm
- [x] Responsive design mobile-first
- [x] Navegación con smooth scroll
- [x] Contadores animados con requestAnimationFrame
- [x] Text reveal y scroll reveal utilities
- [x] SEO metadata en español
- [x] Logo SVG + PNG en public/

### 8.2 Lo que Queda por Implementar 🔲

#### Prioridad Alta — Funcionalidad Core

1. **Páginas de contenido dinámico:**
   - `/biblioteca/[slug]` — Página individual de categoría (Predicaciones, Bosquejos, etc.)
   - `/predicacion/[id]` — Reproductor/detalle de predicación individual
   - `/escuela` — Escuela Bíblica Online con cursos

2. **Backend API + Base de datos:**
   - Schema Prisma para: Predicaciones, Eventos, Cursos, Usuarios, Inscripciones
   - API routes: `/api/predicaciones`, `/api/eventos`, `/api/cursos`
   - CRUD completo con Prisma

3. **Autenticación:**
   - NextAuth.js configuración (Google/GitHub/Credentials)
   - Roles: Admin, Miembro, Visitante

#### Prioridad Media — Expansión

4. **CMS/Panel de administración:**
   - Dashboard para gestionar contenido (predicaciones, eventos, cursos)
   - Subida de archivos de audio/PDF
   - Gestión de programación de radio

5. **Integración multimedia real:**
   - YouTube API para embeber transmisiones
   - Instagram/TikTok feed integration
   - Podcast RSS feed

6. **Escuela Bíblica:**
   - Sistema de lecciones con progreso
   - Evaluaciones/cuestionarios
   - Certificados de finalización

#### Prioridad Baja — Mejoras UX

7. **Búsqueda:**
   - Buscador de contenido con CMD+K (usando cmdk ya instalado)

8. **Modo oscuro automático:**
   - Detector de preferencia del sistema con `next-themes`

9. **Internacionalización:**
   - `next-intl` ya instalado, preparar para inglés/portugués

10. **Smooth scroll avanzado:**
    - Activar `SmoothScrollProvider` con Lenis cuando el entorno lo soporte
    - GSAP ScrollTrigger para parallax avanzado

---

## 9. Reglas y Convenciones para el Agente

### 9.1 Reglas Obligatorias

1. **Solo una ruta visible:** Todo el contenido va en `/` via `src/app/page.tsx`. No crear otras rutas sin autorización.
2. **CSS-only para animaciones:** No importar `gsap`, `lenis`, o `framer-motion` en componentes activos. Solo CSS `@keyframes` + `IntersectionObserver` + `transition-delay`.
3. **Usar `font-heading`** (Space Grotesk) para todos los headings, labels, overlines y el título del radio.
4. **Usar `font-sans`** (Inter) para texto de cuerpo, descripciones y captions.
5. **Sin gradientes, sin sombras pesadas:** El diseño es flat. Siempre color sólido.
6. **Sin colores azules o índigo** a menos que se solicite explícitamente.
7. **Dark mode:** Todos los componentes deben tener variantes `dark:` para cada color/estilo.
8. **Mobile-first:** Diseñar para 320px primero, luego escalar con `sm:`, `md:`, `lg:`, `xl:`.
9. **Sticky footer:** El layout usa `min-h-screen flex flex-col` con `mt-auto` en footer (o `flex-1` en main).
10. **shadcn/ui:** Usar componentes existentes de `src/components/ui/` en vez de crear desde cero.
11. **`"use client"`:** Marcar todos los componentes interactivos con esta directiva.
12. **`"use server"`:** Usar para API routes y server actions, NO en componentes.
13. **Lucide icons:** Usar `lucide-react` para toda la iconografía. `strokeWidth={1.5}` para estilo editorial.
14. **Punto rojo pulsante:** Usar `<span className="w-2 h-2 rounded-full bg-efsa-red live-pulse" />` para indicadores "En Vivo".
15. **No usar `id` duplicados:** Cada section tiene su propio `id` para navegación.

### 9.2 Convenciones de Código

- **Imports:** Agrupar en orden: React → Next.js → Terceros → Componentes locales → Utils
- **Nombre de archivos:** `kebab-case` para archivos de componente, `PascalCase` para el componente exportado
- **Nombre del componente:** Igual al nombre del archivo en PascalCase
- **Barrel export:** Usar `src/components/efsa/index.ts` para exportar todos los componentes EFSA
- **Tipos:** Interfaces para props, siempre tipadas
- **CSS variables:** Definir en `:root` y `.dark`, mapear en `@theme inline`

### 9.3 Naming de Clases CSS

- Secciones: `.efsa-{section}` (ej: `.efsa-hero`, `.efsa-library`)
- Utilidades de animación: `.scroll-reveal-item`, `.reveal-word`, `.hero-word-anim`
- Estados de animación: `.revealed`, `.playing`
- Componentes especiales: `.glass-bar`, `.live-pulse`, `.arrow-bounce`, `.audio-bar`

---

## 10. Radio Stream

- **URL:** `https://stream.zeno.fm/yn65fsaurfhvv`
- **Plataforma:** Zeno.fm
- **Protocolo:** HLS/AAC sobre HTTPS
- **Implementación:** HTML5 `new Audio()` con eventos nativos
- **Volumen por defecto:** 0.7
- **Estados UI:** "En vivo" / "Conectando..." / "Sin conexión" / "Haz clic para escuchar"

---

## 11. Assets

| Archivo | Ruta | Descripción |
|---|---|---|
| Logo SVG | `/public/logo.svg` | Logo principal, usado en Navbar (36×36px) |
| Logo PNG | `/public/logo.png` | Versión bitmap del logo |
| robots.txt | `/public/robots.txt` | Configuración de crawlers |

> **Nota:** El logo original fue proporcionado por el cliente y se encuentra en `/public/`. Para cualquier modificación de la marca, consultar con el ministerio.

---

## 12. Performance Considerations

- **Zero JS animation libraries en runtime:** GSAP, Framer Motion y Lenis están instalados pero NO se importan, lo que elimina su peso del bundle.
- **Font optimization:** `next/font/google` con `display: "swap"` — las fuentes se cargan sin bloquear render.
- **Image optimization:** `next/image` con dimensiones explícitas para el logo.
- **Passive scroll listeners:** Todos los scroll events usan `{ passive: true }`.
- **IntersectionObserver:** Las animaciones solo se activan cuando el contenido es visible (no en mount).
- **Audio lazy init:** El elemento `<audio>` solo se crea cuando el usuario hace clic en Play (no en mount).

---

## 13. Comandos de Desarrollo

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo (puerto 3000)
bun run dev

# Verificar calidad del código
bun run lint

# Push schema a la base de datos
bun run db:push

# Generar Prisma client
bun run db:generate
```

---

## 14. Referencia de Estilo Visual (para el Agente)

### Estilo General → "Editorial Ministry"
- Imagina un cruce entre la web de A24 (cine) y un journal teológico.
- Mucho espacio en blanco, tipografía agresiva, detalles mínimos.
- El rojo `#DC2626` se usa con moderación: solo CTAs, badges "En Vivo", iconos de sección y overlines.
- Los bordes son sutiles (`#E4E4E7`) y las cards casi desaparecen hasta el hover.
- Las animaciones son funcionales (revelan contenido), no decorativas.

### Secciones Alternan Fondo
- `#FAFAFA` (background por defecto) → Hero, Library, About
- `#FFFFFF` (surface/card) → Events, Media
- Esta alternancia crea ritmo visual sin depender de color.

### Patrones Repetitivos
1. **Overline rojo** → `text-xs font-medium uppercase tracking-[0.2em] text-efsa-red mb-4`
2. **TextReveal heading** → Siempre envuelto en `<TextReveal as="h2">`
3. **ScrollReveal container** → Siempre para grupos de cards o listas
4. **Descripción muted** → `text-efsa-muted text-base leading-relaxed`

---

## 15. Notas Finales para el Agente

1. **Este documento es la fuente de verdad** para la continuación del proyecto. Si hay conflicto entre este spec y el código existente, seguir el spec.

2. **La paleta NO incluye azul/índigo.** Si necesitas un color que no esté en la paleta, usar variaciones de gris zinc o extender con colores neutros.

3. **Cualquier nueva sección** debe seguir el patrón: overline rojo → TextReveal heading → descripción muted → ScrollReveal content.

4. **El radio player es persistente** (fixed bottom) — cualquier sección con contenido en la parte inferior debe compensar con `pb-20` o más.

5. **Dark mode es obligatorio** para todo componente nuevo. Siempre añadir las variantes `dark:` correspondientes.

6. **No agregar dependencias nuevas** sin justificación. El proyecto ya tiene todas las librerías necesarias para la landing + expansión futura.

7. **Los datos actuales son estáticos/hardcodeados.** La migración a datos dinámicos (API + DB) es una fase posterior documentada en la sección 8.2.

---

## 16. Fase 2 — Animaciones Avanzadas (Guía de Implementación)

> **Contexto:** Esta sección detalla la evolución del sistema de animaciones actual (CSS-only) hacia un sistema profesional nivel big-tech, manteniendo la identidad **solemne, editorial y autoritativa** de EFSA.
>
> **Filo de referencia:** Linear (linear.app), Vercel (vercel.com), Stripe (stripe.com), Awwwards SOTD.
>
> **Regla de oro para EFSA:** Cada animación debe **revelar, guiar o dar peso**. Nada es decorativo. Si una animación no ayuda al usuario a entender el contenido, se elimina.

### 16.1 Stack de Animación Avanzado — Orden de Implementación

El agente debe implementar en este orden exacto. Cada fase se construye sobre la anterior.

#### Fase 2.1 — Smooth Scroll + GSAP Foundation (Prioridad Máxima)

**Dependencias ya instaladas:** `gsap`, `@studio-freight/lenis`
**Archivos nuevos:** Ninguno (activar `SmoothScrollProvider` existente + crear hooks)

**16.1.1 — Activar Lenis Smooth Scroll**

El archivo `src/components/efsa/smooth-scroll-provider.tsx` ya existe con la integración Lenis + GSAP. Para activar:

```tsx
// src/app/page.tsx — Envolver con SmoothScrollProvider
import SmoothScrollProvider from "@/components/efsa/smooth-scroll-provider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <LibraryGrid />
          <EventsSection />
          <MediaSection />
          <AboutSection />
        </main>
        <Footer />
        <RadioPlayer />
      </div>
    </SmoothScrollProvider>
  );
}
```

**Configuración Lenis recomendada para EFSA:**

```ts
const lenis = new Lenis({
  duration: 1.4,              // Más lento que default = más peso solemne
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 0.8,       // Scroll más denso, menos "ligero"
  touchMultiplier: 1.5,
});
```

**16.1.2 — Crear Hook `useGSAP`**

```ts
// src/hooks/useGSAP.ts
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAP(
  callback: (ctx: gsap.Context) => void,
  deps: unknown[] = [],
  scope?: React.RefObject<HTMLElement>
) {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback(ctx.current!);
    }, scope?.current || undefined);

    return () => ctx.current?.revert();
  }, deps);

  return ctx;
}

export { gsap, ScrollTrigger };
```

**16.1.3 — Reemplazar IntersectionObserver por ScrollTrigger**

Ejemplo de migración de `ScrollReveal` a GSAP:

```tsx
// ANTES (CSS-only):
// <ScrollReveal staggerChildren>...</ScrollReveal>

// DESPUÉS (GSAP):
// <GSAReveal stagger={0.08}>...</GSAPReveal>
```

```tsx
// src/components/efsa/gsap-reveal.tsx
"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/useGSAP";

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  delay?: number;
  scrub?: boolean; // true = animación vinculada al scroll
}

export default function GSAPReveal({
  children,
  className = "",
  stagger = 0.08,
  y = 60,
  delay = 0,
  scrub = false,
}: GSAPRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const children = containerRef.current?.children;
    if (!children) return;

    const targets = Array.from(children);

    const vars: gsap.TweenVars = {
      y: y,
      opacity: 0,
      duration: 1,
      stagger: stagger,
      delay: delay,
      ease: "power4.out",
    };

    if (scrub) {
      // Animación vinculada al scroll (como parallax)
      gsap.to(targets, {
        ...vars,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 1.5,
        },
      });
    } else {
      // Animación trigger-once (reemplaza IntersectionObserver)
      gsap.from(targets, {
        ...vars,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          once: true,
        },
      });
    }
  }, [stagger, y, delay, scrub]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
```

---

#### Fase 2.2 — Scroll-Driven Animaciones (Efecto "Película")

**Nuevo concepto:** Algunas secciones se comportan como "pantallas de película" donde el scroll controla la animación (scrub).

**16.2.1 — Hero con Scroll Pin (como Apple)**

El hero se "pega" durante el primer viewport de scroll mientras los elementos se reorganizan:

```tsx
// Efecto: El título del hero se desvanece Y el contenido de la Biblioteca
// se revela simultáneamente, creando una transición "de película"
// entre secciones.

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top top",
      end: "+=100%",  // 1 viewport completo de scroll "atrapado"
      pin: true,
      scrub: 1.5,
      anticipatePin: 1,
    },
  });

  tl.to(heroTitleRef.current, {
    y: -120,
    opacity: 0,
    scale: 0.95,
    ease: "none",
    duration: 1,
  })
  .to(heroCTARef.current, {
    y: -60,
    opacity: 0,
    ease: "none",
    duration: 0.6,
  }, "-=0.6")
  .to(heroOverlineRef.current, {
    opacity: 0,
    ease: "none",
    duration: 0.4,
  }, "-=0.5");
}, []);
```

**16.2.2 — Sección "Sobre Nosotros" con Parallax Multicapa**

```tsx
// El título se mueve más rápido que la descripción,
// creando efecto de profundidad sin 3D.

useGSAP(() => {
  gsap.to(titleRef.current, {
    y: -80,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(descriptionRef.current, {
    y: -30,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}, []);
```

**16.2.3 — Contadores con Scrub (en vez de rAF)**

```tsx
// Los contadores de MediaSection avanzan mientras haces scroll
// en vez de animarse de golpe al entrar en viewport.

useGSAP(() => {
  const counters = containerRef.current?.querySelectorAll("[data-counter]");
  if (!counters) return;

  counters.forEach((el) => {
    const target = parseInt(el.getAttribute("data-target") || "0");
    const suffix = el.getAttribute("data-suffix") || "";
    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.value).toLocaleString("es-CL") + suffix;
      },
    });
  });
}, []);
```

---

#### Fase 2.3 — Texto Avanzado (Split Text)

**16.3.1 — Utilidad `SplitText` con GSAP**

```tsx
// src/components/efsa/split-text.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/useGSAP";

type SplitType = "chars" | "words" | "lines";

interface SplitTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  splitBy?: SplitType;
  stagger?: number;
  delay?: number;
  animation?: "reveal-up" | "reveal-down" | "fade-in" | "scramble";
  scrub?: boolean;
}

export default function SplitText({
  children,
  as: Tag = "h2",
  className = "",
  splitBy = "words",
  stagger = 0.04,
  delay = 0,
  animation = "reveal-up",
  scrub = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // Limpiar contenido y crear spans
    const text = children;
    el.innerHTML = "";

    const units = splitBy === "chars"
      ? text.split("")
      : splitBy === "words"
      ? text.split(" ")
      : text.split("\n");

    units.forEach((unit) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = splitBy === "words" ? unit + "\u00A0" : unit;
      inner.className = "split-unit";

      wrapper.appendChild(inner);
      el.appendChild(wrapper);
    });

    const units_el = el.querySelectorAll(".split-unit");

    const fromVars: gsap.TweenVars = {};
    const toVars: gsap.TweenVars = {
      opacity: 1,
      stagger: stagger,
      delay: delay,
      ease: "power4.out",
      duration: 0.9,
    };

    switch (animation) {
      case "reveal-up":
        fromVars.y = "110%";
        fromVars.opacity = 0;
        break;
      case "reveal-down":
        fromVars.y = "-110%";
        fromVars.opacity = 0;
        break;
      case "fade-in":
        fromVars.opacity = 0;
        toVars.duration = 0.6;
        break;
      case "scramble":
        // Efecto de texto que se "descifra"
        fromVars.opacity = 0;
        fromVars.filter = "blur(8px)";
        toVars.filter = "blur(0px)";
        toVars.duration = 0.7;
        toVars.ease = "power3.out";
        break;
    }

    if (scrub) {
      gsap.fromTo(units_el, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 35%",
          scrub: 1.5,
        },
      });
    } else {
      gsap.fromTo(units_el, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }
  }, [children, splitBy, stagger, delay, animation, scrub]);

  return (
    <Tag ref={containerRef as React.Ref<any>} className={className}>
      {children}
    </Tag>
  );
}
```

**Uso:**

```tsx
// Título con reveal por palabra (reemplaza TextReveal actual)
<SplitText
  as="h2"
  splitBy="words"
  stagger={0.06}
  className="font-heading text-5xl font-bold"
>
  Biblioteca Pentecostal
</SplitText>

// Título con efecto scramble/desenfoque (más dramático)
<SplitText
  as="h1"
  splitBy="words"
  animation="scramble"
  stagger={0.08}
  className="font-heading text-8xl font-bold"
>
  El Fin Se Acerca
</SplitText>
```

---

#### Fase 2.4 — Cursor Personalizado (Efecto Premium)

**Nuevo archivo:** `src/components/efsa/custom-cursor.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Ocultar en dispositivos táctiles
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnterInteractive = () => setIsHovering(true);
    const onMouseLeaveInteractive = () => setIsHovering(false);

    // Detectar elementos interactivos
    const addInteractiveListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
      return interactives;
    };

    // Animation loop con requestAnimationFrame
    let rafId: number;

    const animate = () => {
      // Dot sigue inmediatamente
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;

      // Ring sigue con retraso (efecto elástico)
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${isHovering ? 2 : 1})`;
      ring.style.borderColor = isHovering ? "var(--efsa-red)" : "var(--efsa-dark)";

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    const interactives = addInteractiveListeners();
    rafId = requestAnimationFrame(animate);

    // Re-escuchar cuando el DOM cambie
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      addInteractiveListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [isVisible, isHovering]);

  // No renderizar en mobile
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Cursor nativo oculto */}
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Dot — sigue rápido */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-1.5 h-1.5 bg-efsa-dark dark:bg-white rounded-full" />
      </div>

      {/* Ring — sigue lento, se agranda en hover */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none transition-[border-color] duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-8 h-8 border border-efsa-dark/30 dark:border-white/30 rounded-full transition-transform duration-500 ease-out" />
      </div>
    </>
  );
}
```

**Integración en page.tsx:**

```tsx
<SmoothScrollProvider>
  <CustomCursor />
  <div className="min-h-screen flex flex-col">
    ...
  </div>
</SmoothScrollProvider>
```

---

#### Fase 2.5 — Page Transitions (Entre Secciones Internas)

**Concepto:** Cuando se navegue a páginas internas (fase futura), usar transiciones con Framer Motion:

```tsx
// src/components/efsa/page-transition.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)", // Revela de arriba a abajo
  },
  enter: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

#### Fase 2.6 — Magnetic Buttons (Efecto Premium en CTAs)

```tsx
// src/components/efsa/magnetic-button.tsx
"use client";

import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Fuerza magnética (default: 0.3)
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const btn = ref.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.transform = "translate(0, 0)";
  }, []);

  return (
    <button
      ref={ref}
      className={`${className} transition-transform duration-300 ease-out`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
```

**Uso en Hero CTAs:**

```tsx
<MagneticButton className="px-6 py-3 bg-efsa-dark text-white font-semibold">
  Explorar Biblioteca
</MagneticButton>
```

---

#### Fase 2.7 — Infinite Marquee (Wall of Logos / Texto Corrido)

```tsx
// src/components/efsa/infinite-marquee.tsx
"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/hooks/useGSAP";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number; // px por segundo
  className?: string;
  reverse?: boolean;
}

export default function InfiniteMarquee({
  items,
  speed = 30,
  className = "",
  reverse = false,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // Duplicado

    gsap.to(track, {
      x: reverse ? totalWidth / 2 : -totalWidth / 2,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed, reverse]);

  // Duplicar items para loop seamless
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block px-8 text-efsa-muted/20 font-heading text-6xl sm:text-8xl font-bold uppercase select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
```

**Uso sugerido:** Entre secciones, como separador visual:

```tsx
<InfiniteMarquee
  items={["Sana Doctrina", "•", "Radio 24/7", "•", "Escatología", "•", "Apologética", "•"]}
  speed={40}
  className="py-10 border-y border-efsa-border"
/>
```

---

#### Fase 2.8 — SVG Path Drawing (Líneas que se Dibujan)

```tsx
// Utilidad para SVG paths que se "dibujan" al hacer scroll
// Ideal para decoraciones geométricas, cruces, iconos decorativos

useGSAP(() => {
  const paths = containerRef.current?.querySelectorAll(".draw-path");
  if (!paths) return;

  paths.forEach((path) => {
    const length = (path as SVGPathElement).getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        once: true,
      },
    });
  });
}, []);
```

---

#### Fase 2.9 — Preloader (Loading Screen)

```tsx
// src/components/efsa/preloader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animación del contador del preloader
    const obj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Ocultar preloader
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => setIsLoaded(true),
        });
      },
    });

    tl.to(obj, {
      value: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(obj.value).toString().padStart(3, "0");
        }
      },
    });
  }, []);

  return (
    <>
      {/* Preloader overlay */}
      <div
        ref={preloaderRef}
        className={`fixed inset-0 z-[100] bg-efsa-dark dark:bg-zinc-950 flex items-center justify-center transition-none ${
          isLoaded ? "hidden" : ""
        }`}
      >
        <div className="text-center">
          <span
            ref={counterRef}
            className="font-heading text-6xl sm:text-8xl font-bold text-white tabular-nums"
          >
            000
          </span>
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-4">
            Cargando
          </p>
        </div>
      </div>

      {/* Contenido principal — con delay de entrada */}
      <div style={{ visibility: isLoaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
```

---

### 16.2 — Mapa de Animaciones por Sección

Este mapa define exactamente qué animaciones se aplican a cada sección en la Fase 2:

| Sección | Animación Actual (Fase 1) | Animación Fase 2 | Técnica |
|---|---|---|---|
| **Preloader** | No existe | Contador 000→100 + slide up del overlay | GSAP timeline |
| **Navbar** | `nav-entrance` CSS | Misma + blur progresivo al scroll + línea roja que se "dibuja" debajo | GSAP ScrollTrigger + CSS transition |
| **Hero** | `hero-word-anim` CSS + parallax JS básico | **Pin** durante 1 viewport + SplitText scramble + CTAs con MagneticButton + parallax decoraciones | GSAP pin + scrub + SplitText |
| **Marquee** | No existe | Texto corrido infinito entre Hero y Biblioteca | GSAP repeat(-1) |
| **Library** | `ScrollReveal` stagger CSS | GSAP stagger con `power4.out` + cards con hover 3D tilt (sutil 2°) | GSAP + tilt CSS transform |
| **Events** | `ScrollReveal` stagger CSS | ScrollTrigger scrub para la línea de tiempo + badges "En Vivo" con glow pulsante | GSAP scrub + CSS @keyframes |
| **Media** | `requestAnimationFrame` counters | Contadores con scrub + canales con hover reveal (contenido adicional se desliza) | GSAP scrub + CSS max-height |
| **About** | `ScrollReveal` individual | Parallax multicapa (título -80px, desc -30px) + SVG path drawing en iconos | GSAP parallax + SVG draw |
| **Footer** | `ScrollReveal` grid | Marquee inferior + social icons con magnetic hover | GSAP repeat + MagneticButton |
| **Radio** | `glass-bar` + audio bars CSS | Misma base + visualizador reactivo al audio real (Web Audio API analyser) | Web Audio API + Canvas |

---

### 16.3 — Curvas de Easing por Contexto

No todas las animaciones usan la misma curva. Este mapa define qué easing usar según la intención:

| Intención | Curva GSAP | Curva CSS | Cuándo usar |
|---|---|---|---|
| **Entrada de contenido** | `"power4.out"` | `cubic-bezier(0.16, 1, 0.3, 1)` | Textos, cards, secciones que aparecen |
| **Salida de contenido** | `"power4.in"` | `cubic-bezier(0.7, 0, 0.84, 0)` | Elementos que desaparecen |
| **Transición de página** | `"expo.inOut"` | `cubic-bezier(0.76, 0, 0.24, 1)` | Page transitions, preloader |
| **Hover interactivo** | `"power2.out"` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Botones, links, elementos que reaccionan al mouse |
| **Scroll vinculado (scrub)** | `"none"` | N/A (controlado por scroll) | Parallax, counters, reveals vinculados al scroll |
| **Loop infinito** | `"none"` | `linear` o `ease-in-out` | Marquee, audio bars, pulse |
| **Bounce sutil** | `"back.out(1.2)"` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Confirmaciones, toasts, micro-feedback |
| **Peso / Solemnidad** | `"power3.out"` (más lento) | `cubic-bezier(0.22, 1, 0.36, 1)` | Títulos principales del ministerio, declaración de fe |

---

### 16.4 — Jerarquía de Velocidad (Duraciones)

Para mantener la sensación de "película solemne" en EFSA:

| Elemento | Duración | Velocidad percibida |
|---|---|---|
| Preloader counter | 1.5s | Lenta, pausada |
| Preloader exit | 0.8s | Rápida, decidida |
| Hero title word reveal | 0.9s por palabra | Moderada con peso |
| Hero parallax (pin) | ~2s de scroll | Controlada por usuario |
| Section title reveal | 0.8–1.0s | Moderada |
| Card stagger | 0.08s entre items | Ritmo rápido |
| Individual card entrance | 0.7s | Moderada |
| Hover effect | 0.2–0.3s | Instantánea |
| Page transition | 0.8s | Rápida, sin espera |
| Cursor movement | 16ms (rAF) | Fluido, imperceptible |
| Marquee | 40px/s | Constante, hipnótica |

---

### 16.5 — Performance Rules (Obligatorio)

El agente DEBE seguir estas reglas para que las animaciones no degraden la experiencia:

1. **Solo animar `transform` y `opacity`** — Estas propiedades se ejecutan en la GPU (compositing layer). Nunca animar `width`, `height`, `top`, `left`, `margin`, `padding`, `font-size`, `color`, `background-color` (trigger reflow/repaint).

2. **`will-change` estratégico** — Usar solo en elementos que están a punto de animarse, y quitar después:
   ```css
   .will-animate {
     will-change: transform, opacity;
   }
   .done-animating {
     will-change: auto;
   }
   ```

3. **Forzar GPU layer cuando sea necesario:**
   ```css
   .gpu-layer {
     transform: translateZ(0);
     /* o */
     backface-visibility: hidden;
   }
   ```

4. **`contain: layout`** en secciones grandes para limitar el scope de recalculación del navegador:
   ```css
   section {
     contain: layout style paint;
   }
   ```

5. **`requestAnimationFrame` para cursor** — El custom cursor DEBE usar rAF, no eventos directos (evitar jank).

6. **ScrollTrigger `once: true`** — Las animaciones de entrada se ejecutan una sola vez y se destruyen (no consumen CPU después).

7. **`scrub` solo cuando el usuario controla** — No usar scrub para animaciones que deben completarse sin importar la velocidad de scroll.

8. **Reducir motion para accesibilidad:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
   Agregar esta media query al final de `globals.css`.

9. **Mobile = menos animación** — En pantallas < 768px:
   - Desactivar custom cursor
   - Reducir stagger a la mitad
   - Sin parallax multicapa
   - Sin magnetic buttons
   - Sin preloader (o versión simplificada de 0.5s)

10. **GSAP `context().revert()`** — Siempre limpiar animaciones GSAP en el cleanup de `useEffect` para evitar memory leaks.

---

### 16.6 — Estructura de Archivos de la Fase 2

```
src/
├── hooks/
│   └── useGSAP.ts                  # ⭐ Hook principal GSAP + ScrollTrigger
│
├── components/
│   └── efsa/
│       ├── gsap-reveal.tsx          # Reemplazo de ScrollReveal con GSAP
│       ├── split-text.tsx           # Texto animado por chars/words/lines
│       ├── custom-cursor.tsx        # Cursor personalizado dot + ring
│       ├── magnetic-button.tsx      # Botones con efecto magnético
│       ├── infinite-marquee.tsx     # Texto/logos corriendo infinito
│       ├── page-transition.tsx      # Transiciones entre páginas (Framer)
│       ├── preloader.tsx            # Loading screen con contador
│       ├── scroll-reveal.tsx        # Mantener como fallback CSS-only
│       ├── text-reveal.tsx          # Mantener como fallback CSS-only
│       └── smooth-scroll-provider.tsx # ⭐ Activar (ya existe)
│
└── app/
    └── globals.css                  # Agregar prefers-reduced-motion + contain
```

---

### 16.7 — Orden de Ejecución para el Agente

Implementar **exactamente en este orden**, probando visualmente después de cada paso:

| Paso | Tarea | Verificación |
|---|---|---|
| 1 | Crear `useGSAP` hook | Sin errores en consola |
| 2 | Activar `SmoothScrollProvider` en `page.tsx` | El scroll es suave y continuo |
| 3 | Crear `GSAReveal` y reemplazar `ScrollReveal` en una sección | La animación es más fluida que antes |
| 4 | Crear `SplitText` y reemplazar `TextReveal` en una sección | Las palabras se animan con más precisión |
| 5 | Agregar `prefers-reduced-motion` a `globals.css` | Las animaciones se desactivan en configuración de accesibilidad |
| 6 | Implementar Hero pin + scrub | El hero se "pega" y los elementos se animan al hacer scroll |
| 7 | Crear `InfiniteMarquee` y agregar entre secciones | El texto corre infinitamente sin saltos |
| 8 | Crear `CustomCursor` (desktop only) | El cursor sigue al mouse con el ring retrasado |
| 9 | Crear `MagneticButton` y aplicar a CTAs del Hero | Los botones se "atraen" al cursor |
| 10 | Crear `Preloader` y envolver la app | La pantalla muestra 000→100 antes del contenido |
| 11 | Implementar parallax multicapa en About | Título y descripción se mueven a diferente velocidad |
| 12 | Crear `PageTransition` (para futuro uso) | Las transiciones entre páginas funcionan con Framer |

---

### 16.8 — Inspiración Visual por Sección

Referencias concretas para el agente:

| Sección | Inspirar en | URL de referencia |
|---|---|---|
| Preloader | Linear app preloader | linear.app |
| Hero (pin) | Apple iPhone Pro page | apple.com/iphone-16-pro |
| Custom Cursor | Awwwards sites | awwwards.com (cualquier SOTD) |
| Library Grid | Stripe products page | stripe.com/products |
| Events Timeline | Vercel changelog | vercel.com/changelog |
| Counters | Awwwards agency sites | awwwards.com/websites/agencies |
| Radio Player | Spotify web player (mini) | open.spotify.com |
| Marquee | Locomotive.ca portfolio | locomotive.ca |
| Page Transitions | Cuberto website | cuberto.com |
| Magnetic Buttons | Mads Peter Veiby | mads-peter-veiby.com |

---

### 16.9 — Lo que NO Hacer (Anti-Patterns para EFSA)

1. ❌ **No usar partículas** — No es un sitio de tecnología/gaming
2. ❌ **No usar 3D (Three.js)** — No hay razón para 3D en contenido ministerial
4. ❌ **No usar animaciones "fun" o "playful"** — La identidad es solemne
5. ❌ **No usar scrolljacking agresivo** — El usuario siempre debe poder scrollear libremente
6. ❌ **No usar parallax excesivo** — Máximo 2-3 capas, máx 80px de desplazamiento
7. ❌ **No usar video de fondo** — Pesado y distrae del contenido
8. ❌ **No usar sonidos** — Solo el stream de radio cuando el usuario lo active
9. ❌ **No usar confetti, fireworks, ni celebraciones** — Inapropiado para el tono
10. ❌ **No animar el logo** — El logo es estático, solo el cursor interactúa con él

---

*Generado como parte del proyecto EFSA — El Fin Se Acerca. Ministerio Evangelístico Pentecostal.*