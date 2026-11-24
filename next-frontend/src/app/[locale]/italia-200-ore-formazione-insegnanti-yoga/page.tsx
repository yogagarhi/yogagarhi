import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Italia200OreFormazioneInsegnantiYoga from "@/components/pages/Italia200OreFormazioneInsegnantiYoga";

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

  const title = "Formazione Insegnanti Yoga in Italia: 200 Ore | Yogagarhi";
  const description =
    "Corso residenziale di 200 ore per insegnanti di yoga in Italia. Pratica di asana, anatomia, filosofia e alloggio. Scopri date, costi e dettagli.";
  const url = "https://www.yogagarhi.com/italia-200-ore-formazione-insegnanti-yoga";

  return {
    metadataBase: new URL("https://www.yogagarhi.com"),
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "formazione per insegnanti di yoga in Italia",
      "corso di yoga da 200 ore",
      "diventare insegnante di yoga",
      "formazione yoga in Italia",
      "formazione per insegnanti di yoga all'estero",
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
      locale: "it_IT",
      siteName: "Yogagarhi",
      images: [
        {
          url: "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/course-200-hour.jpg",
          width: 1024,
          height: 683,
          alt: "Formazione per insegnanti di yoga in Italia da 200 ore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/course-200-hour.jpg",
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

  const pageUrl = "https://www.yogagarhi.com/italia-200-ore-formazione-insegnanti-yoga";

  /* =========================
     1. SCHEMA CORSO (COURSE SCHEMA)
  ========================= */
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formazione per insegnanti di yoga in Italia da 200 ore",
    description:
      "Corso residenziale di 200 ore per insegnanti di yoga in Italia. Pratica di asana, anatomia, filosofia, metodologia didattica e alloggio completo.",
    inLanguage: "it",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://www.yogagarhi.com/#organization",
      name: "Yogagarhi",
      url: "https://www.yogagarhi.com",
    },
    location: {
      "@type": "Place",
      name: "Yogagarhi - [Luogo esatto dello svolgimento]",
      address: {
        "@type": "PostalAddress",
        addressLocality: "[Luogo esatto dello svolgimento]",
        addressRegion: "Italia",
        addressCountry: "Italia",
      },
    },
    offers: {
      "@type": "Offer",
      price: "[Dettagli sul prezzo]",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  /* =========================
     2. DOMANDE FREQUENTI (FAQ SCHEMA)
  ========================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quali documenti o visti sono necessari per partecipare al corso in Italia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I cittadini dell'Unione Europea possono viaggiare liberamente con la carta d'identità valida per l'espatrio o il passaporto. I partecipanti provenienti da paesi terzi devono verificare i requisiti del visto turistico Schengen presso l'ambasciata o il consolato competente prima della partenza.",
        },
      },
      {
        "@type": "Question",
        name: "Che tipo di alimentazione viene servita durante il periodo residenziale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Offriamo tre pasti quotidiani completi a base vegetale, preparati freschi con ingredienti di stagione della cucina tradizionale italiana, come pasta, risotto, verdure fresche, legumi e pane casereccio, ideali per sostenere la pratica energetica quotidiana.",
        },
      },
      {
        "@type": "Question",
        name: "È sicuro viaggiare da soli per partecipare a questo percorso formativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'Italia è una destinazione molto tranquilla e ospitale per chi viaggia individualmente. La nostra struttura garantisce un ambiente protetto, familiare e inclusivo in cui allieve e allievi di ogni provenienza si sentono sempre accolti e al sicuro.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa occorre portare con sé per l'intera durata del corso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consigliamo abbigliamento comodo e traspirante in cotone per la pratica fisica, un capo caldo per le meditazioni del mattino presto, una borraccia personale, un quaderno per gli appunti e calzature adatte a passeggiate nella natura circostante.",
        },
      },
      {
        "@type": "Question",
        name: "È richiesto un livello avanzato di flessibilità fisica o esperienza pregressa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non è necessaria una flessibilità eccezionale. Il programma accoglie praticanti di ogni livello con una dedizione sincera; gli insegnanti guidano ogni persona con adattamenti mirati e rispetto per la struttura anatomica individuale.",
        },
      },
      {
        "@type": "Question",
        name: "Quali sono le condizioni in merito a cancellazione e rimborso della quota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'acconto versato per bloccare il proprio posto può essere trasferito a una data successiva con un preavviso adeguato. Per ogni specifica situazione invitiamo a consultare la nostra informativa completa sui rimborsi o a contattare la segreteria.",
        },
      },
      {
        "@type": "Question",
        name: "In quale lingua si svolgono le lezioni e le spiegazioni teoriche?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'insegnamento è condotto in un italiano chiaro, semplice e coinvolgente, con particolare cura nell'illustrare la terminologia classica dello yoga, l'anatomia applicata e la filosofia di fondo in modo perfettamente comprensibile per tutti.",
        },
      },
      {
        "@type": "Question",
        name: "Come sono organizzati gli alloggi e le camere per il riposo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mettiamo a disposizione camere singole o condivise tra due persone, luminose, silenziose e dotate di servizi privati, riscaldamento, biancheria pulita e ampie finestre con affaccio sul paesaggio italiano.",
        },
      },
      {
        "@type": "Question",
        name: "Sono previsti momenti liberi o giornate di pausa settimanale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Durante il percorso di ventiquattro giorni è prevista una giornata settimanale di pausa per riposare, integrare le nozioni apprese, passeggiare nei borghi vicini o visitare luoghi d'arte e borghi storici del territorio.",
        },
      },
      {
        "@type": "Question",
        name: "Quale supporto riceve l'allievo al termine del percorso formativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dopo la conclusione del corso offriamo un contatto diretto con i maestri per chiarimenti sulla didattica, consigli sull'impostazione delle prime lezioni e una comunità di confronto per accompagnare i primi passi nell'insegnamento.",
        },
      },
    ],
  };

  /* =========================
     3. SCHEMA BRICIOLE DI PANE (BREADCRUMB SCHEMA)
  ========================= */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Pagina principale",
        item: "https://www.yogagarhi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Formazione per insegnanti di yoga in Italia da 200 ore",
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
      <Italia200OreFormazioneInsegnantiYoga />
    </>
  );
}
