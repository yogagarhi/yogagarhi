"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import IntersectionLazyLoad from "@/components/IntersectionLazyLoad";

// Critical: Load immediately
const WelcomeSection = dynamic(() => import("@/components/home/WelcomeSection"));

// All other sections: Load ONLY when scrolling into view
const CoursesSection = dynamic(() => import("@/components/home/CoursesSection"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));
const YTTCSupportSection = dynamic(() => import("@/components/home/YTTCSupportSection"));
const GoogleReviewsSection = dynamic(() => import("@/components/home/GoogleReviewsSection"));
const StudentStoriesSection = dynamic(() => import("@/components/home/StudentStoriesSection"));
const FounderSection = dynamic(() => import("@/components/home/FounderSection"));
const WhyOneStyleSection = dynamic(() => import("@/components/home/WhyOneStyleSection"));
const HomeVideoGallerySection = dynamic(() => import("@/components/home/HomeVideoGallerySection"));
const WebinarSection = dynamic(() => import("@/components/home/WebinarSection"));
const HomeGallerySection = dynamic(() => import("@/components/home/HomeGallerySection"));
const ReadyToBeginSection = dynamic(() => import("@/components/home/ReadyToBeginSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));

const Index = () => {
  return (
    <>
      {/* ⚡ CRITICAL - Loads immediately */}
      <Hero />
      <WelcomeSection />

      {/* 📦 INTERSECTION LAZY LOAD - Only loads when scrolling into view */}
      <IntersectionLazyLoad rootMargin="600px">
        <CoursesSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="500px">
        <WhyChooseUs />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="400px">
        <YTTCSupportSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="400px">
        <GoogleReviewsSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <StudentStoriesSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <FounderSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <WhyOneStyleSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <HomeVideoGallerySection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <WebinarSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <HomeGallerySection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <ReadyToBeginSection />
      </IntersectionLazyLoad>

      <IntersectionLazyLoad rootMargin="300px">
        <FAQSection />
      </IntersectionLazyLoad>
    </>
  );
};

export default Index;
