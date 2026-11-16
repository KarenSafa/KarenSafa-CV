'use strict';

const translations = {
  en: {
    pageTitle: 'Karen Safa | Student CV & Technology Portfolio',
    metaDescription: 'Student CV for Karen Safa, a Grade 11 Mathematics and Physics student interested in computer science, web development and machine learning.',
    schemaDescription: 'High school student in the Mathematics and Physics track with an interest in computer science, programming, web development and machine learning.',
    skipToContent: 'Skip to content',
    brandHome: 'Karen Safa — home',
    brandSubtitle: 'Student portfolio',
    openNavigation: 'Open navigation',
    primaryNavigation: 'Primary navigation',
    navAbout: 'About',
    navEducation: 'Education',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navContact: 'Contact',
    switchLanguage: 'Switch language',
    languageToggle: 'فارسی',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    heroTechAria: 'Programming and web technologies',
    printCv: 'Print CV',
    heroEyebrow: 'STUDENT · COMPUTER SCIENCE INTERESTS',
    heroName: 'Karen Safa',
    studentSnapshotTitle: 'Profile summary',
    heroTitle: 'Curiosity, code, and a continuous learning mindset.',
    heroLead: 'I’m Karen Safa, a Grade 11 student in the Mathematics and Physics track, building my understanding of programming, web technologies and machine learning.',
    exploreProfile: 'Explore my profile',
    viewEducation: 'View education',
    profileSnapshot: 'Profile snapshot',
    profileSnapshotLabel: 'PROFILE SNAPSHOT',
    studentRole: 'High school student · Mathematics & Physics',
    focusLabel: 'CURRENT FOCUS',
    focusValue: 'Programming & technology',
    learningLabel: 'LEARNING INTERESTS',
    learningValue: 'Web development · Machine learning',
    heroFootnote: 'A student profile built around verified learning and interests.',
    scrollToExplore: 'SCROLL TO EXPLORE',
    aboutKicker: '01 / INTRODUCTION',
    aboutTitle: 'A thoughtful learner, interested in how technology works.',
    aboutBody: 'I am a friendly and well-organized high school student with a strong interest in technology and continuous learning. I enjoy exploring new topics, learning new skills and approaching responsibilities with curiosity and a positive attitude.',
    aboutBodySecondary: 'My current learning path includes programming, web technologies, machine learning and languages. I am continuing to build my technical foundations through continuous learning.',
    aboutNote: 'I value steady progress, responsibility and a practical understanding of the subjects I study.',
    educationKicker: '02 / EDUCATION',
    educationTitle: 'Academic foundation',
    educationIntro: 'A Mathematics and Physics track, supported by an ongoing interest in computer science and technology.',
    currentEducationLabel: 'CURRENT STUDIES',
    highSchoolName: 'Alameh High School',
    highSchoolDetail: 'Mathematics and Physics Track · Grade 11',
    dateCurrent: '2025 – Present',
    educationLocation: 'Iran',
    previousEducationLabel: 'PREVIOUS EDUCATION',
    middleSchoolName: 'Mahdavi Middle School',
    middleSchoolDetail: 'Middle school education',
    datePrevious: '2022 – 2025',
    skillsKicker: '03 / SKILLS & INTERESTS',
    skillsTitle: 'Foundations in progress.',
    skillsIntro: 'The technologies and topics below are listed in the supplied CV. No proficiency ratings are implied.',
    technicalLabel: 'TECHNICAL SKILLS',
    technicalTitle: 'Programming & web',
    technicalDescription: 'Languages and web technologies currently being developed.',
    technicalFootnote: 'Listed as current skills; experience levels are not specified.',
    interestLabel: 'AREAS OF INTEREST',
    interestTitle: 'Topics I explore',
    interestComputerScience: 'Computer science',
    interestWeb: 'Web development',
    interestMl: 'Machine learning',
    personalLabel: 'PERSONAL SKILLS',
    personalTitle: 'How I approach learning',
    personalOrganized: 'Organization',
    personalResponsibility: 'Responsibility',
    personalLearning: 'Continuous learning',
    personalCuriosity: 'Curiosity',
    personalTasks: 'Managing multiple tasks',
    personalPositive: 'Positive attitude',
    learningKicker: '04 / ADDITIONAL LEARNING',
    learningTitle: 'Learning beyond the classroom.',
    learningIntro: 'Topics and learning areas named in the supplied CV.',
    courseDjango: 'Web programming with Django',
    courseDjangoNote: 'Web development learning',
    courseMl: 'Machine learning fundamentals',
    courseMlNote: 'Introductory learning topic',
    courseItalian: 'Italian language',
    courseItalianNote: 'Language learning',
    learningDisclaimer: 'These are presented as learning topics, not as formal certifications. The source CV does not specify providers, dates or certificate details.',
    projectsKicker: '05 / PROJECTS',
    projectsTitle: 'A space for work worth sharing.',
    projectsIntro: 'Personal projects were not included in the supplied CV, so none are presented here as completed work.',
    projectsNextLabel: 'NEXT CHAPTER',
    projectsEmptyTitle: 'Document projects as they take shape.',
    projectsEmptyBody: 'When a project is ready to show, add a short description of its purpose, the tools used and your specific contribution.',
    projectsEmptyStatus: 'READY FOR FUTURE WORK',
    languagesKicker: '06 / LANGUAGES',
    languagesTitle: 'Languages',
    persianLanguage: 'Persian',
    englishLanguage: 'English',
    languageListed: 'Listed in CV',
    languageNote: 'Proficiency levels were not specified in the source CV.',
    contactKicker: '07 / CONTACT',
    contactTitle: 'Start with a thoughtful conversation.',
    contactBody: 'For privacy, personal contact details from the source CV are not displayed on this public page.',
    contactPlaceholderTitle: 'Public contact email',
    contactPlaceholderBody: 'Add a dedicated, approved email address here before publishing.',
    editBeforePublish: 'EDIT BEFORE PUBLISHING',
    footerNote: 'A student profile focused on learning and potential.',
    backToTop: 'Back to top'
  },
  fa: {
    pageTitle: 'کارن صفا | رزومه و نمایه فناوری',
    metaDescription: 'رزومه کارن صفا، دانش‌آموز پایه یازدهم رشته ریاضی و فیزیک با علاقه به علوم کامپیوتر، توسعه وب و یادگیری ماشین.',
    schemaDescription: 'دانش‌آموز دبیرستان در رشته ریاضی و فیزیک، علاقه‌مند به علوم کامپیوتر، برنامه‌نویسی، توسعه وب و یادگیری ماشین.',
    skipToContent: 'رفتن به محتوای اصلی',
    brandHome: 'کارن صفا — صفحه اصلی',
    brandSubtitle: 'نمایه دانش‌آموزی',
    openNavigation: 'باز کردن پیمایش',
    primaryNavigation: 'پیمایش اصلی',
    navAbout: 'درباره من',
    navEducation: 'تحصیلات',
    navSkills: 'مهارت‌ها',
    navProjects: 'پروژه‌ها',
    navContact: 'تماس',
    switchLanguage: 'تغییر زبان',
    languageToggle: 'English',
    switchToDark: 'تغییر به حالت تیره',
    switchToLight: 'تغییر به حالت روشن',
    heroTechAria: 'زبان‌ها و فناوری‌های برنامه‌نویسی و وب',
    printCv: 'چاپ رزومه',
    heroEyebrow: 'دانش‌آموز · علاقه‌مند به علوم کامپیوتر',
    heroName: 'کارن صفا',
    studentSnapshotTitle: 'خلاصه نمایه',
    heroTitle: 'کنجکاوی، کدنویسی و مسیر یادگیری پیوسته',
    heroLead: 'من کارن صفا هستم، دانش‌آموز پایه یازدهم رشته ریاضی و فیزیک؛ در حال گسترش دانش خود در برنامه‌نویسی، فناوری‌های وب و یادگیری ماشین.',
    exploreProfile: 'آشنایی با من',
    viewEducation: 'مشاهده تحصیلات',
    profileSnapshot: 'نمای کلی پروفایل',
    profileSnapshotLabel: 'نمای کلی پروفایل',
    studentRole: 'دانش‌آموز دبیرستان · رشته ریاضی و فیزیک',
    focusLabel: 'تمرکز فعلی',
    focusValue: 'برنامه‌نویسی و فناوری',
    learningLabel: 'حوزه‌های یادگیری',
    learningValue: 'توسعه وب · یادگیری ماشین',
    heroFootnote: 'نمایه‌ای دانش‌آموزی بر پایه اطلاعات و علایق ثبت‌شده.',
    scrollToExplore: 'برای مشاهده بیشتر پیمایش کنید',
    aboutKicker: '۰۱ / معرفی',
    aboutTitle: 'یادگیرنده‌ای کنجکاو با علاقه به سازوکار فناوری',
    aboutBody: 'من دانش‌آموزی خوش‌برخورد و منظم هستم و به فناوری و یادگیری مستمر علاقه دارم. از بررسی موضوعات تازه، یادگیری مهارت‌های جدید و روبه‌رو شدن با مسئولیت‌ها با کنجکاوی و نگرش مثبت استقبال می‌کنم.',
    aboutBodySecondary: 'مسیر یادگیری فعلی من شامل برنامه‌نویسی، فناوری‌های وب، یادگیری ماشین و زبان‌هاست. با یادگیری مستمر، به تقویت پایه‌های فنی خود ادامه می‌دهم.',
    aboutNote: 'برای پیشرفت پیوسته، مسئولیت‌پذیری و درک کاربردی موضوعاتی که می‌آموزم ارزش قائلم.',
    educationKicker: '۰۲ / تحصیلات',
    educationTitle: 'پایه آموزشی',
    educationIntro: 'تحصیل در رشته ریاضی و فیزیک همراه با علاقه مستمر به علوم کامپیوتر و فناوری.',
    currentEducationLabel: 'تحصیلات فعلی',
    highSchoolName: 'دبیرستان علامه',
    highSchoolDetail: 'رشته ریاضی و فیزیک · پایه یازدهم',
    dateCurrent: '۱۴۰۴ تا کنون',
    educationLocation: 'ایران',
    previousEducationLabel: 'تحصیلات پیشین',
    middleSchoolName: 'مدرسه راهنمایی مهدوی',
    middleSchoolDetail: 'دوره تحصیلات راهنمایی',
    datePrevious: '۱۴۰۱ تا ۱۴۰۴',
    skillsKicker: '۰۳ / مهارت‌ها و علایق',
    skillsTitle: 'در مسیر تقویت پایه‌های فنی',
    skillsIntro: 'فناوری‌ها و موضوعات زیر در رزومه ارائه‌شده ذکر شده‌اند. سطح تسلط مشخص نشده است.',
    technicalLabel: 'مهارت‌های فنی',
    technicalTitle: 'برنامه‌نویسی و وب',
    technicalDescription: 'زبان‌ها و فناوری‌های وب که در حال یادگیری و توسعه آن‌ها هستم.',
    technicalFootnote: 'این موارد به‌عنوان مهارت‌های فعلی ذکر شده‌اند؛ سطح تجربه مشخص نشده است.',
    interestLabel: 'حوزه‌های مورد علاقه',
    interestTitle: 'موضوعاتی که دنبال می‌کنم',
    interestComputerScience: 'علوم کامپیوتر',
    interestWeb: 'توسعه وب',
    interestMl: 'یادگیری ماشین',
    personalLabel: 'مهارت‌های فردی',
    personalTitle: 'رویکرد من به یادگیری',
    personalOrganized: 'نظم و سازمان‌دهی',
    personalResponsibility: 'مسئولیت‌پذیری',
    personalLearning: 'یادگیری مستمر',
    personalCuriosity: 'کنجکاوی',
    personalTasks: 'مدیریت هم‌زمان چند فعالیت',
    personalPositive: 'نگرش مثبت',
    learningKicker: '۰۴ / آموزش‌های تکمیلی',
    learningTitle: 'یادگیری فراتر از کلاس درس',
    learningIntro: 'موضوعات و حوزه‌های یادگیری ذکرشده در رزومه ارائه‌شده.',
    courseDjango: 'برنامه‌نویسی وب با چارچوب Django',
    courseDjangoNote: 'یادگیری توسعه وب',
    courseMl: 'مبانی یادگیری ماشین',
    courseMlNote: 'موضوع آموزشی مقدماتی',
    courseItalian: 'زبان ایتالیایی',
    courseItalianNote: 'یادگیری زبان',
    learningDisclaimer: 'این موارد به‌عنوان موضوعات یادگیری ارائه شده‌اند، نه گواهی‌نامه رسمی. در رزومه اصلی نام برگزارکننده، تاریخ یا جزئیات گواهی‌نامه‌ها ذکر نشده است.',
    projectsKicker: '۰۵ / پروژه‌ها',
    projectsTitle: 'فضایی برای ارائه کارهای قابل‌نمایش',
    projectsIntro: 'در رزومه ارائه‌شده پروژه شخصی ثبت نشده است؛ بنابراین در این بخش پروژه‌ای به‌عنوان کار تکمیل‌شده معرفی نمی‌شود.',
    projectsNextLabel: 'گام بعدی',
    projectsEmptyTitle: 'پروژه‌ها را هم‌زمان با شکل‌گیری مستند کنید.',
    projectsEmptyBody: 'هنگامی که پروژه‌ای آماده ارائه شد، توضیح کوتاهی درباره هدف، ابزارهای استفاده‌شده و سهم مشخص خود در انجام آن اضافه کنید.',
    projectsEmptyStatus: 'آماده برای کارهای آینده',
    languagesKicker: '۰۶ / زبان‌ها',
    languagesTitle: 'زبان‌ها',
    persianLanguage: 'فارسی',
    englishLanguage: 'انگلیسی',
    languageListed: 'ذکرشده در رزومه',
    languageNote: 'سطح تسلط به زبان‌ها در رزومه اصلی مشخص نشده است.',
    contactKicker: '۰۷ / تماس',
    contactTitle: 'آغاز یک گفت‌وگوی سازنده',
    contactBody: 'برای حفظ حریم خصوصی، اطلاعات تماس شخصی درج‌شده در رزومه اصلی در این صفحه عمومی نمایش داده نمی‌شود.',
    contactPlaceholderTitle: 'ایمیل عمومی برای ارتباط',
    contactPlaceholderBody: 'پیش از انتشار، یک نشانی ایمیل جداگانه و مورد تأیید را اینجا وارد کنید.',
    editBeforePublish: 'پیش از انتشار ویرایش شود',
    footerNote: 'نمایه‌ای دانش‌آموزی با تمرکز بر یادگیری و رشد.',
    backToTop: 'بازگشت به بالا'
  }
};

