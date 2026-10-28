import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import MobileActionBar from "@/components/MobileActionBar";
import VipPrompt from "@/components/VipPrompt";
import AnnouncementBar from "@/components/AnnouncementBar";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lakes Floral Gift & Garden — Forest Lake florist since 1930 · Same-day delivery",
    template: "%s · Lakes Floral Gift & Garden, Forest Lake MN",
  },
  description:
    "Forest Lake's family florist since 1930. Same-day flower delivery 7 days a week across Forest Lake and the Twin Cities metro, an onsite greenhouse, a gift shop and seasonal DIY workshops. Rated 4.9 on Google.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f3f2ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable}`}>
      <body className="min-h-dvh antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] btn btn-primary">
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <VipPrompt />
        <JsonLd />
      </body>
    </html>
  );
}
