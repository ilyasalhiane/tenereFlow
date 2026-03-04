import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PricingCard({ name, delivery, pages, seo, support, addons, featured = false }: { name: string; delivery: string; pages: string; seo: string; support: string; addons: string; featured?: boolean }) {
  return (
    <Card className={featured ? "border-emerald" : ""}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {[`Delivery: ${delivery}`, `Pages: ${pages}`, `SEO: ${seo}`, `Support: ${support}`, `Add-ons: ${addons}`].map((item) => (
          <p key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald" />{item}</p>
        ))}
        <Button className="mt-3 w-full">Choose {name}</Button>
      </CardContent>
    </Card>
  );
}
