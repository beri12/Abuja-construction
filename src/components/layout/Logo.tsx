import Link from "next/link";
import { HardHat } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

/** Brand logo lockup used in the navbar and footer. */
export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="#home"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-md font-display text-lg font-bold tracking-tight",
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <HardHat className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        {siteConfig.shortName}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}
