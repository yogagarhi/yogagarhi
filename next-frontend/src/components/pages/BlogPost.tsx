"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
    title: "What to Expect in Your 200 Hour YTTC in Bali: A Complete Guide",
    excerpt: "Discover what to expect in a 200 hour YTTC in Bali, from daily classes and teaching practice to accommodation, preparation, and certification.",
    date: "December 28, 2024",
    image: heroImage,
    slug: "what-to-expect-200hr",
    content: `
A 200 hour YTTC in Bali is more than a yoga holiday and more demanding than a few studio classes. It is an immersive course designed to help you understand yoga more deeply, build a consistent practice, and learn the foundations of teaching others.

If you are considering a 200 hour yoga teacher training in Bali, you may be asking practical questions: Will the course be too difficult? Do I need to be flexible? What happens in a typical day? Will I learn to teach, or mostly practice poses? Can I come alone?

The short answer is this: a good 200‑hour training should give you structured learning in asana, breathwork, meditation, anatomy, philosophy, alignment, and teaching methodology. It should also give you enough guidance, practice time, and feedback to understand how to teach safely and confidently.

This guide explains what you can realistically expect, how to prepare, and what to check before choosing your course.

## What Is a 200 Hour Yoga Teacher Training?
A 200‑hour yoga teacher training course is the foundational level of professional yoga education for aspiring teachers and dedicated practitioners. It is often the first step for people who want to register as an RYT 200 with Yoga Alliance after successfully completing a training at a registered school.

However, you do not need to be certain that you want to teach professionally before joining.

Many students take a 200‑hour YTTC in Bali because they want to:
- Build a disciplined and consistent yoga practice
- Understand why yoga postures are taught in certain ways
- Learn how breath, movement, meditation, and philosophy work together
- Improve body awareness and alignment
- Explore yoga beyond fitness‑based classes
- Gain the skills to share yoga with others in the future
- Spend focused time learning in a supportive international community

A strong course should respect both goals: personal growth and teacher preparation.

At YogaGarhi, the 200‑hour course is designed for beginner to intermediate practitioners and runs for **24 days in Ubud**. The programme covers multi‑style yoga, including Hatha, Vinyasa, Ashtanga, and Iyengar‑informed alignment work, alongside philosophy, anatomy, pranayama, meditation, and teaching methodology. [Explore our 200 Hour Yoga Teacher Training in Bali](/200-hour-yoga-teacher-training-in-bali)

## Is a 200 Hour YTTC in Bali Suitable for Beginners?
Yes, many beginner‑friendly trainings welcome students who are new to formal yoga education. But “beginner‑friendly” does not mean effortless.

You do not need to perform advanced inversions, touch your toes, or already know Sanskrit to begin. You do need curiosity, consistency, a willingness to learn, and respect for your body’s limits.

A 200‑hour yoga TTC in Bali can be suitable if you:
- Have some experience attending yoga classes or practising at home
- Are open to early mornings and a structured routine
- Can participate in several hours of movement, study, and self‑reflection each day
- Are willing to practise modifications rather than push through pain
- Want to learn, not simply collect a certificate

The physical side can feel challenging, especially when you practise more than once a day. But yoga teacher training is not a competition. A responsible school should teach variations, safe alignment principles, and appropriate ways to adapt a pose for different bodies.

Before committing, ask the school how it supports complete beginners, students with injuries, and people returning to movement after a break. YogaGarhi offers an optional pre‑training preparation programme intended to help students arrive with more familiarity and confidence before the main course begins. [Learn more about the 200 Hour YTTC in Bali](/200-hour-yoga-teacher-training-in-bali)

## What You Will Learn During Your Training
A 200‑hour course should give you a balanced foundation. You will practise yoga, but you will also learn how to observe, explain, sequence, and teach it.

### Asana Practice and Yoga Styles
Most courses include daily physical practice. Depending on the school, this may include Hatha, Vinyasa, Ashtanga, Yin, or alignment‑focused approaches.

At YogaGarhi, students study Hatha and Vinyasa flow, the Ashtanga Primary Series, and Iyengar‑inspired alignment work with props. The syllabus includes standing poses, seated poses, backbends, forward folds, inversions, Sun Salutations, and practical sequencing methods. [Check out our 200 Hour Bali Curriculum](/200-hour-yoga-teacher-training-in-bali)

The purpose is not simply to achieve difficult poses. You learn how postures are built, how to enter and leave them safely, how to use props, and how to offer accessible options.

For example, instead of only learning Warrior II as a shape, you may explore foot placement, knee tracking, hip position, breath, common misalignments, and ways to cue the pose for a mixed‑level class.

### Pranayama and Meditation
Breathwork and meditation are central parts of traditional yoga study. You can expect guided pranayama sessions, meditation techniques, and time to observe how breath affects focus, energy, and the nervous system.

YogaGarhi’s syllabus includes practices such as Ujjayi, Bhastrika, Kapalabhati, Nadi Shodhana, Bhramari, Sheetali, and Sheetkari, along with meditation, mantra, Trataka, silence practices, and other approaches to concentration.

Some practices may feel unfamiliar at first. That is normal. The aim is not to force a particular experience but to develop attention, steadiness, and a more informed personal practice.

### Yoga Philosophy and Yogic Lifestyle
A 200‑hour training usually introduces the ideas that sit behind yoga practice. This may include the Yoga Sutras of Patanjali, the Eight Limbs of Yoga, the yamas and niyamas, the Bhagavad Gita, and traditional concepts such as chakras, nadis, bandhas, and koshas.

At YogaGarhi, the curriculum references the Yoga Sutras, Hatha Yoga Pradipika, Bhagavad Gita, the Eight Limbs of Yoga, chakras, nadis, Pancha Vayus, Panchakoshas, and Triguna.

This part of the course matters because it helps future teachers understand yoga as more than a physical workout. It also helps practitioners connect their habits, choices, and relationships with their time on the mat.

### Anatomy, Biomechanics, and Safe Alignment
Yoga anatomy teaches you how bodies move and why different people may need different instructions. You will not become a medical professional in 200 hours, but you should develop a more practical understanding of movement, joints, muscles, breath, and safer teaching choices.

Key areas include:
- Planes of movement
- Joint protection for the ankles, knees, hips, shoulders, and spine
- Muscle engagement and mobility
- Basic breathing mechanics
- Common postural habits and compensations
- Safe use of props and modifications
- Contraindications and when to refer a student to a healthcare professional

YogaGarhi integrates applied anatomy and biomechanics, joint protection, the nervous system, breathing mechanisms, and muscle engagement patterns within its 200‑hour syllabus.

A useful training teaches anatomy in a way that directly enhances your teaching. You will leave better equipped to recognise when a student needs an adjustment or modification rather than assuming one cue fits everyone.

### Teaching Methodology and Practice Teaching
This is the part that turns knowledge into actual teaching skill.

You will learn how to:
- Plan and structure a balanced yoga class
- Create logical sequences
- Give clear verbal cues
- Demonstrate effectively without over‑demonstrating
- Observe students in a group setting
- Offer appropriate hands-on and verbal modifications
- Use your voice with clarity and confidence
- Manage time, transitions, and class energy
- Teach classmates and receive constructive feedback

YogaGarhi includes sequencing, class planning, adjustments, voice usage, mental preparation, demonstrations, and working with different levels in its teaching methodology syllabus.

Practice teaching can feel vulnerable at first. Most people are nervous when they teach their first few minutes in front of peers. Supportive feedback helps you quickly move from memorising information to communicating it naturally.

## What Does a Typical Day Look Like?
A residential yoga teacher training in Bali follows a full, structured, yet enriching routine. Days begin early to align with traditional yogic practice, balanced with restful breaks and nutritious meals.

At YogaGarhi, the daily schedule begins at **6:00 AM** and includes pranayama, meditation, morning asana practice, philosophy lectures, nutritious meals, anatomy, alignment clinics, and evening restorative or Iyengar sessions. Sundays are full days off for rest, self‑study, or exploring Bali's breathtaking temples and waterfalls.

### Typical Daily Schedule
| Time | Activity |
| :--- | :--- |
| **06:00 AM** | Wake-up & Morning Cleansing |
| **06:30 AM** | Pranayama & Meditation |
| **07:30 AM** | Hatha & Vinyasa Practice |
| **09:00 AM** | Wholesome Breakfast |
| **10:00 AM** | Yoga Philosophy & Ethics |
| **12:00 PM** | Lunch & Midday Rest |
| **03:00 PM** | Applied Anatomy & Biomechanics |
| **04:30 PM** | Alignment, Adjustments & Teaching Methodology |
| **06:00 PM** | Ashtanga / Iyengar Alignment & Yoga Therapy |
| **07:30 PM** | Sattvic Dinner |
| **09:00 PM** | Self-Study & Lights Out |

This structure is intensive, but deeply rewarding. Repeating practice, study, discussion, and reflection helps you absorb and embody the teachings effortlessly.

## What Is Included in a Residential YTTC?
Every school packages its course differently, so it is vital to read the inclusion list carefully.

YogaGarhi offers both tuition‑only and residential packages. Residential packages include accommodation, three vegetarian/vegan meals daily, herbal tea and drinking water, study manuals, yoga mats and props, airport pickup, selected cultural excursions, and Yoga Alliance certification upon completion. Room options range from private villas to shared rooms. [View full package details](/200-hour-yoga-teacher-training-in-bali)

Before booking any yoga teacher training in Bali, confirm:
- Whether your selected package includes accommodation and daily meals
- Room category and private vs. shared options
- Airport transfer inclusions
- Whether course manuals, certification, and excursion costs are covered
- Cancellation, transfer, and refund terms
- Visa and travel insurance requirements

## What to Expect Emotionally and Socially
A 200‑hour YTTC often brings profound personal transformation and lasting friendships.

You will likely feel excited, inspired, and deeply connected with like-minded students from all over the world. You may also experience moments of physical fatigue or emotional release as you break old patterns. This is completely natural when doing deep inner work.

Many students travel to Bali independently. Shared meals, study groups, partner adjustments, and practice teaching naturally foster a warm, supportive community.

## How to Prepare for Your 200 Hour Yoga TTC in Bali
Preparation is not about mastering advanced poses; it is about cultivating supportive habits before you arrive:

- **Start a Regular Practice:** Practise 3–5 times a week with Sun Salutations, gentle mobility, and breath awareness.
- **Build Comfort with Study:** Familiarise yourself with basic yogic concepts and anatomy terms.
- **Listen to Your Body:** If you have existing injuries, communicate with the teachers in advance.
- **Pack Thoughtfully:** Comfortable yoga wear, reusable water bottle, journal, sunscreen, and natural insect repellent.
- **Arrive with an Open Mind:** Come ready to learn, explore, and grow without self-judgment.

## How to Choose the Right Yoga School in Bali
With many yoga schools in Bali, choosing the right environment is key:
- Look for a comprehensive, Yoga Alliance accredited curriculum.
- Ensure small class sizes (8–12 students) for dedicated teacher attention.
- Check that experienced, lineage-grounded teachers lead the training.
- Look for authentic teaching methodology and hands-on teaching practice.
- Verify clear policies, student reviews, and transparent pricing.

YogaGarhi provides a 24‑day, Yoga Alliance RYT 200 course in Ubud with intimate group sizes of 8–10 students, comprehensive manuals, and a one‑year post-training mentorship.

## Frequently Asked Questions

### Do I need to be flexible to join a 200 hour YTTC?
No. Flexibility is a byproduct of practice, not a prerequisite. You will learn how to adapt poses safely for every body type.

### Can I join if I don't plan to teach professionally?
Yes! Many students join to deepen their own practice, gain self-discipline, and understand the deeper philosophy and anatomy of yoga.

### How intense is the training?
It is an immersive course with full daily schedules. While demanding, it includes dedicated rest periods and free Sundays for relaxation.

### What yoga styles are covered?
YogaGarhi covers multi-style yoga: Traditional Hatha, dynamic Vinyasa Flow, Ashtanga Primary Series, and Iyengar alignment with props, alongside Pranayama, Meditation, and Yoga Therapy.

### Will I receive a Yoga Alliance certification?
Yes. Upon successful completion, you will receive an internationally recognized Yoga Alliance RYT 200 certificate.

## Begin Your Journey
A 200 hour Yoga Teacher Training in Bali is a life-affirming investment in your health, awareness, and spiritual growth. 

Ready to deepen your practice in the serene energy of Bali? [Explore our upcoming 200 Hour Yoga Teacher Training dates and reserve your space.](/200-hour-yoga-teacher-training-in-bali)
`
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
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ node, ...props }) => (
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border/50" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-muted-foreground leading-relaxed mb-6" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground pl-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground pl-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="leading-relaxed" {...props} />
                  ),
                  a: ({ node, href, children, ...props }) => {
                    if (href?.startsWith("/")) {
                      return (
                        <Link href={href} className="text-primary font-semibold hover:underline inline-flex items-center gap-1" {...props}>
                          {children}
                        </Link>
                      );
                    }
                    return (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline" {...props}>
                        {children}
                      </a>
                    );
                  },
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-8 border border-border rounded-2xl shadow-sm">
                      <table className="w-full text-left border-collapse text-sm" {...props} />
                    </div>
                  ),
                  thead: ({ node, ...props }) => (
                    <thead className="bg-muted/60 border-b border-border text-foreground font-semibold" {...props} />
                  ),
                  th: ({ node, ...props }) => (
                    <th className="py-3.5 px-4 font-semibold text-foreground" {...props} />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="py-3.5 px-4 border-b border-border/40 text-muted-foreground" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-foreground" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
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
                    <Link href="/200-hour-yoga-teacher-training-in-bali">Start Your Training</Link>
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
                <Link href="/200-hour-yoga-teacher-training-in-bali">View 200-Hour Course</Link>
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
