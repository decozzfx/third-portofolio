# Design — "Wibify-taste" Portfolio Pivot

**Date:** 2026-05-29
**Branch:** `feature/wibify-taste-redesign`
**Status:** Approved (design), pending spec review

## Goal

Re-skin the existing Next.js 15 portfolio to carry the *taste* of
[wibify.de](https://wibify.de/en) (Awwwards-grade dark editorial-premium agency
site) while keeping the owner's own brand color. Same engineer content —
agency-grade presentation. This is a **full visual pivot** away from the current
brutalist/mono aesthetic.

## Reference analysis (captured from live DOM)

Wibify's actual signature (corrects earlier assumptions):

- **Dark**, not light. `data-theme="dark"`, bg `#0A0A0B`. Hero = video bg + soft
  light blooms + grain overlay.
- **Lime/chartreuse accent** (`#c9e265` / `#99ff00`) — we replace with the
  owner's orange.
- **Fonts:** Instrument Serif (display + emphasis), Switzer (body sans, self-hosted
  woff2), JetBrains Mono (labels/tags).

Signature "taste" moves (the things that MUST be reproduced):

1. Numbered sections `[01]…[07]` — mono tag + accent bar eyebrow.
2. Serif-italic emphasis words inside sans headlines (`We build <em>digital
   products</em>`) + hand-drawn SVG underline on emphasized words.
3. Hero headline reveals **word-by-word**.
4. **text-roll** — letters roll/flip up on hover (every link, work name, menu item).
5. Works = **vertical list** (not grid); hovering a row shows a floating
   **cursor-preview thumbnail** that follows the mouse.
6. **Smooth scroll** (Lenis) + scroll-reveal (`scale .85 → 1` + fade), staggered.
7. **Pinned stacked cards** scroll (Wibify's process section) — repurposed here,
   see "Open decisions".
8. **Bento grid** results section: animated SVG line chart, ring gauges, console.
9. Grain texture overlay, three.js shader glow, fullscreen burger menu overlay,
   "shiny" CTA buttons, custom cursor.

## Decisions (locked)

| Topic | Decision |
|-------|----------|
| Direction | Full pivot to Wibify taste |
| Palette | Dark premium + owner accent `#FF3D00` (Wibify *structure*, owner *color*) |
| Type | Instrument Serif (display) + Switzer (body) + JetBrains Mono (labels) |
| Motion | GSAP + ScrollTrigger + Lenis + Framer Motion (micro) + three.js shader |
| Scope | Everything: Home, Works, Work detail, Posts, CV, navbar, footer, 404 |
| Styling | Chakra v3 provider + dark theme tokens retained; signature sections built as CSS-Module components driven by CSS custom-properties |

## Design tokens

- `bg #0A0A0B` · `surface #141416` · `text #FAFAFA` · `textMuted #8A8A8E`
  · `border rgba(255,255,255,.08)`
- `accent #FF3D00` — applied everywhere Wibify uses lime (chart, ring gauges,
  shader, hand-drawn underline, hover states, selection).
- Grain overlay: fixed, `aria-hidden`, low-opacity noise (SVG/PNG).
- Fonts via `next/font` (Instrument Serif, JetBrains Mono) + self-hosted Switzer
  woff2 (`400`, `700`) preloaded.
- Dark mode is the default and only mode for the redesign (drop the light theme
  toggle from the brutalist build, or force dark).

## Motion primitives — `lib/motion/`

- `<SmoothScroll>` — Lenis instance, wraps the `(main)` route-group layout; GSAP
  ScrollTrigger synced to Lenis via `scrollerProxy`/`lenis.on('scroll')`.
- `useScrollReveal()` — GSAP, initial `opacity:0; scale:.85`, animates to
  `1/1` on enter, staggered children, ScrollTrigger `once: true`.
- `<TextRoll>` — splits a string into per-letter spans (two stacked rows: real +
  clone), rolls up on hover. Used by links, work names, menu items.
- `<RevealWords>` — hero headline word-by-word entrance.
- `<Magnetic>` — magnetic hover for buttons/links; pairs with a custom cursor.
- `<ShinyCTA>` — primary button with sheen.
- Pinned/scrub — GSAP `pin: true` + `scrub` for any stacked-card section.
- All motion respects `prefers-reduced-motion` (no transforms, instant reveals).

## Shared components

- `<SectionEyebrow num="01" label="About" />` — accent bar + mono `[01]` tag.
- `<DisplayHeading>` — sans heading with serif-italic `<em>` emphasis +
  hand-drawn SVG underline path on emphasized words.
- Reused across all pages for consistency.

## Pages

- **Home** — hero (kinetic words + shader/glow + stat row) → About → Experience
  (Partnerships) → Skills → Works (list + cursor-preview) → optional
  "How I work" → Contact CTA. Sections numbered `[01]…`.
- **Works** — vertical **list** replacing the current grid; text-roll names,
  hover floating thumbnail, `tag · year · ↗`.
- **Work detail** (`[slug]`) — big serif title, hero image, meta row, body,
  prev/next nav.
- **Posts** — list, same eyebrow system.
- **CV** — dark restyle, keep the wider `(cv)` layout.
- **Navbar** — logo + shiny CTA + burger → fullscreen overlay menu (text-roll
  links).
- **Footer** — multi-column grid + big serif tagline.
- **404** — on-brand dark.

## Styling architecture

Keep the Chakra v3 provider and theme tokens (next-themes already wired for
SSR-safe color mode). Author the signature sections (hero, text-roll, works list,
bento, grain, pinned cards, shader) as **CSS-Module components** driven by CSS
custom-properties that mirror the theme tokens. This reuses existing infra and
isolates the heavy custom CSS from Chakra's styling engine. Remove brutalist-only
bits: sharp-corner enforcement, the 2D geometric hero animation, mono-everywhere.

## Decomposition (phased)

Scope is large (every page + 4 motion systems), so build in phases. Each phase is
independently shippable and reviewable.

- **P1 — Foundation:** tokens, fonts (Switzer self-host + next/font), grain
  overlay, `<SmoothScroll>` (Lenis + GSAP wiring), motion primitives, shared
  components (`SectionEyebrow`, `DisplayHeading`, `TextRoll`, `ShinyCTA`).
- **P2 — Home:** all home sections on the new system.
- **P3 — Works:** list view + cursor-preview + work detail page.
- **P4 — Remaining pages:** Posts, CV, navbar (+ burger overlay), footer, 404.
- **P5 — Polish:** three.js shader background (with CSS-gradient-blob fallback),
  custom cursor, magnetic hover, performance + Lighthouse pass, reduced-motion
  audit.

three.js shader is a P5 *optional* flourish; fall back to animated CSS gradient
blobs if it costs too much bundle/perf.

## Open decisions (resolve during implementation)

1. **"How I work" / pinned-cards section** — owner has no agency *process*.
   Options: repurpose as a "How I work" (discovery → build → ship) or a career
   timeline, OR drop the pinned-cards section entirely. Default: include a light
   "How I work" in P2/P5; drop if it feels like filler.
2. **Light-mode toggle** — redesign is dark-first. Decide whether to remove the
   toggle or keep a (lower-priority) light variant. Default: dark-only.

## Non-goals

- No backend/CMS changes — `lib/works.ts` data array stays.
- No new routes beyond existing ones.
- No content rewrite (copy stays; only presentation changes).
