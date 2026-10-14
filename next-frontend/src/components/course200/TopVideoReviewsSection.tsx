import React from "react";
import { Video, Calendar, Star } from "lucide-react";
import CourseVideoFacade from "@/components/common/CourseVideoFacade";
import { Button } from "@/components/ui/button";

interface TopVideoReviewsSectionProps {
  onBookCall: () => void;
}

export default function TopVideoReviewsSection({ onBookCall }: TopVideoReviewsSectionProps) {
  const reviews = [
    {
      id: "OGmWr_aC4WA",
      name: "Fernanda",
      country: "Australia",
      role: "200-Hour YTTC Graduate",
      quote: "Life-changing experience — the authentic Himalayan wisdom gave me real confidence to teach worldwide."
    },
    {
      id: "2pLe6NHa5WU",
      name: "Gana",
      country: "India",
      role: "200-Hour YTTC Graduate",
      quote: "Found my true calling. The small batch size meant the teachers corrected my postures personally every single day."
    }
  ];

  return (
    <section className="py-14 bg-background relative overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <Video className="w-3.5 h-3.5" />
              <span>Real Student Video Stories</span>
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Hear Directly from Our Graduates in Bali
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
              Real reflections from practitioners who embarked on this residential journey at YogaGarhi.
            </p>
          </div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Click-to-Play Video Facade */}
                <div className="relative aspect-video w-full bg-black">
                  <CourseVideoFacade
                    youtubeVideoId={rev.id}
                    title={`${rev.name} - YogaGarhi 200 Hour Graduate Review`}
                  />
                </div>

                {/* Review Text */}
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-foreground">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        {rev.country} • {rev.role}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                      Verified Graduate
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book a Free Video Call Banner */}
          <div className="rounded-2xl bg-secondary/50 border border-primary/20 p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="font-heading text-base md:text-lg font-bold text-foreground">
                Want to speak with a lead teacher first?
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                15-minute 1-on-1 video call to discuss your goals, rooms, and dates.
              </p>
            </div>
            <Button
              size="lg"
              onClick={onBookCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs md:text-sm flex-shrink-0 shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Video Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
