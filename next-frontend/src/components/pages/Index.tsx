import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
const YTTCSupportSection = dynamic(() => import("@/components/home/YTTCSupportSection"));
const FounderSection = dynamic(() => import("@/components/home/FounderSection"));
const WhyOneStyleSection = dynamic(() => import("@/components/home/WhyOneStyleSection"));
const ReadyToBeginSection = dynamic(() => import("@/components/home/ReadyToBeginSection"));
const GoogleReviewsSection = dynamic(() => import("@/components/home/GoogleReviewsSection"));
const StudentStoriesSection = dynamic(() => import("@/components/home/StudentStoriesSection"));
const HomeVideoGallerySection = dynamic(() => import("@/components/home/HomeVideoGallerySection"));
const WebinarSection = dynamic(() => import("@/components/home/WebinarSection"));
const HomeGallerySection = dynamic(() => import("@/components/home/HomeGallerySection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));



const Index = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <CoursesSection />
      <WhyChooseUs />
      <YTTCSupportSection />
      <GoogleReviewsSection />
      <StudentStoriesSection />
      <FounderSection />
      <WhyOneStyleSection />
      <HomeVideoGallerySection />
      <WebinarSection />
      <HomeGallerySection />
      <ReadyToBeginSection />
      <FAQSection />
    </>
  );
};

export default Index;
