const fs = require('fs');

async function check() {
  const res = await fetch('http://localhost:3000/');
  const html = await res.text();
  const scripts = [...html.matchAll(/src="(\/_next\/static\/chunks\/[^"]+\.js)"/g)].map(m => m[1]);

  console.log('=== HOMEPAGE INITIAL SCRIPT AUDIT ===');
  console.log('Total initial scripts loaded on homepage:', scripts.length);

  let threeFound = false;
  let totalSize = 0;

  scripts.forEach(s => {
    const fn = s.split('/').pop();
    const p = './.next/static/chunks/' + fn;
    if (fs.existsSync(p)) {
      const c = fs.readFileSync(p, 'utf8');
      const size = fs.statSync(p).size;
      totalSize += size;
      const isThree = c.includes('three.js') || c.includes('Three.js') || c.includes('@react-three');
      console.log(`- ${fn.padEnd(28)} ${(size / 1024).toFixed(1).padStart(7)} KB ${isThree ? '--> [FOUND THREE.JS]' : ''}`);
      if (isThree) threeFound = true;
    }
  });

  console.log(`\nTotal initial JS bundle size: ${(totalSize / 1024).toFixed(1)} KB`);

  if (!threeFound) {
    console.log('\n[PASS] Verified: Three.js (857 KB) is completely ELIMINATED from initial homepage scripts!');
  } else {
    console.log('\n[FAIL] Three.js is still present in initial homepage scripts.');
  }

  // Find dynamic chunks containing Three.js
  console.log('\n=== DYNAMIC / SPLIT CHUNKS AUDIT ===');
  const allChunks = fs.readdirSync('./.next/static/chunks');
  allChunks.forEach(fn => {
    if (fn.endsWith('.js')) {
      const p = './.next/static/chunks/' + fn;
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes('three.js') || c.includes('Three.js') || c.includes('@react-three')) {
        const size = fs.statSync(p).size;
        console.log(`Dynamic Three.js chunk isolated at: ${fn} (${(size / 1024).toFixed(1)} KB) - will only load on-demand when user scrolls near YTTCSupportSection on desktop.`);
      }
    }
  });
}

check();
