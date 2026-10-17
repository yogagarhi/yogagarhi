import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  let messages: any;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (err) {
    // Fallback to English messages if translation file fails to load
    messages = (await import(`../messages/en.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
