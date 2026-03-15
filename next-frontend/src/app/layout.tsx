import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import MainLayout from "@/components/MainLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yogagarhi.com'),
  title: {
    default: "YogaGarhi - Yoga Teacher Training Bali",
    template: "%s | YogaGarhi"
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yogagarhi",
              "url": "https://www.yogagarhi.com/",
              "logo": "https://www.yogagarhi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdngsqdwbb%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fyogagarhi%2Fassets%2Fabout-yoga-3&w=1920&q=75",
              "sameAs": [
                "https://instagram.com/yogagarhi",
                "https://facebook.com/yogagarhi",
                "https://youtube.com/@yogagarhi",
                "https://id.pinterest.com/yogagarhi"
              ]
            })
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Yogagarhi",
              "image": "https://www.yogagarhi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdngsqdwbb%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fyogagarhi%2Fassets%2Fabout-yoga-3&w=1920&q=75",
              "@id": "https://www.yogagarhi.com/#localbusiness",
              "url": "https://www.yogagarhi.com/",
              "telephone": "+91-7895350563",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar, Kabupaten Gianyar, Bali, Indonesia",
                "addressLocality": "Bali",
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
                "https://youtube.com/@yogagarhi",
                "https://in.pinterest.com/yogagarhi",
                "https://instagram.com/yogagarhi",
                "https://facebook.com/yogagarhi"
              ]
            })
          }}
        />

      </head>
      <body className={`${cormorant.variable} ${lato.variable} font-body bg-background text-foreground antialiased scroll-smooth`} suppressHydrationWarning>
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
