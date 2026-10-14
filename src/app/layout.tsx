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
    "Professional shampoo cleaning, painting, AC services and flooring work for residential and commercial properties across Dubai.",
  keywords: [
    "Technical Services Dubai",
    "Shampoo Cleaning Dubai",
    "AC Services Dubai",
    "Painting Services Dubai",
    "Flooring Services Dubai",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: company.legalName,
    title: `${company.legalName} | Technical Services Dubai`,
    description:
      "Professional shampoo cleaning, painting, AC services and flooring work for residential and commercial properties across Dubai.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.legalName} | Technical Services Dubai`,
    description:
      "Shampoo cleaning, painting, AC services and flooring work across Dubai.",
  },
  icons: {
    icon: "/logo/favicon.svg",
    shortcut: "/logo/favicon.svg",
    apple: "/logo/favicon.svg",
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
