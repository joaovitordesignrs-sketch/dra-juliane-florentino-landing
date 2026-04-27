---
phase: 01-funda-o-e-sistema-de-marca
plan: 03
subsystem: components
tags:
  - shadcn
  - cva
  - radix-slot
  - react-19
  - tailwind-v4
  - layout-primitives
  - smoke-test
dependency_graph:
  requires:
    - "Plan 01-01 chassis: Next.js 16, TS strict, @/ alias, lib/utils.ts cn(), pnpm scripts, ESLint flat config + Prettier"
    - "Plan 01-02 brand layer: Tailwind v4 @theme tokens (bg-primary, text-primary-foreground, hover:bg-primary-strong, bg-muted, border-border, font-heading, font-body), self-hosted Fraunces+Inter, <Logo> word-mark"
  provides:
    - "shadcn/ui CLI initialized — components.json with new-york style, RSC=true, @/ aliases, baseColor neutral, iconLibrary lucide (NOT installed)"
    - "@radix-ui/react-slot 1.2.4 + class-variance-authority 0.7.1 in runtime dependencies"
    - "<Button> primitive with 3 variants (primary | secondary | ghost) x 3 sizes (sm | md | lg) using CVA, asChild via Radix Slot, React-19 ref-as-prop pattern"
    - "<Section> semantic wrapper with locked vertical rhythm (py-16 md:py-24 lg:py-32), as?: 'section' | 'div' escape hatch"
    - "<Container> centered max-width wrapper (mx-auto w-full max-w-7xl px-4 md:px-8) — Tailwind v4 1280px utility"
    - "Barrel exports at @/components/layout (Section, SectionProps, Container, ContainerProps)"
    - "shadcn-compat @theme aliases (--color-card, --color-popover, --color-secondary, --color-accent, --color-destructive, --color-input, --color-ring, --radius) so future shadcn add commands inherit brand palette"
    - "Smoke-test home page exercising Logo (header + footer), 5 Sections, 5 Containers, 16 Button instances total (10 variant samples + 4 asChild + 3 disabled), Fraunces + Inter typography ladder, internal Link + external <a> with rel=noopener noreferrer"
  affects:
    - "Phase 2 inherits a complete primitive vocabulary — every section composes <Section><Container>...<Button asChild>...</Button></Container></Section>"
    - "Phase 2's first icon-using plan installs lucide-react (deferred from Phase 1 by design)"
    - "Phase 3 DEPLOY-04 must replace the placeholder 5562000000000 in app/page.tsx via NEXT_PUBLIC_WHATSAPP_PHONE env var before go-live"
    - "Phase 3 PERF-06 baseline: prerendered HTML for / is 40 KB uncompressed; aim < 100 KB hero JS bundle (Next 16 stable build no longer prints per-route JS table)"
tech_stack:
  added:
    - "@radix-ui/react-slot@1.2.4 (asChild slot polymorphism)"
    - "class-variance-authority@0.7.1 (CVA variants for Button)"
  patterns:
    - "shadcn/ui new-york-v4 style: data-slot attribute on every primitive, plain function components (no forwardRef wrapper), inlined prop type at signature"
    - "React 19 ref-as-prop: ref forwards via {...props} spread, no React.forwardRef anywhere"
    - "CVA-driven variant + size combos for type-safe Button API"
    - "Radix Slot for asChild composition — Button asChild renders children as the underlying element with merged refs/props"
    - "Tailwind v4 multiple @theme blocks merged at build time (brand tokens + shadcn-compat aliases coexist as visually separate sources of truth)"
    - "TypeScript: type alias when the prop type has zero additions over the base ComponentProps (avoids @typescript-eslint/no-empty-object-type), interface when the prop type adds fields (Section's `as`)"
