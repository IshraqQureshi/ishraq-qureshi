import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { ctaMicrocopy, primaryCtaLabel } from "@/content/mvp-config";
import { mvpHowItWorks } from "@/content/mvp";

export function MvpHowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={mvpHowItWorks.heading} />

        <div className="flex flex-col">
          {mvpHowItWorks.steps.map((step, index) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-muted text-xs font-semibold text-accent-hover">
                  {step.number}
                </span>
                {index < mvpHowItWorks.steps.length - 1 ? (
                  <span className="my-1 h-full w-px flex-1 bg-accent-border" />
                ) : null}
              </div>
              <div className="pb-10">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 max-w-2xl text-base leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2">
          <ApplyButton location="how_it_works" variant="primary" className="px-7 py-3.5 text-base">
            {primaryCtaLabel}
          </ApplyButton>
          <p className="text-sm text-foreground-faint">{ctaMicrocopy}</p>
        </div>
      </Container>
    </section>
  );
}
