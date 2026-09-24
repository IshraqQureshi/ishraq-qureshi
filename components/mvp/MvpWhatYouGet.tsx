import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mvpWhatYouGet } from "@/content/mvp";

export function MvpWhatYouGet() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-16 md:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={mvpWhatYouGet.heading} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mvpWhatYouGet.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface/60 p-5"
            >
              <span aria-hidden="true" className="mt-1 shrink-0 text-accent-hover">
                ✓
              </span>
              <span className="text-base text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
