import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/contact-page-client";

export const metadata: Metadata = { title: "Contact | TenereFlow Studio", description: "Request a quote for web development and SEO services." };

export default function ContactPage() {
  return <ContactPageClient />;
}
