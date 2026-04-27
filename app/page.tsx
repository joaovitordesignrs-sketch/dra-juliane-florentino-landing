import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/brand";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Landing page — Dra. Juliane Florentino
 *
 * Public WhatsApp number is a deploy-blocker placeholder (NEXT_PUBLIC_WHATSAPP_PHONE
 * swap happens in Phase 3). CRO/GO XXXXX in the footer is also a deploy-blocker
 * (CFO 196/2019 mandates the registered CRO number visible on every page).
 *
 * 7 vertical sections + sticky header + footer. Server component (no client state).
 * Smooth scroll anchors are wired via `scroll-behavior: smooth` in globals.css.
 */

const WHATSAPP_PHONE = "5562000000000"; // PLACEHOLDER — swap via NEXT_PUBLIC_WHATSAPP_PHONE in Phase 3

const wa = (message: string) => buildWhatsAppLink({ phone: WHATSAPP_PHONE, message });

const WA_MESSAGES = {
  header: "Olá Dra. Juliane! Vim pelo site e gostaria de agendar uma avaliação.",
  hero: "Olá Dra. Juliane! Vim pelo site e gostaria de agendar uma avaliação.",
  social:
    "Olá! Li os depoimentos no site e quero agendar minha avaliação com a Dra. Juliane.",
  gallery:
    "Olá Dra. Juliane! Vi os antes e depois no site e quero conhecer um caminho para o meu sorriso.",
  story:
    "Olá Dra. Juliane! Vim pelo site e gostaria de entender qual seria o caminho para o meu caso.",
  treatments:
    "Olá! Vim pelo site e gostaria de falar com a equipe sobre tratamentos.",
  authority:
    "Olá Dra. Juliane! Vim pelo site e gostaria de ser avaliado por você.",
  finalCta:
    "Olá Dra. Juliane! Vim pelo site e quero agendar minha avaliação.",
  sticky: "Olá Dra. Juliane! Vim pelo site.",
};

// ─────────────────────────────────────────────────────────
// Inline icons (no lucide-react — keep deps lean)
// ─────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function VeneerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 8c0-1.5 1-3 3-3s3 1.5 3 4 .5 5-2 6-4-1-4-3.5V8Z" />
      <path d="M13 8c0-1.5 1-3 3-3s3 1.5 3 4 .5 5-2 6-4-1-4-3.5V8Z" />
    </svg>
  );
}

function ImplantIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3c-2 0-3.5 1.5-3.5 3.5v2h7v-2C15.5 4.5 14 3 12 3Z" />
      <path d="M9 8.5h6l-.5 3h-5z" />
      <path d="M11 11.5v6m2-6v6" />
      <path d="M10 17.5h4" />
      <path d="M10.5 19.5h3l-.5 1.5h-2z" />
    </svg>
  );
}

function ProsthesisIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 10c0-2 2-3 4-3s3 1.5 3 3v3c0 1.5-1 2.5-2.5 2.5S5 14.5 5 13v-1" />
      <path d="M21 10c0-2-2-3-4-3s-3 1.5-3 3v3c0 1.5 1 2.5 2.5 2.5S19 14.5 19 13v-1" />
      <path d="M10 11h4" />
    </svg>
  );
}

function RehabIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12c1.5-2 6.5-2 8 0" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Reusable bits
// ─────────────────────────────────────────────────────────

function StarRow() {
  return (
    <div className="text-primary flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-4" />
      ))}
    </div>
  );
}

/**
 * Client images come pre-composed as a single before/after frame (top=before, bottom=after).
 * We render them as a single Image and label below. If the future flow needs side-by-side
 * separate frames, build a sibling component then.
 */
