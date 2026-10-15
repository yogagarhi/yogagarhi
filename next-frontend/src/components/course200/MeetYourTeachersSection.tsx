import React from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { TEACHERS_LIST } from "@/constants/course200Data";

export default function MeetYourTeachersSection() {
  // If teachers list is empty or not yet confirmed, DO NOT RENDER anything to users
  if (!TEACHERS_LIST || TEACHERS_LIST.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="teachers">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Teaching Faculty</span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Your Teachers
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Learn directly from experienced practitioners dedicated to traditional yogic wisdom and personalized mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEACHERS_LIST.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
              >
                {teacher.image && (
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
                    {teacher.role} • {teacher.speciality}
                  </p>
                  {teacher.bio && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed">
                      {teacher.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
