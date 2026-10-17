// Centralized internationalization configuration and Quality Gate

export interface LocaleConfig {
  code: string;
  name: string;        // English name
  nativeName: string;  // Native name displayed in dropdown
  reviewed: boolean;   // Quality Gate: false = noindex, excluded from sitemap & hreflang
  showInSwitcher: boolean; // Controls whether this locale appears in the LanguageSwitcher dropdown
}

export const LOCALES_CONFIG: Record<string, LocaleConfig> = {
  en: { code: 'en', name: 'English', nativeName: 'English', reviewed: true, showInSwitcher: true },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', reviewed: false, showInSwitcher: false },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', reviewed: false, showInSwitcher: false },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', reviewed: false, showInSwitcher: false },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', reviewed: false, showInSwitcher: false },
  zh: { code: 'zh', name: 'Chinese', nativeName: '简体中文', reviewed: false, showInSwitcher: false },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', reviewed: false, showInSwitcher: false },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', reviewed: false, showInSwitcher: false },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', reviewed: false, showInSwitcher: false },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', reviewed: false, showInSwitcher: false },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', reviewed: false, showInSwitcher: false },
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

export function isLocaleShownInSwitcher(locale: string): boolean {
  return LOCALES_CONFIG[locale]?.showInSwitcher ?? false;
}

export function getLocaleNativeName(locale: string): string {
  return LOCALES_CONFIG[locale]?.nativeName || locale.toUpperCase();
}
