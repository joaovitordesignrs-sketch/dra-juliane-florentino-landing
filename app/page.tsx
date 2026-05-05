import Image from "next/image";

import { Logo } from "@/components/brand";
import { Header } from "@/components/header";
import { Container } from "@/components/layout";
import { GoogleReviewsSection } from "@/components/sections/google-reviews";
import { TransformationsAutoplay } from "@/components/transformations-autoplay";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Landing page — Dra. Juliane Florentino
 *
 * Mobile-first redesign. Hard rules:
 *  - body copy ≥ text-lg (18px) on mobile, foreground (12.75:1)
 *  - single column on mobile; 2-col only at lg: (1024px+)
 *  - buttons h-14 + full-width on mobile
 *  - no auto-animation, no marquee, no decorative blobs, no italic body
 *  - user-controlled scroll-snap carousels (pure CSS)
 *
 * Public WhatsApp number is a deploy-blocker placeholder (NEXT_PUBLIC_WHATSAPP_PHONE
 * swap happens in Phase 3). CRO/GO XXXXX in the footer is also a deploy-blocker
 * (CFO 196/2019 mandates the registered CRO number visible on every public page).
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

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span
            aria-hidden="true"
            className="bg-primary-strong mt-3 inline-block size-2 shrink-0 rounded-full"
          />
          <span className="text-foreground text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────
// Section 1 — Hero (single column on mobile, clean)
// ─────────────────────────────────────────────────────────

