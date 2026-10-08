# Xntrova — Homepage Redesign (React)

A modern, premium, conversion-focused redesign of the [Xntrova](https://www.xntrova.com/) homepage,
built for the **Website Developer – Landing Page Assessment**.

Built with **React 18 + Vite** and **zero runtime dependencies beyond React** — all icons are
inline SVG, all animations are CSS/IntersectionObserver, and every asset is generated in code
(no image downloads), which keeps the page extremely fast.

---

## Run it

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build
```

Deploy the `dist/` folder anywhere (Vercel, Netlify, GitHub Pages, any static host).

---

## Project structure

```
src/
├── App.jsx                  # Page composition
├── styles.css               # Full design system (tokens → components → sections → responsive)
├── data/content.js          # Single source of truth for ALL copy/data
├── hooks/useCountUp.js      # Animated stat counters (rAF + IntersectionObserver)
└── components/
    ├── Header.jsx           # Sticky header, active-section nav, mobile menu
    ├── Hero.jsx             # Headline + animated SVG dashboard visual
    ├── Marquee.jsx          # Clients + tools marquees (pure CSS)
    ├── Services.jsx         # 6 service cards
    ├── About.jsx            # Brand story + 4 pillars
    ├── WhyUs.jsx            # Dark section: benefits + animated stats
    ├── Process.jsx          # 4-step "how we work" timeline
    ├── Work.jsx             # Case-study cards with result metrics
    ├── Testimonials.jsx     # Auto-playing slider (arrows/dots/swipe)
    ├── Faq.jsx              # Animated accordion
    ├── CtaBand.jsx          # High-contrast conversion band
    ├── Contact.jsx          # Validated lead form + contact info
    ├── Footer.jsx           # 4-column footer
    ├── Floating.jsx         # Scroll progress, back-to-top, WhatsApp FAB
    └── ui/                  # Reusable primitives: Button, Icon, Reveal, SectionHead
```

---

## Major changes vs. the current live site

### UX & conversion flow
1. **Clear single-page conversion path** — Hero CTA → proof (clients, stats, testimonials) →
   services → process → work → FAQ objection handling → final CTA band → lead form. Every section
   has a job in the funnel, and every card's "learn more" routes to the form.
2. **Hero rebuilt around proof** — the static hero image was replaced with an animated performance
   dashboard (draw-in growth chart, floating KPI chips) that communicates "results" instantly, plus
   trust stats (500+ clients, 120+ projects, 4.9★) directly under the CTAs.
3. **Lead form upgraded** — real-time inline validation (name, email format, phone, service,
   message), `aria-invalid` states, and a friendly success state — instead of the original's bare
   dropdown + submit.
4. **Floating WhatsApp button** retained (it's a key lead channel for the business), plus a
   back-to-top button and a scroll-progress bar.

### Design
5. **Kept the brand identity** — the ink-navy `#001F2B` + amber `#FAAE39` palette from the live
   site, elevated with a warm cream background, consistent 16–24px radii, soft layered shadows,
   and a Sora/Manrope type pairing.
6. **Dark "Why Choose Us" band** added for visual rhythm and premium contrast, with animated
   counters (+250% traffic, 120+ projects, 500+ clients, 4.9/5).
7. **Micro-interactions everywhere** — hover lifts, icon color swaps, arrow nudges, service-card
   top accent bars, marquee pause-on-hover — all GPU-friendly (transform/opacity only).

### New / restructured sections
8. **Process (How We Work)** and **Case Studies with metrics** were added — the original homepage
   had neither, and they directly answer "how will you do it?" and "can you prove it?".
9. **FAQ accordion** keeps the original questions but makes them scannable; opening one closes the
   others, with smooth CSS-grid height animation (no JS height measuring).
10. **Marquees** present clients and tools as text wordmarks (no heavy logo images).

### Engineering
11. **React component architecture** — reusable primitives (`Button`, `Icon`, `Reveal`,
    `SectionHead`) and a central `data/content.js` content model; sections are pure render-from-data.
12. **Performance** — no icon library, no animation library, no images; one small CSS file;
    IntersectionObservers disconnect after firing; `prefers-reduced-motion` fully honored.
13. **Accessibility** — semantic landmarks, one `h1`, ordered heading levels, skip link,
    `aria-expanded`/`aria-controls` on the accordion & menu, `aria-invalid` on form fields,
    visible focus rings, keyboard-friendly slider.
14. **SEO** — meta description/OG tags, JSON-LD Organization schema, semantic HTML.
15. **Responsive** — breakpoints at 1080px (grids 3→2), 980px (nav→hamburger, 2→1 columns),
    640px (single column, full-width CTAs).

### Known trade-offs (things to wire up in production)
- The lead form **simulates** submission; connect it to a backend/CRM (Formspree, Resend, etc.)
  in `Contact.jsx → handleSubmit`.
- Case-study numbers are representative placeholders pending real client data approval.
- Social links point to `#top` until real profile URLs are provided.
