import { CourseBatch, filterUpcomingBatches } from "@/constants/courseDates";

export function useUpcomingBatches(allBatches: CourseBatch[], initialBatches?: CourseBatch[]): CourseBatch[] {
  // If pre-filtered upcoming batches provided from SSR/server component, prioritize them
  if (initialBatches && initialBatches.length > 0) {
    return initialBatches;
  }
  return filterUpcomingBatches(allBatches);
}
