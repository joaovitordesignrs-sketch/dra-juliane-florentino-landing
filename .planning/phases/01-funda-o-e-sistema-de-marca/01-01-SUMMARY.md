---
phase: 01-funda-o-e-sistema-de-marca
plan: 01
subsystem: foundation
tags:
  - nextjs
  - tooling
  - bootstrap
  - tailwindcss-v4
  - eslint
  - prettier
dependency_graph:
  requires: []
  provides:
    - "Next.js 16 App Router project on pnpm with TypeScript strict"
    - "Tailwind CSS v4 PostCSS pipeline (no tailwind.config.ts)"
    - "lib/utils.ts cn() helper for downstream shadcn components"
    - "lib/whatsapp.ts buildWhatsAppLink() for Phase 2 CTAs"
    - "ESLint flat config (Next core-web-vitals + TypeScript + Prettier)"
    - "Prettier with prettier-plugin-tailwindcss class sorting"
    - "Folder structure: app/, components/{ui,brand,layout}, lib/, public/{images,og}"
    - "@/* path alias mapped to repo root for shadcn compatibility"
    - "pt-BR README documenting comandos, deploy, compliance CFO 196/2019"
  affects:
    - "All downstream plans must use @/* alias for imports"
    - "Plan 01-02 will append @theme tokens to app/globals.css"
    - "Plan 01-02 will replace app/layout.tsx with next/font version"
    - "Plan 01-03 will install shadcn/ui via CLI into components/ui/"
tech_stack:
  added:
    - "next@16.2.4"
    - "react@19.2.5 + react-dom@19.2.5"
    - "typescript@5.9.3 (strict mode)"
    - "tailwindcss@4.2.4 + @tailwindcss/postcss@4.2.4"
    - "eslint@9.39.4 + eslint-config-next@16.2.4 + eslint-config-prettier@10.1.8"
    - "prettier@3.8.3 + prettier-plugin-tailwindcss@0.6.14"
    - "clsx@2.1.1 + tailwind-merge@2.6.1"
    - "pnpm@9.15.9 (Node 22.22 local, .nvmrc pins 20)"
  patterns:
    - "ESLint flat-config (eslint.config.mjs) using native imports from eslint-config-next/core-web-vitals + /typescript"
    - "Tailwind v4 CSS-first config (@import \"tailwindcss\" in globals.css, @theme to be added in 01-02)"
    - "Path alias @/* → ./*"
    - "Workspace root pinned via turbopack.root in next.config.ts"
key_files:
  created:
    - "package.json (pnpm scripts + Next 16 / React 19 / Tailwind v4 deps)"
    - "pnpm-lock.yaml"
    - "tsconfig.json (strict + @/* alias; Next.js auto-rewrote jsx to react-jsx)"
    - "next.config.ts (reactStrictMode + turbopack.root pin)"
    - "postcss.config.mjs (@tailwindcss/postcss plugin)"
    - "eslint.config.mjs (native flat config)"
    - ".prettierrc (tailwindFunctions: cn/cva/clsx)"
    - ".prettierignore (.next, public, .planning)"
    - ".gitignore (Node + Next + OS + IDE + tsbuildinfo)"
    - ".npmrc (auto-install-peers=true)"
    - ".nvmrc (Node 20)"
    - ".vscode/settings.json (format on save + Tailwind classRegex)"
    - "app/layout.tsx (lang=\"pt-BR\", minimal)"
    - "app/page.tsx (placeholder with fake phone 5562000000000)"
    - "app/globals.css (single line: @import \"tailwindcss\")"
    - "lib/utils.ts (cn helper)"
    - "lib/whatsapp.ts (buildWhatsAppLink)"
    - "components/{.,ui,brand,layout}/.gitkeep"
    - "public/{.,images,og}/.gitkeep"
    - "README.md (pt-BR)"
  modified: []
