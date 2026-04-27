# Requirements: Dra. Juliane Florentino — Landing Page

**Defined:** 2026-04-27
**Core Value:** Cada visitante que chega na página clica em "Agendar avaliação" no WhatsApp.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [ ] **FOUND-01**: Projeto Next.js 16 (App Router) inicializado com TypeScript, Tailwind CSS e shadcn/ui configurados
- [ ] **FOUND-02**: Estrutura de pastas seguindo convenção App Router (`app/`, `components/`, `lib/`, `public/`)
- [ ] **FOUND-03**: Repositório git com `.gitignore` apropriado (Node, Next, OS, IDE)
- [ ] **FOUND-04**: Linter (ESLint) e formatter (Prettier) configurados
- [ ] **FOUND-05**: README com instruções de dev (`pnpm dev`), build e deploy

### Brand

- [x] **BRAND-01
**: Paleta de cores definida e exposta como CSS variables / Tailwind theme tokens (primária + neutros + accent)
- [x] **BRAND-02
**: Tipografia escolhida e carregada via `next/font` (heading + body, com fallback)
- [x] **BRAND-03
**: Logo word-mark da Dra. Juliane Florentino criado (SVG inline) e renderizado no header/footer
- [x] **BRAND-04
**: Estilo visual definido como "clínica premium" — limpo, sofisticado, acolhedor (não corporativo, não médico-frio)
- [x] **BRAND-05
**: Componentes base (Button, Section, Container) usando design tokens do sistema

### Hero (Page 1)

- [ ] **HERO-01**: Título principal renderizado em destaque: "Facetas, Implantes e Reabilitação Oral em Goiânia para você voltar a sorrir com confiança"
- [ ] **HERO-02**: Subtítulo institucional com a especialidade da Dra. Juliane
- [ ] **HERO-03**: Texto de apoio com gancho emocional (vergonha de sorrir, evita fotos, dentes perdidos)
- [ ] **HERO-04**: CTA primário "Agendar avaliação pelo WhatsApp" abrindo `wa.me/` com mensagem pré-preenchida
- [ ] **HERO-05**: 3 imagens de antes/depois ilustrando o impacto visual (com disclaimer "Resultados podem variar conforme cada caso")
- [ ] **HERO-06**: Hero responsivo, ocupando 100vh em desktop, ajustado em mobile sem scroll horizontal

### Social Proof (Page 2)

- [ ] **SOCIAL-01**: Seção "Pacientes que voltaram a sorrir com segurança" com depoimentos do Google Business Profile
- [ ] **SOCIAL-02**: Cards de depoimento com nome (ou inicial), avaliação (estrelas), texto do review
- [ ] **SOCIAL-03**: CTA secundário "Agendar minha avaliação" no final da seção
- [ ] **SOCIAL-04**: Layout em carrossel (mobile) ou grid (desktop) — mínimo 3 depoimentos visíveis
- [ ] **SOCIAL-05**: Link sutil para "Ver mais avaliações no Google" apontando para o GBP da clínica

### Gallery (Page 3 — Antes e Depois)

- [ ] **GALLERY-01**: Galeria adicional de antes/depois (diferente da do hero) com mínimo 4 casos
- [ ] **GALLERY-02**: Cada caso com imagem antes + depois lado a lado (ou slider) e disclaimer
- [ ] **GALLERY-03**: Texto de apoio explicando que cada caso é individualizado
- [ ] **GALLERY-04**: CTA "Quero transformar meu sorriso" no final
- [ ] **GALLERY-05**: Imagens otimizadas via `next/image` com lazy loading e dimensões corretas (sem CLS)

### Story (Page 4 — Problema)

- [ ] **STORY-01**: Seção "O problema" com narrativa emocional (vergonha, autoestima, mastigação, percepção de si)
- [ ] **STORY-02**: Bloco de "virada" com a mensagem positiva sobre planejamento correto
- [ ] **STORY-03**: Imagem ilustrativa (gerada por IA ou banco de imagens) representando insegurança no sorriso
- [ ] **STORY-04**: CTA "Quero entender meu caso"
- [ ] **STORY-05**: Tipografia e espaçamento generosos para leitura confortável (linha < 70 chars)

### Treatments (Page 5)

- [ ] **TREAT-01**: Seção "Tratamentos personalizados" com grid de 4 blocos (facetas, implantes, prótese protocolo, reabilitação completa)
- [ ] **TREAT-02**: Bloco facetas com sub-itens (resina + porcelana) e descrição
- [ ] **TREAT-03**: Bloco implantes com descrição focada em recuperação de função e estética
- [ ] **TREAT-04**: Bloco prótese protocolo / próteses com descrição focada em estabilidade e segurança
- [ ] **TREAT-05**: Bloco reabilitação oral completa enfatizando planejamento integral
- [ ] **TREAT-06**: CTA "Falar com a equipe pelo WhatsApp" abaixo do grid
- [ ] **TREAT-07**: Cada bloco com ícone simples e visual consistente

