import Image from "next/image";
import { getCloudinaryImage } from "@/utils/cloudinary";
import WebinarButtonIsland from "./WebinarButtonIsland";
import { getTranslations } from "next-intl/server";

const webinarBackground = getCloudinaryImage("webinar-background.jpg");

export default async function WebinarSection() {
  const t = await getTranslations("home.webinar");

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 370px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={webinarBackground}
          alt="Yoga meditation background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {t("title")}
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          {t("desc")}
        </p>

        {/* Interactive Registration Button & Dialog Island */}
        <WebinarButtonIsland />
      </div>
    </section>
  );
}
