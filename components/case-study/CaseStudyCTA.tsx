import { BookCallButton } from "@/components/ui/BookCallButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CaseStudyCTAProps = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export function CaseStudyCTA({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
}: CaseStudyCTAProps) {
  return (
    <section className="glow-accent border-t border-border-subtle py-24 md:py-32">
      <Container className="flex flex-col items-center gap-7 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
          {eyebrow}
        </span>
        <h2 className="text-balance max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
          {headline}
        </h2>
        <p className="max-w-xl text-lg text-foreground-muted">{description}</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <BookCallButton variant="primary" className="px-8 py-4 text-base">
            {primaryCta}
          </BookCallButton>
          <Button href="/#work" variant="secondary">
            {secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
