"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function WelcomeVideoIsland({ youtubeVideoId = "U1r2mQRmWXM" }: { youtubeVideoId?: string }) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isManualPlay, setIsManualPlay] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Pre-mounts smoothly 300px before scrolling into viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative order-2 lg:order-1" ref={videoContainerRef}>
      {/* Decorative Frame */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-50" />
      <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
      <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

      <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-primary/10 bg-black">
        {shouldLoadVideo || isManualPlay ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&rel=0`}
            title="Yoga Teacher Training In Bali | Awaken Your Teacher Within"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsManualPlay(true)}
            aria-label="Play Welcome Video"
            className="absolute inset-0 w-full h-full text-left group focus:outline-none"
          >
            <Image
              src={`https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`}
              alt="Yoga Teacher Training In Bali - Welcome Video"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
