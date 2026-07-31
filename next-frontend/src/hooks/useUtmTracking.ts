"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function useUtmTracking() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // List of parameters we want to track
    const trackingParams = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    let hasUpdates = false;

    trackingParams.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        sessionStorage.setItem(param, value);
        // We can optionally use localStorage if we want persistence across sessions:
        // localStorage.setItem(param, value);
        hasUpdates = true;
      }
    });

  }, [searchParams]);
}
