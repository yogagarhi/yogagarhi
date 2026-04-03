"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";

const heroImage = getCloudinaryImage("hero-yoga-bali.jpg");

const blogPosts = [
  {
    title: "Benefits of Yoga Teacher Training in Bali",
    excerpt: "Discover why Bali has become the world's premier destination for yoga teacher training and how it can transform your practice.",
    date: "January 5, 2025",
    image: heroImage,
    slug: "benefits-yttc-bali",
    content: "Our Yoga Teacher Training in Bali offers more than just a certificate; it's a transformative journey into the heart of authentic Hatha and Vinyasa yoga. Immersed in the serene greenery of Gianyar, just 15km from the cultural hub of Ubud, you'll find the perfect environment to deepen your practice. Bali's natural energy, combined with our traditional Himalayan lineage, creates a learning space that is both profound and practical. Whether you're a beginner looking for a strong foundation or an experienced practitioner seeking to refine your alignment and teaching methodology, our courses are designed to meet you where you are. Beyond the physically challenging asana sessions, you'll dive deep into yoga philosophy, anatomy, and meditation, ensuring you graduate not just as an instructor, but as a true teacher with a grounded understanding of the yogic lifestyle."
  },
  {
    title: "What to Expect in Your 200 Hour YTTC",
    excerpt: "A comprehensive guide to preparing for your 200-hour yoga teacher training certification journey.",
    date: "December 28, 2024",
    image: heroImage,
    slug: "what-to-expect-200hr",
    content: "The journey to becoming a certified yoga teacher starts with the 200-hour YTTC. At YogaGarhi, we believe in small group classes (limited to 8-10 students) to provide personalized attention. Your typical day starts at 6:00 AM with morning cleansing, followed by pranayama and meditation. You'll then practice Hatha or Ashtanga yoga in its traditional form. After a healthy sattvic breakfast, we dive into the intellectual side of yoga—philosophy and anatomy. The afternoon is dedicated to teaching methodology and alignment, where you'll learn the 'why' behind each adjustment. By the end of the 24-day course, you'll have practiced over 35 functional sequences and gained the confidence to teach anywhere in the world. This is not just a Skill to learn, but a Transformative way of living."
  },
  {
    title: "The Himalayan Roots of Authentic Yoga",
    excerpt: "Exploring the ancient traditions and lineages that form the foundation of traditional yoga practice.",
    date: "December 20, 2024",
    image: heroImage,
    slug: "himalayan-roots-yoga",
    content: "Yoga is a vast ocean of wisdom, and we are dedicated to sharing its authentic Himalayan roots. Our lead teacher, Yogacharya Sachin, brings years of research and lineage-based practice to every session. We teach multi-style yoga, but the core remains rooted in Hatha and traditional Vinyasa. You'll learn the Shiv-Shakti Sadhana, balancing the masculine and feminine energies within, and explore the Prakriti-based learning system that tailors the practice to your unique constitution (Doshas). This traditional approach ensures that you are not just repeating instructions but rather understanding the subtle energy channels (Nadis) and energy centers (Chakras) that govern holistic health. Our mission is to keep the sacred traditions alive while making them accessible for the modern practitioner."
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Article coming soon</h1>
            <p className="text-muted-foreground mb-8">We are currently updating our knowledge base with more authentic yogic wisdom.</p>
            <Button asChild>
              <Link href="/blogs">Return to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Blog Article Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Button variant="ghost" size="sm" className="mb-8 hover:bg-primary/10" asChild>
            <Link href="/blogs" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              10 min read
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4 text-primary" />
              By YogaGarhi Team
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-elevated mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/40">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
            
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-foreground">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-4">
                 <Button asChild variant="cta">
                    <Link href="/contact-us">Start Your Training</Link>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading or CTA */}
      <section className="py-20 bg-background border-t border-border">
         <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-heading text-3xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Experience authentic Himalayan yoga in the heart of Bali. Small groups, sincere teaching, and a life-changing certification journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="default" asChild>
                <Link href="/courses/200-hour-yoga-teacher-training-in-bali">View 200-Hour Course</Link>
              </Button>
               <Button size="xl" variant="secondary" asChild>
                <a href="https://wa.me/+917895350563">Chat on WhatsApp</a>
              </Button>
            </div>
         </div>
      </section>
    </Layout>
  );
}
