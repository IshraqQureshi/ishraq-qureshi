import { Container } from "@/components/ui/Container";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { ctaMicrocopy, primaryCtaLabel } from "@/content/mvp-config";
import { mvpFinalCta } from "@/content/mvp";

export function MvpFinalCta() {
  return (
    <section id="mvp-final-cta" className="glow-accent border-t border-border-subtle py-24 md:py-32">
      <Container className="flex flex-col items-center gap-7 text-center">
        <p className="text-balance max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          {mvpFinalCta.heading}
        </p>
        <p className="max-w-xl text-lg text-foreground-muted">{mvpFinalCta.sub}</p>
        <div className="mt-2 flex flex-col items-center gap-2">
          <ApplyButton location="final_cta" variant="primary" className="px-9 py-5 text-lg">
            {primaryCtaLabel}
          </ApplyButton>
          <p className="text-sm text-foreground-faint">{ctaMicrocopy}</p>
        </div>
      </Container>
    </section>
  );
}
