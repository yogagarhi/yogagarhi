"use client";
import React from "react";
import Image from "next/image";
import { Mountain, Sparkles, MapPin, Compass, Landmark, Waves, Sun, ShieldCheck } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";

const rishikeshSurroundings = getCloudinaryImage("rishikesh-surroundings.png");
const gangaCeremony = getCloudinaryImage("ceremony.png");
const himalayanMountain = getCloudinaryImage("mountain-pose.png");

export default function WhyRishikeshSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="why-rishikesh" style={{ contentVisibility: "auto", containIntrinsicSize: "950px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Spiritual Epicenter</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Why Choose Rishikesh for Yoga Teacher Training
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              Immerse in the timeless energy of the world capital of yoga, where five millennia of sacred Vedic wisdom meets the pristine Himalayan foothills.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Grid Layout: Content + Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Authoritative Text (450+ words) */}
            <div className="lg:col-span-7 space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg">
              <p>
                Nestled gracefully where the sacred Himalayan mountains open into the lush northern plains, <strong>Rishikesh is internationally revered as the Yoga Capital of the World</strong>. For over five millennia, legendary Vedic rishis, enlightened sages, and classical yoga masters have undertaken deep spiritual sadhana along these riverbanks. Walking through this sacred valley, you are not merely attending a contemporary training course—you are actively stepping into an unbroken, living stream of ancient yogic consciousness.
              </p>

              <p>
                The spiritual geography of Rishikesh is unmatched anywhere on Earth. As the holy River Ganga descends directly from high glacial peaks, her fast-flowing emerald waters saturate the surrounding atmosphere with high negative ions and pristine Himalayan prana. This unique natural ecosystem exerts a scientifically verified calming effect upon the human central nervous system, naturally quieting mental chatter and allowing students to effortlessly access deeper states of dharana (concentration) and dhyana (meditation).
              </p>

              <p>
                Unlike commercial Western retreat centers, every aspect of life in Rishikesh is tuned to spiritual awakening. At sunset, the valley vibrates with the celestial resonance of Sanskrit chanting, traditional temple bells, and the hypnotic Vedic fire ceremonies of the <strong>Parmarth Niketan and Triveni Ghat Ganga Aarti</strong>. Immersing your daily routine in this sacred environment bridges physical asana practice with profound inner philosophy, transforming personal exercise into a genuine journey of soul realization.
              </p>

              <p>
                Our ashram sanctuary is nestled in <strong>Tapovan</strong>—an elevated, serene enclave whose very name translates to "the forest of penance." Historically the quiet dwelling place of wandering yogis, Tapovan sits comfortably above the busier market streets, surrounded by green Himalayan ridges while remaining just a short, pleasant walk from the sacred river and Lakshman Jhula. Here, away from noise and urban distraction, you experience the peaceful sanctuary essential for serious, life-transforming yogic study.
              </p>

              <p>
                From exploring the ancient subterranean meditation cave of Sage Vashistha along the river's white-sand shores to meditating at the 1,676-meter summit of Kunjapuri Temple as the dawn sun illuminates snow-capped Himalayan summits, training with YogaGarhi in Rishikesh provides an authentic immersion that will forever ground your teaching in genuine spiritual authority.
              </p>
            </div>

            {/* Right Column: 3 Authentic Photos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/80 group">
                <Image
                  src={rishikeshSurroundings}
                  alt="Rishikesh Tapovan ashram serene surroundings overlooking the Himalayan foothills"
                  width={600}
                  height={400}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-4">
                  <p className="text-white text-xs md:text-sm font-semibold flex items-center gap-1.5">
                    <Mountain className="w-4 h-4 text-primary shrink-0" />
                    <span>Himalayan Foothills & Holy Ganga River</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src={gangaCeremony}
                    alt="Evening Ganga Aarti fire ceremony at Parmarth Niketan Rishikesh"
                    width={300}
                    height={220}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-[11px] font-medium leading-tight">
                      Sacred Ganga Aarti
                    </p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md border border-border/80 group">
                  <Image
                    src={himalayanMountain}
                    alt="Outdoor meditation and yoga asana in the serene Tapovan sanctuary"
                    width={300}
                    height={220}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-[11px] font-medium leading-tight">
                      Kunjapuri Sunrise Trek
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
