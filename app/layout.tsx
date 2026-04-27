import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Juliane Florentino — Reabilitação Oral em Goiânia",
  description:
    "Facetas, implantes e reabilitação oral em Goiânia com a Dra. Juliane Florentino. Agende sua avaliação pelo WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
