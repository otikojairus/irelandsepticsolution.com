import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteFooter, SiteHeader, StickyMobileCta } from "@/components/site-chrome";
import { StickyWhatsAppWidget } from "@/components/whatsapp-widget";
import { absoluteUrl, SITE_NAME } from "@/lib/pages";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"], display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: "600", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: { default: "Septic Tank Services Ireland | Ireland Septic Solutions", template: "%s" },
  description: "Septic tank emptying, cleaning, maintenance, and repair across the Republic of Ireland. Call to book a visit.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: SITE_NAME,
    title: "Ireland Septic Solutions | Emptying & Repair",
    description: "National septic services with city and county guides across Ireland.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IE" className={`${body.variable} ${display.variable}`}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <StickyMobileCta />
        <StickyWhatsAppWidget />
      </body>
    </html>
  );
}
