# Course Page Content Editing Guide (i18n & English)

Jab bhi kisi Course Page ka content (prices, batch dates, curriculum, FAQs, photos, headings) badalna ho, toh kin-kin files mein changes karne hain:

---

## 1. 100-Hour Yoga Teacher Training Bali
URL: `/100-hour-yoga-teacher-training-in-bali` (English) aur `/[locale]/100-hour-yoga-teacher-training-in-bali` (Translations)

* **English visible content badalna ho (Hero, Curriculum, Highlights, Room Cards, FAQs):**
  * File: `next-frontend/src/components/pages/Course100HourEnglish.tsx`
* **Translated content badalna ho (German, Spanish, French, etc.):**
  * File: `next-frontend/src/messages/[locale].json` (Namespace: `"course100"`)
* **English Page SEO Metadata & Schemas (Title, Meta Description, Schema.org):**
  * File: `next-frontend/src/app/[locale]/100-hour-yoga-teacher-training-in-bali/page.tsx`
* **Prices / Strike Prices badalna ho:**
  * English prices: `next-frontend/src/components/pages/Course100HourEnglish.tsx`
  * Translated prices: `next-frontend/src/components/pages/Course100Hour.tsx` (`pricingConfig` object)
* **Batch Dates (Calendar) badalna ho:**
  * File: `next-frontend/src/constants/courseDates.ts` (`BATCHES_100_HOUR` array) — *Ye shared hai, yahan badalney se English aur saare translations dono update hote hain.*

---

## 2. 300-Hour Yoga Teacher Training Bali
URL: `/300-hour-yoga-teacher-training-in-bali`

* **English visible content badalna ho:**
  * File: `next-frontend/src/components/pages/Course300HourEnglish.tsx`
* **Translated content badalna ho:**
  * File: `next-frontend/src/messages/[locale].json` (Namespace: `"course300"`)
* **English Page SEO Metadata & Schemas:**
  * File: `next-frontend/src/app/[locale]/300-hour-yoga-teacher-training-in-bali/page.tsx`
* **Prices / Strike Prices badalna ho:**
  * English prices: `next-frontend/src/components/pages/Course300HourEnglish.tsx`
  * Translated prices: `next-frontend/src/components/pages/Course300Hour.tsx` (`pricingConfig` object)
* **Batch Dates badalna ho:**
  * File: `next-frontend/src/constants/courseDates.ts` (`BATCHES_300_HOUR` array)

---

## 3. 100-Hour Yoga Teacher Training Rishikesh
URL: `/100-hour-yoga-teacher-training-in-rishikesh`

* **English visible content badalna ho:**
  * File: `next-frontend/src/components/pages/Course100HourRishikeshEnglish.tsx`
* **Translated content badalna ho:**
  * File: `next-frontend/src/messages/[locale].json` (Namespace: `"course100Rishikesh"`)
* **English Page SEO Metadata & Schemas:**
  * File: `next-frontend/src/app/[locale]/100-hour-yoga-teacher-training-in-rishikesh/page.tsx`
* **Prices / Strike Prices badalna ho:**
  * English prices: `next-frontend/src/components/pages/Course100HourRishikeshEnglish.tsx`
  * Translated prices: `next-frontend/src/components/pages/Course100HourRishikesh.tsx` (`pricingConfig` object)
* **Batch Dates badalna ho:**
  * File: `next-frontend/src/constants/courseDates.ts` (`BATCHES_100_HOUR` array)

---

## 4. 200-Hour Yoga Teacher Training Rishikesh
URL: `/200-hour-yoga-teacher-training-in-rishikesh`

* **English visible content badalna ho:**
  * File: `next-frontend/src/components/pages/Course200HourRishikeshEnglish.tsx`
* **Translated content badalna ho:**
  * File: `next-frontend/src/messages/[locale].json` (Namespace: `"course200Rishikesh"`)
* **English Page SEO Metadata & Schemas:**
  * File: `next-frontend/src/app/[locale]/200-hour-yoga-teacher-training-in-rishikesh/page.tsx`
* **Prices / Strike Prices badalna ho:**
  * English prices: `next-frontend/src/components/pages/Course200HourRishikeshEnglish.tsx`
  * Translated prices: `next-frontend/src/components/pages/Course200HourRishikesh.tsx` (`pricingConfig` object)
* **Batch Dates badalna ho:**
  * File: `next-frontend/src/constants/courseDates.ts` (`BATCHES_200_HOUR` array)

---

## 5. 200-Hour Yoga Teacher Training Bali
URL: `/200-hour-yoga-teacher-training-in-bali`

* **Visible content badalna ho (English & Translations unified):**
  * English default text: `next-frontend/src/messages/en.json` (Namespace: `"course200"`)
  * Translated text: `next-frontend/src/messages/[locale].json` (Namespace: `"course200"`)
  * Component layout: `next-frontend/src/components/pages/Course200Hour.tsx`
* **Prices badalna ho:**
  * File: `next-frontend/src/constants/pricing.ts` (`COURSE_200_HOUR_PRICING`)
* **Batch Dates badalna ho:**
  * File: `next-frontend/src/constants/courseDates.ts` (`BATCHES_200_HOUR` array)

---

## Automated Parity Check (Facts Verification)
Kisi bhi page mein content ya prices badalne ke baad ye command run karein:

```bash
npm run check:i18n-facts
```

Ye script har course page ke English page aur har translation (German, Spanish, French, Italian, Dutch, Russian, Indonesian, Japanese, Korean, Chinese) ke beech:
1. Prices & Strike Prices
2. Room Types Count
3. Batch Dates
4. Durations ("12 Days", "28 Days", etc.)
5. Student Count ("8–10")
6. Refund Policy points
7. Offer text months
8. FAQ count
9. Section count (H2)

ko compare karegi. Agar 0 mismatch honge toh PASS karegi, koi mismatch hoga toh turant FAIL karke exact mismatch ki list degi.
