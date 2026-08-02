import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline";
  interactive?: boolean;
}

const variants = {
  default: "bg-background border border-border shadow-card",
  elevated: "bg-background shadow-elevated",
  outline: "bg-transparent border border-border",
};

/** Surface container for grouped content. */
export function Card({
  variant = "default",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        variants[variant],
        interactive &&
          "transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none",
        className,
      )}
      {...props}
    />
  );
}
