import StudentStoriesInteractiveIsland, { VideoTestimonial } from "./StudentStoriesInteractiveIsland";

const videoTestimonials: VideoTestimonial[] = [
  { id: "OGmWr_aC4WA", name: "Fernanda", country: "Australia", quote: "Life-changing experience" },
  { id: "2pLe6NHa5WU", name: "Gana", country: "India", quote: "Found my true calling" },
  { id: "30jjvcqHEwA", name: "Joss", country: "France", quote: "Beyond expectations" },
  { id: "J2LT9xn4RBE", name: "Aarzu", country: "Germany", quote: "Transformed my practice" },
  { id: "ta-5jHBCpKY", name: "Aania", country: "Italy", quote: "Deeply spiritual journey" },
];

export default function StudentStoriesSection() {
  const desktopExtraContent = (
    <>
      {/* Stats Row */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          { number: "500+", label: "Graduates" },
          { number: "45+", label: "Countries" },
          { number: "5.0", label: "Rating" },
        ].map((stat, index) => (
          <div key={index} className="text-center p-4 bg-secondary/30 rounded-xl">
            <p className="font-heading text-2xl font-bold text-primary">{stat.number}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-6 flex items-center justify-center gap-6 p-4 bg-background rounded-xl border border-border">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24">
            <use href="#icon-shield-check" />
          </svg>
          <span className="text-sm font-medium text-foreground">Yoga Alliance Certified</span>
        </div>
        <div className="w-px h-6 bg-border" />
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 24 24">
            <use href="#icon-star" />
          </svg>
          <span className="text-sm font-medium text-foreground">5.0 Google Rating</span>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-8 text-center bg-secondary/30 p-4 rounded-xl border border-secondary">
        <p className="font-medium text-foreground">
          Still wondering if this journey is right for you?
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          👉 Talk to us on WhatsApp or Email — we’ll answer honestly
        </p>
      </div>

      {/* Contact Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a
          href="https://wa.me/917895350563"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[180px] flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <use href="#icon-whatsapp" />
          </svg>
          <span className="font-bold tracking-wide">WhatsApp Us</span>
        </a>

        <a
          href="mailto:yogagarhi@gmail.com"
          className="flex-1 min-w-[180px] flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-gray-50 text-red-600 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="font-bold tracking-wide text-gray-800 group-hover:text-red-600 transition-colors">Email Us</span>
        </a>
      </div>
    </>
  );

  return (
    <section
      id="student-stories"
      className="py-20 bg-background overflow-hidden relative scroll-mt-20"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1230px' }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm">Real Voices</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Voices From Our Yogagarhi Family
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every graduate carries a unique story of transformation.
            Here are some voices from our global yoga family.
          </p>
        </div>

        {/* Interactive Island: Video Player & Thumbnails */}
        <StudentStoriesInteractiveIsland
          videos={videoTestimonials}
          desktopExtraContent={desktopExtraContent}
        />
      </div>
    </section>
  );
}
