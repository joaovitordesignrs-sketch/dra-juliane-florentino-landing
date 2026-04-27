import { Fraunces, Inter, Pinyon_Script } from "next/font/google";

/**
 * Heading font — Fraunces (variable serif, editorial feel).
 * Loaded weights: 400 (body-size headings), 500 (subheads), 600 (hero h1).
 * `display: "swap"` is mandatory per CONTEXT.md (Acessibilidade & Performance LOCKED).
 */
export const fontHeading = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  style: ["normal"],
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

/**
 * Script display font — Pinyon Script (handwritten cursive, single weight 400).
 * Used exclusively for the "Dra. Juliane Florentino" wordmark in header / footer.
 * Single weight only — Pinyon Script ships as 400 italic-style, no other variants exist on Google Fonts.
 * `display: "swap"` is mandatory; preload is enabled so the wordmark renders immediately above the fold.
 */
export const fontScript = Pinyon_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
  weight: ["400"],
  style: ["normal"],
  preload: true,
  fallback: ["Allura", "Great Vibes", "Apple Chancery", "cursive"],
});
