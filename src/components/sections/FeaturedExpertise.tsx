import Image from "next/image";
import { Sparkles, Wind, Hammer } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const featured = [
  {
    icon: Sparkles,
    eyebrow: "Shampoo Cleaning",
    title: "Deep cleaning that brings fabrics back to life.",
    description:
      "We provide professional shampoo cleaning for sofas, carpets, mattresses and curtains, using proven techniques and industry-standard equipment to remove dirt, allergens and stains while preserving material quality.",
    href: "/services/shampoo-cleaning",
    cta: "Explore Shampoo Cleaning",
    image: "/images/home/featured-cleaning.webp",
  },
  {
    icon: Wind,
    eyebrow: "AC Services",
    title: "Reliable cooling engineered for Dubai's climate.",
    description:
      "We install, service and maintain AC units, ensuring systems run efficiently and reliably throughout the year. From routine maintenance to fault diagnosis and repair, we keep your cooling systems performing at their best.",
    href: "/services/ac-services",
    cta: "Explore AC Services",
    image: "/images/home/featured-ac.webp",
  },
  {
    icon: Hammer,
    eyebrow: "Flooring & Parquet Work",
    title: "Precision flooring from preparation to finishing.",
    description:
      "We install and maintain wood, parquet and laminate flooring with careful attention to substrate preparation, material selection and precision installation for lasting durability.",
    href: "/services/flooring-parquet",
    cta: "Explore Flooring & Parquet",
    image: "/images/home/featured-flooring.webp",
  },
];

export function FeaturedExpertise() {
  return (
    <section className="bg-brand-bg py-2 sm:py-4">
      {featured.map((item, i) => {
        const reversed = i % 2 === 1;
        return (
          <div key={item.href} className="container-edge py-8 sm:py-12 lg:py-16">
            <div
              className={`grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-black/10 bg-brand-black shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)] sm:aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <Eyebrow>{item.eyebrow}</Eyebrow>
                <h3 className="mt-3.5 sm:mt-5 font-heading text-[22px] xs:text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.12] text-brand-black break-words">
                  {item.title}
                </h3>
                <p className="mt-3 sm:mt-5 max-w-md text-[14px] sm:text-[16px] leading-relaxed text-brand-muted">
                  {item.description}
                </p>
                <div className="mt-5 sm:mt-7">
                  <Button href={item.href} variant="ghost" withArrow>
                    {item.cta}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
