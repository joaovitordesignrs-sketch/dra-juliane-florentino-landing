# Roadmap: Dra. Juliane Florentino — Landing Page

## Overview

Construção de landing page one-page (7 seções verticais) para captação de leads via WhatsApp da Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia. O caminho do início ao go-live se divide em três grandes movimentos: **(1) montar a base técnica + sistema de marca do zero**, **(2) construir as 7 seções de conteúdo da página com copy real e CTAs WhatsApp em todos os pontos críticos**, e **(3) garantir performance mobile (LCP < 2.5s), SEO local + compliance odontológico (CFO 196/2019) e publicar na Vercel**. O CTA único — "Agendar avaliação no WhatsApp" — guia toda a hierarquia visual e de informação.

Granularidade: **coarse** (3-5 fases). Optamos por 3 fases — a página é uma unidade atômica de entrega, não há valor em fragmentar a construção das seções.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Fundação e Sistema de Marca** - Next.js 16 + Tailwind + shadcn rodando, identidade visual "clínica premium" (paleta, tipografia, logo, componentes-base) pronta para uso
- [ ] **Phase 2: Construção das 7 Seções da Página** - Hero, prova social, galeria antes/depois, problema, tratamentos, autoridade e CTA final + localização — todas com copy pt-BR real e CTAs WhatsApp funcionais
- [ ] **Phase 3: Performance, SEO/Compliance e Deploy** - LCP < 2.5s, schema Dentist, footer com CRO, sitemap/robots e site publicado em `*.vercel.app` testado em iOS e Android

## Phase Details

### Phase 1: Fundação e Sistema de Marca
**Goal**: Ter um projeto Next.js 16 rodando localmente com TypeScript, Tailwind, shadcn/ui, ESLint/Prettier e tooling configurados, mais um sistema de marca completo "clínica premium" (paleta, tipografia, logo word-mark, estilo visual e componentes-base reutilizáveis) pronto para sustentar a construção das seções na Phase 2.
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, BRAND-01, BRAND-02, BRAND-03, BRAND-04, BRAND-05
**Success Criteria** (what must be TRUE):
  1. `pnpm dev` sobe o projeto Next.js 16 (App Router) sem warnings, com Tailwind e shadcn/ui funcionando, e `pnpm lint` passa limpo
  2. Repositório git inicializado com `.gitignore` adequado e README documentando comandos de dev/build/deploy
  3. Paleta da marca está disponível como Tailwind tokens (`bg-primary`, `text-foreground`, etc.) e a tipografia carrega via `next/font` sem flash de fonte
  4. Logo word-mark da Dra. Juliane Florentino renderiza em SVG inline (não imagem) e está pronto para uso em header/footer
  5. Componentes-base (`Button`, `Section`, `Container`) existem em `components/ui/` consumindo os tokens da marca e podem ser importados a partir de qualquer página
**Plans**: TBD

Plans:
- [ ] 01-01: TBD

### Phase 2: Construção das 7 Seções da Página
**Goal**: Entregar a landing page completa de 7 seções verticais (hero, prova social, galeria antes/depois, problema/virada, tratamentos, autoridade, CTA final + localização) renderizando em rota única com copy pt-BR real do briefing, imagens otimizadas via `next/image`, layout mobile-first responsivo, e pelo menos 5 CTAs WhatsApp distribuídos abrindo `wa.me/` com mensagem pré-preenchida.
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, HERO-06, SOCIAL-01, SOCIAL-02, SOCIAL-03, SOCIAL-04, SOCIAL-05, GALLERY-01, GALLERY-02, GALLERY-03, GALLERY-04, GALLERY-05, STORY-01, STORY-02, STORY-03, STORY-04, STORY-05, TREAT-01, TREAT-02, TREAT-03, TREAT-04, TREAT-05, TREAT-06, TREAT-07, AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05, CTA-01, CTA-02, CTA-03, CTA-04, CTA-05, CTA-06
**Success Criteria** (what must be TRUE):
  1. Visitante chega na página e vê o título "Facetas, Implantes e Reabilitação Oral em Goiânia para você voltar a sorrir com confiança" + 3 imagens antes/depois + CTA WhatsApp visível sem scroll em mobile (hero ocupa tela cheia em desktop)
  2. Ao rolar a página, o visitante percorre na ordem: depoimentos do Google → galeria antes/depois (mínimo 4 casos) → bloco "o problema" → grid de 4 tratamentos (facetas, implantes, prótese protocolo, reabilitação completa) → seção autoridade da Dra. com foto e bio → CTA final com mapa Google embed da clínica em Goiânia
  3. Visitante consegue clicar em qualquer um dos CTAs WhatsApp da página (mínimo 5: hero, social, gallery, treatments, authority, CTA final) e o link abre `wa.me/<numero>` com mensagem pré-preenchida em pt-BR
  4. Layout responde corretamente: em mobile (375px) não há scroll horizontal e cards de depoimento ficam em carrossel; em desktop (1280px+) depoimentos viram grid e seções respeitam container max-width
  5. Imagens (antes/depois, foto da Dra., ilustração da seção problema) renderizam via `next/image` com `width`/`height` definidos, sem layout shift visível ao carregar
