import { Info } from "lucide-react";

interface LegalNoticeBannerProps {
  locale: string;
  disclaimerNotice?: string;
}

export default function LegalNoticeBanner({
  locale,
  disclaimerNotice,
}: LegalNoticeBannerProps) {
  if (locale === "en") {
    return null;
  }

  return (
    <aside
      aria-label="Translation Notice"
      className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-foreground text-sm shadow-sm"
    >
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-900 dark:text-amber-200">
            {disclaimerNotice || "This is a translation for convenience. In case of any discrepancy, the English version shall prevail."}
          </p>
          <p className="text-xs text-muted-foreground italic">
            This is a translation for convenience. In case of any discrepancy, the English version shall prevail.
          </p>
        </div>
      </div>
    </aside>
  );
}
