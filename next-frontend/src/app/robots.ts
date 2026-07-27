import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/', '/thank-you'],
            },
            {
                userAgent: 'AdsBot-Google',
                allow: '/',
            },
        ],
        sitemap: 'https://www.yogagarhi.com/sitemap.xml',
    }
}

