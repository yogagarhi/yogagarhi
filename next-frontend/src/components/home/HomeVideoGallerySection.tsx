"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const videoIds = ["ipnGYnma1mI", "dIuGniJZpFs", "6JllDeF3WzY", "0-uWiqJgw7Y"];

export default function HomeVideoGallerySection() {
    const t = useTranslations("home.videoGallery");
    const videoTitles = [t("v1Title"), t("v2Title"), t("v3Title"), t("v4Title")];
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    return (
        <section
            className="py-20 bg-background overflow-hidden relative"
            style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 3010px' }}
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        {t("badge")}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        {t("desc")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {videoIds.map((id, idx) => {
                        const isPlaying = activeVideoId === id;
                        const title = videoTitles[idx] || "Ashram Life";

                        return (
                            <div
                                key={id}
                                className={`group relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16] bg-black border border-white/10 ${
                                    idx > 0 ? "hidden sm:block" : "block"
                                }`}
                            >
                                {isPlaying ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&controls=1&loop=1&playlist=${id}`}
                                        title={title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setActiveVideoId(id)}
                                        aria-label={title}
                                        className="w-full h-full text-left relative block focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <Image
                                            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                                            alt={title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                            loading="lazy"
                                        />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
                                                <Play className="w-6 h-6 fill-white translate-x-0.5" />
                                            </div>
                                        </div>

                                        {/* Overlay text at bottom */}
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none">
                                            <div className="flex items-center gap-2 text-white/90 mb-1">
                                                <Play className="w-3 h-3 fill-current" />
                                                <span className="text-xs font-medium uppercase tracking-wider">{t("shorts")}</span>
                                            </div>
                                            <h3 className="text-white font-heading font-medium text-lg leading-tight mb-1">
                                                {title}
                                            </h3>
                                        </div>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile-Only CTA to Watch All Videos in Gallery */}
                <div className="mt-8 text-center sm:hidden">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center justify-center gap-2 bg-[#2D7A70] text-white px-7 py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#23635b] transition-colors"
                    >
                        <span>{t("watchAll")}</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
