import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ArrowRight, Sparkles, Check, Phone, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RETREAT_LOCATIONS, RETREATS_DATA } from "@/constants/retreats";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLocalizedLocationName } from "../page";

interface Props {
  params: Promise<{
    locale: string;
    location: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { location: "bali" },
    { location: "rishikesh" },
    { location: "varkala" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, location } = await params;
  const loc = RETREAT_LOCATIONS[location as 'bali' | 'rishikesh' | 'varkala'];

  if (!loc) {
    return {
      title: "Yoga Retreats | YogaGarhi",
      description: "Explore yoga retreats in Bali, Rishikesh, and Varkala.",
    };
  }

  const titles: Record<string, string> = {
    bali: "Yoga Retreats in Bali | Ubud Wellness | YogaGarhi",
    rishikesh: "Yoga Retreats in Rishikesh | Himalayas | YogaGarhi",
    varkala: "Yoga Retreats in Varkala | Kerala Beach | YogaGarhi",
  };

  const descriptions: Record<string, string> = {
    bali: "Escape to Ubud with 3, 7 & 14-day yoga retreats in Bali. Daily Balinese massage, sound baths, yoga & vegan dining. Check dates & rates!",
    rishikesh: "Experience yoga retreats in Rishikesh along the Ganges. Daily meditation, Ayurvedic therapy & Sattvic meals. View dates and book online!",
    varkala: "Oceanfront yoga retreats in Varkala, Kerala. Authentic Ayurvedic healing, beach yoga sessions & sunset meditation. Book your holiday now!",
  };

  const title = titles[loc.key] || `${loc.name} Yoga Retreats | YogaGarhi`;
  const description = descriptions[loc.key] || `Find the best Yoga Retreat in ${loc.fullName} with YogaGarhi.`;

  if (locale === "en") {
    return {
      title: {
        absolute: title,
      },
      description,
      alternates: {
        canonical: `https://www.yogagarhi.com/retreat/${loc.key}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.yogagarhi.com/retreat/${loc.key}`,
        type: "website",
        siteName: "YogaGarhi",
      },
    };
  }

  const localizedCanonical = `https://www.yogagarhi.com/${locale}/retreat/${loc.key}`;

  return applyQualityGate({
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: localizedCanonical,
      languages: getReviewedHreflang(`/retreat/${loc.key}`),
    },
    openGraph: {
      title,
      description,
      url: localizedCanonical,
      type: "website",
      siteName: "YogaGarhi",
    },
  }, locale);
}

