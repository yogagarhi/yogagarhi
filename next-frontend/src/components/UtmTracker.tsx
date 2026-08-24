"use client";

import { Suspense } from "react";
import { useUtmTracking } from "@/hooks/useUtmTracking";

function UtmTrackerInner() {
  useUtmTracking();
  return null;
}

export default function UtmTracker() {
  return (
    <Suspense fallback={null}>
      <UtmTrackerInner />
    </Suspense>
  );
}
