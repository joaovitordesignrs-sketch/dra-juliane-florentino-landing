# Phase 1: Fundação e Sistema de Marca - Context

**Gathered:** 2026-04-27
**Status:** Ready for planning
**Source:** Direct project briefing (no /gsd-discuss-phase run)

<domain>
## Phase Boundary

Esta fase entrega:
1. Projeto Next.js 16 (App Router) + TypeScript + Tailwind CSS + shadcn/ui rodando localmente sem warnings
2. Tooling de qualidade: ESLint + Prettier + Husky/lint-staged opcional + scripts pnpm padronizados
3. Sistema de marca completo: paleta de cores, tipografia, logo word-mark e componentes-base reutilizáveis (Button, Section, Container)
4. Estrutura de pastas que sustentará as 7 seções da Phase 2

**Não entrega:** nenhuma das 7 seções de conteúdo da página (hero, depoimentos, etc.) — isso é Phase 2. Apenas a base técnica e o sistema de design.

</domain>

<decisions>
## Implementation Decisions

### Stack & Tooling (LOCKED)
- **Framework:** Next.js 16 com App Router (não Pages Router)
- **Linguagem:** TypeScript em modo strict
- **Package manager:** pnpm
- **Styling:** Tailwind CSS v4 (latest) com CSS variables nativas
- **Component library:** shadcn/ui (instalação via CLI, componentes em `components/ui/`)
- **Lint/format:** ESLint (config Next.js padrão) + Prettier (com plugin Tailwind)
- **Fontes:** carregadas via `next/font/google` ou `next/font/local`

### Estrutura de Pastas (LOCKED)
```
app/
  layout.tsx          # root layout, fontes, metadata global
  page.tsx            # landing page (Phase 2 popula)
  globals.css         # Tailwind + tokens CSS
components/
  ui/                 # shadcn primitives
  brand/              # Logo, marca-específicos
  layout/             # Section, Container, etc.
lib/
  utils.ts            # cn() helper, formatters
  whatsapp.ts         # builder do link wa.me com mensagem
public/
  images/             # antes/depois, foto da Dra.
  og/                 # og-image
```

### Identidade Visual — Direção "Clínica Premium" (LOCKED)

Estilo-guia: **clínica de estética dental premium em 2026** — referências como Smile Direct Club (sem o caos), Sjogren Dentistry (luxo discreto), Banwell Dental (warmth + clinical clarity). NÃO é estilo "consultório médico tradicional" (azul/cinza frio) NEM "spa rosa-pastel".

**Paleta (proposta — planner pode ajustar com 1 alternativa):**
- **Primary** (CTAs, links, headings de destaque): tom dourado-rosado quente — algo entre `#B07A5F` (terracota dourada) e `#C9A57B` (champagne). Decisão final no planejamento.
- **Foreground / Text:** `#1A1614` (preto-marrom quente, não puro `#000`)
- **Background:** `#FBF7F2` (off-white quente, ivory) — não branco puro
- **Muted / Secondary text:** `#7A6E62` (taupe)
- **Border / Divider:** `#E8DFD3` (bege claro)
- **Accent / Success / WhatsApp green** (somente para o ícone do WhatsApp, não para o botão): `#25D366`

**Justificativa:** Tons quentes + neutros bege transmitem acolhimento, premium e feminino-sofisticado. Diferencia da maioria dos sites de dentista que usam azul/branco frio. Combina com a foto da Dra. e com a paleta natural das fotos antes/depois (tons de pele).

**Tipografia (proposta — 2 famílias):**
- **Heading:** **Cormorant Garamond** ou **Fraunces** (serif elegante, peso 500-600) — transmite autoridade e premium, com peso editorial
- **Body:** **Inter** ou **Manrope** (sans-serif moderna, peso 400-500) — legibilidade absoluta em mobile

Decisão: planner escolhe entre Cormorant Garamond e Fraunces baseado em disponibilidade no Google Fonts e métricas (CLS). Prefer Fraunces (variável, mais pesos, mais moderna).