export default async function RetreatLocationPage({ params }: Props) {
  const { locale, location } = await params;
  setRequestLocale(locale);

  const loc = RETREAT_LOCATIONS[location as 'bali' | 'rishikesh' | 'varkala'];

  if (!loc) {
    notFound();
  }

  const isEn = locale === "en";
  const t = await getTranslations({ locale, namespace: "retreatLocation" });
  const tHub = await getTranslations({ locale, namespace: "retreatHub" });

  const isBali = loc.key === "bali";
  const locationRetreats = Object.values(RETREATS_DATA).filter(
    (r) => r.locationKey === loc.key
  );

  const displayName = getLocalizedLocationName(loc.key, loc.name, locale);

  const whatsappUrl = `https://wa.me/918279705844?text=${encodeURIComponent(
    `Hello YogaGarhi! I am interested in exploring yoga retreats in ${loc.name}. Please share available dates and seasonal offers.`
  )}`;

  return (
    <Layout>
      {/* Top Banner for Bali (Bali Yoga School Style) */}
      {isBali && (
        <aside aria-label="Limited Time Special Offer" className="bg-[#460e40] text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
          <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
            <span className="bg-amber-400 text-stone-900 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase">
              {isEn ? "Limited Time Special Offer" : t("limitedOfferBadge")}
            </span>
            <span>
              {isEn 
                ? <>Save up to <strong>$200 USD</strong> on all upcoming Bali retreat bookings!</>
                : t("limitedOfferText")
              }
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white underline underline-offset-2 transition-colors ml-1"
            >
              {isEn ? "WhatsApp for Fast Booking →" : t("whatsappFastBooking")}
            </a>
          </div>
        </aside>
      )}

      {/* Hero Header */}
      <header className={`pt-28 pb-16 md:pt-36 md:pb-20 border-b ${
        isBali
          ? "bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0]/70 to-white border-amber-900/10"
          : "bg-gradient-to-b from-secondary/60 to-background border-border"
      }`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-stone-500">
              <li>
                <Link href={isEn ? "/" : `/${locale}`} className="hover:text-amber-800 transition-colors">
                  {isEn ? "Home" : "Home"}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={isEn ? "/retreat" : `/${locale}/retreat`} className="hover:text-amber-800 transition-colors">
                  {isEn ? "Retreats" : t("breadcrumbRetreats")}
                </Link>
              </li>
              <li>/</li>
              <li className="text-stone-900 font-semibold" aria-current="page">
                {displayName}
              </li>
            </ol>
          </nav>

          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 ${
            isBali
              ? "bg-amber-100/80 border border-amber-300/60 text-amber-900"
              : "bg-primary/10 border border-primary/20 text-primary"
          }`}>
            ✦ {loc.heroSubtitle}
          </span>

          <h1 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-4 ${
            isBali ? "text-amber-950" : "text-foreground"
          }`}>
            {isEn ? `Yoga Retreat in ${loc.name}` : t("heroTitle", { loc: displayName })}
          </h1>

          <p className="text-base md:text-lg text-stone-700 max-w-3xl leading-relaxed mb-6 font-serif">
            {isEn ? loc.description : (t("heroSub") || loc.description)}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold px-5 py-3 rounded-xl text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {isEn ? "WhatsApp Inquiry: +91 8279705844" : t("whatsappInquiry")}
            </a>
          </div>
        </div>
      </header>

      <main className="py-16 bg-white">
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
              {isEn ? "Select Your Duration" : t("selectDuration")}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
              {isEn ? `${loc.name} Yoga Retreat Packages` : t("packagesTitle", { loc: displayName })}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              {isEn 
                ? "Available year-round with flexible arrival dates. Choose between 3 days, 7 days, or 14 days of rejuvenation."
                : t("packagesSub")
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locationRetreats.map((retreat) => (
              <div
                key={retreat.slug}
                className="rounded-3xl bg-white border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={retreat.heroImage}
                      alt={retreat.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-lg">
                        {isEn 
                          ? `${retreat.durationDays} Days / ${retreat.durationNights} Nights`
                          : tHub("daysNights", { days: retreat.durationDays, nights: retreat.durationNights })
                        }
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#b40000] text-white text-xs font-bold rounded-lg shadow-sm">
                        {isEn ? `Save ${retreat.earlyBirdSaving}` : tHub("save", { amount: retreat.earlyBirdSaving })}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800">
                      {retreat.badge}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-amber-950 mt-1 mb-2 line-clamp-2">
                      {retreat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-5">
                      {retreat.tagline}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-stone-100">
                      {retreat.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                  <div className="flex items-baseline justify-between mb-4 pt-4">
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase">{isEn ? "From" : tHub("from")}</span>
                      <div className="text-2xl font-extrabold text-[#b40000]">
                        {retreat.priceShared} <span className="text-xs font-normal text-stone-500">USD</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-stone-500 uppercase">{isEn ? "Private Villa" : tHub("privateVilla")}</span>
                      <div className="text-base font-bold text-stone-800">
                        {retreat.pricePrivate} USD
                      </div>
                    </div>
                  </div>

                  <Link href={isEn ? `/retreat/${loc.key}/${retreat.slug}` : `/${locale}/retreat/${loc.key}/${retreat.slug}`} className="block">
                    <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-5 rounded-xl text-sm">
                      {isEn ? "View Retreat Details & Schedule →" : t("viewDetailsSchedule")}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
