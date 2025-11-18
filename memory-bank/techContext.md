# Tech Context - Landing RMP

## Stack Tecnológico

### Core Framework
- **Next.js 14+** (App Router)
  - React 18+
  - Server Components por defecto
  - File-based routing
  - Built-in optimizaciones de performance

### Lenguaje
- **TypeScript 5+**
  - Modo estricto
  - Tipado completo de props y componentes

### Estilos
- **Tailwind CSS 3+**
  - Utility-first approach
  - JIT (Just-In-Time) compiler
  - Custom config en `tailwind.config.js` (si existe)
  
### Componentes UI
- **Shadcn/ui**
  - Componentes copiables (no npm package)
  - Radix UI primitives debajo
  - Accesibilidad WAI-ARIA
  - Componentes en `components/ui/`

### Herramientas de Desarrollo
- **pnpm** como package manager
- **PostCSS** para procesar CSS
- **ESLint** (configuración Next.js)

### Analytics
- **Google Analytics 4**
  - Setup en `lib/analytics.ts`
  - Script tag en layout (probablemente)

## Estructura de Archivos (Tree)

```
LandingRMP/
├── app/
│   ├── globals.css         # Estilos globales + Tailwind directives
│   ├── layout.tsx          # Root layout (HTML shell)
│   └── page.tsx            # Homepage (orquestador de secciones)
│
├── sections/               # Secciones de la landing
│   ├── Header/
│   ├── HeroSection/
│   ├── IntegrationsSection/
│   ├── BenefitsSection/
│   ├── ServicesSection/
│   ├── ProcessSection/
│   ├── ComparisonSection/
│   ├── PricingSection/
│   ├── CaseStudiesSection/
│   ├── TestimonialsDesktop/
│   ├── TestimonialsMobile/
│   ├── FAQSection/
│   └── Footer/
│
├── components/
│   ├── FloatingCTA.tsx     # WhatsApp sticky (desktop)
│   ├── MobileCTA.tsx       # WhatsApp sticky (mobile)
│   ├── quiz.tsx            # Quiz de calificación
│   ├── theme-provider.tsx  # Tema (si se usa)
│   └── ui/                 # Shadcn components
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── [50+ componentes]
│
├── lib/
│   ├── utils.ts            # cn() helper (clsx + tailwind-merge)
│   ├── constants.ts        # Constantes del proyecto
│   └── analytics.ts        # Google Analytics setup
│
├── hooks/
│   ├── use-mobile.ts       # Hook para detectar mobile
│   └── use-toast.ts        # Hook para toasts
│
├── public/
│   └── images/
│       └── design-mode/    # Imágenes del proyecto
│
├── styles/
│   └── globals.css         # (Posible duplicado de app/globals.css)
│
├── memory-bank/            # Documentación del proyecto
│   ├── projectbrief.md
│   ├── productContext.md
│   ├── systemPatterns.md
│   ├── techContext.md
│   ├── activeContext.md
│   └── progress.md
│
├── next.config.mjs         # Config de Next.js
├── tsconfig.json           # Config de TypeScript
├── components.json         # Config de Shadcn
├── postcss.config.mjs      # Config de PostCSS
├── package.json            # Dependencies
├── pnpm-lock.yaml          # Lock file
└── .cursorrules            # Reglas de Cursor (si existe)
```

## Dependencias Principales

### Production Dependencies (package.json)

```json
{
  "next": "^14.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "typescript": "^5.x",
  
  // UI & Styling
  "tailwindcss": "^3.x",
  "tailwind-merge": "^x.x",
  "clsx": "^x.x",
  
  // Shadcn & Radix
  "@radix-ui/react-*": "múltiples packages",
  "class-variance-authority": "^x.x",
  "lucide-react": "^x.x",
  
  // Utilities
  "date-fns": "posiblemente",
  "zod": "posiblemente para validación"
}
```

### Dev Dependencies

```json
{
  "@types/node": "^20.x",
  "@types/react": "^18.x",
  "@types/react-dom": "^18.x",
  "postcss": "^8.x",
  "eslint": "^8.x",
  "eslint-config-next": "^14.x"
}
```

## Configuración de Next.js

