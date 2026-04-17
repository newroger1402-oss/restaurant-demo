/**
 * Reusable constants and environmental variables access layer.
 * This is a standard template for landing pages.
 *
 * CENTRALIZED CONFIGURATION: Edit this file to update business info,
 * contact details, services, and SEO metadata across the entire site.
 */

// ============================================
// BUSINESS INFORMATION
// ============================================
export const BUSINESS_INFO = {
  /** Business name used across the site */
  NAME: 'Cielo y Maíz',
  /** Short tagline displayed in header/footer */
  TAGLINE: 'Cocina Mexicana con Alma',
  /** Full business description for SEO and footer */
  DESCRIPTION: 'Auténtica cocina mexicana hecha por manos mexicanas en Miami. Maíz nixtamalizado a mano, chiles de Oaxaca y recetas que cruzan fronteras sin perder el alma.',
  /** Business logo path */
  LOGO: '/assets/images/logo.svg',
  /** Hero image for SEO and meta tags */
  HERO_IMAGE: '/assets/images/hero.jpg',
  /** Website URL (no trailing slash) */
  URL: 'https://cieloymaiz.com',
  /** Copyright year auto-updates */
  get COPYRIGHT_YEAR() { return new Date().getFullYear(); },
} as const;

// ============================================
// SEO DEFAULTS
// ============================================
export const SEO_DEFAULTS = {
  /** Default page title template: `{page} | {site}` */
  TITLE_TEMPLATE: (pageTitle: string) => `${pageTitle} | ${BUSINESS_INFO.NAME}`,
  /** Default meta description */
  DESCRIPTION: BUSINESS_INFO.DESCRIPTION,
  /** Default OG/Twitter image */
  IMAGE: BUSINESS_INFO.HERO_IMAGE,
  /** Default keywords */
  KEYWORDS: 'restaurante mexicano miami, comida mexicana little havana, tacos auténticos, mole poblano, maíz nixtamalizado, cochinita pibil, cocina mexicana tradicional',
  /** Author meta tag */
  AUTHOR: BUSINESS_INFO.NAME,
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================
const phoneRaw = '+1 (305) 555-2390';
const whatsappRaw = '+1 (305) 555-2390';

export const CONTACT_INFO = {
  // Email
  EMAIL: 'hola@cieloymaiz.com',

  // Phone
  PHONE_DISPLAY: phoneRaw,
  PHONE_CALL: `tel:${phoneRaw.replace(/\s/g, '')}`,

  // WhatsApp
  WHATSAPP_DISPLAY: whatsappRaw,
  WHATSAPP_URL: `https://wa.me/${whatsappRaw.replace(/[^\d]/g, '')}`,

  // Social Media URLs
  SOCIAL: {
    INSTAGRAM: 'https://instagram.com/cieloymaiz.mia',
    FACEBOOK: 'https://facebook.com/cieloymaizmiami',
    TIKTOK: 'https://tiktok.com/@tacosymezcal.mia',
    GOOGLE: 'https://g.page/cieloymaiz',
  },

  // Physical Location
  LOCATION: '2340 SW 8th Street, Miami, FL 33135',

  // Business Hours - Mock con saltos de línea
  HOURS: 'Lun-Vie: 12pm-10pm\nSáb-Dom: Cerrado',

  // Supported Languages
  LANGUAGES: ['Español', 'Inglés'] as const,

  // Marketing Agency
  AGENCY_URL: 'https://crescendodigitalmarketingagency.com/en/',
  AGENCY_NAME: 'CDM Marketing',
} as const;

// ============================================
// SERVICES CONFIGURATION (MENÚ CATEGORIES)
// ============================================
export interface ServiceConfig {
  key: string;
  image: string;
  /** Optional: override icon for service cards */
  icon?: string;
}

export const APP_SERVICES: ServiceConfig[] = [
  { key: 'entradas', image: '/assets/images/entradas.jpg' },
  { key: 'principales', image: '/assets/images/principales.jpg' },
  { key: 'postres', image: '/assets/images/postres.jpg' },
] as const;

// ============================================
// THIRD-PARTY INTEGRATIONS
// ============================================
export const REVIEWS_WIDGET_ID = '';

// ============================================
// NAVIGATION CONFIGURATION
// ============================================
export const NAV_LINKS = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'faq', path: '/faq' },
  { key: 'contact', path: '/contact' },
] as const;

// ============================================
// DELIVERY PLATFORMS
// ============================================
export const DELIVERY_PLATFORMS = {
  UBER_EATS: 'https://www.ubereats.com/store/cielo-y-maiz',
  DOORDASH: 'https://www.doordash.com/store/cielo-y-maiz',
} as const;

// ============================================
// RESERVATION SETTINGS
// ============================================
export const RESERVATION_SETTINGS = {
  MIN_PEOPLE: 1,
  MAX_PEOPLE: 12,
  DEPOSIT_PER_PERSON: 5,
  NOTICE_HOURS: 24,
} as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get service options for contact form select
 * Includes all services + "General Contact" + "Other"
 */
export const getServiceOptions = (t: (key: string) => string) => [
  ...APP_SERVICES.map(s => ({ value: s.key, label: t(`services.${s.key}.title`) })),
  { value: 'info', label: t('contact.form.service_info') },
  { value: 'other', label: t('contact.form.service_other') },
];

/**
 * Get navigation links with translated labels
 */
export const getNavLinks = (t: (key: string) => string) =>
  NAV_LINKS.map(link => ({
    ...link,
    label: t(`common.${link.key}`),
  }));

/**
 * Get service links for dropdown navigation
 */
export const getServiceLinks = (t: (key: string) => string) =>
  APP_SERVICES.map(s => ({
    key: s.key,
    label: t(`services.${s.key}.title`),
    path: `/services#${s.key}`,
  }));