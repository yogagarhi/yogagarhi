"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe, ChevronDown, Check } from "lucide-react";
import { SUPPORTED_LOCALES, LOCALES_CONFIG, SupportedLocale, getAvailableLocalesForPath } from "@/config/i18nConfig";

interface LanguageSwitcherProps {
  className?: string;
  align?: "left" | "right";
}

export default function LanguageSwitcher({
  className = "",
  align = "right",
}: LanguageSwitcherProps) {
  const locale = useLocale() as SupportedLocale;
  const tSwitcher = useTranslations("switcher");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (targetLocale: SupportedLocale) => {
    setIsOpen(false);
    if (targetLocale === locale) return;

    startTransition(() => {
      const search = typeof window !== "undefined" ? window.location.search : "";
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(`${pathname}${search}${hash}`, { locale: targetLocale });
    });
  };

  const currentConfig = LOCALES_CONFIG[locale] || LOCALES_CONFIG.en;

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${tSwitcher("label")}. ${tSwitcher("currentLanguage", { lang: currentConfig.nativeName })}`}
        disabled={isPending}
        className={`flex items-center justify-between gap-1.5 h-8 min-[375px]:h-9 px-2 sm:px-2.5 rounded-lg border border-border/60 bg-background/80 hover:bg-secondary/60 text-foreground text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 w-[68px] min-[375px]:w-[72px] shrink-0 ${
          isOpen ? "ring-2 ring-primary/40 border-primary" : ""
        } ${isPending ? "opacity-70 cursor-wait" : ""}`}
      >
        <span className="flex items-center gap-1 shrink-0">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" aria-hidden="true" />
          <span className="font-semibold tracking-wide uppercase text-[11px] sm:text-xs">
            {locale}
          </span>
        </span>
        <ChevronDown
          className={`w-3 h-3 text-muted-foreground transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
          className={`absolute z-[80] mt-1.5 w-48 rounded-xl bg-card border border-border/70 shadow-2xl py-1.5 focus:outline-none animate-in fade-in zoom-in-95 duration-150 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          <div className="px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/40">
            Languages
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {(() => {
              const availableLocales = getAvailableLocalesForPath(pathname);
              return SUPPORTED_LOCALES.filter((loc) => availableLocales.includes(loc) || loc === locale).map((loc) => {
                const config = LOCALES_CONFIG[loc];
                const isActive = loc === locale;
                return (
                <button
                  key={loc}
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelect(loc)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm transition-colors text-left ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 text-[10px] font-mono text-muted-foreground uppercase">
                      {loc}
                    </span>
                    <span>{config.nativeName}</span>
                  </span>
                  {isActive && (
                    <Check
                      className="w-4 h-4 text-orange-500 shrink-0"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            });
          })()}
        </div>
        </div>
      )}
    </div>
  );
}
