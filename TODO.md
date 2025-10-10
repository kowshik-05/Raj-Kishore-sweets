# TODO: Optimize Site Speed and Fix Contact Form

## Contact Form Fixes

- [x] Update Contact.jsx: Change handleWhatsApp to use a direct link for WhatsApp instead of window.open for better mobile tap compatibility.
- [x] Update Contact.jsx: Add form reset (clear name, phone, msg) after "submit".
- [ ] Test Contact form on desktop/mobile to ensure WhatsApp opens and fields reset.

## Speed Optimizations

- [x] Read Products.jsx to understand image usage for lazy loading.
- [x] Update Home.jsx: Remove commented-out sections (old Hero, categories, reviews) to reduce bundle size.
- [x] Update Home.jsx: Add React.lazy/Suspense for non-critical sections (About, Location).
- [x] Update index.html: Add preload links for critical images (hero.webp, about.jpg).
- [x] Update vite.config.js: Add vite-imagetools plugin for automatic image optimization (WebP conversion, compression).
- [x] Update Products.jsx: Add loading="lazy" to product images.
- [x] Install new dependencies if needed (e.g., vite-imagetools via npm install).
- [ ] Run build and test site speed (use Lighthouse or dev tools for metrics).

## General

- [ ] Ensure no breaking changes; test navigation and functionality.
