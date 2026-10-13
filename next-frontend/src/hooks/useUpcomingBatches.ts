"use client";
import { useState, useEffect } from "react";
import { CourseBatch, filterUpcomingBatches } from "@/constants/courseDates";

export function useUpcomingBatches(allBatches: CourseBatch[], initialBatches?: CourseBatch[]): CourseBatch[] {
  // Initialize with initialBatches (pre-filtered on server) if provided to ensure no expired batches in SSR/Server HTML
  const [batches, setBatches] = useState<CourseBatch[]>(initialBatches || allBatches);

  useEffect(() => {
    // Client-side auto-hide for batches whose start date has passed as time elapses
    const active = filterUpcomingBatches(allBatches);
    setBatches(active);
  }, [allBatches]);

  return batches;
}
