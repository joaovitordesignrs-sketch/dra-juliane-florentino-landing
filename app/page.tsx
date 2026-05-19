import Image from "next/image";

import { Logo } from "@/components/brand";
import { Header } from "@/components/header";
import { Container } from "@/components/layout";
import { GoogleReviewsSection } from "@/components/sections/google-reviews";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_PHONE = "5562998634545";

const wa = (message: string) => buildWhatsAppLink({ phone: WHATSAPP_PHONE, message });

const WA_MESSAGES = {
  header: "Olá Dra. Juliane! Vim pelo site e gostaria de agendar uma avaliação.",
  heroPrimary: "Olá Dra. Juliane! Vim pelo site e gostaria de agendar minha avaliação.",
  heroSecondary: "Olá Dra. Juliane! Vim pelo site e gostaria de tirar algumas dúvidas.",
  social:
    "Olá! Li os depoimentos no site e quero agendar minha avaliação com a Dra. Juliane.",
  gallery:
    "Olá Dra. Juliane! Vi os antes e depois no site e quero conhecer um caminho para o meu sorriso.",
  treatments:
    "Olá! Vim pelo site e gostaria de falar com a equipe sobre tratamentos.",
  authority:
    "Olá Dra. Juliane! Vim pelo site e gostaria de ser avaliado por você.",
  finalPrimary:
    "Olá Dra. Juliane! Vim pelo site e quero agendar minha avaliação.",
  finalSecondary:
    "Olá Dra. Juliane! Vim pelo site, pode me atender pelo WhatsApp?",
  sticky: "Olá Dra. Juliane! Vim pelo site.",
};

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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

function GemIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3h12l4 6-10 12L2 9Z" />
      <path d="M11 3 8 9l4 12 4-12-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function ChipIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
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