const root = document.documentElement;
const languageButton = document.querySelector('.language-toggle');
const themeButton = document.querySelector('.theme-toggle');
const printButton = document.querySelector('.print-button');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');
const languageStatus = document.getElementById('language-status');
const metaDescription = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');
const ogUrl = document.querySelector('meta[property="og:url"]');
const canonicalLink = document.querySelector('link[rel="canonical"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');

function readPreference(key) {
  try { return window.localStorage.getItem(key); }
  catch (error) { return null; }
}

function savePreference(key, value) {
  try { window.localStorage.setItem(key, value); }
  catch (error) { /* Preferences remain usable for this visit if storage is unavailable. */ }
}

function setLanguage(language, announce = false) {
  const selectedLanguage = language === 'fa' ? 'fa' : 'en';
  const content = translations[selectedLanguage];
  root.lang = selectedLanguage;
  root.dir = selectedLanguage === 'fa' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(content, key)) element.textContent = content[key];
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (Object.prototype.hasOwnProperty.call(content, key)) element.setAttribute('aria-label', content[key]);
  });

  document.title = content.pageTitle;
  metaDescription?.setAttribute('content', content.metaDescription);
  ogTitle?.setAttribute('content', content.pageTitle);
  ogDescription?.setAttribute('content', content.metaDescription);
  ogLocale?.setAttribute('content', selectedLanguage === 'fa' ? 'fa_IR' : 'en_US');
  const languageUrl = `https://your-domain.example/?lang=${selectedLanguage}`;
  ogUrl?.setAttribute('content', languageUrl);
  canonicalLink?.setAttribute('href', languageUrl);
  twitterTitle?.setAttribute('content', content.pageTitle);
  twitterDescription?.setAttribute('content', content.metaDescription);
  ogImageAlt?.setAttribute('content', selectedLanguage === 'fa' ? 'کارن صفا — رزومه دانش‌آموزی و علایق فناوری' : 'Karen Safa — student CV and technology interests');
  if (themeButton) {
    const themeLabel = root.dataset.theme === 'dark' ? content.switchToLight : content.switchToDark;
    themeButton.setAttribute('aria-label', themeLabel);
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Karen Safa',
    description: content.schemaDescription,
    jobTitle: selectedLanguage === 'fa' ? 'دانش‌آموز دبیرستان' : 'High school student',
    url: `https://your-domain.example/?lang=${selectedLanguage}`, 
    knowsAbout: ['Computer science', 'Programming', 'Python', 'HTML', 'CSS', 'JavaScript', 'Web development', 'Machine learning']
  };
  const schemaElement = document.getElementById('person-schema');
  if (schemaElement) schemaElement.textContent = JSON.stringify(schema);

  savePreference('karen-cv-language', selectedLanguage);
  if (announce && languageStatus) languageStatus.textContent = selectedLanguage === 'fa' ? 'زبان صفحه فارسی شد.' : 'Page language set to English.';
  closeNavigation();
}

