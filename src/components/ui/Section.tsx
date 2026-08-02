import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  surface?: boolean;
  containerSize?: "default" | "narrow" | "wide";
}

/** A page section with vertical rhythm, optional surface background and anchor id. */
export function Section({
  id,
  surface = false,
  containerSize = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20 lg:py-28",
        surface && "bg-surface",
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
