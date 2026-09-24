import { Container } from "@/components/ui/Container";
import { mvpProblem } from "@/content/mvp";

export function MvpProblem() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-10">
        <h2 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[3.375rem]">
          {mvpProblem.headline}
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
          {mvpProblem.intro}
        </p>

        <ul className="grid gap-3 sm:grid-cols-2">
          {mvpProblem.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface/40 p-4 text-base text-foreground-muted"
            >
              <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
          {mvpProblem.reframe}
        </p>

        <p className="text-2xl font-semibold text-foreground md:text-3xl">{mvpProblem.closing}</p>
      </Container>
    </section>
  );
}
