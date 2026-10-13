const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const TARGET_URL = 'https://yogagarhi-git-perf-mobile-lite-step3p-yogagarhi.vercel.app';
const stepLabel = process.argv[2] || 'step-default';
const OUT_DIR = path.resolve(`test-results-psi-${stepLabel}`);
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function fetchHtmlStats(url) {
  return new Promise((resolve) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          uncompressedBytes: Buffer.byteLength(body, 'utf8'),
          hasSmartCrop360: body.includes('hero-mobile-crop-360.avif'),
          hasSmartCrop420: body.includes('hero-mobile-crop-420.avif')
        });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

function parseSeconds(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.]/g, ''));
}

function parseMs(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.]/g, ''));
}

async function runSinglePair(runNum) {
  console.log(`\n======================================================`);
  console.log(`[${stepLabel}] Starting PSI Run #${runNum}/5 (Mobile + Desktop)...`);
  console.log(`======================================================`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1400,1000']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });

  let capturedMobileLh = null;
  let capturedDesktopLh = null;

  page.on('response', async (res) => {
    const url = res.url();
    if (url.includes('batchexecute') || url.includes('pagespeed') || url.includes('lighthouse')) {
      try {
        const text = await res.text();
        if (text.includes('lighthouseVersion')) {
          // Find JSON inside batchexecute
          const match = text.match(/\["wrb\.fr","LsX2he","(.*?)"\s*,\s*null/s);
          if (match && match[1]) {
            try {
              const unesc = JSON.parse(`"${match[1]}"`);
              const payload = JSON.parse(unesc);
              const raw = payload?.[0]?.[0]?.[9];
              if (raw && typeof raw === 'string') {
                const parsedLh = JSON.parse(raw);
                if (parsedLh.configSettings?.formFactor === 'mobile') capturedMobileLh = parsedLh;
                if (parsedLh.configSettings?.formFactor === 'desktop') capturedDesktopLh = parsedLh;
              }
            } catch (e) {}
          }
        }
      } catch (e) {}
    }
  });

  const queryUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(TARGET_URL)}`;
  console.log('Navigating to:', queryUrl);
  await page.goto(queryUrl, { waitUntil: 'domcontentloaded' });

  console.log('Waiting for analysis to complete...');
  await page.waitForSelector('.lh-gauge__percentage', { timeout: 150000 });
  console.log('Analysis finished! Reading metrics...');

  // Dismiss cookie banner
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Got it') || b.textContent.includes('OK') || b.textContent.includes('Accept'));
    if (btn) btn.click();
  });

  await new Promise(r => setTimeout(r, 2000));

  // 1. Read Mobile Tab
  await page.evaluate(() => {
    const mobileBtn = document.querySelector('#mobile_tab, [id*="mobile"], button[aria-controls*="mobile"]') ||
      Array.from(document.querySelectorAll('button, [role="tab"]')).find(t => t.textContent.trim().startsWith('Mobile'));
    if (mobileBtn) mobileBtn.click();
  });
  await new Promise(r => setTimeout(r, 2000));

  const mobileData = await page.evaluate(() => {
    const scores = {};
    document.querySelectorAll('.lh-category-header, .lh-gauge__wrapper').forEach(el => {
      if (el.offsetParent === null) return;
      const label = el.querySelector('.lh-gauge__label')?.textContent?.trim();
      const pct = el.querySelector('.lh-gauge__percentage')?.textContent?.trim();
      if (label && pct) scores[label] = parseInt(pct, 10);
    });

    const metrics = {};
    document.querySelectorAll('.lh-metric').forEach(m => {
      if (m.offsetParent === null) return;
      const title = m.querySelector('.lh-metric__title')?.textContent?.trim();
      const val = m.querySelector('.lh-metric__value')?.textContent?.trim();
      if (title && val) metrics[title] = val;
    });

    const lcpElem = document.querySelector('[id*="largest-contentful-paint-element"]')?.closest('.lh-audit');
    const lcpSnippet = lcpElem?.querySelector('.lh-node__snippet')?.textContent?.trim() ||
      lcpElem?.querySelector('.lh-snippet')?.textContent?.trim() || '';

    return { scores, metrics, lcpSnippet };
  });

  // 2. Read Desktop Tab
  await page.evaluate(() => {
    const desktopBtn = document.querySelector('#desktop_tab, [id*="desktop"], button[aria-controls*="desktop"]') ||
      Array.from(document.querySelectorAll('button, [role="tab"]')).find(t => t.textContent.trim().startsWith('Desktop'));
    if (desktopBtn) desktopBtn.click();
  });
  await new Promise(r => setTimeout(r, 4000));

  const desktopData = await page.evaluate(() => {
    const scores = {};
    document.querySelectorAll('.lh-category-header, .lh-gauge__wrapper').forEach(el => {
      if (el.offsetParent === null) return;
      const label = el.querySelector('.lh-gauge__label')?.textContent?.trim();
      const pct = el.querySelector('.lh-gauge__percentage')?.textContent?.trim();
      if (label && pct) scores[label] = parseInt(pct, 10);
    });

    const metrics = {};
    document.querySelectorAll('.lh-metric').forEach(m => {
      if (m.offsetParent === null) return;
      const title = m.querySelector('.lh-metric__title')?.textContent?.trim();
      const val = m.querySelector('.lh-metric__value')?.textContent?.trim();
      if (title && val) metrics[title] = val;
    });

    return { scores, metrics };
  });

  const mobileScreenshotPath = path.join(OUT_DIR, `mobile-run-${runNum}.png`);
  // Switch back to mobile for screenshot
  await page.evaluate(() => {
    const mobileBtn = document.querySelector('#mobile_tab, [id*="mobile"], button[aria-controls*="mobile"]') ||
      Array.from(document.querySelectorAll('button, [role="tab"]')).find(t => t.textContent.trim().startsWith('Mobile'));
    if (mobileBtn) mobileBtn.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: mobileScreenshotPath, fullPage: false });

  await browser.close();

  const mPerf = capturedMobileLh ? Math.round((capturedMobileLh.categories?.performance?.score || 0) * 100) : (mobileData.scores?.Performance || 0);
  const mLcp = capturedMobileLh ? Number(((capturedMobileLh.audits?.['largest-contentful-paint']?.numericValue || 0) / 1000).toFixed(2)) : parseSeconds(mobileData.metrics?.['Largest Contentful Paint']);
  const mTbt = capturedMobileLh ? Math.round(capturedMobileLh.audits?.['total-blocking-time']?.numericValue || 0) : parseMs(mobileData.metrics?.['Total Blocking Time']);
  const mFcp = capturedMobileLh ? Number(((capturedMobileLh.audits?.['first-contentful-paint']?.numericValue || 0) / 1000).toFixed(2)) : parseSeconds(mobileData.metrics?.['First Contentful Paint']);
  const mSi = capturedMobileLh ? Number(((capturedMobileLh.audits?.['speed-index']?.numericValue || 0) / 1000).toFixed(2)) : parseSeconds(mobileData.metrics?.['Speed Index']);
  const mCls = capturedMobileLh ? Number((capturedMobileLh.audits?.['cumulative-layout-shift']?.numericValue || 0).toFixed(3)) : parseFloat(mobileData.metrics?.['Cumulative Layout Shift'] || '0');
  const mA11y = capturedMobileLh ? Math.round((capturedMobileLh.categories?.accessibility?.score || 0) * 100) : (mobileData.scores?.Accessibility || 0);

  const dPerf = capturedDesktopLh ? Math.round((capturedDesktopLh.categories?.performance?.score || 0) * 100) : (desktopData.scores?.Performance || 0);
  const dLcp = capturedDesktopLh ? Number(((capturedDesktopLh.audits?.['largest-contentful-paint']?.numericValue || 0) / 1000).toFixed(2)) : parseSeconds(desktopData.metrics?.['Largest Contentful Paint']);
  const dTbt = capturedDesktopLh ? Math.round(capturedDesktopLh.audits?.['total-blocking-time']?.numericValue || 0) : parseMs(desktopData.metrics?.['Total Blocking Time']);
  const dFcp = capturedDesktopLh ? Number(((capturedDesktopLh.audits?.['first-contentful-paint']?.numericValue || 0) / 1000).toFixed(2)) : parseSeconds(desktopData.metrics?.['First Contentful Paint']);
  const dSi = capturedDesktopLh ? Number(((capturedDesktopLh.audits?.['speed-index']?.numericValue || 0) / 1000).toFixed(2)) : parseSeconds(desktopData.metrics?.['Speed Index']);
  const dCls = capturedDesktopLh ? Number((capturedDesktopLh.audits?.['cumulative-layout-shift']?.numericValue || 0).toFixed(3)) : parseFloat(desktopData.metrics?.['Cumulative Layout Shift'] || '0');

  console.log(`\nRun #${runNum} RESULTS:`);
  console.log(`  MOBILE:  Score=${mPerf}, LCP=${mLcp}s, TBT=${mTbt}ms, FCP=${mFcp}s, SI=${mSi}s, CLS=${mCls}, A11y=${mA11y}`);
  console.log(`  DESKTOP: Score=${dPerf}, LCP=${dLcp}s, TBT=${dTbt}ms, FCP=${dFcp}s, SI=${dSi}s, CLS=${dCls}`);

  return {
    runNum,
    mobile: {
      perf: mPerf,
      lcp: mLcp,
      tbt: mTbt,
      fcp: mFcp,
      si: mSi,
      cls: mCls,
      a11y: mA11y,
      lcpSnippet: mobileData.lcpSnippet
    },
    desktop: {
      perf: dPerf,
      lcp: dLcp,
      tbt: dTbt,
      fcp: dFcp,
      si: dSi,
      cls: dCls
    }
  };
}

function computeMedian(arr) {
  const valid = arr.filter(x => typeof x === 'number' && !isNaN(x));
  if (!valid.length) return 0;
  const sorted = [...valid].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : Number(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2));
}

