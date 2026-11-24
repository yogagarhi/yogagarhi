import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Bali200GhanteYogaShikshakPrashikshan from "@/components/pages/Bali200GhanteYogaShikshakPrashikshan";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    return {
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = "बाली में २०० घंटे का योग शिक्षक प्रशिक्षण | योगगढ़ी";
  const description =
    "बाली में २०० घंटे का योग शिक्षक प्रशिक्षण। उबुद के शांत वातावरण में आसन, प्राणायाम, ध्यान और शिक्षण सीखें। आवास, सात्विक भोजन व पूर्ण जानकारी पाएं।";
  const url = "https://www.yogagarhi.com/bali-200-ghante-yoga-shikshak-prashikshan";

  return {
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "बाली में योग शिक्षक प्रशिक्षण",
      "२०० घंटे का योग प्रशिक्षण",
      "योग शिक्षक बनने का पाठ्यक्रम",
      "बाली योग प्रशिक्षण",
      "विदेश में योग शिक्षक प्रशिक्षण",
    ],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "hi_IN",
      siteName: "योगगढ़ी",
      images: [
        {
          url: "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/hero-yoga-bali-new.jpg",
          width: 1024,
          height: 683,
          alt: "बाली में २०० घंटे का योग शिक्षक प्रशिक्षण",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/hero-yoga-bali-new.jpg",
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  setRequestLocale(locale);

  const pageUrl = "https://www.yogagarhi.com/bali-200-ghante-yoga-shikshak-prashikshan";

  /* =========================
     १. पाठ्यक्रम संरचित डेटा (COURSE SCHEMA)
  ========================= */
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "बाली में २०० घंटे का योग शिक्षक प्रशिक्षण",
    description:
      "बाली के शांत वातावरण में २०० घंटे का योग शिक्षक प्रशिक्षण। आसन, प्राणायाम, ध्यान और शिक्षण कला सीखें। आवास, सात्विक भोजन और पाठ्यक्रम की पूरी जानकारी पाएं।",
    inLanguage: "hi",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://www.yogagarhi.com/#organization",
      name: "योगगढ़ी",
      url: "https://www.yogagarhi.com",
    },
    location: {
      "@type": "Place",
      name: "योगगढ़ी आश्रम - गियानयार, उबुद, बाली",
      address: {
        "@type": "PostalAddress",
        addressLocality: "गियानयार",
        addressRegion: "बाली",
        addressCountry: "इंडोनेशिया",
      },
    },
    offers: {
      "@type": "Offer",
      price: "[शुल्क का विवरण]",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  /* =========================
     २. अक्सर पूछे जाने वाले प्रश्न (FAQ SCHEMA)
  ========================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "क्या बाली आने के लिए मुझे पहले से यात्रा अनुमति या वीज़ा लेना होगा?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "अधिकांश विदेशी नागरिकों को इंडोनेशिया आने पर हवाई अड्डे पर ही आगमन अनुमति (वीज़ा ऑन अराइवल) मिल जाती है, जो तीस दिनों के लिए मान्य होती है। आप यात्रा से पहले इंडोनेशिया के आधिकारिक सरकारी पोर्टल से इलेक्ट्रॉनिक यात्रा अनुमति भी प्राप्त कर सकते हैं। आपका पासपोर्ट कम से कम छह महीने तक वैध होना चाहिए।",
        },
      },
      {
        "@type": "Question",
        name: "प्रशिक्षण के दौरान कैसा भोजन उपलब्ध कराया जाता है?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "आश्रम में प्रतिदिन तीन बार ताजा, पौष्टिक और शुद्ध शाकाहारी सात्विक भोजन परोसा जाता है। इसमें बाली के ताजे फल, हरी सब्जियां, स्थानीय व्यंजन जैसे नासी गोरेंग, गादो-गादो और पारंपरिक हर्बल पेय जामु शामिल हैं। यह भोजन योगाभ्यास के अनुकूल और ऊर्जा देने वाला होता है।",
        },
      },
      {
        "@type": "Question",
        name: "क्या बाली में अकेले यात्रा करना और रहना सुरक्षित है?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "बाली दुनिया के सबसे सुरक्षित और शांत पर्यटन स्थलों में से एक माना जाता है। यहां के स्थानीय लोग अत्यंत विनम्र, मददगार और धार्मिक स्वभाव के हैं। हमारे आश्रम में चौबीसों घंटे सुरक्षा, सुरक्षित कमरे और पारिवारिक वातावरण रहता है। अकेले आने वाले पुरुष और महिला साधक यहां पूरी तरह सुरक्षित महसूस करते हैं।",
        },
      },
      {
        "@type": "Question",
        name: "प्रशिक्षण में शामिल होने के लिए मुझे अपने साथ क्या सामान लाना चाहिए?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "हल्के और आरामदायक सूती कपड़े लाएं जो योगाभ्यास के लिए उपयुक्त हों। मंदिर दर्शन के लिए शालीन वस्त्र, व्यक्तिगत पानी की बोतल, आवश्यक दवाएं, धूप से बचाव के लिए चश्मा व टोपी लाएं। योग चटाई (मैट) आश्रम में उपलब्ध कराई जाती है, परंतु आप चाहें तो अपनी पसंदीदा चटाई ला सकते हैं।",
        },
      },
      {
        "@type": "Question",
        name: "क्या इस पाठ्यक्रम के लिए उच्च शारीरिक लचीलापन या पूर्व अनुभव आवश्यक है?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "नहीं, इसके लिए बहुत अधिक लचीलापन होना जरूरी नहीं है। यह पाठ्यक्रम आरंभिक और मध्यम स्तर के सभी साधकों के लिए उपयुक्त है। हमारे शिक्षक प्रत्येक विद्यार्थी के शरीर की बनावट और क्षमता के अनुसार आसनों में आवश्यक संशोधन और सहायता प्रदान करते हैं। केवल सीखने की लगन आवश्यक है।",
        },
      },
      {
        "@type": "Question",
        name: "शुल्क वापसी और रद्दीकरण के नियम क्या हैं?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "सीट सुरक्षित करने के लिए जमा की गई अग्रिम राशि आगामी सत्रों के लिए स्थानांतरित की जा सकती है यदि आप उचित समय पूर्व सूचित करते हैं। विस्तृत नियमों के लिए हमारी शुल्क वापसी नीति देखें या हमारी टीम से संपर्क करें।",
        },
      },
      {
        "@type": "Question",
        name: "कक्षाओं में शिक्षण का माध्यम क्या होगा?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "कक्षाएं सरल, सहज और सुगम भाषा में संचालित की जाती हैं। योग के मूल सिद्धांतों, आसनों के नामों और शारीरिक क्रियाओं को बहुत स्पष्ट रूप से समझाया जाता है ताकि प्रत्येक विद्यार्थी हर विषय को सरलता से समझ सके।",
        },
      },
      {
        "@type": "Question",
        name: "रहने के लिए कमरे किस प्रकार के होते हैं?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "आश्रम में स्वच्छ, हवादार और शांत कमरे उपलब्ध हैं। आप अपनी पसंद के अनुसार निजी कमरा (सिंगल रूम) या साझा कमरा (ट्विन शेयरिंग) चुन सकते हैं। सभी कमरों में आरामदायक बिस्तर, निजी स्नानघर, गर्म पानी और स्वच्छ वातावरण की व्यवस्था है।",
        },
      },
      {
        "@type": "Question",
        name: "क्या सप्ताह में विश्राम या भ्रमण का समय मिलता है?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "हां, सप्ताह में एक दिन कक्षाएं नहीं होती हैं। उस दिन विद्यार्थी विश्राम कर सकते हैं, स्वाध्याय कर सकते हैं या बाली के प्रसिद्ध स्थलों जैसे तेगालालांग धान के खेत, चंपुहान रिज, तानाह लोत मंदिर या उबुद के पारंपरिक बाजारों का भ्रमण कर सकते हैं।",
        },
      },
      {
        "@type": "Question",
        name: "पाठ्यक्रम पूरा होने के बाद क्या सहायता मिलती है?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "सफलतापूर्वक पाठ्यक्रम पूरा करने के बाद विद्यार्थियों को हमारे शिक्षक समूह से निरंतर मार्गदर्शन मिलता है। यदि आप अपनी कक्षाएं शुरू करते हैं या शिक्षण में कोई कठिनाई आती है, तो आप हमेशा हमारे आचार्यों से परामर्श ले सकते हैं।",
        },
      },
    ],
  };

  /* =========================
     ३. ब्रेडक्रम्ब संरचित डेटा (BREADCRUMB SCHEMA)
  ========================= */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "मुख्य पृष्ठ",
        item: "https://www.yogagarhi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "बाली में २०० घंटे का योग शिक्षक प्रशिक्षण",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Bali200GhanteYogaShikshakPrashikshan />
    </>
  );
}
