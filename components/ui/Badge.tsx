import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-accent-border bg-accent-muted px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent-hover">
      {children}
    </span>
  );
}
