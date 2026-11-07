import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3009';
const SCREENSHOT_DIR = path.resolve(__dirname, '..', 'review-screenshots');
const ARTIFACTS_DIR = 'C:\\Users\\rahul\\.gemini\\antigravity\\brain\\23049f2f-21e6-4e84-8724-5972df851040';

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const WIDTHS = [900, 1024, 1100, 1280, 1366, 1440];
const LOCALES = ['en', 'de', 'ru', 'id', 'nl', 'fr'];
const SCREENSHOT_WIDTHS = [1024, 1280];
const SCREENSHOT_LOCALES = ['en', 'de', 'ru', 'id'];

async function runAudit() {
  console.log('================================================================');
  console.log('AUDIT: Logo Visibility & Header Navigation Fit');
  console.log(`Checking widths: ${WIDTHS.join(', ')} px`);
  console.log(`Checking locales: ${LOCALES.join(', ')}`);
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  let violations = 0;
  const modeTable = {};

  for (const locale of LOCALES) {
    modeTable[locale] = {};
    console.log(`\n--- Auditing Locale: [${locale.toUpperCase()}] ---`);
    for (const width of WIDTHS) {
      await page.setViewport({ width, height: 900 });
      await page.goto(`${BASE_URL}/${locale}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for font rendering and adaptive measurements to settle
      await page.evaluate(() => document.fonts?.ready);
      await new Promise(r => setTimeout(r, 400));

      const result = await page.evaluate(() => {
        const header = document.querySelector('header');
        const headerRow = header ? header.querySelector('.flex.items-center.justify-between') : null;
        const logoLink = header ? (header.querySelector('[data-testid="header-logo"]') || header.querySelector('img[alt="YogaGarhi"]')?.closest('a')) : null;
        
        let logoTextSpan = null;
        if (logoLink) {
          const spans = Array.from(logoLink.querySelectorAll('span'));
          logoTextSpan = spans.find(s => s.textContent.trim().includes('YOGAGARHI')) || null;
        }

        const nav = header ? header.querySelector('nav[aria-label="Main Navigation"]') : null;
        const isNavVisible = nav ? (window.getComputedStyle(nav).display !== 'none' && nav.offsetWidth > 0) : false;
        
        let navMode = 'hamburger';
        if (isNavVisible && nav) {
          const ul = nav.querySelector('ul');
          const isCompact = ul && ul.className.includes('py-0.5');
          navMode = isCompact ? 'compact nav' : 'full nav';
        }

        const hamburgerBtn = header ? header.querySelector('button[data-testid="hamburger-btn"]') : null;
        const isHamburgerVisible = hamburgerBtn ? (window.getComputedStyle(hamburgerBtn).display !== 'none' && hamburgerBtn.offsetWidth > 0) : false;

        const ctaBtn = header ? Array.from(header.querySelectorAll('button')).find(b => b.textContent && (
          b.textContent.includes('Journey') ||
          b.textContent.includes('Reise') ||
          b.textContent.includes('путь') ||
          b.textContent.includes('Perjalanan') ||
          b.textContent.includes('Reis') ||
          b.textContent.includes('voyage')
        )) : null;
        const isCtaVisible = ctaBtn ? (window.getComputedStyle(ctaBtn).display !== 'none' && ctaBtn.offsetWidth > 0) : false;

        const logoWidth = logoLink ? logoLink.offsetWidth : 0;
        const logoTextScrollWidth = logoTextSpan ? logoTextSpan.scrollWidth : 0;
        const logoTextClientWidth = logoTextSpan ? logoTextSpan.clientWidth : 0;
        const isLogoTextClipped = logoTextSpan ? (logoTextScrollWidth > logoTextClientWidth + 1) : true;
        
        // Logo must not be squeezed below its design size for this breakpoint
        const minExpectedLogoWidth = 120; // 125-145px between 1024-1279, 175-195px at 1280+
        const isLogoSqueezed = logoWidth < minExpectedLogoWidth;

        let navLogoGap = null;
        let isNavOverlappingLogo = false;
        if (isNavVisible && logoLink && nav) {
          const logoRect = logoLink.getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          navLogoGap = Math.round(navRect.left - logoRect.right);
          if (navLogoGap < 16) {
            isNavOverlappingLogo = true;
          }
        }

        const headerRowScrollWidth = headerRow ? headerRow.scrollWidth : 0;
        const headerRowClientWidth = headerRow ? headerRow.clientWidth : 0;
        const hasHeaderOverflow = headerRowScrollWidth > headerRowClientWidth + 1;

        return {
          logoWidth,
          logoTextScrollWidth,
          logoTextClientWidth,
          isLogoTextClipped,
          isLogoSqueezed,
          isNavVisible,
          navMode,
          isHamburgerVisible,
          isCtaVisible,
          ctaText: ctaBtn ? ctaBtn.textContent.trim() : null,
          navLogoGap,
          isNavOverlappingLogo,
          headerRowScrollWidth,
          headerRowClientWidth,
          hasHeaderOverflow
        };
      });

      modeTable[locale][`${width}px`] = result.navMode;

      const hasError = result.isLogoSqueezed || 
                       result.isLogoTextClipped || 
                       result.isNavOverlappingLogo || 
                       result.hasHeaderOverflow;

      if (hasError) {
        violations++;
        console.error(`❌ [${locale.toUpperCase()}] ${width}px FAIL:`, result);
      } else {
        const gapInfo = result.navLogoGap !== null ? ` | gap: ${result.navLogoGap}px` : '';
        console.log(`✓ [${locale.toUpperCase()}] ${width}px: Logo: ${result.logoWidth}px (unclipped) | Mode: [${result.navMode}]${gapInfo}`);
      }

      // Capture screenshot if in screenshot list
      if (SCREENSHOT_LOCALES.includes(locale) && SCREENSHOT_WIDTHS.includes(width)) {
        const filename = `header-${width}px-${locale}.png`;
        const localPath = path.join(SCREENSHOT_DIR, filename);
        const headerHandle = await page.$('header');
        if (headerHandle) {
          await headerHandle.screenshot({ path: localPath });
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
  console.log('NAVIGATION MODE SUMMARY TABLE:');
  console.log('======================================================');
  console.table(modeTable);
  console.log(`Total Logo & Header Violations: ${violations}`);
  console.log('======================================================\n');
  if (violations > 0) {
    process.exit(1);
  } else {
    console.log('ALL HEADER & LOGO AUDITS PASSED WITH ZERO VIOLATIONS!');
  }
}

runAudit().catch(err => {
  console.error('Fatal error during audit:', err);
  process.exit(1);
});
