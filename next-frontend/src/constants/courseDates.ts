export interface CourseBatch {
  startDate: string; // ISO format "YYYY-MM-DD"
  endDate: string;   // ISO format "YYYY-MM-DD"
  date: string;      // Display format, e.g. "1 Sept - 12 Sept 2026"
  spotsLeft: number | null; // e.g. 1, 2, 3, 4, 6, 8, or null for open booking
  spotsText: string; // e.g. "Only 1 spots left" or "Booking open"
  earlyBirdSaving?: string; // e.g. "$150", "$200", "$300"
}

// 100 Hour Yoga Teacher Training Batches (12 Days) - Bali & Rishikesh
export const BATCHES_100_HOUR: CourseBatch[] = [
  // Existing batches (Sept 2026 - Feb 2027)
  { startDate: "2026-09-01", endDate: "2026-09-12", date: "1 Sept - 12 Sept 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2026-10-08", endDate: "2026-10-19", date: "8 Oct - 19 Oct 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2026-11-01", endDate: "2026-11-12", date: "1 Nov - 12 Nov 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2026-12-01", endDate: "2026-12-12", date: "1 Dec - 12 Dec 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-01-01", endDate: "2027-01-12", date: "1 Jan - 12 Jan 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-02-01", endDate: "2027-02-12", date: "1 Feb - 12 Feb 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  // Extended batches (March 2027 - December 2027)
  { startDate: "2027-03-01", endDate: "2027-03-12", date: "1 Mar - 12 Mar 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-04-01", endDate: "2027-04-12", date: "1 Apr - 12 Apr 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-05-01", endDate: "2027-05-12", date: "1 May - 12 May 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-06-01", endDate: "2027-06-12", date: "1 Jun - 12 Jun 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-07-01", endDate: "2027-07-12", date: "1 Jul - 12 Jul 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-08-01", endDate: "2027-08-12", date: "1 Aug - 12 Aug 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-09-01", endDate: "2027-09-12", date: "1 Sept - 12 Sept 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-10-01", endDate: "2027-10-12", date: "1 Oct - 12 Oct 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-11-01", endDate: "2027-11-12", date: "1 Nov - 12 Nov 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
  { startDate: "2027-12-01", endDate: "2027-12-12", date: "1 Dec - 12 Dec 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
];

// 200 Hour Yoga Teacher Training Batches (24 Days) - Bali & Rishikesh
export const BATCHES_200_HOUR: CourseBatch[] = [
  // Existing batches (Sept 2026 - Feb 2027)
  { startDate: "2026-09-01", endDate: "2026-09-24", date: "1 Sept - 24 Sept 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2026-10-08", endDate: "2026-10-31", date: "8 Oct - 31 Oct 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2026-11-01", endDate: "2026-11-24", date: "1 Nov - 24 Nov 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2026-12-01", endDate: "2026-12-24", date: "1 Dec - 24 Dec 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-01-01", endDate: "2027-01-24", date: "1 Jan - 24 Jan 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-02-01", endDate: "2027-02-24", date: "1 Feb - 24 Feb 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  // Extended batches (March 2027 - December 2027)
  { startDate: "2027-03-01", endDate: "2027-03-24", date: "1 Mar - 24 Mar 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-04-01", endDate: "2027-04-24", date: "1 Apr - 24 Apr 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-05-01", endDate: "2027-05-24", date: "1 May - 24 May 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-06-01", endDate: "2027-06-24", date: "1 Jun - 24 Jun 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-07-01", endDate: "2027-07-24", date: "1 Jul - 24 Jul 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-08-01", endDate: "2027-08-24", date: "1 Aug - 24 Aug 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-09-01", endDate: "2027-09-24", date: "1 Sept - 24 Sept 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-10-01", endDate: "2027-10-24", date: "1 Oct - 24 Oct 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-11-01", endDate: "2027-11-24", date: "1 Nov - 24 Nov 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-12-01", endDate: "2027-12-24", date: "1 Dec - 24 Dec 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
];

// 300 Hour Yoga Teacher Training Batches (28 Days) - Bali
export const BATCHES_300_HOUR: CourseBatch[] = [
  // Existing batches (Sept 2026 - Feb 2027)
  { startDate: "2026-09-01", endDate: "2026-09-28", date: "1 Sept - 28 Sept 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2026-10-01", endDate: "2026-10-28", date: "1 Oct - 28 Oct 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2026-11-01", endDate: "2026-11-28", date: "1 Nov - 28 Nov 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2026-12-01", endDate: "2026-12-28", date: "1 Dec - 28 Dec 2026", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-01-01", endDate: "2027-01-28", date: "1 Jan - 28 Jan 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-02-01", endDate: "2027-02-28", date: "1 Feb - 28 Feb 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  // Extended batches (March 2027 - December 2027)
  { startDate: "2027-03-01", endDate: "2027-03-28", date: "1 Mar - 28 Mar 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-04-01", endDate: "2027-04-28", date: "1 Apr - 28 Apr 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-05-01", endDate: "2027-05-28", date: "1 May - 28 May 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-06-01", endDate: "2027-06-28", date: "1 Jun - 28 Jun 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-07-01", endDate: "2027-07-28", date: "1 Jul - 28 Jul 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-08-01", endDate: "2027-08-28", date: "1 Aug - 28 Aug 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-09-01", endDate: "2027-09-28", date: "1 Sept - 28 Sept 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-10-01", endDate: "2027-10-28", date: "1 Oct - 28 Oct 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-11-01", endDate: "2027-11-28", date: "1 Nov - 28 Nov 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
  { startDate: "2027-12-01", endDate: "2027-12-28", date: "1 Dec - 28 Dec 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$300" },
];

// 100 Hour Yoga Teacher Training Batches (12 Days) - Rishikesh
export const BATCHES_100_HOUR_RISHIKESH: CourseBatch[] = [
  { startDate: "2027-03-01", endDate: "2027-03-12", date: "1 Mar - 12 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-01", endDate: "2027-04-12", date: "1 Apr - 12 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-01", endDate: "2027-05-12", date: "1 May - 12 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-01", endDate: "2027-06-12", date: "1 Jun - 12 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-01", endDate: "2027-07-12", date: "1 Jul - 12 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-01", endDate: "2027-08-12", date: "1 Aug - 12 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-01", endDate: "2027-09-12", date: "1 Sept - 12 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-01", endDate: "2027-10-12", date: "1 Oct - 12 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-01", endDate: "2027-11-12", date: "1 Nov - 12 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-12-01", endDate: "2027-12-12", date: "1 Dec - 12 Dec 2027", spotsLeft: null, spotsText: "Booking open" },
];

// 200 Hour Yoga Teacher Training Batches (22 Days) - Rishikesh
export const BATCHES_200_HOUR_RISHIKESH: CourseBatch[] = [
  { startDate: "2027-03-01", endDate: "2027-03-22", date: "1 Mar - 22 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-01", endDate: "2027-04-22", date: "1 Apr - 22 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-01", endDate: "2027-05-22", date: "1 May - 22 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-01", endDate: "2027-06-22", date: "1 Jun - 22 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-01", endDate: "2027-07-22", date: "1 Jul - 22 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-01", endDate: "2027-08-22", date: "1 Aug - 22 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-01", endDate: "2027-09-22", date: "1 Sept - 22 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-01", endDate: "2027-10-22", date: "1 Oct - 22 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-01", endDate: "2027-11-22", date: "1 Nov - 22 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-12-01", endDate: "2027-12-22", date: "1 Dec - 22 Dec 2027", spotsLeft: null, spotsText: "Booking open" },
];

// 300 Hour Yoga Teacher Training Batches (28 Days) - Rishikesh
export const BATCHES_300_HOUR_RISHIKESH: CourseBatch[] = [
  { startDate: "2027-03-01", endDate: "2027-03-28", date: "1 Mar - 28 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-01", endDate: "2027-04-28", date: "1 Apr - 28 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-01", endDate: "2027-05-28", date: "1 May - 28 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-01", endDate: "2027-06-28", date: "1 Jun - 28 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-01", endDate: "2027-07-28", date: "1 Jul - 28 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-01", endDate: "2027-08-28", date: "1 Aug - 28 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-01", endDate: "2027-09-28", date: "1 Sept - 28 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-01", endDate: "2027-10-28", date: "1 Oct - 28 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-01", endDate: "2027-11-28", date: "1 Nov - 28 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-12-01", endDate: "2027-12-28", date: "1 Dec - 28 Dec 2027", spotsLeft: null, spotsText: "Booking open" },
];

// Sound Healing Course Batches (7 Days / 6 Nights) - Rishikesh (Starts 2 days after 200hr TTC ends)
export const BATCHES_SOUND_HEALING_RISHIKESH: CourseBatch[] = [
  { startDate: "2027-03-24", endDate: "2027-03-30", date: "24 Mar - 30 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-24", endDate: "2027-04-30", date: "24 Apr - 30 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-24", endDate: "2027-05-30", date: "24 May - 30 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-24", endDate: "2027-06-30", date: "24 Jun - 30 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-24", endDate: "2027-07-30", date: "24 Jul - 30 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-24", endDate: "2027-08-30", date: "24 Aug - 30 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-24", endDate: "2027-09-30", date: "24 Sept - 30 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-24", endDate: "2027-10-30", date: "24 Oct - 30 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-24", endDate: "2027-11-30", date: "24 Nov - 30 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-12-24", endDate: "2027-12-30", date: "24 Dec - 30 Dec 2027", spotsLeft: null, spotsText: "Booking open" },
];

// 200 Hour Kundalini Yoga Teacher Training Batches (22 Days / 21 Nights) - Rishikesh (Starts 2 days after 200hr TTC ends)
export const BATCHES_KUNDALINI_RISHIKESH: CourseBatch[] = [
  { startDate: "2027-03-24", endDate: "2027-04-14", date: "24 Mar - 14 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-24", endDate: "2027-05-15", date: "24 Apr - 15 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-24", endDate: "2027-06-14", date: "24 May - 14 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-24", endDate: "2027-07-15", date: "24 Jun - 15 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-24", endDate: "2027-08-14", date: "24 Jul - 14 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-24", endDate: "2027-09-14", date: "24 Aug - 14 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-24", endDate: "2027-10-15", date: "24 Sept - 15 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-24", endDate: "2027-11-14", date: "24 Oct - 14 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-24", endDate: "2027-12-15", date: "24 Nov - 15 Dec 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-12-24", endDate: "2028-01-14", date: "24 Dec 2027 - 14 Jan 2028", spotsLeft: null, spotsText: "Booking open" },
];

// 85 Hour Prenatal Yoga Teacher Training Batches (9 Days / 8 Nights) - Rishikesh (Starts 2 days after 200hr TTC ends)
export const BATCHES_PRENATAL_RISHIKESH: CourseBatch[] = [
  { startDate: "2027-03-24", endDate: "2027-04-01", date: "24 Mar - 1 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-24", endDate: "2027-05-02", date: "24 Apr - 2 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-24", endDate: "2027-06-01", date: "24 May - 1 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-24", endDate: "2027-07-02", date: "24 Jun - 2 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-24", endDate: "2027-08-01", date: "24 Jul - 1 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-24", endDate: "2027-09-01", date: "24 Aug - 1 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-24", endDate: "2027-10-02", date: "24 Sept - 2 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-24", endDate: "2027-11-01", date: "24 Oct - 1 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-24", endDate: "2027-12-02", date: "24 Nov - 2 Dec 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-12-24", endDate: "2028-01-01", date: "24 Dec 2027 - 1 Jan 2028", spotsLeft: null, spotsText: "Booking open" },
];

// 100 Hour Yoga Teacher Training Batches (12 Days / 11 Nights) - Dharamshala, Himalayas (March - November 2027)
export const BATCHES_100_HOUR_DHARAMSHALA: CourseBatch[] = [
  { startDate: "2027-03-01", endDate: "2027-03-12", date: "1 Mar - 12 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-01", endDate: "2027-04-12", date: "1 Apr - 12 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-01", endDate: "2027-05-12", date: "1 May - 12 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-01", endDate: "2027-06-12", date: "1 Jun - 12 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-01", endDate: "2027-07-12", date: "1 Jul - 12 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-01", endDate: "2027-08-12", date: "1 Aug - 12 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-01", endDate: "2027-09-12", date: "1 Sept - 12 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-01", endDate: "2027-10-12", date: "1 Oct - 12 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-01", endDate: "2027-11-12", date: "1 Nov - 12 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
];

// 200 Hour Yoga Teacher Training Batches (22 Days / 21 Nights) - Dharamshala, Himalayas (March - November 2027)
export const BATCHES_200_HOUR_DHARAMSHALA: CourseBatch[] = [
  { startDate: "2027-03-01", endDate: "2027-03-22", date: "1 Mar - 22 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-01", endDate: "2027-04-22", date: "1 Apr - 22 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-01", endDate: "2027-05-22", date: "1 May - 22 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-01", endDate: "2027-06-22", date: "1 Jun - 22 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-01", endDate: "2027-07-22", date: "1 Jul - 22 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-01", endDate: "2027-08-22", date: "1 Aug - 22 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-01", endDate: "2027-09-22", date: "1 Sept - 22 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-01", endDate: "2027-10-22", date: "1 Oct - 22 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-01", endDate: "2027-11-22", date: "1 Nov - 22 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
];

// 300 Hour Yoga Teacher Training Batches (28 Days / 27 Nights) - Dharamshala, Himalayas (March - November 2027)
export const BATCHES_300_HOUR_DHARAMSHALA: CourseBatch[] = [
  { startDate: "2027-03-01", endDate: "2027-03-28", date: "1 Mar - 28 Mar 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-04-01", endDate: "2027-04-28", date: "1 Apr - 28 Apr 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-05-01", endDate: "2027-05-28", date: "1 May - 28 May 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-06-01", endDate: "2027-06-28", date: "1 Jun - 28 Jun 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-07-01", endDate: "2027-07-28", date: "1 Jul - 28 Jul 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-08-01", endDate: "2027-08-28", date: "1 Aug - 28 Aug 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-09-01", endDate: "2027-09-28", date: "1 Sept - 28 Sept 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-10-01", endDate: "2027-10-28", date: "1 Oct - 28 Oct 2027", spotsLeft: null, spotsText: "Booking open" },
  { startDate: "2027-11-01", endDate: "2027-11-28", date: "1 Nov - 28 Nov 2027", spotsLeft: null, spotsText: "Booking open" },
];

// 100 Hour Yoga Teacher Training Batches (12 Days) - Varkala (First Batch: July 2027)
export const BATCHES_100_HOUR_VARKALA: CourseBatch[] = [
  { startDate: "2027-07-01", endDate: "2027-07-12", date: "1 Jul - 12 Jul 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$150" },
];

// 200 Hour Yoga Teacher Training Batches (24 Days) - Varkala (First Batch: July 2027)
export const BATCHES_200_HOUR_VARKALA: CourseBatch[] = [
  { startDate: "2027-07-01", endDate: "2027-07-24", date: "1 Jul - 24 Jul 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$200" },
];

// 300 Hour Yoga Teacher Training Batches (28 Days) - Varkala (First Batch: July 2027)
export const BATCHES_300_HOUR_VARKALA: CourseBatch[] = [
  { startDate: "2027-07-01", endDate: "2027-07-28", date: "1 Jul - 28 Jul 2027", spotsLeft: null, spotsText: "Booking open", earlyBirdSaving: "$200" },
];

/**
 * Checks whether a batch's start date has not passed yet.
 * Returns true if the batch start date is today or in the future.
 */
export function isBatchUpcoming(batch: CourseBatch, referenceDate: Date = new Date()): boolean {
  if (!batch.startDate) return true;
  const [year, month, day] = batch.startDate.split("-").map(Number);
  if (!day) return true;
  const start = new Date(year, month - 1, day);
  const today = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());
  return start >= today;
}

/**
 * Filters out batches whose start date has already passed.
 * Always ensures at least the remaining future batches are returned.
 * Fallback to original list if all are in past.
 */
export function filterUpcomingBatches(batches: CourseBatch[], referenceDate: Date = new Date()): CourseBatch[] {
  return batches.filter((b) => isBatchUpcoming(b, referenceDate));
}

/**
 * Helper to compute badge styling and copy for any batch
 */
export function getBatchBadge(item: CourseBatch) {
  const isFull = false;
  const isUrgent = false;
  const text = item.spotsText || "Booking open";
  const colorClass = "bg-secondary text-secondary-foreground";
  return { isFull, isUrgent, text, colorClass };
}

