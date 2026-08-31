import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
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
            url: 'https://www.yogagarhi.com/yogic-energy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
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
            url: 'https://www.yogagarhi.com/apply-now',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://www.yogagarhi.com/pre-yttc-prep',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
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
            url: 'https://www.yogagarhi.com/retreat/warkala',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/warkala/3-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/warkala/7-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.yogagarhi.com/retreat/warkala/14-days',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}

