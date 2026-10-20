const puppeteer = require('C:/Users/rahul/OneDrive/Desktop/yogagarhi yash/next-frontend/node_modules/puppeteer-core');
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const fs = require('fs');
const path = require('path');

const COURSES = [
  '100-hour-yoga-teacher-training-in-bali',
  '300-hour-yoga-teacher-training-in-bali',
  '100-hour-yoga-teacher-training-in-rishikesh',
  '200-hour-yoga-teacher-training-in-rishikesh',
  '200-hour-yoga-teacher-training-in-bali'
];

const LOCALES = ['de', 'es', 'fr', 'it', 'nl', 'ru', 'id', 'ja', 'ko', 'zh'];

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

function normalizePrice(p) {
  return p.replace(/[\$,\s]/g, '').trim();
}

async function extractFactsFromPage(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
  await new Promise(r => setTimeout(r, 600));

  return await page.evaluate(() => {
    const fullText = document.body.innerText;

    // 1. Prices: match pattern like $1,149, $999, etc.
    const allPriceMatches = [];
    document.querySelectorAll('*').forEach(el => {
      // Only check leaf or near-leaf elements
      if (el.children.length === 0 || (el.children.length === 1 && el.firstElementChild.tagName === 'SPAN')) {
        const t = el.textContent.trim();
        if (/^\$[0-9]{1,3}(?:,[0-9]{3})*$/.test(t)) {
          allPriceMatches.push(t.replace(/[\$,\s]/g, ''));
        }
      }
    });
    const uniquePrices = Array.from(new Set(allPriceMatches)).sort((a, b) => Number(a) - Number(b));

    // Strikethrough / original prices
    const strikeElements = Array.from(document.querySelectorAll('.line-through, del, s, [class*="line-through"]'));
    const strikePrices = Array.from(new Set(
      strikeElements.map(el => {
        const m = el.textContent.match(/\$[0-9,]+/);
        return m ? m[0].replace(/[\$,\s]/g, '') : null;
      }).filter(Boolean)
    )).sort((a, b) => Number(a) - Number(b));

    // 2. Room card count
    const roomCardEls = document.querySelectorAll('[data-room-card="true"]');
    const roomTypeCount = roomCardEls.length > 0 ? roomCardEls.length : document.querySelectorAll('.room-card').length;

    // 3. Batch Dates list
    const batchDateTexts = Array.from(document.querySelectorAll('*'))
      .map(el => el.textContent.trim())
      .filter(t => /\b(?:2026|2027)\b/.test(t) && /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Mai|Okt|März|Fév|Avr|Dic|Gen|Pto|Сен|Окт|Ноя|Дек|1st|2nd|3rd|\d{1,2}(?:st|nd|rd|th)?\s*[-–])\b/i.test(t) && t.length < 50);
    const uniqueBatchDatesCount = Array.from(new Set(batchDateTexts)).length;

    // 4. Primary Course Duration (e.g. 12, 24, 28)
    const durationEl = document.querySelector('[data-course-duration]');
    const primaryDuration = durationEl ? durationEl.textContent.match(/\d{1,2}/)?.[0] : null;

    // 5. Student Count range (e.g. "8-10" or "8–10" or "10-12")
    const studentMatch = fullText.match(/\b(8\s*[-–]\s*10|10\s*[-–]\s*12|8\s*to\s*10)\b/i);
    const studentCount = studentMatch ? studentMatch[1].replace(/[\s\u2013\u2014]/g, '-').replace('to', '-') : null;

    // 6. Refund Policy points count
    const refundSection = Array.from(document.querySelectorAll('section, div')).find(s => 
      /Refund Policy|Rückerstattungsrichtlinie|Politique de remboursement|Política de reembolso|Политика возврата/i.test(s.textContent) &&
      s.querySelectorAll('li, p').length >= 3 && s.textContent.length < 5000
    );
    const refundPointsCount = refundSection ? refundSection.querySelectorAll('li').length : 0;

    // 7. Offer text months (e.g. April/July or September/December)
    const hasOfferMonths = /April|July|September|December|Dezember|Desember|Juli|Juillet|Avril|Luglio|Aprile|Septembre|Décembre|Diciembre|Julio|Settembre|Dicembre|Сентябр|Декабр|Апрел|Июл|4月|7月|9月|12月|(?:4|7|9|12)월/i.test(fullText);

    // 8. FAQ count (Accordion items inside FAQ section)
    const faqSection = Array.from(document.querySelectorAll('section, div')).find(s => {
      const h = s.querySelector('h2, h3');
      return h && /FAQ|Frequently Asked|Häufig gestellte|Questions fréquemment|Domande frequenti|Preguntas frecuentes|Veelgestelde vragen|Часто задаваемые|Pertanyaan Umum|よくある質問|자주 묻는 질문|常见问题/i.test(h.textContent);
    });
    const faqCount = faqSection ? faqSection.querySelectorAll('[data-radix-collection-item], [data-state="closed"], [data-state="open"], .faq-item').length : 0;

    // 9. Section count (H2 elements)
    const h2Headings = Array.from(document.querySelectorAll('h2')).map(h => h.textContent.trim()).filter(Boolean);
    const sectionCount = h2Headings.length;

    return {
      uniquePrices,
      strikePrices,
      roomTypeCount,
      uniqueBatchDatesCount,
      primaryDuration,
      studentCount,
      refundPointsCount,
      hasOfferMonths,
      faqCount,
      sectionCount
    };
  });
}

