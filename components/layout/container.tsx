import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ContainerProps is a TYPE ALIAS, not an empty extending-interface.
 *
 * The `next/typescript` ESLint preset (extending @typescript-eslint/recommended)
 * enables `@typescript-eslint/no-empty-object-type`, which would flag an
 * `interface ContainerProps extends React.ComponentProps<"div"> {}` declaration as an error.
 * Type aliases that just rename an existing type are explicitly allowed.
 *
 * If a future iteration ADDS fields to Container's prop surface, switch to the interface form THEN.
 * Currently Container takes no extra props beyond a standard <div>'s, so the alias form is correct
 * AND lint-clean.
 */
export type ContainerProps = React.ComponentProps<"div">;

/**
 * Horizontal-gutter wrapper. Centers content with a responsive max-width.
 *
 * Layout (locked in 01-CONTEXT.md, adapted to Tailwind v4):
 * - max-width: max-w-7xl (1280px)
 *   IMPORTANT: Tailwind v4 REMOVED `max-w-screen-{sm,md,lg,xl,2xl}` utilities (they were silent no-ops
 *   in v4). The replacement at 1280px is `max-w-7xl` from the standard spacing scale.
 *   Source: https://tailwindcss.com/docs/upgrade-guide#max-w-screen-utilities-removed
 * - horizontal padding: px-4 (16px) on mobile, px-8 (32px) on md+
 *
 * Always nest inside <Section> for full vertical rhythm:
 *   <Section><Container>...</Container></Section>
 *
 * React-19 native: pass `ref` directly as a prop, no forwardRef wrapper.
 */
function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-7xl px-4 md:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
