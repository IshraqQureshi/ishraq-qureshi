import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpDifferentiation } from "@/content/mvp";

export function MvpDifferentiation() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={mvpDifferentiation.headline} description={mvpDifferentiation.intro} />

        <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface/60 p-7">
            <p className="text-xs font-semibold tracking-widest text-foreground-faint">
              {mvpDifferentiation.typical.label.toUpperCase()}
            </p>
            <p className="text-xl font-medium leading-snug text-foreground-muted">
              &ldquo;{mvpDifferentiation.typical.quote}&rdquo;
            </p>
          </div>

          <div aria-hidden="true" className="flex items-center justify-center gap-1 md:flex-col">
            <span className="h-px w-8 bg-accent-border md:h-full md:w-px" />
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-accent-border bg-accent-muted/30 p-7">
            <p className="text-xs font-semibold tracking-widest text-accent-hover">
              {mvpDifferentiation.partner.label.toUpperCase()}
            </p>
            <p className="text-xl font-medium leading-snug text-foreground">
              &ldquo;{mvpDifferentiation.partner.quote}&rdquo;
            </p>
          </div>
        </div>

        <p className="text-balance max-w-2xl text-2xl font-semibold leading-snug text-foreground md:text-3xl">
          {mvpDifferentiation.coreMessage}
        </p>

        <ul className="flex flex-wrap gap-3">
          {mvpDifferentiation.areas.map((area) => (
            <li
              key={area}
              className="rounded-md border border-border-subtle px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground-muted"
            >
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
