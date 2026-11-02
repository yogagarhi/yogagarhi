const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/**
 * Returns a list of preferred start months (12–15 months ahead)
 * - Bali: starts on the 1st of each month. If currentDate is after the 1st, starts next month.
 * - Rishikesh: starts from March 2027
 * - Varkala: starts from July 2027
 */
export function getPreferredStartMonths(
  location?: 'bali' | 'rishikesh' | 'varkala',
  count: number = 15,
  currentDate: Date = new Date()
): string[] {
  if (location === 'rishikesh') {
    const result: string[] = [];
    const startYear = 2027;
    const startMonth = 2; // March (0-indexed)
    for (let i = 0; i < count; i++) {
      const m = (startMonth + i) % 12;
      const y = startYear + Math.floor((startMonth + i) / 12);
      result.push(`${MONTH_NAMES[m]}, ${y}`);
    }
    return result;
  }

  if (location === 'varkala') {
    const result: string[] = [];
    const startYear = 2027;
    const startMonth = 6; // July (0-indexed)
    for (let i = 0; i < count; i++) {
      const m = (startMonth + i) % 12;
      const y = startYear + Math.floor((startMonth + i) / 12);
      result.push(`${MONTH_NAMES[m]}, ${y}`);
    }
    return result;
  }

  // Bali / default:
  // If date > 1, start next month. If date === 1, start current month.
  const isPastFirst = currentDate.getDate() > 1;
  const baseMonth = isPastFirst ? currentDate.getMonth() + 1 : currentDate.getMonth();
  const baseYear = currentDate.getFullYear();

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const m = (baseMonth + i) % 12;
    const y = baseYear + Math.floor((baseMonth + i) / 12);
    result.push(`${MONTH_NAMES[m]}, ${y}`);
  }
  return result;
}
