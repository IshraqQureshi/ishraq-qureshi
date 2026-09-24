import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpExperience } from "@/content/mvp";

export function MvpExperience() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Experience" title={mvpExperience.headline} description={mvpExperience.description} />

        <ul className="flex flex-wrap gap-3">
          {mvpExperience.areas.map((area) => (
            <li
              key={area}
              className="rounded-md border border-border-subtle px-3 py-1.5 text-xs font-medium text-foreground-muted"
            >
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
