import { notFound } from "next/navigation";
import { templates } from "@/data/templates";

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) return notFound();

  return (
    <div className="zellige-bg min-h-screen p-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-black/10 bg-white p-10">
        <p className="text-sm text-black/60">Demo Preview</p>
        <h1 className="mt-2 text-4xl font-semibold">{template.title}</h1>
        <p className="mt-3 max-w-2xl text-black/70">{template.description}</p>
      </div>
    </div>
  );
}
