import { Sparkles } from "lucide-react";
import YTTCSupportInteractiveIsland from "./YTTCSupportInteractiveIsland";
import { getTranslations } from "next-intl/server";

export default async function YTTCSupportSection() {
  const t = await getTranslations("home.support");

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 2220px' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        {/* Floating Sacred Symbols */}
        <svg className="absolute top-32 right-[15%] w-16 h-16 text-primary/10 animate-float" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M32 4 L32 18 M32 46 L32 60 M4 32 L18 32 M46 32 L60 32" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-40 left-[12%] w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 48 48" fill="none">
          <path d="M24 4 L24 44 M4 24 L44 24 M10 10 L38 38 M38 10 L10 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            {t("badge")}
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("desc")}
          </p>
        </div>

        {/* Interactive Tabs, Content & Timeline Island */}
        <YTTCSupportInteractiveIsland />
      </div>
    </section>
  );
}
