# CLAUDE.md

Guia de trabalho para Claude Code neste projeto.

## Project

**Dra. Juliane Florentino — Landing Page**

Landing one-page (7 seções verticais) para captação de leads via WhatsApp da Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia (GO). Público-alvo: pacientes inseguros com o sorriso, com perda dental, ou em busca de estética/reabilitação completa (facetas, implantes, prótese protocolo, reabilitação oral).

**Core value:** cada visitante clica em "Agendar avaliação" no WhatsApp.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Vercel** (deploy + hospedagem)
- **next/font** (tipografia) + **next/image** (otimização)
- **pnpm** como package manager

## Estrutura

```
.planning/        # GSD planning docs — não editar manualmente
├─ PROJECT.md     # contexto, core value, decisões
├─ REQUIREMENTS.md # 71 v1 requirements + traceability
├─ ROADMAP.md     # 3 fases
├─ STATE.md       # memória do projeto
└─ config.json    # YOLO + coarse + balanced

app/              # rotas Next.js App Router
components/       # componentes React (ui/ + sections/)
lib/              # utilitários
public/           # assets estáticos (logo, imagens)
```

## Workflow GSD

Este projeto usa o workflow GSD (`/gsd-*`). Sempre:

1. **Não pular o plano** — antes de codar uma fase, rode `/gsd-plan-phase N`
2. **Commits atômicos** — cada plano vira um commit
3. **Não editar `.planning/` manualmente** — use os comandos `/gsd-*` para evolução
4. **Verificar com `/gsd-progress`** — para saber em que ponto estamos

Modo: **YOLO** (auto-aprovação ligada). Granularidade: **coarse** (3 fases grandes).

## Constraints críticos

- **Idioma**: pt-BR exclusivo, sem i18n
- **Mobile-first**: 90%+ tráfego é Instagram bio + Meta Ads em mobile
- **Performance**: LCP < 2.5s em 4G, CLS < 0.1, INP < 200ms, Lighthouse mobile ≥ 90
- **Sem backend / sem DB**: CTA único é `wa.me/<numero>`
- **Compliance CFO 196/2019**:
  - Footer com **nome completo da Dra. Juliane Florentino + CRO** em todas as páginas
  - Disclaimer "Resultados podem variar conforme cada caso" em blocos antes/depois
  - Link LGPD/política de privacidade no footer

## Pendências bloqueadoras antes do deploy

- **Número CRO da Dra. Juliane** — obrigatório legalmente, sem ele não pode ir ao ar
- Validação da Dra. com sua assessoria jurídica sobre antes/depois e depoimentos

## Recursos do cliente

- Material (fotos antes/depois + foto da Dra.): https://drive.google.com/drive/folders/1-osyw1kMAY_GgQ1H6tLtdbFEnPL15GRY?usp=sharing
- Localização clínica + reviews Google: https://share.google/nNeXUPmxMvu0v8a6y

## Comandos

```bash
pnpm dev         # dev server
pnpm build       # production build
pnpm lint        # ESLint
pnpm format      # Prettier
```

## Próximo passo

```
/gsd-plan-phase 1
```

Phase 1 = Fundação + sistema de marca (Next.js 16 setup + Tailwind + shadcn + paleta + tipografia + logo word-mark + componentes-base).
