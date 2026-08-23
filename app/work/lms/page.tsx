import type { Metadata } from "next";
import { ArchitectureComparison } from "@/components/case-study/ArchitectureComparison";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { CardGrid } from "@/components/case-study/CardGrid";
import { CaseStudyCTA } from "@/components/case-study/CaseStudyCTA";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CommunicationFlow } from "@/components/case-study/CommunicationFlow";
import { MetricGrid } from "@/components/case-study/MetricGrid";
import { OverviewGrid } from "@/components/case-study/OverviewGrid";
import { PaymentFlow } from "@/components/case-study/PaymentFlow";
import { TechnologyGrid } from "@/components/case-study/TechnologyGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { lms as project } from "@/content/case-studies/lms";
import { siteConfig } from "@/content/site";

const seoTitle = "LMS Platform — Modular Monolith SaaS Case Study | Ishraq Qureshi";
const seoDescription =
  "A full-stack LMS platform built with React, NestJS, and MySQL — JWT auth, Stripe payments, Firebase communication, deployed to Azure via Docker and Jenkins CI/CD.";
const canonicalPath = "/work/lms";

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

export default function LmsPage() {
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
          <SectionHeading
            title={project.challenge.headline}
            description={project.challenge.description}
          />
          <CardGrid cards={project.challenge.cards} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.decision.eyebrow}
            title={project.decision.headline}
            description={project.decision.description}
          />
          <ArchitectureComparison
            left={project.decision.left}
            right={project.decision.right}
            quote={project.decision.quote}
          />
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
            dataLayer={project.architecture.modules}
            output={project.architecture.output}
          />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.authentication.eyebrow}
            title={project.authentication.headline}
            description={project.authentication.description}
          />
          <PaymentFlow steps={project.authentication.flow} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.communication.eyebrow}
            title={project.communication.headline}
            description={project.communication.description}
          />
          <CommunicationFlow root={project.communication.root} branches={project.communication.branches} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.payments.eyebrow}
            title={project.payments.headline}
            description={project.payments.description}
          />
          <PaymentFlow steps={project.payments.flow} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.delivery.eyebrow}
            title={project.delivery.headline}
            description={project.delivery.description}
          />
          <PaymentFlow steps={project.delivery.flow} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.decisions.headline} />
          <CardGrid cards={project.decisions.cards} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            title={project.realChallenge.headline}
            description={project.realChallenge.description}
          />
          <CardGrid cards={project.realChallenge.cards} />
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
          </div>
          <CardGrid cards={project.role.areas} />
        </Container>
      </section>

      <section className="glow-accent border-t border-border-subtle py-24 md:py-32">
        <Container className="flex flex-col items-center gap-12 text-center">
          <SectionHeading align="center" eyebrow={project.snapshot.eyebrow} title={project.snapshot.headline} />
          <MetricGrid metrics={project.snapshot.metrics} />
          <p className="text-sm text-foreground-faint">{project.snapshot.stack}</p>
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
