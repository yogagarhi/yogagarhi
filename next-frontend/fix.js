const fs = require('fs');
const path = 'src/components/pages/YogaAnatomyMastery.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const newContent = `      {/* 📚 CURRICULUM (TWO CARDS) */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 15 Hours Card */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border">
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">15 Hours Functional Yoga Anatomy</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                A foundational journey into understanding the body through the lens of yoga. Perfect for yoga students and teachers who want clarity in movement, alignment, and awareness.
              </p>
              <h4 className="font-bold text-lg mb-4 text-foreground">You will explore:</h4>
              <ul className="space-y-4">
                {[
                  "The language of movement in yoga",
                  "Spine wisdom & postural awareness",
                  "Joint stability vs mobility",
                  "Different types of stretching & how to apply them in yoga classes",
                  "Functional yoga sequencing for balanced practice",
                  "Breath, fascia & body connection",
                  "Functional alignment in asana",
                  "Understanding pain & injury prevention",
                  "The anatomy of forward folds, twists & backbends",
                  "Building awareness through mindful movement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 25 Hours Card */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border">
              <h3 className="text-3xl font-heading font-bold text-amber-500 mb-4">25 Hours Functional Yoga Anatomy</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                A deeper immersion for dedicated practitioners and yoga teachers who want to understand the body not only anatomically — but energetically and therapeutically within the practice of yoga.
              </p>
              <h4 className="font-bold text-lg mb-4 text-foreground">Everything from the 15-hour course, plus:</h4>
              <ul className="space-y-4">
                {[
                  "Bandhas & the energetic locks of the body",
                  "Yoga therapy based functional understanding",
                  "Nervous system regulation through yoga",
                  "Functional sequencing for different body types",
                  "The biomechanics of inversions & arm balances",
                  "Anatomy of pranayama & diaphragmatic breathing",
                  "Fascia lines & energetic movement pathways",
                  "Understanding compression vs limitation in asana",
                  "Yoga for longevity & sustainable practice",
                  "Core intelligence & bandha integration",
                  "Functional anatomy for teaching safely & confidently",
                  "Reading bodies with deeper awareness as a teacher"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16 bg-white/50 p-8 rounded-3xl border border-primary/10">
            <p className="text-2xl md:text-3xl font-heading font-semibold text-primary italic leading-relaxed">
              "This is not memorizing anatomy.<br/>
              This is learning to understand the body through the wisdom of yoga."
            </p>
          </div>
        </div>
      </section>`;

// Replace lines 271 to 371 (0-indexed lines 271-372)
lines.splice(271, 101, newContent);

fs.writeFileSync(path, lines.join('\n'));
console.log('Fixed file.');
