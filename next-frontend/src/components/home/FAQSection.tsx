import FAQInteractiveGrid from "./FAQInteractiveGrid";

export default function FAQSection() {
  return (
    <section
      id="faq-section"
      className="py-20 bg-background overflow-hidden relative"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1920px' }}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <FAQInteractiveGrid />
      </div>
    </section>
  );
}
