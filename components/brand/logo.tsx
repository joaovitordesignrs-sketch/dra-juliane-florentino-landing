import { cn } from "@/lib/utils";

export interface LogoProps {
  /** Width in pixels — height auto-scales to maintain ratio. Default 240. */
  width?: number;
  /** Optional Tailwind classes. Color flows through `currentColor`, so `text-foreground` / `text-primary` work. */
  className?: string;
  /**
   * Accessible label. Defaults to the clinic name in pt-BR.
   * Set `aria-hidden` on the wrapper if the logo is decorative beside a visible H1.
   */
  title?: string;
}

/**
 * Word-mark "Dra. JULIANE FLORENTINO" rendered as inline SVG.
 *
 * Design choices (locked in 01-CONTEXT.md "Identidade Visual"):
 * - Two lines: "Dra. JULIANE" (smaller, italic-suggesting via Fraunces) over "FLORENTINO" (larger, all-caps, wider letterspacing).
 * - Color via `currentColor` — set the parent's `text-*` class to recolor.
 * - Sizing via `width` prop, height auto-scales (viewBox is 240x96).
 * - No external font dependency in the SVG: we set the font-family inline using the same CSS var the layout exposes (`var(--font-heading)`).
 *   This means the logo inherits Fraunces from next/font automatically; if the variable is absent (e.g. SSR before hydration), it falls back gracefully via the @theme fallback chain.
 *
 * Width:Height ratio = 240:96 = 2.5:1.
 */
export function Logo({ width = 240, className, title }: LogoProps) {
  const accessibleTitle = title ?? "Dra. Juliane Florentino";
  const height = (width * 96) / 240;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 96"
      width={width}
      height={height}
      role="img"
      aria-label={accessibleTitle}
      className={cn("inline-block select-none", className)}
    >
      <title>{accessibleTitle}</title>

      {/* Line 1: "Dra. JULIANE" — smaller, weight 500, light tracking */}
      <text
        x="120"
        y="36"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "20px",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Dra. JULIANE
      </text>

      {/* Decorative hairline divider between the two lines */}
      <line
        x1="78"
        y1="50"
        x2="162"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Line 2: "FLORENTINO" — larger, weight 600, wider tracking */}
      <text
        x="120"
        y="80"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "26px",
          fontWeight: 600,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
      >
        FLORENTINO
      </text>
    </svg>
  );
}
