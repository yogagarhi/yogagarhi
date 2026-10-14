import React from "react";
import { Clock, BookOpen, UserCheck, Layers } from "lucide-react";
import { HOURS_BREAKDOWN } from "@/constants/course200Data";

export default function CourseHoursStructureSection() {
  // If hours breakdown is null or not confirmed, DO NOT RENDER anything
  if (!HOURS_BREAKDOWN) {
    return null;
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="hours-structure">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Training Hours</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How the 200 Hours Are Structured
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              A comprehensive distribution between direct contact hours, practical alignment, and reflective study in accordance with Yoga Alliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOURS_BREAKDOWN.contactHours !== undefined && (
              <div className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {HOURS_BREAKDOWN.contactHours} Hours
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-primary mt-1">
                  Contact Hours
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Direct instruction with lead teachers in asana, alignment, anatomy, and philosophy.
                </p>
              </div>
            )}

            {HOURS_BREAKDOWN.selfStudyHours !== undefined && (
              <div className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {HOURS_BREAKDOWN.selfStudyHours} Hours
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-primary mt-1">
                  Self-Study & Practicum
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Guided readings, journaling, peer practice, and class sequencing assignments.
                </p>
              </div>
            )}

            <div className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {HOURS_BREAKDOWN.totalHours || 200} Hours
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-primary mt-1">
                Total Certification
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Meets and exceeds Yoga Alliance RYT 200 standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