**Plans**: TBD

Plans:
- [ ] 02-01: TBD

**UI hint**: yes

### Phase 3: Performance, SEO/Compliance e Deploy
**Goal**: Garantir que a página atende as métricas mobile-first (LCP < 2.5s, CLS < 0.1, INP < 200ms, Lighthouse Mobile ≥ 90), tem SEO local completo (meta tags, schema.org Dentist, sitemap, robots, alts), está em conformidade com a CFO 196/2019 (CRO + nome no footer, disclaimer em antes/depois, política LGPD básica), e está publicada na Vercel via subdomain `*.vercel.app` testada em iOS Safari e Android Chrome.
**Depends on**: Phase 2
**Requirements**: PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06, PERF-07, SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, SEO-08, SEO-09, DEPLOY-01, DEPLOY-02, DEPLOY-03, DEPLOY-04, DEPLOY-05, DEPLOY-06
**Success Criteria** (what must be TRUE):
  1. Lighthouse mobile (4G simulado) executado contra preview Vercel reporta Performance ≥ 90, LCP < 2.5s, CLS < 0.1 e INP < 200ms; bundle JS do client-side fica abaixo de 100KB gzipped no hero
  2. Visitante (e crawler) que abre a página vê title/description/og:image corretos, encontra `<html lang="pt-BR">`, headings hierárquicos (`h1` → `h2` → `h3`), schema.org `Dentist` JSON-LD com endereço, telefone e horário, e `sitemap.xml` + `robots.txt` acessíveis via URL
  3. Footer persistente exibe **"Dra. Juliane Florentino — CRO/GO XXXXX"** e link para política de privacidade/LGPD em todas as seções; disclaimer "Resultados podem variar conforme cada caso" aparece nos blocos antes/depois (hero + galeria)
  4. `git push` para `main` aciona deploy automático na Vercel; PRs geram preview deployments funcionais; variáveis de ambiente (número WhatsApp, link mapa) configuradas via `vercel env` e build de produção sai sem warnings críticos
  5. Site público no subdomain `juliane-florentino.vercel.app` (ou similar) carrega e funciona em iOS Safari e Android Chrome reais — todos os CTAs WhatsApp abrem o app/web do WhatsApp corretamente
**Plans**: TBD

Plans:
- [ ] 03-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Fundação e Sistema de Marca | 0/TBD | Not started | - |
| 2. Construção das 7 Seções da Página | 0/TBD | Not started | - |
| 3. Performance, SEO/Compliance e Deploy | 0/TBD | Not started | - |

## Coverage Notes

- **Total v1 requirements:** 71 (recontagem do REQUIREMENTS.md — o resumo do orquestrador citava 60, mas a contagem real por categoria é 71)
- **Mapped:** 71/71 (100%)
- **Orphans:** 0
- **Blocking item carried forward:** número CRO da Dra. Juliane (necessário em SEO-06 antes do go-live na Phase 3) — registrado em PROJECT.md como pendência bloqueadora

---
*Roadmap criado: 2026-04-27*
