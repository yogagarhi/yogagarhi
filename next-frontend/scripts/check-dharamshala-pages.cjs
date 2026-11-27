/**
 * Build verification script for Dharamshala courses.
 * Fails the build if any course feature flag is set to true while
 * [[TODO]], [[CONFIRM_YA_STATUS]], or [[CONFIRM_VENUE]] placeholders remain in its page or component files.
 */
const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '../src/config/dharamshalaConfig.ts');
if (!fs.existsSync(configPath)) {
  console.log('[check-dharamshala-pages] Config file not found. Skipping check.');
  process.exit(0);
}

const configContent = fs.readFileSync(configPath, 'utf8');

function getFlag(name) {
  const match = configContent.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*(true|false)`));
  return match ? match[1] === 'true' : false;
}

const courses = [
  {
    name: '100 Hour Yoga TTC (Dharamshala)',
    flag: 'DHARAMSHALA_100_READY',
    files: [
      path.resolve(__dirname, '../src/app/[locale]/100-hour-yoga-teacher-training-in-dharamshala/page.tsx'),
      path.resolve(__dirname, '../src/components/pages/Course100HourDharamshala.tsx'),
    ]
  },
  {
    name: '200 Hour Yoga TTC (Dharamshala)',
    flag: 'DHARAMSHALA_200_READY',
    files: [
      path.resolve(__dirname, '../src/app/[locale]/200-hour-yoga-teacher-training-in-dharamshala/page.tsx'),
      path.resolve(__dirname, '../src/components/pages/Course200HourDharamshala.tsx'),
    ]
  },
  {
    name: '300 Hour Yoga TTC (Dharamshala)',
    flag: 'DHARAMSHALA_300_READY',
    files: [
      path.resolve(__dirname, '../src/app/[locale]/300-hour-yoga-teacher-training-in-dharamshala/page.tsx'),
      path.resolve(__dirname, '../src/components/pages/Course300HourDharamshala.tsx'),
    ]
  }
];

let hasError = false;

for (const course of courses) {
  const isReady = getFlag(course.flag);
  console.log(`[check-dharamshala-pages] ${course.flag} = ${isReady}`);

  if (isReady) {
    const placeholderRegex = /\[\[(TODO|CONFIRM_YA_STATUS|CONFIRM_VENUE)[^\]]*\]\]/i;
    for (const file of course.files) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const match = content.match(placeholderRegex);
        if (match) {
          console.error(`\n❌ BUILD ERROR: ${course.flag} is true, but file contains placeholder: ${match[0]}`);
          console.error(`File: ${file}`);
          console.error(`Please replace all placeholders before enabling ${course.flag}.\n`);
          hasError = true;
        }
      }
    }
  } else {
    console.log(`[check-dharamshala-pages] ${course.name} is draft (flag = false). Placeholders are permitted.`);
  }
}

if (hasError) {
  process.exit(1);
}

console.log('[check-dharamshala-pages] All Dharamshala page checks passed.');
process.exit(0);
