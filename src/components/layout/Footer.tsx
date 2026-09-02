import Link from "next/link";
import { Phone, Mail, MapPin, FileBadge2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="container-edge grid grid-cols-1 gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.1fr_1.1fr]">
        <div>
          <Link href="/" className="focus-ring inline-block">
            <Logo tone="light" size="h-16 sm:h-[72px] lg:h-20" />
          </Link>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-white/55">
            Technical installation, maintenance and property services across
            residential and commercial properties in Dubai.
          </p>
          <div className="mt-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-white/40">
            <FileBadge2 className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            License No. {company.licenseNo}
          </div>
        </div>

        <div>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring text-[14px] text-white/75 transition-colors hover:text-brand-orange">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="focus-ring text-[14px] text-white/75 transition-colors hover:text-brand-orange"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="focus-ring text-[14px] font-semibold text-brand-orange">
                View All →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Contact
          </h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <span className="text-[14px] leading-relaxed text-white/75">
                {company.officeLine1}
                <br />
                {company.officeLine2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <a href={company.phoneHref} className="focus-ring text-[14px] text-white/75 hover:text-brand-orange">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <a href={company.emailHref} className="focus-ring text-[14px] text-white/75 hover:text-brand-orange break-all">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col items-center justify-between gap-4 py-6 text-[12px] text-white/40 sm:flex-row">
          <p>
            © {year} {company.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="focus-ring hover:text-brand-orange">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring hover:text-brand-orange">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
