# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Course Page Content Editing Guide (i18n & English)

Jab bhi kisi Course Page ka content (prices, batch dates, curriculum, FAQs, photos) badalna ho, toh kin-kin files mein changes karne hain:

### 1. 100-Hour Yoga Teacher Training Bali (`/100-hour-yoga-teacher-training-in-bali`)
* **English visible content:** `next-frontend/src/components/pages/Course100HourEnglish.tsx`
* **Translated content:** `next-frontend/src/messages/[locale].json` (namespace: `"course100"`)
* **SEO Metadata & Schemas:** `next-frontend/src/app/[locale]/100-hour-yoga-teacher-training-in-bali/page.tsx`
* **Prices:** English in `Course100HourEnglish.tsx`, Translations in `Course100Hour.tsx` (`pricingConfig`)
* **Batch Dates:** `next-frontend/src/constants/courseDates.ts` (`BATCHES_100_HOUR`)

### 2. 300-Hour Yoga Teacher Training Bali (`/300-hour-yoga-teacher-training-in-bali`)
* **English visible content:** `next-frontend/src/components/pages/Course300HourEnglish.tsx`
* **Translated content:** `next-frontend/src/messages/[locale].json` (namespace: `"course300"`)
* **SEO Metadata & Schemas:** `next-frontend/src/app/[locale]/300-hour-yoga-teacher-training-in-bali/page.tsx`
* **Prices:** English in `Course300HourEnglish.tsx`, Translations in `Course300Hour.tsx` (`pricingConfig`)
* **Batch Dates:** `next-frontend/src/constants/courseDates.ts` (`BATCHES_300_HOUR`)

### 3. 100-Hour Yoga Teacher Training Rishikesh (`/100-hour-yoga-teacher-training-in-rishikesh`)
* **English visible content:** `next-frontend/src/components/pages/Course100HourRishikeshEnglish.tsx`
* **Translated content:** `next-frontend/src/messages/[locale].json` (namespace: `"course100Rishikesh"`)
* **SEO Metadata & Schemas:** `next-frontend/src/app/[locale]/100-hour-yoga-teacher-training-in-rishikesh/page.tsx`
* **Prices:** English in `Course100HourRishikeshEnglish.tsx`, Translations in `Course100HourRishikesh.tsx` (`pricingConfig`)
* **Batch Dates:** `next-frontend/src/constants/courseDates.ts` (`BATCHES_100_HOUR`)

### 4. 200-Hour Yoga Teacher Training Rishikesh (`/200-hour-yoga-teacher-training-in-rishikesh`)
* **English visible content:** `next-frontend/src/components/pages/Course200HourRishikeshEnglish.tsx`
* **Translated content:** `next-frontend/src/messages/[locale].json` (namespace: `"course200Rishikesh"`)
* **SEO Metadata & Schemas:** `next-frontend/src/app/[locale]/200-hour-yoga-teacher-training-in-rishikesh/page.tsx`
* **Prices:** English in `Course200HourRishikeshEnglish.tsx`, Translations in `Course200HourRishikesh.tsx` (`pricingConfig`)
* **Batch Dates:** `next-frontend/src/constants/courseDates.ts` (`BATCHES_200_HOUR`)

### Automated Parity Check
Content badalne ke baad run karein:
```bash
npm run check:i18n-facts
```
Detailed guide: see `docs/content-editing-guide.md`.

