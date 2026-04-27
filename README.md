# Dra. Juliane Florentino — Landing Page

Landing page one-page (7 seções verticais) para captação de leads via WhatsApp da **Dra. Juliane Florentino** — dentista especialista em prótese dental e reabilitação oral em Goiânia (GO).

> **Core value:** cada visitante clica em "Agendar avaliação" no WhatsApp.

## Stack

- **Next.js 16** (App Router) + TypeScript strict
- **Tailwind CSS v4** (sintaxe `@theme` no `globals.css`, sem `tailwind.config.ts`)
- **shadcn/ui** (componentes em `components/ui/`)
- **next/font** (tipografia) + **next/image** (otimização)
- **pnpm** como package manager (Node 20+)
- **Vercel** (deploy + hospedagem em subdomain `*.vercel.app` na v1)

## Pré-requisitos

- Node.js >= 20 (ver `.nvmrc`)
- pnpm >= 9 (ver campo `packageManager` em `package.json`)

```bash
# Instalar pnpm se ainda não tiver:
npm install -g pnpm@9
```

## Setup

```bash
pnpm install     # instala dependências
pnpm dev         # http://localhost:3000
```

## Scripts

| Comando             | O que faz                                             |
| ------------------- | ----------------------------------------------------- |
| `pnpm dev`          | Dev server em http://localhost:3000                   |
| `pnpm build`        | Build de produção em `.next/`                         |
| `pnpm start`        | Sobe o build de produção localmente                   |
| `pnpm lint`         | ESLint (Next + TypeScript + Prettier presets)         |
| `pnpm typecheck`    | `tsc --noEmit` para checagem de tipos                 |
| `pnpm format`       | Prettier — escreve arquivos formatados                |
| `pnpm format:check` | Prettier — apenas verifica, sai != 0 se houver desvio |

## Estrutura

```
.planning/        # GSD planning docs — não editar manualmente
app/              # rotas Next.js App Router
├─ layout.tsx     # root layout (lang="pt-BR", fontes via next/font)
├─ page.tsx       # landing page (Phase 2 popula as 7 seções)
└─ globals.css    # Tailwind v4 + @theme tokens da marca
components/
├─ ui/            # shadcn/ui primitives (Button, etc.)
├─ brand/         # Logo word-mark da Dra. Juliane
└─ layout/        # Section, Container e outros layout primitives
lib/
├─ utils.ts       # cn() helper para classes Tailwind
└─ whatsapp.ts    # buildWhatsAppLink() para CTAs wa.me
public/
├─ images/        # antes/depois, foto da Dra. (Phase 2 popula)
└─ og/            # og:image (Phase 3 popula)
```

## Deploy (Vercel)

A v1 será publicada em subdomain Vercel (`juliane-florentino.vercel.app` ou similar — domínio próprio fica para v2).

```bash
# Primeiro deploy (uma vez por máquina):
pnpm dlx vercel login
pnpm dlx vercel link

# Deploy preview:
pnpm dlx vercel deploy

# Deploy produção:
pnpm dlx vercel --prod
```

Variáveis de ambiente (configuradas em `vercel env` na Phase 3):

- `NEXT_PUBLIC_WHATSAPP_PHONE` — número da Dra. em E.164 sem "+", ex `5562000000000` (placeholder fake; substituir pelo real antes do go-live)
- `NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE` — mensagem pré-preenchida do CTA principal

## Workflow GSD

Este projeto usa o workflow GSD (`/gsd-*`). Resumo das fases:

- **Phase 1 — Fundação e Sistema de Marca** _(em andamento)_: Next.js + Tailwind + shadcn rodando, identidade "clínica premium" pronta
- **Phase 2 — Construção das 7 Seções**: hero, depoimentos, antes/depois, problema, tratamentos, autoridade, CTA + localização
- **Phase 3 — Performance, SEO/Compliance e Deploy**: LCP < 2.5s, schema Dentist, footer com CRO, deploy Vercel

Para evoluir o projeto, sempre use os comandos GSD — não edite `.planning/` à mão. Veja `CLAUDE.md` para detalhes.

## Compliance odontológico (CFO 196/2019)

A página final precisa de:

- **Footer persistente** com nome completo + CRO da Dra. Juliane Florentino
- **Disclaimer** "Resultados podem variar conforme cada caso" em blocos antes/depois
- **Política de privacidade / LGPD** linkada no footer

> **Pendência bloqueadora antes do deploy:** número CRO da Dra. Juliane Florentino. Sem ele, a página não pode ir ao ar legalmente.
> **Pendência bloqueadora antes do deploy:** número WhatsApp real da Dra. (placeholder atual `5562000000000` é fake — substituir via env var `NEXT_PUBLIC_WHATSAPP_PHONE` na Phase 3 DEPLOY-04).

## Recursos do cliente

- Material (fotos antes/depois + foto da Dra.): https://drive.google.com/drive/folders/1-osyw1kMAY_GgQ1H6tLtdbFEnPL15GRY?usp=sharing
- Localização clínica + reviews Google: https://share.google/nNeXUPmxMvu0v8a6y
