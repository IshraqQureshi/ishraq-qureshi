import { BookCallButton } from "@/components/ui/BookCallButton";
import type { Service } from "@/content/services";

const emphasisStyles: Record<Service["emphasis"], string> = {
  standard: "border-border-subtle bg-surface/60",
  transformation: "border-accent-border bg-accent-muted/30 md:scale-[1.02] md:shadow-[0_0_40px_-10px_var(--accent)]",
  premium: "border-border-strong bg-surface-elevated",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={`flex flex-col gap-5 rounded-2xl border p-7 ${emphasisStyles[service.emphasis]}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest text-foreground-faint">
          {service.number}
        </span>
        <span className="rounded-md border border-accent-border bg-accent-muted px-2 py-1 text-[11px] font-semibold tracking-widest text-accent-hover">
          {service.label}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[1.375rem] font-semibold leading-snug text-foreground">
          {service.title}
        </h3>
        <p className="text-base font-semibold text-accent-hover">{service.price}</p>
      </div>

      <p className="flex-1 text-base leading-relaxed text-foreground-muted">
        {service.description}
      </p>

      <BookCallButton variant="secondary" className="w-full text-sm">
        {service.cta}
      </BookCallButton>
    </div>
  );
}
