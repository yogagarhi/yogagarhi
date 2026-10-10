import Image from "next/image";
import { getCloudinaryUrl } from "@/utils/cloudinary";
import HeroCTAButtons from "./HeroCTAButtons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-20">
      {/* Background Image with Priority Preload for LCP */}
      <div className="absolute inset-0 z-0 bg-[#1c130d]">
        <Image
          src={getCloudinaryUrl('/hero-yoga-group.jpg')}
          alt="Authentic Yoga Teacher Training School in Bali & Rishikesh - YogaGarhi"
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.3em] uppercase opacity-90">
            Welcome To
          </p>
          <div className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {"Yogagarh".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block"
              >
                {char}
              </span>
            ))}
            {/* Custom "i" with lotus dot */}
            <span
              className="inline-block relative"
            >
              <span className="relative">
                {/* The "i" stem without dot */}
                <span className="font-heading">ı</span>
                {/* Star symbol as the dot - closer and animated */}
                <span
                  className="absolute -top-[0.02em] left-1/2 -translate-x-1/2 text-[0.4em] animate-pulse"
                >
                  ✦
                </span>
              </span>
            </span>
          </div>
          <h1 className="text-xl md:text-3xl font-heading font-medium max-w-4xl mx-auto">
            Yoga Alliance Certified Yoga Teacher Training in Bali & Rishikesh
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Ancient Himalayan wisdom. Authentic yoga, lived & taught.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-4">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-xs md:text-sm opacity-80">Graduated Students</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">Multi-Style</p>
              <p className="text-xs md:text-sm opacity-80">Authentic Yoga</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">Ayurveda</p>
              <p className="text-xs md:text-sm opacity-80">Strong Basis</p>
            </div>
          </div>

          {/* Second Row - Yoga Alliance & World's First */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">Yoga Alliance</p>
              <p className="text-xs md:text-sm opacity-80">Certified School</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">World's First</p>
              <p className="text-xs md:text-sm opacity-80">Pre-YTTC Support Academy</p>
            </div>
          </div>

          {/* Client Island: Interactive CTA Buttons & WhatsApp Gift */}
          <HeroCTAButtons />

          {/* Special Offer Box */}
          <div className="flex flex-col items-center gap-4 pt-2">

            {/* Special Offer Box */}
            <div className="bg-amber-100/95 dark:bg-amber-900/60 border border-amber-200/60 dark:border-amber-800/60 px-6 py-3 rounded-xl shadow-xl animate-bounce-subtle text-center max-w-lg mx-auto">
              <p className="text-amber-900 dark:text-amber-100 text-sm font-bold leading-relaxed">
                Book your April to July YTT and get a Professional Photoshoot, Sacred Temple Tour, Airport Pick-up, and Cultural Activities - <span className="text-amber-950 dark:text-amber-200 font-extrabold underline underline-offset-2">all included for free.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
