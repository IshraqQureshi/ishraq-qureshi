import { MetricGrid } from "@/components/case-study/MetricGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { automobileMarketplace } from "@/content/case-studies/automobile-marketplace";
import { TrackedLinkButton } from "@/components/mvp/TrackedLinkButton";

export function MvpProof() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
      <Container className="flex flex-col items-center gap-12 text-center">
        <SectionHeading
          align="center"
          eyebrow={automobileMarketplace.eyebrow}
          title="Built for Speed. Designed for Real-World Use."
          description={automobileMarketplace.description}
        />

        <p className="text-balance max-w-2xl text-2xl font-semibold text-foreground md:text-3xl">
          {automobileMarketplace.statement}
        </p>

        <MetricGrid metrics={automobileMarketplace.metrics.secondary} primary={automobileMarketplace.metrics.primary} />

        <TrackedLinkButton href={automobileMarketplace.caseStudyHref} location="proof_section" variant="secondary">
          View the Full Case Study
        </TrackedLinkButton>
      </Container>
    </section>
  );
}
