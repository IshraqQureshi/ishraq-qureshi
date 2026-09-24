import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpFaq } from "@/content/mvp";

export function MvpFaq() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />

        <div className="flex flex-col divide-y divide-border-subtle border-t border-border-subtle">
          {mvpFaq.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-foreground marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-foreground-faint transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
