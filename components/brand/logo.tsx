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
  sm: 200,
  md: 240,
  lg: 300,
  xl: 400,
} as const;

/**
 * Word-mark "Dra. Juliane Florentino" rendered as a single-line minimalist
 * serif in Fraunces 400. Mixed case, tight tracking, no divider — editorial
 * masthead feel. Color flows through `currentColor`.
 *
 * React-19 native: ref-as-prop, no forwardRef.
 */
export function Logo({ size = "md", className, ariaLabel }: LogoProps) {
  const accessibleLabel = ariaLabel ?? "Dra. Juliane Florentino";
  const width = SIZE_WIDTH[size];
  const height = (width * 60) / 320;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 60"
      width={width}
      height={height}
      role="img"
      aria-label={accessibleLabel}
      className={cn("inline-block select-none", className)}
    >
      <title>{accessibleLabel}</title>
      <text
        x="160"
        y="40"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "30px",
          fontWeight: 400,
          letterSpacing: "0.005em",
        }}
      >
        Dra. Juliane Florentino
      </text>
    </svg>
  );
}

/**
 * Alias kept for backwards compatibility. Same component as `Logo`.
 */
export const LogoMark = Logo;
