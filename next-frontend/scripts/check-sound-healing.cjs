const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '../src/config/soundHealingConfig.ts');
const targetFiles = [
  path.resolve(__dirname, '../src/components/pages/SoundHealingCertificationRishikesh.tsx'),
  path.resolve(__dirname, '../src/app/[locale]/sound-healing-certification-in-rishikesh/page.tsx'),
  path.resolve(__dirname, '../src/constants/soundHealingData.ts'),
];

if (!fs.existsSync(configPath)) {
  console.log('[check-sound-healing] Config file not found, skipping check.');
  process.exit(0);
}

const configContent = fs.readFileSync(configPath, 'utf8');
const isReadyMatch = configContent.match(/export\s+const\s+SOUND_HEALING_PAGE_READY\s*=\s*(true|false)/);
const isReady = isReadyMatch ? isReadyMatch[1] === 'true' : false;

console.log(`[check-sound-healing] SOUND_HEALING_PAGE_READY = ${isReady}`);

if (!isReady) {
  console.log('[check-sound-healing] Page is marked not ready (SOUND_HEALING_PAGE_READY = false). Placeholders are permitted.');
  process.exit(0);
}

// When SOUND_HEALING_PAGE_READY === true, ensure ZERO [PLACEHOLDER] strings remain
// Placeholders are uppercase letters enclosed in square brackets, e.g. [PRICE], [CERTIFICATE NAME], etc.
const placeholderRegex = /\[[A-Z][A-Z0-9_\s/'-]+\]/g;
let foundPlaceholders = [];

for (const filePath of targetFiles) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(placeholderRegex);
    if (matches && matches.length > 0) {
      foundPlaceholders.push({ file: path.basename(filePath), placeholders: matches });
    }
  }
}

if (foundPlaceholders.length > 0) {
  console.error('\n======================================================');
  console.error('BUILD ERROR: SOUND_HEALING_PAGE_READY is set to true,');
  console.error('but unconfirmed [PLACEHOLDER] items still remain in code:');
  console.error('======================================================');
  for (const item of foundPlaceholders) {
    console.error(`In ${item.file}:`);
    for (const ph of item.placeholders) {
      console.error(` - ${ph}`);
    }
  }
  console.error('\nPlease replace all placeholders with confirmed details before enabling SOUND_HEALING_PAGE_READY.\n');
  process.exit(1);
}

console.log('[check-sound-healing] Validation passed: Zero placeholders found with SOUND_HEALING_PAGE_READY = true.');
process.exit(0);
