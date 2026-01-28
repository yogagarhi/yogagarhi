"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Camera, Sparkles, Compass, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";

// Import images
import beachYogaClass from "@/assets/sunday/beach-yoga-class.png";
import monkeyForestVisit from "@/assets/sunday/monkey-forest-visit.png";
import ubudArtMarket from "@/assets/sunday/ubud-art-market.png";

import makingCoffee from "@/assets/sunday/making-coffee.png";
import woodCarving from "@/assets/sunday/wood-carving.png";
import canangSari from "@/assets/sunday/canang-sari-new.jpg";
import rindikMusic from "@/assets/sunday/rindik-music.png";

import riceFieldTrek from "@/assets/sunday/rice-field-trek.png";
import balineseDance from "@/assets/sunday/balinese-dance.jpg";
import waterPurification from "@/assets/sunday/water-purification.jpg";
import ubudMarketNew from "@/assets/sunday/ubud-market-new.jpg";

const sundaySchedules = [
    {
        id: "sunday-1",
        title: "Sunday 01: Cultural & Coastal Bliss",
        subtitle: "A vibrant journey from art markets to ancient forests, ending with yoga by the sea.",
        description: "Explore the bustling colors of Ubud's Art Market, wander through the sacred Monkey Forest, and find your center with a beach yoga session.",
        images: [monkeyForestVisit, ubudMarketNew, beachYogaClass],
        highlights: [
            "Sacred Monkey Forest Visit",
            "Beach Yoga Session",
            "Ubud Art Market Exploration",
            "Cultural Immersion"
        ],
        location: "Ubud & Sanur Beach",
        theme: "Culture & Nature"
    },
    {
        id: "sunday-2",
        title: "Sunday 02: Balinese Craft & Heritage",
        subtitle: "Immerse yourself in the traditional arts and soulful rhythms of Bali.",
        description: "A day dedicated to Balinese heritage. Learn the delicate art of making Canang Sari offerings, try your hand at wood carving, roast traditional Bali coffee, and soothe your soul with Rindik music.",
        images: [makingCoffee, woodCarving, canangSari, rindikMusic],
        highlights: [
            "Traditional Coffee Making",
            "Wood Carving Workshop",
            "Canang Sari (Offering) Making",
            "Rindik Music Session"
        ],
        location: "Local Artisan Village",
        theme: "Tradition & Craft"
    },
    {
        id: "sunday-3",
        title: "Sunday 03: Spirit & Purification",
        subtitle: "Connect with the sacred waters and ancient expressions of Balinese spirit.",
        description: "Trek through lush rice fields, witness the mesmerizing Balinese Dance, and experience a profound Water Purification ceremony to cleanse your spirit.",
        images: [balineseDance, riceFieldTrek, waterPurification],
        highlights: [
            "Balinese Dance Performance",
            "Rice Field Trekking",
            "Water Purification Ceremony",
            "Spiritual Renewal"
        ],
        location: "Sacred Water Temple & Rice Terraces",
        theme: "Spirituality & Renewal"
    }
];

export default function SundaySchedule() {
    const { setShowEnrollDialog } = useEnrollment();
    const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: string]: number }>({
        "sunday-1": 0,
        "sunday-2": 0,
        "sunday-3": 0
    });

    const handleImageClick = (sundayId: string, imageIndex: number) => {
        setSelectedImageIndex(prev => ({
            ...prev,
            [sundayId]: imageIndex
        }));
    };

    return (
        <div className="bg-[#FBFBF8] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                            <Sun className="w-4 h-4" />
                            <span>Complimentary Sunday Excursions</span>
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Your Sunday <span className="text-primary italic">Soul-Scape</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                            At Yogagarhi, Sundays are reserved for discovery. These curated trips are completely free for our course students, designed to deepen your connection with Bali's magical spirit.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                onClick={() => setShowEnrollDialog(true)}
                                size="lg"
                                className="rounded-full px-8 py-6 text-lg hover-glow"
                            >
                                Begin Your Journey
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
                                                className="object-cover transition-all duration-500 group-hover:scale-105"
                                            />
                                            {/* Glassmorphism Badge */}
                                            <div className="absolute top-8 left-8 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-6 py-4 text-white shadow-xl z-10">
                                                <span className="text-xs uppercase tracking-widest font-bold opacity-80 block mb-1">Theme</span>
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
                                                className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${selectedImageIndex[sunday.id] === i ? 'ring-4 ring-primary shadow-xl' : 'shadow-md'}`}>
                                                <Image
                                                    src={img}
                                                    alt={`View ${i + 1}`}
                                                    fill
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
                                            Excursion {index + 1}
                                        </div>
                                        <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                                            {sunday.title}
                                        </h2>
                                        <p className="text-xl font-medium text-primary/80 italic">
                                            "{sunday.subtitle}"
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
                                            <span className="font-medium">Photos Included</span>
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
                            "Bali is more than a place. It's a mood, an aspiration, a tropical state of mind."
                        </h2>
                        <p className="text-primary-foreground/70 text-lg uppercase tracking-[0.3em] font-medium">
                            Join us and experience the magic for yourself
                        </p>
                        <Button
                            onClick={() => setShowEnrollDialog(true)}
                            variant="outline"
                            className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-10 py-7 text-lg"
                        >
                            Reserve Your Spot <ArrowRight className="ml-2 w-5 h-5" />
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
