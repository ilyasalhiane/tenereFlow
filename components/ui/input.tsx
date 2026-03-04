import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
  return <input className={cn("flex h-10 w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt", className)} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
