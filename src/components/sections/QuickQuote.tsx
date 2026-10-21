"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { ChevronDown, Minus, Plus, Phone } from "lucide-react";
import { company, serviceAreas } from "@/lib/company";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";

type PropertyType = "Apartment" | "Villa" | "Office / Commercial";

const propertyTypes: PropertyType[] = ["Apartment", "Villa", "Office / Commercial"];

const sizesFor: Record<PropertyType, string[]> = {
  Apartment: ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4+ Bedroom"],
  Villa: ["2 Bedroom", "3 Bedroom", "4 Bedroom", "5+ Bedroom"],
  "Office / Commercial": ["Small (under 100 sqm)", "Medium (100–300 sqm)", "Large (300+ sqm)"],
};

const paintingScopes = ["Whole property", "Some rooms", "A few walls"];
const acNeeds = ["Service / cleaning", "Not cooling / repair", "New installation", "Duct cleaning"];
const flooringTypes = ["Parquet", "Laminate", "Vinyl", "Repair / polish existing"];
const cleaningItems = ["Sofa seats", "Carpets / rugs", "Mattresses", "Curtains"] as const;
const timings = ["As soon as possible", "Tomorrow", "This week", "I'm flexible"];

/* ---------- small building blocks ---------- */

function Chip({
  name,
  value,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <label
      className={clsx(
        "cursor-pointer select-none rounded-full border px-4 py-2.5 text-[14.5px] font-medium transition-colors",
        "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-orange",
        checked
          ? "border-brand-orange bg-brand-orange text-brand-black"
          : "border-brand-black/15 bg-white text-brand-black/80 hover:border-brand-black/35"
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {value}
    </label>
  );
}

function ChipGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-black/60">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <Chip key={o} name={name} value={o} checked={value === o} onChange={onChange} />
        ))}
      </div>
    </fieldset>
  );
}

