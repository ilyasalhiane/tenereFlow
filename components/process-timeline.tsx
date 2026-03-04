"use client";

import { motion } from "framer-motion";

const steps = ["Discovery", "Design", "Build", "SEO Setup", "Launch", "Growth"];

export function ProcessTimeline() {
  return (
    <ol className="grid gap-4 md:grid-cols-6">
      {steps.map((step, index) => (
        <motion.li key={step} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-xl border border-black/10 bg-white/70 p-4 text-center">
          <p className="text-xs text-black/50">Step {index + 1}</p>
          <p className="mt-1 font-medium">{step}</p>
        </motion.li>
      ))}
    </ol>
  );
}