async function runParityCheck() {
  console.log(`\n======================================================`);
  console.log(`  STARTING AUTOMATED i18n FACTS PARITY AUDIT`);
  console.log(`  Base URL: ${BASE_URL}`);
  console.log(`  Courses to check: ${COURSES.length}`);
  console.log(`  Locales to check per course: 1 English + ${LOCALES.length} Non-English`);
  console.log(`======================================================\n`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let totalErrors = 0;
  const failureReport = [];

  for (const courseSlug of COURSES) {
    console.log(`\n------------------------------------------------------`);
    console.log(`[AUDIT COURSE] ${courseSlug}`);
    console.log(`------------------------------------------------------`);

    // 1. Fetch English baseline facts
    const enUrl = `${BASE_URL}/${courseSlug}`;
    let enFacts;
    try {
      enFacts = await extractFactsFromPage(page, enUrl);
      console.log(`  [EN Baseline] Prices: [$${enFacts.uniquePrices.join(', $')}] | Strike: [$${enFacts.strikePrices.join(', $')}] | Rooms: ${enFacts.roomTypeCount} | Duration: ${enFacts.primaryDuration}d | FAQs: ${enFacts.faqCount} | Sections (H2): ${enFacts.sectionCount}`);
    } catch (e) {
      console.error(`  [FATAL] Failed to load English baseline: ${enUrl}: ${e.message}`);
      totalErrors++;
      continue;
    }

    // 2. Compare against every locale
    for (const locale of LOCALES) {
      const locUrl = `${BASE_URL}/${locale}/${courseSlug}`;
      let locFacts;
      try {
        locFacts = await extractFactsFromPage(page, locUrl);
      } catch (e) {
        console.error(`  [FAIL ${locale.toUpperCase()}] Could not load ${locUrl}: ${e.message}`);
        totalErrors++;
        failureReport.push({ course: courseSlug, locale, error: `Failed to load page: ${e.message}` });
        continue;
      }

      const issues = [];

      // Check prices: all English prices must be present in locale
      const missingPrices = enFacts.uniquePrices.filter(p => !locFacts.uniquePrices.includes(p));
      if (missingPrices.length > 0) {
        issues.push(`Missing prices: $${missingPrices.join(', $')} (Locale had: $${locFacts.uniquePrices.join(', $')})`);
      }

      // Check strike prices
      const missingStrikes = enFacts.strikePrices.filter(p => !locFacts.strikePrices.includes(p));
      if (missingStrikes.length > 0) {
        issues.push(`Missing strike prices: $${missingStrikes.join(', $')} (Locale had: $${locFacts.strikePrices.join(', $')})`);
      }

      // Check room type count
      if (enFacts.roomTypeCount > 0 && locFacts.roomTypeCount !== enFacts.roomTypeCount) {
        issues.push(`Room types count mismatch: EN=${enFacts.roomTypeCount} vs ${locale}=${locFacts.roomTypeCount}`);
      }

      // Check primary duration
      if (enFacts.primaryDuration && locFacts.primaryDuration !== enFacts.primaryDuration) {
        issues.push(`Duration mismatch: EN=${enFacts.primaryDuration} vs ${locale}=${locFacts.primaryDuration}`);
      }

      // Check student count range
      if (enFacts.studentCount && locFacts.studentCount && locFacts.studentCount !== enFacts.studentCount) {
        issues.push(`Student count mismatch: EN=${enFacts.studentCount} vs ${locale}=${locFacts.studentCount}`);
      }

      // Check offer months
      if (enFacts.hasOfferMonths && !locFacts.hasOfferMonths) {
        issues.push(`Offer text months missing in ${locale}`);
      }

      // Check FAQ count (if English has an accordion FAQ section)
      if (enFacts.faqCount > 0 && locFacts.faqCount !== enFacts.faqCount) {
        issues.push(`FAQ count mismatch: EN=${enFacts.faqCount} vs ${locale}=${locFacts.faqCount}`);
      }

      // Check Section count (H2 headings) - allow at most 2 diff for layout wrappers
      if (Math.abs(enFacts.sectionCount - locFacts.sectionCount) > 2) {
        issues.push(`Section (H2) count mismatch: EN=${enFacts.sectionCount} vs ${locale}=${locFacts.sectionCount}`);
      }

      if (issues.length > 0) {
        totalErrors++;
        console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${locUrl}`);
        issues.forEach(iss => console.error(`       • ${iss}`));
        failureReport.push({ course: courseSlug, locale, issues });
      } else {
        console.log(`  ✅ [PASS ${locale.toUpperCase()}] All 10 facts match English baseline`);
      }
    }
  }

  await browser.close();

  const reportPath = path.resolve(__dirname, '../scratch/facts-parity-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalErrors,
    failureReport
  }, null, 2), 'utf8');

  console.log(`\n======================================================`);
  console.log(`  AUDIT SUMMARY`);
  console.log(`======================================================`);
  console.log(`Total Mismatches Found: ${totalErrors}`);

  if (totalErrors === 0) {
    console.log(`🎉 100% PARITY! ALL LOCALE COURSE PAGES EXACTLY MATCH ENGLISH FACTS!`);
    process.exit(0);
  } else {
    console.error(`❌ FAILED! ${totalErrors} fact mismatches found across courses.`);
    process.exit(1);
  }
}

runParityCheck().catch(err => {
  console.error('[FATAL EXCEPTION]', err);
  process.exit(1);
});
