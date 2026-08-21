import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="How We Work" title="From First Conversation to Production." />

        {/* Vertical timeline — mobile and tablet. */}
        <div className="flex flex-col md:hidden">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-muted text-xs font-semibold text-accent-hover">
                  {step.number}
                </span>
                {index < processSteps.length - 1 ? (
                  <span className="my-1 h-full w-px flex-1 bg-accent-border" />
                ) : null}
              </div>
              <div className="pb-9">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal timeline — desktop. */}
        <div className="hidden md:flex md:items-start md:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-muted text-xs font-semibold text-accent-hover">
                  {step.number}
                </span>
                {index < processSteps.length - 1 ? (
                  <span aria-hidden="true" className="h-px flex-1 bg-accent-border" />
                ) : null}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-base leading-relaxed text-foreground-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
