import Link from "next/link";

import { Logo } from "@/components/brand";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      {/* ====== Header ====== */}
      <Section as="div" className="border-border border-b py-8 md:py-10 lg:py-10">
        <Container>
          <div className="flex items-center justify-between">
            <Logo width={200} className="text-foreground" />
            <Button asChild variant="ghost" size="sm">
              <Link href="#contato">Contato</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ====== Hero (smoke-test placeholder) ====== */}
      <Section id="hero">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
              Reabilitação oral, facetas e implantes em Goiânia.
            </h1>
            <p className="font-body text-muted-foreground mx-auto max-w-xl text-base leading-relaxed md:text-lg">
              Smoke-test do sistema de marca + componentes base. A Phase 2 substitui o conteúdo
              pelas 7 seções reais do briefing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <a href="https://wa.me/5562000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.">
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="#components">Ver componentes</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====== Component matrix (proves all 9 button permutations + Section composition) ====== */}
      <Section id="components" className="bg-muted">
        <Container>
          <div className="space-y-12">
            <header className="space-y-2 text-center">
              <h2 className="font-heading text-3xl font-semibold md:text-4xl">
                Component matrix (smoke-test)
              </h2>
              <p className="font-body text-muted-foreground text-base">
                Variantes e tamanhos de Button. Phase 2 substitui esta seção.
              </p>
            </header>

            {/* 3x3 grid: variants x sizes */}
            <div className="space-y-8">
              {(["primary", "secondary", "ghost"] as const).map((variant) => (
                <div key={variant} className="space-y-3">
                  <h3 className="font-heading text-muted-foreground text-xs font-medium tracking-widest uppercase">
                    variant: {variant}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant={variant} size="sm">
                      sm — {variant}
                    </Button>
                    <Button variant={variant} size="md">
                      md — {variant}
                    </Button>
                    <Button variant={variant} size="lg">
                      lg — {variant}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* asChild proof — Button rendered as <a> for WhatsApp link */}
            <div className="space-y-3">
              <h3 className="font-heading text-muted-foreground text-xs font-medium tracking-widest uppercase">
                asChild rendering as &lt;a&gt; (WhatsApp pattern)
              </h3>
              <Button asChild variant="primary" size="lg">
                <a href="https://wa.me/5562000000000" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp →
                </a>
              </Button>
            </div>

            {/* Disabled proof */}
            <div className="space-y-3">
              <h3 className="font-heading text-muted-foreground text-xs font-medium tracking-widest uppercase">
                Disabled
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" disabled>
                  primary disabled
                </Button>
                <Button variant="secondary" disabled>
                  secondary disabled
                </Button>
                <Button variant="ghost" disabled>
                  ghost disabled
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====== Typography ladder (proves font-heading + font-body) ====== */}
      <Section id="typography">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">Tipografia</h2>
            <p className="font-heading text-3xl font-semibold">Fraunces 600 — heading principal</p>
            <p className="font-heading text-2xl font-medium">Fraunces 500 — subhead</p>
            <p className="font-body text-base leading-relaxed">
              Inter 400 — corpo de texto. Esta linha verifica que a body font carrega via next/font
              sem flash visível ao recarregar.
            </p>
            <p className="font-body text-muted-foreground text-sm">
              Inter 400 + muted-foreground — usado para microcopy e disclaimers.
            </p>
            <p className="font-body text-base">
              Link inline:{" "}
              <Link
                href="#hero"
                className="text-primary-strong font-medium underline underline-offset-4"
              >
                voltar ao topo
              </Link>{" "}
              (text-primary-strong, AA 5:1).
            </p>
          </div>
        </Container>
      </Section>

      {/* ====== Footer placeholder (Phase 3 hardens with real CRO) ====== */}
      <Section
        as="div"
        id="contato"
        className="border-border bg-muted border-t py-10 md:py-12 lg:py-12"
      >
        <Container>
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <Logo width={140} className="text-foreground" />
            <p className="font-body text-muted-foreground text-xs">
              <span className="text-foreground font-medium">
                Dra. Juliane Florentino — CRO/GO XXXXX
              </span>{" "}
              · Goiânia, GO · CRO real será preenchido na Phase 3 antes do go-live.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
