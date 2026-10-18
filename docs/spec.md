# Spec — What I'm Building

A one-page personal portfolio website. One link, put in every social media bio.

Design link: https://claude.ai/artifact/EBtjrcLbtkiTn53YLUUK83

---

## 1. Look and feel

- **Style:** Premium and clean, like an Apple product page. Lots of white space, big bold text, nothing flashy.
- **Fonts:** Geist (main text) and Geist Mono (small labels, to give a developer feel).
- **Colors:** Near-white background, dark text, one blue accent (`#0066CC`). Accent can be changed later.
- **Light / dark mode:** A moon/sun button in the top bar switches between them.
- **Motion:** Smooth and slow. Things fade and slide in gently. Nothing bounces or flashes.
- **Phone first:** Most people will open it from a social app on their phone, so it must look great on small screens.

---

## 2. Page sections (top to bottom)

### 2.1 Top bar

- My name on the left.
- Links: Work, Journey, Toolkit, Contact (jump to that section).
- Light/dark toggle button.
- Stays stuck to the top while scrolling, with a soft blurred background.
- On phones, the section links hide; only name and toggle stay.

### 2.2 Hero (first screen)

- Green pulsing dot: **"Now building real-time fleet tracking at Intellicar"**.
- Small badge: **"LVL 07 · Senior Frontend"**.
- Big headline: **"I build interfaces that stay fast when the data never stops."**
- One short paragraph about my experience.
- Two buttons: **See my work** and **Walk the journey**.
- Social links: LinkedIn, GitHub, X, Email.

### 2.3 Proof strip

Four boxes with real numbers:

| Number   | Meaning                            |
| -------- | ---------------------------------- |
| 1M+      | Traders using the QR Login I built |
| 4s → <2s | Chart load time after my tuning    |
| 60fps    | Live maps with heavy GPS data      |
| 2        | Industry-first chart features      |

### 2.4 Selected work

**Side projects (cards):**

- **Paper Trading Platform** (big featured card) — trade with virtual money, backtest, AI insights. Links: Live demo, Code.
- **Web Storage Inspector** — Chrome extension to view and manage storage and cookies. Links: Install, Code.
- **"In the lab" card** — placeholder for my next project, with a progress bar.

**Shipped at work (smaller grid):**

- QR Login across web and mobile (FYERS)
- Open Interest profiling on charts (FYERS, industry first)
- Advanced Volume Indicator (FYERS, industry first)
- Fleet management console (Intellicar)

### 2.5 The Journey (the special part)

A winding road with numbered levels. Cards switch left and right on desktop; on phones they all sit on one side of a straight path.

| Level | When     | Title                                   |
| ----- | -------- | --------------------------------------- |
| 01    | 2019     | Spawned at NIT Jalandhar                |
| 02    | Dec 2022 | Entered the markets at FYERS            |
| 03    | 2023     | One scan, a million logins              |
| 04    | FYERS    | Industry firsts                         |
| 05    | FYERS    | Boss level: trading systems             |
| 06    | Feb 2026 | Real-time at Intellicar                 |
| 07    | Now      | Building AI-native — **"You are here"** |
| 08    | Next     | Loading… (placeholder for my next goal) |

Each level shows a short story and **"Unlocked"** skill tags.

**Animation:**

- As you scroll, the road **draws itself**.
- Each level's circle **lights up** when you reach it.
- Cards **rise and fade in**.
- Level 07 has a **pulsing** circle.
- Level 08 is dashed, with animated "Loading…" dots.

Works fully in Chrome and Edge. In Safari and Firefox the road shows already drawn (still looks complete). If a user has "reduce motion" turned on, all animation is switched off.

### 2.6 Toolkit

Skills in rows, grouped by:
Frontend, Mobile, Backend, Cloud & observability, AI tools, Analytics.

### 2.7 Contact

- Headline: **"Got something that needs to be fast?"**
- Buttons: **Say hello** (email) and **Download résumé**.
- LinkedIn, GitHub, X links again.

### 2.8 Footer

"© 2026 Rohit Srivastava" and "Built in Bengaluru · v1.0".

---

## 3. Placeholders to fill later

- [ ] LinkedIn URL (currently `linkedin.com/in/your-handle`)
- [ ] GitHub URL (currently `github.com/your-handle`)
- [ ] X / Twitter URL (currently `x.com/your-handle`)
- [ ] Paper Trading: live demo link, code link, screenshot
- [ ] Web Storage Inspector: Chrome Store link, code link, screenshot
- [ ] "In the lab" project: name, one-line description, tech, ETA
- [ ] Level 08: my next goal
- [ ] Résumé download link

---

## 4. Rules

- **No phone number or home address** on the site. Email only.
- **No made-up numbers.** Every stat comes from real work.
- Every button and link must be easy to tap on a phone (at least 44px).
- Text must be readable in both light and dark mode.

---

## 5. Done when

- [ ] All placeholders replaced with real links and content.
- [ ] Looks good on phone, tablet and desktop.
- [ ] Light and dark mode both look right.
- [ ] Journey animation works on scroll.
- [ ] Hosted on a short, clean URL.
- [ ] Link added to LinkedIn, GitHub, X and Instagram bios.
