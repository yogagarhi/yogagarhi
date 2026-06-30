import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Payment() {
  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-bold mb-8 text-foreground">Payment Information</h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Ready to secure your spot at YogaGarhi? We offer several flexible payment options for your convenience.
        </p>
        <div className="bg-secondary p-12 rounded-3xl shadow-soft mb-12">
          <h2 className="text-2xl font-semibold mb-6">How to Complete Your Booking</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            To ensure secure transaction and proper receipt generation, we currently handle payments via direct 
            transfer, credit card payments, or professional payment links tailored to your country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/contact-us">Request Payment Link</Link>
            </Button>
            <Button size="xl" variant="secondary" asChild>
              <a href="https://wa.me/+917895350563">Ask on WhatsApp</a>
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Need a custom payment plan? Our team is happy to discuss options that work for you.
        </p>
      </div>
    </Layout>
  );
}
