import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Case Studies | TenereFlow Studio" };

export default function CaseStudiesPage() {
  return (
    <Section title="Case Studies" subtitle="Selected outcomes from hospitality, tourism, and food brands.">
      <div className="grid gap-5 md:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.slug}>
            <CardHeader><CardTitle>{study.client}</CardTitle><p className="text-sm text-black/60">{study.sector}</p></CardHeader>
            <CardContent>
              <p className="text-sm text-black/70">{study.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{study.impact.map((item) => <li key={item}>{item}</li>)}</ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
