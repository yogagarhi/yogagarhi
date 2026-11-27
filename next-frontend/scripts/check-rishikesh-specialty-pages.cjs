/**
 * Build verification script for Rishikesh specialty courses.
 * Fails the build if any course feature flag is set to true while
 * [[TODO]] or [[CONFIRM_YA_STATUS]] placeholders remain in its page or component files.
 */
const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '../src/config/specialtyCoursesConfig.ts');
if (!fs.existsSync(configPath)) {
  console.log('[check-rishikesh-specialty-pages] Config file not found. Skipping check.');
  process.exit(0);
}

const configContent = fs.readFileSync(configPath, 'utf8');

function getFlag(name) {
  const match = configContent.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*(true|false)`));
  return match ? match[1] === 'true' : false;
}

const courses = [
  {
    name: 'Sound Healing Course (Rishikesh)',
    flag: 'SOUND_HEALING_RISHIKESH_READY',
    files: [
      path.resolve(__dirname, '../src/app/[locale]/sound-healing-course-in-rishikesh/page.tsx'),
      path.resolve(__dirname, '../src/components/pages/SoundHealingCourseRishikesh.tsx'),
    ]
  },
  {
    name: 'Kundalini Yoga TTC (Rishikesh)',
    flag: 'KUNDALINI_RISHIKESH_READY',
    files: [
      path.resolve(__dirname, '../src/app/[locale]/200-hour-kundalini-yoga-teacher-training-in-rishikesh/page.tsx'),
      path.resolve(__dirname, '../src/components/pages/CourseKundaliniRishikesh.tsx'),
    ]
  },
  {
    name: 'Prenatal Yoga TTC (Rishikesh)',
    flag: 'PRENATAL_RISHIKESH_READY',
    files: [
      path.resolve(__dirname, '../src/app/[locale]/85-hour-prenatal-yoga-teacher-training-in-rishikesh/page.tsx'),
      path.resolve(__dirname, '../src/components/pages/CoursePrenatalRishikesh.tsx'),
    ]
  }
];

let hasError = false;

for (const course of courses) {
  const isReady = getFlag(course.flag);
  console.log(`[check-specialty-pages] ${course.flag} = ${isReady}`);

  if (isReady) {
    const placeholderRegex = /\[\[(TODO|CONFIRM_YA_STATUS|CONFIRM_INSTRUMENTS)[^\]]*\]\]/i;
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
    console.log(`[check-specialty-pages] ${course.name} is draft (flag = false). Placeholders are permitted.`);
  }
}

if (hasError) {
  process.exit(1);
}

console.log('[check-specialty-pages] All specialty page checks passed.');
process.exit(0);
