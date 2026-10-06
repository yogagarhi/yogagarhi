import { Metadata } from "next";
import Rishikesh200HourLanding from "@/components/pages/Rishikesh200HourLanding";

export const metadata: Metadata = {
  title: "200 Hour Yoga Teacher Training in Rishikesh | Yoga Alliance RYS 200",
  description:
    "Join Yoga Gadhi's 28-day 200-Hour Yoga Teacher Training in Rishikesh (4–31 Jan 2027). Max 10 students, teaching practice from week 1, 5 traditions, functional biomechanics & 1-year mentorship. Yoga Alliance certified.",
  keywords: [
    "200 hour yoga teacher training in rishikesh",
    "200 hour yoga ttc rishikesh",
    "yoga teacher training rishikesh",
    "yoga alliance certified 200 hour rishikesh",
    "small batch yoga ttc rishikesh",
    "yoga teacher training india",
    "rys 200 rishikesh",
    "yoga gadhi rishikesh"
  ],
  alternates: {
    canonical: "https://www.yogagarhi.com/200-hour-yoga-teacher-training-rishikesh",
  },
  openGraph: {
    title: "200 Hour Yoga Teacher Training in Rishikesh | Yoga Gadhi",
    description:
      "Strictly 10 students per batch. 28 days of authentic immersion in 5 traditions, functional biomechanics, and 1-year post-course mentorship in Rishikesh, India.",
    url: "https://www.yogagarhi.com/200-hour-yoga-teacher-training-rishikesh",
    type: "website",
    images: [
      {
        url: "https://www.yogagarhi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "200 Hour Yoga Teacher Training Rishikesh - Yoga Gadhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "200 Hour Yoga Teacher Training in Rishikesh | Yoga Gadhi",
    description:
      "Yoga Alliance RYS 200 certified 28-day residential immersion in Rishikesh. Max 10 students. Admission by conversation only.",
    images: ["https://www.yogagarhi.com/og-image.jpg"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "200 Hour Yoga Teacher Training in Rishikesh",
        "description":
          "A 28-day Yoga Alliance certified residential 200-hour yoga teacher training in Rishikesh, India. Strictly maximum 10 students per batch. Covers 5 traditions, functional anatomy, biomechanics, and 1-year post-course mentorship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Yoga Gadhi Ashram & Yoga School",
          "url": "https://www.yogagarhi.com"
        },
        "educationalCredentialAwarded": "Yoga Alliance RYT 200 Certification",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "duration": "P28D",
          "startDate": "2027-01-04",
          "endDate": "2027-01-31",
          "location": {
            "@type": "Place",
            "name": "Yoga Gadhi Ashram Rishikesh",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tapovan, Badrinath Rd",
              "addressLocality": "Rishikesh",
              "addressRegion": "Uttarakhand",
              "postalCode": "249192",
              "addressCountry": "IN"
            }
          },
          "offers": [
            {
              "@type": "Offer",
              "category": "Twin Sharing Room",
              "price": "1550",
              "priceCurrency": "USD",
              "availability": "https://schema.org/LimitedAvailability",
              "validFrom": "2026-01-01",
              "url": "https://www.yogagarhi.com/200-hour-yoga-teacher-training-rishikesh"
            },
            {
              "@type": "Offer",
              "category": "Private Room",
              "price": "2000",
              "priceCurrency": "USD",
              "availability": "https://schema.org/LimitedAvailability",
              "validFrom": "2026-01-01",
              "url": "https://www.yogagarhi.com/200-hour-yoga-teacher-training-rishikesh"
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Rishikesh200HourLanding />
    </>
  );
}
