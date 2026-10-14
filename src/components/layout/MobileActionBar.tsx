"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/lib/company";
import { getServiceBySlug } from "@/lib/services";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";

const quietAction =
  "focus-ring flex h-12 flex-col items-center justify-center gap-1 rounded-xl text-white/85 transition-colors active:bg-white/10 active:text-white";
const quietLabel = "text-[11px] font-medium leading-none tracking-[0.01em]";

export function MobileActionBar() {
  const pathname = usePathname();
  const service = getServiceBySlug(pathname.replace(/^\/services\//, ""));
  const whatsappHref = service
    ? `${company.whatsappHref}?text=${encodeURIComponent(`Hi, I'd like a quote for ${service.name}.`)}`
    : company.whatsappHref;
  const quoteHref = service ? `/contact?service=${service.slug}` : "/contact";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-black/90 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-8px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:hidden"
    >
      <div className="grid grid-cols-[1fr_1fr_1.7fr] items-center gap-1 px-3 py-2">
        <a href={company.phoneHref} className={quietAction}>
          <Phone className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
          <span className={quietLabel}>Call</span>
        </a>

        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={quietAction}>
          <WhatsAppGlyph className="h-[23px] w-[23px] text-[#25D366]" />
          <span className={quietLabel}>WhatsApp</span>
        </a>

        <Link
          href={quoteHref}
          className="focus-ring flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-orange px-4 text-[13px] font-semibold text-brand-black shadow-[0_6px_18px_-6px_rgba(249,115,22,0.6)] transition-all active:scale-[0.98] active:bg-brand-orange-accent"
        >
          Get a Quote
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}
