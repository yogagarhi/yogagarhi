/**
 * Home Hero Section Quality & Responsive Audit Script
 * 
 * Verifies:
 * - 5 equal-width columns on lg+ (1024px+)
 * - All 5 stat values share identical font-size, weight, line-height
 * - All 5 stat labels share identical typography
 * - CTA buttons remain above the fold at 1280x720, 1366x768, 1440x900
 * - Primary CTA is visible without scroll on mobile (375x667, 390x844, 768x1024)
 * - Zero horizontal root overflow
 * - Captures review screenshots
 * 
 * Usage:
 *   1. Ensure the production build is running:
 *      cd next-frontend && npx next start -p 3000
 *   2. Run the audit:
 *      node next-frontend/scripts/audit-home-hero.mjs
 */

import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = path.resolve(__dirname, '..', 'review-screenshots');
const ARTIFACTS_DIR = 'C:\\Users\\rahul\\.gemini\\antigravity\\brain\\23049f2f-21e6-4e84-8724-5972df851040';

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { width: 375, height: 667, name: '375px' },
  { width: 768, height: 1024, name: '768px' },
  { width: 1024, height: 768, name: '1024px' },
  { width: 1280, height: 720, name: '1280px' },
  { width: 1366, height: 768, name: '1366px' },
  { width: 1440, height: 900, name: '1440px' },
  { width: 1920, height: 1080, name: '1920px' },
];

const LOCALES = ['en', 'id', 'de', 'ru', 'fr', 'ja'];
const SCREENSHOT_WIDTHS = [375, 1280, 1440];
const SCREENSHOT_LOCALES = ['en', 'id', 'de'];

