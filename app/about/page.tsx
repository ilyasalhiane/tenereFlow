import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = { title: "About | TenereFlow Studio" };

export default function AboutPage() {
  return (
    <Section title="About TenereFlow" subtitle="A Moroccan design and engineering studio blending heritage aesthetics with modern web performance.">
      <div className="max-w-3xl space-y-4 text-black/80">
        <p>We are product designers, developers, and SEO strategists focused on delivering premium digital experiences with measurable impact.</p>
        <p>Our inspiration comes from zellige craft, riad architecture, and desert color stories—translated into clean interfaces and fast, accessible code.</p>
      </div>
    </Section>
  );
}
