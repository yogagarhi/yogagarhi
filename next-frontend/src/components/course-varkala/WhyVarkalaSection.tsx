"use client";
import React from "react";
import Image from "next/image";
import { Waves, Sparkles, MapPin, Compass, Landmark, Sun, HeartHandshake } from "lucide-react";

export default function WhyVarkalaSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="why-varkala" style={{ contentVisibility: "auto", containIntrinsicSize: "950px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Coastal Spiritual Haven</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Why Choose Varkala for Yoga Teacher Training
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              Where soaring red laterite cliffs meet the Arabian Sea and Kerala’s 5,000-year Ayurvedic tradition nurtures profound personal transformation.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Grid Layout: Content + Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Authoritative Text (350-400 words) */}
            <div className="lg:col-span-7 space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg">
              <p>
                Perched majestically along the southwestern Malabar coast, <strong>Varkala is Kerala’s crowning spiritual jewel</strong>. Famous for its dramatic geological formation where towering red laterite cliffs plunge directly into the azure Arabian Sea, Varkala provides a breathtaking natural backdrop for immersive yogic sadhana. Here, the fresh marine breeze is continually enriched by negative ions from crashing surf, naturally clearing mental fog, expanding lung capacity during pranayama, and soothing the autonomic nervous system.
              </p>

              <p>
                At the foot of the cliffs lies sacred <strong>Papanasam Beach</strong>, whose Sanskrit name literally translates to <em>"the cleansing of sins."</em> Revered for over two millennia as a sacred coastal tirtham (pilgrimage site), holy natural mineral water springs bubble directly through the cliffside rocks into the ocean. Taking dawn meditative walks along these sands as golden sunlight reflects off the Arabian Sea grounds your physical practice in pristine natural elements and centuries of spiritual devotion.
              </p>

              <p>
                As part of Kerala—celebrated worldwide as <strong>"God’s Own Country" and the ancestral birthplace of classical Ayurveda</strong>—Varkala integrates genuine holistic wellness into every breath you take. Unlike tourist-congested destinations, Varkala maintains a gentle, bohemian rhythm where peaceful coconut palm groves, fresh tender coconut water, and locally grown medicinal herbs support genuine inner healing and deep bodily detoxification (Panchakarma).
              </p>

              <p>
                Adding to this high-vibrational sanctuary is the <strong>2,000-year-old Janardanaswamy Temple</strong>, an ancient Vaishnavite pilgrimage site perched above sacred freshwater springs. The subtle spiritual energy of this consecrated coastal town, combined with our tranquil open-air cliffside shalas, creates a deeply focused learning sanctuary where you can escape the noise of modern life and absorb authentic yogic wisdom directly into your soul.
              </p>
            </div>

            {/* Right Column: 3 Authentic Photos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80"
                  alt="Varkala red cliffs and Arabian Sea coastline"
                  width={600}
                  height={380}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      Varkala Red Laterite Cliffs
                    </p>
                    <p className="text-white/80 text-xs">Pristine coastal geology overlooking the Arabian Sea</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80"
                    alt="Beach yoga and meditation at Papanasam beach"
                    width={300}
                    height={200}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white font-bold text-xs flex items-center gap-1">
                      <Waves className="w-3.5 h-3.5 text-primary" />
                      Papanasam Beach Yoga
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
                    alt="Ayurvedic herbs and coastal sunset meditation"
                    width={300}
                    height={200}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white font-bold text-xs flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Kerala Ayurveda Heritage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillars Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/60">
            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Waves className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Papanasam Beach</p>
                <p className="text-xs text-muted-foreground">Sacred mineral waters</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Ayurveda Cradle</p>
                <p className="text-xs text-muted-foreground">Authentic herbal medicine</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Sun className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Coastal Sanctuary</p>
                <p className="text-xs text-muted-foreground">Peaceful, uncrowded shalas</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Landmark className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Ancient Temple</p>
                <p className="text-xs text-muted-foreground">2,000-year-old heritage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