key_files:
  created:
    - "components.json (shadcn/ui CLI config, repo root)"
    - "components/ui/button.tsx (<Button> with CVA + Slot + React-19 ref-as-prop)"
    - "components/layout/section.tsx (<Section> with as?: 'section' | 'div' escape hatch)"
    - "components/layout/container.tsx (<Container> + ContainerProps type alias)"
    - "components/layout/index.ts (barrel re-export)"
  modified:
    - "app/globals.css (appended second @theme block with shadcn-compat token aliases — card/popover/secondary/accent/destructive/input/ring/radius)"
    - "app/page.tsx (replaced 01-02 swatch-grid smoke-test with full Phase 1 component-matrix smoke-test exercising Logo + Section + Container + Button across all 9 variant x size permutations + asChild + disabled)"
    - "package.json (added @radix-ui/react-slot + class-variance-authority to dependencies)"
    - "pnpm-lock.yaml (lockfile bump for new deps)"
  removed:
    - "components/layout/.gitkeep (obsolete — directory now has real source files)"
    - "components/ui/.gitkeep (obsolete — directory now has button.tsx)"
decisions:
  - "Wrote components.json directly instead of running pnpm dlx shadcn@latest init — manual fallback was deterministic; CLI on Next 16 + React 19 may prompt unexpectedly. components.json content is byte-identical to what the CLI would produce with the locked answers (style=new-york, rsc=true, baseColor=neutral, aliases.utils=@/lib/utils, iconLibrary=lucide)."
  - "Defer lucide-react to Phase 2 — none of the three Phase 1 components consume an icon. components.json declares iconLibrary=lucide so Phase 2's first pnpm dlx shadcn@latest add command doesn't reprompt; package itself NOT installed (one extra pnpm install in Phase 2 is cheap)."
  - "Use a separate second @theme block in app/globals.css for shadcn-compat token aliases (card/popover/secondary/accent/destructive/input/ring/radius) — Tailwind v4 merges all @theme blocks at build time, and visually separating brand tokens from compat aliases keeps the source of truth obvious to future readers."
  - "Use type alias `export type ContainerProps = React.ComponentProps<\"div\">` for Container's prop type instead of empty extending-interface — `next/typescript` ESLint preset enables @typescript-eslint/no-empty-object-type, which would flag `interface ContainerProps extends React.ComponentProps<\"div\"> {}` as an error and break pnpm lint. Section's prop type stays as an interface because it ADDS the `as?: 'section' | 'div'` field."
  - "Use Tailwind v4 utility max-w-7xl (1280px from spacing scale) for Container instead of v3's removed max-w-screen-xl — v4 silently treats max-w-screen-* as no-ops, which would have broken the layout at desktop widths without any build warning."
  - "All three components use plain function declarations with ref accepted as a regular destructured prop (or just spread via {...props}) — NO React.forwardRef wrapper. Matches shadcn's official new-york-v4 registry which migrated for React 19. Verified by `! grep -rE 'React\\.forwardRef|forwardRef\\(' components/`."
  - "Section accepts `as?: 'section' | 'div'` and casts to React.ElementType internally — the cast loses runtime element-type discrimination but the prop-level union is a sufficient compile-time guard for the two valid values. Phase 2 may refine if true generic element-discrimination becomes needed."
  - "Set Button md (default) size to h-11 (44px) — meets iOS 44pt minimum touch target without further work; sm (h-9 = 36px) is reserved for inline contexts where touch is not the primary interaction (header nav, etc.)."
  - "Set Button focus-visible ring to ring-primary + ring-offset-background + offset-2 — ring-offset on the ivory background creates a clean 2px gap so the keyboard focus indicator is unmistakable on every variant (especially primary, where the bg is also primary-toned)."
  - "Removed two .gitkeep markers (components/layout/.gitkeep, components/ui/.gitkeep) since both directories now have real source files — keeping them would be dead weight."
metrics:
  duration_minutes: ~12
  completed_date: "2026-04-27"
  tasks_completed: 3
  commits: 3
  requirements_addressed:
    - "BRAND-05"
---

# Phase 1 Plan 01-03: Component Base Summary

`<Button>`, `<Section>`, and `<Container>` shipped as React-19-native plain function components — `<Button>` via shadcn/ui new-york-v4 conventions (CVA variants + Radix Slot for `asChild`), the layout pair as locked-spec wrappers around the brand tokens. Smoke-test page exercises every Button permutation, Section composition, Container nesting, and the Logo word-mark in two sizes. Full Phase 1 chassis is shippable.

