"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { useBooking } from "@/components/BookingDialog";
import { getCloudinaryUrl } from "@/utils/cloudinary";

const Hero = React.memo(function Hero() {
  const { setShowQuickEnquiry } = useQuickEnquiry();
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Optimized with Next.js Image */}
      <Image
        src={getCloudinaryUrl('/hero-yoga-group.jpg')}
        alt="Yoga Teacher Training at YogaGarhi Bali"
        fill
        priority
        fetchPriority="high"
        quality={80}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg md:text-xl font-medium tracking-wide opacity-90">
            Welcome To
          </p>

          {/* ✅ STATIC HEADING (NO LETTER SPLIT) */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Yogagarhi
          </h1>

          <p className="text-xl md:text-3xl font-heading font-medium max-w-4xl mx-auto">
            Yoga Alliance Certified Teacher Training in Bali
          </p>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
            Ancient Himalayan wisdom. Authentic yoga, lived & taught.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-6">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-xs md:text-sm opacity-80">
                Graduated Students
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">
                Multi-Style
              </p>
              <p className="text-xs md:text-sm opacity-80">Authentic Yoga</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold">
                Yoga Alliance
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Certified School
              </p>
            </div>
          </div>

          {/* CTA — NO DIALOG LOGIC HERE */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a href="#enquiry">Quick Enquiry</a>
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <a href="#booking">Book an Appointment</a>
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden flex justify-center pt-4">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg"
              asChild
            >
              <a href="/sunday-schedule">Explore Joyful Sunday ☀️</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
});

export default Hero;
