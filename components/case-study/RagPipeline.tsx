type Step = {
  number: string;
  title: string;
  description: string;
};

export function RagPipeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex max-w-2xl flex-col rounded-2xl border border-border-subtle bg-surface/40 p-7 md:p-9">
      {steps.map((step, index) => (
        <li key={step.number} className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-muted text-xs font-semibold text-accent-hover">
              {step.number}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="my-1 h-full w-px flex-1 bg-accent-border" />
            ) : null}
          </div>
          <div className="pb-8">
            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1 text-base leading-relaxed text-foreground-muted">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
