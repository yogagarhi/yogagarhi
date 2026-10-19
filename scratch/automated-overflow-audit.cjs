const path = require('path');
const puppeteer = require(path.join(__dirname, '../next-frontend/node_modules/puppeteer-core'));
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const LOCALES = ['en', 'de', 'fr', 'es', 'it', 'nl', 'ru', 'id', 'ja', 'ko', 'zh'];
const WIDTHS = [320, 375, 390, 412, 768, 1024, 1280, 1366, 1440, 1536, 1920];

const PAGES = [
  { name: 'home', path: '' },
  { name: '200hr', path: '/200-hour-yoga-teacher-training-in-bali' }
];

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const allIssues = [];

  for (const loc of LOCALES) {
    for (const p of PAGES) {
      const url = `http://localhost:3000/${loc}${p.path}`;
      console.log(`\nTesting ${loc} - ${p.name} (${url})`);

      try {
        await page.setViewport({ width: 1440, height: 900 });
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(r => setTimeout(r, 600));

        // Click open accordions, tabs, details
        await page.evaluate(() => {
          // Open details
          document.querySelectorAll('details').forEach(d => d.open = true);
          // Open Radix / custom accordions if any
          document.querySelectorAll('[data-state="closed"]').forEach(el => {
            if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button') {
              try { el.click(); } catch(e){}
            }
          });
        });
        await new Promise(r => setTimeout(r, 300));

        // Now test each viewport width
        for (const w of WIDTHS) {
          await page.setViewport({ width: w, height: 900 });
          await new Promise(r => setTimeout(r, 150));

          const pageIssues = await page.evaluate((width, locale, pageName) => {
            const issues = [];

            // 1. Check document horizontal overflow
            const docEl = document.documentElement;
            const body = document.body;
            const docScroll = Math.max(docEl.scrollWidth, body.scrollWidth);
            if (docScroll > width + 2) {
              issues.push({
                locale,
                page: pageName,
                width,
                element: 'PAGE_HORIZONTAL_SCROLL',
                type: 'document-overflow',
                snippet: `docScroll: ${docScroll}px vs viewport: ${width}px (diff: ${docScroll - width}px)`
              });
            }

            // 2. Scan text-bearing elements
            const allElements = document.querySelectorAll('header, main, section, footer, div, p, span, h1, h2, h3, h4, h5, h6, a, button, [role="button"], [role="tab"]');
            
            for (const el of allElements) {
              // Ignore hidden / zero-size elements
              const rect = el.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) continue;
              if (rect.bottom < 0 || rect.top > 20000) continue; // within reasonable page boundaries

              const style = window.getComputedStyle(el);
              if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;

              // Skip screen-reader only elements
              if (el.classList.contains('sr-only') || el.closest('.sr-only')) continue;

              // Check if element has text content
              const hasDirectText = Array.from(el.childNodes).some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
              const text = (el.innerText || el.textContent || '').trim();
              if (!text) continue;

              // Skip slider/carousel tracks, marquee, overflow-x-auto containers intentionally designed to scroll
              const isScrollContainer = style.overflowX === 'auto' || style.overflowX === 'scroll' || el.classList.contains('overflow-x-auto') || el.classList.contains('swiper-wrapper');
              
              // A. Check CSS text-overflow: ellipsis or line-clamp
              const isEllipsis = style.textOverflow === 'ellipsis';
              const lineClamp = style.webkitLineClamp || style.lineClamp;
              const hasLineClamp = lineClamp && lineClamp !== 'none';

              // If ellipsis or lineClamp is active, check if text is actually being cut off or if it forces truncation
              if (isEllipsis || hasLineClamp) {
                if (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1 || isEllipsis) {
                  const tag = el.tagName.toLowerCase();
                  const cls = (el.className && typeof el.className === 'string') ? el.className.split(' ').slice(0, 3).join('.') : '';
                  issues.push({
                    locale,
                    page: pageName,
                    width,
                    element: `${tag}.${cls}`,
                    type: isEllipsis ? 'text-overflow:ellipsis' : `line-clamp:${lineClamp}`,
                    snippet: text.slice(0, 60)
                  });
                  continue;
                }
              }

              // B. Check overflow: hidden with scrollWidth > clientWidth (horizontal cutoff)
              const hidesOverflowX = style.overflowX === 'hidden' || style.overflowX === 'clip';
              if (hidesOverflowX && !isScrollContainer) {
                if (el.scrollWidth > el.clientWidth + 2) {
                  const tag = el.tagName.toLowerCase();
                  if (['html', 'body', 'main', 'header', 'nav'].includes(tag)) continue;
                  if (el.children.length > 5 && !hasDirectText) continue;

                  const cls = (el.className && typeof el.className === 'string') ? el.className.split(' ').slice(0, 3).join('.') : '';
                  issues.push({
                    locale,
                    page: pageName,
                    width,
                    element: `${tag}.${cls}`,
                    type: 'overflow-hidden-horizontal-cutoff',
                    snippet: text.slice(0, 60) + ` (scrollW: ${el.scrollWidth} > clientW: ${el.clientWidth})`
                  });
                }
              }

              // C. Check buttons, badges, tabs, pills for overflowing text
              const isInteractive = ['BUTTON', 'A'].includes(el.tagName) || el.getAttribute('role') === 'button' || el.getAttribute('role') === 'tab';
              if (isInteractive && style.position !== 'fixed') {
                if (el.scrollWidth > el.clientWidth + 1) {
                  const tag = el.tagName.toLowerCase();
                  const cls = (el.className && typeof el.className === 'string') ? el.className.split(' ').slice(0, 3).join('.') : '';
                  issues.push({
                    locale,
                    page: pageName,
                    width,
                    element: `${tag}.${cls}`,
                    type: 'button-badge-overflow',
                    snippet: text.slice(0, 60) + ` (scrollW: ${el.scrollWidth} > clientW: ${el.clientWidth})`
                  });
                }
              }
            }

            return issues;
          }, w, loc, p.name);

          if (pageIssues.length > 0) {
            console.log(`  [w=${w}px] Found ${pageIssues.length} issues`);
            for (const issue of pageIssues) {
              allIssues.push(issue);
            }
          }
        }
      } catch (err) {
        console.error(`Error auditing ${loc} - ${p.name}:`, err.message);
      }
    }
  }

  await browser.close();

  // Save report
  fs.writeFileSync('scratch/overflow-audit-report.json', JSON.stringify(allIssues, null, 2));
  console.log(`\nAudit finished! Total issues recorded: ${allIssues.length}`);
}

runAudit().catch(e => {
  console.error(e);
  process.exit(1);
});