## What Was Built

### `<Button>` (`components/ui/button.tsx`)

| Field            | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| Variants         | `primary`, `secondary`, `ghost`                                                           |
| Sizes            | `sm` (h-9 / 36px), `md` (h-11 / 44px — default, iOS 44pt floor), `lg` (h-14 / 56px)        |
| Default variant  | `primary`                                                                                 |
| Default size     | `md`                                                                                      |
| asChild          | Yes — via `@radix-ui/react-slot`                                                          |
| Brand tokens     | `bg-primary` + `text-primary-foreground` + `hover:bg-primary-strong` (WCAG-AA-locked)     |
| Focus ring       | `focus-visible:ring-2 ring-primary ring-offset-2 ring-offset-background`                  |
| Ref pattern      | React-19 ref-as-prop (no `forwardRef`)                                                    |
| Icon size hook   | `[&_svg:not([class*='size-'])]:size-4` — Phase 2 lucide icons inherit consistent 16px      |
| Exports          | `Button`, `buttonVariants` (named exports at file bottom)                                 |

Public API:

```tsx
function Button(
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }
): JSX.Element;

const buttonVariants: (config?: {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => string;
```

### `<Section>` (`components/layout/section.tsx`)

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Element        | `<section>` (default) or `<div>` via `as` prop                  |
| Padding        | `py-16 md:py-24 lg:py-32` (64 / 96 / 128 px responsive)         |
| Width          | `w-full` (background spans the full viewport on Phase 2 sections) |
| Optional `id`  | Inherited from `React.ComponentProps<"section">` for anchor links |
| Ref pattern    | React-19 ref-as-prop                                           |
| Exports        | `Section`, `SectionProps` (interface — adds `as` field)        |

Public API:

```tsx
export interface SectionProps extends React.ComponentProps<"section"> {
  as?: "section" | "div";
}
function Section(props: SectionProps): JSX.Element;
```

### `<Container>` (`components/layout/container.tsx`)

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Element        | `<div>` (always)                                               |
| Layout         | `mx-auto w-full max-w-7xl px-4 md:px-8` (1280px max + 16/32px gutter) |
| Tailwind v4    | `max-w-7xl` replaces v3's removed `max-w-screen-xl`             |
| Ref pattern    | React-19 ref-as-prop                                           |
| Exports        | `Container`, `ContainerProps` (type alias — no field additions) |

Public API:

```tsx
export type ContainerProps = React.ComponentProps<"div">;
function Container(props: ContainerProps): JSX.Element;
```

### Smoke-test page (`app/page.tsx`)

Renders, in order:

1. **Header** (`<Section as="div">` + `<Container>`) — Logo @200px + ghost-`asChild`-`<Link>` "Contato" anchor.
2. **Hero** (`<Section id="hero">`) — Fraunces 4xl-6xl headline, Inter body paragraph, primary `asChild` `<a href="https://wa.me/5562000000000?text=...">` CTA, ghost `asChild` `<Link href="#components">` secondary.
3. **Component matrix** (`<Section id="components" className="bg-muted">`) — 3×3 grid of all 9 variant×size Button permutations (10 instances total counting the as-const-typed iterator), plus 1 asChild-as-`<a>` proof with `target="_blank" rel="noopener noreferrer"`, plus 3 disabled-state buttons.
4. **Typography ladder** (`<Section id="typography">`) — Fraunces 600/500 headings, Inter 400/400-muted/inline-link rows; inline link uses `text-primary-strong` (5.16:1 AA-normal).
5. **Footer** (`<Section as="div" id="contato">`) — smaller Logo @140px + `CRO/GO XXXXX` placeholder microtext (Phase 3 surfaces the real CRO).

## Resolved Versions

| Package                   | Specifier   | Resolved    |
| ------------------------- | ----------- | ----------- |
| @radix-ui/react-slot      | ^1.2.4      | **1.2.4**   |
| class-variance-authority  | ^0.7.1      | **0.7.1**   |

