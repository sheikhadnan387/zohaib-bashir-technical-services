import Link from "next/link";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/company";

/** Sticky "get a quote" card shown beside service and sub-service content. */
export function ServiceQuoteCard({
  heading,
  serviceSlug,
  whatsappSubject,
}: {
  heading: string;
  serviceSlug: string;
  whatsappSubject: string;
}) {
  return (
    <div className="rounded-lg border border-brand-black/10 bg-brand-black p-6 text-white sm:p-7">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{heading}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-white/75">
        Tell us about the property and we&rsquo;ll come back with a clear scope and price.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <Link
          href={`/contact?service=${serviceSlug}`}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-[6px] bg-brand-orange px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-black transition-colors hover:bg-brand-orange-accent"
        >
          Request a Quote
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={company.phoneHref}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/20 px-4 py-3 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <a
            href={`${company.whatsappHref}?text=${encodeURIComponent(`Hi, I'd like a quote for ${whatsappSubject}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/20 px-4 py-3 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#25D366] hover:text-[#25D366]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
      <p className="mt-4 text-[13px] text-white/60">{company.phoneDisplay} · Dubai, UAE</p>
    </div>
  );
}
