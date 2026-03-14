import { Metadata } from "next";
import Course300Hour from "@/components/pages/Course300Hour";
import { courseData } from "@/constants/courses";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const course = courseData["300-hour"];
  const title = `${course.title} ${course.subtitle} | YogaGarhi Bali`;
  const description = course.welcomeText.substring(0, 160) + "...";

  return {
    title: title,
    description: description,
    alternates: {
      canonical: "/300-hour-yoga-teacher-training-in-bali",
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-bali",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
  };
}

export default function Page() {
  const course = courseData["300-hour"];
  const pageUrl = "https://www.yogagarhi.com/300-hour-yoga-teacher-training-in-bali";

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${course.title} ${course.subtitle}`,
    "description": course.welcomeText,
    "provider": {
      "@type": "Organization",
      "name": "YogaGarhi",
      "url": "https://www.yogagarhi.com"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "duration": "P28D",
      "location": {
        "@type": "Place",
        "name": "YogaGarhi Ashram",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gianyar",
          "addressRegion": "Bali",
          "addressCountry": "Indonesia"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "price": course.price.replace("$", ""),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": pageUrl
    },
    "educationalCredentialAwarded": "RYT-500 Yoga Alliance Certification",
    "coursePrerequisites": [
      {
        "@type": "Course",
        "name": "RYT-200 Certification"
      }
    ]
  };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.yogagarhi.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "300 Hour Yoga Teacher Training in Bali",
          "item": pageUrl
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Who can join the 300 hour YTTC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This 300 hour yoga teacher training course in Bali is for students who already hold a 200 hour yoga teacher training certificate (from Yoga Garhi or any other recognized school). It is best suited for teachers or serious practitioners who want to grow further in both practice and teaching."
        }
      }, {
        "@type": "Question",
        "name": "How is the 300 hour course different from the 200 hour course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 200 hour course gives you a strong foundation and basic teaching skills. The 300 hour course goes deeper into advanced asanas, pranayama, meditation, philosophy, sequencing, adjustments, and specialized topics. It focuses more on teaching experience, refinement, and personal transformation."
        }
      }, {
        "@type": "Question",
        "name": "What will I learn in the 300 hours yttc in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will study advanced asana variations and biomechanics, deeper pranayama and meditation techniques, detailed yoga philosophy and texts, applied anatomy, intelligent class sequencing for different levels, hands-on adjustments and assists, teaching skills for workshops and retreats, and how to hold space for different kinds of students."
        }
      }, {
        "@type": "Question",
        "name": "Can I join if I have not been teaching after my 200 hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Even if you haven’t been actively teaching, you can still join, as long as you have a 200 hour certificate and some ongoing personal practice. The course will help you build or rebuild confidence and skills as a teacher."
        }
      }, {
        "@type": "Question",
        "name": "Will there be exams or assessments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. There will be practical teaching assessments and simple written or oral evaluations. These are used to check your understanding and skills, and to help you grow. Our teachers support you throughout and give constructive feedback."
        }
      }, {
        "@type": "Question",
        "name": "What certification will I receive after the 300 hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After completing all requirements, you will receive a 300 Hour Yoga Teacher Training certificate from Yoga Garhi. Combined with your 200 hours, this gives you a total of 500 hours of training, showing a higher level of education and experience."
        }
      }]
    };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Course300Hour />
    </>
  );
}
