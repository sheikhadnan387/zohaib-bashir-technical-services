"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { company } from "@/lib/company";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  location: string;
  details: string;
  contactMethod: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  location: "",
  details: "",
  contactMethod: "Phone",
};

const inputClasses =
  "focus-ring w-full rounded-[6px] border border-brand-black/15 bg-white px-4 py-3 text-[14.5px] text-brand-black placeholder:text-brand-black/35 transition-colors focus:border-brand-orange";
const labelClasses = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-black/55";

function buildMessage(form: FormState) {
  const serviceName = services.find((s) => s.slug === form.service)?.name ?? "Not specified";
  return [
    `New quote request — ${company.legalName}`,
    ``,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "Not provided"}`,
    `Service: ${serviceName}`,
    `Property Type: ${form.propertyType}`,
    `Location: ${form.location}`,
    `Preferred Contact Method: ${form.contactMethod}`,
    ``,
    `Project Details:`,
    form.details,
  ].join("\n");
}

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!/^[0-9+\s()-]{7,}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.propertyType) next.propertyType = "Please select a property type.";
    if (!form.location.trim()) next.location = "Please enter the property location.";
    if (!form.details.trim() || form.details.trim().length < 10)
      next.details = "Please describe the project in a few words.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    const message = buildMessage(form);
    const mailto = `${company.emailHref}?subject=${encodeURIComponent(
      `Quote Request — ${form.name}`
    )}&body=${encodeURIComponent(message)}`;
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- mailto: link, not an internal route
    window.location.href = mailto;
    setStatus("success");
  }

  const whatsappHref = `${company.whatsappHref}?text=${encodeURIComponent(buildMessage(form))}`;

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-black/10 bg-white p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-orange" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-[22px] font-bold text-brand-black">
          Your email app should now be open
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-brand-muted">
          We&rsquo;ve prepared your quote request for {company.email}. If your
          email app didn&rsquo;t open, you can send the same details to us on
          WhatsApp instead.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#25D366] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Send via WhatsApp
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="focus-ring mt-4 block w-full text-[13px] font-medium text-brand-black/50 hover:text-brand-orange"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-[6px] border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Please check the highlighted fields below and try again.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">Name</label>
          <input id="name" className={inputClasses} value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="mt-1.5 text-[12.5px] text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className={inputClasses} value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <p id="phone-error" className="mt-1.5 text-[12.5px] text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">Email (optional)</label>
        <input id="email" type="email" className={inputClasses} value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email && <p id="email-error" className="mt-1.5 text-[12.5px] text-red-600">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="service">Service</label>
          <select id="service" className={inputClasses} value={form.service} onChange={(e) => update("service", e.target.value)} aria-invalid={!!errors.service}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.shortName}</option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.service && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.service}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="propertyType">Property Type</label>
          <select id="propertyType" className={inputClasses} value={form.propertyType} onChange={(e) => update("propertyType", e.target.value)} aria-invalid={!!errors.propertyType}>
            <option value="">Select property type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
          {errors.propertyType && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.propertyType}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="location">Location</label>
        <input id="location" placeholder="e.g. Dubai Marina, Business Bay" className={inputClasses} value={form.location} onChange={(e) => update("location", e.target.value)} aria-invalid={!!errors.location} />
        {errors.location && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.location}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="details">Project Details</label>
        <textarea id="details" rows={4} className={inputClasses} value={form.details} onChange={(e) => update("details", e.target.value)} aria-invalid={!!errors.details} />
        {errors.details && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.details}</p>}
      </div>

      <fieldset>
        <legend className={labelClasses}>Preferred Contact Method</legend>
        <div className="flex flex-wrap gap-3">
          {["Phone", "WhatsApp", "Email"].map((method) => (
            <label
              key={method}
              className={`focus-ring cursor-pointer rounded-[6px] border px-4 py-2.5 text-[13.5px] transition-colors ${
                form.contactMethod === method
                  ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                  : "border-brand-black/15 text-brand-black/70 hover:border-brand-black/30"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={form.contactMethod === method}
                onChange={(e) => update("contactMethod", e.target.value)}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="focus-ring w-full rounded-[6px] bg-brand-orange px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-orange-deep sm:w-auto"
      >
        Request a Quote
      </button>
    </form>
  );
}
