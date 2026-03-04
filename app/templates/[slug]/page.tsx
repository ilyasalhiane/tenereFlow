import { notFound } from "next/navigation";
import { templates } from "@/data/templates";
import { Section } from "@/components/section";
import { TemplateLivePreview } from "@/components/template-live-preview";

export default async function TemplateSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) return notFound();

  return (
    <Section title={template.title} subtitle={template.description}>
      <TemplateLivePreview template={template} />
    </Section>
  );
}
