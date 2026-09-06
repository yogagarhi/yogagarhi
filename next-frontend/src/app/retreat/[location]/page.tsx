import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ArrowRight, Sparkles, Check, Phone, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RETREAT_LOCATIONS, RETREATS_DATA } from "@/constants/retreats";

interface Props {
  params: Promise<{
    location: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { location: "bali" },
    { location: "rishikesh" },
    { location: "warkala" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = RETREAT_LOCATIONS[location as 'bali' | 'rishikesh' | 'warkala'];

  if (!loc) {
    return {
      title: "Yoga Retreats | YogaGarhi",
      description: "Explore yoga retreats in Bali, Rishikesh, and Warkala.",
    };
  }

  const titles: Record<string, string> = {
    bali: "Yoga Retreat in Bali | 3, 7 & 14 Day Ubud Wellness Trips",
    rishikesh: "Yoga Retreat in Rishikesh | 3, 7 & 14 Day Himalayan Escape",
    warkala: "Yoga Retreat in Warkala | Beach & Ayurveda Holidays Kerala",
  };

  const descriptions: Record<string, string> = {
    bali: "Escape to tranquil Ubud with 3, 7 & 14-day yoga retreats in Bali. Daily Balinese massage, sound baths, multi-style yoga & vegan dining. Check dates & rates!",
    rishikesh: "Experience peaceful yoga retreats in Rishikesh along the sacred Ganges. Daily meditation, Ayurvedic therapy & Sattvic meals. View dates and book your retreat!",
    warkala: "Unwind with oceanfront yoga retreats in Warkala, Kerala. Authentic Ayurvedic healing, beach yoga sessions & sunset meditation. Book your wellness holiday now!",
  };

  const title = titles[loc.key] || `${loc.name} Yoga Retreats | YogaGarhi`;
  const description = descriptions[loc.key] || `Find the best Yoga Retreat in ${loc.fullName} with YogaGarhi.`;
  const canonicalUrl = `https://www.yogagarhi.com/retreat/${loc.key}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "YogaGarhi",
    },
  };
}

export default async function RetreatLocationPage({ params }: Props) {
  const { location } = await params;
  const loc = RETREAT_LOCATIONS[location as 'bali' | 'rishikesh' | 'warkala'];

  if (!loc) {
    notFound();
  }

  const isBali = loc.key === "bali";
  const locationRetreats = Object.values(RETREATS_DATA).filter(
    (r) => r.locationKey === loc.key
  );

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
              Limited Time Special Offer
            </span>
            <span>
              Save up to <strong>$200 USD</strong> on all upcoming Bali retreat bookings!
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white underline underline-offset-2 transition-colors ml-1"
            >
              WhatsApp for Fast Booking →
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
                <Link href="/" className="hover:text-amber-800 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/retreat" className="hover:text-amber-800 transition-colors">Retreats</Link>
              </li>
              <li>/</li>
              <li className="text-stone-900 font-semibold" aria-current="page">{loc.name}</li>
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
            Yoga Retreat in {loc.name}
          </h1>

          <p className="text-base md:text-lg text-stone-700 max-w-3xl leading-relaxed mb-6 font-serif">
            {loc.description} Step into your zen zone amidst tranquil nature and immerse in daily multi-style yoga, restorative Balinese massages, sound healing, and Ahimsa plant-based dining.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold px-5 py-3 rounded-xl text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Inquiry: +91 8279705844
            </a>
          </div>
        </div>
      </header>

      <main className="py-16 bg-white">
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
              Select Your Duration
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 uppercase tracking-tight mt-1">
              {loc.name} Yoga Retreat Packages
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Available year-round with flexible arrival dates. Choose between 3 days, 7 days, or 14 days of rejuvenation.
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
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-lg">
                        {retreat.durationDays} Days / {retreat.durationNights} Nights
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#b40000] text-white text-xs font-bold rounded-lg shadow-sm">
                        Save {retreat.earlyBirdSaving}
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
                      <span className="text-[11px] text-stone-500 uppercase">From</span>
                      <div className="text-2xl font-extrabold text-[#b40000]">
                        {retreat.priceShared} <span className="text-xs font-normal text-stone-500">USD</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-stone-500 uppercase">Private Villa</span>
                      <div className="text-base font-bold text-stone-800">
                        {retreat.pricePrivate} USD
                      </div>
                    </div>
                  </div>

                  <Link href={`/retreat/${loc.key}/${retreat.slug}`} className="block">
                    <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-5 rounded-xl text-sm">
                      View Retreat Details & Schedule →
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
