"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TemplateItem } from "@/data/templates";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function TemplatePreviewModal({ template, open, onOpenChange }: { template: TemplateItem | null; open: boolean; onOpenChange: (value: boolean) => void }) {
  const [index, setIndex] = useState(0);
  if (!template) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>{template.title}</DialogTitle>
        <DialogDescription>{template.description}</DialogDescription>
        <div className="relative mt-4 h-72 overflow-hidden rounded-xl">
          <Image src={template.screenshots[index]} alt={`${template.title} screenshot ${index + 1}`} fill className="object-cover" />
          <div className="absolute inset-x-4 bottom-4 flex justify-between">
            <Button size="sm" variant="outline" onClick={() => setIndex((prev) => (prev === 0 ? template.screenshots.length - 1 : prev - 1))}><ChevronLeft className="h-4 w-4" /></Button>
            <Button size="sm" variant="outline" onClick={() => setIndex((prev) => (prev + 1) % template.screenshots.length)}><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-black/70">{template.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><Link href={`/templates/${template.slug}`}>Open Live Preview</Link></Button>
          <Button variant="outline" asChild><Link href="/contact">Request this Template</Link></Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
