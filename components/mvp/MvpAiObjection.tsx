import { Container } from "@/components/ui/Container";
import { mvpAiObjection } from "@/content/mvp";

export function MvpAiObjection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.75rem]">
            {mvpAiObjection.heading}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">{mvpAiObjection.bodyOne}</p>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">{mvpAiObjection.bodyTwo}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface/40 p-7">
            <p className="text-xs font-semibold tracking-widest text-foreground-faint">
              {mvpAiObjection.comparison.aiAlone.label.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-2.5">
              {mvpAiObjection.comparison.aiAlone.items.map((item) => (
                <li key={item} className="text-base text-foreground-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-accent-border bg-accent-muted/30 p-7">
            <p className="text-xs font-semibold tracking-widest text-accent-hover">
              {mvpAiObjection.comparison.aiAccelerated.label.toUpperCase()}
            </p>
            <ul className="flex flex-col gap-2.5">
              {mvpAiObjection.comparison.aiAccelerated.items.map((item) => (
                <li key={item} className="text-base text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
