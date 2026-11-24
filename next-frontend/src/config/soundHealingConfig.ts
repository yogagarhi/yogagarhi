/**
 * Feature flag for Sound Healing Certification page.
 * While false:
 * - robots: noindex, follow
 * - excluded from sitemap.xml
 * - header / footer links hidden
 * - build passes even if [PLACEHOLDER] strings are present
 *
 * Set to true ONLY when all 14 placeholders ([PRICE], [DATES], etc.)
 * are replaced with confirmed information from the client.
 */
export const SOUND_HEALING_PAGE_READY = false;