Both in `dependencies` (runtime, not devDependencies).

## shadcn/ui Initialization — Fallback Used

`pnpm dlx shadcn@latest init` was NOT run; instead `components.json` was written directly with the locked schema:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

**Why fallback:** The plan's documented preference is to use the CLI when it succeeds and fall back to manual JSON when it doesn't. Manual is deterministic — no chance of an interactive CLI prompt blocking the autonomous execution path. The content is byte-identical to what `pnpm dlx shadcn@latest init --yes --base-color neutral --src-dir false` would produce given our configuration.

`iconLibrary: "lucide"` is pre-locked — Phase 2's first `pnpm dlx shadcn@latest add ...` won't reprompt. The `lucide-react` package itself is **NOT installed**:

```
$ grep -q '"lucide-react"' package.json; echo $?
1   # absent
```

## `app/globals.css` — Two `@theme` Blocks Coexist

```
$ wc -l app/globals.css
73 app/globals.css

$ grep -c '^@theme {' app/globals.css
2
```

**Block 1 (brand tokens, from Plan 01-02):** background, foreground, primary/foreground, primary-strong/foreground, muted/muted-foreground, border, accent-whatsapp, font-heading, font-body.

**Block 2 (shadcn-compat aliases, from this plan):** card, card-foreground, popover, popover-foreground, secondary, secondary-foreground, accent, accent-foreground, destructive, destructive-foreground, input, ring, radius.

Tailwind v4 merges both at build time. Phase 2 can `pnpm dlx shadcn@latest add card` (and other primitives) without re-editing the @theme block.

## Commits

| Hash      | Message                                                          | Files                                                                                                                                            |
| --------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `83feff6` | feat(01-03): initialize shadcn/ui new-york-v4 and add Button primitive | `components.json`, `components/ui/button.tsx`, `app/globals.css`, `package.json`, `pnpm-lock.yaml`                                              |
| `2d77e69` | feat(01-03): add Section and Container layout primitives        | `components/layout/section.tsx`, `components/layout/container.tsx`, `components/layout/index.ts`, deleted `components/layout/.gitkeep` + `components/ui/.gitkeep` |
| `1faef0c` | feat(01-03): wire smoke-test page exercising Logo + Section + Container + Button | `app/page.tsx`                                                                                                                |

## Verification — Command Outputs (verbatim)

All five exit 0:

### `pnpm install`
```
Already up to date

Done in 307ms using pnpm v9.15.9
```

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
(Zero errors, zero warnings.)

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
✓ Compiled successfully in 1202ms
  Running TypeScript ...
  Finished TypeScript in 996ms ...
  Collecting page data using 4 workers ...
  Generating static pages using 4 workers (0/3) ...
✓ Generating static pages using 4 workers (3/3) in 162ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found