### Authority (Page 6)

- [ ] **AUTH-01**: Seção "Quem é a Dra. Juliane" com foto profissional (do Drive)
- [ ] **AUTH-02**: Bio textual conforme briefing — formação, especialização, abordagem
- [ ] **AUTH-03**: Lista de diferenciais (especialista, atendimento humanizado, planejamento individualizado, naturalidade, tecnologia, premium em Goiânia)
- [ ] **AUTH-04**: CTA "Quero ser avaliado pela Dra. Juliane"
- [ ] **AUTH-05**: Foto da Dra. tratada com `next/image` e ratio adequado para mobile (não corta o rosto)

### CTA Final + Localização (Page 7)

- [ ] **CTA-01**: Título "Seu novo sorriso começa com uma avaliação"
- [ ] **CTA-02**: Texto de fechamento reforçando o convite
- [ ] **CTA-03**: Botão grande "Agendar avaliação pelo WhatsApp" como CTA principal da página
- [ ] **CTA-04**: Bloco de localização com título "Atendimento em Goiânia para pacientes de todo o Brasil"
- [ ] **CTA-05**: Mapa Google embed (iframe) com localização da clínica
- [ ] **CTA-06**: Endereço completo da clínica em texto (acessibilidade + SEO local)

### Performance

- [ ] **PERF-01**: LCP (Largest Contentful Paint) < 2.5s em 4G simulado
- [ ] **PERF-02**: CLS (Cumulative Layout Shift) < 0.1 — todas as imagens com width/height
- [ ] **PERF-03**: INP (Interaction to Next Paint) < 200ms
- [ ] **PERF-04**: Imagens servidas em formatos modernos (AVIF/WebP) via `next/image`
- [ ] **PERF-05**: Fontes carregadas com `display: swap` via `next/font`
- [ ] **PERF-06**: Bundle JavaScript do client < 100KB gzipped (hero crítico)
- [ ] **PERF-07**: Lighthouse Performance ≥ 90 em mobile no Vercel preview

### SEO + Compliance

- [ ] **SEO-01**: Meta tags: title, description, og:image, og:title, og:description, twitter:card
- [ ] **SEO-02**: Schema.org `Dentist` JSON-LD com endereço, telefone, horário, área de atuação
- [ ] **SEO-03**: `sitemap.xml` e `robots.txt` gerados automaticamente
- [ ] **SEO-04**: Tags semânticas (`<main>`, `<section>`, `<header>`, `<footer>`, headings hierárquicos)
- [ ] **SEO-05**: Imagens com `alt` descritivo (acessibilidade + SEO)
- [ ] **SEO-06**: Footer persistente com **nome completo da Dra. Juliane Florentino + CRO** (compliance CFO 196/2019)
- [ ] **SEO-07**: Disclaimer "Resultados podem variar conforme cada caso" presente em blocos de antes/depois
- [ ] **SEO-08**: Política de privacidade e LGPD básica (link no footer) — mínimo necessário para captação de WhatsApp
- [ ] **SEO-09**: `lang="pt-BR"` no `<html>`

### Deploy

- [ ] **DEPLOY-01**: Projeto deployado na Vercel via integração GitHub
- [ ] **DEPLOY-02**: Subdomain Vercel configurado (`juliane-florentino.vercel.app` ou similar)
- [ ] **DEPLOY-03**: Preview deployments funcionando para PRs
- [ ] **DEPLOY-04**: Variáveis de ambiente configuradas (número do WhatsApp, links, etc.) via `vercel env`
- [ ] **DEPLOY-05**: Build de produção sem warnings críticos
- [ ] **DEPLOY-06**: Site acessível e funcional em produção, testado em iOS Safari e Android Chrome

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Domain & Branding

- **V2-DOMAIN-01**: Registrar e apontar domínio próprio (.com.br) para Vercel
- **V2-DOMAIN-02**: Email profissional na nova marca (contato@dominio.com.br)

### Conversion Optimization

- **V2-ANALYTICS-01**: Meta Pixel + eventos de conversão (clique WhatsApp = Lead)
- **V2-ANALYTICS-02**: GA4 + eventos personalizados
- **V2-ANALYTICS-03**: Heatmaps (Hotjar / Microsoft Clarity)
- **V2-AB-01**: Setup de A/B testing para variantes de headline/CTA
- **V2-CRM-01**: Integração com CRM (HubSpot / RD Station) para tracking de leads

### Content Expansion

- **V2-BLOG-01**: Blog com artigos sobre tratamentos (SEO de conteúdo)
- **V2-CASES-01**: Página dedicada com galeria expandida de casos
- **V2-FAQ-01**: Seção de FAQ
- **V2-VIDEO-01**: Vídeo institucional da Dra. Juliane

### Multilingual & Accessibility

