"use client";

import Image from "next/image";
import { getCloudinaryImage } from "@/utils/cloudinary";
import ReadyToBeginActionsIsland from "./ReadyToBeginActionsIsland";
import { useTranslations } from "next-intl";

const readyToBeginBg = getCloudinaryImage("ready-to-begin-bg.png");

const ReadyToBeginSection = () => {
  const t = useTranslations("home.ready");

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 760px" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={readyToBeginBg}
          alt="Yoga students practicing meditation at YogaGarhi Ashram"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-primary-foreground/70 uppercase tracking-widest text-sm mb-4">
          {t("tag")}
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-6">
          {t("title")}
        </h2>
        <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
          {t("desc")}
        </p>

        <ReadyToBeginActionsIsland />
      </div>
    </section>
  );
};

export default ReadyToBeginSection;