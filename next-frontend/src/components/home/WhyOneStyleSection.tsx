import { Flame, Droplets, Wind, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const PrakritiQuizIsland = dynamic(() => import("@/components/home/PrakritiQuizIsland"));



// Dosha types with their characteristics
const doshaTypes = [
  {
    name: "Vata",
    element: "Air & Ether",
    icon: Wind,
    color: "from-sky-400/20 to-indigo-400/20",
    borderColor: "border-sky-400/30",
    iconColor: "text-sky-500",
    traits: ["Creative", "Energetic", "Quick-minded"],
    yogaStyle: "Grounding, slow-paced practices",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    icon: Flame,
    color: "from-orange-400/20 to-red-400/20",
    borderColor: "border-orange-400/30",
    iconColor: "text-orange-500",
    traits: ["Focused", "Driven", "Passionate"],
    yogaStyle: "Cooling, moderate-intensity flows",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    icon: Droplets,
    color: "from-emerald-400/20 to-teal-400/20",
    borderColor: "border-emerald-400/30",
    iconColor: "text-emerald-500",
    traits: ["Steady", "Nurturing", "Patient"],
    yogaStyle: "Invigorating, dynamic sequences",
  },
];

// Lotus SVG for decoration
const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <path d="M50 55 C45 45, 30 35, 20 40 C30 30, 45 25, 50 15 C55 25, 70 30, 80 40 C70 35, 55 45, 50 55Z" opacity="0.6" />
    <path d="M50 55 C47 48, 38 42, 30 45 C38 38, 47 35, 50 28 C53 35, 62 38, 70 45 C62 42, 53 48, 50 55Z" />
    <ellipse cx="50" cy="58" rx="8" ry="2" opacity="0.3" />
  </svg>
);

// Mandala pattern for background
const MandalaPattern = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <defs>
      <pattern id="mandalaPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.1"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#mandalaPattern)" />
  </svg>
);

export default function WhyOneStyleSection() {
  return (
    <section
      id="prakriti-section"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 2320px' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MandalaPattern className="absolute top-0 left-0 w-[600px] h-[600px] text-primary/10 -translate-x-1/2 -translate-y-1/2 animate-[spin_120s_linear_infinite]" />
        <MandalaPattern className="absolute bottom-0 right-0 w-[500px] h-[500px] text-primary/10 translate-x-1/2 translate-y-1/2 animate-[spin_100s_linear_infinite_reverse]" />

        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-amber-400/30 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-sky-400/20 animate-[float_10s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-emerald-400/25 animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-[8%] w-2 h-2 rounded-full bg-orange-400/20 animate-[float_9s_ease-in-out_infinite_0.5s]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ancient Wisdom, Personalized Practice</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover Your <span className="text-primary">Prakriti</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            In Ayurveda, your unique constitution—your <em className="text-foreground">Prakriti</em>—determines
            which yoga practices will bring you into balance. One size never fits all.
          </p>

          {/* Decorative lotus */}
          <LotusIcon className="w-16 h-8 mx-auto mt-6 text-primary/40" />
        </div>

        {/* Three Dosha Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {doshaTypes.map((dosha, index) => {
            const Icon = dosha.icon;

            return (
              <div
                key={dosha.name}
                className={`
                  relative group cursor-pointer
                  rounded-2xl p-6 
                  bg-gradient-to-br ${dosha.color}
                  border-2 ${dosha.borderColor}
                  backdrop-blur-sm
                  transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-2xl hover:-translate-y-2 shadow-lg
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated background glow */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br ${dosha.color}
                  blur-xl transition-opacity duration-500 -z-10
                `} />

                {/* Icon with animation */}
                <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Icon className={`w-8 h-8 ${dosha.iconColor} transition-all duration-300`} />
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                  {dosha.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {dosha.element}
                </p>

                {/* Traits */}
                <div className="space-y-2 mb-4">
                  {dosha.traits.map((trait, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/80 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${dosha.iconColor.replace('text-', 'bg-')}`} />
                      {trait}
                    </div>
                  ))}
                </div>

                {/* Yoga recommendation */}
                <div className="pt-4 border-t border-foreground/10 transition-all duration-500 opacity-70 group-hover:opacity-100">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal Practice</p>
                  <p className="text-sm font-medium text-foreground">{dosha.yogaStyle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Yogagarhi, we teach <strong className="text-foreground">multi-style yoga</strong> not to confuse,
              but to liberate. By understanding Hatha, Vinyasa, Ashtanga, and Iyengar as complete systems,
              you learn to adapt yoga to the individual—not force the individual into yoga.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our Prakriti-based approach considers your unique constitution. As a future teacher,
              you'll discover which practices serve different natures, making your teaching truly
              responsive to each student.
            </p>
          </div>
        </div>

        {/* CTA Button Island */}
        <PrakritiQuizIsland />
      </div>

      {/* Custom keyframe for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
