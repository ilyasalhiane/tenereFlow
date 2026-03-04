import Link from "next/link";
import { ShieldCheck, Smartphone, Gauge, Search, Rocket, ChartLine } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/template-card";
import { ProcessTimeline } from "@/components/process-timeline";
import { TestimonialCard } from "@/components/testimonial-card";

const trust = [
  [Gauge, "Fast Delivery"],
  [Search, "SEO-first"],
  [Smartphone, "Mobile-first"],
  [ShieldCheck, "Secure"],
  [ChartLine, "Analytics-ready"],
  [Rocket, "Growth-focused"]
];

const services = ["Business Websites", "E-commerce", "Booking Systems", "SEO Audits", "Local SEO", "Performance Optimization"];

export default function HomePage() {
  return (
    <>
      <Section className="zellige-bg relative overflow-hidden pt-20" arch>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Premium Moroccan-inspired websites that convert.</h1>
            <p className="mt-4 max-w-xl text-black/70">We craft high-performance web experiences and SEO systems for travel, hospitality, commerce, and service brands.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Get a Quote</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/templates">Preview Templates</Link></Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-gradient-to-br from-cobalt/15 via-white to-clay/15 p-8 shadow-soft">
            <div className="mx-auto h-72 max-w-xs rounded-t-[999px] border border-black/10 bg-white/70 p-6">
              <p className="text-sm text-black/60">Riad Arch Concept</p>
              <p className="mt-3 text-2xl font-semibold">Atlas-grade UX, Souk-level conversion.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {trust.map(([Icon, label]) => (
            <Card key={label}><CardContent className="flex items-center gap-2 p-4"><Icon className="h-4 w-4 text-emerald" /><span className="text-sm">{label}</span></CardContent></Card>
          ))}
        </div>
      </Section>

      <Section title="Services" subtitle="Web Development + SEO packages tailored for Moroccan and international businesses.">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service}><CardHeader><CardTitle className="text-lg">{service}</CardTitle></CardHeader></Card>
          ))}
        </div>
      </Section>

      <Section title="Template Gallery" subtitle="Pick a proven design foundation and customize it to your brand.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {templates.slice(0, 6).map((template) => <TemplateCard key={template.slug} template={template} onPreview={() => undefined} />)}
        </div>
      </Section>

      <Section title="Our Process" subtitle="A clear roadmap from concept to growth.">
        <ProcessTimeline />
      </Section>

      <Section title="Client Feedback">
        <div className="grid gap-4 md:grid-cols-3">
          <TestimonialCard quote="The team delivered a polished hotel website in two weeks and our direct bookings jumped instantly." author="Nadia B." role="Riad Manager" />
          <TestimonialCard quote="Their SEO strategy helped us rank for every target city route in under three months." author="Youssef T." role="Tour Operator" />
          <TestimonialCard quote="Elegant design, lightning-fast load times, and a premium brand feel." author="Samira A." role="Restaurant Owner" />
        </div>
      </Section>

      <Section className="zellige-bg">
        <Card className="bg-ink text-sand">
          <CardContent className="flex flex-col items-center justify-between gap-4 p-10 text-center md:flex-row md:text-left">
            <div>
              <p className="text-2xl font-semibold">Ready to launch your next digital experience?</p>
              <p className="text-sand/80">Let us build your site and growth engine in one streamlined project.</p>
            </div>
            <Button asChild variant="secondary"><Link href="/contact">Start your project</Link></Button>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
