import Image from "next/image";
import { Phone, Mail, ArrowUpRight, FileBadge2, MapPin } from "lucide-react";
import { company } from "@/lib/company";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";

const channels = [
  {
    label: "Call us",
    value: company.phoneDisplay,
    href: company.phoneHref,
    icon: <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
    iconClass: "bg-brand-orange/15 text-brand-orange",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Chat with the team",
    href: company.whatsappHref,
    icon: <WhatsAppGlyph className="h-5 w-5" />,
    iconClass: "bg-[#25D366]/15 text-[#25D366]",
    external: true,
  },
  {
    label: "Email",
    value: company.email,
    href: company.emailHref,
    icon: <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
    iconClass: "bg-white/10 text-white",
    external: false,
  },
];

export function ContactHeader({ breadcrumbItems }: { breadcrumbItems: { name: string; path: string }[] }) {
  return (
    <section className="pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
      <div className="container-edge">
        <div className="relative overflow-hidden rounded-[20px] bg-brand-black sm:rounded-[28px] lg:rounded-[32px]">
          {/* Photo: right half on desktop, top strip on mobile */}
          <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[60%]">
            <Image
              src="/images/pages/contact-hero.webp"
              alt="Zohaib Bashir Technical Services team discussing a project with a client in Dubai"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[60%_center]"
            />
            <div className="absolute inset-0 lg:-left-px bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent lg:bg-gradient-to-r lg:from-brand-black lg:from-0% lg:via-brand-black/70 lg:via-30% lg:to-transparent lg:to-85%" />
          </div>

          {/* Grid texture, matches the other dark sections */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "linear-gradient(to right, black 30%, transparent 70%)",
            }}
          />

          <div className="relative z-10 animate-fade-up px-5 pb-7 pt-2 sm:px-10 sm:pb-10 lg:w-[58%] lg:px-14 lg:py-14 xl:py-16">
            <Breadcrumb items={breadcrumbItems} tone="light" />

            <h1 className="mt-4 font-heading text-[32px] font-bold leading-[1.05] text-white sm:text-[44px] lg:text-[52px]">
              Let&rsquo;s Talk About
              <br />
              Your Property.
            </h1>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/80 sm:text-[17px]">
              Call, WhatsApp or send the details below — we&rsquo;ll come back with a clear scope and quotation.
            </p>

            <ul className="mt-7 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:mt-8">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="focus-ring group flex items-center gap-3 px-3.5 py-3.5 transition-colors hover:bg-white/[0.06] sm:gap-4 sm:px-5"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${c.iconClass}`}>
                      {c.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[12px] font-medium uppercase tracking-[0.14em] text-white/60">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block break-all text-[15px] font-semibold leading-snug text-white sm:text-[17px]">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="hidden h-5 w-5 shrink-0 text-white/40 transition-all sm:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-white/75">
              <li className="flex items-center gap-2">
                <FileBadge2 className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                Licensed · No. {company.licenseNo}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                {company.officeLine1}, Dubai
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
