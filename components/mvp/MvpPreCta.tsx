import { Container } from "@/components/ui/Container";
import { mvpHero, mvpPreCta } from "@/content/mvp";
import { TrackedBookCallButton } from "@/components/mvp/TrackedBookCallButton";

export function MvpPreCta() {
  return (
    <section className="border-t border-border-subtle py-14 md:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="max-w-2xl text-balance text-xl font-medium leading-snug text-foreground md:text-2xl">
          {mvpPreCta.message}
        </p>
        <TrackedBookCallButton location="pre_cta" variant="primary" className="px-7 py-3.5 text-base">
          {mvpHero.primaryCta}
        </TrackedBookCallButton>
      </Container>
    </section>
  );
}
