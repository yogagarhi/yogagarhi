"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Award, MapPin, Sparkles } from "lucide-react";
import { getCloudinaryImage } from "@/utils/cloudinary";

const rishikeshSurroundings = getCloudinaryImage("rishikesh-surroundings.png");
const groupPose = getCloudinaryImage("group-pose.png");
const heroBali = getCloudinaryImage("hero-yoga-bali.jpg");

interface ExploreMoreVarkalaCoursesSectionProps {
  currentCourse?: "100-varkala" | "200-varkala" | "300-varkala";
}

export default function ExploreMoreVarkalaCoursesSection({ currentCourse = "200-varkala" }: ExploreMoreVarkalaCoursesSectionProps) {
  const allCourses = [
    {
      id: "100-varkala",
      title: "100 Hour Yoga Teacher Training in Varkala",
      location: "Varkala Cliff, Kerala, India",
      duration: "12 Days (11 Nights)",
      price: "$599",
      certification: "Foundation Immersion",
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
      href: "/100-hour-yoga-teacher-training-in-varkala",
      description: "Gentle 12-day foundation immersion on Kerala's sacred coast. Beach yoga, Ayurveda fundamentals, and small batch guidance."
    },
    {
      id: "200-varkala",
      title: "200 Hour Yoga Teacher Training in Varkala",
      location: "Varkala Cliff, Kerala, India",
      duration: "28 Days (27 Nights)",
      price: "$999",
      certification: "Yoga Alliance RYT 200",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      href: "/200-hour-yoga-teacher-training-in-varkala",
      description: "Flagship 200-Hour Yoga Alliance training. Master multi-style asana, functional anatomy, and authentic Kerala Ayurveda in an 8-10 student batch."
    },
    {
      id: "300-varkala",
      title: "300 Hour Yoga Teacher Training in Varkala",
      location: "Varkala Cliff, Kerala, India",
      duration: "28 Days (27 Nights)",
      price: "$1,099",
      certification: "RYT 500 Pathway",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      href: "/300-hour-yoga-teacher-training-in-varkala",
      description: "Advanced master training for 200-hour certified teachers. Deepen into yoga therapy, clinical Panchakarma, and subtle energy anatomy."
    },
    {
      id: "200-rishikesh",
      title: "200 Hour Yoga Teacher Training in Rishikesh",
      location: "Tapovan, Rishikesh, India",
      duration: "28 Days (27 Nights)",
      price: "$999",
      certification: "Yoga Alliance RYT 200",
      image: groupPose,
      href: "/200-hour-yoga-teacher-training-in-rishikesh",
      description: "Train in the Yoga Capital of the World along the sacred Ganges with Himalayan lineage masters and lifetime re-attendance."
    },
    {
      id: "200-bali",
      title: "200 Hour Yoga Teacher Training in Bali",
      location: "Gianyar, Bali, Indonesia",
      duration: "28 Days (27 Nights)",
      price: "$1,299",
      certification: "Yoga Alliance RYT 200",
      image: heroBali,
      href: "/200-hour-yoga-teacher-training-in-bali",
      description: "Immerse in tropical jungle serenity, Balinese sound healing, sacred water temple ceremonies, and accredited teacher training."
    }
  ];

  // Filter out current course and pick first 3
  const displayCourses = allCourses.filter((c) => c.id !== currentCourse).slice(0, 3);

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="explore-more-courses" style={{ contentVisibility: "auto", containIntrinsicSize: "850px" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Continue Your Growth</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Explore More Yoga Teacher Training Courses
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Discover our full spectrum of Yoga Alliance accredited trainings across Varkala, Rishikesh, and Bali.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold">
                      From {course.price}
                    </div>
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{course.location}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-primary" />
                        {course.certification}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={course.href}
                    className="w-full py-3 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
