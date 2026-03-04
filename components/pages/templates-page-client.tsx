"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/section";
import { templates, TemplateItem } from "@/data/templates";
import { TemplateCard } from "@/components/template-card";
import { TemplateFilters } from "@/components/template-filters";
import { TemplatePreviewModal } from "@/components/template-preview-modal";

export function TemplatesPageClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [selected, setSelected] = useState<TemplateItem | null>(null);

  const filtered = useMemo(() => {
    const base = templates.filter((template) => {
      const matchSearch = template.title.toLowerCase().includes(search.toLowerCase()) || template.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = category === "All" || template.category === category;
      return matchSearch && matchCategory;
    });

    return base.sort((a, b) => {
      if (sort === "newest") return +new Date(b.createdAt) - +new Date(a.createdAt);
      if (sort === "price") return a.priceRange.length - b.priceRange.length;
      return Number(Boolean(b.popular)) - Number(Boolean(a.popular));
    });
  }, [search, category, sort]);

  return (
    <Section title="Template Marketplace" subtitle="Browse templates like premium travel packages.">
      <TemplateFilters search={search} category={category} sort={sort} onSearch={setSearch} onCategory={setCategory} onSort={setSort} />
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template) => <TemplateCard key={template.slug} template={template} onPreview={setSelected} />)}
      </div>
      <TemplatePreviewModal template={selected} open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)} />
    </Section>
  );
}
