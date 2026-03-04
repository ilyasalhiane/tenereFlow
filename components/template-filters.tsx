"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TemplateCategory } from "@/data/templates";

const categories: (TemplateCategory | "All")[] = ["All", "Tourism & Travel", "Riad / Hotel", "Restaurant", "Agency / Corporate", "E-commerce", "Portfolio"];

export function TemplateFilters({ search, category, sort, onSearch, onCategory, onSort }: { search: string; category: string; sort: string; onSearch: (value: string) => void; onCategory: (value: string) => void; onSort: (value: string) => void }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Input aria-label="Search templates" value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Search templates..." />
      <Select value={category} onValueChange={onCategory}>
        <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
        <SelectContent>
          {categories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={sort} onValueChange={onSort}>
        <SelectTrigger><SelectValue placeholder="Sort" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="price">Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
