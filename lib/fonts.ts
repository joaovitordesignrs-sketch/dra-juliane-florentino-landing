import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  preload: true,
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
});

export const fontBody = Montserrat({
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
