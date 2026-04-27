import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/brand";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Landing page — Dra. Juliane Florentino
 *
 * Visual treatment refreshed to match the Denise Goulart dentist landing
 * reference: champagne-on-cream palette, Pinyon Script wordmark, polaroid-
 * style overlapping photos for treatment cards, pill buttons throughout.
 *
 * Public WhatsApp number is a deploy-blocker placeholder
 * (NEXT_PUBLIC_WHATSAPP_PHONE swap happens in Phase 3). CRO/GO XXXXX in the
 * footer is also a deploy-blocker (CFO 196/2019 mandates the registered CRO
 * number visible on every public-facing page).
 *
 * 7 vertical sections + sticky header + footer. Server component (no client
 * state). Smooth scroll anchors are wired via `scroll-behavior: smooth` in
 * globals.css.
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

function SparkleIcon({ className }: { className?: string }) {
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
      <path d="M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4z" />
      <path d="M19 15l.7 1.8L21.5 18l-1.8.7L19 21l-.7-2.3L16.5 18l1.8-.5z" />
    </svg>
  );
}

function DropletIcon({ className }: { className?: string }) {
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
      <path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11Z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Reusable bits
// ─────────────────────────────────────────────────────────

function StarRow() {
  return (
    <div className="text-primary-strong flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-4" />
      ))}
    </div>
  );
}

