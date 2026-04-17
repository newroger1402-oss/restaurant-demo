# Plan de Implementación
## Cielo y Maíz – Cocina Mexicana con Alma

---

## FASE 2: PLAN DE IMPLEMENTACIÓN DETALLADO

### Resumen Ejecutivo
Landing page multi-página para restaurante mexicano auténtico en Miami. Diseño moderno que resalta la paleta de colores tradicional mexicana (#E85D04, #1D3557, #D62828, #FDF0D5) con tipografía Playfair Display + Poppins.

---

## 1. MAPA DE COMPONENTES

### 1.1 Componentes Common (Atomics)

| Componente | Props | Descripción |
|------------|-------|-------------|
| `button.tsx` | `variant: 'primary' \| 'secondary' \| 'outline'`, `size`, `children` | Botones con colores del restaurante (naranja primario) |
| `input.tsx` | `type`, `placeholder`, `label`, `required` | Campos de formulario estilizados |
| `select.tsx` | `options`, `placeholder`, `label` | Selectores para formulario de reservas |
| `textarea.tsx` | `placeholder`, `rows`, `label` | Campo de notas especiales |
| `seo-head.tsx` | `title`, `description`, `image`, `url` | Meta tags dinámicos por página |
| `social-fab.tsx` | (usa constants) | Botones flotantes WhatsApp, IG, FB, Google |
| `cookie-banner.tsx` | - | Banner de consentimiento |
| `scroll-to-top.tsx` | - | Botón volver arriba |

### 1.2 Componentes Layout

| Componente | Props | Descripción |
|------------|-------|-------------|
| `header.tsx` | - | Sticky header con logo, nav (Inicio/Menú/Nosotros/Reservas/FAQ), CTA "Reservar mi mesa" |
| `footer.tsx` | - | 4 columnas: Info, Links, Menú destacado, Legal |
| `layout.tsx` | `children` | Wrapper global |

### 1.3 Componentes Sections (Específicos Restaurante)

| Componente | Props | Descripción |
|------------|-------|-------------|
| `hero-section.tsx` | - | Imagen de fondo con overlay oscuro, título "Donde el sol de Miami abraza la tierra mexicana", CTA Reservar + Ver Menú |
| `menu-preview-section.tsx` | `category: 'entradas' \| 'principales' \| 'postres'` | Grid de 3 platos destacados con foto, nombre, descripción corta, precio |
| `about-section.tsx` | - | Historia hermanos Vega, foto Doña Elena, timeline 2019-presente |
| `testimonials-section.tsx` | - | 3 testimonios en cards (Ana G., Michael T., Laura y Carlos) |
| `faq-section.tsx` | - | Acordeón con 4 preguntas sobre veggie/delivery/pagos/estacionamiento |
| `contact-section.tsx` | - | 2 columnas: Formulario reserva (con date picker) + Info contacto con mapa |
| `features-section.tsx` | - | Badges: "Maíz nixtamalizado", "Recetas de abuela", "Ambiente familiar" |
| `delivery-section.tsx` | - | Botones Uber Eats, DoorDash, WhatsApp Pickup |
| `hours-section.tsx` | - | Horarios destacados, "Cerrado Lunes" badge |

---

## 2. ESTRATEGIA DE INTERNACIONALIZACIÓN (i18n)

### Claves de Traducción Propuestas

#### Nuevas Keys para Restaurante

```json
// es.json
{
  "common": {
    "menu": "Menú",
    "reservations": "Reservas",
    "order": "Pedir"
  },
  "menu": {
    "categories": {
      "entradas": "Entradas",
      "principales": "Platos Principales",
      "postres": "Postres",
      "bebidas": "Bebidas",
      "especialidades": "Especialidades de la Casa"
    },
    "items": {
      "cochinita": {
        "name": "Tacos de Cochinita Inmigrante",
        "description": "Puerco achiote cocido 12 horas...",
        "price": "$16.00"
      }
      // ... más platillos
    }
  },
  "reservation": {
    "form": {
      "date": "Fecha",
      "time": "Hora",
      "guests": "Número de personas",
      "notes": "Notas especiales (alergias, ocasión)"
    }
  },
  "delivery": {
    "title": "También pedimos a domicilio",
    "uber": "Uber Eats",
    "doordash": "DoorDash",
    "pickup": "Pickup por WhatsApp"
  }
}
```

### Estructura de Locales

```
src/locales/
├── i18n.ts           (configuración)
├── es.json           (español - principal)
└── en.json           (inglés)
```

---

## 3. ESQUEMA DE SECCIÓN HERO

### Diseño Propuesto

```
┌─────────────────────────────────────────────────────────────┐
│  [Fondo: Imagen taco azul con cocina desenfocada]           │
│                                                             │
│  [Overlay: Gradiente negro 60% opacidad]                     │
│                                                             │
│     DONDE EL SOL DE MIAMI                                   │
│     ABRAZA LA TIERRA MEXICANA                               │
│     ─────────────────────                                   │
│     Auténtica cocina mexicana hecha por manos              │
│     mexicanas en Miami                                      │
│                                                             │
│     [🍽️ Reservar mi mesa]  [📋 Ver menú completo]          │
│                                                             │
│     ⭐ Más de 500 clientes felices | ⭐ 4.8/5 Google        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Colores Hero
- **Overlay:** `bg-gradient-to-r from-[#1D3557]/80 to-[#E85D04]/60`
- **Título:** `text-[#FDF0D5]` (crema)
- **CTA Primario:** `bg-[#E85D04]` (naranja) → hover `bg-[#D62828]` (rojo)
- **CTA Secundario:** `border-2 border-[#FDF0D5] text-[#FDF0D5]`

---

## 4. ARQUITECTURA DE PÁGINAS

### Rutas y Contenido

| Ruta | Título SEO | Componentes Principales |
|------|------------|------------------------|
| `/` | Cielo y Maíz \| Auténtica Cocina Mexicana en Miami | Hero, Features, Menú Preview (3 cats), Testimonials, CTA Reserva |
| `/menu` | Menú Completo \| Cielo y Maíz | Menú Header, Entradas Grid, Principales Grid, Postres Grid, Bebidas, Especialidades, CTA |
| `/about` | Nuestra Historia \| Hermanos Vega & Doña Elena | Hero historia, Timeline, Equipo, Galería cocina |
| `/reservations` | Reserva tu Mesa \| Cielo y Maíz | Formulario completo, Info lateral, Mapa, FAQ rápido |
| `/faq` | Preguntas Frecuentes \| Cielo y Maíz | Acordeón 4 preguntas, CTA contacto |

---

## 5. CONFIGURACIÓN DE CONSTANTES

### Actualización de `src/config/constants.ts`

```typescript
export const BUSINESS_INFO = {
  NAME: 'Cielo y Maíz',
  TAGLINE: 'Cocina Mexicana con Alma',
  DESCRIPTION: 'Auténtica cocina mexicana en Miami. Maíz nixtamalizado a mano, moles tradicionales y sabores que cruzan fronteras.',
  LOGO: '/assets/images/logo.svg',
  HERO_IMAGE: '/assets/images/hero-taco.jpg',
  URL: 'https://cieloymaiz.com',
};

export const CONTACT_INFO = {
  EMAIL: 'hola@cieloymaiz.com',
  PHONE_DISPLAY: '+1 (305) 555-2390',
  PHONE_CALL: 'tel:+13055552390',
  WHATSAPP_DISPLAY: '+1 (305) 555-2390',
  WHATSAPP_URL: 'https://wa.me/13055552390',
  SOCIAL: {
    INSTAGRAM: 'https://instagram.com/cieloymaiz.mia',
    FACEBOOK: 'https://facebook.com/cieloymaizmiami',
    TIKTOK: 'https://tiktok.com/@tacosymezcal.mia',
    GOOGLE: 'https://g.page/cieloymaiz',
  },
  LOCATION: '2340 SW 8th Street, Miami, FL 33135',
  HOURS: 'Martes-Domingo: 11am-10pm (Vie-Sab hasta 12am)',
};

export const APP_SERVICES: ServiceConfig[] = [
  { key: 'entradas', image: '/assets/images/tlacoyos.jpg' },
  { key: 'principales', image: '/assets/images/cochinita.jpg' },
  { key: 'postres', image: '/assets/images/churros.jpg' },
] as const;
```

---

## 6. CHECKLIST DE IMPLEMENTACIÓN

### Fase 2A: Setup y Assets (30 min)
- [ ] Copiar imágenes de `/branding/` a `/src/assets/images/`
- [ ] Renombrar fotos: `hero.jpg`, `tlacoyos.jpg`, `cochinita.jpg`, `churros.jpg`, `mole.jpg`, `fachada.jpg`
- [ ] Actualizar `index.html` con meta tags del restaurante
- [ ] Configurar colores Tailwind en `index.css`

### Fase 2B: Traducciones (45 min)
- [ ] Actualizar `es.json` con menú completo
- [ ] Actualizar `en.json` con traducciones
- [ ] Verificar todas las keys de restaurante

### Fase 2C: Componentes Core (90 min)
- [ ] Actualizar `constants.ts` con datos reales
- [ ] Adaptar `header.tsx` con nuevo menú y CTA
- [ ] Adaptar `footer.tsx` con horarios y delivery
- [ ] Adaptar `social-fab.tsx` con redes correctas

### Fase 2D: Secciones (120 min)
- [ ] `hero-section.tsx` - Nuevo diseño restaurante
- [ ] `menu-preview-section.tsx` - Grid de platos
- [ ] `features-section.tsx` - Badges maíz/abuela
- [ ] `testimonials-section.tsx` - 3 testimonios reales
- [ ] `delivery-section.tsx` - Botones Uber/DoorDash
- [ ] `hours-section.tsx` - Horarios destacados
- [ ] `contact-section.tsx` - Formulario reserva completo
- [ ] `faq-section.tsx` - 4 preguntas reales

### Fase 2E: Páginas (60 min)
- [ ] `home.tsx` - Landing principal
- [ ] `menu.tsx` - Página menú completo (nueva)
- [ ] `about.tsx` - Historia y equipo
- [ ] `reservations.tsx` - Página reservas
- [ ] `faq.tsx` - Preguntas frecuentes

### Fase 2F: Polish (30 min)
- [ ] Responsive testing
- [ ] SEO Head en todas las páginas
- [ ] Sitemap.xml
- [ ] Test formulario reservas

---

## 7. TIMELINE ESTIMADO

| Fase | Tiempo | Status |
|------|--------|--------|
| 2A: Setup Assets | 30 min | ⏳ Pendiente aprobación |
| 2B: Traducciones | 45 min | ⏳ Pendiente |
| 2C: Componentes Core | 90 min | ⏳ Pendiente |
| 2D: Secciones | 120 min | ⏳ Pendiente |
| 2E: Páginas | 60 min | ⏳ Pendiente |
| 2F: Polish | 30 min | ⏳ Pendiente |
| **TOTAL** | **~6 horas** | ⏳ Esperando aprobación |

---

## 8. DECISIONES DE DISEÑO PENDIENTES

1. **¿Cambiamos la página "Services" a "Menu"?**
   - Sugerencia: Sí, adaptar componentes existentes para mostrar categorías de menú

2. **¿Agregamos selector de fecha/hora real en formulario?**
   - Sugerencia: Sí, usar input type="date" y type="time" nativos

3. **¿Mostramos precios en el menú preview de home?**
   - Sugerencia: Mostrar solo en página /menu, en home solo nombres y descripciones

4. **¿Agregamos sección de equipo/chefs?**
   - Sugerencia: Incluir en página /about con fotos hermanos Vega

---

**Plan listo para aprobación.** Una vez aprobado, procedo con la Fase 3: Construcción Técnica.

¿Apruebas este plan de implementación? ¿Hay algún ajuste necesario?