const HERO_HIGHLIGHTS = [
  { Icon: HeartIcon, label: "Atendimento humanizado" },
  { Icon: ChipIcon, label: "Planejamento digital do sorriso" },
  { Icon: SparkleIcon, label: "Estética natural" },
  { Icon: GemIcon, label: "Tecnologia e conforto" },
] as const;

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
    <h1 className="font-heading text-background text-[2.4rem] leading-[1.1] font-light tracking-tight md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
      Transformando sorrisos
      <br />
      com <span className="text-primary font-light italic">naturalidade</span>,{" "}
      <span className="text-primary font-light italic">sofisticação</span> e{" "}
      <span className="text-primary font-light italic">excelência</span>.
    </h1>
  );

  const subtitleNode = (
    <p className="text-background/75 max-w-prose text-lg leading-relaxed md:text-xl">
      Especialista em Prótese Dentária e Reabilitação Oral há 25 anos, oferecendo tratamentos
      personalizados em odontologia estética e implantes em Goiânia.
    </p>
  );

  const ctaNode = (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
      <Button asChild variant="primary" size="lg" className="h-14 w-full sm:w-auto sm:px-8">
        <a href={wa(WA_MESSAGES.heroPrimary)} target="_blank" rel="noopener noreferrer">
          <CalendarIcon className="size-5" />
          Agendar avaliação
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="lg"
        className="border-background/30 text-background hover:bg-background/10 hover:text-background h-14 w-full border bg-transparent sm:w-auto sm:px-8"
      >
        <a href={wa(WA_MESSAGES.heroSecondary)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="size-5" />
          Falar no WhatsApp
        </a>
      </Button>
    </div>
  );

  const highlightsNode = (
    <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-5 pt-2 lg:max-w-2xl lg:grid-cols-4 lg:gap-x-6">
      {HERO_HIGHLIGHTS.map(({ Icon, label }) => (
        <li key={label} className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
          <span className="bg-primary/15 text-primary inline-flex size-10 items-center justify-center rounded-full">
            <Icon className="size-5" />
          </span>
          <span className="text-background/85 text-sm leading-snug font-medium">{label}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="hero"
      aria-label="Apresentação — Dra. Juliane Florentino, Dentista em Goiânia"
      className="bg-foreground relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/images/clinica-consultorio.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority={false}
        />
        <div className="from-foreground/60 to-foreground/60 absolute inset-0 bg-gradient-to-r via-transparent lg:from-foreground/45 lg:to-foreground/45" />
      </div>

      {/* MOBILE */}
      <div className="relative z-10 lg:hidden">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 pt-14 pb-12 text-center md:gap-9 md:pt-20 md:pb-16">
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
            {ctaNode}
            {highlightsNode}
          </div>
        </Container>
      </div>

      {/* DESKTOP */}
      <div className="relative z-10 hidden lg:block">
        <Container>
          <div className="grid grid-cols-12 items-center gap-12 py-24 xl:gap-16 xl:py-28">
            <div className="col-span-7 flex flex-col items-start gap-8 text-left">
              {pillBadge}
              {headlineNode}
              {subtitleNode}
              {ctaNode}
              {highlightsNode}
            </div>

            <div className="col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/dra-juliane-2.jpeg"
                  alt="Retrato da Dra. Juliane Florentino — especialista em prótese dental e reabilitação oral em Goiânia"
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
                      Goiânia-GO · 25 anos de experiência
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

function AutoridadeSection() {
  return (
    <section
      id="autoridade"
      aria-labelledby="autoridade-title"
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-10 lg:max-w-6xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div className="border-border bg-muted relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border shadow-md lg:max-w-none">
              <Image
                src="/images/dra-juliane-3.jpeg"
                alt="Dra. Juliane Florentino — retrato profissional"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-7 lg:col-span-7">
            <span className="text-primary text-xs font-medium tracking-[0.22em] uppercase">
              Bloco de Autoridade
            </span>
            <h2
              id="autoridade-title"
              className="font-heading text-foreground text-3xl leading-tight font-medium tracking-tight lg:text-5xl"
            >
              Dra. Juliane Florentino
            </h2>
            <div className="text-foreground space-y-5 text-lg leading-relaxed">
              <p>
                Há <span className="font-medium">25 anos</span> cuidando de sorrisos com excelência,
                precisão e atenção aos detalhes.
              </p>
              <p>
                Especialista em Prótese Dentária e Reabilitação Oral, une técnica avançada e olhar
                estético para criar resultados naturais, funcionais e sofisticados.
              </p>
            </div>

            <div className="pt-2">
              <Button asChild variant="primary" size="lg" className="h-14 w-full sm:w-auto sm:px-8">
                <a href="#sobre">
                  Conheça minha trajetória
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type TreatmentCard = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

const TREATMENTS: readonly TreatmentCard[] = [
  {
    title: "Facetas em porcelana",
    description: "Sorrisos harmônicos e naturais com planejamento individualizado.",
    image: {
      src: "/images/tratamento-facetas.jpg",
      alt: "Facetas em porcelana — caso clínico da Dra. Juliane",
    },
  },
  {
    title: "Reabilitação oral",
    description: "Recupere estética, função e qualidade de vida.",
    image: {
      src: "/images/tratamento-reabilitacao.jpg",
      alt: "Reabilitação oral completa",
    },
  },
  {
    title: "Implantes dentários",
    description:
      "Segurança, conforto e estabilidade para voltar a sorrir com confiança.",
    image: {
      src: "/images/tratamento-implantes.jpg",
      alt: "Implantes dentários — caso clínico",
    },
  },
  {
    title: "Clareamento dental",
    description: "Mais luminosidade e naturalidade para o seu sorriso.",
    image: {
      src: "/images/tratamento-clareamento.jpg",
      alt: "Clareamento dental",
    },
  },
  {
    title: "Prótese protocolo",
    description: "Firmeza, conforto e estética para transformar sua rotina.",
    image: {
      src: "/images/tratamento-protocolo.jpg",
      alt: "Prótese protocolo sobre implantes",
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
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="text-primary text-xs font-medium tracking-[0.22em] uppercase">
            Tratamentos
          </span>
          <h2
            id="tratamentos-title"
            className="font-heading text-foreground text-3xl font-medium tracking-tight lg:text-5xl"
          >
            Tratamentos principais
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Cada plano é desenhado de forma individual, com foco em estética natural e função.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {TREATMENTS.map(({ title, description, image }) => (
            <li key={title}>
              <article className="border-border bg-background flex h-full flex-col gap-5 rounded-3xl border p-5 shadow-sm lg:p-6">
                <div className="border-border bg-muted relative aspect-[6/5] w-full overflow-hidden rounded-2xl border">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-contain"
                  />
                </div>

                <h3 className="font-heading text-foreground text-xl leading-tight font-medium lg:text-2xl">
                  {title}
                </h3>

                <p className="text-foreground text-base leading-relaxed">{description}</p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="h-14 w-full sm:w-auto sm:px-8"
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

const TRANSFORMATIONS = [
  {
    src: "/images/pr%C3%B3tese-dent%C3%A1ria.jpeg",
    alt: "Transformação 1 — prótese dentária",
    label: "Caso 1 · Prótese dentária",
  },
  {
    src: "/images/case-veneers-1.jpg",
    alt: "Transformação 2 — facetas dentárias",
    label: "Caso 2 · Facetas dentárias",
  },
  {
    src: "/images/case-veneers-2.jpg",
    alt: "Transformação 3 — facetas em porcelana",
    label: "Caso 3 · Facetas em porcelana",
  },
  {
    src: "/images/case-implant-1.jpg",
    alt: "Transformação 4 — implante dentário",
    label: "Caso 4 · Implante dentário",
  },
  {
    src: "/images/hero-transformation-1.jpg",
    alt: "Transformação 5 — reabilitação oral completa",
    label: "Caso 5 · Reabilitação completa",
  },
  {
    src: "/images/hero-smile-1.jpg",
    alt: "Transformação 6 — sorriso natural",
    label: "Caso 6 · Sorriso natural",
  },
  {
    src: "/images/smile-after-1.jpg",
    alt: "Transformação 7 — reabilitação",
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
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="text-primary text-xs font-medium tracking-[0.22em] uppercase">
            Antes e depois
          </span>
          <h2
            id="antes-depois-title"
            className="font-heading text-foreground text-3xl font-medium tracking-tight lg:text-5xl"
          >
            Resultados que transformam autoestima e confiança.
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Cada sorriso é planejado de forma única, respeitando a naturalidade e a identidade de
            cada paciente.
          </p>
        </div>
      </Container>

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
              className="snap-center shrink-0 basis-[65%] sm:basis-[40%] lg:basis-[22%]"
            >
              <figure className="space-y-3">
                <div className="border-border bg-muted relative aspect-[3/4] w-full overflow-hidden rounded-2xl border shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 65vw, (max-width: 1024px) 40vw, 22vw"
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
            className="h-14 w-full sm:w-auto sm:px-8"
          >
            <a href={wa(WA_MESSAGES.gallery)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Ver transformações
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

const PREMIUM_ITEMS = [
  "Atendimento personalizado",
  "Ambiente sofisticado",
  "Equipe preparada",
  "Planejamento individual",
  "Tecnologia odontológica",
] as const;

function ExperienciaPremiumSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="bg-foreground text-background relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/images/clinic-chair.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="from-foreground/80 via-foreground/55 to-foreground/80 absolute inset-0 bg-gradient-to-r" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <span className="text-primary text-xs font-medium tracking-[0.22em] uppercase">
            Experiência Premium
          </span>
          <h2
            id="experiencia-title"
            className="font-heading text-background text-3xl font-medium tracking-tight lg:text-5xl"
          >
            Conforto e sofisticação em cada detalhe
          </h2>
          <p className="text-background/80 text-lg leading-relaxed">
            Desde o primeiro atendimento, cada detalhe foi pensado para proporcionar conforto,
            acolhimento e segurança em todas as etapas do tratamento.
          </p>
        </div>

        <ul className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-5">
          {PREMIUM_ITEMS.map((item) => (
            <li
              key={item}
              className="border-background/15 bg-background/5 flex items-center gap-3 rounded-2xl border px-4 py-4 backdrop-blur-sm lg:flex-col lg:items-center lg:gap-3 lg:text-center"
            >
              <span className="bg-primary/20 text-primary inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                <CheckIcon className="size-4" />
              </span>
              <span className="text-background text-base leading-snug font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

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

const TRAJETORIA = [
  "25 anos de prática clínica em prótese dental e reabilitação oral",
  "Especialista em Prótese Dentária pela formação acadêmica continuada",
  "Atendimento humanizado com escuta e planejamento individual",
  "Domínio em estética natural — facetas, implantes e protocolo",
  "Tecnologia digital para previsibilidade e segurança do resultado",
  "Atendimento premium em Goiânia, com pacientes de todo o Brasil",
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
            <div className="border-border bg-muted relative mx-auto aspect-[1353/1600] w-full max-w-md overflow-hidden rounded-3xl border shadow-md lg:max-w-none">
              <Image
                src="/images/dra-juliane-trajetoria.jpg"
                alt="Dra. Juliane Florentino — retrato profissional"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7 lg:order-2">
            <span className="text-primary text-xs font-medium tracking-[0.22em] uppercase">
              Minha trajetória
            </span>
            <h2
              id="sobre-title"
              className="font-heading text-foreground text-3xl leading-tight font-medium tracking-tight lg:text-5xl"
            >
              25 anos cuidando de sorrisos em Goiânia
            </h2>

            <div className="text-foreground space-y-5 text-lg leading-relaxed">
              <p>
                Há mais de duas décadas a Dra. Juliane Florentino dedica-se à prótese dentária e à
                reabilitação oral, com um cuidado que vai muito além da técnica: cada paciente é
                acolhido como protagonista da própria história.
              </p>
              <p>
                A prática une planejamento digital, estética natural e atenção minuciosa aos
                detalhes — para que cada sorriso entregue função, harmonia facial e segurança no
                dia a dia.
              </p>
              <p>
                A consulta começa com escuta. Daí em diante, cada etapa é desenhada para respeitar
                o seu rosto, o seu tempo e o seu desejo.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TRAJETORIA.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span
                    className="bg-primary/15 text-primary-strong mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <CheckIcon className="size-4" />
                  </span>
                  <span className="text-foreground text-base leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="h-14 w-full sm:w-auto sm:px-8"
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

function ChamadaFinalSection() {
  return (
    <section
      id="contato"
      aria-labelledby="chamada-final-title"
      className="bg-foreground text-background relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/images/clinic-wide.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="from-foreground/75 via-foreground/55 to-foreground/75 absolute inset-0 bg-gradient-to-b" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-3xl space-y-7 text-center">
          <span className="text-primary text-xs font-medium tracking-[0.22em] uppercase">
            Próximo passo
          </span>
          <h2
            id="chamada-final-title"
            className="font-heading text-background text-3xl leading-tight font-medium tracking-tight lg:text-5xl"
          >
            Seu novo sorriso começa com um planejamento feito para você.
          </h2>
          <p className="text-background/80 text-lg leading-relaxed">
            Em uma única conversa pelo WhatsApp você entende o caminho mais coerente para o seu
            caso — sem pressa, sem promessas vazias.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Button asChild variant="primary" size="lg" className="h-14 w-full sm:w-auto sm:px-8">
              <a href={wa(WA_MESSAGES.finalPrimary)} target="_blank" rel="noopener noreferrer">
                <CalendarIcon className="size-5" />
                Agendar avaliação
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="border-background/30 text-background hover:bg-background/10 hover:text-background h-14 w-full border bg-transparent sm:w-auto sm:px-8"
            >
              <a href={wa(WA_MESSAGES.finalSecondary)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background w-full">
      <Container>
        <div className="flex flex-col gap-14 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-4">
              <Logo size="lg" className="text-primary" />
              <p className="text-background/85 max-w-xs text-base leading-relaxed">
                Reabilitação oral, facetas, implantes e estética dental em Goiânia. 25 anos cuidando
                de sorrisos com excelência.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-4">
              <h3 className="font-heading text-background text-lg font-medium tracking-tight">
                Contato
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="text-primary mt-0.5 size-5 shrink-0" />
                  <a
                    href="tel:+5562998634545"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    (62) 99863-4545
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <WhatsAppIcon className="text-primary mt-0.5 size-5 shrink-0" />
                  <a
                    href={wa(WA_MESSAGES.sticky)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <InstagramIcon className="text-primary mt-0.5 size-5 shrink-0" />
                  <a
                    href="https://www.instagram.com/drajulianeflorentino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/85 hover:text-background transition-colors"
                  >
                    @drajulianeflorentino
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="text-primary mt-0.5 size-5 shrink-0" />
                  <span className="text-background/85">
                    Seg a Sex · 08h às 18h
                    <br />
                    <span className="text-background/65 text-sm">Sábado mediante agendamento</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 lg:col-span-4">
              <h3 className="font-heading text-background text-lg font-medium tracking-tight">
                Localização
              </h3>
              <div className="flex items-start gap-3 text-base">
                <MapPinIcon className="text-primary mt-0.5 size-5 shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Av.+T-2%2C+224+-+Quadra+98+-+St.+Bueno%2C+Goi%C3%A2nia+-+GO%2C+74210-010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/85 hover:text-background leading-relaxed transition-colors"
                >
                  Av. T-2, 224 — Quadra 98
                  <br />
                  <span className="text-background/65 text-sm">
                    St. Bueno · Goiânia-GO · CEP 74210-010
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="border-background/15 relative aspect-[16/10] overflow-hidden rounded-2xl border">
              <Image
                src="/images/clinica-consultorio.jpg"
                alt="Consultório da Dra. Juliane Florentino — Setor Bueno, Goiânia"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="border-background/15 aspect-[16/10] overflow-hidden rounded-2xl border">
              <iframe
                src="https://www.google.com/maps?q=Av.+T-2%2C+224+-+Quadra+98+-+St.+Bueno%2C+Goi%C3%A2nia+-+GO%2C+74210-010&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clínica da Dra. Juliane Florentino — Av. T-2, 224, Setor Bueno, Goiânia"
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="border-background/15 flex flex-col gap-3 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between">
            <p className="text-background/85 leading-relaxed">
              <span className="text-background font-medium">
                Dra. Juliane Florentino — CRO-GO 6819
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

export default function HomePage() {
  return (
    <>
      <Header whatsappHref={wa(WA_MESSAGES.header)} />
      <main className="bg-background text-foreground">
        <HeroSection />
        <AutoridadeSection />
        <TratamentosSection />
        <AntesDepoisSection />
        <ExperienciaPremiumSection />
        <GoogleReviewsSection
          ctaHref={wa(WA_MESSAGES.social)}
          ctaIcon={<WhatsAppIcon className="size-5" />}
          fallback={TESTIMONIALS_FALLBACK}
        />
        <SobreSection />
        <ChamadaFinalSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