function StackedBeforeAfter({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="border-border bg-muted relative aspect-[4/5] overflow-hidden rounded-xl border">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 33vw, 380px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="text-muted-foreground mt-2 text-center text-xs font-medium tracking-wider uppercase">
        Antes <span className="text-border mx-1">/</span> Depois
      </figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────
// Header (sticky)
// ─────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="bg-background/85 border-border sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="#hero" aria-label="Início — Dra. Juliane Florentino" className="shrink-0">
            <Logo width={140} className="text-foreground md:hidden" />
            <Logo width={170} className="text-foreground hidden md:inline-block" />
          </Link>

          <Button asChild variant="primary" size="sm" className="md:h-11 md:px-5 md:text-base">
            <a href={wa(WA_MESSAGES.header)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              <span className="hidden sm:inline">Agendar avaliação</span>
              <span className="sm:hidden">Agendar</span>
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}

// ─────────────────────────────────────────────────────────
// Section 1 — Hero
// ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <Section id="hero" className="pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="font-heading text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl lg:text-6xl">
            Facetas, Implantes e Reabilitação Oral em Goiânia para você voltar a sorrir com
            confiança
          </h1>
          <p className="font-heading text-foreground/80 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            A Dra. Juliane Florentino é especialista em prótese dental e reabilitação oral,
            oferecendo tratamentos personalizados para transformar seu sorriso com naturalidade,
            estética e segurança.
          </p>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
            Se você sente vergonha de sorrir, evita fotos, perdeu dentes ou deseja melhorar a
            estética do seu sorriso, existe um caminho planejado para recuperar sua autoestima.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <a href={wa(WA_MESSAGES.hero)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Agendar avaliação pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            <StackedBeforeAfter
              src="/images/hero-transformation-1.jpg"
              alt="Transformação de sorriso — antes e depois de tratamento estético"
              priority
            />
            <StackedBeforeAfter
              src="/images/hero-smile-1.jpg"
              alt="Reabilitação oral — antes e depois"
              priority
            />
            <StackedBeforeAfter
              src="/images/hero-smile-2.jpg"
              alt="Facetas dentárias — antes e depois"
            />
          </div>
          <p className="text-muted-foreground mt-6 text-center text-xs italic">
            *Resultados podem variar conforme cada caso.
          </p>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 2 — Depoimentos
// ─────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "Atendimento excepcional, Dra. Juliane é super atenciosa e o resultado das minhas facetas ficou perfeito. Voltei a sorrir com confiança.",
    name: "Maria S.",
  },
  {
    quote:
      "Profissional incrível, planejou meu caso com calma e cuidado. Hoje mastigo e sorrio sem medo. Recomendo de olhos fechados.",
    name: "João P.",
  },
  {
    quote:
      "Confiei a Dra. Juliane com a reabilitação completa do meu sorriso. Tratamento humanizado, sem dor, e o resultado superou minha expectativa.",
    name: "Ana C.",
  },
  {
    quote:
      "Sempre tive vergonha de sorrir. A Dra. Juliane mudou minha vida. Atendimento de outro nível em Goiânia.",
    name: "Patrícia R.",
  },
] as const;

function DepoimentosSection() {
  return (
    <Section id="depoimentos" className="bg-muted/40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Pacientes que voltaram a sorrir com segurança
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            A experiência de quem confiou seu sorriso à Dra. Juliane Florentino.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="border-border bg-background flex flex-col gap-4 rounded-2xl border p-6 md:p-7"
            >
              <StarRow />
              <blockquote className="text-foreground/90 text-base leading-relaxed">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <div className="border-border mt-auto border-t pt-4">
                <p className="font-heading text-foreground text-base font-medium">{t.name}</p>
                <p className="text-muted-foreground mt-0.5 text-xs">Avaliação Google</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          <a
            href="https://share.google/nNeXUPmxMvu0v8a6y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors"
          >
            Ver mais avaliações no Google →
          </a>
          <Button asChild variant="secondary" size="md">
            <a href={wa(WA_MESSAGES.social)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              Agendar minha avaliação
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 3 — Antes e Depois
// ─────────────────────────────────────────────────────────

function GallerySection() {
  return (
    <Section id="antes-depois">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Transformações que devolvem mais do que um sorriso
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Cada caso é planejado de forma individual para unir estética, função e naturalidade.
          </p>
          <p className="text-foreground/80 mt-6 text-base leading-relaxed md:text-lg">
            A reabilitação oral pode transformar a forma como você sorri, mastiga, conversa e se
            enxerga no espelho. Com facetas, implantes, próteses e planejamento personalizado, a
            Dra. Juliane busca resultados naturais, respeitando a harmonia do rosto e a
            necessidade de cada paciente.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <article className="space-y-3">
            <StackedBeforeAfter
              src="/images/case-veneers-1.jpg"
              alt="Caso 1 — facetas dentárias para harmonização do sorriso"
            />
            <p className="text-muted-foreground text-center text-xs">
              Caso 1 · Facetas dentárias
            </p>
          </article>

          <article className="space-y-3">
            <StackedBeforeAfter
              src="/images/case-veneers-2.jpg"
              alt="Caso 2 — facetas em porcelana para clareamento e formato"
            />
            <p className="text-muted-foreground text-center text-xs">
              Caso 2 · Facetas em porcelana
            </p>
          </article>

          <article className="space-y-3">
            <StackedBeforeAfter
              src="/images/case-implant-1.jpg"
              alt="Caso 3 — implante dentário com coroa estética"
            />
            <p className="text-muted-foreground text-center text-xs">
              Caso 3 · Implante dentário
            </p>
          </article>

          <article className="space-y-3">
            <StackedBeforeAfter
              src="/images/hero-transformation-1.jpg"
              alt="Caso 4 — reabilitação oral completa com mudança de autoestima"
            />
            <p className="text-muted-foreground text-center text-xs">
              Caso 4 · Reabilitação completa
            </p>
          </article>
        </div>

        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-xs italic">
          *Resultados podem variar conforme cada caso. Cada tratamento é planejado
          individualmente.
        </p>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="primary" size="lg">
            <a href={wa(WA_MESSAGES.gallery)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Quero transformar meu sorriso
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 4 — Story / Problema
// ─────────────────────────────────────────────────────────

function StorySection() {
  return (
    <Section id="problema" className="bg-muted/60">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Talvez o seu sorriso esteja impedindo você de viver com mais confiança
            </h2>

            <div className="text-foreground/85 mt-8 space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                Muitas pessoas passam anos escondendo o sorriso, evitando fotos ou convivendo com
                dentes ausentes, desgastados, escurecidos ou próteses desconfortáveis.
              </p>
              <p className="text-foreground font-medium">E isso não afeta apenas a estética.</p>
              <ul className="space-y-2">
                <li>Afeta a autoestima.</li>
                <li>Afeta a segurança para conversar.</li>
                <li>Afeta a mastigação.</li>
                <li>Afeta a forma como você se vê.</li>
              </ul>
              <p>
                O problema é que, quanto mais você adia, mais distante parece ficar o sorriso que
                você deseja ter.
              </p>
            </div>

            <blockquote className="border-primary mt-10 border-l-4 pl-6 md:pl-8">
              <p className="font-heading text-foreground text-xl leading-snug font-medium md:text-2xl">
                Mas com um planejamento correto, é possível encontrar o melhor caminho para
                recuperar estética, função e confiança.
              </p>
            </blockquote>

            <div className="mt-10">
              <Button asChild variant="primary" size="lg">
                <a href={wa(WA_MESSAGES.story)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Quero entender meu caso
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-border relative aspect-[4/5] overflow-hidden rounded-2xl border">
              <Image
                src="/images/clinic-office.jpg"
                alt="Consultório da Dra. Juliane Florentino em Goiânia"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 5 — Tratamentos
// ─────────────────────────────────────────────────────────

type Treatment = {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  description: string;
  items?: readonly string[];
};

const TREATMENTS: readonly Treatment[] = [
  {
    Icon: VeneerIcon,
    title: "Facetas dentárias em Goiânia",
    description:
      "Indicadas para quem deseja melhorar cor, formato, tamanho e harmonia dos dentes, com um sorriso mais bonito e natural.",
    items: ["Facetas em resina", "Facetas em porcelana"],
  },
  {
    Icon: ImplantIcon,
    title: "Implantes dentários em Goiânia",
    description:
      "Para quem perdeu um ou mais dentes e deseja recuperar segurança para sorrir, mastigar e viver com mais conforto.",
  },
  {
    Icon: ProsthesisIcon,
    title: "Prótese protocolo e próteses dentárias",
    description:
      "Soluções para quem usa dentadura, perdeu vários dentes ou busca uma reabilitação mais estável, estética e segura.",
  },
  {
    Icon: RehabIcon,
    title: "Reabilitação oral completa",
    description:
      "Planejamento completo para unir estética, função, saúde bucal e autoestima em um único tratamento personalizado.",
  },
];

function TreatmentsSection() {
  return (
    <Section id="tratamentos">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Tratamentos personalizados para transformar seu sorriso com naturalidade
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            A Dra. Juliane atua em diferentes áreas da odontologia estética e reabilitação oral.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {TREATMENTS.map(({ Icon, title, description, items }) => (
            <li
              key={title}
              className="group bg-background border-border hover:border-primary/40 relative flex flex-col gap-4 rounded-2xl border p-6 transition-colors md:p-8"
            >
              <div className="bg-primary/10 text-primary inline-flex size-12 shrink-0 items-center justify-center rounded-xl">
                <Icon className="size-6" />
              </div>
              <h3 className="font-heading text-foreground text-xl font-medium md:text-2xl">
                {title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
              {items ? (
                <ul className="text-foreground/80 mt-1 space-y-1.5 text-sm">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <a href={wa(WA_MESSAGES.treatments)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Falar com a equipe pelo WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 6 — Authority / Sobre a Dra.
// ─────────────────────────────────────────────────────────

const DIFERENCIAIS = [
  "Especialista em prótese dental e reabilitação oral",
  "Atendimento humanizado e acolhedor",
  "Planejamento individualizado",
  "Resultados com naturalidade",
  "Tecnologia moderna",
  "Atendimento premium em Goiânia",
] as const;

function AuthoritySection() {
  return (
    <Section id="sobre" className="bg-muted/40">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-5">
            <div className="border-border relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl border md:max-w-none">
              <Image
                src="/images/dra-juliane-portrait.jpg"
                alt="Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7">
            <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Conheça a especialista que vai guiar a transformação do seu sorriso
            </h2>

            <div className="text-foreground/85 mt-6 space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                A Dra. Juliane Florentino é dentista especialista em prótese dental e reabilitação
                oral, com foco em tratamentos estéticos e funcionais para pacientes que desejam
                sorrir novamente com segurança.
              </p>
              <p>
                Seu atendimento é baseado em escuta, acolhimento, planejamento cuidadoso e
                tecnologia moderna.
              </p>
              <p>
                Cada tratamento é pensado de forma personalizada, respeitando a necessidade, o
                rosto, a história e o desejo de cada paciente.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {DIFERENCIAIS.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span
                    className="bg-primary/10 text-primary mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span className="text-foreground/85 text-sm md:text-base">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button asChild variant="primary" size="lg">
                <a href={wa(WA_MESSAGES.authority)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Quero ser avaliado pela Dra. Juliane
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 7 — Final CTA + Localização
// ─────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <Section id="contato">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Seu novo sorriso começa com uma avaliação
          </h2>

          <div className="text-foreground/85 mt-6 space-y-4 text-base leading-relaxed md:text-lg">
            <p>
              Você não precisa continuar escondendo o sorriso, evitando fotos ou convivendo com
              insegurança.
            </p>
            <p>
              A Dra. Juliane Florentino pode te ajudar a entender qual tratamento faz mais sentido
              para o seu caso, seja com facetas, implantes, próteses ou reabilitação oral
              completa.
            </p>
            <p className="text-foreground font-medium">
              O primeiro passo é simples: agendar uma avaliação.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="primary" size="lg">
              <a href={wa(WA_MESSAGES.finalCta)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Agendar avaliação pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="border-border mx-auto mt-20 max-w-5xl border-t pt-16 md:mt-24 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
              Atendimento em Goiânia para pacientes de todo o Brasil
            </h3>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              A clínica da Dra. Juliane Florentino está localizada em Goiânia e recebe pacientes
              que buscam um atendimento premium em reabilitação oral, facetas, implantes
              dentários e estética dental.
            </p>
          </div>

          <div className="border-border mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border">
            {/* TODO: swap for the clinic's exact address embed once confirmed (Phase 3 deploy-blocker) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244833.55617!2d-49.4!3d-16.6786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef39d4a2cef0d%3A0xa3b3f1e8e83fe6f1!2sGoi%C3%A2nia%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height={420}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clínica da Dra. Juliane Florentino — Goiânia"
            />
          </div>

          <p className="text-muted-foreground mt-4 text-center text-xs italic">
            *Endereço completo será confirmado no contato pelo WhatsApp.
          </p>
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Footer (CFO 196/2019 compliance — name + CRO on every page)
// ─────────────────────────────────────────────────────────

function Footer() {
  return (
    /*
      COMPLIANCE NOTE: CFO Resolution 196/2019 mandates the dentist's full name +
      CRO/UF + number to appear on every public-facing page. "CRO/GO XXXXX" is a
      DEPLOY-BLOCKER placeholder — must be swapped for the real number before
      go-live. The disclaimer "Resultados podem variar conforme cada caso" already
      appears beside the antes/depois blocks (see HeroSection + GallerySection).
    */
    <footer className="bg-foreground text-background w-full">
      <Container>
        <div className="flex flex-col gap-10 py-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-start gap-4">
              <Logo width={150} className="text-background" />
              <p className="text-background/70 max-w-xs text-sm leading-relaxed">
                Reabilitação oral, facetas, implantes e estética dental em Goiânia.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm md:grid-cols-1 md:gap-y-2">
                <li>
                  <a
                    href="#tratamentos"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Tratamentos
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-background/15 flex flex-col gap-3 border-t pt-8 text-xs md:flex-row md:items-center md:justify-between">
            <p className="text-background/70">
              <span className="text-background font-medium">
                Dra. Juliane Florentino — CRO/GO XXXXX
              </span>
              <span className="mx-2 hidden md:inline">·</span>
              <span className="block md:inline">© 2026 — Todos os direitos reservados</span>
            </p>
            <a
              href="#privacidade"
              className="text-background/70 hover:text-background underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────
// Sticky mobile WhatsApp FAB (mobile-only)
// ─────────────────────────────────────────────────────────

function StickyWhatsApp() {
  return (
    <a
      href={wa(WA_MESSAGES.sticky)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="bg-accent-whatsapp fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

// ─────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <HeroSection />
        <DepoimentosSection />
        <GallerySection />
        <StorySection />
        <TreatmentsSection />
        <AuthoritySection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
