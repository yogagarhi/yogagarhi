import { MetadataRoute } from 'next'
import { SUPPORTED_LOCALES, isLocaleReviewed, TRANSLATED_PAGES } from '@/config/i18nConfig'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrls: MetadataRoute.Sitemap = [
        {
            url: 'https://www.yogagarhi.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: ['https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/hero-yoga-bali-new.jpg']
        },
        {
            url: 'https://www.yogagarhi.com/about-school',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/teachers',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/testimonials',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
            images: ['https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/course-100-hour.jpg']
        },
        {
            url: 'https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-bali',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: ['https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/course-200-hour.jpg']
        },
        {
            url: 'https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-bali',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
            images: ['https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto/yogagarhi/assets/course-300-hour.jpg']
        },
        {
            url: 'https://www.yogagarhi.com/gallery',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://www.yogagarhi.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/blogs/benefits-yttc-bali',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/blogs/what-to-expect-200hr',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/blogs/himalayan-roots-yoga',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/contact-us',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.yogagarhi.com/teacher-training-foundation',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/yoga-anatomy-masterclass',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.yogagarhi.com/terms-and-conditions',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.yogagarhi.com/refund-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-rishikesh',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-rishikesh',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-varkala',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-varkala',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-varkala',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/apply-now',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://www.yogagarhi.com/sunday-schedule',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://www.yogagarhi.com/retreat',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/bali',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/bali/3-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/bali/7-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/bali/14-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/rishikesh',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/rishikesh/3-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/rishikesh/7-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/rishikesh/14-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/varkala',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/varkala/3-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/varkala/7-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/varkala/14-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // Dynamic inclusion of reviewed non-English locales
    // Only locales with reviewed: true are eligible for sitemap inclusion
    const reviewedNonEnLocales = SUPPORTED_LOCALES.filter(
        (loc) => loc !== 'en' && isLocaleReviewed(loc)
    );

    const localizedUrls: MetadataRoute.Sitemap = [];

    for (const loc of reviewedNonEnLocales) {
        for (const [pagePath] of Object.entries(TRANSLATED_PAGES)) {
            const normalized = pagePath === '/' ? '' : pagePath;
            localizedUrls.push({
                url: `https://www.yogagarhi.com/${loc}${normalized}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: pagePath === '/' || pagePath === '/200-hour-yoga-teacher-training-in-bali' ? 0.9 : 0.7,
            });
        }
    }

    return [...baseUrls, ...localizedUrls];
}