function Stepper({
  label,
  value,
  onChange,
  max = 20,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-brand-black/10 bg-white px-4 py-2.5">
      <span className="text-[15px] text-brand-black/80">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          disabled={value === 0}
          aria-label={`Fewer ${label.toLowerCase()}`}
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-brand-black/15 text-brand-black disabled:opacity-30"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <span className="w-6 text-center text-[16px] font-semibold tabular-nums" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value === max}
          aria-label={`More ${label.toLowerCase()}`}
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-brand-black/15 text-brand-black disabled:opacity-30"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/* ---------- main component ---------- */

export function QuickQuote({ initialService, initialArea }: { initialService?: string; initialArea?: string }) {
  const startSlug = services.some((s) => s.slug === initialService) ? initialService! : services[0].slug;

  const [serviceSlug, setServiceSlug] = useState(startSlug);
  const [propertyType, setPropertyType] = useState<PropertyType>("Apartment");
  const [size, setSize] = useState(sizesFor.Apartment[0]);
  const [paintScope, setPaintScope] = useState(paintingScopes[0]);
  const [ceilings, setCeilings] = useState(false);
  const [acUnits, setAcUnits] = useState(1);
  const [acNeed, setAcNeed] = useState(acNeeds[0]);
  const [floorType, setFloorType] = useState(flooringTypes[0]);
  const [floorArea, setFloorArea] = useState("");
  const [items, setItems] = useState<Record<(typeof cleaningItems)[number], number>>({
    "Sofa seats": 3,
    "Carpets / rugs": 0,
    Mattresses: 0,
    Curtains: 0,
  });
  const [area, setArea] = useState(initialArea ?? "");
  const [timing, setTiming] = useState(timings[0]);

  const service = services.find((s) => s.slug === serviceSlug)!;

  function changeProperty(p: string) {
    const type = p as PropertyType;
    setPropertyType(type);
    setSize(sizesFor[type][0]);
  }

  // Service-specific lines for the summary and the WhatsApp message.
  const details = useMemo(() => {
    switch (serviceSlug) {
      case "painting-services":
        return [`Scope: ${paintScope}`, ceilings ? "Ceilings included" : "Walls only"];
      case "ac-repair-maintenance":
        return [`AC units: ${acUnits}`, `Need: ${acNeed}`];
      case "parquet-wooden-flooring":
        return [`Flooring: ${floorType}`, floorArea ? `Approx. area: ${floorArea} sqm` : "Area: to be measured"];
      case "sofa-carpet-cleaning": {
        const chosen = cleaningItems.filter((i) => items[i] > 0).map((i) => `${i}: ${items[i]}`);
        return chosen.length ? chosen : ["Items: to be confirmed"];
      }
      default:
        return [];
    }
  }, [serviceSlug, paintScope, ceilings, acUnits, acNeed, floorType, floorArea, items]);

  // Only client-confirmed prices are shown.
  const isStudioWalls =
    serviceSlug === "painting-services" &&
    propertyType === "Apartment" &&
    size === "Studio" &&
    paintScope === "Whole property" &&
    !ceilings;
  const priceHint = isStudioWalls
    ? { big: "From AED 350", small: "Studio wall painting. Final price confirmed after a quick look at the walls." }
    : service.startingPrice
      ? { big: "Fixed quote on WhatsApp", small: `${service.startingPrice}. Your size and scope are priced individually.` }
      : { big: "Fixed quote on WhatsApp", small: "Every job gets a fixed written quote. No hidden charges." };

  const lines = [
    `Service: ${service.shortName}`,
    `Property: ${propertyType}, ${size}`,
    ...details,
    `Area: ${area || "Not specified"}`,
    `When: ${timing}`,
  ];

  const message = `Hi, I'd like a quote.\n\n${lines.join("\n")}`;
  const whatsappUrl = `${company.whatsappHref}?text=${encodeURIComponent(message)}`;

  return (
    <section id="quick-quote" className="scroll-mt-[var(--header-h)] bg-brand-bg py-14 sm:py-20 lg:py-24">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Quick Quote"
          title="Get Your Price on WhatsApp"
          description={`Answer a few quick questions and send them to us in one tap. We reply every day, ${company.whatsappHours}.`}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* Questions */}
          <form
            className="space-y-8 rounded-xl border border-brand-black/10 bg-white p-5 sm:p-8 lg:col-span-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset>
              <legend className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-black/60">
                1. What do you need?
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <label
                    key={s.slug}
                    className={clsx(
                      "cursor-pointer rounded-lg border px-4 py-3.5 text-[15px] font-semibold transition-colors",
                      "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-orange",
                      serviceSlug === s.slug
                        ? "border-brand-orange bg-brand-orange text-brand-black"
                        : "border-brand-black/15 text-brand-black/80 hover:border-brand-black/35"
                    )}
                  >
                    <input
                      type="radio"
                      name="qq-service"
                      value={s.slug}
                      checked={serviceSlug === s.slug}
                      onChange={() => setServiceSlug(s.slug)}
                      className="sr-only"
                    />
                    {s.shortName}
                  </label>
                ))}
              </div>
            </fieldset>

            <ChipGroup
              legend="2. Property type"
              name="qq-property"
              options={propertyTypes}
              value={propertyType}
              onChange={changeProperty}
            />

            <ChipGroup legend="3. Size" name="qq-size" options={sizesFor[propertyType]} value={size} onChange={setSize} />

            {/* 4. Service-specific question */}
            {serviceSlug === "painting-services" && (
              <div className="space-y-4">
                <ChipGroup
                  legend="4. What should we paint?"
                  name="qq-paint"
                  options={paintingScopes}
                  value={paintScope}
                  onChange={setPaintScope}
                />
                <label className="flex cursor-pointer items-center gap-3 text-[15px] text-brand-black/80">
                  <input
                    type="checkbox"
                    checked={ceilings}
                    onChange={(e) => setCeilings(e.target.checked)}
                    className="h-5 w-5 accent-[var(--color-brand-orange)]"
                  />
                  Include ceilings
                </label>
              </div>
            )}

            {serviceSlug === "ac-repair-maintenance" && (
              <div className="space-y-4">
                <ChipGroup legend="4. What's needed?" name="qq-ac" options={acNeeds} value={acNeed} onChange={setAcNeed} />
                <Stepper label="Number of AC units" value={acUnits} onChange={(n) => setAcUnits(Math.max(1, n))} />
              </div>
            )}

            {serviceSlug === "parquet-wooden-flooring" && (
              <div className="space-y-4">
                <ChipGroup
                  legend="4. Flooring type"
                  name="qq-floor"
                  options={flooringTypes}
                  value={floorType}
                  onChange={setFloorType}
                />
                <label className="block">
                  <span className="text-[14px] text-brand-black/70">Approximate area in sqm (optional)</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={floorArea}
                    onChange={(e) => setFloorArea(e.target.value)}
                    placeholder="e.g. 45"
                    className="focus-ring mt-2 w-full rounded-lg border border-brand-black/15 px-4 py-3 text-[16px]"
                  />
                </label>
              </div>
            )}

            {serviceSlug === "sofa-carpet-cleaning" && (
              <fieldset>
                <legend className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-black/60">
                  4. What should we clean?
                </legend>
                <div className="mt-3 space-y-2">
                  {cleaningItems.map((i) => (
                    <Stepper
                      key={i}
                      label={i}
                      value={items[i]}
                      onChange={(n) => setItems((prev) => ({ ...prev, [i]: n }))}
                    />
                  ))}
                </div>
              </fieldset>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-black/60">
                  5. Your area
                </span>
                <div className="relative mt-3">
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="focus-ring w-full cursor-pointer appearance-none rounded-lg border border-brand-black/15 bg-white py-3 pl-4 pr-11 text-[16px]"
                  >
                    <option value="">Select area</option>
                    {serviceAreas.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                    <option value="Other area in Dubai">Other area in Dubai</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-black/50" aria-hidden="true" />
                </div>
              </label>
              <label className="block">
                <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-black/60">
                  6. When?
                </span>
                <div className="relative mt-3">
                  <select
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    className="focus-ring w-full cursor-pointer appearance-none rounded-lg border border-brand-black/15 bg-white py-3 pl-4 pr-11 text-[16px]"
                  >
                    {timings.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-black/50" aria-hidden="true" />
                </div>
              </label>
            </div>
          </form>

          {/* Summary */}
          <aside className="lg:col-span-5">
            <div className="rounded-xl bg-brand-black p-6 text-white sm:p-8 lg:sticky lg:top-[calc(var(--header-h)+24px)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-orange">Your request</p>
              <p className="mt-3 font-heading text-[28px] font-bold leading-tight sm:text-[32px]" aria-live="polite">
                {priceHint.big}
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/70">{priceHint.small}</p>

              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-[15px] text-white/85">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-7 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-4 text-[16px] font-bold text-brand-black transition-colors hover:bg-[#1ebe5b]"
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Send on WhatsApp
              </a>
              <a
                href={company.phoneHref}
                className="focus-ring mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Or call {company.phoneDisplay}
              </a>
              <p className="mt-4 text-[13px] leading-relaxed text-white/60">
                Fixed written quote before any work starts. Not happy? Tell us within 48 hours and we fix it free.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
