import { Container } from "@/components/ui/Container";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { ctaMicrocopy, primaryCtaLabel } from "@/content/mvp-config";

export function MvpCaseStudyCta() {
  return (
    <section className="border-t border-border-subtle py-10">
      <Container className="flex flex-col items-center gap-2 text-center">
        <ApplyButton location="case_study_cta" variant="primary" className="px-7 py-3.5 text-base">
          {primaryCtaLabel}
        </ApplyButton>
        <p className="text-sm text-foreground-faint">{ctaMicrocopy}</p>
      </Container>
    </section>
  );
}
