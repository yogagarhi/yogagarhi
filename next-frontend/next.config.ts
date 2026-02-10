import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,

  // Disable source maps in production for smaller bundles
  productionBrowserSourceMaps: false,

  // Optimize package imports for better tree-shaking
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },

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
    // Aggressive image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-tabs',
      '@radix-ui/react-slot',
      'embla-carousel-react',
    ],
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
    ];
  },
};

export default nextConfig;