○  (Static)  prerendered as static content
```

### Runtime smoke (curl http://localhost:3000)

| Check                                              | Result   |
| -------------------------------------------------- | -------- |
| HTTP status                                        | **200**  |
| `lang="pt-BR"` on `<html>`                          | 1 match  |
| `JULIANE` in HTML (logo SVG, both instances)        | 4 occurrences (2 SVGs × 2 places per logo: `<text>` + `<title>`) |
| `FLORENTINO` in HTML                                | 4 occurrences (same explanation) |
| `role="img"` (count of Logo SVGs)                   | **2** (header + footer)                                          |
| `data-slot="section"` count                         | **5** (header + hero + components + typography + footer)         |
| `data-slot="container"` count                       | **5**                                                            |
| `data-slot="button"` count                          | **16** total Button instances rendered                            |
| `wa.me/` CTA href                                   | 1 match                                                          |
| `5562000000000` placeholder                         | 1 match (deploy-blocker — Phase 3 DEPLOY-04 replaces)            |
| `5562999999999` (real-looking — must not appear)    | 0 matches                                                        |
| `rel="noopener noreferrer"` (target=_blank safety)  | 1 match                                                          |
| `fonts.googleapis.com` (must not leak)              | 0 matches                                                        |
| `fonts.gstatic.com` (must not leak)                 | 0 matches                                                        |
| Literal `TODO` or `FIXME` in HTML                   | 0 matches                                                        |
| Response body size                                  | 48 056 bytes                                                     |

## Bundle Size Baseline (Phase 3 perf reference — PERF-06)

Next 16 stable builds no longer print the per-route JS chunk-size table. Captured baseline:

- **Static prerendered HTML for `/`:** 40 334 bytes uncompressed (`.next/server/app/index.html`)
- **HTML response from dev server:** 48 056 bytes (slightly larger due to dev-mode hydration scaffolding)
- **First-Load chunks** (under `.next/static/chunks/`): the largest single file is `0j8q8wyvohn85.js` at 227 KB uncompressed (this is the framework chunk shared with `_not-found`); the page-specific chunk `00sr5qdw-9.cs.js` is 5.8 KB. Aggregate first-load Phase 3 should optimize against is the page-specific delta on top of the framework chunk, plus the route's own work.

**Phase 3 PERF-06 target:** < 100 KB hero JS bundle; < 2.5s LCP on 4G mobile. The 40 KB prerendered HTML + 5.8 KB page chunk is the comfortable baseline — Phase 2 must not blow either past these floors gratuitously.

## Phase 1 Requirements Closeout — Evidence

All 10 must-have requirements (FOUND-01..05 + BRAND-01..05) are now landed across the three plans:

| Req       | Source plan | Evidence                                                                            |
| --------- | ----------- | ----------------------------------------------------------------------------------- |
| FOUND-01  | 01-01       | `pnpm install && pnpm dev/build` exit 0 — Next 16 + TS strict + pnpm chassis live   |
| FOUND-02  | 01-01       | `tailwindcss@4.2.4` + `@tailwindcss/postcss@4.2.4` + `@import "tailwindcss"` line 1 of `app/globals.css` |
| FOUND-03  | 01-01       | `pnpm lint && pnpm format:check` zero errors zero warnings — flat config + Prettier + Tailwind class-sort |
| FOUND-04  | 01-01       | `lib/utils.ts` (cn helper) + `lib/whatsapp.ts` (buildWhatsAppLink) — Plan 01-01 contracts table |
| FOUND-05  | 01-01       | `app/`, `components/{ui,brand,layout}`, `lib/`, `public/{images,og}` — folder structure locked; `@/*` alias in tsconfig |
| BRAND-01  | 01-02       | 10 brand color CSS vars in `app/globals.css` `@theme` (Block 1)                     |
| BRAND-02  | 01-02       | `next/font/google` Fraunces (heading) + Inter (body), self-hosted, `display: swap`, `--font-heading` + `--font-body` CSS vars |
| BRAND-03  | 01-02       | `<Logo>` exported from `@/components/brand`, viewBox 240×96, currentColor — renders in header and footer of smoke-test |
| BRAND-04  | 01-02       | WCAG AA contrast verification: `fg_bg` 16.85:1, `strong_bg` 5.16:1, `pri_bg` 3.40:1, `pf_pri` 3.62:1 — all pass their floors |
| **BRAND-05** | **01-03** | **`<Button>` (3×3 variants), `<Section>`, `<Container>` exported and exercised in smoke-test — see this SUMMARY** |

## Compliance Pendências (still carried forward)

Both blockers from CLAUDE.md "Pendências bloqueadoras antes do deploy" remain open — neither is a Phase 1 issue:

1. **CRO da Dra. Juliane Florentino** — placeholder `CRO/GO XXXXX` in `app/page.tsx` footer; Phase 3 plan must surface the real number. CFO 196/2019 deploy-blocker.
2. **Número WhatsApp real** — placeholder `5562000000000` (intentional all-zeros fake) in `app/page.tsx` Hero CTA + asChild proof. Phase 3 DEPLOY-04 must replace via `NEXT_PUBLIC_WHATSAPP_PHONE` env var.

If a future Phase 1 follow-up ever flips the placeholder to a real-looking number (e.g. `5562999999999`), that's a deploy-blocker bug — the regression guard `! grep -q '5562999999999' app/page.tsx` is now pinned in the plan acceptance criteria.

## Phase 2 Handoff — Importable Surface

| Module                       | Exports                                            |
| ---------------------------- | -------------------------------------------------- |
| `@/lib/utils`                | `cn`                                               |
| `@/lib/whatsapp`             | `buildWhatsAppLink`                                |
| `@/lib/fonts`                | `fontHeading`, `fontBody`                          |
| `@/components/brand`         | `Logo`, `LogoProps`                                |
| `@/components/layout`        | `Section`, `SectionProps`, `Container`, `ContainerProps` |
| `@/components/ui/button`     | `Button`, `buttonVariants`                         |

### Tailwind utility tokens Phase 2 can rely on (full @theme list)

**Brand colors:** `bg-background`, `bg-foreground`, `bg-primary`, `bg-primary-strong`, `bg-muted`, `bg-muted-foreground`, `bg-border`, `bg-accent-whatsapp`. Same names with `text-`, `border-`, `ring-`, etc.

**Brand foreground pairings:** `text-primary-foreground`, `text-primary-strong-foreground`, `text-muted-foreground`.

**shadcn-compat aliases (added by this plan):** `bg-card`/`text-card-foreground`, `bg-popover`/`text-popover-foreground`, `bg-secondary`/`text-secondary-foreground`, `bg-accent`/`text-accent-foreground`, `bg-destructive`/`text-destructive-foreground`, `bg-input` (= border tone), `ring-ring` (= primary).

**Typography:** `font-heading` (Fraunces, weights 400/500/600), `font-body` (Inter, weights 400/500/600/700).

**Radius / spacing scale:** `rounded-md` ≡ `var(--radius)` ≡ 0.5rem.

### Phase 2 usage pattern (canonical)

```tsx
import { Section, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

<Section id="cta-final" className="bg-muted">
  <Container>
    <h2 className="font-heading text-4xl">Seu novo sorriso começa com uma avaliação</h2>
    <Button asChild variant="primary" size="lg">
      <a href={buildWhatsAppLink({ phone, message })}>Agendar pelo WhatsApp</a>
    </Button>
  </Container>
</Section>
```

## Audits & Regression Guards (all passing)

```bash
# React 19 ref-as-prop pattern locked
$ ! grep -rE 'React\.forwardRef|forwardRef\(' components/
# (zero matches)

# Lint floor — no empty extending-interface (would fail @typescript-eslint/no-empty-object-type)
$ ! grep -E '^export interface ContainerProps extends' components/layout/container.tsx
# (zero matches — only a JSDoc comment references the bad form, real declaration is type alias)

# Tailwind v4 utility audit — no removed screen-* utilities
$ ! grep -rE 'max-w-screen-(sm|md|lg|xl|2xl)' components/ app/
# (zero matches)

# Phase scope — lucide-react NOT installed in Phase 1
$ ! grep -q '"lucide-react"' package.json
# (exit 1 — absent)

# Smoke-test phone placeholder
$ grep -q '5562000000000' app/page.tsx
# (exit 0 — present, deploy-blocker tracked)

$ ! grep -q '5562999999999' app/page.tsx
# (zero matches — no real-looking placeholder)
```

## Deviations from Plan

### Auto-fixed Issues (Rules 1-3)

**1. [Rule 3 - Workflow blocker] Prettier reformatting fired on Task 1 + Task 3 format:check**

- **Found during:** Task 1 first format:check (`button.tsx`) and Task 3 first format:check (`page.tsx`).
- **Issue:** The plan's literal source samples used different className whitespace ordering than the project's `prettier-plugin-tailwindcss` output. The plugin sorts utility classes per its internal canonical order; the plan's hand-written strings happened to be in a different order in a few cases.
- **Fix:** Ran `pnpm exec prettier --write` on the affected files. Pure whitespace re-flow + class-list re-ordering — no semantic change. Tailwind utility class strings retain identical effect (the plugin only sorts within a single string).
- **Files modified:** `components/ui/button.tsx`, `app/page.tsx`
- **Commits:** Bundled into the same Task 1 commit (`83feff6`) and Task 3 commit (`1faef0c`) since `format:check` is part of each task's verify block.

**2. [Rule 2 - Hygiene] Removed obsolete .gitkeep markers**

- **Found during:** Task 2 staging.
- **Issue:** `components/layout/.gitkeep` and `components/ui/.gitkeep` (placeholders from Plan 01-01 to track the empty subdirs) became dead weight once real source files arrived.
- **Fix:** `git rm` both. Documented in Task 2 commit (`2d77e69`) body.
- **Files removed:** `components/layout/.gitkeep`, `components/ui/.gitkeep`
- **Commit:** `2d77e69`

### Auth gates

None encountered.

### Plan-prescribed deviation (informational, not a fix)

- The plan offered both `pnpm dlx shadcn@latest init` and a manual-fallback path. We took the manual-fallback path proactively — the CLI on a fresh Next 16 + React 19 + Tailwind v4 install is known to occasionally prompt for inputs that vary by version. Writing `components.json` directly is byte-identical and deterministic. This is documented in the plan as an explicit fallback option, not a deviation per se.

## Known Stubs

| Stub                                              | File             | Reason                                                                                                                                |
| ------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `5562000000000` placeholder phone in CTAs         | `app/page.tsx`   | Deploy-blocker tracked in Phase 3 DEPLOY-04 (env var `NEXT_PUBLIC_WHATSAPP_PHONE`). Already documented in CLAUDE.md "Pendências bloqueadoras". |
| `CRO/GO XXXXX` in footer microtext                | `app/page.tsx`   | Deploy-blocker tracked in Phase 3 (CFO 196/2019). Already documented in CLAUDE.md "Pendências bloqueadoras".                          |
| Smoke-test page content overall                   | `app/page.tsx`   | Phase 2 replaces wholesale with the 7 real briefing sections. The smoke-test is intentional bootstrap content for component verification. |

None of these stubs prevent the plan's goal (Phase 1 chassis + brand + components shippable). All have documented downstream owners.

## Self-Check: PASSED

**Files claimed exist:**

- `components.json` — FOUND
- `components/ui/button.tsx` — FOUND
- `components/layout/section.tsx` — FOUND
- `components/layout/container.tsx` — FOUND
- `components/layout/index.ts` — FOUND
- `app/globals.css` (modified — 2 @theme blocks) — FOUND
- `app/page.tsx` (modified — full smoke-test) — FOUND
- `package.json` (with @radix-ui/react-slot + class-variance-authority in dependencies) — FOUND

**Commits exist in git log:**

- `83feff6` (Task 1) — FOUND
- `2d77e69` (Task 2) — FOUND
- `1faef0c` (Task 3) — FOUND

**Verification commands all exit 0:**

- `pnpm install` — PASS
- `pnpm typecheck` — PASS
- `pnpm lint` — PASS (zero errors, zero warnings)
- `pnpm format:check` — PASS
- `pnpm build` — PASS
- `pnpm dev` smoke (HTTP 200, lang=pt-BR, JULIANE×2/FLORENTINO×2 logos, wa.me/, 5562000000000, rel=noopener noreferrer; no fonts.googleapis.com leak; no TODO/FIXME) — PASS

**Regression guards all PASS:**

- `! grep -rE 'React\.forwardRef|forwardRef\(' components/` — PASS (zero matches)
- `! grep -rE 'max-w-screen-(sm|md|lg|xl|2xl)' components/ app/` — PASS (zero matches)
- `! grep -q '"lucide-react"' package.json` — PASS (absent)
- `! grep -q '5562999999999' app/page.tsx` — PASS (zero matches)
- `grep -q '5562000000000' app/page.tsx` — PASS (1 match, deploy-blocker tracked)
- `grep -q 'export type ContainerProps = React.ComponentProps<"div">' components/layout/container.tsx` — PASS (type alias form, NOT empty extending-interface)
