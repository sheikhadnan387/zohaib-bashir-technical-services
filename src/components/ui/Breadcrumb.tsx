import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
  tone = "dark",
}: {
  items: { name: string; path: string }[];
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] uppercase tracking-[0.12em]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className={`h-3 w-3 ${tone === "dark" ? "text-brand-black/30" : "text-white/30"}`}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={tone === "dark" ? "text-brand-black/60" : "text-white/70"}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={
                    tone === "dark"
                      ? "text-brand-black/60 hover:text-brand-orange"
                      : "text-white/70 hover:text-brand-orange"
                  }
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