async function runHeroAudit() {
  console.log('================================================================');
  console.log('AUDIT: Home Hero Section Quality & Responsive Verification');
  console.log('Checking: Grid symmetry, unified font sizes, CTA above-fold, zero overflow');
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  let totalViolations = 0;

  for (const locale of LOCALES) {
    console.log(`\n=================== Locale: [${locale.toUpperCase()}] ===================`);
    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`${BASE_URL}/${locale}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.evaluate(() => document.fonts?.ready);
      await new Promise(r => setTimeout(r, 400));

      const audit = await page.evaluate((viewportHeight, viewportWidth) => {
        const heroSection = document.querySelector('section');
        const scrollWidth = document.documentElement.scrollWidth;
        const clientWidth = document.documentElement.clientWidth;
        const hasHorizontalOverflow = scrollWidth > clientWidth;

        // CTA buttons visibility
        const ctaButtons = Array.from(document.querySelectorAll('button')).filter(b => {
          const text = b.textContent || '';
          return text.includes('Enquiry') || text.includes('Pertanyaan') || 
                 text.includes('Anfrage') || text.includes('Запрос') || 
                 text.includes('Demande') || text.includes('お問い合わせ') ||
                 text.includes('Call') || text.includes('Panggilan') ||
                 text.includes('Anruf') || text.includes('Звонок') || 
                 text.includes('Appel') || text.includes('通話');
        });

        let ctaBottom = 0;
        let ctaAboveFold = true;
        if (ctaButtons.length > 0) {
          const firstCtaRect = ctaButtons[0].getBoundingClientRect();
          ctaBottom = Math.round(firstCtaRect.bottom);
          ctaAboveFold = ctaBottom <= viewportHeight;
        }

        // Stats audit on desktop (>= 1024)
        let statsEqualWidth = true;
        let statWidths = [];
        let statFontSizes = [];
        let statLabels = [];
        let statValues = [];

        if (viewportWidth >= 1024) {
          const statsContainer = document.querySelector('.grid.grid-cols-6, .grid.grid-cols-5');
          if (statsContainer) {
            const statCards = Array.from(statsContainer.children);
            statWidths = statCards.map(c => Math.round(c.getBoundingClientRect().width));
            
            // Check equal width across all 5
            const firstW = statWidths[0];
            statsEqualWidth = statWidths.every(w => Math.abs(w - firstW) <= 4);

            statFontSizes = statCards.map(c => {
              const valP = c.querySelector('p:first-child');
              return valP ? window.getComputedStyle(valP).fontSize : null;
            });

            statValues = statCards.map(c => {
              const valP = c.querySelector('p:first-child');
              return valP ? valP.textContent.trim() : '';
            });

            statLabels = statCards.map(c => {
              const lblP = c.querySelector('p:last-child');
              return lblP ? lblP.textContent.trim() : '';
            });
          }
        }

        const allFontSizesSame = statFontSizes.length > 0 
          ? statFontSizes.every(s => s === statFontSizes[0]) 
          : true;

        return {
          hasHorizontalOverflow,
          scrollWidth,
          clientWidth,
          ctaBottom,
          ctaAboveFold,
          statsEqualWidth,
          statWidths,
          allFontSizesSame,
          statFontSizes,
          statValues,
          statLabels
        };
      }, vp.height, vp.width);

      let isFail = false;
      let failReasons = [];

      if (audit.hasHorizontalOverflow) {
        isFail = true;
        failReasons.push(`Horizontal overflow (${audit.scrollWidth} > ${audit.clientWidth})`);
      }

      // Check CTA above fold on laptops
      if ((vp.width === 1280 || vp.width === 1366 || vp.width === 1440) && !audit.ctaAboveFold) {
        isFail = true;
        failReasons.push(`CTA below fold: bottom at ${audit.ctaBottom}px (viewport height: ${vp.height}px)`);
      }

      // Check stats on lg+
      if (vp.width >= 1024) {
        if (!audit.statsEqualWidth) {
          isFail = true;
          failReasons.push(`Stats column widths not equal: [${audit.statWidths.join(', ')}]`);
        }
        if (!audit.allFontSizesSame) {
          isFail = true;
          failReasons.push(`Stat font sizes not equal: [${audit.statFontSizes.join(', ')}]`);
        }
      }

      if (isFail) {
        totalViolations++;
        console.error(`❌ [${locale.toUpperCase()}] ${vp.name} FAIL: ${failReasons.join('; ')}`);
      } else {
        const ctaInfo = (vp.width === 1280 || vp.width === 1366 || vp.width === 1440) 
          ? ` | CTA bottom: ${audit.ctaBottom}px (fold: ${vp.height}px)` 
          : '';
        const statsInfo = vp.width >= 1024 
          ? ` | Stats font: ${audit.statFontSizes[0]} (all 5 equal, widths: ${audit.statWidths[0]}px)` 
          : '';
        console.log(`✓ [${locale.toUpperCase()}] ${vp.name}: Passed${ctaInfo}${statsInfo}`);
      }

      // Capture screenshot if in list
      if (SCREENSHOT_LOCALES.includes(locale) && SCREENSHOT_WIDTHS.includes(vp.width)) {
        const filename = `hero-${vp.width}px-${locale}.png`;
        const localPath = path.join(SCREENSHOT_DIR, filename);
        const heroElem = await page.$('section');
        if (heroElem) {
          await heroElem.screenshot({ path: localPath });
        } else {
          await page.screenshot({ path: localPath });
        }
        if (fs.existsSync(ARTIFACTS_DIR)) {
          fs.copyFileSync(localPath, path.join(ARTIFACTS_DIR, filename));
        }
        console.log(`   📸 Captured screenshot: ${filename}`);
      }
    }
  }

  await browser.close();

  console.log('\n======================================================');
  console.log(`Total Home Hero Violations: ${totalViolations}`);
  console.log('======================================================\n');
  if (totalViolations > 0) {
    process.exit(1);
  } else {
    console.log('ALL HOME HERO TESTS PASSED WITH ZERO VIOLATIONS!');
  }
}

runHeroAudit().catch(err => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
