// Removed Google Font imports to avoid build-time fetch errors
// import { Cormorant_Garamond, Lato } from "next/font/google";
// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-heading",
//   display: "swap",
// });
// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
//   variable: "--font-body",
//   display: "swap",
// });
// import { Cormorant_Garamond, Lato } from "next/font/google"; // removed to avoid font fetch errors
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import { getCloudinaryUrl } from "@/utils/cloudinary";

// Font definitions removed to avoid runtime fetching errors.
// const cormorant = Cormorant_Garamond({ /* ... */ });
// const lato = Lato({ /* ... */ });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yogagarhi.com'),
  title: {
    default: "YogaGarhi - Yoga Teacher Training Bali",
    template: "%s | YogaGarhi"
  },
  alternates: {
    canonical: '/',
  },
  description: "Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs at YogaGarhi.",
  keywords: [
    "yoga teacher training Bali",
    "YTTC Ubud",
    "200 hour yoga certification",
    "yoga alliance certified",
    "yoga retreat Bali",
    "yoga school Indonesia",
    "RYT 200",
    "yoga ashram Bali",
    "meditation training",
    "pranayama course",
    "YogaGarhi",
    "100 hour YTTC",
    "300 hour YTTC",
    "yoga teacher training Gianyar"
  ],
  authors: [{ name: "YogaGarhi" }],
  creator: "YogaGarhi",
  publisher: "YogaGarhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yogagarhi.com',
    siteName: 'YogaGarhi',
    title: 'YogaGarhi - Yoga Teacher Training in Bali, Ubud',
    description: 'Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs at YogaGarhi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YogaGarhi - Yoga Teacher Training Bali',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YogaGarhi - Yoga Teacher Training in Bali, Ubud',
    description: 'Transform your life with authentic yoga teacher training in Bali. 100, 200 & 300 hour Yoga Alliance certified programs.',
    images: ['/og-image.jpg'],
    creator: '@YogaGarhi',
    site: '@YogaGarhi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

import { Providers } from "@/components/Providers";
import UtmTracker from '@/components/UtmTracker';
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f766e" />
        {/* Unified Structured Data (EducationalOrganization, LocalBusiness, WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.yogagarhi.com/#organization",
                  "name": "YogaGarhi",
                  "url": "https://www.yogagarhi.com",
                  "logo": getCloudinaryUrl("about-yoga-3"),
                  "image": "https://www.yogagarhi.com/og-image.jpg",
                  "description": "Yoga Alliance certified 100, 200 & 300 Hour Yoga Teacher Training school and spiritual ashram in Ubud Bali & Rishikesh India.",
                  "telephone": "+91-7895350563",
                  "email": "yogagarhi@gmail.com",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar",
                    "addressLocality": "Gianyar",
                    "addressRegion": "Bali",
                    "postalCode": "80515",
                    "addressCountry": "ID"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 8.4649127,
                    "longitude": 115.3258379
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "195",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-7895350563",
                    "contactType": "customer service",
                    "areaServed": "Worldwide",
                    "availableLanguage": ["English", "Hindi", "Indonesian"]
                  },
                  "sameAs": [
                    "https://www.instagram.com/yogagarhi",
                    "https://www.facebook.com/yogagarhi",
                    "https://www.youtube.com/@yogagarhi",
                    "https://in.pinterest.com/yogagarhi"
                  ],
                  "knowsAbout": [
                    "https://en.wikipedia.org/wiki/Hatha_yoga",
                    "https://en.wikipedia.org/wiki/Ashtanga_vinyasa_yoga",
                    "https://en.wikipedia.org/wiki/Pranayama",
                    "https://en.wikipedia.org/wiki/Yoga_Sutras_of_Patanjali",
                    "https://en.wikipedia.org/wiki/Yoga_Alliance"
                  ],
                  "slogan": "Authentic Himalayan Yoga Teacher Training in Bali & Rishikesh"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.yogagarhi.com/#localbusiness-bali",
                  "name": "YogaGarhi Ashram & Yoga School - Bali",
                  "image": getCloudinaryUrl("about-yoga-3"),
                  "url": "https://www.yogagarhi.com/100-hour-yoga-teacher-training-in-bali",
                  "telephone": "+91-7895350563",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar",
                    "addressLocality": "Gianyar",
                    "addressRegion": "Bali",
                    "postalCode": "80515",
                    "addressCountry": "ID"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 8.4649127,
                    "longitude": 115.3258379
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "sameAs": [
                    "https://www.youtube.com/@yogagarhi",
                    "https://in.pinterest.com/yogagarhi",
                    "https://www.instagram.com/yogagarhi",
                    "https://www.facebook.com/yogagarhi"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.yogagarhi.com/#localbusiness-rishikesh",
                  "name": "YogaGarhi Yoga School - Rishikesh",
                  "image": getCloudinaryUrl("about-yoga-3"),
                  "url": "https://www.yogagarhi.com/200-hour-yoga-teacher-training-in-rishikesh",
                  "telephone": "+91-7895350563",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Tapovan, Badrinath Rd",
                    "addressLocality": "Rishikesh",
                    "addressRegion": "Uttarakhand",
                    "postalCode": "249192",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 30.1313,
                    "longitude": 78.3245
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "sameAs": [
                    "https://www.youtube.com/@yogagarhi",
                    "https://in.pinterest.com/yogagarhi",
                    "https://www.instagram.com/yogagarhi",
                    "https://www.facebook.com/yogagarhi"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.yogagarhi.com/#website",
                  "url": "https://www.yogagarhi.com",
                  "name": "YogaGarhi",
                  "description": "Authentic Yoga Teacher Training & Yoga Retreats in Bali & Rishikesh",
                  "publisher": {
                    "@id": "https://www.yogagarhi.com/#organization"
                  },
                  "inLanguage": "en-US"
                }
              ]
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" />
      </head>
      <body className="font-body bg-background text-foreground antialiased scroll-smooth" suppressHydrationWarning>
        <UtmTracker />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9PKFR8P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9PKFR8P');`}
        </Script>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
