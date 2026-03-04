import Link from "next/link";

export function Footer() {
  return (
    <footer className="zellige-bg mt-20 border-t border-black/10">
      <div className="container grid gap-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-semibold">TenereFlow Studio</p>
          <p className="mt-2 text-sm text-black/70">Premium Moroccan-inspired web development and SEO services.</p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-3 space-y-1 text-sm">
            <Link className="block hover:underline" href="/services">Services</Link>
            <Link className="block hover:underline" href="/templates">Templates</Link>
            <Link className="block hover:underline" href="/pricing">Pricing</Link>
            <Link className="block hover:underline" href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Based in Morocco</p>
          <p className="mt-2 text-sm text-black/70">Marrakech • Casablanca • Remote worldwide</p>
        </div>
      </div>
    </footer>
  );
}
