import { Container } from "@/components/ui/Container";

export function AiNativeSection() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
      <Container className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
            The AI-Native Approach
          </span>
          <h2 className="text-balance max-w-2xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.5rem]">
            AI-Native Doesn&apos;t Mean AI-Only.
          </h2>
          <p className="text-balance max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            <span className="text-accent">AI</span> is the{" "}
            <span className="text-accent">accelerator</span>, not the{" "}
            <span className="text-accent">architect</span>.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
            I use AI throughout the development process to move faster, explore more
            possibilities, and reduce development overhead — while applying senior engineering
            judgment to architecture, security, scalability, and product decisions.
          </p>
        </div>

        <div className="grid w-full max-w-3xl items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-xl border border-border-subtle bg-surface/60 p-7 text-left">
            <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">
              AI SPEED
            </p>
            <ul className="flex flex-col gap-2 text-base text-foreground-muted">
              <li>Faster iteration</li>
              <li>Rapid prototyping</li>
              <li>Expanded exploration</li>
            </ul>
          </div>

          <div aria-hidden="true" className="flex items-center justify-center gap-1 md:flex-col">
            <span className="h-px w-8 bg-accent-border md:h-8 md:w-px" />
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="h-px w-8 bg-accent-border md:h-8 md:w-px" />
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface/60 p-7 text-left">
            <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">
              ENGINEERING JUDGMENT
            </p>
            <ul className="flex flex-col gap-2 text-base text-foreground-muted">
              <li>Architecture</li>
              <li>Security &amp; scalability</li>
              <li>Product decisions</li>
            </ul>
          </div>
        </div>

        <span className="rounded-md border border-accent-border bg-accent-muted px-5 py-2.5 text-sm font-semibold text-accent-hover">
          Production-Ready Product
        </span>
      </Container>
    </section>
  );
}
