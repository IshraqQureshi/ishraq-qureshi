import { Container } from "@/components/ui/Container";
import { mvpCallAgenda, mvpValidated } from "@/content/mvp";

export function MvpClarity() {
  return (
    <section className="py-14 md:py-16">
      <Container className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface/40 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
            {mvpValidated.label}
          </p>
          <p className="text-sm leading-relaxed text-foreground-muted">{mvpValidated.intro}</p>
          <ul className="flex flex-col gap-2">
            {mvpValidated.signals.map((signal) => (
              <li key={signal} className="flex items-start gap-2 text-sm text-foreground-muted">
                <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {signal}
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed text-foreground-faint">{mvpValidated.note}</p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface/40 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
            {mvpCallAgenda.label}
          </p>
          <p className="text-sm leading-relaxed text-foreground-muted">{mvpCallAgenda.intro}</p>
          <ul className="flex flex-col gap-2">
            {mvpCallAgenda.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
