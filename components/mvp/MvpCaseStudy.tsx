import { MetricGrid } from "@/components/case-study/MetricGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackedLinkButton } from "@/components/mvp/TrackedLinkButton";
import { automobileMarketplace } from "@/content/case-studies/automobile-marketplace";
import { featuredCaseStudy, supportingCaseStudies } from "@/content/case-studies";

const otherCaseStudies = [featuredCaseStudy, ...supportingCaseStudies];

export function MvpCaseStudy() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-16 md:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={automobileMarketplace.eyebrow}
          title={automobileMarketplace.heading}
          description={automobileMarketplace.body}
        />

        <MetricGrid metrics={automobileMarketplace.stats} />

        <p className="max-w-2xl text-sm text-foreground-faint">{automobileMarketplace.note}</p>

        <div>
          <TrackedLinkButton href={automobileMarketplace.caseStudyHref} location="case_study_section" variant="secondary">
            Read the full case study →
          </TrackedLinkButton>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {otherCaseStudies.map((project) => (
            <a
              key={project.href}
              href={project.href}
              className="flex flex-col gap-2 rounded-xl border border-border-subtle bg-surface/60 p-6 transition-colors hover:border-accent-border"
            >
              <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">{project.description}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
