# Phase 01 — Deferred Items

## From Plan 01-01 (2026-04-27)

### Untracked client-supplied images in `public/images/`

During execution of Plan 01-01, 19 image files appeared in `public/images/` from the client's Drive material drop:

- 11 numbered UUID `.jpg` files (`08b2c7d3-...jpg`, etc.)
- 8 `WhatsApp Image 2026-04-24 at *.jpeg` files
- 1 `WhatsApp Image 2026-04-25 at 11.32.53.jpeg`

These are out of scope for Plan 01-01 (which only ships the technical chassis). Plan 01-01 left them untracked rather than auto-staging them.

**Owner:** Phase 2 (sections build) — specifically the antes/depois (before/after) and autoridade (foto da Dra.) sections. Phase 2 must:

1. Audit which images are antes/depois vs. foto da Dra. vs. clínica.
2. Rename to descriptive slugs (no UUIDs in production paths).
3. Convert/optimize (probably to WebP via `next/image` automatic optimization).
4. Add CFO 196/2019 disclaimer "Resultados podem variar conforme cada caso" near every antes/depois block.
5. Verify each patient gave written authorization before publishing (compliance pendência).
6. Stage and commit only the renamed/optimized versions.

The raw uploads from the Drive can stay untracked locally during Phase 2 development; nothing should ship the UUID/WhatsApp filenames.
