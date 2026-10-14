import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { HELPFUL_GUIDES } from "@/constants/course200Data";

export default function HelpfulGuidesSection() {
  if (!HELPFUL_GUIDES || HELPFUL_GUIDES.length === 0) return null;

  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden" id="helpful-guides">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Before You Fly</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Helpful Guides & Preparation Articles
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore our in-depth guides to prepare your mind, body, and travel arrangements for your Bali yoga teacher training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HELPFUL_GUIDES.map((guide, idx) => (
              <Link
                key={idx}
                href={`/blogs/${guide.slug}`}
                className="group bg-card rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
