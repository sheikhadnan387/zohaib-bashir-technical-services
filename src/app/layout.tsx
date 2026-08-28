import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { company } from "@/lib/company";
import { localBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.legalName} | Technical Services Dubai`,
    template: `%s | ${company.legalName}`,
  },
  description:
    "Professional technical installation, maintenance and property services for residential and commercial properties across Dubai — HVAC, carpentry, tiling, pools, cleaning, painting, aluminum & glass, electromechanical and network services.",
  keywords: [
    "Technical Services Dubai",
    "Technical Maintenance Dubai",
    "HVAC Maintenance Dubai",
    "AC Maintenance Dubai",
    "Carpentry Services Dubai",
    "Swimming Pool Maintenance Dubai",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: company.legalName,
    title: `${company.legalName} | Technical Services Dubai`,
    description:
      "Professional technical installation, maintenance and property services for residential and commercial properties across Dubai.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.legalName} | Technical Services Dubai`,
    description:
      "Professional technical installation, maintenance and property services across Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-[6px] bg-brand-orange px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="pt-[84px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
