import { Fragment } from "react";
import { Container } from "@/components/ui/Container";

const stages = [
  {
    number: "01",
    title: "Validate the Idea",
    lead: "Before spending months and thousands on development, understand what should actually be built.",
    concepts: ["Product feasibility", "AI opportunities", "Technical risks", "Scope"],
  },
  {
    number: "02",
    title: "Make the Right Technical Decisions",
    lead: "Choose the right SaaS architecture, AI approach, integrations, and infrastructure before expensive mistakes happen.",
    concepts: ["Architecture", "AI strategy", "Technology choices", "Scalability"],
  },
  {
    number: "03",
    title: "Turn It Into a Product",
    lead: "Move from idea and prototype to a secure, scalable production-ready application.",
    concepts: ["Product engineering", "MVP development", "Production infrastructure", "Launch"],
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[3.375rem]">
            You Don&apos;t Need Another Developer.
          </h2>
          <p className="text-balance max-w-3xl text-2xl font-medium leading-snug text-foreground-muted md:text-3xl">
            You need someone who can turn the idea into a product.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          {stages.map((stage, index) => (
            <Fragment key={stage.title}>
              <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-border-subtle bg-surface/40 p-7">
                <span className="text-sm font-semibold text-accent-hover">{stage.number}</span>
                <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
                <p className="flex-1 text-base leading-relaxed text-foreground-muted">
                  {stage.lead}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {stage.concepts.map((concept) => (
                    <li
                      key={concept}
                      className="rounded-md border border-border-subtle px-2 py-1 text-xs text-foreground-faint"
                    >
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>
              {index < stages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden items-center text-xl text-border-strong md:flex"
                >
                  →
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
