"use client";

import { useState } from "react";
import Link from "next/link";
import { Maximize2, Minimize2 } from "lucide-react";
import { TemplateItem } from "@/data/templates";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function TemplateLivePreview({ template }: { template: TemplateItem }) {
  const [full, setFull] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className={full ? "fixed inset-0 z-50 bg-black p-6" : ""}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-2">{template.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
          <Button variant="outline" onClick={() => setFull((prev) => !prev)}>{full ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />} {full ? "Exit" : "Full Screen Preview"}</Button>
        </div>
        <iframe src={template.previewUrl} title={`${template.title} live preview`} className="h-[70vh] w-full rounded-2xl border border-black/10 bg-white" />
      </div>

      {!full ? (
        <Card className="h-fit lg:sticky lg:top-24">
          <CardContent className="space-y-3 p-6 text-sm">
            <p><strong>Tech Stack:</strong> Next.js, Tailwind, shadcn/ui</p>
            <p><strong>Delivery:</strong> {template.delivery}</p>
            <p><strong>SEO add-on:</strong> Technical + local setup</p>
            <p><strong>Features:</strong></p>
            <ul className="list-disc pl-5">{template.features.map((item) => <li key={item}>{item}</li>)}</ul>
            <Button asChild className="w-full"><Link href="/contact">Request this Template</Link></Button>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
