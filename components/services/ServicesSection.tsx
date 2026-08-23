import { Fragment } from "react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

const journey = ["VALIDATE", "ARCHITECT", "BUILD", "SCALE"];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="How I Can Help"
          title="From Idea to Product. One Step at a Time."
          description="Start where you are. Validate the idea, define the product, build the MVP, or bring in senior engineering support when you need it."
        />

        <div className="hidden items-center gap-3 md:flex">
          {journey.map((label, index) => (
            <Fragment key={label}>
              <span className="text-xs font-semibold tracking-widest text-foreground-faint">
                {label}
              </span>
              {index < journey.length - 1 ? (
                <span aria-hidden="true" className="h-px flex-1 bg-border-subtle" />
              ) : null}
            </Fragment>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
