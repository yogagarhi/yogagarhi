import { Metadata } from "next";
import YogaAnatomyMasterclass from "@/components/pages/YogaAnatomyMasterclass";

export const metadata: Metadata = {
  title: "Applied Functional Yoga Anatomy & Biomechanics Masterclass | YogaGarhi",
  description: "Live 2-Hour intensive masterclass on Applied Yoga Anatomy, Joint Biomechanics & Injury Prevention by Ex-Army Yoga Therapy Specialist Acharya Sachin Kotiyal. Book your seat for ₹1.",
  keywords: "yoga anatomy masterclass, yoga biomechanics, injury prevention yoga, sachin kotiyal, functional yoga anatomy, yogagarhi",
  alternates: {
    canonical: "/yoga-anatomy-masterclass",
  },
  openGraph: {
    title: "Applied Functional Yoga Anatomy Masterclass | ₹1 Special",
    description: "Master Applied Yoga Anatomy & Biomechanics with Ex-Army Yoga Therapy Specialist Acharya Sachin Kotiyal. Live this Sunday on Zoom.",
    url: "https://www.yogagarhi.com/yoga-anatomy-masterclass",
    type: "website",
  },
};

export default function Page() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Applied Functional Yoga Anatomy & Biomechanics Masterclass",
    "description": "2-Hour intensive live masterclass on joint biomechanics, pelvic mechanics, spinal protection, and hands-on adjustments in asana practice.",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://www.yogagarhi.com/yoga-anatomy-masterclass"
    },
    "image": "https://www.yogagarhi.com/og-image.jpg",
    "offers": {
      "@type": "Offer",
      "price": "1",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.yogagarhi.com/yoga-anatomy-masterclass",
      "validFrom": "2026-01-01"
    },
    "performer": {
      "@type": "Person",
      "name": "Acharya Sachin Kotiyal",
      "jobTitle": "Lead Yoga Master & Ex-Armed Forces Yoga Therapy Specialist",
      "sameAs": "https://www.yogagarhi.com/teachers"
    },
    "organizer": {
      "@type": "EducationalOrganization",
      "name": "YogaGarhi",
      "url": "https://www.yogagarhi.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <YogaAnatomyMasterclass />
    </>
  );
}
