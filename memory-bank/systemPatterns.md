# System Patterns - Landing RMP

## Arquitectura del Sistema

### Vista de Alto Nivel

```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Next.js App   │ ← SSR/SSG optimizado
│   (React 18+)   │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐ ┌───────────┐
│ Static │ │ Analytics │
│ Assets │ │ (GA4)     │
└────────┘ └───────────┘
```

### Estructura de Componentes

```
app/
├── layout.tsx (Root Layout)
├── page.tsx (Home Page - orquestador)
└── globals.css

sections/ (Secciones principales de la landing)
├── Header/
│   ├── index.tsx (Componente principal)
│   └── components/
│       ├── DesktopHeader.tsx
│       ├── MobileHeader.tsx
│       └── Navbar*.tsx (subcomponentes)
├── HeroSection/
├── IntegrationsSection/ ← Incluye 6 benefit cards
├── BenefitsSection/
├── ServicesSection/
├── ProcessSection/
├── ComparisonSection/
├── PricingSection/
├── CaseStudiesSection/
├── TestimonialsDesktop/
├── TestimonialsMobile/
├── FAQSection/
└── Footer/

components/ (Componentes compartidos/globales)
├── FloatingCTA.tsx (WhatsApp sticky)
├── MobileCTA.tsx
├── quiz.tsx
└── ui/ (Shadcn components)

lib/
├── utils.ts (Tailwind merge, clsx)
├── constants.ts
└── analytics.ts
```

## Patrones de Diseño Implementados

### 1. Component Composition Pattern

Cada sección es auto-contenida y exporta un componente principal:

```typescript
// sections/XSection/index.tsx
export const XSection = () => {
  return <div>...</div>
}

// app/page.tsx
import { XSection } from "@/sections/XSection"
```

**Ventajas**:
- Modularidad
- Fácil mantenimiento
- Posibilidad de reordenar secciones sin romper nada

### 2. Mobile-First Responsive Pattern

Todos los estilos siguen la convención:
```css
/* Base styles (mobile) */
.elemento {
  @apply text-[32px] px-4;
}

/* Desktop breakpoint */
@screen md {
  @apply text-5xl px-8;
}
```

**Grid responsive**:
```tsx
grid-cols-[minmax(0px,1fr)]           // Mobile: 1 columna
md:grid-cols-[repeat(3,minmax(0px,1fr))]  // Desktop: 3 columnas
```

### 3. Conditional Rendering Pattern (Desktop/Mobile)

Dos versiones de componentes complejos para optimizar UX:

```tsx
// Versión Desktop
<TestimonialsDesktop /> // hidden en mobile, block en md+

// Versión Mobile
<TestimonialsMobile />  // block en mobile, hidden en md+
```

**Cuándo usar**:
- Cuando la interacción es significativamente diferente
- Testimonials, Headers, CTAs complejos

### 4. Dynamic Styling Pattern (Header)

El header cambia estilos basándose en el scroll:

```tsx
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }
  checkScroll() // Ejecutar inmediatamente
  window.addEventListener("scroll", checkScroll)
  return () => window.removeEventListener("scroll", checkScroll)
}, [])

<header className={`fixed ... ${
  isScrolled ? "bg-white shadow-md" : "bg-transparent"
}`}>
```

**Patrón clave**: Verificar estado inmediatamente al cargar para evitar "flash" de estado incorrecto.

### 5. Utility-First CSS Pattern

Uso extensivo de Tailwind con clases utilitarias:

```tsx
<div className="relative box-border caret-transparent gap-x-8 grid auto-rows-[minmax(min-content,max-content)] grid-cols-[minmax(0px,1fr)] gap-y-8 z-[1] pt-12 pb-8 md:pt-20">
```

**Trade-off aceptado**: 
- ❌ Clases largas en JSX
- ✅ No hay CSS separado que mantener
- ✅ Purge automático de CSS no usado
- ✅ Consistencia visual garantizada

## Decisiones Técnicas Clave

### 1. Next.js App Router (No Pages Router)

**Por qué**: 
- Server Components por defecto (mejor rendimiento)
- File-based routing más simple
- Mejores herramientas de data fetching (aunque no las usamos aún)

**Implicación**: 
- `"use client"` necesario solo donde hay hooks (Header, Quiz)

