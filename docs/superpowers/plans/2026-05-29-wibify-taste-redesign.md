# Wibify-taste Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin the existing Next.js 15 portfolio into a dark editorial-premium site carrying wibify.de's taste (numbered sections, serif-italic emphasis, text-roll, smooth scroll, scroll reveals, works-as-list with cursor preview, pinned cards) while keeping the owner's `#FF3D00` accent.

**Architecture:** Keep the Chakra v3 provider + next-themes (forced dark). Add a motion layer (Lenis smooth scroll + GSAP ScrollTrigger + Framer micro-interactions) and build all signature sections as **CSS-Module components** driven by CSS custom-properties that mirror theme tokens. Phased: foundation → home → works → remaining pages → polish.

**Tech Stack:** Next.js 15 (App Router, Turbopack), React 19, TypeScript, Chakra UI v3, next-themes, Framer Motion 11, GSAP + ScrollTrigger (new), Lenis (new), three.js 0.184 (already present), `next/font`, self-hosted Switzer woff2.

**Spec:** `docs/superpowers/specs/2026-05-29-wibify-taste-redesign-design.md`

---

## Verification convention (applies to every task)

This project has **no unit-test runner** (`package.json` scripts: dev/build/start/lint/prettier). Visual/animation work is verified by:

1. `npm run lint` — passes (no errors).
2. `npm run build` — compiles clean (no type errors).
3. **Visual check** — `npm run dev`, open `http://localhost:3000`, confirm the described behavior. Where a task says "Verify", do all three unless noted.

Commit after each task. Conventional Commits, no AI attribution.

---

## File structure (what gets created / modified)

**New — motion layer (`lib/motion/`, `components/motion/`):**

- `components/motion/smooth-scroll.tsx` — Lenis provider + GSAP↔Lenis sync.
- `lib/motion/use-scroll-reveal.ts` — GSAP reveal hook (`opacity 0 + scale .85 → 1`).
- `components/motion/text-roll.tsx` + `.module.css` — per-letter hover roll.
- `components/motion/reveal-words.tsx` — hero word-by-word entrance.
- `components/motion/magnetic.tsx` — magnetic hover wrapper.
- `components/motion/shiny-cta.tsx` + `.module.css` — primary button.
- `components/motion/custom-cursor.tsx` + `.module.css` — P5.

**New — shared UI (`components/common/`):**

- `components/common/section-eyebrow.tsx` + `.module.css` — `[01]` tag + accent bar.
- `components/common/display-heading.tsx` + `.module.css` — sans + serif-italic `<em>` + SVG underline.
- `components/common/grain.tsx` + `.module.css` — fixed grain overlay.

**New — page sections (`components/sections/`):**

- `hero.tsx` + `.module.css`, `works-list.tsx` + `.module.css`, `how-i-work.tsx` + `.module.css`, `contact-cta.tsx` + `.module.css`, `shader-bg.tsx` (P5).

**Modified:**

- `lib/theme.ts` — dark-only tokens, accent stays.
- `app/globals.css` — replace brutalist base with dark base + CSS vars + fonts.
- `app/layout.tsx` — fonts via next/font, `<Grain/>`, dark themeColor.
- `components/ui/provider.tsx` — `forcedTheme="dark"`.
- `app/(main)/layout.tsx` — wrap children in `<SmoothScroll>`.
- `app/(main)/page.tsx` — recompose home from new sections.
- `app/(main)/works/page.tsx` — list view.
- `app/(main)/works/[slug]/page.tsx` — restyle.
- `app/(main)/posts/page.tsx` — restyle.
- `app/(cv)/cv/page.tsx` — dark restyle.
- `components/layout/navbar.tsx` — logo + ShinyCTA + burger overlay.
- `components/layout/footer.tsx` — multi-col + serif tagline.
- `components/cards/work-card.tsx` — used by list (or replaced).
- `app/not-found.tsx` — on-brand.

**Deleted:**

- `components/layout/hero-animation.tsx` (2D geometric hero — replaced).
- `components/common/theme-toggle.tsx` (dark-only).

---

# PHASE 1 — Foundation

### Task 1: Install motion dependencies

**Files:** Modify `package.json` (via npm).

- [ ] **Step 1: Install GSAP + Lenis**

Run:

```bash
npm install gsap@^3.12.5 lenis@^1.1.18
```

Expected: both added to `dependencies`, no peer-dep errors.

- [ ] **Step 2: Verify install**

Run: `npm ls gsap lenis`
Expected: both listed with resolved versions.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add gsap and lenis for motion layer"
```

---

### Task 2: Dark-only theme tokens

**Files:** Modify `lib/theme.ts`.

- [ ] **Step 1: Replace the token + semantic-token blocks**

Replace the `colors`, `fonts`, and `semanticTokens` so dark is the only mode and fonts point at the new families. Full file:

```ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        bg: { value: "#0A0A0B" },
        surface: { value: "#141416" },
        surfaceAlt: { value: "#1B1B1E" },
        border: { value: "rgba(255,255,255,0.08)" },
        text: { value: "#FAFAFA" },
        textMuted: { value: "#8A8A8E" },
        accent: { value: "#FF3D00" },
        accentSoft: { value: "rgba(255,61,0,0.12)" },
      },
      fonts: {
        heading: { value: "var(--font-instrument-serif), Georgia, serif" },
        body: { value: "var(--font-switzer), system-ui, sans-serif" },
        mono: { value: "var(--font-jetbrains-mono), monospace" },
      },
      fontSizes: {
        display: { value: "clamp(3rem, 9vw, 7rem)" },
        h1: { value: "clamp(2.5rem, 6vw, 4.5rem)" },
        h2: { value: "clamp(2rem, 4vw, 3.25rem)" },
        h3: { value: "clamp(1.5rem, 3vw, 2rem)" },
        body: { value: "1.0625rem" },
        small: { value: "0.875rem" },
        xs: { value: "0.75rem" },
      },
      radii: {
        none: { value: "0" },
        sm: { value: "4px" },
        md: { value: "10px" },
        lg: { value: "18px" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: "{colors.bg}" },
        surface: { value: "{colors.surface}" },
        surfaceAlt: { value: "{colors.surfaceAlt}" },
        border: { value: "{colors.border}" },
        text: { value: "{colors.text}" },
        textMuted: { value: "{colors.textMuted}" },
        accent: { value: "{colors.accent}" },
        accentSoft: { value: "{colors.accentSoft}" },
      },
    },
  },
  globalCss: {
    "html, body": { bg: "bg", color: "text" },
  },
});

