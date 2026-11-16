/* =========================================================
   Karen Safa — Student CV · app.js (vanilla JavaScript)
   - English text lives in index.html (good for SEO).
   - Persian text lives in the FA dictionary below.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Settings you can edit ---------- */
  var CONFIG = {
    // Privacy by design: your phone number is NOT published by default.
    // To show it on the site and the printed CV, enter it here, e.g. '+98 912 000 0000'.
    phone: '',
    defaultLanguage: 'en' // 'en' or 'fa' for first-time visitors
  };

  /* ---------- Persian (Farsi) translations ---------- */
  var FA = {
    'meta.title': 'کارن صفا — رزومه دانش‌آموزی | علوم کامپیوتر و مهندسی نرم‌افزار',
    'meta.description': 'رزومه کارن صفا، دانش‌آموز پایه یازدهم رشته ریاضی و فیزیک در کرمان، علاقه‌مند به علوم کامپیوتر، توسعه وب و یادگیری ماشین.',
    'skip': 'پرش به محتوای اصلی',
    'nav.label': 'منوی اصلی',
    'nav.brand': 'کارن صفا — بازگشت به بالا',
    'nav.menu': 'باز کردن منو',
    'nav.about': 'درباره من',
    'nav.education': 'تحصیلات',
    'nav.skills': 'مهارت‌ها',
    'nav.projects': 'پروژه‌ها',
    'nav.courses': 'دوره‌ها',
    'nav.languages': 'زبان‌ها',
    'nav.contact': 'تماس',
    'action.print': 'چاپ رزومه',
    'action.langShort': 'EN',
    'action.langLabel': 'تغییر زبان به انگلیسی',
    'hero.eyebrow': 'دانش‌آموز · علوم کامپیوتر و مهندسی نرم‌افزار',
    'hero.name': 'کارن صفا',
    'hero.lead': 'دانش‌آموز دبیرستان که در حال ساختن پایه‌ای محکم در برنامه‌نویسی، فناوری‌های وب و یادگیری ماشین است.',
    'hero.metaLabel': 'اطلاعات کلی',
    'hero.location': 'کرمان، ایران',
    'hero.grade': 'پایه یازدهم',
    'hero.track': 'ریاضی و فیزیک',
    'hero.ctaContact': 'تماس با من',
    'about.eyebrow': 'درباره من',
    'about.title': 'کنجکاو در ذات، منظم در عادت.',
    'about.body': 'دانش‌آموزی خوش‌برخورد و منظم با علاقه‌ای جدی به فناوری و یادگیری مستمر. توانایی مدیریت هم‌زمان چند فعالیت را دارم، مهارت‌های جدید را سریع می‌آموزم و با کنجکاوی و نگرشی مثبت مسئولیت‌ها را بر عهده می‌گیرم. در حال حاضر مهارت‌های خود را در برنامه‌نویسی، فناوری‌های وب، یادگیری ماشین و زبان‌های خارجی توسعه می‌دهم.',
    'stat.gradeNum': '۱۱',
    'stat.grade': 'پایه تحصیلی — رشته ریاضی و فیزیک',
    'stat.techNum': '۴',
    'stat.tech': 'زبان برنامه‌نویسی و وب',
    'stat.coursesNum': '۳',
    'stat.courses': 'دوره آموزشی',
    'education.eyebrow': 'تحصیلات',
    'education.title': 'ساختن پایه‌ای محکم.',
    'edu1.school': 'دبیرستان علامه',
    'edu1.badge': 'در حال تحصیل',
    'edu1.detail': 'رشته ریاضی و فیزیک · پایه یازدهم',
    'edu1.date': '۱۴۰۴ – اکنون',
    'edu2.school': 'مدرسه راهنمایی مهدوی',
    'edu2.date': '۱۴۰۱ – ۱۴۰۴',
    'edu.kerman': 'کرمان',
    'skills.eyebrow': 'مهارت‌های فنی',
    'skills.title': 'ابزارهایی که می‌آموزم.',
    'skills.note': 'در حال یادگیری و توسعه — بدون اغراق، با پیشرفتی پیوسته.',
    'skill.python': 'برنامه‌نویسی همه‌منظوره',
    'skill.html': 'ساختار و معناشناسی صفحه',
    'skill.css': 'چیدمان و طراحی بصری',
    'skill.js': 'تعامل در مرورگر',
    'interests.title': 'حوزه‌های مورد علاقه',
    'interest.cs': 'علوم کامپیوتر',
    'interest.web': 'توسعه وب',
    'interest.ml': 'یادگیری ماشین',
    'personal.eyebrow': 'مهارت‌های فردی',
    'personal.title': 'شیوه کار من.',
    'p.org.t': 'نظم و سازمان‌دهی',
    'p.org.d': 'رویکردی منظم و ساختارمند در انجام کارها و مسئولیت‌ها.',
    'p.multi.t': 'مدیریت هم‌زمان چند کار',
    'p.multi.d': 'توانایی مدیریت و پیگیری چند فعالیت به‌صورت هم‌زمان.',
    'p.learn.t': 'یادگیری سریع',
    'p.learn.d': 'فراگیری سریع مهارت‌ها و مفاهیم جدید.',
    'p.curious.t': 'کنجکاوی',
    'p.curious.d': 'رویارویی با موضوعات تازه با علاقه و پرسشگری.',
    'p.resp.t': 'مسئولیت‌پذیری',
    'p.resp.d': 'پایبندی به تعهدات و انجام دقیق وظایف.',
    'p.pos.t': 'نگرش مثبت و خوش‌برخورد',
    'p.pos.d': 'ارتباطی محترمانه و دوستانه همراه با نگرشی مثبت.',
    'projects.eyebrow': 'پروژه‌ها',
    'projects.title': 'آنچه می‌سازم.',
    'projects.intro': 'پروژه‌های شخصی به‌زودی به این بخش اضافه می‌شوند.',
    'proj.ph': 'جای‌نگهدار',
    'proj.title': '[نام پروژه]',
    'proj.desc': '[به‌طور خلاصه توضیح دهید چه چیزی ساخته‌اید، از چه ابزارهایی استفاده کرده‌اید و چه آموخته‌اید.]',
    'proj.tags': '[فناوری‌ها]',
    'courses.eyebrow': 'دوره‌ها و آموزش‌ها',
    'courses.title': 'یادگیری فراتر از کلاس درس.',
    'course.tagWeb': 'توسعه وب',
    'course.tagCs': 'علوم کامپیوتر',
    'course.tagLang': 'زبان',
    'course.django': 'برنامه‌نویسی وب با چارچوب Django',
    'course.mlT': 'یادگیری ماشین',
    'course.ml': 'مبانی یادگیری ماشین',
    'course.itT': 'زبان ایتالیایی',
    'course.it': 'دوره آموزش زبان ایتالیایی',
    'languages.eyebrow': 'زبان‌ها',
    'languages.title': 'ارتباط به زبان‌های مختلف.',
    'lang.fa': 'فارسی',
    'lang.en': 'انگلیسی',
    'lang.it': 'ایتالیایی',
    'lang.itNote': 'در حال یادگیری',
    'contact.eyebrow': 'تماس',
    'contact.title': 'در ارتباط باشیم.',
    'contact.body': 'برای فرصت‌های آموزشی، دوره‌ها یا همکاری در پروژه‌های دانش‌آموزی، از طریق ایمیل با من در ارتباط باشید.',
    'contact.emailLabel': 'ایمیل',
    'contact.emailAria': 'ارسال ایمیل به کارن صفا',
    'contact.locationLabel': 'موقعیت',
    'contact.phoneLabel': 'تلفن',
    'contact.cta': 'ارسال ایمیل',
    'footer.rights': 'تمامی حقوق محفوظ است.',
    'footer.built': 'طراحی و ساخته‌شده با HTML، CSS و JavaScript.',
    'footer.top': 'بازگشت به بالا ↑'
  };

  /* Strings that only exist in JavaScript (not in the HTML) */
  var EXTRA = {
    en: { 'theme.toDark': 'Switch to dark mode', 'theme.toLight': 'Switch to light mode', 'nav.close': 'Close menu', 'nav.menu': 'Open menu' },
    fa: { 'theme.toDark': 'تغییر به حالت تیره', 'theme.toLight': 'تغییر به حالت روشن', 'nav.close': 'بستن منو', 'nav.menu': 'باز کردن منو' }
  };

  var root = document.documentElement;
  var EN = {};
  var currentLang = 'en';

  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function t(key) { var d = currentLang === 'fa' ? FA : EN; return (EXTRA[currentLang][key]) || d[key] || EN[key] || ''; }

  /* Capture English text from the page so it can be restored */
  function collectEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in EN)) EN[k] = el.textContent.trim();
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length !== 2) return;
        if (!(p[1] in EN)) EN[p[1]] = el.getAttribute(p[0]) || '';
      });
    });
    EN['meta.title'] = document.title;
    var md = document.querySelector('meta[name="description"]');
    EN['meta.description'] = md ? md.getAttribute('content') : '';
  }

  /* ---------- Fonts: load Vazirmatn only when Persian is used ---------- */
  function loadPersianFont() {
    if (document.getElementById('font-vazirmatn')) return;
    var pre = document.createElement('link');
    pre.rel = 'preconnect'; pre.href = 'https://fonts.gstatic.com'; pre.crossOrigin = 'anonymous';
    document.head.appendChild(pre);
    var link = document.createElement('link');
    link.id = 'font-vazirmatn'; link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap';
    document.head.appendChild(link);
  }

  /* ---------- Language ---------- */
  function setLanguage(lang, persist) {
    currentLang = lang === 'fa' ? 'fa' : 'en';
    var dict = currentLang === 'fa' ? FA : EN;
    if (currentLang === 'fa') loadPersianFont();

    root.lang = currentLang;
    root.dir = currentLang === 'fa' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length !== 2) return;
        var v = dict[p[1]]; if (v != null) el.setAttribute(p[0], v);
      });
    });

    document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.description']);
    var ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', currentLang === 'fa' ? 'fa_IR' : 'en_US');

    var year = document.getElementById('year');
    if (year) {
      var y = new Date().getFullYear();
      year.textContent = currentLang === 'fa' ? new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(y) : String(y);
    }

    updateThemeLabel();
    updateMenuLabel();
    if (persist) store('cv-lang', currentLang);
    root.classList.remove('i18n-pending');
  }

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  function currentTheme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function updateThemeLabel() {
    if (!themeBtn) return;
    var label = currentTheme() === 'dark' ? t('theme.toLight') : t('theme.toDark');
    themeBtn.setAttribute('aria-label', label);
    themeBtn.setAttribute('title', label);
    themeBtn.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
  }
  function setTheme(theme, animate) {
    if (animate) {
      root.classList.add('theme-anim');
      window.setTimeout(function () { root.classList.remove('theme-anim'); }, 600);
    }
    root.setAttribute('data-theme', theme);
    updateThemeLabel();
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');
  function updateMenuLabel() {
    if (!menuBtn) return;
    var open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-label', open ? t('nav.close') : t('nav.menu'));
  }
  function setMenu(open) {
    if (!menuBtn || !navLinks) return;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    navLinks.classList.toggle('is-open', open);
    updateMenuLabel();
  }

  /* ---------- Phone (optional) ---------- */
  function applyPhone() {
    if (!CONFIG.phone) return;
    document.querySelectorAll('[data-phone]').forEach(function (el) {
      el.textContent = CONFIG.phone; el.setAttribute('dir', 'ltr'); el.hidden = false;
    });
    document.querySelectorAll('[data-phone-row]').forEach(function (el) { el.hidden = false; });
  }

  /* ---------- Init ---------- */
  function init() {
    collectEnglish();

    var q = new URLSearchParams(location.search).get('lang');
    var initialLang = (q === 'fa' || q === 'en') ? q : (read('cv-lang') || CONFIG.defaultLanguage);
    setLanguage(initialLang, false);
    applyPhone();

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', function () { setLanguage(currentLang === 'fa' ? 'en' : 'fa', true); });

    if (themeBtn) themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      setTheme(next, true);
      store('cv-theme', next);
    });
    // Follow the system setting until the visitor picks a theme
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function (e) { if (!read('cv-theme')) setTheme(e.matches ? 'dark' : 'light', true); };
      if (mq.addEventListener) mq.addEventListener('change', onChange); else if (mq.addListener) mq.addListener(onChange);
    }

    document.querySelectorAll('[data-print]').forEach(function (btn) {
      btn.addEventListener('click', function () { setMenu(false); window.print(); });
    });

    if (menuBtn) menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
    if (navLinks) navLinks.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

    // Header hairline on scroll
    var header = document.querySelector('.site-header');
    var onScroll = function () { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Reveal-on-scroll + active nav link
    if ('IntersectionObserver' in window) {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObs.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      document.querySelectorAll('.reveal').forEach(function (el, i) {
        el.style.transitionDelay = Math.min((i % 4) * 70, 210) + 'ms';
        revealObs.observe(el);
      });

      var links = {};
      document.querySelectorAll('.nav__links a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
      var navObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.id === 'personal' ? 'skills' : entry.target.id;
          if (entry.isIntersecting && links[id]) {
            Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); links[k].removeAttribute('aria-current'); });
            links[id].classList.add('is-active');
            links[id].setAttribute('aria-current', 'true');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      document.querySelectorAll('main section[id]').forEach(function (s) { navObs.observe(s); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    }

    // Make sure everything is visible when printing
    window.addEventListener('beforeprint', function () {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