- **V2-I18N-01**: Versão em inglês para pacientes internacionais
- **V2-A11Y-01**: Auditoria completa WCAG 2.2 AA

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| CMS / painel admin | Copy estático em v1; alterações via PR. Reabrir se houver volume de mudanças. |
| Backend de leads próprio | CTA único é WhatsApp via `wa.me/`. Sem servidor reduz custo e atrito. |
| Formulário de contato | Atrito desnecessário no fluxo WhatsApp. |
| Multi-idioma (en/es) | Atendimento é local Goiânia; pt-BR exclusivo. |
| Dark mode | Padrão da indústria de saúde estética é tema claro premium. |
| Animações WebGL / 3D | Risco de prejudicar LCP em mobile/3G. |
| Login de paciente / área restrita | Sem necessidade — fluxo é apenas captação inicial. |
| Sistema de agendamento próprio | Agendamento acontece via WhatsApp / sistema da clínica, não via site. |
| E-commerce / pagamento online | Não há produto vendido pelo site. |
| Notificações push / emails | Comunicação é via WhatsApp da clínica. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| BRAND-01 | Phase 1 | Pending |
| BRAND-02 | Phase 1 | Pending |
| BRAND-03 | Phase 1 | Pending |
| BRAND-04 | Phase 1 | Pending |
| BRAND-05 | Phase 1 | Complete |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| HERO-03 | Phase 2 | Pending |
| HERO-04 | Phase 2 | Pending |
| HERO-05 | Phase 2 | Pending |
| HERO-06 | Phase 2 | Pending |
| SOCIAL-01 | Phase 2 | Pending |
| SOCIAL-02 | Phase 2 | Pending |
| SOCIAL-03 | Phase 2 | Pending |
| SOCIAL-04 | Phase 2 | Pending |
| SOCIAL-05 | Phase 2 | Pending |
| GALLERY-01 | Phase 2 | Pending |
| GALLERY-02 | Phase 2 | Pending |
| GALLERY-03 | Phase 2 | Pending |
| GALLERY-04 | Phase 2 | Pending |
| GALLERY-05 | Phase 2 | Pending |
| STORY-01 | Phase 2 | Pending |
| STORY-02 | Phase 2 | Pending |
| STORY-03 | Phase 2 | Pending |
| STORY-04 | Phase 2 | Pending |
| STORY-05 | Phase 2 | Pending |
| TREAT-01 | Phase 2 | Pending |
| TREAT-02 | Phase 2 | Pending |
| TREAT-03 | Phase 2 | Pending |
| TREAT-04 | Phase 2 | Pending |
| TREAT-05 | Phase 2 | Pending |
| TREAT-06 | Phase 2 | Pending |
| TREAT-07 | Phase 2 | Pending |
| AUTH-01 | Phase 2 | Pending |
| AUTH-02 | Phase 2 | Pending |
| AUTH-03 | Phase 2 | Pending |
| AUTH-04 | Phase 2 | Pending |
| AUTH-05 | Phase 2 | Pending |
| CTA-01 | Phase 2 | Pending |
| CTA-02 | Phase 2 | Pending |
| CTA-03 | Phase 2 | Pending |
| CTA-04 | Phase 2 | Pending |
| CTA-05 | Phase 2 | Pending |
| CTA-06 | Phase 2 | Pending |
| PERF-01 | Phase 3 | Pending |
| PERF-02 | Phase 3 | Pending |
| PERF-03 | Phase 3 | Pending |
| PERF-04 | Phase 3 | Pending |
| PERF-05 | Phase 3 | Pending |
| PERF-06 | Phase 3 | Pending |
| PERF-07 | Phase 3 | Pending |
| SEO-01 | Phase 3 | Pending |
| SEO-02 | Phase 3 | Pending |
| SEO-03 | Phase 3 | Pending |
| SEO-04 | Phase 3 | Pending |
| SEO-05 | Phase 3 | Pending |
| SEO-06 | Phase 3 | Pending |
| SEO-07 | Phase 3 | Pending |
| SEO-08 | Phase 3 | Pending |
| SEO-09 | Phase 3 | Pending |
| DEPLOY-01 | Phase 3 | Pending |
| DEPLOY-02 | Phase 3 | Pending |
| DEPLOY-03 | Phase 3 | Pending |
| DEPLOY-04 | Phase 3 | Pending |
| DEPLOY-05 | Phase 3 | Pending |
| DEPLOY-06 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 71 total (10 Foundation+Brand, 39 Page Sections, 22 Performance+SEO+Deploy)
- Mapped to phases: 71 (100%)
- Unmapped: 0
- Phase 1 (Fundação e Sistema de Marca): 10 requirements
- Phase 2 (Construção das 7 Seções): 39 requirements
- Phase 3 (Performance, SEO/Compliance e Deploy): 22 requirements

> Nota sobre contagem: o resumo do orquestrador citou 60 v1 requirements; a contagem real por categoria (somatório dos itens efetivamente listados nas seções acima) é 71. Esta tabela reflete a contagem real.

---
*Requirements defined: 2026-04-27*
*Last updated: 2026-04-27 — traceability preenchido pelo roadmapper*
