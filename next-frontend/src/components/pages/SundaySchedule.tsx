"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Camera, Sparkles, Compass, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import { useLocale, useTranslations } from "next-intl";

import { getCloudinaryImage } from "@/utils/cloudinary";

// Import images
const beachYogaClass = getCloudinaryImage("beach-yoga-class.png");
const monkeyForestVisit = getCloudinaryImage("monkey-forest-visit.png");
const ubudArtMarket = getCloudinaryImage("ubud-art-market.png");

const makingCoffee = getCloudinaryImage("making-coffee.png");
const woodCarving = getCloudinaryImage("wood-carving.png");
const canangSari = getCloudinaryImage("canang-sari-new.jpg");
const rindikMusic = getCloudinaryImage("rindik-music.png");

const riceFieldTrek = getCloudinaryImage("rice-field-trek.png");
const balineseDance = getCloudinaryImage("balinese-dance.jpg");
const waterPurification = getCloudinaryImage("water-purification.jpg");
const ubudMarketNew = getCloudinaryImage("ubud-market-new.jpg");

export default function SundaySchedule() {
    const { setShowEnrollDialog } = useEnrollment();
    const t = useTranslations("sundaySchedule");
    const locale = useLocale();

    const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: string]: number }>({
        "sunday-1": 0,
        "sunday-2": 0,
        "sunday-3": 0
    });

    const sundaySchedules = [
        {
            id: "sunday-1",
            title: t("s1Title"),
            subtitle: t("s1Subtitle"),
            description: t("s1Desc"),
            images: [monkeyForestVisit, ubudMarketNew, beachYogaClass],
            highlights: [
                t("s1H1"),
                t("s1H2"),
                t("s1H3"),
                t("s1H4")
            ],
            location: t("s1Location"),
            theme: t("theme1")
        },
        {
            id: "sunday-2",
            title: t("s2Title"),
            subtitle: t("s2Subtitle"),
            description: t("s2Desc"),
            images: [makingCoffee, woodCarving, canangSari, rindikMusic],
            highlights: [
                t("s2H1"),
                t("s2H2"),
                t("s2H3"),
                t("s2H4")
            ],
            location: t("s2Location"),
            theme: t("theme2")
        },
        {
            id: "sunday-3",
            title: t("s3Title"),
            subtitle: t("s3Subtitle"),
            description: t("s3Desc"),
            images: [balineseDance, riceFieldTrek, waterPurification],
            highlights: [
                t("s3H1"),
                t("s3H2"),
                t("s3H3"),
                t("s3H4")
            ],
            location: t("s3Location"),
            theme: t("theme3")
        }
    ];

    const handleImageClick = (sundayId: string, imageIndex: number) => {
        setSelectedImageIndex(prev => ({
            ...prev,
            [sundayId]: imageIndex
        }));
    };

    return (
        <div className="bg-[#FBFBF8] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-8 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                            <Sun className="w-4 h-4" />
                            <span>{t("badge")}</span>
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            {locale === "en" ? (
                                <>Your Sunday <span className="text-primary italic">Soul-Scape</span></>
                            ) : (
                                t("heroHeading")
                            )}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                            {t("heroSub")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                onClick={() => setShowEnrollDialog(true)}
                                size="lg"
                                className="rounded-full px-8 py-6 text-lg hover-glow"
                            >
                                {t("heroCta")}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />
            </section>

            {/* Main Content */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-32">
                        {sundaySchedules.map((sunday, index) => (
                            <div
                                key={sunday.id}
                                id={sunday.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-32`}
                            >
                                {/* Images Container */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group">
                                        <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl">
                                            <Image
                                                src={sunday.images[selectedImageIndex[sunday.id]]}
                                                alt={sunday.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover transition-all duration-500 group-hover:scale-105"
                                            />
                                            {/* Glassmorphism Badge */}
                                            <div className="absolute top-8 left-8 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-6 py-4 text-white shadow-xl z-10">
                                                <span className="text-xs uppercase tracking-widest font-bold opacity-80 block mb-1">{t("themeLabel")}</span>
                                                <span className="text-lg font-heading font-semibold">{sunday.theme}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Grid View - Show all images (Mobile & Desktop) */}
                                    <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                                        {sunday.images.map((img, i) => (
                                            <div
                                                key={i}
                                                onClick={() => handleImageClick(sunday.id, i)}
                                                className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${selectedImageIndex[sunday.id] === i ? 'ring-4 ring-primary shadow-xl' : 'shadow-md'}`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`View ${i + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 33vw, 150px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-primary font-bold tracking-tighter uppercase text-sm">
                                            <span className="w-12 h-[2px] bg-primary/30"></span>
                                            {t("excursionLabel", { n: index + 1 })}
                                        </div>
                                        <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                                            {sunday.title}
                                        </h2>
                                        <p className="text-xl font-medium text-primary/80 italic">
                                            &ldquo;{sunday.subtitle}&rdquo;
                                        </p>
                                    </div>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {sunday.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                        {sunday.highlights.map((highlight, hIndex) => (
                                            <div key={hIndex} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <Sparkles className="w-4 h-4" />
                                                </div>
                                                <span className="font-medium text-foreground/80">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                                        <div className="flex items-center gap-3 text-muted-foreground bg-secondary/50 px-5 py-3 rounded-full">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <span className="font-medium">{sunday.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground bg-secondary/50 px-5 py-3 rounded-full">
                                            <Camera className="w-5 h-5 text-primary" />
                                            <span className="font-medium">{t("photosIncluded")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Quote Section */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <Compass className="w-16 h-16 mx-auto opacity-50 mb-4" />
                        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                            {t("trustQuote")}
                        </h2>
                        <p className="text-primary-foreground/70 text-lg uppercase tracking-[0.3em] font-medium">
                            {t("trustSub")}
                        </p>
                        <Button
                            onClick={() => setShowEnrollDialog(true)}
                            variant="outline"
                            className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-10 py-7 text-lg"
                        >
                            {t("reserveButton")} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Background Mandala */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    </svg>
                </div>
            </section>

            {/* Ready to Begin Section */}
            <ReadyToBeginSection />
        </div>
    );
}
