import { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, RefreshCw, Lock, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Secure Payment & Booking Information | YogaGarhi",
  description: "Learn about secure payment options, $250 booking deposit, and payment methods for YogaGarhi yoga teacher training courses and retreats in Bali and Rishikesh.",
  alternates: {
    canonical: "/payment",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Payment() {
  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Safe & Verified Transactions</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Secure Booking & Payment Information
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Reserve your spot in upcoming 2026 Yoga Teacher Training batches with complete peace of mind.
          </p>
        </div>

        {/* 3 Step Payment Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mx-auto">
              1
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Reserve Seat ($250)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Pay an advance deposit of $250 USD to lock your early-bird pricing and reserve your private or shared room.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-lg mx-auto">
              2
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Instant Confirmation</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Receive your official digital admission letter, pre-YTTC study manual, and private airport pickup itinerary.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold text-lg mx-auto">
              3
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Pay Balance on Arrival</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The remaining balance is comfortably settled upon your check-in at the ashram on orientation day.
            </p>
          </div>
        </div>

        {/* Payment Methods Card */}
        <div className="bg-secondary/60 p-8 sm:p-12 rounded-3xl border border-border shadow-soft mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
              <Lock className="w-3.5 h-3.5" />
              256-Bit SSL Encrypted & Invoice Verified
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Accepted Global Payment Methods
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We provide secure international checkout tailored to your home currency with zero hidden fees.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-bold text-foreground">Credit / Debit Cards</p>
                <p className="text-[10px] text-muted-foreground">Visa, MasterCard, Amex</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <RefreshCw className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-foreground">Wise Transfer</p>
                <p className="text-[10px] text-muted-foreground">Low Exchange Rates</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <ShieldCheck className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-foreground">Direct Bank Wire</p>
                <p className="text-[10px] text-muted-foreground">USD / EUR / AUD / GBP</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Sparkles className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-foreground">PayPal & UPI</p>
                <p className="text-[10px] text-muted-foreground">Instant Verification</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="xl" asChild className="font-bold">
                <Link href="/contact-us">Request Secure Payment Link</Link>
              </Button>
              <Button size="xl" variant="secondary" asChild className="font-bold border border-border">
                <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
                  💬 Pay via WhatsApp Support
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Security & Flexibility Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground text-sm block mb-1">100% Deposit Transfer Guarantee</strong>
              <p>Need to reschedule your course? Your deposit remains valid for 12 months for any future batch in Bali or Rishikesh.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground text-sm block mb-1">Official Tax Invoice & Receipt</strong>
              <p>Every payment receives an immediate PDF confirmation receipt and tax invoice for professional education records.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
