import type { CourseBatch } from "@/constants/courseDates";

export const bali200 = {
  sale: {
    active: true,
    label: "Early Bird Sale",
    headline: "Flat $300 OFF on March to July 2027 batches",
    discount: 300,
    endsAt: "2027-02-28T23:59:59+08:00", // Bali time (WITA)
  },
  prices: [
    { name: "Tuition Only",   original: 1299, sale: 999 },
    { name: "Triple Sharing", original: 2050, sale: 1750 },
    { name: "Double Sharing", original: 2199, sale: 1899 },
    { name: "Private Room",   original: 2799, sale: 2499 },
  ],
  batches: [
    { start: "2027-03-01", end: "2027-03-24", seatsLeft: 10 },
    { start: "2027-04-01", end: "2027-04-24", seatsLeft: 10 },
    { start: "2027-05-01", end: "2027-05-24", seatsLeft: 10 },
    { start: "2027-06-01", end: "2027-06-24", seatsLeft: 10 },
    { start: "2027-07-01", end: "2027-07-24", seatsLeft: 10 },
  ],
};

/**
 * Universal helper to determine whether the sale is active and not expired.
 * isSaleLive() = bali200.sale.active && now < bali200.sale.endsAt
 */
export function isSaleLive(nowDate?: Date): boolean {
  if (!bali200.sale.active) return false;
  const nowMs = nowDate ? nowDate.getTime() : Date.now();
  const endsAtMs = new Date(bali200.sale.endsAt).getTime();
  return nowMs < endsAtMs;
}

/**
 * Returns the current date in Asia/Makassar (Bali time / WITA, UTC+8) in "YYYY-MM-DD" format.
 */
export function getTodayMakassar(): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Makassar",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatter.format(new Date());
  } catch {
    // Fallback if environment doesn't support the timezone
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const makassarTime = new Date(utcTime + 8 * 3600000);
    return makassarTime.toISOString().split("T")[0];
  }
}

/**
 * Filters out batches whose start date is in the past (Makassar timezone).
 */
export function getUpcomingBaliBatches(todayStr?: string) {
  const today = todayStr || getTodayMakassar();
  return bali200.batches.filter((b) => b.start >= today);
}

/**
 * Formats start and end ISO dates into human display string e.g. "1 Mar - 24 Mar 2027".
 */
export function formatBatchDisplayDate(start: string, end: string): string {
  const s = new Date(start + "T00:00:00Z");
  const e = new Date(end + "T00:00:00Z");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const startDay = s.getUTCDate();
  const startMonth = months[s.getUTCMonth()];
  const endDay = e.getUTCDate();
  const endMonth = months[e.getUTCMonth()];
  const endYear = e.getUTCFullYear();
  return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`;
}

/**
 * Computes seats badge information adhering strictly to grammar rules:
 * - seatsLeft <= 0: "Fully Booked"
 * - seatsLeft === 1: "Only 1 spot left"
 * - seatsLeft <= 4: "Only X spots left"
 * - otherwise: "Booking open"
 */
export function getBatchSeatsBadge(seatsLeft: number | null): {
  isFull: boolean;
  isUrgent: boolean;
  text: string;
  colorClass: string;
} {
  if (seatsLeft === null || seatsLeft === undefined) {
    return {
      isFull: false,
      isUrgent: false,
      text: "Booking open",
      colorClass: "bg-secondary text-secondary-foreground",
    };
  }

  if (seatsLeft <= 0) {
    return {
      isFull: true,
      isUrgent: false,
      text: "Fully Booked",
      colorClass: "bg-muted text-muted-foreground",
    };
  }

  if (seatsLeft === 1) {
    return {
      isFull: false,
      isUrgent: true,
      text: "Only 1 spot left",
      colorClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 font-semibold",
    };
  }

  if (seatsLeft <= 4) {
    return {
      isFull: false,
      isUrgent: true,
      text: `Only ${seatsLeft} spots left`,
      colorClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 font-semibold",
    };
  }

  return {
    isFull: false,
    isUrgent: false,
    text: "Booking open",
    colorClass: "bg-secondary text-secondary-foreground",
  };
}

/**
 * Converts upcoming bali200 batches to CourseBatch[] for compatibility with existing components.
 */
export function getBali200Batches(todayStr?: string): CourseBatch[] {
  const upcoming = getUpcomingBaliBatches(todayStr);
  const live = isSaleLive();
  return upcoming.map((b) => {
    const badge = getBatchSeatsBadge(b.seatsLeft);
    return {
      startDate: b.start,
      endDate: b.end,
      date: formatBatchDisplayDate(b.start, b.end),
      spotsLeft: b.seatsLeft,
      spotsText: badge.text,
      earlyBirdSaving: live ? `$${bali200.sale.discount}` : "",
    };
  });
}

/**
 * Retrieves pricing entry by package name.
 */
export function getBali200Price(name: string) {
  const entry = bali200.prices.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (!entry) {
    throw new Error(`Package price not found for: ${name}`);
  }
  return entry;
}
