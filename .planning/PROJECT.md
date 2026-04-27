# Dra. Juliane Florentino — Landing Page

## What This Is

Landing page de captação para a **Dra. Juliane Florentino** — dentista especialista em prótese dental e reabilitação oral em Goiânia (GO). Site one-page de 7 seções verticais focado em converter visitantes em leads de WhatsApp para agendamento de avaliação. Público-alvo: pacientes inseguros com o sorriso, com perda dental, ou em busca de estética/reabilitação completa (facetas, implantes, prótese protocolo, reabilitação oral).

## Core Value

**Cada visitante que chega na página clica em "Agendar avaliação" no WhatsApp.** Tudo o resto — design, copy, prova social, autoridade — existe para reduzir o atrito até esse clique.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Site one-page com 7 seções verticais navegáveis (hero, depoimentos, antes/depois, problema, tratamentos, autoridade, CTA + localização)
- [ ] Copy completo em pt-BR conforme briefing entregue pelo cliente
- [ ] Pelo menos 3 CTAs primários para WhatsApp distribuídos ao longo da página
- [ ] Galeria de antes/depois (página 1 com 3 fotos, página 3 com galeria adicional)
- [ ] Seção de depoimentos com prova social puxada do Google Business Profile
- [ ] Bloco de tratamentos com 4 categorias (facetas, implantes, prótese protocolo, reabilitação oral)
- [ ] Seção de autoridade com foto e bio da Dra. Juliane + lista de diferenciais
- [ ] Seção final com mapa Google incorporado da clínica em Goiânia
- [ ] Identidade visual definida do zero (logo word-mark + paleta + tipografia + estilo "clínica premium")
- [ ] Performance: LCP < 2.5s em 4G, mobile-first (90%+ do tráfego virá de mobile)
- [ ] SEO local básico: title, meta, schema.org Dentist, sitemap, robots.txt
- [ ] Imagens otimizadas via `next/image` (next-gen formats, lazy loading)
- [ ] Deploy na Vercel em subdomain `*.vercel.app` para v1
- [ ] Compliance odontológico mínimo: nome completo + CRO da Dra. visíveis no rodapé

### Out of Scope

- **CMS / painel de administração** — copy é estático, atualizações via PR. Reabrir se a Dra. precisar editar com frequência.
- **Blog / conteúdo dinâmico** — landing one-page; conteúdo extra fica para fase 2.
- **Formulário próprio de captação** — fluxo é 100% WhatsApp; sem necessidade de backend de leads em v1.
- **Integração com CRM** — leads chegam direto no WhatsApp da clínica; CRM fica para fase 2 se houver volume.
- **Domínio próprio (.com.br)** — Dra. ainda não tem dom ínio; v1 entrega em `*.vercel.app`. Migração de DNS é fase 2.
- **Internacionalização (en/es)** — atendimento é local Goiânia; pt-BR apenas.
- **A/B testing setup** — sem volume suficiente em v1 para resultados estatísticos.
- **Dark mode** — landing de saúde estética; tema claro premium é o padrão da indústria.
- **Animações complexas / WebGL** — risco de prejudicar LCP em mobile/3G; usar transições CSS sutis apenas.

## Context

**Mercado:** Goiânia tem mercado denso de dentistas estéticos. Diferenciação da Dra. Juliane vem de:
- Especialização em **prótese dental + reabilitação oral** (não é só "estética")
- Atendimento humanizado / acolhedor
- Planejamento individualizado

**Público em momento emocional:** A copy do briefing trabalha dor emocional explícita ("vergonha de sorrir", "evitar fotos", "insegurança"). O site precisa ser acolhedor, não agressivo. Visual deve transmitir limpeza clínica + sofisticação, não "venda dura".

**Tráfego esperado (assumido):** 80%+ vai vir de Instagram bio + Meta Ads. Mobile-first é não-negociável. A página precisa carregar rápido em 3G/4G fraca.

**Compliance odontológico (CFO 196/2019):** Resolução do Conselho Federal de Odontologia restringe publicidade odontológica. Pontos de risco no briefing atual:
1. Fotos de antes/depois podem ser interpretadas como "promessa de resultado"
2. Depoimentos de pacientes precisam de autorização escrita
3. Toda peça publicitária exige nome completo + CRO da profissional
4. Conteúdo sensacionalista ou que prometa resultados é vedado

**Decisão atual:** Manter o formato do briefing (antes/depois + depoimentos), mas com:
- Disclaimer "Resultados podem variar conforme cada caso" em cada bloco antes/depois
- CRO + nome completo da Dra. em rodapé persistente
- Depoimentos: usar apenas os já públicos no Google (que pressupõem autorização tácita)
- Recomendar à Dra. validar com sua assessoria jurídica antes do go-live

**Recursos do cliente:**
- Material de fotos (antes/depois + foto da Dra.): https://drive.google.com/drive/folders/1-osyw1kMAY_GgQ1H6tLtdbFEnPL15GRY?usp=sharing
- Localização clínica + depoimentos Google: https://share.google/nNeXUPmxMvu0v8a6y

## Constraints

- **Tech stack**: Next.js 16 App Router + Tailwind CSS + shadcn/ui — escolha do cliente; deploy nativo Vercel.
- **Idioma**: pt-BR exclusivamente — público é local de Goiânia.
- **Performance**: LCP < 2.5s em 4G, CLS < 0.1, INP < 200ms — exigência para conversão e SEO local.
- **Mobile-first**: 90%+ do tráfego virá de mobile (Instagram bio, Meta Ads). Desktop é secundário mas precisa ser apresentável.
- **Compliance**: CFO 196/2019 — toda a publicidade precisa CRO visível; antes/depois com disclaimer; sem promessa de resultados.
- **Hospedagem v1**: Vercel subdomain (`juliane-florentino.vercel.app` ou similar) — domínio próprio em fase 2.
- **Sem backend próprio**: leads via WhatsApp wa.me link — sem servidor, sem banco, sem auth.
- **Pendência bloqueadora antes do deploy**: número CRO da Dra. Juliane (obrigatório legalmente).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Stack: Next.js 16 + Vercel | Escolha do cliente. App Router + Image otimization + deploy zero-config — ideal para landing one-page com SEO. | — Pending |
| One-page (sem rotas) | Briefing é linear, conversão concentrada. Sem necessidade de múltiplas rotas em v1. | — Pending |
| Sem backend / DB | CTA único é WhatsApp (link `wa.me/`). Backend só cria custo e atrito sem ROI mensurável em v1. | — Pending |
| Identidade visual criada do zero | Cliente não tem manual de marca. Designer (você) define direção "clínica premium" e propõe paleta/tipografia. | — Pending |
| Antes/depois + depoimentos mantidos com mitigação | Conversão depende de prova social. Mitigamos risco CFO com disclaimer + CRO + uso apenas de depoimentos já públicos. Cliente assume risco final. | ⚠️ Revisit — validar com assessoria jurídica da Dra. antes do go-live |
| Subdomain Vercel para v1 | Dra. ainda não tem domínio. Reduz tempo até go-live; migração futura é trivial. | — Pending |
| Tailwind + shadcn/ui | Velocidade de build + componentes acessíveis prontos + customização visual sem fricção. | — Pending |
| Mobile-first absoluto | 90%+ do tráfego virá de Instagram/Meta Ads em mobile. Desktop é secundário. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-27 after initialization*
