import {
  DraftingCompass,
  HardHat,
  Hammer,
  Ruler,
  ClipboardList,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/content";

const map: Record<IconName, LucideIcon> = {
  blueprint: DraftingCompass,
  design: Ruler,
  management: ClipboardList,
  renovation: Hammer,
  site: HardHat,
  specialty: Wrench,
};

/** Maps a serializable icon name to its Lucide icon component. */
export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = map[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
