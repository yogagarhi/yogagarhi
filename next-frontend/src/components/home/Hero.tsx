import Image from "next/image";
import { getCloudinaryUrl } from "@/utils/cloudinary";
import HeroCTAButtons from "./HeroCTAButtons";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#1c130d] min-h-[90vh] pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
      {/* Background Container: Desktop full cover, Mobile Option B uncropped photo centered + blurred background filler */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1c130d]">
        {/* Mobile blurred background filler (ultra-lightweight inlined data-URI, 0 HTTP overhead, 0 LCP competition) */}
        <div
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center filter blur-2xl scale-125 opacity-70 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAABwBgCdASpAACsAPsFKnEunpCkhsr2+YSAYCWds0FcUlRro1isVXfRcZDYRXhLWupk+KiAYdDXfFwzs1MAA/vI1051+iqyYVM+DwTX7Zz7G0r0DKbIGm6KcHc/nW9wzzxNPkX3Mpd7eDNriR7w23Y8VOpGWNfcUmca1JfuVS5snGrUzvk8/UNT+GvVDORXv2fgAAA==")`
          }}
        />

        {/* Single Responsive Picture & exactly ONE <img> in DOM (LCP element) */}
        <picture className="w-full h-full block relative z-10">
          {/* Mobile responsive sources (AVIF with WebP fallback) */}
          <source
            media="(max-width: 768px)"
            type="image/avif"
            srcSet="/images/hero/hero-yoga-group-412.avif 412w, /images/hero/hero-yoga-group-640.avif 640w, /images/hero/hero-yoga-group-750.avif 750w, /images/hero/hero-yoga-group-828.avif 828w, /images/hero/hero-yoga-group-1024.avif 1024w"
            sizes="100vw"
          />
          <source
            media="(max-width: 768px)"
            type="image/webp"
            srcSet="/images/hero/hero-yoga-group-412.webp 412w, /images/hero/hero-yoga-group-640.webp 640w, /images/hero/hero-yoga-group-750.webp 750w, /images/hero/hero-yoga-group-828.webp 828w, /images/hero/hero-yoga-group-1024.webp 1024w"
            sizes="100vw"
          />
          {/* Desktop responsive sources (AVIF with WebP fallback) */}
          <source
            media="(min-width: 769px)"
            type="image/avif"
            srcSet="/images/hero/hero-yoga-group-1080.avif 1080w, /images/hero/hero-yoga-group-1280.avif 1280w, /images/hero/hero-yoga-group-1920.avif 1920w"
            sizes="100vw"
          />
          <source
            media="(min-width: 769px)"
            type="image/webp"
            srcSet="/images/hero/hero-yoga-group-1080.webp 1080w, /images/hero/hero-yoga-group-1280.webp 1280w, /images/hero/hero-yoga-group-1920.webp 1920w"
            sizes="100vw"
          />
          {/* Single Image Tag in entire DOM */}
          <img
            src="/images/hero/hero-yoga-group-750.webp"
            alt="Authentic Yoga Teacher Training School in Bali & Rishikesh - YogaGarhi"
            fetchPriority="high"
            decoding="sync"
            width={1024}
            height={684}
            className="w-full h-full object-contain md:object-cover object-center block"
          />
        </picture>

        {/* Contrast overlay: darker on mobile for perfect WCAG AA readability, standard 40% on desktop */}
        <div className="absolute inset-0 z-10 bg-black/60 md:bg-black/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">

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
