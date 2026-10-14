import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHeader({
  breadcrumbItems,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  breadcrumbItems: { name: string; path: string }[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    const altText = imageAlt || (typeof title === "string" ? title : "Page banner");

    return (
      <section className="pt-4 sm:pt-6 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
        <div className="container-edge">
          <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[480px] 2xl:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] 2xl:rounded-[32px] bg-brand-black shadow-sm">
            {/* Photographic Background */}
            <Image
              src={image}
              alt={altText}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1360px"
              className="object-cover object-center"
            />

            {/* Readability Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/65 to-brand-black/20" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black/65 via-brand-black/25 to-transparent" />

            {/* Bottom-Left Aligned Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-10 lg:p-14">
              <div className="animate-fade-up">
                <Breadcrumb items={breadcrumbItems} tone="light" />
                <h1 className="mt-4 font-heading text-[30px] xs:text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.04] text-white break-words">
                  {title}
                </h1>
                {description && (
                  <p className="mt-2 sm:mt-3.5 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-white/90 line-clamp-3 sm:line-clamp-none">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Backward-compatible fallback presentation for text-only headers (Terms, Privacy Policy, etc.)
  return (
    <section className="relative overflow-hidden bg-brand-black py-14 sm:py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container-edge relative">
        <Breadcrumb items={breadcrumbItems} tone="light" />
        <div className="animate-fade-up mt-6 max-w-2xl">
          {eyebrow && <Eyebrow tone="light" className="mb-4 sm:mb-5">{eyebrow}</Eyebrow>}
          <h1 className="font-heading text-[28px] xs:text-[34px] sm:text-[48px] lg:text-[58px] font-bold leading-[1.06] text-white break-words">
            {title}
          </h1>
          {description && (
            <p className="mt-4 sm:mt-5 max-w-xl text-[15.5px] sm:text-[17px] leading-relaxed text-white/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