async function main() {
  const htmlStats = await fetchHtmlStats(TARGET_URL);
  console.log('Live HTML Stats:', htmlStats);

  const runs = [];
  for (let i = 1; i <= 5; i++) {
    let res = null;
    try {
      res = await runSinglePair(i);
    } catch (e) {
      console.error(`Run #${i} error:`, e.message);
    }
    if (res) runs.push(res);
    if (i < 5) await new Promise(r => setTimeout(r, 4000));
  }

  const mScores = runs.map(r => r.mobile.perf);
  const mLcps = runs.map(r => r.mobile.lcp);
  const mTbts = runs.map(r => r.mobile.tbt);
  const mFcps = runs.map(r => r.mobile.fcp);
  const mSis = runs.map(r => r.mobile.si);
  const mClss = runs.map(r => r.mobile.cls);
  const mA11y = runs.map(r => r.mobile.a11y);

  const dScores = runs.map(r => r.desktop.perf);
  const dLcps = runs.map(r => r.desktop.lcp);
  const dTbts = runs.map(r => r.desktop.tbt);
  const dFcps = runs.map(r => r.desktop.fcp);
  const dSis = runs.map(r => r.desktop.si);
  const dClss = runs.map(r => r.desktop.cls);

  const summary = {
    stepLabel,
    timestamp: new Date().toISOString(),
    htmlStats,
    mobile: {
      scores: mScores,
      medianScore: computeMedian(mScores),
      lcps: mLcps,
      medianLcp: computeMedian(mLcps),
      tbts: mTbts,
      medianTbt: computeMedian(mTbts),
      fcps: mFcps,
      medianFcp: computeMedian(mFcps),
      sis: mSis,
      medianSi: computeMedian(mSis),
      clss: mClss,
      medianCls: computeMedian(mClss),
      medianA11y: computeMedian(mA11y),
      lcpSnippet: runs[0]?.mobile?.lcpSnippet
    },
    desktop: {
      scores: dScores,
      medianScore: computeMedian(dScores),
      lcps: dLcps,
      medianLcp: computeMedian(dLcps),
      tbts: dTbts,
      medianTbt: computeMedian(dTbts),
      fcps: dFcps,
      medianFcp: computeMedian(dFcps),
      sis: dSis,
      medianSi: computeMedian(dSis),
      clss: dClss,
      medianCls: computeMedian(dClss)
    },
    runs
  };

  fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));

  console.log('\n======================================================');
  console.log(`=== FINAL 5x5 SUMMARY [${stepLabel}] ===`);
  console.log('======================================================');
  console.log(`HTML Uncompressed Size: ${htmlStats.uncompressedBytes} bytes`);
  console.log(`MOBILE (5 runs):`);
  console.log(`  Perf Scores: [${mScores.join(', ')}] -> MEDIAN: ${summary.mobile.medianScore}`);
  console.log(`  LCP (s):     [${mLcps.join(', ')}] -> MEDIAN: ${summary.mobile.medianLcp}s`);
  console.log(`  TBT (ms):    [${mTbts.join(', ')}] -> MEDIAN: ${summary.mobile.medianTbt}ms`);
  console.log(`  FCP (s):     [${mFcps.join(', ')}] -> MEDIAN: ${summary.mobile.medianFcp}s`);
  console.log(`  SI (s):      [${mSis.join(', ')}] -> MEDIAN: ${summary.mobile.medianSi}s`);
  console.log(`  CLS:         [${mClss.join(', ')}] -> MEDIAN: ${summary.mobile.medianCls}`);
  console.log(`  A11y Median: ${summary.mobile.medianA11y}`);
  console.log(`  LCP Snippet: ${summary.mobile.lcpSnippet}`);
  console.log(`DESKTOP (5 runs):`);
  console.log(`  Perf Scores: [${dScores.join(', ')}] -> MEDIAN: ${summary.desktop.medianScore}`);
  console.log(`  LCP (s):     [${dLcps.join(', ')}] -> MEDIAN: ${summary.desktop.medianLcp}s`);
  console.log(`  TBT (ms):    [${dTbts.join(', ')}] -> MEDIAN: ${summary.desktop.medianTbt}ms`);
  console.log(`  FCP (s):     [${dFcps.join(', ')}] -> MEDIAN: ${summary.desktop.medianFcp}s`);
  console.log(`  SI (s):      [${dSis.join(', ')}] -> MEDIAN: ${summary.desktop.medianSi}s`);
  console.log(`  CLS:         [${dClss.join(', ')}] -> MEDIAN: ${summary.desktop.medianCls}`);
}

main().catch(console.error);