function TaglineChip({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground inline-flex items-center gap-3 text-xs font-medium tracking-[0.22em] uppercase">
      <span className="bg-primary/50 inline-block h-px w-8" aria-hidden="true" />
      <span>{children}</span>
      <span className="bg-primary/50 inline-block h-px w-8" aria-hidden="true" />
    </p>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="bg-primary-strong mt-2 inline-block size-2 shrink-0 rounded-full"
          />
          <span className="text-foreground/90 text-sm leading-relaxed md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Client images come pre-composed as a single before/after frame (top=before,
 * bottom=after). We render them as a single Image and label below.
 */
function StackedBeforeAfter({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="border-border bg-muted relative aspect-[4/5] overflow-hidden rounded-3xl border shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 33vw, 380px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="text-muted-foreground mt-3 text-center text-xs font-medium tracking-wider uppercase">
        Antes <span className="text-border mx-1">/</span> Depois
      </figcaption>
    </figure>
  );
}

/**
 * Polaroid-style stack of two images that overlap. Used by the treatment
 * cards. `mirrored` flips which image is on top (used to alternate the
 * left/right composition between rows).
 */
function PolaroidStack({
  primary,
  secondary,
  mirrored = false,
}: {
  primary: { src: string; alt: string };
  secondary: { src: string; alt: string };
  mirrored?: boolean;
}) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <div
        className={
          mirrored
            ? "border-border bg-muted absolute top-0 left-0 h-[78%] w-[78%] overflow-hidden rounded-3xl border shadow-md"
            : "border-border bg-muted absolute top-0 right-0 h-[78%] w-[78%] overflow-hidden rounded-3xl border shadow-md"
        }
      >
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          sizes="(max-width: 768px) 70vw, 360px"
          className="object-cover"
        />
      </div>
      <div
        className={
          mirrored
            ? "border-border bg-muted absolute right-0 bottom-0 h-[58%] w-[58%] overflow-hidden rounded-3xl border shadow-lg"
            : "border-border bg-muted absolute bottom-0 left-0 h-[58%] w-[58%] overflow-hidden rounded-3xl border shadow-lg"
        }
      >
        <Image
          src={secondary.src}
          alt={secondary.alt}
          fill
          sizes="(max-width: 768px) 50vw, 240px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Header (sticky, blends with hero band)
// ─────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="bg-background-soft/95 sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background-soft/85">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="#hero" aria-label="Início — Dra. Juliane Florentino" className="shrink-0">
            <Logo size="md" className="text-primary-strong md:hidden" />
            <Logo size="lg" className="text-primary-strong hidden md:inline-flex" />
          </Link>

          <Button asChild variant="primary" size="sm" className="md:h-12 md:px-6 md:text-base">
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
// Section 1 — Hero (2-col with portrait + service strip)
// ─────────────────────────────────────────────────────────

const HERO_SERVICES = [
  { Icon: VeneerIcon, label: "Facetas em Resina e Porcelana" },
  { Icon: ImplantIcon, label: "Implantes Dentários" },
  { Icon: ProsthesisIcon, label: "Prótese Protocolo" },
  { Icon: RehabIcon, label: "Reabilitação Oral Completa" },
  { Icon: SparkleIcon, label: "Clareamento" },
  { Icon: DropletIcon, label: "Limpeza e Manutenção" },
] as const;

function HeroSection() {
  return (
    <section id="hero" className="bg-background-soft relative">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-24 md:grid-cols-2 md:gap-12 md:pt-14 md:pb-32 lg:gap-16 lg:pt-20 lg:pb-40">
          {/* Text column */}
          <div className="space-y-6 md:order-1 md:space-y-7">
            <TaglineChip>Especialista em prótese e reabilitação oral</TaglineChip>

            <h1 className="font-heading text-foreground text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl lg:text-6xl">
              Facetas, Implantes e Reabilitação Oral em Goiânia para você voltar a sorrir com
              confiança
            </h1>

            <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
              A Dra. Juliane Florentino é especialista em prótese dental e reabilitação oral,
              oferecendo tratamentos personalizados para transformar seu sorriso com naturalidade,
              estética e segurança.
            </p>

            <p className="text-foreground/80 max-w-xl text-sm leading-relaxed italic md:text-base">
              Se você sente vergonha de sorrir, evita fotos, perdeu dentes ou deseja melhorar a
              estética do seu sorriso, existe um caminho planejado para recuperar sua autoestima.
            </p>

            <div className="pt-2">
              <Button asChild variant="primary" size="lg">
                <a href={wa(WA_MESSAGES.hero)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Agendar avaliação pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait column */}
          <div className="relative flex items-center justify-center md:order-2">
            {/* Decorative blob behind */}
            <div
              aria-hidden="true"
              className="bg-primary/15 absolute inset-0 -z-0 mx-auto h-full w-[88%] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] blur-[2px]"
            />
            {/* Small accent circle */}
            <div
              aria-hidden="true"
              className="bg-primary/20 absolute top-6 right-2 -z-0 size-12 rounded-full md:size-16"
            />

            <div className="border-border relative z-10 aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border shadow-lg">
              <Image
                src="/images/dra-juliane-portrait.jpg"
                alt="Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Service strip — floats over the hero/content boundary */}
      <Container>
        <div className="bg-background border-border relative z-10 -mt-16 rounded-3xl border p-6 shadow-lg shadow-foreground/5 md:-mt-20 md:p-10">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {HERO_SERVICES.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="bg-primary/15 text-primary-strong inline-flex size-10 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <span className="text-foreground text-sm font-medium md:text-base">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
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
    <Section id="depoimentos" className="bg-background pt-24 md:pt-32 lg:pt-40">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <TaglineChip>Depoimentos</TaglineChip>
          <h2 className="font-heading text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Pacientes que voltaram a sorrir com segurança
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A experiência de quem confiou seu sorriso à Dra. Juliane Florentino.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="border-border bg-background-soft flex flex-col gap-4 rounded-3xl border p-6 shadow-sm shadow-foreground/5 md:p-7"
            >
              <StarRow />
              <blockquote className="text-foreground/90 text-base leading-relaxed">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <div className="border-border/70 mt-auto border-t pt-4">
                <p className="font-heading text-foreground text-base font-medium">{t.name}</p>
                <p className="text-muted-foreground mt-0.5 text-xs">Avaliação Google</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <a
            href="https://share.google/nNeXUPmxMvu0v8a6y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary-strong text-sm underline underline-offset-4 transition-colors"
          >
            Ver mais avaliações no Google →
          </a>
          <Button asChild variant="primary" size="md">
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
    <Section id="antes-depois" className="bg-background-soft">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <TaglineChip>Antes &amp; Depois</TaglineChip>
          <h2 className="font-heading text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Transformações que devolvem mais do que um sorriso
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Cada caso é planejado de forma individual para unir estética, função e naturalidade.
          </p>
        </div>

        <p className="text-foreground/85 mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed md:text-lg">
          A reabilitação oral pode transformar a forma como você sorri, mastiga, conversa e se
          enxerga no espelho. Com facetas, implantes, próteses e planejamento personalizado, a Dra.
          Juliane busca resultados naturais, respeitando a harmonia do rosto e a necessidade de
          cada paciente.
        </p>

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
    <Section id="problema" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <TaglineChip>Você se reconhece?</TaglineChip>
            <h2 className="font-heading text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Talvez o seu sorriso esteja impedindo você de viver com mais confiança
            </h2>

            <div className="text-foreground/85 mt-8 space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                Muitas pessoas passam anos escondendo o sorriso, evitando fotos ou convivendo com
                dentes ausentes, desgastados, escurecidos ou próteses desconfortáveis.
              </p>
              <p className="text-foreground font-medium">E isso não afeta apenas a estética.</p>
              <BulletList
                items={[
                  "Afeta a autoestima.",
                  "Afeta a segurança para conversar.",
                  "Afeta a mastigação.",
                  "Afeta a forma como você se vê.",
                ]}
              />
              <p>
                O problema é que, quanto mais você adia, mais distante parece ficar o sorriso que
                você deseja ter.
              </p>
            </div>

            <blockquote className="border-primary-strong mt-10 border-l-4 pl-6 md:pl-8">
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
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div
                aria-hidden="true"
                className="bg-primary/15 absolute inset-0 -z-0 rounded-[40%_60%_55%_45%/55%_45%_60%_40%]"
              />
              <div className="border-border relative z-10 h-full w-full overflow-hidden rounded-3xl border shadow-md">
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
        </div>
      </Container>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 5 — Tratamentos (alternating polaroid rows)
// ─────────────────────────────────────────────────────────

type TreatmentRow = {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  description: string;
  bullets: readonly string[];
  primary: { src: string; alt: string };
  secondary: { src: string; alt: string };
};

const TREATMENTS: readonly TreatmentRow[] = [
  {
    Icon: VeneerIcon,
    title: "Facetas: o sorriso perfeito ao seu alcance",
    description:
      "Indicadas para quem deseja melhorar cor, formato, tamanho e harmonia dos dentes, com um sorriso mais bonito e natural.",
    bullets: [
      "Facetas em resina (rápidas e mais acessíveis)",
      "Facetas em porcelana (resultado premium)",
      "Planejamento digital prévio do sorriso",
    ],
    primary: {
      src: "/images/case-veneers-1.jpg",
      alt: "Caso de facetas dentárias",
    },
    secondary: {
      src: "/images/case-veneers-2.jpg",
      alt: "Detalhe de facetas em porcelana",
    },
  },
  {
    Icon: ImplantIcon,
    title: "Implantes: voltar a mastigar e sorrir sem medo",
    description:
      "Para quem perdeu um ou mais dentes e deseja recuperar segurança para sorrir, mastigar e viver com mais conforto.",
    bullets: [
      "Implantes unitários e múltiplos",
      "Coroas com estética natural",
      "Avaliação prévia de saúde óssea",
    ],
    primary: {
      src: "/images/case-implant-1.jpg",
      alt: "Caso de implante dentário",
    },
    secondary: {
      src: "/images/clinic-chair.jpg",
      alt: "Cadeira do consultório",
    },
  },
  {
    Icon: ProsthesisIcon,
    title: "Prótese protocolo e próteses dentárias",
    description:
      "Soluções para quem usa dentadura, perdeu vários dentes ou busca uma reabilitação mais estável, estética e segura.",
    bullets: [
      "Prótese protocolo sobre implantes",
      "Próteses fixas e removíveis",
      "Adaptação personalizada e acompanhamento",
    ],
    primary: {
      src: "/images/smile-after-1.jpg",
      alt: "Sorriso reabilitado com prótese",
    },
    secondary: {
      src: "/images/hero-smile-1.jpg",
      alt: "Detalhe do sorriso final",
    },
  },
  {
    Icon: RehabIcon,
    title: "Reabilitação oral completa",
    description:
      "Planejamento completo para unir estética, função, saúde bucal e autoestima em um único tratamento personalizado.",
    bullets: [
      "Tratamento integrado em etapas",
      "Foco em harmonia facial e mastigação",
      "Acompanhamento de longo prazo",
    ],
    primary: {
      src: "/images/hero-transformation-1.jpg",
      alt: "Transformação completa do sorriso",
    },
    secondary: {
      src: "/images/smile-after-2.jpg",
      alt: "Resultado final da reabilitação",
    },
  },
];

function TreatmentsSection() {
  return (
    <Section id="tratamentos" className="bg-background-soft">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <TaglineChip>Tratamentos personalizados</TaglineChip>
          <h2 className="font-heading text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Conheça os tratamentos personalizados para devolver seu sorriso
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A Dra. Juliane atua em diferentes áreas da odontologia estética e reabilitação oral.
          </p>
        </div>

        <ul className="mt-16 space-y-20 md:space-y-28">
          {TREATMENTS.map(({ Icon, title, description, bullets, primary, secondary }, index) => {
            const isMirrored = index % 2 === 1;
            return (
              <li key={title}>
                <article
                  className={
                    isMirrored
                      ? "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14"
                      : "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14"
                  }
                >
                  <div className={isMirrored ? "md:order-2" : "md:order-1"}>
                    <div className="bg-primary text-primary-foreground inline-flex items-center gap-3 rounded-2xl px-5 py-3">
                      <span className="bg-primary-foreground/20 flex size-8 items-center justify-center rounded-lg">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-heading text-base leading-tight font-medium md:text-lg">
                        {title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mt-6 text-base leading-relaxed md:text-lg">
                      {description}
                    </p>

                    <div className="mt-6">
                      <BulletList items={bullets} />
                    </div>
                  </div>

                  <div className={isMirrored ? "md:order-1" : "md:order-2"}>
                    <PolaroidStack
                      primary={primary}
                      secondary={secondary}
                      mirrored={isMirrored}
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 flex justify-center">
          <Button asChild variant="primary" size="lg">
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
    <Section id="sobre" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
              <div
                aria-hidden="true"
                className="bg-primary/15 absolute inset-0 -z-0 rounded-[40%_60%_55%_45%/55%_45%_60%_40%]"
              />
              <div
                aria-hidden="true"
                className="bg-primary/20 absolute -bottom-4 -left-4 -z-0 size-20 rounded-full md:size-24"
              />
              <div className="border-border relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] border shadow-md">
                <Image
                  src="/images/dra-juliane-portrait-alt.jpg"
                  alt="Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7">
            <TaglineChip>Sobre a Dra. Juliane</TaglineChip>
            <h2 className="font-heading text-foreground mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
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
                    className="bg-primary/15 text-primary-strong mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full"
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
    <Section id="contato" className="bg-background-soft">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <TaglineChip>Comece hoje</TaglineChip>
          <h2 className="font-heading text-foreground text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Seu novo sorriso começa com uma avaliação
          </h2>
        </div>

        <div className="text-foreground/85 mx-auto mt-6 max-w-3xl space-y-4 text-center text-base leading-relaxed md:text-lg">
          <p>
            Você não precisa continuar escondendo o sorriso, evitando fotos ou convivendo com
            insegurança.
          </p>
          <p>
            A Dra. Juliane Florentino pode te ajudar a entender qual tratamento faz mais sentido
            para o seu caso, seja com facetas, implantes, próteses ou reabilitação oral completa.
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

        <div className="border-border/60 mx-auto mt-20 max-w-5xl border-t pt-16 md:mt-24 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-heading text-foreground text-2xl font-medium tracking-tight md:text-3xl">
              Atendimento em Goiânia para pacientes de todo o Brasil
            </h3>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              A clínica da Dra. Juliane Florentino está localizada em Goiânia e recebe pacientes
              que buscam um atendimento premium em reabilitação oral, facetas, implantes
              dentários e estética dental.
            </p>
          </div>

          <div className="border-border bg-background mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border shadow-sm">
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
  /*
    COMPLIANCE NOTE: CFO Resolution 196/2019 mandates the dentist's full name +
    CRO/UF + number to appear on every public-facing page. "CRO/GO XXXXX" is a
    DEPLOY-BLOCKER placeholder — must be swapped for the real number before
    go-live. The disclaimer "Resultados podem variar conforme cada caso" already
    appears beside the antes/depois blocks (see HeroSection + GallerySection).
  */
  return (
    <footer className="bg-foreground text-background w-full rounded-t-3xl">
      <Container>
        <div className="flex flex-col gap-10 py-14 md:py-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-start gap-4">
              <Logo size="xl" className="text-primary" />
              <p className="text-background/70 max-w-xs text-sm leading-relaxed">
                Reabilitação oral, facetas, implantes e estética dental em Goiânia.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm md:grid-cols-1 md:gap-y-2">
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
// Sticky WhatsApp FAB (visible on all viewports)
// ─────────────────────────────────────────────────────────

function StickyWhatsApp() {
  return (
    <a
      href={wa(WA_MESSAGES.sticky)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="bg-accent-whatsapp fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:right-6 md:bottom-6 md:size-16"
    >
      <WhatsAppIcon className="size-7 md:size-8" />
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
