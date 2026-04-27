import type { Metadata } from "next";
import { fontBody, fontHeading, fontScript } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drajulianeflorentino.com.br"),
  title: "Dra. Juliane Florentino — Facetas, Implantes e Reabilitação Oral em Goiânia",
  description:
    "Especialista em prótese dental e reabilitação oral em Goiânia. Tratamentos personalizados em facetas, implantes e estética dental para você voltar a sorrir com confiança. Agende sua avaliação pelo WhatsApp.",
  keywords: [
    "dentista Goiânia",
    "facetas dentárias Goiânia",
    "implantes dentários Goiânia",
    "reabilitação oral Goiânia",
    "prótese dental",
    "estética dental",
    "Dra. Juliane Florentino",
  ],
  authors: [{ name: "Dra. Juliane Florentino" }],
  openGraph: {
    title: "Dra. Juliane Florentino — Reabilitação Oral em Goiânia",
    description:
      "Facetas, implantes e reabilitação oral com planejamento personalizado em Goiânia. Volte a sorrir com confiança.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={cn(fontHeading.variable, fontBody.variable, fontScript.variable)}
      suppressHydrationWarning
    >
      <body className="font-body bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
