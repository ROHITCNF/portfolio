# Requirements — FROZEN v1.0

Status: **Frozen** · v1.1 · 2026-10-19
Sources: `docs/intent.md`, `docs/spec.md`, `docs/design/reference/Portfolio — Home.png`, design canvas `project/Main.dc.html` (https://claude.ai/artifact/EBtjrcLbtkiTn53YLUUK83).
Precedence on conflict: this file > design canvas > spec.md > intent.md.

Any change after freeze = new version of this file (v1.1, …) with a changelog line at the bottom.

---

## 1. Goal

One static page, one short URL, linked from every social bio. Visitor on a phone understands **who / what good at / proof / where now** within 5 seconds.

## 2. Tech stack (decided)

| Item | Decision | Why |
|---|---|---|
| Markup | Plain `index.html`, semantic HTML5 | Static single page; no framework needed |
| Styles | One `styles.css`, CSS custom properties for tokens | Design already written as plain CSS |
| Script | One small `main.js` (vanilla, no deps), `defer` | Only needs theme toggle + optional fallbacks |
| Build | None. Files served as-is | Zero tooling, zero bundle |
| Fonts | Geist + Geist Mono, self-hosted variable `woff2`, Latin subset (~32 KB each), `font-display: swap` | Avoid third-party request; faster first paint |
| Hosting | **GitHub Pages** (owner deploys manually). All asset paths relative; `.nojekyll` at root | Free, static, no server code |

Upgrade path, if ever needed (blog, many projects): Astro — outputs same static HTML. Not in v1.

## 3. Design tokens (from canvas, exact)

**Light:** `--bg #FBFBFD` · `--surface #FFFFFF` · `--surface2 #F1F1F4` · `--text #1D1D1F` · `--muted #5C5C61` · `--line #E2E2E7` · `--faint #E8E8ED` · `--on-accent #FFFFFF`
**Dark:** `--bg #000000` · `--surface #111113` · `--surface2 #1C1C1F` · `--text #F5F5F7` · `--muted #A1A1A6` · `--line #2A2A2E` · `--faint #1E1E21` · `--accent-ink = mix(accent 55%, #FFF)`
**Accent:** `#0066CC` (single variable; swappable). Status-dot green `#1F9D55`.
**Type:** Geist (UI/body), Geist Mono (eyebrows, labels, chips, meta, socials).
**Layout:** container `max-width 1120px`, gutter 32px desktop / 20px ≤760px. Breakpoint: **760px**.
**Radii:** cards/strips 28px, journey panels 24px, chips 8px, pills/buttons 999px.
**Motion:** easing `cubic-bezier(.2,.7,.2,1)`, durations 0.35–0.9s. No bounce, no flash.

Values above are canonical; implement from canvas CSS (`.rs` block) one-to-one.

## 4. Sections & content (top → bottom)

Copy is frozen as written in the design canvas. Summary:

### 4.1 Top bar
- Name "Rohit Srivastava" (links to top), links Work / Journey / Toolkit / Contact (anchor scroll), theme toggle (moon ↔ sun, 44×44, `aria-label` reflects action).
- Sticky, 64px tall, blurred translucent bg, bottom hairline.
- ≤760px: section links hidden; name + toggle remain.

### 4.2 Hero
- Status pill w/ pulsing green dot: "Now building real-time fleet tracking at Intellicar".
- Mono pill: "LVL 07 · Senior Frontend".
- Name line, then H1: "I build interfaces that stay **fast** when the data never stops." ("fast" in accent).
- Lede: "Frontend engineer with 4 years shipping React, Next.js and React Native products for live trading and real-time fleet platforms — from industry-first charts to logins used by over a million traders."
- CTAs: **See my work** (primary, ↓ icon, → #work), **Walk the journey** (ghost, → #journey).
- Socials (mono, ↗ icon): LinkedIn, GitHub, X / Twitter, Email.
- Staggered fade-up on load (5 steps, 80ms apart).

### 4.3 Proof strip
4 stats, 4-col desktop / 2×2 mobile: `1M+`, `4s → <2s`, `60fps`, `2` with labels from canvas.

### 4.4 Selected work
- Eyebrow "Selected work", H2 "Things I've built.", sub line.
- **Paper Trading Platform** — wide featured card (media left, body right; stacks on mobile). Pill "Side project · AI". Chips: Next.js, React, Express, MongoDB, Redis, Fyers SDK, Gemini AI. Links: Live demo, Code.
- **Web Storage Inspector** — pill "Chrome extension · DevTools". Chips: JavaScript, Chrome APIs. Links: Install, Code.
- **In the lab** card — blurred blob media, pill "In development", placeholder title/line, progress bar (value configurable, default 40%), chips [Stack], ETA [Month].
- **Shipped at work** — 2×2 grid (1-col mobile): QR Login · Open Interest profiling · Advanced Volume Indicator · Fleet management console.
- Card hover: lift 4px + soft shadow.

### 4.5 Journey
- Eyebrow "The journey", H2 "Level by level.", sub "Every stop on the road unlocked something new. Scroll to walk it."
- 8 levels (01–08) exactly per spec table; copy & "Unlocked" chips per canvas. Level 07 chip label = "Unlocking".
- Desktop: 3-col grid (card | 120px rail | ghost number), alternating sides; rail = curved SVG segment per level (bends left on odd, right on even).
- Mobile: rail left (44px), number then card stacked right, straight path.
- Level 07: highlighted panel (accent border + glow), meta "Now · Level 07 · You are here", pulsing node, dashed "future" line below.
- Level 08: dashed ghost panel, dashed node, "Loading" + animated dots.
- **Scroll animation** via CSS `animation-timeline: view()`: road draws, nodes ignite, panels rise+fade, ghost numbers fade.
- Fallback (no `animation-timeline` support — Safari/Firefox today): everything rendered in final state (road drawn, nodes lit). **No JS polyfill in v1.**

### 4.6 Toolkit
H2 "What I build with." Rows (label | chips): Frontend, Mobile, Backend, Cloud & observability, AI tools (accent chips), Analytics. Chip lists per canvas.

### 4.7 Contact
Centered. H2 "Got something that needs to be fast?", sub line, **Say hello** (mailto, primary), **Download résumé** (ghost), socials LinkedIn / GitHub / X.

### 4.8 Footer
"© 2026 Rohit Srivastava" · "Built in Bengaluru · v1.0" (mono).

## 5. Behaviour

- **Theme:** default **light** always (OS preference ignored); visitor's saved choice (`localStorage`) overrides. Toggle flips and saves. Inline `<head>` snippet sets theme before paint (no flash). Storage wrapped in try/catch.
- **Anchor links:** smooth scroll (CSS `scroll-behavior: smooth`, disabled under reduced motion); sections offset by sticky header (`scroll-margin-top`).
- **Reduced motion:** `prefers-reduced-motion: reduce` → all animations/transitions off, final states shown.
- External links open in same tab, except résumé (new tab). `rel="noopener"` where `target=_blank`.

## 6. Non-functional

- **Phone first.** Must work 320px → 1440px+. No horizontal scroll.
- **Tap targets ≥ 44px** for every link/button.
- **Contrast:** WCAG AA (4.5:1 body, 3:1 ≥24px) in both themes.
- **Accessibility:** semantic landmarks (`header/nav/main/section/footer`), one H1, logical heading order, decorative SVG `aria-hidden`, visible focus ring, skip-to-content link.
- **Performance budget:** total transfer ≤ 150 KB excluding résumé PDF & project screenshots; Lighthouse (mobile) ≥ 95 all categories; LCP < 1.5s on 4G. Screenshots as `webp`/`avif`, lazy-loaded, explicit width/height.
- **Browsers:** latest 2 Chrome, Edge, Safari (iOS + macOS), Firefox.
- **SEO / sharing:** `<title>`, meta description, canonical URL, Open Graph + Twitter card tags with 1200×630 OG image, favicon (svg + png), `theme-color` per theme. (Link preview in LinkedIn/X/WhatsApp matters since link lives in bios.)

## 7. Rules (hard)

- No phone number, no home address. Email only (`rohitcnfsecond@gmail.com`).
- No invented numbers; every stat from real work.
- Placeholder content allowed only in the slots listed in §9, visibly marked `[ … ]`.

## 8. Out of scope (v1)

Blog, CMS, contact form, analytics/tracking (decided: none), i18n, JS scroll-animation polyfill, accent picker UI, multiple pages.

## 9. Placeholders (content owner: Rohit — fill before launch)

- [x] LinkedIn URL — linkedin.com/in/rohitcnf
- [x] GitHub URL — github.com/ROHITCNF
- [x] X / Twitter URL — x.com/cnf_rohit
- [ ] Paper Trading: live demo URL, code URL, screenshot
- [ ] Web Storage Inspector: Chrome Web Store URL, code URL, screenshot
- [ ] In-the-lab: name, one-liner, stack, ETA, progress %
- [ ] Level 08: next goal text
- [ ] Résumé PDF
- [ ] OG share image (can be generated from hero)
- [ ] Domain / final URL

## 10. File layout

```
/index.html
/styles.css
/main.js
/assets/fonts/      Geist*.woff2
/assets/img/        project screenshots, og.png, favicon.svg
/assets/resume/       Rohit_Srivastava_Resume.pdf
/docs/              intent, spec, requirements, design ref
```

## 11. Done when

- All §9 placeholders filled.
- Matches design at 375 / 768 / 1440 widths in light and dark.
- Journey scroll animation works in Chrome/Edge; static-complete in Safari/Firefox; off under reduced motion.
- §6 budgets met (Lighthouse report saved).
- Deployed on short URL; link in LinkedIn, GitHub, X, Instagram bios.

---

Changelog
- v1.1 (2026-10-19): Owner decisions — default theme light (not OS-driven), no analytics, GitHub Pages hosting (manual), public email confirmed. Fonts switched to subset variable files.
- v1.0 (2026-10-19): Frozen from intent + spec + design canvas. Added (not in spec): theme defaults to OS preference, self-hosted fonts, perf budget, OG/SEO tags, skip link, out-of-scope list.
