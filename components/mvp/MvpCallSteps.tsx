import { CardGrid } from "@/components/case-study/CardGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpCallSteps, mvpHero } from "@/content/mvp";
import { TrackedBookCallButton } from "@/components/mvp/TrackedBookCallButton";

export function MvpCallSteps() {
  return (
    <section id="how-it-works" className="border-y border-border-subtle bg-surface/30 py-24 md:py-32">
      <Container className="flex flex-col items-center gap-14 text-center">
        <SectionHeading align="center" title={mvpCallSteps.headline} description={mvpCallSteps.note} />
        <div className="w-full">
          <CardGrid cards={mvpCallSteps.steps} />
        </div>
        <TrackedBookCallButton location="how_it_works" variant="primary" className="px-9 py-5 text-lg">
          {mvpHero.primaryCta}
        </TrackedBookCallButton>
      </Container>
    </section>
  );
}
