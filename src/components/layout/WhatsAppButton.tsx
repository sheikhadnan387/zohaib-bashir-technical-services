"use client";

import { usePathname } from "next/navigation";
import { company } from "@/lib/company";
import { getServiceBySlug } from "@/lib/services";

/** Official WhatsApp glyph (Simple Icons, CC0). */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

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
