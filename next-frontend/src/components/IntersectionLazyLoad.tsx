"use client";

import { useEffect, useRef, useState } from "react";

interface IntersectionLazyLoadProps {
    children: React.ReactNode;
    rootMargin?: string;
    threshold?: number;
}

export default function IntersectionLazyLoad({
    children,
    rootMargin = "400px",
    threshold = 0.01
}: IntersectionLazyLoadProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Skip on server
        if (typeof window === 'undefined') return;

        // Check if IntersectionObserver is supported
        if (!('IntersectionObserver' in window)) {
            setIsVisible(true);
            setHasLoaded(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsVisible(true);
                    setHasLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin,
                threshold
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [rootMargin, threshold, hasLoaded]);

    return (
        <div ref={ref} style={{ minHeight: isVisible ? 'auto' : '400px' }}>
            {isVisible && children}
        </div>
    );
}
