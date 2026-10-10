"use client";

import React, { useState, useEffect, useRef } from "react";

function SvgSacredPattern() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
      <svg
        className="w-full h-full max-w-[500px] max-h-[500px] opacity-35 dark:opacity-20 animate-pulse duration-[4000ms]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="sacredGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#c9956c" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#sacredGlow)" />
        {/* Concentric Sacred Rings */}
        <circle cx="200" cy="200" r="160" stroke="#d4a574" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="130" stroke="#c9956c" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="95" stroke="#d4a574" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke="#c9956c" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="25" stroke="#d4a574" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="4" fill="#d4a574" />
        {/* Sacred Geometry Lotus Lines */}
        <g stroke="#d4a574" strokeWidth="1" opacity="0.6">
          <path d="M 200,105 C 220,150 220,250 200,295 C 180,250 180,150 200,105 Z" />
          <path d="M 105,200 C 150,220 250,220 295,200 C 250,180 150,180 105,200 Z" />
          <path d="M 133,133 C 170,140 240,210 267,267 C 240,260 170,190 133,133 Z" />
          <path d="M 267,133 C 260,170 190,240 133,267 C 140,240 210,170 267,133 Z" />
        </g>
        {/* Sacred Yantra Triangles */}
        <polygon points="200,110 278,245 122,245" stroke="#c9956c" strokeWidth="1" opacity="0.4" />
        <polygon points="200,290 122,155 278,155" stroke="#c9956c" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function SacredGeometryLazy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [Component3D, setComponent3D] = useState<React.ComponentType<{ isActive?: boolean }> | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [is3DReady, setIs3DReady] = useState(false);

  useEffect(() => {
    // 1. Check if device is mobile (<= 768px) or prefers reduced motion
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      return; // Keep SVG fallback permanently on mobile/reduced-motion (never download Three.js)
    }

    // 2. Set up IntersectionObserver on desktop only
    const currentElem = containerRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Lazy load Three.js component strictly on desktop when in view
          import("./SacredGeometryBackground").then((mod) => {
            setComponent3D(() => mod.default);
            setIs3DReady(true);
          }).catch((err) => {
            console.warn("SacredGeometry 3D load error:", err);
          });
        } else {
          setIsVisible(false); // Pause render loop when scrolled out
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      {/* 1. Universal SVG Fallback: rendered on SSR & client, zero layout shift */}
      <SvgSacredPattern />

      {/* 2. 3D WebGL Canvas: Loaded strictly on desktop when scrolled near viewport */}
      {Component3D && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            is3DReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <Component3D isActive={isVisible} />
        </div>
      )}
    </div>
  );
}
