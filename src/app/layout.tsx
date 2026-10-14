import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Technical Services Dubai | AC, Painting, Cleaning & Flooring",
    template: `%s | ${company.shortName}`,
  },
  description:
    "Licensed Dubai technical services company: AC repair & maintenance, painting, sofa & carpet cleaning and parquet & wooden flooring for homes and offices.",
  keywords: [
    "Technical Services Dubai",
    "AC Repair Dubai",
    "Painting Services Dubai",
    "Sofa Cleaning Dubai",
    "Carpet Cleaning Dubai",
    "Flooring Dubai",
    "Parquet Flooring Dubai",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: company.legalName,
    title: `${company.legalName} | Technical Services Dubai`,
    description:
      "Licensed Dubai technical services company: AC repair & maintenance, painting, sofa & carpet cleaning and parquet & wooden flooring for homes and offices.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.legalName} | Technical Services Dubai`,
    description:
      "AC repair, painting, sofa & carpet cleaning and parquet flooring across Dubai.",
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
        <main id="main-content" className="pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
