"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock page scroll, close on Escape, and keep Tab focus inside the dialog while open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          className="fixed inset-0 z-[60] flex flex-col bg-brand-black lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="container-edge flex items-center justify-between py-5">
            <Link href="/" onClick={onClose} className="focus-ring">
              <Logo tone="light" size="h-11 sm:h-12" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="focus-ring flex h-10 w-10 items-center justify-center text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="container-edge flex-1 overflow-y-auto pb-10">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              <Link
                href="/"
                onClick={onClose}
                className="focus-ring border-b border-white/10 py-4 font-heading text-[28px] font-bold text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="focus-ring border-b border-white/10 py-4 font-heading text-[28px] font-bold text-white"
              >
                About
              </Link>

              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="focus-ring flex w-full items-center justify-between py-4 font-heading text-[28px] font-bold text-white"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 pb-4">
                        <Link href="/services" onClick={onClose} className="focus-ring py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                          View All Services
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={onClose}
                            className="focus-ring py-2 text-[16px] text-white/75"
                          >
                            {s.shortName}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/projects"
                onClick={onClose}
                className="focus-ring border-b border-white/10 py-4 font-heading text-[28px] font-bold text-white"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="focus-ring border-b border-white/10 py-4 font-heading text-[28px] font-bold text-white"
              >
                Contact
              </Link>
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="focus-ring flex items-center justify-center rounded-[6px] bg-brand-orange px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-black"
              >
                Request a Quote
              </Link>
              <a
                href={company.phoneHref}
                className="focus-ring flex items-center justify-center gap-2 rounded-[6px] border border-white/15 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
