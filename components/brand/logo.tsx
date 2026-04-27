import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * Visual size token. Maps to SVG widths:
   *   - "sm" → 160px
   *   - "md" → 200px
   *   - "lg" → 240px
   *   - "xl" → 320px
   * Default "md".
   */
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /** Accessible label. Defaults to the clinic name in pt-BR. */
  ariaLabel?: string;
}

const SIZE_WIDTH = {
  sm: 160,
  md: 200,
  lg: 240,
  xl: 320,
} as const;

/**
 * Word-mark "Dra. JULIANE / FLORENTINO" rendered as a two-line typographic
 * SVG block in Fraunces caps. Color flows through `currentColor` — set the
 * parent's `text-*` class to recolor.
 *
 * React-19 native: ref-as-prop, no forwardRef.
 */
export function Logo({ size = "md", className, ariaLabel }: LogoProps) {
  const accessibleLabel = ariaLabel ?? "Dra. Juliane Florentino";
  const width = SIZE_WIDTH[size];
  const height = (width * 96) / 240;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 96"
      width={width}
      height={height}
      role="img"
      aria-label={accessibleLabel}
      className={cn("inline-block select-none", className)}
    >
      <title>{accessibleLabel}</title>
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
      <line
        x1="78"
        y1="50"
        x2="162"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
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

/**
 * Alias kept for backwards compatibility. Same component as `Logo`.
 */
export const LogoMark = Logo;
