import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { FeaturedCaseStudy } from "@/components/case-studies/FeaturedCaseStudy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCaseStudy, supportingCaseStudies } from "@/content/case-studies";

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Selected Work"
          title="Built, Not Just Promised."
          description="Real systems, real architecture, real engineering problems solved."
        />

        <FeaturedCaseStudy caseStudy={featuredCaseStudy} />

        <div className="grid gap-6 md:grid-cols-2">
          {supportingCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
          ))}
        </div>
      </Container>
    </section>
  );
}
