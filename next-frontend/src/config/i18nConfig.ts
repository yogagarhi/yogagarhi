// Centralized internationalization configuration and Quality Gate

export interface LocaleConfig {
  code: string;
  name: string;        // English name
  nativeName: string;  // Native name displayed in dropdown
  reviewed: boolean;   // Quality Gate: false = noindex, excluded from sitemap & hreflang
}

export const LOCALES_CONFIG: Record<string, LocaleConfig> = {
  en: { code: 'en', name: 'English', nativeName: 'English', reviewed: true },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', reviewed: false },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', reviewed: false },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', reviewed: false },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', reviewed: false },
  zh: { code: 'zh', name: 'Chinese', nativeName: '简体中文', reviewed: false },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', reviewed: false },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', reviewed: false },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', reviewed: false },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', reviewed: false },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', reviewed: false },
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

export function isLocaleReviewed(locale: string): boolean {
  return LOCALES_CONFIG[locale]?.reviewed ?? false;
}

export function getLocaleNativeName(locale: string): string {
  return LOCALES_CONFIG[locale]?.nativeName || locale.toUpperCase();
}
