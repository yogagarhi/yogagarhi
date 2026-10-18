"use client";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { useQuickEnquiry } from "./QuickEnquiryDialog";
import { useTranslations } from "next-intl";

const EarlyBirdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const tPromo = useTranslations("promo");
  const tCommon = useTranslations("common");

  // Check sessionStorage only in the browser after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('earlyBirdDismissed') === 'true';
      setIsDismissed(dismissed);
    }
  }, []);

  useEffect(() => {
    // If already dismissed, don't show
    if (isDismissed) return;

    // Show popup: on mobile trigger smoothly after mount (since MainLayout already waited for scroll or idle+8s);
    // on desktop keep original 4s delay after mount.
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const delay = isMobile ? 80 : 4000;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('earlyBirdDismissed', 'true');
    }
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed z-40 transition-all duration-500 ease-out
        bottom-3 left-3 right-3 max-w-[380px] mx-auto
        md:bottom-auto md:left-0 md:right-auto md:top-1/2 md:-translate-y-1/2 md:max-w-none md:mx-0 md:origin-left
        ${isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto md:translate-x-0 md:opacity-100'
          : 'translate-y-8 opacity-0 pointer-events-none md:-translate-x-full md:pointer-events-none'
        }`}
    >
      <div className="relative">
        {/* Close Button - 44px touch target on mobile, 28px on desktop */}
        <button
          onClick={handleDismiss}
          className="absolute -right-2 -top-2 md:-right-3 md:-top-3 min-w-[44px] min-h-[44px] w-11 h-11 md:w-7 md:h-7 md:min-w-0 md:min-h-0 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-colors z-20 cursor-pointer"
          aria-label={tCommon("close")}
        >
          <X className="w-5 h-5 md:w-4 md:h-4 text-white" />
        </button>

        {/* Popup Content */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-r-xl md:rounded-l-none shadow-2xl border border-white/20 md:border-0">
          {/* Top Banner - "FOR" */}
          <div className="bg-primary text-primary-foreground text-center py-1 md:py-1.5 px-4 md:px-6 relative">
            <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase">{tPromo("popupFor")}</span>
            {/* Triangle decoration */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] md:border-l-[10px] border-r-[8px] md:border-r-[10px] border-t-[6px] md:border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-b from-teal-500 to-teal-600 px-4 md:px-6 py-2.5 md:py-4 text-center relative">
            {/* Sparkle decorations */}
            <Sparkles className="absolute top-2 left-2 w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-300 animate-pulse" />
            <Sparkles className="absolute top-2 right-2 w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-300 animate-pulse" />

            <h3 className="text-white font-heading text-lg md:text-xl font-bold tracking-tight leading-tight">
              {tPromo("popupTitle")}
            </h3>

            {/* Bird Banner */}
            <div className="relative -mx-4 md:-mx-6 my-1.5 md:my-2">
              <div className="bg-primary py-1.5 md:py-2 px-3 md:px-4 transform -rotate-1 md:-rotate-2">
                <span className="text-primary-foreground font-heading text-sm md:text-lg font-bold">
                  {tPromo("popupBatches")}
                </span>
              </div>
            </div>

            <p className="text-white font-heading text-base md:text-lg font-semibold">
              {tPromo("popupDiscount")}
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-2 mt-1.5 md:mt-2">
              <span className="w-5 md:w-6 h-0.5 bg-white/40" />
              <span className="text-yellow-300 text-sm md:text-lg">✦</span>
              <span className="w-5 md:w-6 h-0.5 bg-white/40" />
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              setShowQuickEnquiry(true);
              setIsVisible(false);
            }}
            className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2.5 md:py-3 px-4 md:px-6 font-bold text-xs md:text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2 group"
          >
            <span>{tPromo("contactUs")}</span>
            <span className="text-base md:text-lg group-hover:translate-x-1 transition-transform">»</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdPopup;
