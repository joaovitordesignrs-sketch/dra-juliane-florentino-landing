---
phase: 01-funda-o-e-sistema-de-marca
plan: 02
subsystem: brand
tags:
  - branding
  - typography
  - design-tokens
  - tailwind-v4
  - next-font
  - wcag-aa
  - svg-logo
dependency_graph:
  requires:
    - "Plan 01-01 chassis: Next.js 16 + Tailwind v4 + TS strict + path alias @/* + lib/utils.ts cn()"
  provides:
    - "Tailwind v4 @theme block with locked brand color tokens (background, foreground, primary, primary-foreground, primary-strong, primary-strong-foreground, muted, muted-foreground, border, accent-whatsapp)"
    - "next/font/google instances exported as fontHeading (Fraunces, weights 400/500/600) and fontBody (Inter, weights 400/500/600/700) with display: swap"
    - "Font CSS variables --font-heading / --font-body wired on <html className> + exposed via @theme so Tailwind utilities font-heading / font-body work"
    - "<Logo /> inline SVG word-mark component (Dra. JULIANE / FLORENTINO) with currentColor fill, width prop scaling, viewBox 240x96"
    - "components/brand/index.ts barrel export for clean imports"
    - "Smoke-test home page rendering Logo + 8 swatches + typography ladder for visual verification"
  affects:
    - "Plan 01-03 will compose <Button>, <Section>, <Container> using bg-primary, text-primary-foreground, font-heading, font-body, etc."
    - "Phase 2 sections will all consume these same utilities — no further token decisions needed"
    - "app/page.tsx is intentionally a smoke-test placeholder; Phase 2 replaces it with the 7 real sections"
tech_stack:
  added:
    - "next/font/google: Fraunces (variable serif, weights 400-600)"
    - "next/font/google: Inter (sans, weights 400-700)"
  patterns:
    - "Tailwind v4 CSS-first @theme directive (NO tailwind.config.ts)"
    - "next/font self-hosting (fonts shipped from /_next/static/media/, not fonts.gstatic.com)"
    - "Font CSS variable composition: next/font writes to var(--font-heading); @theme aliases it with fallback chain to generate font-heading utility"
    - "shadcn token convention: --color-X-foreground for ink-on-X pairings"
    - "Inline SVG word-mark with currentColor for theme-aware recoloring"
key_files:
  created:
    - "lib/fonts.ts (next/font instances for Fraunces + Inter with fallbacks and display: swap)"
    - "components/brand/logo.tsx (Logo word-mark SVG component, viewBox 240x96)"
    - "components/brand/index.ts (barrel export for @/components/brand)"
  modified:
    - "app/globals.css (added @theme block with 10 brand color tokens + 2 font tokens, plus @layer base reset)"
    - "app/layout.tsx (added font className wiring via cn(fontHeading.variable, fontBody.variable) on <html>; body now has font-body bg-background text-foreground antialiased)"
    - "app/page.tsx (replaced placeholder with smoke-test rendering Logo + 8-swatch grid + typography ladder + primary/primary-strong contrast samples)"
decisions:
  - "Adjusted --color-primary-strong from #A56B4F to #955A42 to actually meet WCAG AA normal-text floor (4.5:1) — original locked hex measured 4.09:1 against ivory background, which would have failed the contrast acceptance criterion. New hex measures 5.16:1 vs background and 5.50:1 vs white. Hue preserved (warm terracotta-gold), just darker."
  - "Fraunces chosen over Cormorant Garamond per CONTEXT.md preference (variable axis = single woff2 for all weights = better LCP)"
  - "Inter chosen over Manrope for widest weight coverage in next/font/google + strongest pt-BR Latin rendering on Android Chrome (90%+ traffic per CLAUDE.md)"
  - "No tailwind.config.ts created — Tailwind v4 reads @theme directly from globals.css"
  - "No --container-base / --spacing-section-y-* tokens — Plan 01-03's Section/Container will use literal Tailwind utilities (py-16 md:py-24 lg:py-32, max-w-7xl) to avoid dead theme variables"
  - "suppressHydrationWarning on <html> is the official next/font recommendation to silence hydration false-positives caused by computed font className"
  - "Logo uses inline SVG <text> elements (not vectorized paths) so the Fraunces typography from next/font cascades automatically via var(--font-heading); also keeps text selectable for SEO/a11y"
