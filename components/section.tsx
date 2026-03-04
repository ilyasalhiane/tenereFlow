import { cn } from "@/lib/utils";

export function Section({ id, title, subtitle, children, arch = false, className }: { id?: string; title?: string; subtitle?: string; children: React.ReactNode; arch?: boolean; className?: string }) {
  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      <div className="container">
        {title ? <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2> : null}
        {subtitle ? <p className="mt-3 max-w-2xl text-black/70">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
      {arch ? <div className="mx-auto mt-12 h-10 w-60 rounded-t-full border border-b-0 border-black/10 bg-white/40" /> : null}
    </section>
  );
}
