import HeroCTAButtons from "./HeroCTAButtons";
import { PROMO_OFFER } from "@/constants/offers";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("home.hero");
  const tCommon = await getTranslations("common");
  const tPromo = await getTranslations("promo");
  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden bg-[#1c130d] md:min-h-[90vh] pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-32 md:pb-20">
        {/* Background Container: Full-bleed smart crop on mobile (zero cut faces), full cover on desktop */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1c130d]">
          {/* Single Responsive Picture & exactly ONE <img> in DOM (LCP element) */}
          <picture className="w-full h-full block relative z-10">
            {/* Mobile smart-cropped responsive sources (WebP first for ultra-fast mobile decode) */}
            <source
              media="(max-width: 768px)"
              type="image/webp"
              srcSet="/images/hero/hero-mobile-crop-360.webp 360w, /images/hero/hero-mobile-crop-420.webp 420w"
              sizes="100vw"
            />
            <source
              media="(max-width: 768px)"
              type="image/avif"
              srcSet="/images/hero/hero-mobile-crop-360.avif 360w, /images/hero/hero-mobile-crop-420.avif 420w"
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
              src="/images/hero/hero-mobile-crop-420.webp"
              alt="Authentic Yoga Teacher Training School in Bali & Rishikesh - YogaGarhi"
              fetchPriority="high"
              decoding="sync"
              width={420}
              height={640}
              className="w-full h-full object-cover object-[47%_68%] md:object-center block"
            />
          </picture>

          {/* Contrast overlay for WCAG AA text readability */}
          <div className="absolute inset-0 z-10 bg-black/45 md:bg-black/40 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase opacity-90">
              {t("welcome")}
            </p>
            <div className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {"Yogagarh".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
              {/* Custom "i" with lotus dot */}
              <span className="inline-block relative">
                <span className="relative">
                  {/* The "i" stem without dot */}
                  <span className="font-heading">ı</span>
                  {/* Star symbol as the dot - closer and animated on desktop only */}
                  <span className="absolute -top-[0.02em] left-1/2 -translate-x-1/2 text-[0.4em] animate-none md:animate-pulse">
                    ✦
                  </span>
                </span>
              </span>
            </div>
            <h1 className="text-lg sm:text-xl md:text-3xl font-heading font-medium max-w-4xl mx-auto leading-snug">
              {t("h1")}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
              {t("tagline")}
            </p>

            {/* Desktop-Only Stats (Inside Hero on Desktop, Shifted Right Below Hero on Mobile) */}
            <div className="hidden md:block space-y-8 pt-4">
              {/* Stats Row 1 */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold">500+</p>
                  <p className="text-xs md:text-sm opacity-80">{t("statStudents")}</p>
                </div>
                <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold">{t("statStyle")}</p>
                  <p className="text-xs md:text-sm opacity-80">{t("statStyleSub")}</p>
                </div>
                <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold">{tCommon("ayurveda")}</p>
                  <p className="text-xs md:text-sm opacity-80">{tCommon("strongBasis")}</p>
                </div>
              </div>

              {/* Stats Row 2 */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold">Yoga Alliance</p>
                  <p className="text-xs md:text-sm opacity-80">{t("statCertSub")}</p>
                </div>
                <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold">{tCommon("worldsFirst")}</p>
                  <p className="text-xs md:text-sm opacity-80">{tCommon("preYttcAcademy")}</p>
                </div>
              </div>
            </div>

            {/* Client Island: Interactive CTA Buttons (2 Buttons) */}
            <HeroCTAButtons />

            {/* Special Offer Box (Inside Hero on Both Mobile & Desktop) */}
            <div className="flex flex-col items-center gap-4 pt-1 md:pt-2">
              <div className="bg-amber-100/95 dark:bg-amber-900/60 border border-amber-200/60 dark:border-amber-800/60 px-4 py-2.5 md:px-6 md:py-3 rounded-xl shadow-xl animate-none md:animate-bounce-subtle text-center max-w-lg mx-auto">
                <p className="text-amber-900 dark:text-amber-100 text-xs md:text-sm font-bold leading-relaxed">
                  {tPromo("heroSpecialOfferPrefix")}{" "}
                  <span className="text-amber-950 dark:text-amber-200 font-extrabold underline underline-offset-2">
                    {tPromo("heroSpecialOfferHighlight")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Mobile Dedicated Trust Stats Block Directly Below Hero */}
      <section className="md:hidden bg-[#1c130d] border-t border-b border-amber-900/30 py-6 px-3 text-center text-primary-foreground">
        <div className="max-w-md mx-auto space-y-5">
          <div className="grid grid-cols-3 gap-2 items-start">
            <div className="text-center">
              <p className="font-heading text-xl min-[380px]:text-2xl font-bold leading-tight whitespace-nowrap">500+</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-80">{t("statStudents")}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-xl min-[380px]:text-2xl font-bold leading-tight whitespace-nowrap">{t("statStyle")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-80">{t("statStyleSub")}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-xl min-[380px]:text-2xl font-bold leading-tight whitespace-nowrap">{tCommon("ayurveda")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-80">{tCommon("strongBasis")}</p>
            </div>
          </div>

          <div className="flex items-start justify-center gap-6 min-[380px]:gap-8">
            <div className="text-center">
              <p className="font-heading text-xl min-[380px]:text-2xl font-bold leading-tight whitespace-nowrap">Yoga Alliance</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-80">{t("statCertSub")}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-xl min-[380px]:text-2xl font-bold leading-tight whitespace-nowrap">{tCommon("worldsFirst")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-80">{tCommon("preYttcAcademy")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
