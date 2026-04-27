import { Logo } from "@/components/brand";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-16">
        {/* Logo — should render in foreground color, scale to 240px */}
        <header className="flex justify-center">
          <Logo width={240} className="text-foreground" />
        </header>

        {/* Heading test — Fraunces, weight 600, large */}
        <section className="space-y-6 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
            Reabilitação oral, facetas e implantes em Goiânia.
          </h1>
          <p className="font-body text-muted-foreground mx-auto max-w-xl text-base leading-relaxed md:text-lg">
            Esta página é um placeholder de smoke-test do sistema de marca. A Phase 2 substitui o
            conteúdo pelas 7 seções reais do briefing.
          </p>
        </section>

        {/* Color swatch grid — proves every @theme token is reachable as a Tailwind utility */}
        <section className="space-y-4">
          <h2 className="font-heading text-muted-foreground text-sm font-medium tracking-widest uppercase">
            Tokens da marca (smoke-test)
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Swatch
              label="background"
              className="bg-background border-border border"
              textClass="text-foreground"
            />
            <Swatch label="foreground" className="bg-foreground" textClass="text-background" />
            <Swatch label="primary" className="bg-primary" textClass="text-primary-foreground" />
            <Swatch
              label="primary-strong"
              className="bg-primary-strong"
              textClass="text-primary-strong-foreground"
            />
            <Swatch label="muted" className="bg-muted" textClass="text-muted-foreground" />
            <Swatch label="muted-fg" className="bg-muted-foreground" textClass="text-background" />
            <Swatch label="border" className="bg-border" textClass="text-foreground" />
            <Swatch label="whatsapp" className="bg-accent-whatsapp" textClass="text-foreground" />
          </div>
        </section>

        {/* Typography ladder — proves font-heading and font-body resolve correctly */}
        <section className="space-y-3">
          <h2 className="font-heading text-muted-foreground text-sm font-medium tracking-widest uppercase">
            Tipografia
          </h2>
          <p className="font-heading text-3xl font-semibold">Fraunces 600 — heading principal</p>
          <p className="font-heading text-2xl font-medium">Fraunces 500 — subhead</p>
          <p className="font-heading text-xl font-normal">Fraunces 400 — body serif</p>
          <p className="font-body text-base">
            Inter 400 — corpo de texto. Esta linha existe para verificar que a fonte body carrega
            via next/font sem flash visível ao recarregar.
          </p>
          <p className="font-body text-base font-semibold">Inter 600 — ênfase em corpo de texto.</p>
          <p className="font-body text-muted-foreground text-sm">
            Inter 400 / muted-foreground — usado para microcopy e disclaimers.
          </p>
        </section>

        {/* Primary text accent — proves primary-strong is the body-text variant */}
        <section className="space-y-2">
          <p className="font-body text-base">
            Este link de exemplo usa{" "}
            <a href="#" className="text-primary-strong font-medium underline underline-offset-4">
              text-primary-strong
            </a>{" "}
            para passar contraste WCAG AA em texto pequeno (5:1).
          </p>
          <p className="font-body text-base">
            Heading com tom primário em{" "}
            <span className="text-primary text-2xl font-semibold">tamanho grande</span> usa
            text-primary diretamente (3.4:1, AA large only).
          </p>
        </section>

        <footer className="border-border text-muted-foreground border-t pt-8 text-center text-sm">
          <p>
            Smoke-test brand system — substituído pela Phase 2.{" "}
            <span className="text-foreground font-medium">
              Dra. Juliane Florentino — CRO/GO XXXXX
            </span>{" "}
            (CRO real será adicionado na Phase 3 antes do go-live).
          </p>
        </footer>
      </div>
    </main>
  );
}

function Swatch({
  label,
  className,
  textClass,
}: {
  label: string;
  className: string;
  textClass: string;
}) {
  return (
    <div className={`${className} ${textClass} flex h-20 items-end rounded-md p-3`}>
      <span className="font-body text-xs font-medium">{label}</span>
    </div>
  );
}
