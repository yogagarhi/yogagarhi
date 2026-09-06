import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw, Calendar, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | YogaGarhi',
  description: 'Understand YogaGarhi transparent refund, booking deposit, and batch transfer policy for Yoga Teacher Training courses and retreats in Bali and Rishikesh.',
  alternates: {
    canonical: '/refund-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicy() {
  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Confidence & Flexibility Guarantee</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Refund & Batch Transfer Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We understand that life circumstances change. At YogaGarhi, we offer transparent, flexible booking terms designed to protect your investment in your spiritual journey.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">100% Transferable</h3>
            <p className="text-xs text-muted-foreground">
              Your deposit is 100% transferable to any future batch or different location (Bali / Rishikesh) within 12 months.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">12-Month Validity</h3>
            <p className="text-xs text-muted-foreground">
              Need to reschedule? You have 1 full year from your original date to attend your teacher training or retreat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">Medical Emergencies</h3>
            <p className="text-xs text-muted-foreground">
              In cases of unforeseen health or travel emergencies with documentation, priority batch rebooking is provided at zero fee.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 max-w-none text-foreground">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">1. Booking Deposit & Seat Reservation</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To guarantee your spot and accommodation in your chosen Yoga Teacher Training Course or Retreat, a deposit of <strong>$250 USD</strong> (or equivalent) is required at the time of enrollment. This allows our ashram to reserve your room, prepare educational materials, and assign dedicated faculty mentors.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">2. Batch Rescheduling & Date Changes</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you are unable to join your scheduled start date, you may reschedule to any upcoming batch within <strong>12 months</strong> at zero penalty, provided you inform our admissions office at least <strong>15 days</strong> prior to the course start date.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">3. Balance Payment Terms</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The remaining course fee balance is payable upon arrival at the ashram on orientation day (or via bank transfer / credit card link prior to arrival). Once a course has commenced and student has checked in, tuition fees and accommodation costs are non-refundable as resources and room allocations have been committed.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">4. Questions & Admissions Support</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For any questions regarding batch rescheduling or custom payment plans, our admissions team is available daily via email at <a href="mailto:yogagarhi@gmail.com" className="text-primary font-semibold hover:underline">yogagarhi@gmail.com</a> or WhatsApp at <a href="https://wa.me/917895350563" className="text-primary font-semibold hover:underline">+91-7895350563</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="xl" asChild>
            <Link href="/contact-us">Contact Admissions Desk</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
