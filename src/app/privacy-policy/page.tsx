import type { Metadata } from "next";
import { company } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${company.legalName}, explaining how we collect and use information submitted through this website.`,
  path: "/privacy-policy",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader breadcrumbItems={breadcrumbItems} title="Privacy Policy" />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge max-w-3xl space-y-10">
          <p className="text-[14px] text-brand-muted">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">1. Introduction</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              {company.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy.
              This Privacy Policy explains what information we collect through
              this website, how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">2. Information We Collect</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              When you submit a quote request or contact form, we collect the
              information you provide directly — such as your name, phone
              number, email address, property location and project details.
              We do not knowingly collect information beyond what you submit
              to us.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">3. How We Use Your Information</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              Information submitted through this website is used solely to
              respond to your enquiry, prepare a quotation and coordinate any
              requested service. We do not sell or rent your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">4. Contact Methods</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              Submitting the quote form on this website opens a pre-filled
              email or WhatsApp message on your own device, addressed to us.
              We receive only what you choose to send.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">5. Data Retention</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              We retain enquiry information only for as long as necessary to
              respond to your request and, where applicable, deliver the
              service requested.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">6. Your Rights</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              You may request access to, correction of, or deletion of
              personal information you have submitted to us by contacting us
              using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[22px] font-bold text-brand-black">7. Contact Us</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
              For any questions about this Privacy Policy, contact us at{" "}
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
