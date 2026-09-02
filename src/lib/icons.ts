import {
  Hammer,
  Wind,
  Sparkles,
  Paintbrush,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  Hammer,
  Wind,
  Sparkles,
  Paintbrush,
};

export function getServiceIcon(name: string): LucideIcon {
  return serviceIconMap[name] ?? Paintbrush;
}
