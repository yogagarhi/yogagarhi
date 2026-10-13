"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Quote } from "lucide-react";

export interface VideoTestimonial {
  id: string;
  name: string;
  country: string;
  quote: string;
}

interface StudentStoriesInteractiveIslandProps {
  videos: VideoTestimonial[];
}

const VideoPlayer = ({
  video,
  isPlaying,
  onPlay,
  videoKey
}: {
  video: VideoTestimonial;
  isPlaying: boolean;
  onPlay: () => void;
  videoKey: string;
}) => (
  <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-muted">
    <div className="aspect-video">
      {isPlaying ? (
        <iframe
          key={videoKey}
          src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1&enablejsapi=1`}
          title={`${video.name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />

          {/* Play Button */}
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play testimonial video by ${video.name}`}
            className="absolute inset-0 flex items-center justify-center group/play"
          >
            <div className="w-20 h-20 rounded-full bg-primary-foreground/95 flex items-center justify-center shadow-xl transform group-hover/play:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
          </button>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
            <p className="font-heading text-xl font-bold text-primary-foreground">
              {video.name}
            </p>
            <p className="text-primary-foreground/70 text-sm">
              {video.country} • Click to play
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default function StudentStoriesInteractiveIsland({
  videos,
  desktopExtraContent
}: {
  videos: VideoTestimonial[];
  desktopExtraContent?: React.ReactNode;
}) {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoChange = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(false);
  };

  const currentVideo = videos[activeVideo];

  return (
    <>
      {/* Featured Video - Mobile Only (CSS responsive) */}
      <div className="lg:hidden mb-10">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          {/* Quote Decoration */}
          <div className="absolute -top-4 -left-4 z-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          <VideoPlayer
            video={currentVideo}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
            videoKey={`video-mob-${activeVideo}-${isPlaying}`}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column - Thumbnails */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          {/* Vertical Thumbnail Stack */}
          <div className="space-y-3">
            {videos.map((video, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Select testimonial video by ${video.name}`}
                onClick={() => handleVideoChange(index)}
                className={`w-full ${index >= 2 ? 'hidden sm:flex' : 'flex'} items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left group ${activeVideo === index
                  ? 'bg-primary/10 border-l-4 border-primary'
                  : 'hover:bg-secondary/50 border-l-4 border-transparent'
                  }`}
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.name}
                    fill
                    className="object-cover"
                  />
                  {activeVideo !== index && (
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className={`font-medium transition-colors ${activeVideo === index ? 'text-primary' : 'text-foreground'
                    }`}>
                    {video.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{video.country}</p>
                  <p className="text-xs text-muted-foreground/70 italic mt-1 truncate">
                    "{video.quote}"
                  </p>
                </div>

                {/* Active Indicator */}
                {activeVideo === index && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Play className="w-3 h-3 text-primary-foreground ml-0.5" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/testimonials"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors group"
            >
              View All Stories
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Column - Featured Video (Desktop Only - CSS responsive) */}
        <div className="hidden lg:block lg:col-span-7">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            {/* Quote Decoration */}
            <div className="absolute -top-4 -left-4 z-10">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>

            <VideoPlayer
              video={currentVideo}
              isPlaying={isPlaying}
              onPlay={() => setIsPlaying(true)}
              videoKey={`video-desk-${activeVideo}-${isPlaying}`}
            />

            {desktopExtraContent}
          </div>
        </div>
      </div>
    </>
  );
}