export const system = createSystem(defaultConfig, customConfig);
```

- [ ] **Step 2: Verify**

`npm run build`. Expected: compiles (some components still reference old tokens like `bg.dark`; those are fixed in later tasks — if build fails on a token not in this file, it is expected until that file's task. Build must still pass type-check for `theme.ts` itself).

- [ ] **Step 3: Commit**

```bash
git add lib/theme.ts
git commit -m "feat: dark-only theme tokens with serif/sans/mono fonts"
```

---

### Task 3: Fonts + global CSS base + CSS variables

**Files:** Modify `app/layout.tsx`, `app/globals.css`. Add Switzer woff2 to `public/fonts/switzer/`.

- [ ] **Step 1: Add Switzer woff2 files**

Place `switzer-400.woff2` and `switzer-700.woff2` in `public/fonts/switzer/`. (Download from the Switzer free distribution; if unavailable, fall back to Inter via `next/font/google` named the same CSS var — note in commit.)

- [ ] **Step 2: Replace `app/globals.css` entirely**

```css
:root {
  --bg: #0a0a0b;
  --surface: #141416;
  --surface-alt: #1b1b1e;
  --border: rgba(255, 255, 255, 0.08);
  --text: #fafafa;
  --text-muted: #8a8a8e;
  --accent: #ff3d00;
  --accent-soft: rgba(255, 61, 0, 0.12);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --container: 1180px;
}

@font-face {
  font-family: "Switzer";
  src: url("/fonts/switzer/switzer-400.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Switzer";
  src: url("/fonts/switzer/switzer-700.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
}
/* Smooth scroll is handled by Lenis; do NOT set scroll-behavior here. */

body {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--accent);
  color: #fff;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 3: Wire fonts + dark themeColor in `app/layout.tsx`**

Add imports + font loaders, attach the CSS-var classnames to `<html>`, set themeColor dark. Replace the top of the file and the `RootLayout` return:

```tsx
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { Grain } from "@/components/common/grain";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});
const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
```

Keep the existing `metadata` object. Replace `viewport.themeColor` with:

```tsx
  themeColor: '#0A0A0B',
```

Replace `RootLayout`:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{ fontFamily: "var(--font-switzer), system-ui, sans-serif" }}
      >
        <Provider>
          <Grain />
          {children}
        </Provider>
      </body>
    </html>
  );
}
```

(Note: `--font-switzer` is defined by the `@font-face` family name; set it as a CSS var in globals if needed — add `--font-switzer: 'Switzer';` to `:root`.)

- [ ] **Step 4: Add `--font-switzer` var**

In `app/globals.css` `:root`, add: `--font-switzer: 'Switzer';`

- [ ] **Step 5: Verify**

`npm run build` — will fail only on missing `Grain` import (created next task). Temporarily comment the `<Grain />` line + import to verify fonts/CSS compile, then uncomment after Task 4. Visual: dev server shows dark bg.

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/globals.css public/fonts
git commit -m "feat: self-host fonts, dark global base, css variables"
```

---

### Task 4: Grain overlay component

**Files:** Create `components/common/grain.tsx`, `components/common/grain.module.css`.

- [ ] **Step 1: Create `grain.module.css`**

```css
.grain {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}
```

- [ ] **Step 2: Create `grain.tsx`**

```tsx
import styles from "./grain.module.css";

export function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
```

- [ ] **Step 3: Verify** — uncomment `<Grain/>` in `app/layout.tsx`; `npm run build` passes; dev server shows subtle grain.

- [ ] **Step 4: Commit**

```bash
git add components/common/grain.tsx components/common/grain.module.css app/layout.tsx
git commit -m "feat: add fixed grain overlay"
```

---

### Task 5: Provider forced dark + remove theme toggle

**Files:** Modify `components/ui/provider.tsx`; delete `components/common/theme-toggle.tsx` and its usages.

- [ ] **Step 1: Force dark in provider**

In `components/ui/provider.tsx`, change the `ThemeProvider` props to:

```tsx
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
```

- [ ] **Step 2: Remove the toggle file + references**

Run:

```bash
grep -rn "theme-toggle\|ThemeToggle" app components
```

Delete `components/common/theme-toggle.tsx` and remove every import/usage found (navbar is recomposed in Task 16; if a reference remains before then, delete the JSX line).

- [ ] **Step 3: Verify** — `npm run lint && npm run build`. Expected: no references to ThemeToggle remain.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: force dark mode, remove theme toggle"
```

---

### Task 6: SmoothScroll (Lenis + GSAP sync)

**Files:** Create `components/motion/smooth-scroll.tsx`. Modify `app/(main)/layout.tsx`.

- [ ] **Step 1: Create `smooth-scroll.tsx`**

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 2: Wrap the main layout**

In `app/(main)/layout.tsx`, import `SmoothScroll` and wrap the `<Flex>`:

```tsx
import { Box, Container, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Box as="main" pt="80px" flex="1">
          <Container maxW="var(--container)" py={8}>
            {children}
          </Container>
        </Box>
        <Footer />
      </Flex>
    </SmoothScroll>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build`; dev server: scrolling feels eased (inertia).

- [ ] **Step 4: Commit**

```bash
git add components/motion/smooth-scroll.tsx "app/(main)/layout.tsx"
git commit -m "feat: lenis smooth scroll synced with gsap scrolltrigger"
```

---

### Task 7: useScrollReveal hook

**Files:** Create `lib/motion/use-scroll-reveal.ts`.

- [ ] **Step 1: Create the hook**

```ts
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals direct children of the returned ref: opacity 0 + scale .85 -> 1,
 * staggered, once on scroll-in. Respects reduced motion.
 */
export function useScrollReveal<
  T extends HTMLElement = HTMLDivElement,
>(options?: { stagger?: number; selector?: string }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = options?.selector
      ? el.querySelectorAll(options.selector)
      : el.children;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: options?.stagger ?? 0.08,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [options?.stagger, options?.selector]);

  return ref;
}
```

- [ ] **Step 2: Verify** — `npm run build` passes (hook unused yet; import in a temp page is not required).

- [ ] **Step 3: Commit**

```bash
git add lib/motion/use-scroll-reveal.ts
git commit -m "feat: useScrollReveal gsap hook"
```

---

### Task 8: TextRoll component

**Files:** Create `components/motion/text-roll.tsx`, `components/motion/text-roll.module.css`.

- [ ] **Step 1: Create `text-roll.module.css`**

```css
.roll {
  display: inline-flex;
  overflow: hidden;
  vertical-align: top;
  line-height: 1.05;
}
.row {
  display: inline-flex;
}
.clone {
  position: absolute;
  left: 0;
  top: 100%;
}
.wrap {
  position: relative;
  display: inline-block;
}
.letter {
  display: inline-block;
  white-space: pre;
  transition: transform 0.4s var(--ease-out);
  transition-delay: calc(var(--i) * 0.018s);
}
.wrap:hover .row .letter {
  transform: translateY(-100%);
}
.wrap:hover .clone .letter {
  transform: translateY(-100%);
}
@media (prefers-reduced-motion: reduce) {
  .letter {
    transition: none;
  }
  .wrap:hover .row .letter,
  .wrap:hover .clone .letter {
    transform: none;
  }
}
```

- [ ] **Step 2: Create `text-roll.tsx`**

```tsx
import styles from "./text-roll.module.css";

