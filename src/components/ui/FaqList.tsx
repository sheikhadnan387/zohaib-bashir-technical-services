import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/serviceFaqs";

/** Accessible accordion of questions; works without JavaScript. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-brand-black/10 rounded-lg border border-brand-black/10">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-5 py-4 sm:px-6">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-[16.5px] font-semibold text-brand-black [&::-webkit-details-marker]:hidden">
            {faq.q}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-brand-black/50 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-[15.5px] leading-relaxed text-brand-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
