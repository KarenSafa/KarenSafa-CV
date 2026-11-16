# Karen Safa — Bilingual Student CV Website

A static, responsive personal CV website built with **HTML5, CSS3 and vanilla JavaScript**. It has no framework, build step, backend, analytics SDK or third-party runtime dependency.

## Included files

```text
Karen-Safa-CV-Website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   ├── favicon.svg
│   └── social-preview.png
└── README.md
```

## Run locally

You can open `index.html` directly in a browser. For a local web-server preview, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Features

- English and Persian content, including a full `lang` and `dir` switch (`ltr` / `rtl`).
- Responsive layouts for desktop, tablet and mobile.
- Light and dark themes. The selected theme is saved in browser `localStorage`; the first visit follows the device theme.
- Language preference is also saved in browser `localStorage`. You can open `?lang=en` or `?lang=fa` to select a language on first load.
- A Print CV button that calls the browser print dialog.
- A print stylesheet that removes navigation, controls, the empty projects prompt and the public-contact placeholder, and formats the remaining CV content for A4.
- Semantic HTML, keyboard focus styles, a skip link, accessible control labels, reduced-motion support, Open Graph/Twitter metadata and `Person` JSON-LD structured data.
- No contact form, analytics, cookies, tracking pixels or backend data collection.

## Important checks before publishing

### 1. Replace the example domain

Search `index.html` and `js/app.js` for `your-domain.example` and replace it with the final HTTPS website address. Update:

- The canonical URL.
- `og:url` and the absolute Open Graph/Twitter image URLs.
- The `url` field in the JSON-LD object in `js/app.js`.

The example domain is intentionally a placeholder and must not be left in a live deployment.

### 2. Review education dates and current grade

The site preserves the education information in the supplied CV: **Grade 11** and **2025–Present** in English; **۱۴۰۴ تا کنون** in Persian. Confirm that these remain current before publishing. If they change, edit `dateCurrent`, `highSchoolDetail`, `highSchoolName` or the relevant translations in `js/app.js`.

### 3. Contact details and privacy

The source CV contains a personal email address and phone number. They are **not included in the public page** by default. The contact panel is an editable reminder instead. Before publishing contact information, consider using a separate public-facing email address and obtain appropriate parent/guardian approval. Avoid publishing a personal mobile number or a more precise location than necessary.

To change the contact panel, edit the `contactBody`, `contactPlaceholderTitle`, and `contactPlaceholderBody` entries in both language dictionaries in `js/app.js`. Update the corresponding contact section in `index.html` if you choose to add a real contact link. Do not leave the instructional placeholder in a live version.

### 4. Projects and courses

No personal projects, certificates, course providers, dates or certificate details were listed in the supplied CV. The projects section therefore states that no projects have been supplied; add only work that can be demonstrated and accurately described. The Django, machine-learning and Italian entries are presented as learning topics, **not formal certifications**. Add an issuing organization or credential only if it can be verified.

### 5. Language proficiency

The source CV lists Persian and English but does not state proficiency levels. The website intentionally does not infer or assign levels. Add levels only after confirming how you want them represented.

## Customization guide

### Edit the text

Most visible copy is stored in the `translations` object in `js/app.js`, with separate `en` and `fa` dictionaries. Keep the key names aligned between both dictionaries so the switch remains complete. Text in `index.html` is linked to those keys with `data-i18n` attributes. Accessible labels use `data-i18n-aria-label`.

For a new section, add semantic HTML in `index.html`, add the same translation key to both dictionaries, and add styling in `css/styles.css`.

### Change colors and typography

The palette, surfaces, borders and shadows are CSS custom properties at the top of `css/styles.css` under `:root` and `:root[data-theme="dark"]`. The site uses a system font stack; Persian falls back to Tahoma/Segoe UI/Arial. No external font service is required.

### Replace the social preview image

Replace `assets/social-preview.png` with a 1200 × 630 image. Keep the filename or update the Open Graph and Twitter image references in `index.html`.

### Change the favicon

Replace `assets/favicon.svg` or update the `<link rel="icon">` element in `index.html`.

## Publish

This is a static website. It can be hosted on any static web host, including GitHub Pages, Netlify, Cloudflare Pages or a conventional HTTPS web host.

1. Complete the publishing checks above.
2. Upload the contents of this folder while preserving the `css/`, `js/` and `assets/` paths.
3. Set the site's public root to this folder so `index.html` is served at the domain root.
4. Confirm the deployed canonical URL and social image use the real HTTPS domain.
5. Test both languages, both themes, mobile navigation and the print dialog on the live site.

## Print / save as PDF

Select **Print CV** and choose **Save as PDF** in the browser's print dialog. The stylesheet is optimized for A4 paper and hides navigation, theme/language controls, the empty projects prompt and the contact reminder. Browser print settings can differ, so preview the PDF before sharing it.

## Accuracy and privacy notes

The page uses only facts supported by the supplied English and Persian CVs. It does not invent work experience, internships, achievements, qualifications, skill ratings, certificates, projects or language levels. The public version omits the personal phone number, email address and city-level location as a privacy-conscious default. School names remain from the source CV; review whether you are comfortable sharing them publicly, or replace them with education level and study track only. The site itself does not claim universal legal compliance; review the requirements relevant to the final hosting location and intended audience before deployment.
