"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface CourseVideoFacadeProps {
  youtubeVideoId?: string;
  title?: string;
}

export default function CourseVideoFacade({
  youtubeVideoId = "U1r2mQRmWXM",
  title = "Yoga Teacher Training in Bali - YogaGarhi Campus Tour"
}: CourseVideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-muted relative w-full border border-primary/10">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="w-full h-full relative block text-left group focus:outline-none"
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
  );
}
