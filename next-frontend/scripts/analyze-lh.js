const fs = require('fs');

const runs = ['lh-1.json', 'lh-2.json', 'lh-3.json'];

function identifyScript(url) {
  if (!url) return 'Unknown';
  if (url.includes('googletagmanager.com') || url.includes('gtm')) return 'Google Tag Manager / GA4 / Google Ads (GTM)';
  if (url.includes('connect.facebook.net')) return 'Meta Pixel / Facebook Signals (fbevents.js)';
  if (url.includes('clarity.ms')) return 'Microsoft Clarity (analytics tracking)';
  if (url.includes('localhost:3000')) {
    if (url === 'http://localhost:3000/' || url === 'http://localhost:3000') return 'Inline HTML scripts & Root HTML Document';
    const filename = url.split('/').pop().split('?')[0];
    const p = './.next/static/chunks/' + filename;
    if (fs.existsSync(p)) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes('three.js') || c.includes('Three.js') || c.includes('@react-three')) return `Three.js / React Three Fiber (SacredGeometryBackground 3D) [${filename}]`;
      if (c.includes('react-dom')) return `React 19 / ReactDOM Framework & Initial Client Hydration [${filename}]`;
      if (c.includes('framer-motion')) return `Framer Motion animation library [${filename}]`;
      if (c.includes('lucide')) return `Lucide React Icons [${filename}]`;
      if (c.includes('embla-carousel')) return `Embla Carousel / Slider [${filename}]`;
      return `Next.js App Bundle Chunk [${filename}]`;
    }
    return `Next.js Static Chunk [${filename}]`;
  }
  return url;
}

const summaryTable = [];

runs.forEach((file, index) => {
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const audits = data.audits;
  const cats = data.categories;

  const score = Math.round((cats.performance?.score || 0) * 100);
  const fcp = audits['first-contentful-paint']?.displayValue;
  const lcp = audits['largest-contentful-paint']?.displayValue;
  const tbt = audits['total-blocking-time']?.displayValue;
  const cls = audits['cumulative-layout-shift']?.displayValue;
  const si = audits['speed-index']?.displayValue;

  summaryTable.push({
    Run: `Run ${index + 1}`,
    Score: `${score}/100`,
    FCP: fcp,
    LCP: lcp,
    TBT: tbt,
    CLS: cls,
    'Speed Index': si
  });

  console.log(`\n========================================================`);
  console.log(`              LIGHTHOUSE RESULTS - RUN ${index + 1} (${file})`);
  console.log(`========================================================`);
  console.log(`Performance Score: ${score}/100`);
  console.log(`FCP: ${fcp}`);
  console.log(`LCP: ${lcp}`);
  console.log(`TBT: ${tbt}`);
  console.log(`CLS: ${cls}`);
  console.log(`Speed Index: ${si}`);

  // 2. LCP Element & Breakdown
  console.log(`\n--- 2. LCP ELEMENT & BREAKDOWN ---`);
  const lcpElemAudit = audits['largest-contentful-paint-element'];
  const lcpDetails = lcpElemAudit?.details?.items || [];
  
  // Find node
  const nodeItem = lcpDetails.find(item => item.node);
  if (nodeItem) {
    console.log(`Element Selector: ${nodeItem.node.selector}`);
    console.log(`Element Snippet:  ${nodeItem.node.snippet}`);
  }

  // Find phase breakdown
  const phaseTable = lcpDetails.find(item => item.items && item.items[0]?.phase);
  if (phaseTable) {
    console.log(`\nLCP Timing Breakdown:`);
    phaseTable.items.forEach(p => {
      console.log(`  - ${p.phase.padEnd(14)}: ${p.timing.toFixed(1)} ms (${p.percent})`);
    });
  } else {
    // Check insight
    const lcpInsight = audits['lcp-breakdown-insight']?.details?.items?.[0]?.items;
    if (lcpInsight) {
      console.log(`\nLCP Timing Subparts:`);
      lcpInsight.forEach(p => {
        console.log(`  - ${p.label.padEnd(25)}: ${p.duration.toFixed(1)} ms`);
      });
    }
  }

  // 3. Bootup Time Top 5 JS Files
  console.log(`\n--- 3. TOP 5 JAVASCRIPT FILES (BOOTUP TIME & CPU EXECUTION) ---`);
  const bootup = audits['bootup-time'];
  if (bootup?.details?.items) {
    const top5 = bootup.details.items.filter(i => i.url !== 'Unattributable').slice(0, 5);
    top5.forEach((item, i) => {
      const identity = identifyScript(item.url);
      console.log(`${i + 1}. [${identity}]`);
      console.log(`   URL: ${item.url}`);
      console.log(`   Total CPU Time: ${item.total?.toFixed(1)} ms | Script Eval: ${item.scripting?.toFixed(1)} ms | Parse/Compile: ${item.scriptParseCompile?.toFixed(1)} ms`);
    });
  }

  // Main-Thread Work Breakdown
  console.log(`\n--- MAIN-THREAD WORK BREAKDOWN ---`);
  const mainthread = audits['mainthread-work-breakdown'];
  if (mainthread?.details?.items) {
    mainthread.details.items.forEach(item => {
      console.log(`  - ${(item.groupLabel || item.group).padEnd(30)}: ${item.duration?.toFixed(1)} ms`);
    });
  }
});

console.log(`\n\n========================================================`);
console.log(`                 SUMMARY COMPARISON ACROSS 3 RUNS       `);
console.log(`========================================================`);
console.table(summaryTable);
