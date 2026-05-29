# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server with Turbopack at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run prettier # Format code with Prettier
```

## Architecture

This is a **Next.js 15** portfolio with **App Router**, **TypeScript**, and **Chakra UI v3**. Uses a dark editorial-premium design aesthetic.

### Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Chakra UI v3 with custom theme system
- Framer Motion for animations
- GSAP + Lenis (smooth scroll + scroll animations)
- three.js (hero shader)
- next-themes for color mode

### Directory Structure

```
app/
├── layout.tsx              # Root layout with providers
├── not-found.tsx           # 404 page
├── globals.css             # Global styles + fonts
├── (main)/                 # Route group - main layout
│   ├── layout.tsx          # Navbar + footer
│   ├── page.tsx            # Home page
│   ├── works/
│   │   ├── page.tsx        # Works list
│   │   └── [slug]/page.tsx # Dynamic work detail
│   └── posts/page.tsx
└── (cv)/                   # Route group - CV layout (wider)
    ├── layout.tsx
    └── cv/page.tsx

components/
├── ui/                     # Chakra v3 providers
│   └── provider.tsx        # ChakraProvider + ThemeProvider
├── layout/                 # Layout components
│   ├── navbar.tsx
│   └── footer.tsx
├── motion/                 # Animation / interaction primitives
│   ├── smooth-scroll.tsx   # Lenis wrapper
│   ├── text-roll.tsx       # Hover text-roll effect
│   ├── reveal-words.tsx    # Scroll-triggered word reveal
│   ├── shiny-cta.tsx       # Shiny button
│   ├── custom-cursor.tsx   # Custom cursor
│   └── magnetic.tsx        # Magnetic hover
├── sections/               # Page sections
│   ├── hero.tsx
│   ├── works-list.tsx
│   ├── how-i-work.tsx
│   ├── contact-cta.tsx
│   └── shader-bg.tsx       # three.js hero shader background
└── common/
    ├── section.tsx         # Animated section wrapper
    ├── section-eyebrow.tsx # Numbered eyebrow labels [01]…
    ├── display-heading.tsx # Serif display headings
    └── grain.tsx           # CSS grain overlay

lib/
├── theme.ts                # Chakra UI v3 theme
├── works.ts                # Works data array + helpers
└── motion/
    └── use-scroll-reveal.ts # GSAP scroll reveal hook

types/
└── index.ts                # TypeScript interfaces
```

### Key Patterns

**Route Groups**: `(main)` and `(cv)` provide different layouts without affecting URL structure.

**Theme System** (`lib/theme.ts`):

- Uses `createSystem` API from Chakra UI v3
- Semantic color tokens: `bg`, `surface`, `border`, `text`, `textMuted`, `accent`
- Fonts: Instrument Serif (display/emphasis), Inter as Switzer-fallback (body), JetBrains Mono (labels)
- Dark-only (theme forced dark; toggle removed)

**Works Data** (`lib/works.ts`):

- Centralized work/project data
- Helper functions: `getWorkBySlug()`, `getFeaturedWorks()`

### Design System (Dark Editorial-Premium)

- Dark near-black background (#0A0A0B) with #FF3D00 accent
- Numbered section eyebrows [01], [02]… as structural markers
- Serif-italic emphasis words with hand-drawn underline
- Text-roll hover effect on interactive text
- Works displayed as a list with cursor-preview on hover
- Smooth scroll (Lenis) + scroll-triggered reveals (GSAP)
- Grain overlay for tactile texture
- Fullscreen burger menu
- Custom cursor

### Task Master AI

Configuration in `.taskmasterconfig`. Requires `PERPLEXITY_API_KEY` in `.env` file.
