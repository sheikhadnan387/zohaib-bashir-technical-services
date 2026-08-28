import { Wind, Hammer, Cog } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Reveal } from "@/components/ui/Reveal";

const featured = [
  {
    icon: Wind,
    eyebrow: "Air Conditioning & Ventilation",
    title: "Comfort engineered for every space.",
    description:
      "We install and maintain air-conditioning, ventilation and air filtration systems, keeping indoor environments comfortable and running efficiently across Dubai's climate.",
    href: "/services/hvac",
    cta: "Explore HVAC",
  },
  {
    icon: Hammer,
    eyebrow: "Carpentry & Wood Flooring",
    title: "Craftsmanship in every detail.",
    description:
      "From fitted joinery to full flooring installations, our carpentry work is built around accurate measurement, considered material choices and a clean, level finish.",
    href: "/services/carpentry-wood-flooring",
    cta: "Explore Carpentry",
  },
  {
    icon: Cog,
    eyebrow: "Electromechanical Equipment",
    title: "The systems that keep a property running.",
    description:
      "We install and maintain the electromechanical equipment that supports a building's core systems, with routine inspection to keep faults from becoming disruptions.",
    href: "/services/electromechanical",
    cta: "Explore Electromechanical",
  },
];

export function FeaturedExpertise() {
  return (
    <section className="bg-brand-bg py-4 sm:py-6">
      {featured.map((item, i) => {
        const reversed = i % 2 === 1;
        const Icon = item.icon;
        return (
          <div key={item.href} className="container-edge py-14 sm:py-16">
            <div
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <PlaceholderVisual
                  icon={Icon}
                  label={item.eyebrow}
                  tone="dark"
                  className="relative aspect-[4/3] w-full rounded-lg sm:aspect-[16/10]"
                />
              </Reveal>
              <Reveal delay={0.12}>
                <Eyebrow>{item.eyebrow}</Eyebrow>
                <h3 className="mt-5 font-heading text-[30px] font-bold leading-[1.1] text-brand-black sm:text-[38px]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-brand-muted">
                  {item.description}
                </p>
                <div className="mt-7">
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
