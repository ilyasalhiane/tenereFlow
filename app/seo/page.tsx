import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SEOReportSnapshot } from "@/components/seo-report-snapshot";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = { title: "SEO Services | TenereFlow Studio", description: "Technical, local, and on-page SEO tailored for Moroccan brands." };

export default function SEOPage() {
  return (
    <Section title="SEO Growth Programs" subtitle="Technical precision meets content strategy.">
      <SEOReportSnapshot />
      <div className="mt-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="technical"><AccordionTrigger>Technical SEO</AccordionTrigger><AccordionContent>Core Web Vitals, index hygiene, schema markup, sitemap tuning, and internal linking architecture.</AccordionContent></AccordionItem>
          <AccordionItem value="onpage"><AccordionTrigger>On-Page SEO</AccordionTrigger><AccordionContent>Heading structures, semantic content templates, metadata workflows, and image optimization strategy.</AccordionContent></AccordionItem>
          <AccordionItem value="local"><AccordionTrigger>Local SEO</AccordionTrigger><AccordionContent>Google Business Profile management, local citations, review strategy, and geo-intent landing pages.</AccordionContent></AccordionItem>
          <AccordionItem value="content"><AccordionTrigger>Content Strategy</AccordionTrigger><AccordionContent>Editorial calendar, keyword clusters, topical authority roadmaps, and conversion-focused briefs.</AccordionContent></AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
