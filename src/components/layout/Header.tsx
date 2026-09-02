"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasMega: true },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-brand-black/95 py-1.5 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
            : "border-white/5 bg-brand-black/85 py-2.5 sm:py-3 backdrop-blur-sm"
        )}
      >
        <div className="container-edge flex items-center justify-between">
          <Link href="/" className="focus-ring shrink-0" aria-label="Zohaib Bashir Technical Services — home">
            <Logo
              tone="light"
              size={scrolled ? "h-10 sm:h-11 lg:h-12" : "h-11 sm:h-12 lg:h-[58px]"}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  onFocus={() => setMegaOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setMegaOpen(false);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "focus-ring flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                      pathname.startsWith("/services") ? "text-brand-orange" : "text-white/85 hover:text-brand-orange"
                    )}
                  >
                    {link.name}
                    <ChevronDown className={clsx("h-3.5 w-3.5 transition-transform", megaOpen && "rotate-180")} aria-hidden="true" />
                  </Link>

                  <div
                    className={clsx(
                      "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-5 transition-all duration-200",
                      megaOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
                    )}
                  >
                    <div className="rounded-lg border border-white/10 bg-brand-charcoal p-6 shadow-2xl">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {services.map((service) => {
                          const Icon = getServiceIcon(service.icon);
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setMegaOpen(false)}
                              className="focus-ring group flex items-start gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-white/5"
                            >
                              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={1.5} aria-hidden="true" />
                              <span className="text-[13px] font-medium leading-snug text-white/85 group-hover:text-white">
                                {service.shortName}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-4 border-t border-white/10 pt-4">
                        <Link
                          href="/services"
                          className="focus-ring text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-orange hover:text-brand-orange-accent"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "focus-ring text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                    pathname === link.href ? "text-brand-orange" : "text-white/85 hover:text-brand-orange"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" className="!px-5 !py-3 text-[12px]">
              Request a Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="focus-ring flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
