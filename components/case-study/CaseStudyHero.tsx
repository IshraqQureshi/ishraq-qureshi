import { Fragment } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { MetricGrid } from "@/components/case-study/MetricGrid";

type Metric = { value: string; label: string };

type CaseStudyHeroProject = {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  heroFlow: string[];
  proofMetrics: Metric[];
  teamMetric?: Metric;
};

function HeroFlow({ steps }: { steps: string[] }) {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-0 rounded-2xl border border-border-subtle bg-surface/60 p-6"
    >
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div
            className={`rounded-lg border px-4 py-2.5 text-center text-xs font-semibold tracking-widest ${
              index === steps.length - 1
                ? "border-accent-border bg-accent-muted text-accent-hover"
                : "border-border-subtle bg-surface text-foreground"
            }`}
          >
            {step.toUpperCase()}
          </div>
          {index < steps.length - 1 ? (
            <div className="flex justify-center py-1.5">
              <span className="h-4 w-px bg-accent-border" />
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}

export function CaseStudyHero({ project }: { project: CaseStudyHeroProject }) {
  return (
    <section className="glow-accent relative overflow-hidden pb-16 pt-14 md:pb-20 md:pt-20">
      <Container className="flex flex-col gap-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <Badge>{project.eyebrow.toUpperCase()}</Badge>

            <h1 className="text-balance max-w-2xl text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[3.5rem]">
              {project.title}
            </h1>

            <h2 className="text-balance max-w-xl text-2xl font-medium leading-snug text-accent-hover md:text-3xl">
              {project.tagline}
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border-subtle px-2.5 py-1 text-xs font-medium text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:mt-2">
            <HeroFlow steps={project.heroFlow} />
          </div>
        </div>

        <MetricGrid metrics={project.proofMetrics} compact={project.teamMetric} />
      </Container>
    </section>
  );
}