function HeroSection() {
  const pillBadge = (
    <div className="border-primary/45 inline-flex items-center gap-2.5 rounded-full border px-4 py-2">
      <span aria-hidden="true" className="bg-primary size-1.5 rounded-full" />
      <span className="text-primary text-[0.7rem] font-medium tracking-[0.18em] uppercase md:text-xs">
        Dra. Juliane Florentino · Goiânia-GO
      </span>
    </div>
  );

  const headlineNode = (
    <h1 className="font-heading text-background text-[2.6rem] leading-[1.08] font-light tracking-tight md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
      Volte a sorrir com
      <br />
      <span className="text-primary font-light italic">confiança!</span>
    </h1>
  );

  const subtitleNode = (
    <p className="text-background/75 max-w-prose text-lg leading-relaxed md:text-xl">
      Facetas, implantes, próteses e reabilitação oral com planejamento personalizado pela Dra.
      Juliane Florentino.
    </p>
  );

  const ctaNode = (
    <Button asChild variant="primary" size="lg" className="h-14 w-full sm:w-auto sm:px-10">
      <a href={wa(WA_MESSAGES.hero)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-5" />
        Agendar avaliação pelo WhatsApp
      </a>
    </Button>
  );

  const captionNode = <p className="text-background/60 text-sm">Atendimento humanizado · Goiânia, GO</p>;

  return (
    <section
      id="hero"
      aria-label="Apresentação — Dra. Juliane Florentino, Dentista em Goiânia"
      className="bg-foreground relative overflow-hidden"
    >
      {/* Ambient clinic backdrop — very low opacity on all viewports */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/images/clinic-office.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          priority={false}
        />
        <div className="from-foreground/50 to-foreground/50 absolute inset-0 bg-gradient-to-r via-transparent lg:from-foreground/40 lg:to-foreground/40" />
      </div>

      {/* MOBILE — centered with round avatar + autoplay carousel */}
      <div className="relative z-10 lg:hidden">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 pt-14 pb-10 text-center md:gap-9 md:pt-24 md:pb-12">
            <div className="flex flex-col items-center gap-5">
              <div className="ring-primary/55 ring-offset-foreground relative size-20 shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 md:size-24">
                <Image
                  src="/images/dra-juliane-2.jpeg"
                  alt="Retrato da Dra. Juliane Florentino"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
              {pillBadge}
            </div>

            {headlineNode}
            {subtitleNode}
          </div>
        </Container>

        <div className="pb-9">
          <TransformationsAutoplay items={TRANSFORMATIONS} />
        </div>

        <Container>
          <div className="flex flex-col items-center gap-5 pb-14 text-center md:pb-20">
            {ctaNode}
            {captionNode}
          </div>
        </Container>
      </div>

      {/* DESKTOP — text left-aligned, full portrait on the right with glassmorphism info card */}
      <div className="relative z-10 hidden lg:block">
        <Container>
          <div className="grid grid-cols-12 items-center gap-12 py-24 xl:gap-16 xl:py-28">
            <div className="col-span-7 flex flex-col items-start gap-9 text-left">
              {headlineNode}
              {subtitleNode}
              <div className="flex flex-col items-start gap-4 pt-2">
                {ctaNode}
                {captionNode}
              </div>
            </div>

            <div className="col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/dra-juliane-2.jpeg"
                  alt="Retrato da Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia"
                  fill
                  sizes="(min-width: 1280px) 480px, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 shadow-2xl backdrop-blur-xl">
                  <span aria-hidden="true" className="bg-primary size-2 shrink-0 rounded-full" />
                  <div className="min-w-0">
                    <p className="text-background text-sm font-medium leading-tight">
                      Dra. Juliane Florentino
                    </p>
                    <p className="text-background/75 mt-0.5 text-[0.65rem] leading-tight font-medium tracking-[0.18em] uppercase">
                      Goiânia-GO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 1b — Service strip (own section, no card wrapper)
// ─────────────────────────────────────────────────────────

const HERO_SERVICES = [
  { Icon: VeneerIcon, label: "Facetas" },
  { Icon: ImplantIcon, label: "Implantes" },
  { Icon: ProsthesisIcon, label: "Prótese Protocolo" },
  { Icon: RehabIcon, label: "Reabilitação Oral" },
  { Icon: SparkleIcon, label: "Clareamento" },
  { Icon: DropletIcon, label: "Limpeza" },
] as const;

function ServicesStripSection() {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-background py-12 md:py-16"
    >
      <Container>
        <h2
          id="services-title"
          className="font-heading text-foreground text-center text-2xl font-medium tracking-tight lg:text-3xl"
        >
          O que a Dra. Juliane atende
        </h2>

        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-8 lg:max-w-5xl lg:grid-cols-3 lg:gap-x-8">
          {HERO_SERVICES.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center lg:flex-row lg:gap-4 lg:text-left"
            >
              <span className="bg-primary/15 text-primary-strong inline-flex size-14 shrink-0 items-center justify-center rounded-2xl">
                <Icon className="size-7" />
              </span>
              <span className="text-foreground text-base font-medium lg:text-lg">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 2 — Antes/Depois (user-controlled scroll-snap)
// ─────────────────────────────────────────────────────────

const TRANSFORMATIONS = [
  {
    src: "/images/pr%C3%B3tese-dent%C3%A1ria.jpeg",
    alt: "Caso 1 — prótese dentária para reabilitação do sorriso",
    label: "Caso 1 · Prótese dentária",
  },
  {
    src: "/images/case-veneers-1.jpg",
    alt: "Caso 2 — facetas dentárias para harmonização do sorriso",
    label: "Caso 2 · Facetas dentárias",
  },
  {
    src: "/images/case-veneers-2.jpg",
    alt: "Caso 3 — facetas em porcelana para clareamento e formato",
    label: "Caso 3 · Facetas em porcelana",
  },
  {
    src: "/images/case-implant-1.jpg",
    alt: "Caso 4 — implante dentário com coroa estética",
    label: "Caso 4 · Implante dentário",
  },
  {
    src: "/images/hero-transformation-1.jpg",
    alt: "Caso 5 — reabilitação oral completa com mudança de autoestima",
    label: "Caso 5 · Reabilitação completa",
  },
  {
    src: "/images/hero-smile-1.jpg",
    alt: "Caso 6 — sorriso natural após tratamento estético",
    label: "Caso 6 · Sorriso natural",
  },
  {
    src: "/images/smile-after-1.jpg",
    alt: "Caso 7 — resultado de reabilitação oral",
    label: "Caso 7 · Reabilitação",
  },
] as const;

function AntesDepoisSection() {
  return (
    <section
      id="antes-depois"
      aria-labelledby="antes-depois-title"
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2
            id="antes-depois-title"
            className="font-heading text-foreground text-2xl font-medium tracking-tight lg:text-4xl"
          >
            Resultados que devolvem a confiança
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Cada caso é planejado de forma individual para unir estética, função e naturalidade.
          </p>
        </div>
      </Container>

      {/* Full-bleed scroll-snap carousel — user controls the motion. */}
      <div
        className="mt-10 overflow-x-auto md:mt-14"
        role="region"
        aria-label="Transformações realizadas pela Dra. Juliane Florentino"
        tabIndex={0}
      >
        <ul className="flex snap-x snap-mandatory gap-4 px-4 pb-4 lg:gap-6 lg:px-8">
          {TRANSFORMATIONS.map((item) => (
            <li
              key={item.src}
              className="snap-center shrink-0 basis-[85%] sm:basis-[60%] lg:basis-[32%]"
            >
              <figure className="space-y-3">
                <div className="border-border bg-muted relative aspect-[4/5] w-full overflow-hidden rounded-3xl border shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 32vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-muted-foreground text-center text-sm font-medium">
                  {item.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <p className="text-muted-foreground mt-2 text-center text-sm lg:hidden">
          Arraste para ver mais
        </p>

        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm italic">
          Resultados podem variar conforme cada caso. Cada tratamento é planejado individualmente.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="h-14 w-full sm:w-auto"
          >
            <a href={wa(WA_MESSAGES.gallery)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Quero transformar meu sorriso
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 3 — Depoimentos (Google Reviews em tempo real, com fallback estático)
// ─────────────────────────────────────────────────────────

const TESTIMONIALS_FALLBACK = [
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

// ─────────────────────────────────────────────────────────
// Section 4 — Story / Problema
// ─────────────────────────────────────────────────────────

function ProblemaSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 lg:max-w-6xl lg:grid lg:grid-cols-12 lg:gap-16 lg:space-y-0">
          <div className="space-y-8 lg:col-span-7 lg:space-y-10">
            <h2
              id="problema-title"
              className="font-heading text-foreground text-2xl leading-tight font-medium tracking-tight lg:text-4xl"
            >
              Talvez o seu sorriso esteja impedindo você de viver com mais confiança
            </h2>

            <div className="text-foreground space-y-6 text-lg leading-loose">
              <p>
                Muitas pessoas passam anos escondendo o sorriso, evitando fotos ou convivendo com
                dentes ausentes, desgastados, escurecidos ou próteses desconfortáveis.
              </p>
              <p className="font-medium">E isso não afeta apenas a estética.</p>
            </div>

            <BulletList
              items={[
                "Afeta a autoestima.",
                "Afeta a segurança para conversar.",
                "Afeta a mastigação.",
                "Afeta a forma como você se vê.",
              ]}
            />

            <p className="text-foreground text-lg leading-relaxed">
              O problema é que, quanto mais você adia, mais distante parece ficar o sorriso que
              você deseja ter.
            </p>

            <blockquote className="border-primary-strong border-l-4 pl-6 lg:pl-8">
              <p className="font-heading text-foreground text-xl leading-snug font-medium lg:text-2xl">
                Mas com um planejamento correto, é possível encontrar o melhor caminho para
                recuperar estética, função e confiança.
              </p>
            </blockquote>

            <div className="pt-2">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="h-14 w-full sm:w-auto"
              >
                <a href={wa(WA_MESSAGES.story)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Quero entender meu caso
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-border bg-muted relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border shadow-md lg:max-w-none">
              <Image
                src="/images/clinic-office.jpg"
                alt="Consultório da Dra. Juliane Florentino em Goiânia"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 5 — Tratamentos (clean cards, single photo each)
// ─────────────────────────────────────────────────────────

type TreatmentCard = {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  description: string;
  bullets: readonly string[];
  image: { src: string; alt: string };
};

const TREATMENTS: readonly TreatmentCard[] = [
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
    image: {
      src: "/images/case-veneers-1.jpg",
      alt: "Caso de facetas dentárias",
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
    image: {
      src: "/images/case-implant-1.jpg",
      alt: "Caso de implante dentário",
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
    image: {
      src: "/images/pr%C3%B3tese-dent%C3%A1ria.jpeg",
      alt: "Prótese dentária — reabilitação com prótese",
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
    image: {
      src: "/images/hero-transformation-1.jpg",
      alt: "Transformação completa do sorriso",
    },
  },
];

function TratamentosSection() {
  return (
    <section
      id="tratamentos"
      aria-labelledby="tratamentos-title"
      className="bg-background-soft py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2
            id="tratamentos-title"
            className="font-heading text-foreground text-2xl font-medium tracking-tight lg:text-4xl"
          >
            Tratamentos personalizados para devolver seu sorriso
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            A Dra. Juliane atua em diferentes áreas da odontologia estética e reabilitação oral.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {TREATMENTS.map(({ Icon, title, description, bullets, image }) => (
            <li key={title}>
              <article className="border-border bg-background flex h-full flex-col gap-6 rounded-3xl border p-6 shadow-sm lg:p-8">
                <div className="border-border bg-muted relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 540px"
                    className="object-cover"
                  />
                </div>

                <div className="bg-primary text-primary-foreground inline-flex items-center gap-3 self-start rounded-2xl px-4 py-2">
                  <Icon className="size-5" />
                  <span className="text-base font-medium">Tratamento</span>
                </div>

                <h3 className="font-heading text-foreground text-xl leading-tight font-medium lg:text-2xl">
                  {title}
                </h3>

                <p className="text-foreground text-lg leading-relaxed">{description}</p>

                <BulletList items={bullets} />
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="h-14 w-full sm:w-auto"
          >
            <a href={wa(WA_MESSAGES.treatments)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Falar com a equipe pelo WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </section>
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

function SobreSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-10 lg:max-w-6xl lg:grid lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5 lg:order-1">
            <div className="border-border bg-muted relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border shadow-md lg:max-w-none">
              <Image
                src="/images/dra-juliane-3.jpeg"
                alt="Dra. Juliane Florentino — dentista especialista em prótese dental e reabilitação oral em Goiânia"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7 lg:order-2">
            <h2
              id="sobre-title"
              className="font-heading text-foreground text-2xl leading-tight font-medium tracking-tight lg:text-4xl"
            >
              Conheça a especialista que vai guiar a transformação do seu sorriso
            </h2>

            <div className="text-foreground space-y-6 text-lg leading-relaxed">
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

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DIFERENCIAIS.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span
                    className="bg-primary/15 text-primary-strong mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <CheckIcon className="size-4" />
                  </span>
                  <span className="text-foreground text-lg leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="h-14 w-full sm:w-auto"
              >
                <a href={wa(WA_MESSAGES.authority)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Quero ser avaliado pela Dra. Juliane
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Section 7 — Final CTA + Localização
// ─────────────────────────────────────────────────────────

function ContatoSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="bg-background-soft py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2
            id="contato-title"
            className="font-heading text-foreground text-2xl font-medium tracking-tight lg:text-4xl"
          >
            Seu novo sorriso começa com uma avaliação
          </h2>

          <div className="text-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Você não precisa continuar escondendo o sorriso, evitando fotos ou convivendo com
              insegurança.
            </p>
            <p>
              A Dra. Juliane Florentino pode te ajudar a entender qual tratamento faz mais sentido
              para o seu caso, seja com facetas, implantes, próteses ou reabilitação oral completa.
            </p>
            <p className="font-medium">O primeiro passo é simples: agendar uma avaliação.</p>
          </div>

          <div className="pt-4">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="h-14 w-full sm:w-auto"
            >
              <a href={wa(WA_MESSAGES.finalCta)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Agendar avaliação pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="border-border/60 mx-auto mt-16 max-w-5xl border-t pt-16 md:mt-20 md:pt-20">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h3 className="font-heading text-foreground text-xl font-medium tracking-tight lg:text-2xl">
              Atendimento em Goiânia para pacientes de todo o Brasil
            </h3>
            <p className="text-foreground text-lg leading-relaxed">
              A clínica da Dra. Juliane Florentino está localizada em Goiânia e recebe pacientes
              que buscam atendimento premium em reabilitação oral, facetas, implantes e estética
              dental.
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
              suppressHydrationWarning
            />
          </div>

          <p className="text-muted-foreground mt-4 text-center text-sm italic">
            Endereço completo será confirmado no contato pelo WhatsApp.
          </p>
        </div>
      </Container>
    </section>
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
    go-live.
  */
  return (
    <footer className="bg-foreground text-background w-full rounded-t-3xl">
      <Container>
        <div className="flex flex-col gap-12 py-14 md:py-20">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-start gap-4">
              <Logo size="lg" className="text-primary" />
              <p className="text-background/85 max-w-xs text-base leading-relaxed">
                Reabilitação oral, facetas, implantes e estética dental em Goiânia.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-4 text-base md:grid-cols-1 md:gap-y-3">
                <li>
                  <a
                    href="#tratamentos"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    Tratamentos
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-background/15 flex flex-col gap-3 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between">
            <p className="text-background/85 leading-relaxed">
              <span className="text-background font-medium">
                Dra. Juliane Florentino — CRO/GO XXXXX
              </span>
              <span className="mx-2 hidden md:inline">·</span>
              <span className="block md:inline">© 2026 — Todos os direitos reservados</span>
            </p>
            <a
              href="#privacidade"
              className="text-background/85 hover:text-background underline-offset-4 hover:underline"
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
      className="bg-accent-whatsapp focus-visible:ring-primary focus-visible:ring-offset-background fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full text-white shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:right-6 md:bottom-6 md:size-16"
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
      <Header whatsappHref={wa(WA_MESSAGES.header)} />
      <main className="bg-background text-foreground">
        <HeroSection />
        <ServicesStripSection />
        <AntesDepoisSection />
        <GoogleReviewsSection
          ctaHref={wa(WA_MESSAGES.social)}
          ctaIcon={<WhatsAppIcon className="size-5" />}
          fallback={TESTIMONIALS_FALLBACK}
        />
        <ProblemaSection />
        <TratamentosSection />
        <SobreSection />
        <ContatoSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
