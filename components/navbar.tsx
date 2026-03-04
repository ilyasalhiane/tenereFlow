"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/seo", "SEO"],
  ["/templates", "Templates"],
  ["/case-studies", "Case Studies"],
  ["/pricing", "Pricing"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-sand/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">TenereFlow Studio</Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={cn("rounded-full px-3 py-2 text-sm", pathname === href ? "bg-ink text-sand" : "hover:bg-black/5")}>{label}</Link>
          ))}
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline" size="sm"><Menu className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {links.map(([href, label]) => (
                <DropdownMenuItem key={href} asChild><Link href={href}>{label}</Link></DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
