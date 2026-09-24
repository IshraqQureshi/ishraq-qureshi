import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { mvpHero } from "@/content/mvp";
import { TrackedBookCallButton } from "@/components/mvp/TrackedBookCallButton";
import { TrackedLinkButton } from "@/components/mvp/TrackedLinkButton";

export function MvpHero() {
  return (
    <section className="glow-accent relative overflow-hidden pb-16 pt-14 md:pb-20 md:pt-20">
      <Container className="flex flex-col items-start gap-7">
        <div className="animate-fade-up">
          <Badge>{mvpHero.eyebrow.toUpperCase()}</Badge>
        </div>

        <h1 className="animate-fade-up text-balance max-w-3xl text-[2.25rem] font-semibold leading-[1.15] tracking-tight text-foreground [animation-delay:80ms] md:text-[3.25rem] lg:text-[3.75rem]">
          {mvpHero.headline}
        </h1>

        <p className="animate-fade-up max-w-2xl text-lg leading-relaxed text-foreground-muted [animation-delay:160ms] md:text-xl">
          {mvpHero.subheadline}
        </p>

        <p className="animate-fade-up text-base text-foreground-faint [animation-delay:200ms]">
          {mvpHero.supportingLine}
        </p>

        <div className="animate-fade-up flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
          <TrackedBookCallButton location="hero" variant="primary" className="px-7 py-3.5 text-base">
            {mvpHero.primaryCta}
          </TrackedBookCallButton>
          <TrackedLinkButton href="#how-it-works" location="hero" variant="secondary">
            {mvpHero.secondaryCta}
          </TrackedLinkButton>
        </div>

        <p className="animate-fade-up text-sm text-foreground-faint [animation-delay:320ms]">
          {mvpHero.trustLine}
        </p>
      </Container>
    </section>
  );
}
