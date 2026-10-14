"use client";

import { usePathname } from "next/navigation";
import { company } from "@/lib/company";
import { getServiceBySlug } from "@/lib/services";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";

export function WhatsAppButton() {
  const pathname = usePathname();
  const service = getServiceBySlug(pathname.replace(/^\/services\//, ""));
  const href = service
    ? `${company.whatsappHref}?text=${encodeURIComponent(`Hi, I'd like a quote for ${service.name}.`)}`
    : company.whatsappHref;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="focus-ring group fixed bottom-6 right-6 z-40 hidden h-14 items-center rounded-full bg-[#25D366] pl-[14px] pr-[14px] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.55),0_4px_12px_rgba(0,0,0,0.18)] ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#20c15a] hover:pr-5 hover:shadow-[0_14px_32px_-6px_rgba(37,211,102,0.65),0_6px_16px_rgba(0,0,0,0.2)] active:translate-y-0 motion-reduce:transform-none lg:inline-flex"
    >
      {/* Soft attention ring — a single slow pulse, not a nag */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 motion-safe:animate-[whatsapp-pulse_2.8s_ease-out_1.5s_2]"
      />
      <WhatsAppGlyph className="h-7 w-7 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13.5px] font-semibold tracking-[0.01em] opacity-0 transition-all duration-300 ease-out group-hover:ml-2.5 group-hover:max-w-[180px] group-hover:opacity-100 group-focus-visible:ml-2.5 group-focus-visible:max-w-[180px] group-focus-visible:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
