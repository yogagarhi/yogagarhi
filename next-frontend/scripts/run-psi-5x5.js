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
    https.get(url, (res) => {
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

function extractMetricsFromLh(lh) {
  if (!lh) return null;
  const perfScore = Math.round((lh.categories?.performance?.score || 0) * 100);
  const a11yScore = Math.round((lh.categories?.accessibility?.score || 0) * 100);
  const bpScore = Math.round((lh.categories?.['best-practices']?.score || 0) * 100);
  const seoScore = Math.round((lh.categories?.seo?.score || 0) * 100);

  const fcpMs = lh.audits?.['first-contentful-paint']?.numericValue || 0;
  const lcpMs = lh.audits?.['largest-contentful-paint']?.numericValue || 0;
  const tbtMs = lh.audits?.['total-blocking-time']?.numericValue || 0;
  const siMs = lh.audits?.['speed-index']?.numericValue || 0;
  const clsVal = lh.audits?.['cumulative-layout-shift']?.numericValue || 0;

  const lcpElemItem = lh.audits?.['largest-contentful-paint-element']?.details?.items?.[0];
  const lcpBreakdownItems = lh.audits?.['largest-contentful-paint-element']?.details?.items?.[1]?.items || [];

  return {
    formFactor: lh.configSettings?.formFactor,
    scores: {
      Performance: perfScore,
      Accessibility: a11yScore,
      BestPractices: bpScore,
      SEO: seoScore
    },
    metrics: {
      FCP_s: Number((fcpMs / 1000).toFixed(2)),
      LCP_s: Number((lcpMs / 1000).toFixed(2)),
      TBT_ms: Math.round(tbtMs),
      SI_s: Number((siMs / 1000).toFixed(2)),
      CLS: Number(clsVal.toFixed(3)),
      FCP_display: lh.audits?.['first-contentful-paint']?.displayValue,
      LCP_display: lh.audits?.['largest-contentful-paint']?.displayValue,
      TBT_display: lh.audits?.['total-blocking-time']?.displayValue,
      SI_display: lh.audits?.['speed-index']?.displayValue,
      CLS_display: lh.audits?.['cumulative-layout-shift']?.displayValue
    },
    lcpElement: lcpElemItem?.items?.[0]?.node?.snippet || lcpElemItem?.node?.snippet || 'unknown',
    lcpBreakdown: lcpBreakdownItems
  };
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

  let mobileLh = null;
  let desktopLh = null;

  page.on('response', async (res) => {
    const url = res.url();
    if (url.includes('batchexecute') && url.includes('LsX2he')) {
      try {
        const text = await res.text();
        const lines = text.split('\n');
        for (const line of lines) {
          if (line.startsWith('[') || line.includes('wrb.fr')) {
            try {
              const parsed = JSON.parse(line);
              for (const item of parsed) {
                if (item && item[1] === 'LsX2he' && typeof item[2] === 'string') {
                  const payload = JSON.parse(item[2]);
                  const raw = payload?.[0]?.[0]?.[9];
                  if (raw && typeof raw === 'string' && raw.includes('lighthouseVersion')) {
                    const parsedLh = JSON.parse(raw);
                    const ff = parsedLh.configSettings?.formFactor;
                    if (ff === 'mobile') {
                      mobileLh = parsedLh;
                      const m = extractMetricsFromLh(mobileLh);
                      console.log(`  -> Captured MOBILE Lighthouse JSON (Run #${runNum}): Score=${m.scores.Performance}, LCP=${m.metrics.LCP_s}s, TBT=${m.metrics.TBT_ms}ms, FCP=${m.metrics.FCP_s}s, CLS=${m.metrics.CLS}`);
                    } else if (ff === 'desktop') {
                      desktopLh = parsedLh;
                      const d = extractMetricsFromLh(desktopLh);
                      console.log(`  -> Captured DESKTOP Lighthouse JSON (Run #${runNum}): Score=${d.scores.Performance}, LCP=${d.metrics.LCP_s}s, TBT=${d.metrics.TBT_ms}ms, FCP=${d.metrics.FCP_s}s, CLS=${d.metrics.CLS}`);
                    }
                  }
                }
              }
            } catch (e) {}
          }
        }
      } catch (e) {}
    }
  });

  const queryUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(TARGET_URL)}`;
  await page.goto(queryUrl, { waitUntil: 'domcontentloaded' });

  // Wait up to 150s for both mobileLh and desktopLh to be captured
  const start = Date.now();
  while ((!mobileLh || !desktopLh) && Date.now() - start < 150000) {
    await new Promise(r => setTimeout(r, 1000));
  }

  await new Promise(r => setTimeout(r, 1500));
  await browser.close();

  if (mobileLh) {
    fs.writeFileSync(path.join(OUT_DIR, `mobile-lh-run-${runNum}.json`), JSON.stringify(mobileLh, null, 2));
  }
  if (desktopLh) {
    fs.writeFileSync(path.join(OUT_DIR, `desktop-lh-run-${runNum}.json`), JSON.stringify(desktopLh, null, 2));
  }

  return {
    runNum,
    mobile: extractMetricsFromLh(mobileLh),
    desktop: extractMetricsFromLh(desktopLh)
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
    let attempt = 0;
    let res = null;
    while (attempt < 2 && (!res || !res.mobile || !res.desktop)) {
      attempt++;
      try {
        res = await runSinglePair(i);
      } catch (e) {
        console.error(`Run #${i} attempt ${attempt} error:`, e.message);
      }
      if (!res?.mobile || !res?.desktop) {
        console.log(`Retrying Run #${i} after 5s...`);
        await new Promise(r => setTimeout(r, 5000));
      }
    }
    if (res) runs.push(res);
    if (i < 5) await new Promise(r => setTimeout(r, 4000));
  }

  const mScores = runs.map(r => r.mobile?.scores?.Performance);
  const mLcps = runs.map(r => r.mobile?.metrics?.LCP_s);
  const mTbts = runs.map(r => r.mobile?.metrics?.TBT_ms);
  const mFcps = runs.map(r => r.mobile?.metrics?.FCP_s);
  const mSis = runs.map(r => r.mobile?.metrics?.SI_s);
  const mClss = runs.map(r => r.mobile?.metrics?.CLS);
  const mA11y = runs.map(r => r.mobile?.scores?.Accessibility);

  const dScores = runs.map(r => r.desktop?.scores?.Performance);
  const dLcps = runs.map(r => r.desktop?.metrics?.LCP_s);
  const dTbts = runs.map(r => r.desktop?.metrics?.TBT_ms);
  const dFcps = runs.map(r => r.desktop?.metrics?.FCP_s);
  const dSis = runs.map(r => r.desktop?.metrics?.SI_s);
  const dClss = runs.map(r => r.desktop?.metrics?.CLS);

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
      lcpElement: runs[0]?.mobile?.lcpElement
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
  console.log(`  LCP Element: ${summary.mobile.lcpElement}`);
  console.log(`DESKTOP (5 runs):`);
  console.log(`  Perf Scores: [${dScores.join(', ')}] -> MEDIAN: ${summary.desktop.medianScore}`);
  console.log(`  LCP (s):     [${dLcps.join(', ')}] -> MEDIAN: ${summary.desktop.medianLcp}s`);
  console.log(`  TBT (ms):    [${dTbts.join(', ')}] -> MEDIAN: ${summary.desktop.medianTbt}ms`);
  console.log(`  FCP (s):     [${dFcps.join(', ')}] -> MEDIAN: ${summary.desktop.medianFcp}s`);
  console.log(`  SI (s):      [${dSis.join(', ')}] -> MEDIAN: ${summary.desktop.medianSi}s`);
  console.log(`  CLS:         [${dClss.join(', ')}] -> MEDIAN: ${summary.desktop.medianCls}`);
}

main().catch(console.error);
