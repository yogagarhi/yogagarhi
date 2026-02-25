"use client";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useYogicEnergy } from "@/components/YogicEnergyDialog";
import { useBooking } from "@/components/BookingDialog";
import { getCloudinaryUrl } from "@/utils/cloudinary";

export default function Hero() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { setShowYogicEnergy } = useYogicEnergy();
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${getCloudinaryUrl('/hero-yoga-group.jpg')})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.3em] uppercase opacity-90 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Welcome To
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {"Yogagarh".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in opacity-0"
                style={{
                  animationDelay: `${0.4 + index * 0.08}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {char}
              </span>
            ))}
            {/* Custom "i" with lotus dot */}
            <span
              className="inline-block animate-fade-in opacity-0 relative"
              style={{
                animationDelay: `${0.4 + 8 * 0.08}s`,
                animationFillMode: 'forwards'
              }}
            >
              <span className="relative">
                {/* The "i" stem without dot */}
                <span className="font-heading">ı</span>
                {/* Star symbol as the dot - closer and animated */}
                <span
                  className="absolute -top-[0.02em] left-1/2 -translate-x-1/2 text-[0.4em] animate-pulse"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite, spin 8s linear infinite'
                  }}
                >
                  ✦
                </span>
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-3xl font-heading font-medium max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            Yoga Alliance Certified Teacher Training in Bali for practitioners seeking depth, structure, and real teaching confidence.
          </p>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
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

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setShowQuickEnquiry(true)}
              >
                Quick Enquiry
              </Button>
              <button
                onClick={() => setShowYogicEnergy(true)}
                className="relative h-14 px-10 text-base font-bold rounded-lg overflow-hidden group/yogic
                  bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
                  text-white shadow-xl shadow-orange-500/40
                  hover:shadow-orange-500/60 hover:scale-105
                  transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  Reveal Your Unique Yogic Energy
                </span>
                {/* Shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover/yogic:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            </div>
          </div>

          {/* Secondary CTA & Offer Box */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="flex justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg"
                onClick={() => window.open("https://wa.me/917895350563?text=Namaste!%20I'd%20like%20to%20claim%20the%20$450%20Bali%20Explorer%20Gift.", "_blank")}
              >
                Claim $450 Bali Explorer Gift
              </Button>
            </div>

            {/* Special Offer Box */}
            <div className="bg-amber-100/95 dark:bg-amber-900/40 border border-amber-200/50 dark:border-amber-800/50 px-6 py-3 rounded-xl shadow-xl animate-bounce-subtle backdrop-blur-md text-center max-w-lg mx-auto">
              <p className="text-amber-900 dark:text-amber-100 text-sm font-bold leading-relaxed">
                Book your April to July YTT and get a Professional Photoshoot, Sacred Temple Tour, Airport Pick-up, and Cultural Activities - <span className="text-amber-600 dark:text-amber-400">all included for free.</span>
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
