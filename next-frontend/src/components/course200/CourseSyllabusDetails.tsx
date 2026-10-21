import React from "react";
import { BookOpen, CheckCircle2, ChevronDown } from "lucide-react";
import { courseData } from "@/constants/courses";
import { useTranslations } from "next-intl";

const courseKeyToNamespace: Record<string, string> = {
  "100-hour": "course100",
  "300-hour": "course300",
  "100-hour-rishikesh": "course100Rishikesh",
  "200-hour-rishikesh": "course200Rishikesh",
  "200-hour": "course200",
};

export default function CourseSyllabusDetails({
  courseKey = "200-hour",
  namespace
}: {
  courseKey?: keyof typeof courseData;
  namespace?: string;
}) {
  const targetNamespace = namespace || courseKeyToNamespace[courseKey] || "course200";
  const tCurriculum = useTranslations(`${targetNamespace}.curriculum` as any);
  const fallbackCurriculum = courseData[courseKey]?.curriculum || [];
  let detailedModules: any[] = [];
  try {
    detailedModules = (tCurriculum.raw("detailedModules") as Array<{ title: string; items: string[] }>) || [];
  } catch (e) {
    detailedModules = [];
  }
  const curriculum = (Array.isArray(detailedModules) && detailedModules.length > 0) ? detailedModules : fallbackCurriculum;

  if (curriculum.length === 0) return null;

  return (
    <div className="mt-14 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{tCurriculum("badge")}</span>
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          {tCurriculum("heading")}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          {tCurriculum("sub")}
        </p>
      </div>

      <div className="space-y-3">
        {curriculum.map((module: any, idx: number) => (
          <details
            key={idx}
            className="group bg-card rounded-xl border border-border/70 hover:border-primary/40 open:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 md:p-5 text-foreground font-heading font-semibold text-base md:text-lg select-none list-none [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="group-open:text-primary transition-colors text-left">
                  {module.title}
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-open:bg-primary group-open:text-primary-foreground group-open:rotate-180 transition-all duration-300">
                <ChevronDown className="w-3.5 h-3.5 transition-transform" />
              </div>
            </summary>
            <div className="px-5 pb-5 pt-2 border-t border-border/40 bg-secondary/10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                {module.items?.map((item: string, itemIdx: number) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