decisions:
  - "Used native ESLint flat-config imports (eslint-config-next/core-web-vitals, /typescript, eslint-config-prettier/flat) instead of FlatCompat — Next 16's eslint-config-next ships flat-format directly and FlatCompat threw circular-JSON when re-validating it as a legacy config"
  - "Upgraded eslint-config-prettier from ^9 (legacy export only) to ^10.1.8 (native /flat export) so the flat config composes cleanly"
  - "Removed @eslint/eslintrc devDep after FlatCompat path was abandoned (CONTEXT.md preferir minimal)"
  - "Changed lint script from `next lint` (removed in Next 16) to `eslint .`"
  - "Pinned turbopack.root in next.config.ts to silence multi-lockfile workspace warning (an unrelated package-lock.json exists in /Users/joa/, outside this project)"
  - "Added *.tsbuildinfo to .gitignore (TypeScript incremental cache)"
  - "Removed warning emoji (⚠️) from README pendência blocks per project no-emoji guideline (content equivalent)"
metrics:
  duration_minutes: ~12
  completed_date: "2026-04-27"
  tasks_completed: 3
  commits: 3
  requirements_addressed:
    - "FOUND-01"
    - "FOUND-02"
    - "FOUND-03"
    - "FOUND-04"
    - "FOUND-05"
---

# Phase 1 Plan 01-01: Next.js 16 Bootstrap Summary

Bootstrap of Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript strict on pnpm with ESLint flat config + Prettier + Tailwind class-sort plugin, locked folder structure, pt-BR README, and `pnpm install / typecheck / lint / format:check / build` all green.

## What Was Built

The technical chassis for the landing page — no UI content yet (Phase 2 builds the 7 sections). Everything that must be _correct once_ before any feature work was locked here:

- **Toolchain:** pnpm 9 + Node 20+ + Next.js 16.2.4 (App Router, Turbopack as default bundler) + React 19.2.5 + TypeScript 5.9 strict.
- **Styling pipeline:** Tailwind CSS v4.2.4 with the new `@tailwindcss/postcss` plugin. `app/globals.css` is intentionally one line — Plan 01-02 will append the `@theme` tokens (paleta + typography from CONTEXT.md). No `tailwind.config.ts` exists; Tailwind v4's CSS-first design replaces it.
- **Linting + formatting:** ESLint 9 flat config extending `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` + `eslint-config-prettier/flat`. Prettier 3.8 with `prettier-plugin-tailwindcss` and `tailwindFunctions: ["cn", "cva", "clsx"]` so class strings inside helpers stay sorted (critical for shadcn `Button` in Plan 01-03).
- **Path alias:** `@/*` → `./*` in `tsconfig.json`, matching shadcn defaults.
- **Helpers shipped:**
  - `lib/utils.ts` exports `cn(...inputs: ClassValue[]): string` (clsx + tailwind-merge).
  - `lib/whatsapp.ts` exports `buildWhatsAppLink({ phone, message })` returning `https://wa.me/<phone>?text=<encoded>`.
- **Folder structure** (locked per CONTEXT.md): `app/`, `components/{ui,brand,layout}/`, `lib/`, `public/{images,og}/` — empty subdirs preserved with `.gitkeep`.
- **README** (pt-BR) documents stack, comandos, estrutura, deploy Vercel, workflow GSD, compliance CFO 196/2019, e ambas as pendências bloqueadoras (CRO + número WhatsApp real).

## Commits

| Hash      | Message                                                             | Files                                                                                                                       |
| --------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `5a4eea9` | chore(01-01): bootstrap Next.js 16 project with pnpm and TypeScript strict | package.json, pnpm-lock.yaml, tsconfig.json, next.config.ts, postcss.config.mjs, .gitignore, .npmrc, .nvmrc, .vscode/settings.json, app/{layout,page}.tsx, app/globals.css, lib/{utils,whatsapp}.ts, components/{.,ui,brand,layout}/.gitkeep, public/{.,images,og}/.gitkeep |
| `cd60ea0` | chore(01-01): configure ESLint flat config and Prettier with Tailwind plugin | eslint.config.mjs, .prettierrc, .prettierignore, package.json, pnpm-lock.yaml, app/layout.tsx, lib/whatsapp.ts, tsconfig.json |
| `eef7aed` | docs(01-01): write pt-BR README and finalize Phase 1 chassis        | README.md                                                                                                                    |

