"use client";
import { useState, useEffect } from "react";
import { CourseBatch, filterUpcomingBatches } from "@/constants/courseDates";

export function useUpcomingBatches(allBatches: CourseBatch[]): CourseBatch[] {
  // Initialize with allBatches to preserve static SSR render
  const [batches, setBatches] = useState<CourseBatch[]>(allBatches);

  useEffect(() => {
    // Client-side auto-hide for batches whose start date has passed
    const active = filterUpcomingBatches(allBatches);
    setBatches(active);
  }, [allBatches]);

  return batches;
}
