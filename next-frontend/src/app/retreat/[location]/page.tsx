import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ArrowRight, Sparkles, Check } from "lucide-react";
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

  const title = `${loc.name} Yoga Retreats: 3, 7 & 14 Day Wellness Holidays | YogaGarhi`;
  const description = `Explore authentic yoga retreats in ${loc.fullName}. Choose from 3-day weekend resets, 7-day rejuvenating retreats, or 14-day deep healing immersions.`;
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

  const locationRetreats = Object.values(RETREATS_DATA).filter(
    (r) => r.locationKey === loc.key
  );

  return (
    <Layout>
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/60 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/retreat" className="hover:text-primary transition-colors">Retreats</Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold" aria-current="page">{loc.name}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            ✦ {loc.heroSubtitle}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {loc.name} Yoga Retreats
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {loc.description} Choose your ideal journey from 3-day weekend resets to comprehensive 14-day transformational immersions.
          </p>
        </div>
      </header>

      <main className="py-12 bg-background">
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {locationRetreats.map((retreat) => (
              <div
                key={retreat.slug}
                className="rounded-3xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={retreat.heroImage}
                      alt={retreat.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                        {retreat.durationDays} Days / {retreat.durationNights} Nights
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-sm">
                        Save {retreat.earlyBirdSaving}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs uppercase font-bold tracking-wider text-primary">
                      {retreat.badge}
                    </span>
                    <h2 className="font-heading font-bold text-xl text-foreground mt-1 mb-2">
                      {retreat.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {retreat.tagline}
                    </p>

                    <div className="space-y-2 mb-6">
                      {retreat.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-border/40 mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="font-heading font-bold text-xl text-primary">{retreat.priceShared}</p>
                  </div>
                  <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={`/retreat/${loc.key}/${retreat.slug}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