metrics:
  duration_minutes: ~10
  completed_date: "2026-04-27"
  tasks_completed: 3
  commits: 3
  requirements_addressed:
    - "BRAND-01"
    - "BRAND-02"
    - "BRAND-03"
    - "BRAND-04"
---

# Phase 1 Plan 01-02: Brand Foundation Summary

JWT-style locked brand foundation: Tailwind v4 `@theme` color/typography tokens, Fraunces + Inter via `next/font` with self-hosting, and an inline SVG `<Logo>` word-mark — all visually verified against a smoke-test home page that exercises every token and font weight.

## What Was Built

The design-system layer that every Phase 2 component will compose against:

- **Brand tokens (Tailwind v4 `@theme`)** — 10 color CSS variables and 2 font CSS variables defined directly in `app/globals.css`. No `tailwind.config.ts` exists; v4 reads `@theme` declarations as the source of truth and auto-generates utilities (`bg-primary`, `text-foreground`, `border-border`, `font-heading`, `font-body`, etc.).
- **Self-hosted fonts** — `lib/fonts.ts` declares `fontHeading` (Fraunces, weights 400/500/600) and `fontBody` (Inter, weights 400/500/600/700) via `next/font/google` with `display: "swap"` and fallback chains. Both font className tokens are applied to `<html>` so the CSS variables `--font-heading` / `--font-body` resolve to the actual Google-served-via-Next font URLs. Build confirms 10 woff2 files in `.next/static/media/`; rendered HTML contains zero references to `fonts.googleapis.com` or `fonts.gstatic.com`.
- **`<Logo>` word-mark** — `components/brand/logo.tsx` renders inline SVG with two `<text>` lines ("Dra. JULIANE" smaller / "FLORENTINO" larger), a hairline divider at y=50, all painted with `currentColor` so `text-foreground` / `text-primary` recolor it. ViewBox `0 0 240 96` (2.5:1 ratio); height auto-scales from `width` prop. Accessible via `role="img"` + `aria-label` + `<title>`.
- **Smoke-test page** — `app/page.tsx` renders the Logo, 8 brand color swatches (one per token), 6 typography rows (3 Fraunces weights + 3 Inter weights), and inline samples of `text-primary-strong` (body link) vs `text-primary` (large heading). This page will be replaced wholesale by Phase 2 — its only purpose is visual proof that the brand layer wires up end-to-end.

## Final Pinned `@theme` Block

The exact contents of `app/globals.css` after this plan:

```css
@import "tailwindcss";

@theme {
  /* ---------- Brand colors (LOCKED — see 01-02-PLAN.md color_locks) ---------- */
  --color-background: #fbf7f2;
  --color-foreground: #1a1614;

  --color-primary: #b07a5f;
  --color-primary-foreground: #ffffff;
  --color-primary-strong: #955a42;
  --color-primary-strong-foreground: #ffffff;

  --color-muted: #f3ece3;
  --color-muted-foreground: #7a6e62;

  --color-border: #e8dfd3;

  --color-accent-whatsapp: #25d366;

  /* ---------- Typography (CSS vars set by next/font) ---------- */
  --font-heading: var(--font-heading), Georgia, "Cambria", "Times New Roman", Times, serif;
  --font-body:
    var(--font-body), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}
```

Plus an `@layer base` block that ensures SSR HTML has the right colors before Tailwind classes hydrate (zero flash):

```css
@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-body);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-heading);
    letter-spacing: -0.01em;
  }
}
```

## Resolved Font Configuration

| Font     | Family   | Source              | Weights loaded     | Style    | display | Variable          | Fallbacks                                                          |
| -------- | -------- | ------------------- | ------------------ | -------- | ------- | ----------------- | ------------------------------------------------------------------ |
| Heading  | Fraunces | next/font/google    | 400, 500, 600      | normal   | swap    | `--font-heading`  | Georgia, Cambria, Times New Roman, Times, serif                    |
| Body     | Inter    | next/font/google    | 400, 500, 600, 700 | normal   | swap    | `--font-body`     | system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif |

Both `subsets: ["latin"]` and `preload: true`. After build, `.next/static/media/` contains **10 woff2 files** (variable axes for Fraunces + per-weight files for Inter) — confirms self-hosting active.

## WCAG AA Contrast Verification