## Final Resolved Versions

Captured from `pnpm-lock.yaml` after a clean install:

| Package                       | Specifier   | Resolved     |
| ----------------------------- | ----------- | ------------ |
| next                          | ^16.0.0     | **16.2.4**   |
| react                         | ^19.0.0     | **19.2.5**   |
| react-dom                     | ^19.0.0     | **19.2.5**   |
| tailwindcss                   | ^4.0.0      | **4.2.4**    |
| @tailwindcss/postcss          | ^4.0.0      | **4.2.4**    |
| typescript                    | ^5.7.0      | **5.9.3**    |
| eslint                        | ^9.17.0     | **9.39.4**   |
| eslint-config-next            | ^16.0.0     | **16.2.4**   |
| eslint-config-prettier        | ^10.1.8     | **10.1.8**   |
| prettier                      | ^3.4.0      | **3.8.3**    |
| prettier-plugin-tailwindcss   | ^0.6.9      | **0.6.14**   |
| clsx                          | ^2.1.1      | **2.1.1**    |
| tailwind-merge                | ^2.5.5      | **2.6.1**    |
| @types/node                   | ^22.10.0    | **22.19.17** |
| @types/react                  | ^19.0.0     | **19.2.14**  |
| @types/react-dom              | ^19.0.0     | **19.2.3**   |

Local toolchain: Node v22.22.0, pnpm 9.15.9.

## Verification — Command Outputs

All five commands exit 0. Full transcripts:

### `pnpm install`

```
Lockfile is up to date, resolution step is skipped
Already up to date

Done in 390ms using pnpm v9.15.9
```

(First-time install also clean — 356 packages added, no peer-dep warnings.)

### `pnpm typecheck`

```
> juliane-florentino-landing@0.1.0 typecheck
> tsc --noEmit
```

Exits 0 with no output (strict mode passes).

### `pnpm lint`

```
> juliane-florentino-landing@0.1.0 lint
> eslint .
```

Exits 0 with zero errors and zero warnings.

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
✓ Compiled successfully in 1153ms
  Running TypeScript ...
  Finished TypeScript in 738ms ...
  Collecting page data using 4 workers ...
  Generating static pages using 4 workers (0/3) ...
✓ Generating static pages using 4 workers (3/3) in 152ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found

○  (Static)  prerendered as static content
```

Both routes (`/` and `/_not-found`) prerendered as static. Build time ≈ 1.1s (Turbopack), TypeScript phase ≈ 0.7s, static generation ≈ 0.15s.

**Bundle size baseline** (Phase 3 LCP work will compare against this): the prerendered HTML for `/` is **5.7 KB** uncompressed (`.next/server/app/index.html`). Next 16's stable build output no longer shows the per-route JS chunk size table that older versions printed.

### Smoke test: `pnpm dev`

```
▲ Next.js 16.2.4 (Turbopack)
- Local:         http://localhost:3000
✓ Ready in 321ms
```

`curl http://localhost:3000` → HTTP **200**. Response body contains `lang="pt-BR"` and `Dra. Juliane Florentino`.

## Deviations from Plan

### Auto-fixed Issues (Rules 1-3)

**1. [Rule 1 - Plan bug] `next lint` removed in Next.js 16**
- **Found during:** Task 2 verification (`pnpm lint` failed with `Invalid project directory provided, no such directory: ./lint`).
- **Issue:** Next 16 deprecated the `next lint` CLI subcommand entirely. Running `next lint` is interpreted as `next [build] lint` (lint as a directory).
- **Fix:** Changed `package.json` `lint` script from `next lint` to `eslint .`. Same behavior, runs the flat config directly.
- **Files modified:** `package.json`
- **Commit:** `cd60ea0`

