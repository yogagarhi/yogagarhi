// Centralized internationalization configuration and Quality Gate

export interface LocaleConfig {
  code: string;
  name: string;        // English name
  nativeName: string;  // Native name displayed in dropdown
  reviewed: boolean;   // Quality Gate: false = noindex, excluded from sitemap & hreflang
  showInSwitcher?: boolean; // Legacy/global fallback
}

export const LOCALES_CONFIG: Record<string, LocaleConfig> = {
  en: { code: 'en', name: 'English', nativeName: 'English', reviewed: true, showInSwitcher: true },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', reviewed: false, showInSwitcher: true },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', reviewed: false, showInSwitcher: true },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', reviewed: false, showInSwitcher: true },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', reviewed: false, showInSwitcher: true },
  zh: { code: 'zh', name: 'Chinese', nativeName: '简体中文', reviewed: false, showInSwitcher: true },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', reviewed: false, showInSwitcher: true },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', reviewed: false, showInSwitcher: true },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', reviewed: false, showInSwitcher: true },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', reviewed: false, showInSwitcher: true },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', reviewed: false, showInSwitcher: true },
};

export const SUPPORTED_LOCALES = [
  'en',
  'id',
  'de',
  'ko',
  'ja',
  'zh',
  'nl',
  'ru',
  'it',
  'es',
  'fr',
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

/**
 * Per-page translation configuration.
 * Only pages listed here with their translated locales will show those locales in the LanguageSwitcher.
 * Homepage ('/') and 200hr Bali page ('/200-hour-yoga-teacher-training-in-bali') have full 11-locale translations.
 * All other routes show only English ('en').
 */
export const TRANSLATED_PAGES: Record<string, readonly SupportedLocale[]> = {
  '/': SUPPORTED_LOCALES,
  '/200-hour-yoga-teacher-training-in-bali': SUPPORTED_LOCALES,
  '/100-hour-yoga-teacher-training-in-bali': SUPPORTED_LOCALES,
  '/300-hour-yoga-teacher-training-in-bali': SUPPORTED_LOCALES,
  '/100-hour-yoga-teacher-training-in-rishikesh': SUPPORTED_LOCALES,
  '/200-hour-yoga-teacher-training-in-rishikesh': SUPPORTED_LOCALES,
  '/thank-you': SUPPORTED_LOCALES,
};

export function getAvailableLocalesForPath(pathname: string): readonly SupportedLocale[] {
  if (!pathname) return ['en'];
  // Normalize pathname: ensure leading slash, remove trailing slash (except for '/')
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return TRANSLATED_PAGES[normalized] || ['en'];
}

export function isLocaleReviewed(locale: string): boolean {
  return LOCALES_CONFIG[locale]?.reviewed ?? false;
}

export function isLocaleShownInSwitcher(locale: string, pathname?: string): boolean {
  if (pathname) {
    const available = getAvailableLocalesForPath(pathname);
    return available.includes(locale as SupportedLocale);
  }
  return LOCALES_CONFIG[locale]?.showInSwitcher ?? false;
}

export function getLocaleNativeName(locale: string): string {
  return LOCALES_CONFIG[locale]?.nativeName || locale.toUpperCase();
}
