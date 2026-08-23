import type { Metadata } from "next";
import { CardGrid } from "@/components/case-study/CardGrid";
import { CaseStudyCTA } from "@/components/case-study/CaseStudyCTA";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { MetricGrid } from "@/components/case-study/MetricGrid";
import { OutcomeSection } from "@/components/case-study/OutcomeSection";
import { OverviewGrid } from "@/components/case-study/OverviewGrid";
import { PaymentFlow } from "@/components/case-study/PaymentFlow";
import { ServiceArchitecture } from "@/components/case-study/ServiceArchitecture";
import { StageFlow } from "@/components/case-study/StageFlow";
import { TechnologyGrid } from "@/components/case-study/TechnologyGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { marketplace as project } from "@/content/case-studies/marketplace";
import { siteConfig } from "@/content/site";

const seoTitle = "Multi-Vendor Marketplace — Microservices Architecture | Ishraq Qureshi";
const seoDescription =
  "How I architected a 12-service microservices marketplace with API Gateway routing and Stripe recurring payments — built with Next.js, NestJS, MySQL, and deployed on AWS.";
const canonicalPath = "/work/marketplace";

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

export default function MarketplacePage() {
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
        <Container className="flex flex-col items-center gap-12">
          <SectionHeading
            align="center"
            title={project.transformation.headline}
            description={project.transformation.description}
          />
          <StageFlow stages={project.transformation.flow} />
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="font-mono text-6xl font-semibold text-accent-hover [font-variant-numeric:tabular-nums]">
              12
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
              Microservices
            </span>
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.microservices.eyebrow}
            title={project.microservices.headline}
            description={project.microservices.description}
          />
          <ServiceArchitecture
            top={project.microservices.top}
            serviceCount={project.microservices.serviceCount}
            bottom={project.microservices.bottom}
          />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            title={project.whyMicroservices.headline}
            description={project.whyMicroservices.description}
          />
          <CardGrid cards={project.whyMicroservices.cards} />
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={project.apiGateway.eyebrow}
            title={project.apiGateway.headline}
            description={project.apiGateway.description}
          />
          <ServiceArchitecture top={project.apiGateway.top} serviceCount={project.apiGateway.serviceCount} />
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
          <SectionHeading title={project.recurring.headline} description={project.recurring.description} />
          <PaymentFlow steps={project.recurring.flow} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="flex flex-col items-center gap-10 text-center">
          <SectionHeading
            align="center"
            eyebrow={project.cloud.eyebrow}
            title={project.cloud.headline}
            description={project.cloud.description}
          />
          <div className="rounded-2xl border border-accent-border bg-accent-muted px-16 py-10">
            <span className="text-3xl font-semibold tracking-wide text-accent-hover">AWS</span>
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading title={project.decisions.headline} />
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

      <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
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

      <section className="py-24 md:py-32">
        <Container>
          <OutcomeSection
            headline={project.outcome.headline}
            description={project.outcome.description}
            metrics={project.outcome.metrics}
          />
        </Container>
      </section>

      <section className="glow-accent border-t border-border-subtle py-24 md:py-32">
        <Container className="flex flex-col items-center gap-12 text-center">
          <SectionHeading align="center" title={project.snapshot.headline} />
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
