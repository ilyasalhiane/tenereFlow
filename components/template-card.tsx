import Image from "next/image";
import Link from "next/link";
import { TemplateItem } from "@/data/templates";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TemplateCard({ template, onPreview }: { template: TemplateItem; onPreview: (template: TemplateItem) => void }) {
  return (
    <Card>
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <Image src={template.screenshots[0]} alt={`${template.title} template`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{template.title}</CardTitle>
          <Badge variant="warm">{template.priceRange}</Badge>
        </div>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">{template.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onPreview(template)}>Preview</Button>
          <Button asChild><Link href="/contact">Request this template</Link></Button>
        </div>
      </CardContent>
    </Card>
  );
}
