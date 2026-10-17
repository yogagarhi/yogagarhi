import { Metadata } from 'next';
import { isLocaleReviewed } from '@/config/i18nConfig';

/**
 * Applies the Quality Gate to a Next.js Metadata object.
 * If the current locale is not yet reviewed (reviewed === false),
 * it enforces robots { index: false, follow: true } and excludes the page
 * from being indexed by search engines while allowing human review via switcher.
 */
export function applyQualityGate(meta: Metadata, locale?: string): Metadata {
  const isReviewed = isLocaleReviewed(locale || 'en');
  if (!isReviewed) {
    return {
      ...meta,
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
