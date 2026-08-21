import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { CardGrid } from "@/components/case-study/CardGrid";
import { CaseStudyCTA } from "@/components/case-study/CaseStudyCTA";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { LanguageGrid } from "@/components/case-study/LanguageGrid";
import { MetricGrid } from "@/components/case-study/MetricGrid";
import { OverviewGrid } from "@/components/case-study/OverviewGrid";
import { RagPipeline } from "@/components/case-study/RagPipeline";
import { SearchComparison } from "@/components/case-study/SearchComparison";
import { StageFlow } from "@/components/case-study/StageFlow";
import { TechnologyGrid } from "@/components/case-study/TechnologyGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiDigitalLibrary as project } from "@/content/case-studies/ai-digital-library";

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
  openGraph: {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
  },
};

export default function AiDigitalLibraryPage() {
  return (
    <main className="flex-1">
      <CaseStudyHero project={project} />

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-10">
          <SectionHeading title="Project Overview" />
          <OverviewGrid items={project.overview} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            title={project.challenge.headline}
            description={project.challenge.description}
          />
          <CardGrid cards={project.challenge.cards} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.transformation.headline} />
          <StageFlow stages={project.transformation.flow} />
          <CardGrid cards={project.transformation.stages} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.architecture.eyebrow}
            title={project.architecture.headline}
            description={project.architecture.description}
          />
          <ArchitectureDiagram
            flow={project.architecture.flow}
            dataLayer={project.architecture.dataLayer}
            output={project.architecture.output}
          />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.ragPipeline.eyebrow}
            title={project.ragPipeline.headline}
            description={project.ragPipeline.description}
          />
          <RagPipeline steps={project.ragPipeline.steps} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.semanticSearch.headline} />
          <SearchComparison
            traditional={project.semanticSearch.traditional}
            semantic={project.semanticSearch.semantic}
          />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.multilingual.eyebrow}
            title={project.multilingual.headline}
            description={project.multilingual.description}
          />
          <LanguageGrid languages={project.multilingual.languages} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading eyebrow={project.decisions.eyebrow} title={project.decisions.headline} />
          <CardGrid cards={project.decisions.cards} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            title={project.realChallenge.headline}
            description={project.realChallenge.description}
          />
          <CardGrid cards={project.realChallenge.cards} />
        </Container>
      </section>

      <section className="glow-accent border-y border-border-subtle py-24 md:py-32">
        <Container className="flex flex-col items-center gap-12 text-center">
          <SectionHeading
            align="center"
            eyebrow={project.results.eyebrow}
            title={project.results.headline}
          />
          <MetricGrid metrics={project.results.secondary} primary={project.results.primary} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
              {project.role.eyebrow}
            </span>
            <h2 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.5rem]">
              {project.role.headline}
            </h2>
            <p className="text-xl font-medium text-foreground-muted">{project.role.roleTitle}</p>
          </div>
          <CardGrid cards={project.role.areas} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-20 md:py-24">
        <Container className="flex flex-col gap-8">
          <SectionHeading title="Technology" />
          <TechnologyGrid items={project.technology} />
        </Container>
      </section>

      <CaseStudyCTA
        eyebrow={project.cta.eyebrow}
        headline={project.cta.headline}
        description={project.cta.description}
        primaryCta={project.cta.primaryCta}
        secondaryCta={project.cta.secondaryCta}
      />
    </main>
  );
}
