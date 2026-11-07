import HeroCTAButtons from "./HeroCTAButtons";
import { PROMO_OFFER } from "@/constants/offers";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("home.hero");
  const tCommon = await getTranslations("common");
  const tPromo = await getTranslations("promo");

  const stats = [
    { value: t("statStudentsCount"), label: t("statStudents") },
    { value: t("statStyle"), label: t("statStyleSub") },
    { value: tCommon("ayurveda"), label: tCommon("strongBasis") },
    { value: t("statAlliance"), label: t("statCertSub") },
    { value: tCommon("worldsFirst"), label: tCommon("preYttcAcademy") },
  ];

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden bg-[#1c130d] md:min-h-[85vh] lg:min-h-screen pt-12 pb-10 sm:pt-14 sm:pb-12 md:pt-24 md:pb-12 lg:pt-24 lg:pb-12">
        {/* Background Container: Full-bleed smart crop on mobile (zero cut faces), full cover on desktop */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1c130d]">
          {/* Single Responsive Picture & exactly ONE <img> in DOM (LCP element) */}
          <picture className="w-full h-full block relative z-10">
            {/* Mobile smart-cropped responsive sources (AVIF first for smallest payload, WebP fallback) */}
            <source
              media="(max-width: 768px)"
              type="image/avif"
              srcSet="/images/hero/hero-mobile-crop-360.avif 360w, /images/hero/hero-mobile-crop-420.avif 420w"
              sizes="100vw"
            />
            <source
              media="(max-width: 768px)"
              type="image/webp"
              srcSet="/images/hero/hero-mobile-crop-360.webp 360w, /images/hero/hero-mobile-crop-420.webp 420w"
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
              alt={t("h1")}
              fetchPriority="high"
              decoding="sync"
              width={420}
              height={640}
              className="w-full h-full object-cover object-[47%_68%] md:object-center block"
            />
          </picture>

          {/* Contrast overlays: Reduced base tint (faces stay bright & clear) + light top radial for foliage text legibility + lower gradient behind stats & CTA */}
          <div className="absolute inset-0 z-10 bg-black/25 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-3/5 z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,_rgba(0,0,0,0.4)_0%,_transparent_100%)] pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent via-50% to-black/80 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase opacity-90 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
              {t("welcome")}
            </p>
            <div className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
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
            <h1 className="text-[clamp(1.15rem,2.8vw,1.75rem)] md:text-2xl font-heading font-medium max-w-4xl mx-auto leading-snug break-words px-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
              {t("h1")}
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto break-words px-2 opacity-95 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
              {t("tagline")}
            </p>

            {/* Desktop-Only Stats Grid: Equal-width columns, subgrid row alignment (1-line in EN, 2-line auto-grow in ID/long locales), zero stray dividers */}
            <div className="hidden md:block pt-2 md:pt-3 lg:pt-4">
              <div className="grid grid-cols-6 lg:grid-cols-5 lg:grid-rows-[auto_auto] gap-y-2 lg:gap-y-1.5 max-w-7xl mx-auto items-stretch justify-center">
                {stats.map((stat, idx) => {
                  const colClasses =
                    idx < 3
                      ? "col-span-2 lg:col-span-1"
                      : idx === 3
                      ? "col-start-2 col-span-2 lg:col-start-auto lg:col-span-1"
                      : "col-span-2 lg:col-span-1";

                  const borderClasses =
                    idx === 0 || idx === 1
                      ? "border-r border-white/20"
                      : idx === 2
                      ? "border-r-0 lg:border-r lg:border-white/20"
                      : idx === 3
                      ? "border-r border-white/20"
                      : "border-r-0";

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col items-center justify-start lg:grid lg:row-span-2 lg:grid-rows-subgrid px-2 sm:px-3 lg:px-3 text-center ${colClasses} ${borderClasses} h-full`}
                    >
                      <div className="flex flex-col justify-end items-center w-full self-end">
                        <p className="font-heading font-bold text-[clamp(1.4rem,2.5vw,2.5rem)] leading-tight tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] break-words text-balance [text-wrap:balance]">
                          {stat.value}
                        </p>
                      </div>
                      <div className="w-full flex flex-col justify-start items-center self-start mt-1.5 lg:mt-0">
                        <p className="text-xs lg:text-sm font-medium leading-snug text-white/85 tracking-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] break-words text-balance [text-wrap:balance]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Client Island: Interactive CTA Buttons (2 Buttons) */}
            <HeroCTAButtons />

            {/* Special Offer Box (Inside Hero on Both Mobile & Desktop) */}
            <div className="flex flex-col items-center gap-4 pt-0.5 md:pt-1">
              <div className="bg-amber-100/95 dark:bg-amber-900/60 border border-amber-200/60 dark:border-amber-800/60 px-4 py-2 md:px-5 md:py-2.5 rounded-xl shadow-xl animate-none md:animate-bounce-subtle text-center max-w-lg mx-auto">
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
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Mobile Dedicated Trust Stats Block Directly Below Hero */}
      <section className="md:hidden bg-[#1c130d] border-t border-b border-amber-900/30 py-6 px-3 text-center text-primary-foreground">
        <div className="max-w-md mx-auto space-y-4">
          <div className="grid grid-cols-3 gap-2 items-start">
            <div className="text-center">
              <p className="font-heading text-lg min-[380px]:text-xl font-bold leading-tight break-words">{t("statStudentsCount")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-85 leading-tight mt-0.5">{t("statStudents")}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg min-[380px]:text-xl font-bold leading-tight break-words">{t("statStyle")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-85 leading-tight mt-0.5">{t("statStyleSub")}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg min-[380px]:text-xl font-bold leading-tight break-words">{tCommon("ayurveda")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-85 leading-tight mt-0.5">{tCommon("strongBasis")}</p>
            </div>
          </div>

          <div className="flex items-start justify-center gap-6 min-[380px]:gap-8">
            <div className="text-center">
              <p className="font-heading text-lg min-[380px]:text-xl font-bold leading-tight break-words">{t("statAlliance")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-85 leading-tight mt-0.5">{t("statCertSub")}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg min-[380px]:text-xl font-bold leading-tight break-words">{tCommon("worldsFirst")}</p>
              <p className="text-[11px] min-[380px]:text-xs opacity-85 leading-tight mt-0.5">{tCommon("preYttcAcademy")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
