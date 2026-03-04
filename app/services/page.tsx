import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = { title: "Services | TenereFlow Studio", description: "Web development and SEO services for high-growth brands." };

const web = ["Next.js/React architecture", "CMS-ready integrations", "Booking systems", "Multilingual-ready setup", "Analytics dashboard", "Security hardening"];
const seo = ["Core Web Vitals optimization", "Indexing and crawl strategy", "Schema markup", "Image alt strategy", "Google Business optimization", "Keyword cluster content plans"];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development and SEO",
    provider: { "@type": "Organization", name: "TenereFlow Studio" }
  };

  return (
    <Section title="Services" subtitle="Full-stack design, development, and growth support.">
      <Tabs defaultValue="web">
        <TabsList>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>
        <TabsContent value="web" className="mt-6">
          <Card><CardHeader><CardTitle>Web Development</CardTitle></CardHeader><CardContent className="space-y-2 text-sm">{web.map((item) => <p key={item}>• {item}</p>)}</CardContent></Card>
        </TabsContent>
        <TabsContent value="seo" className="mt-6">
          <Card><CardHeader><CardTitle>SEO Services</CardTitle></CardHeader><CardContent className="space-y-2 text-sm">{seo.map((item) => <p key={item}>• {item}</p>)}</CardContent></Card>
        </TabsContent>
      </Tabs>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </Section>
  );
}
