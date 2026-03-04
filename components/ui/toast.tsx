"use client";

import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id} className="w-80 rounded-xl border border-black/10 bg-white p-4 shadow-soft" role="status">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">{toast.title}</p>
              {toast.description ? <p className="text-sm text-black/70">{toast.description}</p> : null}
            </div>
            <button onClick={() => dismiss(toast.id)} aria-label="Dismiss toast"><X className="h-4 w-4" /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
