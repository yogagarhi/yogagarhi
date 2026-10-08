const routes = [
  '/',
  '/100-hour-yoga-teacher-training-in-bali',
  '/100-hour-yoga-teacher-training-in-rishikesh',
  '/200-hour-yoga-teacher-training-in-bali',
  '/200-hour-yoga-teacher-training-in-rishikesh',
  '/300-hour-yoga-teacher-training-in-bali',
  '/about-school',
  '/apply-now',
  '/blogs',
  '/contact-us',
  '/gallery',
  '/payment',
  '/pre-yttc-prep',
  '/privacy-policy',
  '/refund-policy',
  '/retreat',
  '/retreat/bali',
  '/retreat/rishikesh',
  '/retreat/warkala',
  '/retreat/bali/3-days',
  '/retreat/bali/7-days',
  '/retreat/bali/14-days',
  '/retreat/rishikesh/3-days',
  '/retreat/rishikesh/7-days',
  '/retreat/rishikesh/14-days',
  '/retreat/warkala/3-days',
  '/retreat/warkala/7-days',
  '/retreat/warkala/14-days',
  '/sunday-schedule',
  '/teacher-training-foundation',
  '/teachers',
  '/terms-and-conditions',
  '/testimonials',
  '/thank-you',
  '/yoga-anatomy-masterclass',
  '/yoga-anatomy-mastery',
  '/yogic-energy'
];

function cleanUrl(url) {
  if (!url) return '';
  return url.replace(/&amp;/g, '&').trim();
}

async function checkUrl(url) {
  try {
    const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };
    const res = await fetch(url, { method: 'HEAD', headers });
    if (res.status === 200 || res.status === 304) {
      return { url, status: res.status, ok: true };
    }
    const getRes = await fetch(url, { method: 'GET', headers });
    return { url, status: getRes.status, ok: getRes.status === 200 || getRes.status === 304 };
  } catch (err) {
    return { url, status: 'ERROR: ' + err.message, ok: false };
  }
}

async function run() {
  console.log('=== 1. HOMEPAGE HERO & PRELOAD INSPECTION ===');
  const homeRes = await fetch('http://localhost:3000/');
  const homeHtml = await homeRes.text();

  const preloadRegex = /<link[^>]*rel=["']preload["'][^>]*>/gi;
  const preloads = homeHtml.match(preloadRegex) || [];
  console.log(`Preload link(s) on homepage:`);
  preloads.forEach(p => console.log('  ', p));

  const imgRegex = /<img[^>]*hero-yoga-group[^>]*>/gi;
  const heroImgs = homeHtml.match(imgRegex) || [];
  console.log(`\nHero <img> element on homepage:`);
  heroImgs.forEach(img => console.log('  ', img));

  console.log('\n=== 2. EXTRACTING IMAGE URLS ACROSS ALL ROUTES ===');
  const allImageUrls = new Set();
  const pageImageMap = {};

  for (const route of routes) {
    try {
      const pageRes = await fetch(`http://localhost:3000${route}`);
      if (!pageRes.ok) {
        console.error(`Failed to load route: ${route} (${pageRes.status})`);
        continue;
      }
      const html = await pageRes.text();
      const imgs = html.match(/<img[^>]+>/gi) || [];
      pageImageMap[route] = [];

      for (const imgTag of imgs) {
        // Extract src
        const srcMatch = imgTag.match(/src=["']([^"']+)["']/i);
        if (srcMatch && srcMatch[1]) {
          let src = cleanUrl(srcMatch[1]);
          if (src.startsWith('/')) {
            src = `http://localhost:3000${src}`;
          }
          allImageUrls.add(src);
          pageImageMap[route].push(src);
        }

        // Extract srcset urls using regex for URLs ending with width descriptor
        const srcsetMatch = imgTag.match(/srcset=["']([^"']+)["']/i);
        if (srcsetMatch && srcsetMatch[1]) {
          const rawSrcset = cleanUrl(srcsetMatch[1]);
          // Match all URLs in srcset before width descriptors like 640w, 828w, etc.
          const entries = rawSrcset.split(/,\s*(?=https?:\/\/|\/)/);
          for (const entry of entries) {
            const url = entry.trim().split(/\s+/)[0];
            if (url) {
              let fullUrl = url;
              if (fullUrl.startsWith('/')) {
                fullUrl = `http://localhost:3000${fullUrl}`;
              }
              allImageUrls.add(fullUrl);
            }
          }
        }
      }
    } catch (err) {
      console.error(`Error scanning ${route}:`, err.message);
    }
  }

  console.log(`Discovered ${allImageUrls.size} unique image URLs across ${routes.length} pages.`);

  console.log('\n=== 3. RUNNING HTTP AUDIT ON ALL DISCOVERED URLS ===');
  const urlList = Array.from(allImageUrls);
  const results = [];
  const failures = [];

  for (let i = 0; i < urlList.length; i += 15) {
    const chunk = urlList.slice(i, i + 15);
    const chunkResults = await Promise.all(chunk.map(checkUrl));
    for (const r of chunkResults) {
      results.push(r);
      if (!r.ok) {
        failures.push(r);
      }
    }
    process.stdout.write(`Verified ${results.length}/${urlList.length} URLs...\r`);
  }

  console.log(`\n\n=== AUDIT SUMMARY ===`);
  console.log(`Total URLs Audited: ${results.length}`);
  console.log(`Successful (HTTP 200/304): ${results.length - failures.length}`);
  console.log(`Failed (404/Error): ${failures.length}`);

  if (failures.length > 0) {
    console.log('\n--- FAILURES ---');
    failures.forEach(f => console.log(`[${f.status}] ${f.url}`));
  } else {
    console.log('\n[PASS] All image URLs returned HTTP 200 OK! Zero 404s found across all pages.');
  }

  console.log('\n--- SAMPLE TRANSFORMED CLOUDINARY URLS ---');
  const cloudinaryUrls = urlList.filter(u => u.includes('res.cloudinary.com')).slice(0, 5);
  cloudinaryUrls.forEach(u => console.log('  ', u));
}

run();
