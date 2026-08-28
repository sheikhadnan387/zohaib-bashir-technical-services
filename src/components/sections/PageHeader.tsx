import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  breadcrumbItems,
  eyebrow,
  title,
  description,
}: {
  breadcrumbItems: { name: string; path: string }[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-black py-16 sm:py-24">
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
        <Reveal className="mt-6 max-w-2xl">
          {eyebrow && <Eyebrow tone="light" className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[50px] lg:text-[58px]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
