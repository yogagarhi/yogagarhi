import React, { forwardRef, ComponentProps } from 'react';
import NextLink from 'next/link';
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { useLocale } from 'next-intl';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, TRANSLATED_PAGES, SupportedLocale } from '@/config/i18nConfig';

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
  localeDetection: false, // Strict requirement: No automatic browser/IP redirects. Language changes ONLY via switcher.
  alternateLinks: false, // Strict Quality Gate: Disable automatic next-intl HTTP Link header; hreflang alternates are managed strictly via Quality Gate HTML metadata and sitemap
});

export type Locale = (typeof routing.locales)[number];

const { Link: BaseLink, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export { redirect, usePathname, useRouter, getPathname };

/**
 * Smart Link component that respects TRANSLATED_PAGES:
 * - If target page is in TRANSLATED_PAGES for the active locale, it maintains the localized prefix (e.g. /de/...).
 * - If target page is NOT yet translated, it links directly to the clean English URL (without /de/ or /en/ prefix).
 * - As soon as a page is added to TRANSLATED_PAGES, all links to it dynamically adopt the locale prefix.
 */
export const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof BaseLink>>(
  function SmartLink({ href, locale, ...props }, ref) {
    let currentLocale: string | undefined;
    try {
      currentLocale = useLocale();
    } catch {
      currentLocale = undefined;
    }

    if (currentLocale && currentLocale !== DEFAULT_LOCALE) {
      const hrefStr = typeof href === 'string' ? href : (typeof href === 'object' && href?.pathname ? String(href.pathname) : '');

      if (hrefStr.startsWith('/') && !hrefStr.startsWith('//')) {
        const cleanPath = hrefStr.split('?')[0].split('#')[0];
        const normalized = cleanPath === '' || cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
        const translatedLocales = TRANSLATED_PAGES[normalized];

        if (!translatedLocales || !translatedLocales.includes(currentLocale as SupportedLocale)) {
          // Untranslated page: render standard NextLink directly to clean English URL (no /de/ or /en/ prefix)
          return React.createElement(NextLink, { ref, href: href as any, ...props });
        }
      }
    }

    return React.createElement(BaseLink as any, { ref, href, locale, ...props });
  }
);
