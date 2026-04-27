import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * Visual size token. The wordmark scales via Tailwind text-* utilities so it
   * inherits the page's font-size context cleanly. Maps to:
   *   - "sm"  → text-2xl  (~24px) — header on mobile
   *   - "md"  → text-3xl  (~30px) — header on desktop, generic placements
   *   - "lg"  → text-4xl  (~36px) — desktop header large
   *   - "xl"  → text-5xl  (~48px) — footer / hero brand block
   * Default "md".
   */
  size?: "sm" | "md" | "lg" | "xl";
  /** Optional Tailwind classes. Color flows through `currentColor`/`text-*`. */
  className?: string;
  /**
   * Accessible label. Defaults to the clinic name in pt-BR.
   * The wordmark renders as text (not an img/svg with role="img"), so screen
   * readers will read it natively — but we keep an aria-label override for
   * cases where the surrounding context already announces the name.
   */
  ariaLabel?: string;
}

const SIZE_CLASS = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
  xl: "text-5xl",
} as const;

/**
 * Word-mark "Dra. Juliane Florentino" rendered as a single line of script
 * italic text, using the Pinyon Script display font wired via next/font in
 * lib/fonts.ts (--font-script). Color flows through currentColor — set the
 * parent's `text-*` class to recolor.
 *
 * React-19 native: ref-as-prop, no forwardRef.
 */
export function Logo({ size = "md", className, ariaLabel }: LogoProps) {
  const accessibleLabel = ariaLabel ?? "Dra. Juliane Florentino";
  return (
    <span
      role="img"
      aria-label={accessibleLabel}
      className={cn(
        "font-script select-none whitespace-nowrap leading-none",
        SIZE_CLASS[size],
        className,
      )}
      style={{ fontFamily: "var(--font-script)" }}
    >
      Dra. Juliane Florentino
    </span>
  );
}

/**
 * Legacy two-line typographic block ("Dra. JULIANE / FLORENTINO") in Fraunces
 * caps. Kept for backwards compatibility / alternative placements where the
 * structured stamp suits better than the script wordmark. NOT used by the
 * landing page after the visual refresh.
 */
export function LogoMark({
  width = 240,
  className,
  title,
}: {
  width?: number;
  className?: string;
  title?: string;
}) {
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
      <line x1="78" y1="50" x2="162" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
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
