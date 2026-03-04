import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { ToastProvider } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tenereflow.example.com"),
  title: "TenereFlow Studio | Moroccan Web Development & SEO Agency",
  description: "Premium web development and SEO services inspired by Moroccan craft, built with modern performance-first technology.",
  openGraph: {
    title: "TenereFlow Studio",
    description: "Moroccan-inspired websites and SEO growth systems.",
    url: "https://tenereflow.example.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TenereFlow Studio",
    description: "Modern web and SEO services for ambitious Moroccan and global brands."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TenereFlow Studio",
    image: "https://tenereflow.example.com/og-image.jpg",
    address: { "@type": "PostalAddress", addressCountry: "MA" },
    areaServed: ["Morocco", "Global"],
    sameAs: ["https://www.linkedin.com"],
    url: "https://tenereflow.example.com"
  };

  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body className="font-[var(--font-inter)]">
        <ToastProvider>
          <SiteShell>{children}</SiteShell>
          <Toaster />
        </ToastProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
