import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpFit } from "@/content/mvp";

export function MvpFit() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={mvpFit.headline} />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl border border-accent-border bg-accent-muted/30 p-7">
            <p className="text-xs font-semibold tracking-widest text-accent-hover">
              {mvpFit.good.label.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-3">
              {mvpFit.good.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground">
                  <span aria-hidden="true" className="mt-1 shrink-0 text-accent-hover">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-border-subtle bg-surface/40 p-7">
            <p className="text-xs font-semibold tracking-widest text-foreground-faint">
              {mvpFit.notFit.label.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-3">
              {mvpFit.notFit.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground-muted">
                  <span aria-hidden="true" className="mt-1 shrink-0 text-foreground-faint">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
