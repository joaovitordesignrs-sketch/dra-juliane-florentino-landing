import * as React from "react";

import { cn } from "@/lib/utils";

export interface SectionProps extends React.ComponentProps<"section"> {
  /**
   * Render as a different element when semantics demand it.
   * - "section" (default): generic semantic section — covers all 7 page-1 blocks
   * - "div": rare; use only when this wraps something that ALREADY has its own semantic role
   *   (e.g. inside a `<main>` already, with no h2 of its own — like the header/footer in the smoke-test)
   *
   * Constrained to the literal union "section" | "div" at the prop boundary. Internally we cast
   * to React.ElementType for the JSX render, which loses the constraint at the runtime React type
   * level — acceptable for Phase 1 since the prop-level union prevents callers from passing other
   * elements. Phase 2 may refine if we need true element-level type discrimination
   * (e.g. via generics over the `as` type), but for one prop with two valid values it's overkill.
   */
  as?: "section" | "div";
}

/**
 * Vertical-rhythm wrapper for a page block.
 *
 * Padding (locked in 01-CONTEXT.md):
 * - mobile (default): py-16 (64px)
 * - md (768px+): py-24 (96px)
 * - lg (1024px+): py-32 (128px)
 *
 * Pair with `<Container>` for horizontal gutters and max-width:
 *   <Section id="hero">
 *     <Container>...</Container>
 *   </Section>
 *
 * React-19 native: pass `ref` directly as a prop, no forwardRef wrapper.
 *
 * Type-safety note: the `as` prop is constrained to "section" | "div" at the prop level;
 * other elements are rejected at compile time. We cast to React.ElementType internally
 * for JSX rendering — Phase 1 accepts this minor loss of type discrimination since the
 * prop-level union is a sufficient guard for our two valid cases.
 */
function Section({ className, as = "section", children, ...props }: SectionProps) {
  const Component = as as React.ElementType;
  return (
    <Component
      data-slot="section"
      className={cn("w-full py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Section };
