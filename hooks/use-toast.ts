"use client";

import * as React from "react";

type Toast = { id: string; title: string; description?: string };

const ToastContext = React.createContext<{ toasts: Toast[]; push: (toast: Omit<Toast, "id">) => void; dismiss: (id: string) => void } | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const dismiss = (id: string) => setToasts((prev) => prev.filter((toast) => toast.id !== id));
  const push = (toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => dismiss(id), 3500);
  };

  return <ToastContext.Provider value={{ toasts, push, dismiss }}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return {
    toast: ({ title, description }: { title: string; description?: string }) => ctx.push({ title, description }),
    toasts: ctx.toasts,
    dismiss: ctx.dismiss
  };
}
