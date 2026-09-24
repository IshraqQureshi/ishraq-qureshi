import { Container } from "@/components/ui/Container";
import { mvpFinalCta } from "@/content/mvp";
import { TrackedBookCallButton } from "@/components/mvp/TrackedBookCallButton";

export function MvpFinalCta() {
  return (
    <section className="glow-accent border-t border-border-subtle py-24 md:py-32">
      <Container className="flex flex-col items-center gap-7 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
          {mvpFinalCta.eyebrow}
        </span>
        <p className="text-balance max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          {mvpFinalCta.headline}
        </p>
        <p className="max-w-xl text-lg text-foreground-muted">{mvpFinalCta.description}</p>
        <TrackedBookCallButton location="final_cta" variant="primary" className="mt-2 px-9 py-5 text-lg">
          {mvpFinalCta.primaryCta}
        </TrackedBookCallButton>
        <p className="text-sm text-foreground-faint">{mvpFinalCta.supportingLine}</p>
      </Container>
    </section>
  );
}
