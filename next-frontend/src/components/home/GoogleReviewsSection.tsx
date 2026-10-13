import Link from "next/link";
import { googleReviews } from "@/constants/googleReviews";
import { GoogleReviewCard } from "./GoogleReviewCard";

export default function GoogleReviewsSection() {
  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 730px' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-md mb-6">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <use href="#icon-google" />
            </svg>
            <span className="text-xl font-bold text-foreground">5.0</span>
            <svg className="h-4 w-[92px]" viewBox="0 0 116 20">
              <use href="#icon-5-stars" />
            </svg>
            <span className="text-muted-foreground text-xs border-l border-border pl-2">100+ Reviews</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Students Say on Google
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Real experiences from our yoga teacher training graduates
          </p>
        </div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {googleReviews.map((review, index) => (
            <GoogleReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Reviews Static List - Mobile (Zero Carousel JS, fast & lightweight) */}
        <div className="md:hidden space-y-4 max-w-md mx-auto mb-6">
          {googleReviews.slice(0, 3).map((review, index) => (
            <GoogleReviewCard key={index} review={review} />
          ))}
          <div className="text-center pt-2">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 bg-card border-2 border-primary/40 text-primary px-6 py-2.5 rounded-full text-xs font-bold shadow-sm hover:bg-primary/5 transition-colors"
            >
              <span>Read All Student Stories & Reviews</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Yoga+Teacher+Training+in+Bali+-+Yogagarhi/@-8.4645426,115.3278308,18z/data=!4m6!3m5!1s0x2dd219e70aa3e43d:0x281930517f104591!8m2!3d-8.4649127!4d115.3258379!16s%2Fg%2F11xywjhmnz?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <use href="#icon-google" />
            </svg>
            <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              View all reviews on Google
            </span>
            <span className="text-blue-500 group-hover:translate-x-1 transition-transform text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
