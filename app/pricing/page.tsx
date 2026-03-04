import type { Metadata } from "next";
import { Section } from "@/components/section";
import { PricingCard } from "@/components/pricing-card";

export const metadata: Metadata = { title: "Pricing | TenereFlow Studio" };

export default function PricingPage() {
  return (
    <Section title="Pricing Packages" subtitle="Tour-inspired offers designed for different growth stages.">
      <div className="grid gap-5 md:grid-cols-3">
        <PricingCard name="Souk Starter" delivery="10 days" pages="Up to 5" seo="Setup + metadata" support="14 days" addons="Blog & extra pages" />
        <PricingCard name="Kasbah Business" delivery="14 days" pages="Up to 10" seo="Technical + local SEO" support="30 days" addons="Booking engine" featured />
        <PricingCard name="Atlas Pro" delivery="21 days" pages="Unlimited core templates" seo="Full strategy + content plan" support="60 days" addons="Quarterly growth sprint" />
      </div>
    </Section>
  );
}
