import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
        source: '/300-hour-yoga-teacher-training-in-rishikesh',
        destination: '/',
        permanent: true,
      },
      {
        source: '/free-yoga-training',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
