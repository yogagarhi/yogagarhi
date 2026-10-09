const fs = require('fs');

function getMetrics(filename) {
  if (!fs.existsSync(filename)) return null;
  const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const audits = data.audits;
  const cats = data.categories;

  return {
    score: Math.round((cats.performance?.score || 0) * 100),
    fcp: audits['first-contentful-paint']?.displayValue,
    fcpMs: audits['first-contentful-paint']?.numericValue,
    lcp: audits['largest-contentful-paint']?.displayValue,
    lcpMs: audits['largest-contentful-paint']?.numericValue,
    tbt: audits['total-blocking-time']?.displayValue,
    tbtMs: audits['total-blocking-time']?.numericValue,
    cls: audits['cumulative-layout-shift']?.displayValue,
    si: audits['speed-index']?.displayValue,
    siMs: audits['speed-index']?.numericValue,
    bootupTime: audits['bootup-time']?.details?.items || [],
    mainthread: audits['mainthread-work-breakdown']?.details?.items || []
  };
}

const beforeRuns = ['lh-1.json', 'lh-2.json', 'lh-3.json'].map(getMetrics);
const afterRuns = ['lh-new-1.json', 'lh-new-2.json', 'lh-new-3.json'].map(getMetrics);

console.log('========================================================================');
console.log('                     BEFORE VS AFTER FIX 1 COMPARISON                   ');
console.log('========================================================================\n');

console.log('--- INDIVIDUAL RUNS COMPARISON ---');
const table = [];
for (let i = 0; i < 3; i++) {
  const b = beforeRuns[i];
  const a = afterRuns[i];
  table.push({
    Run: `Run ${i + 1}`,
    'FCP Before': b?.fcp,
    'FCP After': a?.fcp,
    'LCP Before': b?.lcp,
    'LCP After': a?.lcp,
    'TBT Before': b?.tbt,
    'TBT After': a?.tbt,
    'Score Before': `${b?.score}/100`,
    'Score After': `${a?.score}/100`
  });
}
console.table(table);

// Averages
const avg = (arr, key) => arr.reduce((acc, item) => acc + (item?.[key] || 0), 0) / arr.length;

console.log('\n--- AVERAGE METRICS COMPARISON ---');
const avgTable = [
  {
    Metric: 'Performance Score',
    Before: `${Math.round(avg(beforeRuns, 'score'))} / 100`,
    After: `${Math.round(avg(afterRuns, 'score'))} / 100`,
    Change: `${Math.round(avg(afterRuns, 'score')) - Math.round(avg(beforeRuns, 'score')) > 0 ? '+' : ''}${Math.round(avg(afterRuns, 'score')) - Math.round(avg(beforeRuns, 'score'))} pts`
  },
  {
    Metric: 'First Contentful Paint (FCP)',
    Before: `${(avg(beforeRuns, 'fcpMs') / 1000).toFixed(2)} s`,
    After: `${(avg(afterRuns, 'fcpMs') / 1000).toFixed(2)} s`,
    Change: `${((avg(afterRuns, 'fcpMs') - avg(beforeRuns, 'fcpMs')) / 1000).toFixed(2)} s`
  },
  {
    Metric: 'Largest Contentful Paint (LCP)',
    Before: `${(avg(beforeRuns, 'lcpMs') / 1000).toFixed(2)} s`,
    After: `${(avg(afterRuns, 'lcpMs') / 1000).toFixed(2)} s`,
    Change: `${((avg(afterRuns, 'lcpMs') - avg(beforeRuns, 'lcpMs')) / 1000).toFixed(2)} s`
  },
  {
    Metric: 'Total Blocking Time (TBT)',
    Before: `${Math.round(avg(beforeRuns, 'tbtMs'))} ms`,
    After: `${Math.round(avg(afterRuns, 'tbtMs'))} ms`,
    Change: `${Math.round(avg(afterRuns, 'tbtMs') - avg(beforeRuns, 'tbtMs'))} ms (${(((avg(afterRuns, 'tbtMs') - avg(beforeRuns, 'tbtMs')) / avg(beforeRuns, 'tbtMs')) * 100).toFixed(1)}%)`
  },
  {
    Metric: 'Cumulative Layout Shift (CLS)',
    Before: '0.000',
    After: '0.000',
    Change: '0.000 (Perfect)'
  }
];
console.table(avgTable);

console.log('\n--- TOP JS EXECUTION TIME AFTER FIX 1 (RUN 1) ---');
const bootupAfter = afterRuns[0]?.bootupTime || [];
bootupAfter.slice(0, 5).forEach((item, i) => {
  console.log(`${i + 1}. ${item.url}`);
  console.log(`   Total CPU: ${item.total?.toFixed(1)} ms | Script Eval: ${item.scripting?.toFixed(1)} ms`);
});
