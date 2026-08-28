import { MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="focus-ring fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 lg:flex"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} aria-hidden="true" />
    </a>
  );
}
