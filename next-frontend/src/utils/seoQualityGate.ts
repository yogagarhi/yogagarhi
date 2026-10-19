import { Metadata } from 'next';
import { isLocaleReviewed, SUPPORTED_LOCALES } from '@/config/i18nConfig';

/**
 * Returns alternate language hreflangs ONLY for locales that have passed the Quality Gate (reviewed: true).
 * Non-reviewed locales and noindex pages are strictly excluded.
 * When only 'en' is reviewed, only 'en' and 'x-default' are emitted.
 * When a non-English locale is marked reviewed: true, it automatically becomes included.
 */
export function getReviewedHreflang(pagePath: string = ""): Record<string, string> | undefined {
  const reviewedLocales = SUPPORTED_LOCALES.filter((loc) => isLocaleReviewed(loc));
  const normalizedPath = pagePath ? (pagePath.startsWith('/') ? pagePath : `/${pagePath}`) : '';

  const languages: Record<string, string> = {};
  for (const loc of reviewedLocales) {
    languages[loc] = loc === 'en'
      ? `https://www.yogagarhi.com${normalizedPath}`
      : `https://www.yogagarhi.com/${loc}${normalizedPath}`;
  }
  languages['x-default'] = `https://www.yogagarhi.com${normalizedPath}`;
  return languages;
}

/**
 * Applies the Quality Gate to a Next.js Metadata object.
 * If the current locale is not yet reviewed (reviewed === false),
 * it enforces robots { index: false, follow: true } and excludes the page
 * from being indexed by search engines, AND completely removes all hreflang
 * alternates from the page head (Google guidelines: noindex pages must not emit hreflang).
 */
export function applyQualityGate(meta: Metadata, locale?: string): Metadata {
  const isReviewed = isLocaleReviewed(locale || 'en');
  if (!isReviewed) {
    return {
      ...meta,
      alternates: {
        canonical: meta.alternates?.canonical,
        // No hreflang alternates for unreviewed/noindex pages
        languages: undefined,
      },
      robots: {
        index: false,
        follow: true,
        googleBot: {
          index: false,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  }
  return meta;
}
