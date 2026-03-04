import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SEOReportSnapshot() {
  const metrics = [
    ["Performance", "96"],
    ["SEO", "98"],
    ["Accessibility", "100"],
    ["Best Practices", "95"]
  ];

  return (
    <Card>
      <CardHeader><CardTitle>SEO Audit Snapshot</CardTitle></CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-black/5 p-4">
            <p className="text-sm text-black/60">{label}</p>
            <p className="text-2xl font-semibold text-emerald">{value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
