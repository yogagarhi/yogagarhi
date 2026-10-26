const puppeteer = require('C:/Users/rahul/OneDrive/Desktop/yogagarhi yash/next-frontend/node_modules/puppeteer-core');
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const fs = require('fs');
const path = require('path');

const COURSES = [
  '100-hour-yoga-teacher-training-in-bali',
  '300-hour-yoga-teacher-training-in-bali',
  '100-hour-yoga-teacher-training-in-rishikesh',
  '200-hour-yoga-teacher-training-in-rishikesh',
  '300-hour-yoga-teacher-training-in-rishikesh',
  '200-hour-yoga-teacher-training-in-bali'
];

const LOCALES = ['de', 'es', 'fr', 'it', 'nl', 'ru', 'id', 'ja', 'ko', 'zh'];

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

function normalizePrice(p) {
  return p.replace(/[\$,\s]/g, '').trim();
}

async function extractFactsFromCoursePage(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
  await new Promise(r => setTimeout(r, 600));

  return await page.evaluate(() => {
    const fullText = document.body.innerText;

    // 1. Prices: match pattern like $1,149, $999, etc.
    const allPriceMatches = [];
    document.querySelectorAll('*').forEach(el => {
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
    const studentMatch = fullText.match(/\b(8\s*[-–—〜àto]\s*10|10\s*[-–]\s*12)\b/i);
    const studentCount = studentMatch ? studentMatch[1].replace(/[\s\u2013\u2014〜à]/g, '-').replace('to', '-') : null;

    // 6. Refund Policy points count
    const refundSection = Array.from(document.querySelectorAll('section, div')).find(s => 
      /Refund Policy|Rückerstattungsrichtlinie|Politique de remboursement|Política de reembolso|Политика возврата/i.test(s.textContent) &&
      s.querySelectorAll('li, p').length >= 3 && s.textContent.length < 5000
    );
    const refundPointsCount = refundSection ? refundSection.querySelectorAll('li').length : 0;

    // 7. Offer text months
    const hasOfferMonths = /April|July|September|December|Dezember|Desember|Juli|Juillet|Avril|Luglio|Aprile|Septembre|Décembre|Diciembre|Julio|Settembre|Dicembre|Сентябр|Декабр|Апрел|Июл|4月|7月|9月|12月|(?:4|7|9|12)월/i.test(fullText);

    // 8. FAQ count
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

async function extractFactsFromApplyNowPage(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
  await new Promise(r => setTimeout(r, 600));

  return await page.evaluate(() => {
    const fullText = document.body.innerText;
    
    // Check durations: 24, 23, 12, 11, 28, 27
    const has24Days = fullText.includes('24');
    const has23Nights = fullText.includes('23');
    const has12Days = fullText.includes('12');
    const has11Nights = fullText.includes('11');
    const has28Days = fullText.includes('28');
    const has27Nights = fullText.includes('27');

    // Student count range (8-10)
    const has8to10 = /8\s*[-–—〜àto]\s*10/.test(fullText);

    // WhatsApp phone link
    const waLink = Array.from(document.querySelectorAll('a[href*="wa.me"]')).find(a => a.href.includes('917895350563'));
    const hasValidWhatsApp = !!waLink;

    // Number of course cards (should be 3: 200hr, 100hr, 300hr)
    const courseCardLinks = Array.from(document.querySelectorAll('a[href*="yoga-teacher-training"]'));
    const hasCourseCards = courseCardLinks.length >= 3;

    // Number of FAQs (5)
    const h3Elements = Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim());
    const faqCount = h3Elements.filter(h => /\?|？/.test(h)).length;

    return {
      has24Days,
      has23Nights,
      has12Days,
      has11Nights,
      has28Days,
      has27Nights,
      has8to10,
      hasValidWhatsApp,
      hasCourseCards,
      faqCount
    };
  });
}

async function extractFactsFromAboutSchoolPage(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
  await new Promise(r => setTimeout(r, 600));

  return await page.evaluate(() => {
    const fullText = document.body.innerText;

    // Founder Sachin Ji mentioned
    const mentionsSachin = /Sachin/.test(fullText);
    // 7 years teaching experience mentioned
    const mentionsSevenYears = /(?:7|seven|sieben|sept|siete|sette|zeven|семь|tujuh|七)\s*(?:years?|jahre|ans|años|anni|jaar|лет|tahun|年間?|년간?|年)/i.test(fullText);
    // Founder image present
    const hasFounderImage = !!document.querySelector('img[alt*="Sachin"], img[src*="founder"]');
    // Research / Prakriti items (6 cards)
    const cardHeaders = Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim());

    return {
      mentionsSachin,
      mentionsSevenYears,
      hasFounderImage,
      h3Count: cardHeaders.length
    };
  });
}

async function extractFactsFromTeachersPage(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
  await new Promise(r => setTimeout(r, 600));

  return await page.evaluate(() => {
    const fullText = document.body.innerText;

    // 2500+ students trained
    const has2500 = /2500\+?/.test(fullText);
    // 8+ years teaching
    const has8Years = /8\+?\s*(?:Years?|Jahre|Années?|Años|Anni|Jaar|Лет|Tahun|年|년)/i.test(fullText);
    // 8-10 students batch
    const has8to10 = /8\s*[-–—〜àto]\s*10/.test(fullText);
    // Teacher names preserved
    const names = ['Sachin Ji', 'Chanda Ji', 'Rahul Ji', 'Rohit Ji', 'Abhishek Ji', 'Ankit Ji'];
    const missingNames = names.filter(n => !fullText.includes(n));
    // Qualifications preserved
    const hasERYT = fullText.includes('E-RYT 500');

    return {
      has2500,
      has8Years,
      has8to10,
      missingNames,
      hasERYT
    };
  });
}

async function runParityCheck() {
  console.log(`\n======================================================`);
  console.log(`  STARTING AUTOMATED i18n FACTS PARITY AUDIT`);
  console.log(`  Base URL: ${BASE_URL}`);
  console.log(`  Courses to check: ${COURSES.length}`);
  console.log(`  Batch 2 Pages to check: apply-now, about-school, teachers`);
  console.log(`  Locales to check: 1 English + ${LOCALES.length} Non-English`);
  console.log(`======================================================\n`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    protocolTimeout: 60000,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let totalErrors = 0;
  const failureReport = [];

  // ==========================================
  // SECTION 1: COURSE PAGES
  // ==========================================
  for (const courseSlug of COURSES) {
    console.log(`\n------------------------------------------------------`);
    console.log(`[AUDIT COURSE] ${courseSlug}`);
    console.log(`------------------------------------------------------`);

    const enUrl = `${BASE_URL}/${courseSlug}`;
    let enFacts;
    try {
      enFacts = await extractFactsFromCoursePage(page, enUrl);
      console.log(`  [EN Baseline] Prices: [$${enFacts.uniquePrices.join(', $')}] | Strike: [$${enFacts.strikePrices.join(', $')}] | Rooms: ${enFacts.roomTypeCount} | Duration: ${enFacts.primaryDuration}d | FAQs: ${enFacts.faqCount} | Sections (H2): ${enFacts.sectionCount}`);
    } catch (e) {
      console.error(`  [FATAL] Failed to load English baseline: ${enUrl}: ${e.message}`);
      totalErrors++;
      continue;
    }

    for (const locale of LOCALES) {
      const locUrl = `${BASE_URL}/${locale}/${courseSlug}`;
      let locFacts;
      try {
        locFacts = await extractFactsFromCoursePage(page, locUrl);
      } catch (e) {
        console.error(`  [FAIL ${locale.toUpperCase()}] Could not load ${locUrl}: ${e.message}`);
        totalErrors++;
        failureReport.push({ course: courseSlug, locale, error: `Failed to load page: ${e.message}` });
        continue;
      }

      const issues = [];

      const missingPrices = enFacts.uniquePrices.filter(p => !locFacts.uniquePrices.includes(p));
      if (missingPrices.length > 0) {
        issues.push(`Missing prices: $${missingPrices.join(', $')} (Locale had: $${locFacts.uniquePrices.join(', $')})`);
      }

      const missingStrikes = enFacts.strikePrices.filter(p => !locFacts.strikePrices.includes(p));
      if (missingStrikes.length > 0) {
        issues.push(`Missing strike prices: $${missingStrikes.join(', $')} (Locale had: $${locFacts.strikePrices.join(', $')})`);
      }

      if (enFacts.roomTypeCount > 0 && locFacts.roomTypeCount !== enFacts.roomTypeCount) {
        issues.push(`Room types count mismatch: EN=${enFacts.roomTypeCount} vs ${locale}=${locFacts.roomTypeCount}`);
      }

      if (enFacts.primaryDuration && locFacts.primaryDuration !== enFacts.primaryDuration) {
        issues.push(`Duration mismatch: EN=${enFacts.primaryDuration} vs ${locale}=${locFacts.primaryDuration}`);
      }

      if (enFacts.studentCount && locFacts.studentCount && locFacts.studentCount !== enFacts.studentCount) {
        issues.push(`Student count mismatch: EN=${enFacts.studentCount} vs ${locale}=${locFacts.studentCount}`);
      }

      if (enFacts.hasOfferMonths && !locFacts.hasOfferMonths) {
        issues.push(`Offer text months missing in ${locale}`);
      }

      if (enFacts.faqCount > 0 && locFacts.faqCount !== enFacts.faqCount) {
        issues.push(`FAQ count mismatch: EN=${enFacts.faqCount} vs ${locale}=${locFacts.faqCount}`);
      }

      if (Math.abs(enFacts.sectionCount - locFacts.sectionCount) > 2) {
        issues.push(`Section (H2) count mismatch: EN=${enFacts.sectionCount} vs ${locale}=${locFacts.sectionCount}`);
      }

      if (issues.length > 0) {
        totalErrors++;
        console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${locUrl}`);
        issues.forEach(iss => console.error(`       • ${iss}`));
        failureReport.push({ course: courseSlug, locale, issues });
      } else {
        console.log(`  ✅ [PASS ${locale.toUpperCase()}] All facts match English baseline`);
      }
    }
  }

  // ==========================================
  // SECTION 2: APPLY-NOW
  // ==========================================
  console.log(`\n------------------------------------------------------`);
  console.log(`[AUDIT BATCH 2] /apply-now (Durations, Cohorts, WhatsApp, FAQs)`);
  console.log(`------------------------------------------------------`);
  for (const locale of ['en', ...LOCALES]) {
    const url = locale === 'en' ? `${BASE_URL}/apply-now` : `${BASE_URL}/${locale}/apply-now`;
    try {
      const facts = await extractFactsFromApplyNowPage(page, url);
      const issues = [];
      if (!facts.has24Days || !facts.has23Nights) issues.push('Missing 24 Days / 23 Nights duration');
      if (!facts.has12Days || !facts.has11Nights) issues.push('Missing 12 Days / 11 Nights duration');
      if (!facts.has28Days || !facts.has27Nights) issues.push('Missing 28 Days / 27 Nights duration');
      if (!facts.has8to10) issues.push('Missing 8-10 students cohort fact');
      if (!facts.hasValidWhatsApp) issues.push('Missing or invalid WhatsApp +91 7895350563 link');
      if (!facts.hasCourseCards) issues.push('Missing course cards with links');
      if (facts.faqCount < 5) issues.push(`Expected 5 FAQs, found ${facts.faqCount}`);

      if (issues.length > 0) {
        totalErrors++;
        console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${url}`);
        issues.forEach(iss => console.error(`       • ${iss}`));
        failureReport.push({ page: 'apply-now', locale, issues });
      } else {
        console.log(`  ✅ [PASS ${locale.toUpperCase()}] /apply-now facts verified`);
      }
    } catch (e) {
      console.error(`  ❌ [FATAL ${locale.toUpperCase()}] /apply-now failed: ${e.message}`);
      totalErrors++;
      failureReport.push({ page: 'apply-now', locale, error: e.message });
    }
  }

  // ==========================================
  // SECTION 3: ABOUT-SCHOOL
  // ==========================================
  console.log(`\n------------------------------------------------------`);
  console.log(`[AUDIT BATCH 2] /about-school (Founder, 7 Years, Image)`);
  console.log(`------------------------------------------------------`);
  for (const locale of ['en', ...LOCALES]) {
    const url = locale === 'en' ? `${BASE_URL}/about-school` : `${BASE_URL}/${locale}/about-school`;
    try {
      const facts = await extractFactsFromAboutSchoolPage(page, url);
      const issues = [];
      if (!facts.mentionsSachin) issues.push('Founder name Sachin Ji missing');
      if (!facts.mentionsSevenYears) issues.push('7 years teaching experience fact missing');
      if (!facts.hasFounderImage) issues.push('Founder image missing or alt tag altered');

      if (issues.length > 0) {
        totalErrors++;
        console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${url}`);
        issues.forEach(iss => console.error(`       • ${iss}`));
        failureReport.push({ page: 'about-school', locale, issues });
      } else {
        console.log(`  ✅ [PASS ${locale.toUpperCase()}] /about-school facts verified`);
      }
    } catch (e) {
      console.error(`  ❌ [FATAL ${locale.toUpperCase()}] /about-school failed: ${e.message}`);
      totalErrors++;
      failureReport.push({ page: 'about-school', locale, error: e.message });
    }
  }

  // ==========================================
  // SECTION 4: TEACHERS
  // ==========================================
  console.log(`\n------------------------------------------------------`);
  console.log(`[AUDIT BATCH 2] /teachers (2500+, 8+ Years, 8-10, Names, E-RYT 500)`);
  console.log(`------------------------------------------------------`);
  for (const locale of ['en', ...LOCALES]) {
    const url = locale === 'en' ? `${BASE_URL}/teachers` : `${BASE_URL}/${locale}/teachers`;
    try {
      const facts = await extractFactsFromTeachersPage(page, url);
      const issues = [];
      if (!facts.has2500) issues.push('2500+ students trained fact missing');
      if (!facts.has8Years) issues.push('8+ years teaching fact missing');
      if (!facts.has8to10) issues.push('8-10 students batch size fact missing');
      if (facts.missingNames.length > 0) issues.push(`Missing teacher names: ${facts.missingNames.join(', ')}`);
      if (!facts.hasERYT) issues.push('E-RYT 500 qualification missing');

      if (issues.length > 0) {
        totalErrors++;
        console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${url}`);
        issues.forEach(iss => console.error(`       • ${iss}`));
        failureReport.push({ page: 'teachers', locale, issues });
      } else {
        console.log(`  ✅ [PASS ${locale.toUpperCase()}] /teachers facts verified`);
      }
    } catch (e) {
      console.error(`  ❌ [FATAL ${locale.toUpperCase()}] /teachers failed: ${e.message}`);
      totalErrors++;
      failureReport.push({ page: 'teachers', locale, error: e.message });
    }
  }

  // ==========================================
  // SECTION 5: RETREATS (BATCH 3)
  // ==========================================
  console.log(`\n------------------------------------------------------`);
  console.log(`[AUDIT BATCH 3] /retreat, locations & 9 detail pages`);
  console.log(`------------------------------------------------------`);

  const VARKALA_LOCAL = {
    ru: 'Варкала',
    ja: 'ヴァルカラ',
    ko: '바르칼라',
    zh: '瓦尔卡拉'
  };

  // 5.1 Retreat Hub
  for (const locale of ['en', ...LOCALES]) {
    const url = locale === 'en' ? `${BASE_URL}/retreat` : `${BASE_URL}/${locale}/retreat`;
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
      const text = await page.evaluate(() => document.body.innerText);
      const expectedVarkala = VARKALA_LOCAL[locale] || 'Varkala';
      const issues = [];
      if (!text.includes(expectedVarkala)) issues.push(`Missing Varkala local spelling: ${expectedVarkala}`);
      if (!text.includes('Bali') || !text.includes('Rishikesh')) issues.push('Missing Bali or Rishikesh');

      if (issues.length > 0) {
        totalErrors++;
        console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${url}`);
        issues.forEach(iss => console.error(`       • ${iss}`));
        failureReport.push({ page: 'retreat-hub', locale, issues });
      } else {
        console.log(`  ✅ [PASS ${locale.toUpperCase()}] /retreat hub verified`);
      }
    } catch (e) {
      console.error(`  ❌ [FATAL ${locale.toUpperCase()}] /retreat hub failed: ${e.message}`);
      totalErrors++;
      failureReport.push({ page: 'retreat-hub', locale, error: e.message });
    }
  }

  // 5.2 Retreat Location Pages
  for (const location of ['bali', 'rishikesh', 'varkala']) {
    for (const locale of ['en', ...LOCALES]) {
      const url = locale === 'en' ? `${BASE_URL}/retreat/${location}` : `${BASE_URL}/${locale}/retreat/${location}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
        const text = await page.evaluate(() => document.body.innerText);
        const issues = [];
        if (location === 'varkala') {
          const expected = VARKALA_LOCAL[locale] || 'Varkala';
          if (!text.includes(expected)) issues.push(`Missing Varkala local spelling: ${expected}`);
        }
        if (!/3\s*(?:Days?|Tage|Jours?|Días|Giorni|Dagen|Дней|Дня|Hari|日|天)/i.test(text)) {
          issues.push('Missing 3 Days package mention');
        }

        if (issues.length > 0) {
          totalErrors++;
          console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${url}`);
          issues.forEach(iss => console.error(`       • ${iss}`));
          failureReport.push({ page: `retreat-${location}`, locale, issues });
        } else {
          console.log(`  ✅ [PASS ${locale.toUpperCase()}] /retreat/${location} verified`);
        }
      } catch (e) {
        console.error(`  ❌ [FATAL ${locale.toUpperCase()}] /retreat/${location} failed: ${e.message}`);
        totalErrors++;
        failureReport.push({ page: `retreat-${location}`, locale, error: e.message });
      }
    }
  }

  // 5.3 Retreat Detail Pages
  const detailPackages = [
    { locKey: 'bali', dur: '3-days', priceShared: '$299', pricePrivate: '$390' },
    { locKey: 'bali', dur: '7-days', priceShared: '$650', pricePrivate: '$800' },
    { locKey: 'bali', dur: '14-days', priceShared: '$1,250', pricePrivate: '$1,590' },
    { locKey: 'rishikesh', dur: '3-days', priceShared: '$180', pricePrivate: '$260' },
    { locKey: 'rishikesh', dur: '7-days', priceShared: '$390', pricePrivate: '$550' },
    { locKey: 'rishikesh', dur: '14-days', priceShared: '$750', pricePrivate: '$1,050' },
    { locKey: 'varkala', dur: '3-days', priceShared: '$220', pricePrivate: '$320' },
    { locKey: 'varkala', dur: '7-days', priceShared: '$490', pricePrivate: '$690' },
    { locKey: 'varkala', dur: '14-days', priceShared: '$890', pricePrivate: '$1,290' }
  ];

  for (const pkg of detailPackages) {
    for (const locale of ['en', ...LOCALES]) {
      const url = locale === 'en' 
        ? `${BASE_URL}/retreat/${pkg.locKey}/${pkg.dur}` 
        : `${BASE_URL}/${locale}/retreat/${pkg.locKey}/${pkg.dur}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
        const text = await page.evaluate(() => document.body.innerText);
        const issues = [];
        if (!text.includes(pkg.priceShared)) issues.push(`Missing priceShared ${pkg.priceShared}`);
        if (!text.includes(pkg.pricePrivate)) issues.push(`Missing pricePrivate ${pkg.pricePrivate}`);
        if (!/\b12\b/.test(text)) issues.push('Missing group size 12');
        if (pkg.locKey === 'varkala') {
          const expected = VARKALA_LOCAL[locale] || 'Varkala';
          if (!text.includes(expected)) issues.push(`Missing Varkala local spelling: ${expected}`);
        }

        if (issues.length > 0) {
          totalErrors++;
          console.error(`  ❌ [FAIL ${locale.toUpperCase()}] ${url}`);
          issues.forEach(iss => console.error(`       • ${iss}`));
          failureReport.push({ page: `retreat-${pkg.locKey}-${pkg.dur}`, locale, issues });
        } else {
          console.log(`  ✅ [PASS ${locale.toUpperCase()}] /retreat/${pkg.locKey}/${pkg.dur} facts verified`);
        }
      } catch (e) {
        console.error(`  ❌ [FATAL ${locale.toUpperCase()}] /retreat/${pkg.locKey}/${pkg.dur} failed: ${e.message}`);
        totalErrors++;
        failureReport.push({ page: `retreat-${pkg.locKey}-${pkg.dur}`, locale, error: e.message });
      }
    }
  }

  // 5.4 308 Redirects
  console.log(`\n------------------------------------------------------`);
  console.log(`[AUDIT BATCH 3] /retreat/warkala* 308 Redirects`);
  console.log(`------------------------------------------------------`);
  for (const redirectPath of ['/retreat/warkala', '/retreat/warkala/3-days', '/retreat/warkala/7-days', '/retreat/warkala/14-days']) {
    try {
      const res = await fetch(`${BASE_URL}${redirectPath}`, { redirect: 'manual' });
      const location = res.headers.get('location');
      const expected = redirectPath.replace('/warkala', '/varkala');
      if (res.status !== 308 || location !== expected) {
        totalErrors++;
        console.error(`  ❌ [FAIL REDIRECT] ${redirectPath} -> status ${res.status}, location: ${location} (expected 308 to ${expected})`);
        failureReport.push({ page: redirectPath, type: 'redirect', status: res.status, location });
      } else {
        console.log(`  ✅ [PASS REDIRECT 308] ${redirectPath} -> ${location}`);
      }
    } catch (e) {
      totalErrors++;
      console.error(`  ❌ [FATAL REDIRECT] ${redirectPath}: ${e.message}`);
      failureReport.push({ page: redirectPath, type: 'redirect', error: e.message });
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
    console.log(`🎉 100% PARITY! ALL LOCALE COURSE & BATCH 2 PAGES EXACTLY MATCH FACTS!`);
    process.exit(0);
  } else {
    console.error(`❌ FAILED! ${totalErrors} fact mismatches found across audited pages.`);
    process.exit(1);
  }
}

runParityCheck().catch(err => {
  console.error('[FATAL EXCEPTION]', err);
  process.exit(1);
});
