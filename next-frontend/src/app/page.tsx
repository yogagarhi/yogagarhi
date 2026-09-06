import { Metadata } from "next";
import Index from "@/components/pages/Index";

export const metadata: Metadata = {
  title: {
    absolute: "Yoga Teacher Training in Bali & Rishikesh | YogaGarhi RYT",
  },
  description: "Join Yoga Alliance certified 100, 200 & 300 Hour Yoga Teacher Training in Ubud, Bali & Rishikesh. Authentic Himalayan lineage. Book your transformative journey!",
  keywords: "yoga teacher training Bali, YTTC Ubud, 200 hour yoga certification, yoga alliance certified, yoga retreat Bali, yoga school Indonesia, RYT 200, yoga ashram Bali, meditation training, pranayama course, YogaGarhi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yoga Teacher Training in Bali & Rishikesh | YogaGarhi RYT",
    description: "Join Yoga Alliance certified 100, 200 & 300 Hour Yoga Teacher Training in Ubud, Bali & Rishikesh. Authentic Himalayan lineage. Book your transformative journey!",
    url: "/",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "YogaGarhi - Yoga Teacher Training Bali",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Teacher Training in Bali & Rishikesh | YogaGarhi RYT",
    description: "Join Yoga Alliance certified 100, 200 & 300 Hour Yoga Teacher Training in Ubud, Bali & Rishikesh. Authentic Himalayan lineage.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is YogaGarhi accredited with Yoga Alliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, YogaGarhi is a Registered Yoga School (RYS 200, RYS 300, RYS 500) with Yoga Alliance. Upon successful completion of our courses, you receive an internationally recognized certificate to register as an RYT."
        }
      },
      {
        "@type": "Question",
        "name": "Can beginners join the 200 Hour Yoga Teacher Training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our 200-hour YTTC is designed for beginner to intermediate practitioners. We provide pre-training preparation and teach foundational asana, alignment, and philosophy from the ground up."
        }
      },
      {
        "@type": "Question",
        "name": "Where are YogaGarhi ashrams located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our primary ashrams and training centers are located in Gianyar / Ubud (Bali, Indonesia) and Tapovan / Laxman Jhula (Rishikesh, India)."
        }
      },
      {
        "@type": "Question",
        "name": "What yoga styles are taught during the teacher training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in authentic Multi-Style training including Traditional Classical Hatha, Ashtanga Vinyasa Primary Series, Iyengar-informed Alignment with Props, Pranayama, and Meditation."
        }
      }
    ]
  };

  const homeVideoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Yoga Teacher Training Student Experience & Review at YogaGarhi Bali",
    "description": "Watch graduates share their authentic transformation and training experience at YogaGarhi Ashram in Ubud, Bali.",
    "thumbnailUrl": "https://img.youtube.com/vi/aM3Qx1fHk88/hqdefault.jpg",
    "uploadDate": "2025-01-15",
    "contentUrl": "https://www.youtube.com/watch?v=aM3Qx1fHk88",
    "embedUrl": "https://www.youtube.com/embed/aM3Qx1fHk88"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeVideoSchema) }}
      />
      <Index />
    </>
  );
}
