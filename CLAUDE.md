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

This is a **Next.js 15** portfolio with **App Router**, **TypeScript**, and **Chakra UI v3**. Uses a brutalist modern design aesthetic.

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Chakra UI v3 with custom theme system
- Framer Motion for animations
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
│   │   ├── page.tsx        # Works grid
│   │   └── [slug]/page.tsx # Dynamic work detail
│   └── posts/page.tsx
└── (cv)/                   # Route group - CV layout (wider)
    ├── layout.tsx
    └── cv/page.tsx

components/
├── ui/                     # Chakra v3 providers
│   ├── provider.tsx        # ChakraProvider + ThemeProvider
│   └── color-mode.tsx      # Color mode hooks
├── layout/                 # Layout components
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── hero-animation.tsx  # 2D geometric animation
├── sections/               # Page sections
│   └── bio-section.tsx
├── cards/
│   └── work-card.tsx
└── common/
    ├── section.tsx         # Animated section wrapper
    ├── paragraph.tsx
    └── theme-toggle.tsx

lib/
├── theme.ts                # Chakra UI v3 theme (brutalist design)
└── works.ts                # Works data array + helpers

types/
└── index.ts                # TypeScript interfaces
```

### Key Patterns

**Route Groups**: `(main)` and `(cv)` provide different layouts without affecting URL structure.

**Theme System** (`lib/theme.ts`):
- Uses `createSystem` API from Chakra UI v3
- Semantic color tokens: `bg`, `surface`, `border`, `text`, `textMuted`, `accent`
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- Dark mode by default

**Color Mode** (`components/ui/color-mode.tsx`):
- Uses `next-themes` for SSR-safe color mode
- Custom hooks: `useColorMode()`, `useColorModeValue()`

**Works Data** (`lib/works.ts`):
- Centralized work/project data
- Helper functions: `getWorkBySlug()`, `getFeaturedWorks()`

### Design System (Brutalist Modern)
- High contrast: black/white with orange-red accent (#FF3D00)
- Sharp corners, no rounded borders
- Bold typography with strong weight contrast
- Grid-based layouts with geometric shapes
- Monospace text for labels/metadata

### Task Master AI
Configuration in `.taskmasterconfig`. Requires `PERPLEXITY_API_KEY` in `.env` file.
