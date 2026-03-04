"use client";

import { FormEvent, useState } from "react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = ["Web Development", "SEO", "Template Customization", "Maintenance"];

export function ContactPageClient() {
  const { toast } = useToast();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    toast({ title: "Message sent", description: "We will reply within one business day." });
    form.reset();
    setSelected([]);
  };

  return (
    <Section title="Contact & Quote" subtitle="Tell us about your project and we will craft a tailored proposal.">
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-black/10 bg-white/80 p-6 md:grid-cols-2">
        <div><Label htmlFor="name">Name</Label><Input id="name" required /></div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
        <div><Label htmlFor="company">Company</Label><Input id="company" /></div>
        <div><Label htmlFor="budget">Budget Range</Label><Input id="budget" placeholder="$3k - $10k" required /></div>
        <div><Label htmlFor="timeline">Timeline</Label><Input id="timeline" placeholder="2-4 weeks" required /></div>
        <div>
          <Label>Services Needed</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {serviceOptions.map((service) => (
              <button type="button" key={service} onClick={() => toggle(service)} className={`rounded-full border px-3 py-1 text-sm ${selected.includes(service) ? "border-emerald bg-emerald/10" : "border-black/15"}`}>{service}</button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" required /></div>
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <Button type="submit">Send Request</Button>
          <Button variant="outline" asChild><a href="https://wa.me/000000000" target="_blank" rel="noreferrer">WhatsApp CTA</a></Button>
        </div>
      </form>
    </Section>
  );
}
