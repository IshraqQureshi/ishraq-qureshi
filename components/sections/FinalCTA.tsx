import { BookCallButton } from "@/components/ui/BookCallButton";
import { Container } from "@/components/ui/Container";
import { cta } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="glow-accent border-t border-border-subtle py-24 md:py-32">
      <Container className="flex flex-col items-center gap-7 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
          Ready When You Are
        </span>
        <h2 className="text-balance text-2xl font-medium text-foreground-muted md:text-3xl">
          Have an AI Product Idea?
        </h2>
        <p className="text-balance max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Let&apos;s See If It&apos;s Worth Building.
        </p>
        <p className="text-lg text-foreground-muted">No sales pitch. Just a technical conversation.</p>
        <BookCallButton variant="primary" className="mt-2 px-9 py-5 text-lg">
          {cta.primary}
        </BookCallButton>
      </Container>
    </section>
  );
}