The Task 1 acceptance criterion ran the inline Node script computing sRGB → relative luminance → contrast ratio (WCAG 2.1 §1.4.3). After adjusting `--color-primary-strong` from `#A56B4F` to `#955A42`, all four floors pass.

**Final JSON output:**

```json
{
  "fg_bg": 16.8450741323411,
  "strong_bg": 5.155294013346443,
  "pri_bg": 3.3974189670435013,
  "pf_pri": 3.6237639894029967
}
```

| Pairing                                                | Hex pair                  | Ratio  | Floor      | Status |
| ------------------------------------------------------ | ------------------------- | ------ | ---------- | ------ |
| `fg_bg` (foreground on background)                     | `#1A1614` on `#FBF7F2`    | 16.85  | >= 7 (AAA) | PASS   |
| `strong_bg` (primary-strong on background, body text)  | `#955A42` on `#FBF7F2`    | 5.16   | >= 4.5     | PASS   |
| `pri_bg` (primary on background, large text only)      | `#B07A5F` on `#FBF7F2`    | 3.40   | >= 3       | PASS   |
| `pf_pri` (primary-foreground on primary, button label) | `#FFFFFF` on `#B07A5F`    | 3.62   | >= 3       | PASS   |

**Original plan claim vs measured:** the planner's `<color_locks>` table claimed `#A56B4F` would yield 5.0:1, but the actual sRGB calculation gives 4.09:1 — below the 4.5 floor. Adjusting to `#955A42` (slightly darker, same warm terracotta hue) produced 5.16:1 — comfortable pass with headroom.

**Note on `pri_bg`:** the locked plan claim was "~4.05:1" but the actual measurement is 3.40:1. Both still pass the AA-large floor (>= 3), so no adjustment needed — but this is a documentation accuracy note for future audits. Use `text-primary-strong` (5.16:1) for body-text accents and reserve `text-primary` (3.40:1) strictly for headings >= 18.66px bold or >= 24px regular, plus solid CTA backgrounds.

## Commits

| Hash      | Message                                                                | Files                                                          |
| --------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| `a17693b` | feat(01-02): wire next/font (Fraunces+Inter) and Tailwind v4 @theme tokens | lib/fonts.ts, app/globals.css, app/layout.tsx               |
| `c29a641` | feat(01-02): create Dra. Juliane Florentino word-mark Logo SVG         | components/brand/logo.tsx, components/brand/index.ts          |
| `6125819` | feat(01-02): add brand smoke-test page with palette, typography, logo  | app/page.tsx, app/globals.css, app/layout.tsx, components/brand/logo.tsx |

## Verification — Command Outputs

All commands exit 0.

### `pnpm typecheck`

```
> juliane-florentino-landing@0.1.0 typecheck
> tsc --noEmit
```

(Empty output, exit 0.)

### `pnpm lint`

```
> juliane-florentino-landing@0.1.0 lint
> eslint .
```

(Zero errors, zero warnings, exit 0.)

### `pnpm format:check`

```
> juliane-florentino-landing@0.1.0 format:check
> prettier --check "**/*.{ts,tsx,js,jsx,json,md,css}"

Checking formatting...
All matched files use Prettier code style!
```

### `pnpm build`

```
▲ Next.js 16.2.4 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 1144ms
  Running TypeScript ...
  Finished TypeScript in 883ms ...
  Collecting page data using 4 workers ...
  Generating static pages using 4 workers (0/3) ...
✓ Generating static pages using 4 workers (3/3) in 155ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found

○  (Static)  prerendered as static content
```

### `pnpm dev` smoke (curl http://localhost:3000)

| Check                                              | Result   |
| -------------------------------------------------- | -------- |
| HTTP 200                                           | PASS     |
| `lang="pt-BR"` on `<html>`                         | 1 match  |
| `JULIANE` in initial HTML (logo SVG)               | 1 match  |
| `FLORENTINO` in initial HTML (logo SVG)            | 1 match  |
| `fraunces_..._variable` className token on `<html>`| 1 match  |
| `inter_..._variable` className token on `<html>`   | 1 match  |
| `/_next/static/media/` (next/font self-host)       | 1 match  |
| `fonts.googleapis.com`                             | 0 matches (PASS — must NOT appear) |
| `fonts.gstatic.com`                                | 0 matches (PASS — must NOT appear) |

Captured `<html>` element:
```html
<html lang="pt-BR" class="fraunces_fa06b987-module__0_uN5W__variable inter_cfd91074-module__mRtxNq__variable">
```

