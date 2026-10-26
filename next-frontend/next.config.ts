import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/cloudinary-loader.ts",
    deviceSizes: [390, 480, 640, 750, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  async redirects() {
    return [
      {
        source: '/retreat/warkala/:path*',
        destination: '/retreat/varkala/:path*',
        permanent: true,
      },
      {
        source: '/:locale(id|de|ko|ja|zh|nl|ru|it|es|fr)/retreat/warkala/:path*',
        destination: '/:locale/retreat/varkala/:path*',
        permanent: true,
      },
      {
        source: '/courses/100-hour',
        destination: '/100-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/courses/200-hour',
        destination: '/200-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/courses/300-hour',
        destination: '/300-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-school',
        permanent: true,
      },
      {
        source: '/about/ashram',
        destination: '/about-school',
        permanent: true,
      },
      {
        source: '/about/teachers',
        destination: '/teachers',
        permanent: true,
      },
      {
        source: '/about/testimonials',
        destination: '/testimonials',
        permanent: true,
      },
      {
        source: '/top-3-yogarhi-classes-you-should-try-this-month/:path*',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/health-wellness-focus-2/:path*',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/blogs/:slug*',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/about-school',
        permanent: true,
      },
      {
        source: '/7-days-yoga-retreat',
        destination: '/100-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/yoga-courses',
        destination: '/',
        permanent: true,
      },
      {
        source: '/course',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/free-yoga-training',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yoga-anatomy-mastery',
        destination: '/yoga-anatomy-masterclass',
        permanent: true,
      },
    ];
  },
  async headers() {
    const isProduction = process.env.VERCEL_ENV === 'production';
    const vercelLiveCsp = isProduction ? '' : ' https://vercel.live';
    const cspValue = `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://www.youtube.com https://s.ytimg.com https://scripts.clarity.ms${vercelLiveCsp}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; media-src 'self' https:; connect-src 'self' https:${vercelLiveCsp}; frame-src 'self' https://www.youtube.com https://www.google.com${vercelLiveCsp};`;

    return [
      {
        source: '/:path*',
        headers: [
          // NOTE: Content-Security-Policy is set in Report-Only mode without an external reporting endpoint.
          // Policy violations are logged to the browser developer console only and will not block resources or scripts.
          {
            key: 'Content-Security-Policy-Report-Only',
            value: cspValue,
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // NOTE: X-Frame-Options is set to 'SAMEORIGIN' to protect against clickjacking.
          // This header is optional; if an external partner site needs to embed yogagarhi.com in an iframe, this can be relaxed or removed.
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/hero-img/:path*',
        destination: 'https://res.cloudinary.com/dngsqdwbb/image/upload/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
