import { Card, CardContent } from "@/components/ui/card";

export function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-black/80">“{quote}”</p>
        <p className="mt-4 font-semibold">{author}</p>
        <p className="text-sm text-black/60">{role}</p>
      </CardContent>
    </Card>
  );
}
