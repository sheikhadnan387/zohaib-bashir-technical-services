"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/lib/company";
import { getServiceBySlug } from "@/lib/services";

export function MobileActionBar() {
  const pathname = usePathname();
  const service = getServiceBySlug(pathname.replace(/^\/services\//, ""));
  const whatsappHref = service
    ? `${company.whatsappHref}?text=${encodeURIComponent(`Hi, I'd like a quote for ${service.name}.`)}`
    : company.whatsappHref;
  const quoteHref = service ? `/contact?service=${service.slug}` : "/contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-brand-black/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md lg:hidden">
      <a
        href={company.phoneHref}
        className="focus-ring flex flex-col items-center justify-center gap-1 py-2 text-white/85 active:bg-white/5"
      >
        <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">Call</span>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex flex-col items-center justify-center gap-1 border-x border-white/10 py-2.5 text-white/85 active:bg-white/5"
      >
        <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">WhatsApp</span>
      </a>
      <Link
        href={quoteHref}
        className="focus-ring flex flex-col items-center justify-center gap-1 bg-brand-orange py-2.5 text-brand-black active:bg-brand-orange-accent"
      >
        <FileText className="h-[18px] w-[18px]" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">Quote</span>
      </Link>
    </div>
  );
}