### next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Posibles configs:
  images: {
    domains: [
      'realtymarketingpro.com',
      'c.animaapp.com'
    ]
  },
  // Otras optimizaciones
}
export default nextConfig
```

## Configuración de TypeScript

### tsconfig.json (Típico)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]  // Path alias
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Configuración de Tailwind

### Tailwind Directives (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles aquí si es necesario */
```

### Clases Custom Frecuentes

- `box-border` - Común en todo el proyecto
- `caret-transparent` - Esconder cursor en elementos no input
- Breakpoint `md:` - Típicamente 768px+

## Setup de Desarrollo

### Instalación

```bash
# Clonar proyecto
git clone [repo-url]
cd LandingRMP

# Instalar dependencias
pnpm install

# Correr servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Correr build localmente
pnpm start
```

### Scripts Disponibles (package.json)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Puertos

- **Dev**: `http://localhost:3000`
- **Production Build**: Puerto configurable (típicamente 3000)

## Limitaciones Técnicas

### 1. No hay Backend

- No hay API routes todavía
- No hay base de datos
- Todo el contenido es estático/hardcoded

**Implicación**: Cambios de contenido requieren redeploy.

### 2. Analytics Solo Frontend

- Google Analytics en cliente
- No hay tracking server-side (aún)

### 3. No hay CMS

- Contenido directamente en componentes
- No hay Contentful, Strapi, etc.

**Cuándo agregar**: Si el cliente necesita editar contenido frecuentemente.

### 4. Imágenes Externas

Las imágenes están hosteadas en:
- `realtymarketingpro.com`
- `c.animaapp.com`

**Riesgo**: Si esos dominios fallan, las imágenes no cargan.

**Solución futura**: Migrar a `public/images/` y usar Next.js Image.

## Performance Considerations

### Optimizaciones Actuales

1. **Next.js Image**: Usar donde sea posible (no todas las imágenes lo usan aún)
2. **Code Splitting**: Automático por Next.js
3. **CSS Purging**: Tailwind elimina clases no usadas en build
4. **Lazy Loading**: Imágenes con `loading="lazy"`

### Optimizaciones Pendientes

1. **Webp/Avif**: Convertir imágenes a formatos modernos
2. **CDN**: Para imágenes y assets estáticos
3. **Preload Critical Assets**: Fonts, above-the-fold images
4. **Defer Analytics**: Cargar GA después del contenido crítico

### Métricas Target

- **FCP** (First Contentful Paint): <1.8s
- **LCP** (Largest Contentful Paint): <2.5s
- **TTI** (Time to Interactive): <3.8s
- **CLS** (Cumulative Layout Shift): <0.1

## Deployment

### Plataforma Recomendada

**Vercel** (creadores de Next.js):
- Zero-config deployment
- Automatic HTTPS
- Edge network global
- Preview deployments por PR

### Build Command

```bash
pnpm build
```

### Output

```
.next/                    # Build output
└── static/
    ├── chunks/
    ├── css/
    └── media/
```

### Variables de Entorno (Futuro)

Cuando se necesiten:

```env
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```

`NEXT_PUBLIC_*` expone variables al cliente.

## Seguridad

### Headers de Seguridad (Configurar en next.config.mjs)

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ]
    }
  ]
}
```

### Content Security Policy (CSP)

Considerar para prevenir XSS (cuando se agregue analytics y scripts de terceros).

## Troubleshooting Común

### Problema: "Module not found"
**Causa**: Path alias `@/` no resuelve.
**Solución**: Verificar `tsconfig.json` tiene `"paths": { "@/*": ["./*"] }`

### Problema: Estilos de Tailwind no aplican
**Causa**: Clase no incluida en `content` de tailwind config.
**Solución**: Verificar que archivos estén en array de content.

### Problema: Hydration mismatch
**Causa**: Diferencia entre render del servidor y cliente.
**Solución**: Verificar que no haya lógica condicional basada en `window` sin `useEffect`.

### Problema: Imágenes no cargan
**Causa**: Dominio externo no permitido.
**Solución**: Agregar dominio a `next.config.mjs` en `images.domains`.

## Recursos de Referencia

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Shadcn/ui**: https://ui.shadcn.com/
- **Radix UI**: https://www.radix-ui.com/
- **React Docs**: https://react.dev/