function applyTheme(theme) {
  const selectedTheme = theme === 'dark' ? 'dark' : 'light';
  root.dataset.theme = selectedTheme;
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(selectedTheme === 'dark'));
    themeButton.setAttribute('aria-label', translations[root.lang === 'fa' ? 'fa' : 'en'][selectedTheme === 'dark' ? 'switchToLight' : 'switchToDark']);
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute('content', selectedTheme === 'dark' ? '#0c1320' : '#f5f7fb');
}

function closeNavigation() {
  if (!navigation || !menuButton) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

languageButton?.addEventListener('click', () => {
  setLanguage(root.lang === 'fa' ? 'en' : 'fa', true);
});

themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  savePreference('karen-cv-theme', nextTheme);
});

printButton?.addEventListener('click', () => window.print());

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('is-open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});
document.addEventListener('click', (event) => {
  if (!navigation || !menuButton || !navigation.classList.contains('is-open')) return;
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeNavigation();
});

const queryLanguage = new URLSearchParams(window.location.search).get('lang');
const storedLanguage = readPreference('karen-cv-language');
setLanguage(queryLanguage === 'fa' || queryLanguage === 'en' ? queryLanguage : (storedLanguage || 'en'));

const storedTheme = readPreference('karen-cv-theme');
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
applyTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

if (!storedTheme && window.matchMedia) {
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener?.('change', (event) => {
    if (!readPreference('karen-cv-theme')) applyTheme(event.matches ? 'dark' : 'light');
  });
}
