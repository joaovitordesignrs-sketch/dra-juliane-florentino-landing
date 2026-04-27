import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button variants — locked in 01-CONTEXT.md "Componentes-Base":
 * - primary: bg-primary + text-primary-foreground, hover bg-primary-strong (the WCAG-AA-safe darker variant from 01-02)
 * - secondary: bg-muted + text-foreground (tertiary CTAs, inline emphasis)
 * - ghost: transparent + text-foreground, hover bg-muted (nav-style buttons)
 *
 * Sizes:
 * - sm: 36px tall (h-9), used in card headers / inline contexts
 * - md: 44px tall (h-11) — default; meets iOS minimum touch target (44pt)
 * - lg: 56px tall (h-14), hero CTAs and primary conversion points
 */
const buttonVariants = cva(
  // Base classes — applied to every variant + size
  [
    "inline-flex items-center justify-center gap-2",
    // Pill-shape (rounded-full) is the global button style for this landing —
    // matches the reference visual treatment. Override via className on the
    // rare exceptional placement.
    "font-body rounded-full font-medium",
    "transition-colors duration-200",
    "focus-visible:ring-primary focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none",
    "whitespace-nowrap",
    // Tap target — ensures iOS/Android hit area is at least 44x44
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-strong active:bg-primary-strong",
        secondary: "bg-muted text-foreground hover:bg-border",
        ghost: "text-foreground hover:bg-muted bg-transparent",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

/**
 * Button — React-19 native (ref accepted as a regular prop, NO forwardRef).
 *
 * Use `asChild` to render the underlying element as anything else (typically `<a>` for WhatsApp links):
 * @example
 *   <Button asChild variant="primary" size="lg">
 *     <a href="https://wa.me/...">Agendar pelo WhatsApp</a>
 *   </Button>
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