export function TextRoll({ text }: { text: string }) {
  const letters = text.split("");
  const render = (clone?: boolean) => (
    <span
      className={`${styles.row} ${clone ? styles.clone : ""}`}
      aria-hidden={clone}
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          className={styles.letter}
          style={{ ["--i" as string]: i }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
  return (
    <span className={styles.wrap}>
      <span className={styles.roll} aria-label={text}>
        {render(false)}
        {render(true)}
      </span>
    </span>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build` passes. (Visual hover verified when used in works list / nav.)

- [ ] **Step 4: Commit**

```bash
git add components/motion/text-roll.tsx components/motion/text-roll.module.css
git commit -m "feat: TextRoll per-letter hover component"
```

---

### Task 9: SectionEyebrow component

**Files:** Create `components/common/section-eyebrow.tsx`, `.module.css`.

- [ ] **Step 1: Create `section-eyebrow.module.css`**

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}
.bar {
  width: 28px;
  height: 2px;
  background: var(--accent);
}
.tag {
  color: var(--accent);
}
```

- [ ] **Step 2: Create `section-eyebrow.tsx`**

```tsx
import styles from "./section-eyebrow.module.css";

export function SectionEyebrow({ num, label }: { num: string; label: string }) {
  return (
    <p className={styles.eyebrow}>
      <span className={styles.bar} aria-hidden="true" />
      <span className={styles.tag}>[{num}]</span>
      {label}
    </p>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build` passes.

- [ ] **Step 4: Commit**

```bash
git add components/common/section-eyebrow.tsx components/common/section-eyebrow.module.css
git commit -m "feat: SectionEyebrow numbered label"
```

---

### Task 10: DisplayHeading component

**Files:** Create `components/common/display-heading.tsx`, `.module.css`.

- [ ] **Step 1: Create `display-heading.module.css`**

```css
.h {
  font-family: var(--font-switzer), system-ui, sans-serif;
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.02em;
}
.em {
  font-family: var(--font-instrument-serif), Georgia, serif;
  font-style: italic;
  font-weight: 400;
  position: relative;
  white-space: nowrap;
}
.underline {
  position: absolute;
  left: 0;
  bottom: -0.12em;
  width: 100%;
  height: 0.45em;
  color: var(--accent);
  overflow: visible;
}
.underline path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw 0.9s var(--ease-out) forwards;
  animation-delay: 0.3s;
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .underline path {
    animation: none;
    stroke-dashoffset: 0;
  }
}
```

- [ ] **Step 2: Create `display-heading.tsx`**

Parser: text segments split on `*emphasis*` markers; `*...*` renders as serif-italic with an underline SVG.

```tsx
import { Fragment } from "react";
import styles from "./display-heading.module.css";

function Underline() {
  return (
    <svg
      className={styles.underline}
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 9 Q 45 2 95 7 T 197 9"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
      />
    </svg>
  );
}

/** Emphasis is marked with *asterisks*: "We build *digital products*." */
export function DisplayHeading({
  text,
  as: Tag = "h2",
  className = "",
  style,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
}) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <Tag className={`${styles.h} ${className}`} style={style}>
      {parts.map((p, i) =>
        p.startsWith("*") && p.endsWith("*") ? (
          <em key={i} className={styles.em}>
            {p.slice(1, -1)}
            <Underline />
          </em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </Tag>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build` passes.

- [ ] **Step 4: Commit**

```bash
git add components/common/display-heading.tsx components/common/display-heading.module.css
git commit -m "feat: DisplayHeading sans + serif-italic emphasis with underline"
```

---

### Task 11: ShinyCTA button

**Files:** Create `components/motion/shiny-cta.tsx`, `.module.css`.

- [ ] **Step 1: Create `shiny-cta.module.css`**

```css
.cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.4rem;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  background: var(--accent);
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s var(--ease-out);
}
.cta::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 30%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 70%
  );
  transform: translateX(-120%);
  transition: transform 0.6s var(--ease-out);
}
.cta:hover {
  transform: translateY(-2px);
}
.cta:hover::after {
  transform: translateX(120%);
}
```

- [ ] **Step 2: Create `shiny-cta.tsx`**

```tsx
import styles from "./shiny-cta.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function ShinyCTA({ children, className = "", ...rest }: Props) {
  return (
    <button className={`${styles.cta} ${className}`} {...rest}>
      {children}
    </button>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build` passes.

- [ ] **Step 4: Commit**

```bash
git add components/motion/shiny-cta.tsx components/motion/shiny-cta.module.css
git commit -m "feat: ShinyCTA button"
```

**Phase 1 checkpoint:** foundation complete. Dev server: dark bg, grain, smooth scroll, fonts loaded. Primitives unused but compiling.

---

# PHASE 2 — Home

### Task 12: RevealWords + Hero section

**Files:** Create `components/motion/reveal-words.tsx`, `components/sections/hero.tsx` + `hero.module.css`. Delete `components/layout/hero-animation.tsx`.

- [ ] **Step 1: Create `reveal-words.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Wraps a DisplayHeading-rendered node; animates its word spans in. Here we
 * accept plain children and animate top-level word spans by data attribute. */
export function RevealWords({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = el.querySelectorAll("[data-word]");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      },
    );
  }, []);
  return <div ref={ref}>{children}</div>;
}
```

- [ ] **Step 2: Create `hero.module.css`**

```css
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(40% 50% at 70% 30%, var(--accent-soft), transparent 70%),
    radial-gradient(50% 60% at 20% 80%, rgba(255, 61, 0, 0.06), transparent 70%);
}
.content {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}
.title {
  font-size: var(--fs-display, clamp(3rem, 9vw, 7rem));
  margin: 1.2rem 0;
}
.word {
  display: inline-block;
  overflow: hidden;
}
.sub {
  color: var(--text-muted);
  max-width: 48ch;
  font-size: 1.1rem;
}
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  align-items: center;
}
.stats {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}
.stat {
  display: flex;
  flex-direction: column;
}
.statNum {
  font-family: var(--font-instrument-serif);
  font-size: 2rem;
}
.statLabel {
  font-family: var(--font-jetbrains-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

- [ ] **Step 3: Create `hero.tsx`**

Hero headline uses per-word spans (each `data-word`) wrapped in overflow spans; emphasized words are serif-italic. Keep copy from current home.

```tsx
"use client";

import Link from "next/link";
import { RevealWords } from "@/components/motion/reveal-words";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { ShinyCTA } from "@/components/motion/shiny-cta";
import styles from "./hero.module.css";

const WORDS = [
  { t: "I", em: false },
  { t: "build", em: false },
  { t: "digital", em: true },
  { t: "experiences", em: true },
  { t: "that", em: false },
  { t: "ship.", em: false },
];

const STATS = [
  { num: "4+", label: "Years experience" },
  { num: "6", label: "Companies" },
  { num: "20+", label: "Technologies" },
];

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <SectionEyebrow num="01" label="Fullstack & Frontend Engineer" />
        <RevealWords>
          <h1 className={styles.title}>
            {WORDS.map((w, i) => (
              <span key={i} className={styles.word}>
                <span
                  data-word
                  style={{
                    display: "inline-block",
                    fontFamily: w.em
                      ? "var(--font-instrument-serif)"
                      : "var(--font-switzer)",
                    fontStyle: w.em ? "italic" : "normal",
                    fontWeight: w.em ? 400 : 700,
                  }}
                >
                  {w.t}
                </span>{" "}
              </span>
            ))}
          </h1>
        </RevealWords>
        <p className={styles.sub}>
          Moch Fathurrozi — Fullstack developer specializing in frontend, based
          in Semarang, Indonesia. React, Next.js, React Native and beyond.
        </p>
        <div className={styles.actions}>
          <Link href="/works">
            <ShinyCTA>Selected work &nbsp;→</ShinyCTA>
          </Link>
        </div>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Delete the old hero**

Run: `git rm components/layout/hero-animation.tsx`

- [ ] **Step 5: Verify** — temporarily import `<Hero/>` into `app/(main)/page.tsx` (full recompose is Task 13). `npm run build`; dev server: words animate up on load, accent glow, stat row.

- [ ] **Step 6: Commit**

```bash
git add components/motion/reveal-words.tsx components/sections/hero.tsx components/sections/hero.module.css
git commit -m "feat: kinetic hero with word reveal and accent glow"
```

---

### Task 13: Recompose home page

**Files:** Modify `app/(main)/page.tsx`. Create `components/sections/contact-cta.tsx` + `.module.css`.

- [ ] **Step 1: Create `contact-cta.tsx` + `.module.css`**

`contact-cta.module.css`:

```css
.cta {
  padding: 6rem 0;
}
.title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin: 1rem 0 2rem;
}
.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.link {
  font-family: var(--font-jetbrains-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--border);
  transition:
    border-color 0.3s,
    color 0.3s;
}
.link:hover {
  border-color: var(--accent);
  color: var(--accent);
}
```

`contact-cta.tsx`:

```tsx
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import styles from "./contact-cta.module.css";

const LINKS = [
  { label: "GitHub", href: "https://github.com/decozzfx" },
  { label: "LinkedIn", href: "https://linkedin.com/in/decozzfx" },
  { label: "Email", href: "mailto:decozzfx@gmail.com" },
];

export function ContactCTA() {
  return (
    <section className={styles.cta}>
      <SectionEyebrow num="06" label="Contact" />
      <DisplayHeading as="h2" text="Let's *talk.*" className={styles.title} />
      <div className={styles.links}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite `app/(main)/page.tsx`**

Compose: Hero, About, Experience (Partnerships), Skills, Works (WorksList — built Task 14; import and use), How I Work (Task 15), Contact. Each non-hero block uses `SectionEyebrow` + `useScrollReveal`. About/Experience/Skills reuse existing copy. Full file:

```tsx
"use client";

import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/sections/hero";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import { WorksList } from "@/components/sections/works-list";
import { HowIWork } from "@/components/sections/how-i-work";
import { ContactCTA } from "@/components/sections/contact-cta";
import { useScrollReveal } from "@/lib/motion/use-scroll-reveal";
import { getFeaturedWorks } from "@/lib/works";

const PARTNERSHIPS = [
  {
    role: "Frontend Engineer · PT Veritask",
    detail: "Legal AI Platform — Next.js 15, React 19, TypeScript",
  },
  {
    role: "Frontend Engineer · PT MFI",
    detail: "React Native, Next.js, Tailwind CSS",
  },
  {
    role: "Frontend Engineer · PT Xprogroup",
    detail: "Next.js, Tailwind CSS, Rizzui",
  },
  {
    role: "Frontend Engineer · Ismaya Group",
    detail: "React Native, Next.js, Material UI",
  },
  {
    role: "Frontend Engineer · PT Javan Cipta Solusi",
    detail: "Next.js, Tailwind CSS, Material UI",
  },
  {
    role: "Frontend Engineer · PT Infosys Solusi Terpadu",
    detail: "React.js, Tailwind CSS, Material UI",
  },
];

const SKILLS = [
  "React.js",
  "Next.js",
  "Astro",
  "Remix",
  "Solid",
  "Svelte",
  "React Native",
  "Flutter",
  "Express.js",
  "NestJs",
  "AdonisJs",
  "Hono",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Git",
  "AI/LLM Integration",
];

export default function HomePage() {
  const aboutRef = useScrollReveal<HTMLDivElement>();
  const expRef = useScrollReveal<HTMLDivElement>({ selector: "[data-row]" });
  const skillRef = useScrollReveal<HTMLDivElement>({
    selector: "[data-chip]",
    stagger: 0.03,
  });
  const featured = getFeaturedWorks().slice(0, 4);

  return (
    <>
      <Hero />

      <Box as="section" py="6rem" ref={aboutRef}>
        <SectionEyebrow num="02" label="About" />
        <DisplayHeading
          as="h2"
          text="A developer who *cares* about the last pixel."
          style={{
            fontSize: "clamp(2rem,4vw,3.25rem)",
            marginBottom: "1.5rem",
          }}
        />
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: "60ch",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
          }}
        >
          A Fullstack Developer specializing in Frontend with React.js, Next.js,
          Astro, Remix, Solid and Svelte. Mobile with React Native and Flutter;
          backend with Express.js, NestJs, AdonisJs and Hono. 4+ years building
          responsive, user-friendly interfaces, REST APIs and database-backed
          apps, with hands-on AI/LLM integration experience.
        </p>
      </Box>

      <Box as="section" py="6rem">
        <SectionEyebrow num="03" label="Partnerships" />
        <div ref={expRef}>
          {PARTNERSHIPS.map((p) => (
            <div
              key={p.role}
              data-row
              style={{
                padding: "1.1rem 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p style={{ fontWeight: 600 }}>{p.role}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </Box>

      <Box as="section" py="6rem">
        <SectionEyebrow num="04" label="Skills" />
        <div
          ref={skillRef}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
        >
          {SKILLS.map((s) => (
            <span
              key={s}
              data-chip
              style={{
                border: "1px solid var(--border)",
                padding: "0.4rem 0.8rem",
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </Box>

      <Box as="section" py="6rem">
        <SectionEyebrow num="05" label="Selected Work" />
        <WorksList works={featured} />
      </Box>

      <HowIWork />

      <ContactCTA />
    </>
  );
}
```

- [ ] **Step 2 note:** `WorksList` and `HowIWork` are created in Tasks 14 and 15. If executing strictly in order, temporarily comment those two imports + usages, verify, then re-enable after their tasks. Prefer doing Tasks 14 & 15 before final verification of this task.

- [ ] **Step 3: Verify** — `npm run build`; dev server: home scrolls through numbered sections with reveals.

- [ ] **Step 4: Commit**

```bash
git add "app/(main)/page.tsx" components/sections/contact-cta.tsx components/sections/contact-cta.module.css
git commit -m "feat: recompose home with numbered sections and reveals"
```

---

### Task 14: WorksList + cursor preview

**Files:** Create `components/sections/works-list.tsx`, `works-list.module.css`.

- [ ] **Step 1: Create `works-list.module.css`**

```css
.list {
  list-style: none;
}
.item {
  border-top: 1px solid var(--border);
}
.item:last-child {
  border-bottom: 1px solid var(--border);
}
.link {
  display: grid;
  grid-template-columns: 3rem 1fr auto auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1.6rem 0.5rem;
  transition:
    padding 0.4s var(--ease-out),
    background 0.3s;
}
.link:hover {
  padding-left: 1.2rem;
  background: var(--surface);
}
.num {
  font-family: var(--font-jetbrains-mono);
  color: var(--text-muted);
  font-size: 0.8rem;
}
.name {
  font-family: var(--font-instrument-serif);
  font-size: clamp(1.5rem, 3vw, 2.4rem);
}
.tag {
  font-family: var(--font-jetbrains-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
}
.year {
  font-family: var(--font-jetbrains-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}
.arrow {
  color: var(--accent);
}
.preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 150px;
  pointer-events: none;
  z-index: 50;
  opacity: 0;
  object-fit: cover;
  transform: translate(-50%, -50%) scale(0.8);
  transition:
    opacity 0.25s,
    transform 0.25s var(--ease-out);
}
.preview.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
@media (max-width: 768px) {
  .link {
    grid-template-columns: 2rem 1fr auto;
  }
  .tag {
    display: none;
  }
  .preview {
    display: none;
  }
}
```

- [ ] **Step 2: Create `works-list.tsx`**

Floating preview follows the cursor on row hover.

```tsx
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Work } from "@/types";
import { TextRoll } from "@/components/motion/text-roll";
import styles from "./works-list.module.css";

export function WorksList({ works }: { works: Work[] }) {
  const previewRef = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState<string>("");
  const [visible, setVisible] = useState(false);

  const move = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
  };

  return (
    <>
      <ul className={styles.list} onMouseMove={move}>
        {works.map((w, i) => (
          <li key={w.slug} className={styles.item}>
            <Link
              href={`/works/${w.slug}`}
              className={styles.link}
              onMouseEnter={() => {
                setSrc(w.images[0]);
                setVisible(true);
              }}
              onMouseLeave={() => setVisible(false)}
            >
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.name}>
                <TextRoll text={w.title} />
              </span>
              <span className={styles.tag}>{w.platform}</span>
              <span className={styles.year}>{w.year}</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={previewRef}
        src={src}
        alt=""
        aria-hidden="true"
        className={`${styles.preview} ${visible ? styles.visible : ""}`}
      />
    </>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build`; dev server (home Selected Work): rows expand on hover, name letters roll, thumbnail follows cursor.

- [ ] **Step 4: Commit**

```bash
git add components/sections/works-list.tsx components/sections/works-list.module.css
git commit -m "feat: works list with text-roll names and cursor preview"
```

---

### Task 15: HowIWork section (light, no agency-process filler)

**Files:** Create `components/sections/how-i-work.tsx`, `.module.css`.

- [ ] **Step 1: Create `how-i-work.module.css`**

```css
.section {
  padding: 6rem 0;
}
.grid {
  display: grid;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  margin-top: 2rem;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.card {
  background: var(--bg);
  padding: 2rem;
}
.step {
  font-family: var(--font-jetbrains-mono);
  font-size: 0.72rem;
  color: var(--accent);
}
.cardTitle {
  font-family: var(--font-instrument-serif);
  font-size: 1.6rem;
  margin: 0.6rem 0;
}
.cardText {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
```

- [ ] **Step 2: Create `how-i-work.tsx`**

```tsx
"use client";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import { useScrollReveal } from "@/lib/motion/use-scroll-reveal";
import styles from "./how-i-work.module.css";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    text: "Clarify the goal, users and constraints before writing code. Cheap decisions first.",
  },
  {
    n: "02",
    title: "Build",
    text: "Type-safe, component-driven, performance-first. Clean code that survives.",
  },
  {
    n: "03",
    title: "Ship & iterate",
    text: "Deploy, measure, refine. The first release is the start, not the finish.",
  },
];

export function HowIWork() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: "[data-card]" });
  return (
    <section className={styles.section}>
      <SectionEyebrow num="05b" label="How I work" />
      <DisplayHeading
        as="h2"
        text="From *idea* to *launch.*"
        style={{ fontSize: "clamp(2rem,4vw,3.25rem)" }}
      />
      <div className={styles.grid} ref={ref}>
        {STEPS.map((s) => (
          <div key={s.n} className={styles.card} data-card>
            <span className={styles.step}>[{s.n}]</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

(Section numbering: this sits between Selected Work `[05]` and Contact `[06]`; labeled `05b` to avoid renumbering. If preferred, renumber Contact to `[07]` and this to `[06]` — cosmetic.)

- [ ] **Step 3: Verify** — `npm run build`; dev server: 3-card grid reveals on scroll.

- [ ] **Step 4: Commit**

```bash
git add components/sections/how-i-work.tsx components/sections/how-i-work.module.css
git commit -m "feat: How I Work section"
```

**Phase 2 checkpoint:** home fully on new system. Re-enable any temporarily-commented imports from Task 13; `npm run build` + full visual pass.

---

# PHASE 3 — Works pages

### Task 16: Works index → list view

**Files:** Modify `app/(main)/works/page.tsx`.

- [ ] **Step 1: Read current file**

Run: `cat "app/(main)/works/page.tsx"` to preserve metadata/category grouping logic.

- [ ] **Step 2: Rewrite to use `WorksList`**

Replace the grid with the eyebrow + `WorksList`. Keep any freelance/learning split as two labeled lists. Full file:

```tsx
import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import { WorksList } from "@/components/sections/works-list";
import { works } from "@/lib/works";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  const freelance = works.filter((w) => w.category === "freelance");
  const learning = works.filter((w) => w.category === "learning");
  return (
    <div style={{ paddingTop: "2rem" }}>
      <SectionEyebrow num="01" label="Selected Work / 2021 — 2026" />
      <DisplayHeading
        as="h1"
        text="What I've *built.*"
        style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", marginBottom: "2.5rem" }}
      />
      <WorksList works={freelance} />
      {learning.length > 0 && (
        <div style={{ marginTop: "4rem" }}>
          <SectionEyebrow num="02" label="Learning & experiments" />
          <WorksList works={learning} />
        </div>
      )}
    </div>
  );
}
```

(Note: confirm `works` named export and `Work.category` values from `lib/works.ts` and `types/index.ts` — both confirmed present.)

- [ ] **Step 3: Verify** — `npm run build`; dev server `/works`: list view, hover preview works.

- [ ] **Step 4: Commit**

```bash
git add "app/(main)/works/page.tsx"
git commit -m "feat: works index as list view"
```

---

### Task 17: Work detail restyle

**Files:** Modify `app/(main)/works/[slug]/page.tsx`.

- [ ] **Step 1: Read current file**

Run: `cat "app/(main)/works/[slug]/page.tsx"` to preserve `getWorkBySlug`, `generateStaticParams`, `generateMetadata`, image rendering, and the website-link union type (`string | {label,url}[]`).

- [ ] **Step 2: Restyle the detail layout**

Keep all data-fetching/metadata exactly. Replace the presentational JSX so the title uses `DisplayHeading`/serif, a `SectionEyebrow num="—"` shows year·platform, images render in a column, stack chips reuse the home chip style, and website links render as bordered hover-accent links. Preserve the multi-link handling:

```tsx
// inside the component, after fetching `work`:
// title block
<SectionEyebrow num="WORK" label={`${work.year} · ${work.platform}`} />
<h1 style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.05, margin: '0.5rem 0 1.5rem' }}>
  {work.title}
</h1>
<p style={{ color: 'var(--text-muted)', maxWidth: '60ch', lineHeight: 1.7 }}>{work.description}</p>

// stack chips
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1.5rem 0' }}>
  {work.stack.map((s) => (
    <span key={s} style={{ border: '1px solid var(--border)', padding: '0.35rem 0.75rem', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.72rem', textTransform: 'uppercase' }}>{s}</span>
  ))}
</div>

// website link(s) — preserve union type
{work.website && (
  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
    {(typeof work.website === 'string'
      ? [{ label: 'Visit site', url: work.website }]
      : work.website
    ).map((lnk) => (
      <a key={lnk.url} href={lnk.url} target="_blank" rel="noopener noreferrer"
         style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.8rem', textTransform: 'uppercase', padding: '0.7rem 1.1rem', border: '1px solid var(--border)' }}>
        {lnk.label} ↗
      </a>
    ))}
  </div>
)}
```

Render `work.images` as a vertical stack of `next/image` (or `<img>` with eslint-disable) below.

- [ ] **Step 3: Verify** — `npm run build`; dev server: open a work (e.g. `/works/<known-slug>`), title is serif, links/chips styled, images stack.

- [ ] **Step 4: Commit**

```bash
git add "app/(main)/works/[slug]/page.tsx"
git commit -m "feat: restyle work detail page"
```

**Phase 3 checkpoint:** works index + detail on new system.

---

# PHASE 4 — Remaining pages

### Task 18: Posts page restyle

**Files:** Modify `app/(main)/posts/page.tsx`.

- [ ] **Step 1: Read + restyle**

Run `cat "app/(main)/posts/page.tsx"`. Add `SectionEyebrow num="01" label="Writing"` + a `DisplayHeading` title; if it's an empty/placeholder page, render an on-brand empty state:

```tsx
import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";

export const metadata: Metadata = { title: "Posts" };

export default function PostsPage() {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <SectionEyebrow num="01" label="Writing" />
      <DisplayHeading
        as="h1"
        text="Notes & *thoughts.*"
        style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
      />
      <p style={{ color: "var(--text-muted)", marginTop: "1.5rem" }}>
        Coming soon.
      </p>
    </div>
  );
}
```

(If the current page already lists posts, preserve that data and wrap items in the eyebrow + serif-title shell instead of the empty state.)

- [ ] **Step 2: Verify** — `npm run build`; dev server `/posts`.

- [ ] **Step 3: Commit**

```bash
git add "app/(main)/posts/page.tsx"
git commit -m "feat: restyle posts page"
```

---

### Task 19: CV page dark restyle

**Files:** Modify `app/(cv)/cv/page.tsx` and `app/(cv)/layout.tsx` if needed.

- [ ] **Step 1: Read both**

Run: `cat "app/(cv)/cv/page.tsx" "app/(cv)/layout.tsx"`.

- [ ] **Step 2: Restyle to dark tokens**

Replace any light/brutalist colors with CSS vars (`var(--bg)`, `var(--text)`, `var(--text-muted)`, `var(--border)`, `var(--accent)`), section headers with `SectionEyebrow`, name/title with serif. Keep the wider container. Keep all CV content/data intact.

- [ ] **Step 3: Verify** — `npm run build`; dev server `/cv`: dark, readable, wider layout intact.

- [ ] **Step 4: Commit**

```bash
git add "app/(cv)/cv/page.tsx" "app/(cv)/layout.tsx"
git commit -m "feat: dark restyle cv page"
```

---

### Task 20: Navbar + fullscreen burger overlay

**Files:** Modify `components/layout/navbar.tsx`. Create `components/layout/menu-overlay.tsx` + `.module.css`.

- [ ] **Step 1: Read current navbar**

Run: `cat components/layout/navbar.tsx` (note any ThemeToggle usage to remove — done in Task 5, confirm gone).

- [ ] **Step 2: Create `menu-overlay.module.css`**

```css
.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.5rem;
  transform: translateY(-100%);
  transition: transform 0.6s var(--ease-out);
}
.overlay.open {
  transform: translateY(0);
}
.list {
  list-style: none;
}
.item {
  font-family: var(--font-instrument-serif);
  font-size: clamp(2.5rem, 8vw, 5rem);
  padding: 0.4rem 0;
}
.item a:hover {
  color: var(--accent);
}
```

- [ ] **Step 3: Create `menu-overlay.tsx`**

```tsx
"use client";

import Link from "next/link";
import { TextRoll } from "@/components/motion/text-roll";
import styles from "./menu-overlay.module.css";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Posts", href: "/posts" },
  { label: "CV", href: "/cv" },
];

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      aria-hidden={!open}
    >
      <ul className={styles.list}>
        {ITEMS.map((it) => (
          <li key={it.href} className={styles.item}>
            <Link href={it.href} onClick={onClose}>
              <TextRoll text={it.label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 4: Rewrite navbar**

Logo/name (link to `/`) + `ShinyCTA` ("Start a project" → `mailto:`) + a burger button toggling `MenuOverlay`. Use local state. Replace `components/layout/navbar.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ShinyCTA } from "@/components/motion/shiny-cta";
import { MenuOverlay } from "./menu-overlay";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          background: "rgba(10,10,11,0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "1.4rem",
          }}
        >
          Moch Fathurrozi
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="mailto:decozzfx@gmail.com">
            <ShinyCTA>Start a project &nbsp;→</ShinyCTA>
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text)",
              cursor: "pointer",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
```

- [ ] **Step 5: Verify** — `npm run build`; dev server: menu opens fullscreen, links roll, CTA sheen.

- [ ] **Step 6: Commit**

```bash
git add components/layout/navbar.tsx components/layout/menu-overlay.tsx components/layout/menu-overlay.module.css
git commit -m "feat: navbar with fullscreen burger overlay"
```

---

### Task 21: Footer restyle

**Files:** Modify `components/layout/footer.tsx`.

- [ ] **Step 1: Read current** — `cat components/layout/footer.tsx`.

- [ ] **Step 2: Rewrite to multi-col + serif tagline**

```tsx
import Link from "next/link";

const COLS = [
  {
    title: "Sitemap",
    links: [
      ["Home", "/"],
      ["Works", "/works"],
      ["Posts", "/posts"],
      ["CV", "/cv"],
    ],
  },
  {
    title: "Social",
    links: [
      ["GitHub", "https://github.com/decozzfx"],
      ["LinkedIn", "https://linkedin.com/in/decozzfx"],
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "2rem",
            lineHeight: 1.1,
          }}
        >
          Fullstack
          <br />
          developer from
          <br />
          <em>Semarang.</em>
        </p>
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          {COLS.map((c) => (
            <div key={c.title}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.8rem",
                }}
              >
                {c.title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {c.links.map(([label, href]) => (
                  <li key={href}>
                    {href.startsWith("http") ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {label} ↗
                      </a>
                    ) : (
                      <Link href={href}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p
        style={{
          maxWidth: "var(--container)",
          margin: "3rem auto 0",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
        }}
      >
        © 2026 Moch Fathurrozi
      </p>
    </footer>
  );
}
```

- [ ] **Step 3: Verify** — `npm run build`; dev server: footer styled.

- [ ] **Step 4: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: restyle footer"
```

---

### Task 22: 404 page

**Files:** Modify `app/not-found.tsx`.

- [ ] **Step 1: Rewrite on-brand**

```tsx
import Link from "next/link";
import { DisplayHeading } from "@/components/common/display-heading";
import { ShinyCTA } from "@/components/motion/shiny-cta";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <DisplayHeading
        as="h1"
        text="Page *not found.*"
        style={{ fontSize: "clamp(2.5rem,8vw,6rem)" }}
      />
      <p style={{ color: "var(--text-muted)", margin: "1rem 0 2rem" }}>
        The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <ShinyCTA>Back home &nbsp;→</ShinyCTA>
      </Link>
    </div>
  );
}
```

(Note: `not-found.tsx` renders inside the root layout, not `(main)` — so no Navbar/SmoothScroll. That's fine.)

- [ ] **Step 2: Verify** — `npm run build`; dev server: visit a bad URL.

- [ ] **Step 3: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: on-brand 404 page"
```

**Phase 4 checkpoint:** every page + nav/footer on new system. Full click-through.

---

# PHASE 5 — Polish

### Task 23: Custom cursor + magnetic hover

**Files:** Create `components/motion/custom-cursor.tsx` + `.module.css`, `components/motion/magnetic.tsx`. Modify `app/(main)/layout.tsx` to mount cursor.

- [ ] **Step 1: Create `custom-cursor.module.css`**

```css
.dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition:
    width 0.2s,
    height 0.2s;
}
.ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.12s var(--ease-out);
}
@media (max-width: 768px) {
  .dot,
  .ring {
    display: none;
  }
}
```

- [ ] **Step 2: Create `custom-cursor.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./custom-cursor.module.css";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = 0,
      ry = 0,
      x = 0,
      y = 0,
      raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${x}px`;
        dot.current.style.top = `${y}px`;
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dot} className={styles.dot} aria-hidden />
      <div ref={ring} className={styles.ring} aria-hidden />
    </>
  );
}
```

- [ ] **Step 3: Create `magnetic.tsx`**

```tsx
"use client";

import { useRef } from "react";

export function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.3}px, ${(e.clientY - (r.top + r.height / 2)) * 0.3}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        display: "inline-block",
        transition: "transform 0.3s var(--ease-out)",
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Mount cursor** — in `app/(main)/layout.tsx`, render `<CustomCursor />` inside `<SmoothScroll>`. Optionally wrap nav CTA in `<Magnetic>`.

- [ ] **Step 5: Verify** — `npm run build`; dev server: cursor dot + trailing ring; CTA pulls toward cursor.

- [ ] **Step 6: Commit**

```bash
git add components/motion/custom-cursor.tsx components/motion/custom-cursor.module.css components/motion/magnetic.tsx "app/(main)/layout.tsx"
git commit -m "feat: custom cursor and magnetic hover"
```

---

### Task 24: three.js shader hero glow (optional, with fallback)

**Files:** Create `components/sections/shader-bg.tsx`. Modify `components/sections/hero.tsx` to mount it behind content.

- [ ] **Step 1: Create `shader-bg.tsx`**

A lightweight full-bleed plane with an animated gradient fragment shader in the accent color. Dynamically imported, `ssr:false`. Falls back to the existing CSS `.glow` if WebGL unavailable.

```tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderBg() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    let gl: WebGLRenderingContext | null = null;
    try {
      gl = document.createElement("canvas").getContext("webgl");
    } catch {
      gl = null;
    }
    if (!gl) return; // CSS .glow fallback remains
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const resize = () => renderer.setSize(el.clientWidth, el.clientHeight);
    resize();
    el.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(el.clientWidth, el.clientHeight) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: `void main(){ gl_Position = vec4(position,1.0); }`,
      fragmentShader: `
        uniform float u_time; uniform vec2 u_res;
        void main(){
          vec2 uv = gl_FragCoord.xy/u_res;
          float w = 0.5 + 0.5*sin(uv.x*4.0 + u_time*0.4) * cos(uv.y*3.0 - u_time*0.3);
          vec3 accent = vec3(1.0, 0.239, 0.0);
          float a = smoothstep(0.4, 1.0, w) * 0.18;
          gl_FragColor = vec4(accent, a);
        }`,
    });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

    let raf = 0;
    const t0 = performance.now();
    const loop = () => {
      uniforms.u_time.value = (performance.now() - t0) / 1000;
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <div
      ref={mount}
      style={{ position: "absolute", inset: 0, zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
```

- [ ] **Step 2: Mount in hero** — in `hero.tsx`, dynamically import to avoid SSR:

```tsx
import dynamic from "next/dynamic";
const ShaderBg = dynamic(() => import("./shader-bg").then((m) => m.ShaderBg), {
  ssr: false,
});
```

Render `<ShaderBg />` just before the `.glow` div (glow stays as fallback/extra).

- [ ] **Step 3: Verify** — `npm run build`; dev server: hero has subtle animated accent field; disabling WebGL still shows CSS glow.

- [ ] **Step 4: Commit**

```bash
git add components/sections/shader-bg.tsx components/sections/hero.tsx
git commit -m "feat: three.js shader glow behind hero with css fallback"
```

---

### Task 25: Performance + accessibility pass

**Files:** Various (as needed).

- [ ] **Step 1: Reduced-motion audit**

Confirm every motion component early-returns on `prefers-reduced-motion`. Run:

```bash
grep -rn "prefers-reduced-motion" components lib app
```

Expected: SmoothScroll, useScrollReveal, RevealWords, CustomCursor, ShaderBg, and CSS files all covered. Add guards where missing.

- [ ] **Step 2: Image audit**

Ensure work/preview images have dimensions or `next/image`; cursor preview `<img>` is `aria-hidden`. Verify no console warnings on `/` and `/works`.

- [ ] **Step 3: Production build + bundle sanity**

Run: `npm run build`
Expected: clean build. Note first-load JS for `/`. If GSAP+three push it high, confirm `ShaderBg` is dynamically imported (it is) and consider lazy-loading GSAP-only sections.

- [ ] **Step 4: Lint + format**

Run: `npm run lint && npm run prettier`
Expected: no lint errors; files formatted.

- [ ] **Step 5: Lighthouse (manual)**

`npm run build && npm run start`, open `http://localhost:3000`, run Lighthouse (Performance/Accessibility/Best-Practices/SEO). Record scores; fix any A11y errors (contrast on `textMuted`, focus order, alt text).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: performance and accessibility polish pass"
```

**Phase 5 checkpoint + done:** full Wibify-taste site, dark + orange, all motion, all pages.

---

## Self-review (plan vs spec)

- **Spec §tokens** → Tasks 2, 3. ✓
- **Spec §motion primitives** → Tasks 6, 7, 8, 11, 12 (RevealWords), 23 (Magnetic/cursor). ✓
- **Spec §shared components** (SectionEyebrow, DisplayHeading, grain) → Tasks 4, 9, 10. ✓
- **Spec §pages** (home, works, detail, posts, cv, nav, footer, 404) → Tasks 13–22. ✓
- **Spec §styling architecture** (Chakra retained + CSS Modules) → applied throughout; provider Task 5. ✓
- **Spec §decomposition P1–P5** → Phases map 1:1. ✓
- **Spec open decision: How I work** → Task 15 (light version). ✓
- **Spec open decision: light-mode toggle** → Task 5 (forced dark, toggle removed). ✓
- **Spec §bento results (chart/rings)** → NOT included as a dedicated task. Rationale: owner is an individual, not an agency with traffic/Lighthouse-client stats; the bento metrics section is agency-specific and would be filler. The "taste" is carried by eyebrows, serif emphasis, text-roll, list+preview, reveals, pinned/cards (HowIWork). **If the owner wants a bento stats block, add it as a Phase-2 task** using the home stat data.
- **Spec §pinned stacked cards** → represented by HowIWork (Task 15) as a card grid, not a scrubbed pin. If a true GSAP pin/scrub stack is wanted, extend Task 15 to use `ScrollTrigger pin`. Flagged for owner.

Two intentional deviations above are called out rather than silently dropped.
