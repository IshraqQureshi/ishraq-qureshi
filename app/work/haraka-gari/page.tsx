import type { Metadata } from "next";
import { CardGrid } from "@/components/case-study/CardGrid";
import { CaseStudyCTA } from "@/components/case-study/CaseStudyCTA";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { DayTimeline } from "@/components/case-study/DayTimeline";
import { OutcomeSection } from "@/components/case-study/OutcomeSection";
import { OverviewGrid } from "@/components/case-study/OverviewGrid";
import { TechnologyGrid } from "@/components/case-study/TechnologyGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { harakaGari as project } from "@/content/case-studies/haraka-gari";
import { siteConfig } from "@/content/site";

const seoTitle = "Haraka Gari — Automobile Marketplace MVP Built in 6 Days | Ishraq Qureshi";
const seoDescription =
  "How I built Haraka Gari, a two-sided automobile marketplace MVP, in a 6-day AI-agent-driven sprint — Next.js 16, Supabase, 630 passing tests, 103 independently reviewed PRs.";
const canonicalPath = "/work/haraka-gari";

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description: seoDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: `${siteConfig.url}${canonicalPath}`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: seoDescription,
  url: `${siteConfig.url}${canonicalPath}`,
  author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
  about: project.tagline,
  keywords: project.stack.join(", "),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/#work` },
    { "@type": "ListItem", position: 3, name: project.title, item: `${siteConfig.url}${canonicalPath}` },
  ],
};

export default function HarakaGariPage() {
  return (
    <main className="flex-1">
      <JsonLd data={caseStudySchema} />
      <JsonLd data={breadcrumbSchema} />
      <CaseStudyHero project={project} />

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-10">
          <SectionHeading title="Project Overview" />
          <OverviewGrid items={project.overview} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.challenge.headline} description={project.challenge.description} />
          <CardGrid cards={project.challenge.cards} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.approach.headline} description={project.approach.description} />
          <DayTimeline days={project.approach.days} />
          <p className="max-w-2xl text-base leading-relaxed text-foreground-muted">
            {project.approach.scopeNote}
          </p>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.architecture.eyebrow}
            title={project.architecture.headline}
            description={project.architecture.description}
          />
          <CardGrid cards={project.architecture.cards} />
          <TechnologyGrid items={project.technology} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.features.headline} />
          <CardGrid cards={project.features.cards} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container>
          <OutcomeSection
            headline={project.quality.headline}
            description={project.quality.description}
            metrics={project.quality.metrics}
          />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <OutcomeSection
            headline={project.outcome.headline}
            description={project.outcome.description}
            metrics={project.outcome.metrics}
          />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.lessons.headline} />
          <CardGrid cards={project.lessons.cards} />
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
