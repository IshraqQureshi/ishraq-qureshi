import { Container } from "@/components/ui/Container";
import { mvpAi } from "@/content/mvp";

export function MvpAiSection() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
      <Container className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
            {mvpAi.eyebrow}
          </span>
          <h2 className="text-balance max-w-2xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.5rem]">
            {mvpAi.headline}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
            {mvpAi.description}
          </p>
          <p className="max-w-2xl text-xl font-semibold text-accent md:text-2xl">{mvpAi.caveat}</p>
        </div>

        <div className="grid w-full max-w-3xl items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-xl border border-border-subtle bg-surface/60 p-7 text-left">
            <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">
              {mvpAi.panels.speed.label.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-2 text-base text-foreground-muted">
              {mvpAi.panels.speed.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="flex items-center justify-center gap-1 md:flex-col">
            <span className="h-px w-8 bg-accent-border md:h-8 md:w-px" />
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="h-px w-8 bg-accent-border md:h-8 md:w-px" />
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface/60 p-7 text-left">
            <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">
              {mvpAi.panels.judgment.label.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-2 text-base text-foreground-muted">
              {mvpAi.panels.judgment.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
