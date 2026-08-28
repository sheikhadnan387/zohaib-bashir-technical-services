import type { LucideIcon } from "lucide-react";

/**
 * Original architectural/blueprint-style visual used in place of photography.
 * No verified project photography has been supplied for this license, so
 * every visual surface on the site uses this custom line-art system rather
 * than stock or AI-generated photos standing in as real company work.
 *
 * `className` must include a position utility (`relative` or `absolute`) —
 * this component does not set one itself so callers can use it either as an
 * inline block or as a full-bleed `absolute inset-0` background.
 */
export function PlaceholderVisual({
  icon: Icon,
  label,
  tone = "dark",
  className = "",
  dense = false,
}: {
  icon: LucideIcon;
  label: string;
  tone?: "dark" | "light";
  className?: string;
  dense?: boolean;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`overflow-hidden ${
        isDark ? "bg-brand-black" : "bg-[#EEEEEA]"
      } ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${
            isDark ? "rgba(249,115,22,0.14)" : "rgba(11,13,15,0.08)"
          } 1px, transparent 1px), linear-gradient(90deg, ${
            isDark ? "rgba(249,115,22,0.14)" : "rgba(11,13,15,0.08)"
          } 1px, transparent 1px)`,
          backgroundSize: dense ? "22px 22px" : "40px 40px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(120% 100% at 15% 0%, rgba(249,115,22,0.16), transparent 55%), linear-gradient(160deg, #15191D 0%, #0B0D0F 65%)"
            : "radial-gradient(120% 100% at 85% 100%, rgba(249,115,22,0.10), transparent 55%)",
        }}
      />

      {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map(
        (pos) => (
          <span
            key={pos}
            className={`absolute h-4 w-4 sm:h-5 sm:w-5 ${pos} ${
              isDark ? "border-brand-orange/60" : "border-brand-black/25"
            }`}
          />
        )
      )}

      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full ${
            isDark ? "bg-white/[0.04]" : "bg-brand-black/[0.04]"
          }`}
          style={{ width: "34%", aspectRatio: "1 / 1" }}
        >
          <Icon
            className={isDark ? "text-brand-orange" : "text-brand-black/70"}
            strokeWidth={1.25}
            style={{ width: "48%", height: "48%" }}
          />
        </div>
      </div>

      <div
        className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between border-t pt-2 text-[10px] uppercase tracking-[0.18em] ${
          isDark
            ? "border-white/10 text-white/50"
            : "border-brand-black/10 text-brand-black/45"
        }`}
      >
        <span className="truncate">{label}</span>
        <span className="ml-2 shrink-0 font-mono">ZB</span>
      </div>
    </div>
  );
}