**Logo word-mark:**
- Formato: **"Dra. Juliane Florentino"** em duas linhas (Dra. JULIANE / FLORENTINO) com letterspacing aberto, em SVG inline
- Sem ícone/símbolo separado em v1 (pode vir em v2)
- Cor: usar `text-foreground` para versão principal, `text-primary` para variante

### Componentes-Base (LOCKED)
- **`<Button>`**: 3 variantes (`primary`, `secondary`, `ghost`), 3 tamanhos (`sm`, `md`, `lg`). Variant `primary` usa `bg-primary text-white`. Inclui suporte a `asChild` (Radix slot) para virar `<a>`.
- **`<Section>`**: wrapper semântico com `<section>`, padding vertical responsivo (`py-16 md:py-24 lg:py-32`), opcional `id` para anchor links.
- **`<Container>`**: max-width responsivo (`max-w-screen-xl`), padding horizontal (`px-4 md:px-8`).

### Acessibilidade & Performance (LOCKED desde o setup)
- `lang="pt-BR"` no `<html>`
- Tailwind config com tokens semânticos (`primary`, `foreground`, `background`, `muted`, `border`)
- Fonts via `next/font` com `display: 'swap'` e `preload: true` para o heading
- Sem CSS-in-JS runtime (apenas Tailwind + CSS modules quando necessário)
- Sem bibliotecas de animação pesadas em v1 (preferir CSS transitions; framer-motion só se necessário em Phase 2)

### Claude's Discretion

Áreas onde o planner pode escolher:
- Versão exata das dependências (use latest stable, mas evitar pre-releases)
- Configurações de ESLint além do preset Next.js (preferir minimal)
- Se incluir Husky/lint-staged ou apenas script pnpm
- Estrutura de tokens Tailwind (CSS vars vs config inline) — preferir CSS vars para suporte futuro a temas
- Se inicializar shadcn com `pnpm dlx shadcn@latest init` ou manualmente
- Pequenas variações nos hex codes da paleta para melhor contraste WCAG AA
- Estrutura interna do `<Button>` (CVA, simple variants, etc.) — preferir CVA por ser o padrão shadcn

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project context
- `.planning/PROJECT.md` — core value, constraints, decisions, compliance flags
- `.planning/REQUIREMENTS.md` — REQ-IDs FOUND-01..05 + BRAND-01..05 com critérios
- `.planning/ROADMAP.md` — Phase 1 goal e success criteria
- `CLAUDE.md` — guia de trabalho do projeto

### Stack documentation
- Next.js 16 App Router: https://nextjs.org/docs/app
- Tailwind CSS v4: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs/installation/next

</canonical_refs>

<specifics>
## Specific Ideas

- Logo word-mark deve renderizar idêntico em SVG (não imagem) para escalar e mudar cor via `currentColor`
- O `<Button>` precisa de variant que aceite ícone WhatsApp (`<svg>` ou `lucide-react`) sem quebrar alinhamento
- Paleta deve passar **WCAG AA contrast** entre `primary`/`background` e `foreground`/`background`. Verificar com tool antes de fechar valores.
- Tailwind v4 usa `@theme` directive ao invés de `tailwind.config.ts` — usar a sintaxe nova
- shadcn/ui em Tailwind v4 funciona normal mas requer `@source` directive para registrar componentes adicionados

</specifics>

<deferred>
## Deferred Ideas

- **Storybook** — útil mas overkill para projeto de 1 página; defer para v2 se a Dra. expandir o site
- **Dark mode** — out of scope (PROJECT.md)
- **Internacionalização** — out of scope
- **Animações framer-motion** — defer para Phase 2 se necessário (provavelmente não)
- **Husky pre-commit hooks** — opcional, planner decide

</deferred>

---

*Phase: 01-funda-o-e-sistema-de-marca*
*Context gathered: 2026-04-27 — Direct briefing (no discuss-phase)*
