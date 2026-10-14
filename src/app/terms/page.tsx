import type { Metadata } from "next";
import { company } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and Conditions for the use of ${company.legalName}'s website and services.`,
  path: "/terms",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader breadcrumbItems={breadcrumbItems} title="Terms & Conditions" />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge max-w-3xl space-y-10">
          <p className="text-[15px] text-brand-muted">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">1. About This Website</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              This website is operated by {company.legalName}, a Sole
              Establishment registered in Dubai, United Arab Emirates under
              License No. {company.licenseNo}. By using this website, you
              agree to these Terms &amp; Conditions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">2. Services Described</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              Service descriptions on this website are provided for general
              information purposes. Final scope, pricing and timelines for
              any project are confirmed directly with you following an
              enquiry or site assessment, and are not binding until agreed
              separately in writing or verbally between the parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">3. Quote Requests</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              Submitting a quote request through this website does not
              create a binding agreement. A quotation becomes valid only
              once it has been issued and accepted by both parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">4. Website Content</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              Project imagery and listings marked as placeholder or demo
              content illustrate the categories of work we undertake and do
              not represent completed client projects unless stated
              otherwise.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">5. Limitation of Liability</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              While we take care to keep information on this website
              accurate and up to date, we make no warranties about the
              completeness or accuracy of website content and are not liable
              for any loss arising from its use.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">6. Governing Law</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              These Terms &amp; Conditions are governed by the laws of the
              United Arab Emirates and the Emirate of Dubai.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">7. Contact Us</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-black/70">
              Questions about these terms can be directed to{" "}
              <a href={company.emailHref} className="text-brand-orange hover:underline">
                {company.email}
              </a>{" "}
              or {company.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
