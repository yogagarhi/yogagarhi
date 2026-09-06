import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollText, Award, Heart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | YogaGarhi Ashram',
  description: 'Review YogaGarhi terms and conditions, ashram rules, code of conduct, and Yoga Alliance certification graduation guidelines.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditions() {
  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Ashram Guidelines & Student Agreement</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Welcome to YogaGarhi. By enrolling in our courses, retreats, or online programs, you agree to uphold our ashram ethos, code of conduct, and community guidelines.
          </p>
        </div>

        <div className="space-y-8 max-w-none text-foreground">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <ScrollText className="w-6 h-6 text-primary" />
              1. Ashram Code of Conduct (Yama & Niyama)
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              YogaGarhi is a consecrated spiritual learning sanctuary. In reverence to yogic traditions, all students and guests are required to observe:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li><strong>Substance-Free Environment:</strong> Alcohol, recreational drugs, and smoking are strictly prohibited within ashram premises.</li>
              <li><strong>Pure Satvic Diet:</strong> All meals served are 100% vegetarian, Ayurvedic, and freshly prepared. Non-vegetarian food is not permitted in rooms.</li>
              <li><strong>Mindful Respect:</strong> Respectful interaction with fellow sadhakas (students), monastic masters, and local community customs in Bali and Rishikesh.</li>
              <li><strong>Silence Periods (Mauna):</strong> Observance of designated morning meditation silence hours to deepen inward awareness.</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-600" />
              2. Yoga Alliance Certification Requirements
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To graduate and receive your Yoga Alliance RYT (Registered Yoga Teacher) Certificate (100, 200, or 300 Hour), students must satisfy:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>Minimum 90% attendance across practical asana, pranayama, anatomy, and philosophy contact hours.</li>
              <li>Completion of teaching practicum, alignment demonstrations, and final assessment.</li>
              <li>Completion of foundational pre-course study manual readings.</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <Heart className="w-6 h-6 text-emerald-600" />
              3. Health, Wellness & Liability
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Students are advised to consult their medical practitioner prior to undertaking intensive physical yoga training. Please inform our teaching team of any pre-existing medical conditions or injuries so appropriate posture modifications can be provided. Students participate willingly at their own physical pace.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              4. Governing Law & Inquiries
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For any clarification regarding ashram rules or certification criteria, please reach out to our administration team at <a href="mailto:yogagarhi@gmail.com" className="text-primary font-semibold hover:underline">yogagarhi@gmail.com</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="xl" asChild>
            <Link href="/contact-us">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
