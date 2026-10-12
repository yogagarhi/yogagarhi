import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import YTTCSupportSection from "@/components/home/YTTCSupportSection";
import FounderSection from "@/components/home/FounderSection";
import WhyOneStyleSection from "@/components/home/WhyOneStyleSection";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";

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