**2. [Rule 1 - Plan bug] FlatCompat circular-JSON crash with eslint-config-next 16**
- **Found during:** Task 2 first lint run.
- **Issue:** The plan specified using `FlatCompat` from `@eslint/eslintrc` to wrap `next/core-web-vitals`, `next/typescript`, `prettier`. In Next.js 16, `eslint-config-next` ships native flat-config exports (`eslint-config-next`, `/core-web-vitals`, `/typescript`) — when FlatCompat tried to validate these as legacy `.eslintrc` configs, it threw `TypeError: Converting circular structure to JSON` because the plugin objects reference each other.
- **Fix:** Rewrote `eslint.config.mjs` to import the flat-config arrays directly:
  ```js
  import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
  import nextTypescript from "eslint-config-next/typescript";
  import prettier from "eslint-config-prettier/flat";
  ```
  Spread them into the array. No FlatCompat needed. This is the documented pattern for ESLint 9 flat config + Next 16.
- **Files modified:** `eslint.config.mjs`, `package.json`
- **Commit:** `cd60ea0`

**3. [Rule 1 - Plan bug] eslint-config-prettier@^9 has no flat-config export**
- **Found during:** Task 2 (concurrent with #2 above).
- **Issue:** Plan pinned `eslint-config-prettier@^9.1.0`. Version 9 only exports legacy config; the flat-compat path is `eslint-config-prettier/flat` introduced in v10.
- **Fix:** Bumped to `eslint-config-prettier@^10.1.8`. Behavior is identical (just disables Prettier-conflicting rules) but with a clean flat-config import.
- **Files modified:** `package.json`, `pnpm-lock.yaml`
- **Commit:** `cd60ea0`

**4. [Rule 2 - Cleanup] Removed unused `@eslint/eslintrc` devDep**
- **Found during:** After deviations #2/#3 stabilized lint.
- **Issue:** Plan added `@eslint/eslintrc` for FlatCompat. Once we switched to native flat-config imports, that dep became dead weight.
- **Fix:** `pnpm remove @eslint/eslintrc`. Aligns with CONTEXT.md "Claude's Discretion → preferir minimal".
- **Files modified:** `package.json`, `pnpm-lock.yaml`
- **Commit:** `cd60ea0`

**5. [Rule 3 - Workspace warning] Pinned `turbopack.root` in next.config.ts**
- **Found during:** Task 1 first build.
- **Issue:** First `pnpm build` printed: `⚠ Warning: Next.js inferred your workspace root, but it may not be correct... Detected additional lockfiles: /Users/joa/Documents/development/juliane-florentino-landing/pnpm-lock.yaml`. Cause: an unrelated `package-lock.json` lives at `/Users/joa/package-lock.json` (outside this project, can't and shouldn't delete).
- **Fix:** Added `turbopack: { root: path.join(__dirname) }` to `next.config.ts`. Build now silent.
- **Files modified:** `next.config.ts`
- **Commit:** `5a4eea9`

**6. [Rule 2 - Hygiene] Added `*.tsbuildinfo` to `.gitignore`**
- **Found during:** Task 1 staging.
- **Issue:** TypeScript incremental compilation generates `tsconfig.tsbuildinfo` at repo root.
- **Fix:** Added pattern under `# TypeScript incremental` section.
- **Commit:** `5a4eea9`

### Plan-prescribed mutations Next.js made

- Next.js auto-rewrote `tsconfig.json` during the first build:
  - `jsx`: `"preserve"` → `"react-jsx"` (mandatory — uses React automatic runtime)
  - `include`: appended `".next/dev/types/**/*.ts"`
  - These are documented Next 16 behaviors; we kept them rather than fight the framework. Plan's acceptance criteria (`grep -q '"strict": true'` / `'"@/\*"'`) still pass.
- Prettier reformatted `lib/whatsapp.ts`, `app/layout.tsx`, `tsconfig.json` (collapsed multi-line params/arrays under the 100-col print width). Same content, cleaner one-liners.

### Discretionary deviation

- **README emoji removal:** The plan's literal README text included `⚠️` warning emoji. Per the project's no-emoji guideline (operator role notes "avoid using emojis"), I dropped the emoji glyphs but kept the textual warnings (`**Pendência bloqueadora antes do deploy:** ...`). Content and intent unchanged.

### Auth gates

None encountered. No services were authenticated; pnpm registry was anonymous.

## Contracts Established (for downstream plans)

These exact paths and signatures are now LOCKED for Plans 01-02, 01-03, and Phase 2/3 to consume:

| Contract                                          | Location                  |
| ------------------------------------------------- | ------------------------- |
| `cn(...inputs: ClassValue[]): string`             | `@/lib/utils`             |
| `buildWhatsAppLink({ phone, message }): string`   | `@/lib/whatsapp`          |
| `@import "tailwindcss";`                          | `app/globals.css` line 1  |
| `<html lang="pt-BR">`                             | `app/layout.tsx`          |
| Path alias `@/*` → `./*`                          | `tsconfig.json` `paths`   |
| pnpm scripts: dev/build/start/lint/typecheck/format/format:check | `package.json` `scripts`  |

### Files Plan 01-02 will modify (not now)

- `app/globals.css` → append `@theme { ... }` block with brand color/typography tokens
- `app/layout.tsx` → replace with `next/font` wired version
- May add `components/brand/Logo.tsx` for the word-mark

### Files Plan 01-03 will create (not now)

- `components/ui/button.tsx` and other shadcn primitives
- shadcn-managed `components.json` configuration

## Compliance Pendências (carried forward)

These are NOT bugs — they're known go-live blockers tracked in STATE.md:

1. **Número CRO da Dra. Juliane Florentino** — required by CFO 196/2019 footer rule. Phase 3 plan must surface this; cannot ship without.
2. **Número WhatsApp real** — currently `5562000000000` placeholder in `app/page.tsx` and README. Phase 3 DEPLOY-04 must replace via `NEXT_PUBLIC_WHATSAPP_PHONE` env var before go-live.

## Known Stubs

| Stub                                              | File             | Reason                                                         |
| ------------------------------------------------- | ---------------- | -------------------------------------------------------------- |
| Placeholder home page (one heading + one paragraph) | `app/page.tsx`   | Phase 2 builds the 7 real sections; this is intentional bootstrap content |
| Empty .gitkeep dirs (components/ui, brand, layout, public/images, public/og) | various          | Phase 1-03 + Phase 2 will populate them                        |
| Phone `5562000000000` literal                     | `app/page.tsx`   | DEPLOY-04 (Phase 3) replaces with env var; documented as blocker |
| Empty `app/globals.css` save for `@import "tailwindcss"` | `app/globals.css` | Plan 01-02 appends `@theme`                                    |

None of these stubs prevent the plan's goal (technical chassis green); each has a documented downstream owner.

## Self-Check: PASSED

**Files claimed exist:**

- `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.prettierrc`, `.prettierignore`, `.gitignore`, `.npmrc`, `.nvmrc`, `.vscode/settings.json` — FOUND
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css` — FOUND
- `lib/utils.ts`, `lib/whatsapp.ts` — FOUND
- `components/.gitkeep`, `components/ui/.gitkeep`, `components/brand/.gitkeep`, `components/layout/.gitkeep` — FOUND
- `public/.gitkeep`, `public/images/.gitkeep`, `public/og/.gitkeep` — FOUND
- `README.md` — FOUND

**Commits exist in git log:**

- `5a4eea9` — FOUND
- `cd60ea0` — FOUND
- `eef7aed` — FOUND

**Verification commands all exit 0:**

- `pnpm install` — PASS
- `pnpm typecheck` — PASS
- `pnpm lint` — PASS (zero errors, zero warnings)
- `pnpm format:check` — PASS
- `pnpm build` — PASS
- `pnpm dev` smoke test — HTTP 200 on `/`, `lang="pt-BR"` present in body
