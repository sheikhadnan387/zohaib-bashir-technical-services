import {
  Network,
  Hammer,
  Grid3x3,
  Wind,
  Waves,
  Sparkles,
  Paintbrush,
  SquareStack,
  Cog,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  Network,
  Hammer,
  Grid3x3,
  Wind,
  Waves,
  Sparkles,
  Paintbrush,
  SquareStack,
  Cog,
};

export function getServiceIcon(name: string): LucideIcon {
  return serviceIconMap[name] ?? Cog;
}