Both font className variable tokens are present, confirming next/font wired the CSS variables on the root element.

## Logo Reference (for downstream sizing)

| Property        | Value                                  |
| --------------- | -------------------------------------- |
| `viewBox`       | `0 0 240 96`                           |
| Aspect ratio    | 2.5 : 1 (240 wide × 96 tall)           |
| Default width   | 240 px (height 96 px)                  |
| Color           | `currentColor` (inherits from parent's `text-*` class) |
| Font            | `var(--font-heading), Georgia, serif`  |
| Line 1          | "Dra. JULIANE" — 20px / weight 500 / letterSpacing 0.18em / uppercase |
| Line 2          | "FLORENTINO" — 26px / weight 600 / letterSpacing 0.32em / uppercase |
| Divider         | hairline at y=50, x=78→162, opacity 0.5 |
| Accessibility   | `role="img"` + `aria-label="Dra. Juliane Florentino"` + `<title>` |

Phase 2 header should pass `width={140}`–`180` (compact) and footer `width={200}`–`240` (full).

## Note for Plan 01-03 (Component Base)

These usage rules are LOCKED here so Plan 01-03 doesn't have to re-derive them:

| Surface                          | Tailwind classes                                              | Why                                                              |
| -------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| Button primary                   | `bg-primary text-primary-foreground`                          | 3.62:1 white-on-primary — AA large for button labels             |
| Button primary-strong (body-size text variant) | `bg-primary-strong text-primary-strong-foreground` | 5.50:1 white-on-primary-strong — AA normal                       |
| Inline link in body text         | `text-primary-strong`                                         | 5.16:1 vs background — AA normal text                            |
| Hero/section heading accent      | `text-primary` (only at `>= 24px regular` or `>= 18.66px bold`) | 3.40:1 vs background — AA large text only                        |
| WhatsApp icon (NOT button bg)    | `text-accent-whatsapp` for the SVG icon stroke/fill           | brand recognition; 2.0:1 vs background — visual ID, never as text |
| Default page                     | `bg-background text-foreground` (already on `<body>` by default) | 16.85:1 — AAA                                                    |
| Borders/dividers                 | `border-border`                                               | non-text usage                                                   |
| Muted secondary text             | `text-muted-foreground`                                       | 4.6:1 — AA normal                                                |

`<Section>` uses literal Tailwind utilities `py-16 md:py-24 lg:py-32` (NOT a custom `--spacing-section-y-*` token). `<Container>` uses `max-w-7xl mx-auto px-4 md:px-8` or shadcn-equivalent — Tailwind v4's default `max-w-7xl` is 1280px, fits the locked premium layout.

## Deviations from Plan

### Auto-fixed Issues (Rules 1-3)

**1. [Rule 1 - Plan bug] `--color-primary-strong: #A56B4F` failed WCAG AA normal-text floor**

- **Found during:** Task 1, running the inline Node WCAG verification script.
- **Issue:** The plan's `<color_locks>` table claimed `#A56B4F` on `#FBF7F2` measured ~5.0:1. Actual sRGB-relative-luminance calculation per WCAG 2.1 §1.4.3 yields **4.088:1** — below the 4.5 floor required for `strong_bg`. The plan's own automated acceptance criterion (running the same script) would have failed the build.
- **Fix:** Adjusted `--color-primary-strong` to `#955A42` — same warm terracotta-gold hue, just slightly darker. New ratio against background: 5.155:1 (AA normal, comfortable headroom). New ratio against white (for `bg-primary-strong text-primary-strong-foreground`): 5.499:1 (also AA normal).
- **Hue preservation:** the change is +1 lightness step in HSL terms; visually nearly indistinguishable next to the original at desk distance, but mathematically passes the floor.
- **Files modified:** `app/globals.css`
- **Commit:** `a17693b`

**2. [Rule 3 - Workflow blocker] Prettier reformatting fired on Task 3 format:check**

- **Found during:** Task 3 verification — `pnpm format:check` failed on all 4 files I'd written (Tasks 1, 2, 3) because the project's Prettier config uses a wider print-width than the plan's literal indentation expected.
- **Issue:** The plan's literal source samples were formatted at narrower wrap widths than the project's `.prettierrc`; running `format:check` blocks Task 3 acceptance.
- **Fix:** Ran `pnpm exec prettier --write` on the 4 affected files. Pure whitespace re-flow (multi-line params/attributes collapsed onto single lines under the 100-col print width). No semantic change. The reformatting commit is bundled into the Task 3 commit since format-check is part of the Task 3 verify block.
- **Files modified:** `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components/brand/logo.tsx`
- **Commit:** `6125819`

### Auth gates

None encountered. No services were authenticated; pnpm registry was anonymous.

### Plan acceptance regex needed updating (informational, no fix needed)

- The plan's `pnpm dev` smoke-test acceptance suggested `grep -q '__variable_' /tmp/smoke.html` (with trailing underscore). In Next 16's font className format, the actual token is `<font>_<hash>-module__<class>__variable` (no trailing underscore after `__variable`). Adjusted the grep to `__variable` and confirmed both `fraunces_..._variable` AND `inter_..._variable` are present. Underlying intent (font CSS variables wired on `<html>`) is satisfied.

## Contracts Established (for downstream plans)

| Contract                                            | Location                       |
| --------------------------------------------------- | ------------------------------ |
| `fontHeading` (NextFontWithVariable, Fraunces)      | `@/lib/fonts`                  |
| `fontBody` (NextFontWithVariable, Inter)            | `@/lib/fonts`                  |
| `<Logo width? className? title? />`                 | `@/components/brand`           |
| `LogoProps` type                                    | `@/components/brand`           |
| Tailwind utility: `bg-background`                   | from @theme `--color-background: #fbf7f2` |
| Tailwind utility: `bg-foreground`/`text-foreground` | from @theme `--color-foreground: #1a1614` |
| Tailwind utility: `bg-primary`/`text-primary`       | from @theme `--color-primary: #b07a5f`    |
| Tailwind utility: `text-primary-foreground`         | from @theme `--color-primary-foreground: #ffffff` |
| Tailwind utility: `bg-primary-strong`/`text-primary-strong` | from @theme `--color-primary-strong: #955a42` |
| Tailwind utility: `text-primary-strong-foreground`  | from @theme `--color-primary-strong-foreground: #ffffff` |
| Tailwind utility: `bg-muted`/`text-muted`           | from @theme `--color-muted: #f3ece3`      |
| Tailwind utility: `text-muted-foreground`           | from @theme `--color-muted-foreground: #7a6e62` |
| Tailwind utility: `border-border`                   | from @theme `--color-border: #e8dfd3`     |
| Tailwind utility: `bg-accent-whatsapp`              | from @theme `--color-accent-whatsapp: #25d366` |
| Tailwind utility: `font-heading`                    | from @theme `--font-heading`              |
| Tailwind utility: `font-body`                       | from @theme `--font-body`                 |

## Known Stubs

| Stub                                              | File             | Reason                                                         |
| ------------------------------------------------- | ---------------- | -------------------------------------------------------------- |
| Smoke-test home page (palette swatches + typography + logo, no real content) | `app/page.tsx`   | Phase 2 builds the 7 real sections; this is intentional bootstrap content for visual brand verification |
| `CRO/GO XXXXX` placeholder in footer microtext    | `app/page.tsx`   | Real CRO blocked on client (carried forward from Plan 01-01); Phase 3 surfaces this |

Neither stub blocks the plan's goal (brand layer wired and visually verifiable). Both will be replaced in their downstream phases.

## Self-Check: PASSED

**Files claimed exist:**

- `lib/fonts.ts` — FOUND
- `components/brand/logo.tsx` — FOUND
- `components/brand/index.ts` — FOUND
- `app/globals.css` (modified) — FOUND
- `app/layout.tsx` (modified) — FOUND
- `app/page.tsx` (modified) — FOUND

**Commits exist in git log:**

- `a17693b` — FOUND
- `c29a641` — FOUND
- `6125819` — FOUND

**Verification commands all exit 0:**

- `pnpm typecheck` — PASS
- `pnpm lint` — PASS (zero errors, zero warnings)
- `pnpm format:check` — PASS
- `pnpm build` — PASS
- `pnpm dev` smoke — HTTP 200, JULIANE/FLORENTINO inline, font className variables on `<html>`, no fonts.googleapis.com / fonts.gstatic.com leak, /_next/static/media/ self-host active
- WCAG AA floor script — PASS (all 4 ratios meet/exceed floor)