### 2. TypeScript Estricto

**Por qué**:
- Catch de errores en desarrollo
- Mejor intellisense en Cursor
- Refactoring seguro

**Implicación**:
- Props siempre tipadas
- Componentes con interfaces explícitas

### 3. Shadcn/ui como Base UI

**Por qué**:
- Componentes copiables (no dependency bloat)
- Personalización total
- Accesibilidad built-in

**Implicación**:
- `components/ui/` tiene MUCHOS archivos (es normal)
- No actualizar automáticamente; revisar cambios

### 4. WhatsApp como CTA Principal

**Por qué**:
- Canal preferido en Colombia
- Conversación directa
- Sin fricción de formularios

**Patrón de links**:
```tsx
href="https://wa.me/573001234567"  // Formato internacional
```

**Componentes**:
- `FloatingCTA.tsx`: Sticky en desktop
- `MobileCTA.tsx`: Sticky en mobile
- CTAs inline en secciones

## Patrones de Datos

### 1. Inline Data (Estado Actual)

Datos hardcodeados en componentes:

```tsx
<TestimonialCard
  quote="..."
  name="Carey Fieldcamp"
  imageUrl="https://..."
/>
```

**Por qué**: MVP rápido, no hay CMS todavía.

**Cuándo cambiar**: Si se necesita gestión de contenido frecuente.

### 2. Constants Centralizados

```typescript
// lib/constants.ts
export const WHATSAPP_NUMBER = "573001234567"
export const COMPANY_NAME = "Realty Marketing Pro"
```

**Usar para**: Datos que se repiten (números de contacto, URLs)

## Performance Patterns

### 1. Lazy Loading de Imágenes

Next.js Image component con lazy loading automático:
```tsx
<img loading="lazy" decoding="async" />
```

### 2. Code Splitting Automático

Next.js hace split automático por ruta y componente dinámico.

**Si necesitas más control**:
```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />
})
```

### 3. CSS Purging

Tailwind automáticamente elimina clases no usadas en producción.

## Convenciones de Código

### Naming
- **Componentes**: PascalCase (`HeroSection.tsx`)
- **Archivos de utilidad**: camelCase (`analytics.ts`)
- **Carpetas de secciones**: PascalCase (`HeroSection/`)

### Estructura de Componente
```tsx
// 1. Imports
import { ComponentName } from "@/components/..."

// 2. Types (si aplica)
interface Props {
  title: string
}

// 3. Componente
export const ComponentName = ({ title }: Props) => {
  // 4. Hooks
  const [state, setState] = useState()
  
  // 5. Effects
  useEffect(() => {}, [])
  
  // 6. Handlers
  const handleClick = () => {}
  
  // 7. Render
  return <div>...</div>
}
```

### Path Aliases
```typescript
import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"
```

`@/` = root del proyecto

## Relaciones entre Componentes

### Flujo de Datos (Unidireccional)

```
page.tsx
  ├─► Header (state: isScrolled)
  ├─► HeroSection (static)
  ├─► IntegrationsSection (static + 6 cards)
  ├─► ServicesSection (static list)
  ├─► TestimonialsDesktop (static cards)
  └─► Footer (static)

FloatingCTA (standalone, no props)
MobileCTA (standalone, no props)
```

**No hay estado compartido** entre secciones (por ahora).

### Composición de Secciones

Cada sección sigue el patrón:

```
SectionName/
├── index.tsx (Container y layout)
└── components/
    ├── SubComponent1.tsx (Presentacional)
    └── SubComponent2.tsx (Presentacional)
```

**index.tsx** maneja:
- Layout de la sección
- Mapeo de datos
- Responsividad

**components/** maneja:
- UI pura
- Props claras
- Reutilización

## Anti-Patrones a Evitar

### ❌ No Usar
1. **Estado global innecesario**: No necesitamos Redux/Zustand aún
2. **CSS-in-JS adicional**: Ya tenemos Tailwind
3. **Fetch de datos en cliente**: No hay backend todavía
4. **Componentes de >300 líneas**: Partir en subcomponentes

### ✅ Sí Usar
1. **Componentes pequeños y específicos**
2. **Props explícitas con types**
3. **Tailwind para todos los estilos**
4. **`"use client"` solo cuando sea necesario**

