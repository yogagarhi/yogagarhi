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
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/', '/thank-you'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/', '/thank-you'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/', '/thank-you'],
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },
            {
                userAgent: 'Applebot',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            {
                userAgent: 'AdsBot-Google',
                allow: '/',
            },
        ],
        sitemap: 'https://www.yogagarhi.com/sitemap.xml',
    }
}

