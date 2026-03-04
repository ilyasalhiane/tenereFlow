export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  summary: string;
  impact: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "riad-azur",
    client: "Riad Azur Marrakech",
    sector: "Hospitality",
    summary: "Redesigned booking journey with bilingual content and structured data for rooms.",
    impact: ["+84% direct bookings", "Core Web Vitals all green", "Top 3 for 'riad marrakech spa'"]
  },
  {
    slug: "atlas-transfer",
    client: "Atlas Transfer Co.",
    sector: "Tourism Logistics",
    summary: "Launched custom quote calculator and route pages targeting long-tail keywords.",
    impact: ["+210% organic leads", "37 indexed landing pages", "CPA down 42%"]
  },
  {
    slug: "saffron-table",
    client: "Saffron Table",
    sector: "Restaurant",
    summary: "Built menu-first mobile UX and local SEO strategy for high-intent neighborhood searches.",
    impact: ["+63% reservation requests", "4.9★ Google profile growth", "LCP improved from 4.6s to 1.9s"]
  }
];
