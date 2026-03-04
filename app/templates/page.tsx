import type { Metadata } from "next";
import { TemplatesPageClient } from "@/components/pages/templates-page-client";

export const metadata: Metadata = { title: "Templates | TenereFlow Studio", description: "Preview Moroccan-inspired premium website templates." };

export default function TemplatesPage() {
  return <TemplatesPageClient />;
}
