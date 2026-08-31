import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Sparkles, Check, Heart, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RETREAT_LOCATIONS, RETREATS_DATA } from "@/constants/retreats";

export const metadata: Metadata = {
  title: {
    absolute: "Yoga Retreats in Bali, Rishikesh & Warkala | YogaGarhi",
  },
  description: "Rejuvenate your body and soul with YogaGarhi's transformative yoga retreats. Choose from 3, 7, and 14-day wellness holidays in Ubud Bali, Rishikesh, and Warkala.",
  alternates: {
    canonical: "https://www.yogagarhi.com/retreat",
  },
  openGraph: {
    title: "Yoga Retreats in Bali, Rishikesh & Warkala | YogaGarhi",
    description: "Rejuvenate your body and soul with YogaGarhi's transformative yoga retreats. 3, 7, and 14-day wellness holidays in Ubud Bali, Rishikesh, and Warkala.",
    url: "https://www.yogagarhi.com/retreat",
    type: "website",
    siteName: "YogaGarhi",
  },
};

export default function RetreatsHubPage() {
  const locations = Object.values(RETREAT_LOCATIONS);

  return (
    <Layout>
      {/* Hero Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/60 via-background to-background text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            ✦ Sacred Wellness Sanctuaries
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.15] mb-6">
            Transformative Yoga Retreats
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Escape the ordinary and immerse in healing practices, Sattvic nutrition, and spiritual nature across our three handpicked destinations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {locations.map((loc) => (
              <a
                key={loc.key}
                href={`#${loc.key}`}
                className="px-5 py-2 rounded-full border border-border bg-card text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                {loc.name} Packages ↓
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content: Destinations & Packages */}
      <main className="py-12 bg-background space-y-24">
        {locations.map((loc) => {
          const retreats = Object.values(RETREATS_DATA).filter(
            (r) => r.locationKey === loc.key
          );

          return (
            <section key={loc.key} id={loc.key} className="container mx-auto px-4 max-w-6xl scroll-mt-28">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border/60 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary">Destination</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-1">
                    {loc.name} Yoga Retreats
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    {loc.description}
                  </p>
                </div>
                <Button asChild variant="outline" className="rounded-full w-fit">
                  <Link href={`/retreat/${loc.key}`}>
                    Explore {loc.name} Hub
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {retreats.map((retreat) => (
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
                            {retreat.durationDays} Days
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
                        <h3 className="font-heading font-bold text-xl text-foreground mt-1 mb-2">
                          {retreat.title}
                        </h3>
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
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </Layout>
  );
}
