import { CardGrid } from "@/components/case-study/CardGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpOffer } from "@/content/mvp";

export function MvpOffer() {
  const cards = mvpOffer.stages.map((stage) => ({
    number: stage.number,
    title: stage.title,
    description: stage.summary,
  }));

  return (
    <section className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="The Offer" title={mvpOffer.headline} />
        <CardGrid cards={cards} />
      </Container>
    </section>
  );
}
