import { Container } from "@/components/ui/Container";
import { mvpProblem } from "@/content/mvp";

export function MvpProblem() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-16 md:py-24">
      <Container className="flex flex-col gap-6">
        <h2 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[3rem]">
          {mvpProblem.heading}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">{mvpProblem.body}</p>
      </Container>
    </section>
  );
}
