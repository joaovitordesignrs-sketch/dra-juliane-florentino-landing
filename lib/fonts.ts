import { Cormorant_Garamond, Inter } from "next/font/google";

/**
 * Heading font — Cormorant Garamond (refined editorial serif with elegant italics).
 * Loaded weights: 300 (light hero), 400 (body-size headings), 500 (subheads), 600 (emphasis).
 * `display: "swap"` is mandatory per CONTEXT.md (Acessibilidade & Performance LOCKED).
 */
export const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  preload: true,
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
});

/**
 * Body font — Inter (variable sans, premium legibility on mobile).
 * `display: "swap"` is mandatory.
 */
export const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

