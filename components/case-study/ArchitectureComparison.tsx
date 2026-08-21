type Panel = {
  title: string;
  points: string[];
};

type ArchitectureComparisonProps = {
  left: Panel;
  right: Panel;
  quote: string;
};

export function ArchitectureComparison({ left, right, quote }: ArchitectureComparisonProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface/40 p-7">
          <h3 className="text-lg font-semibold text-foreground">{left.title}</h3>
          <ul className="flex flex-col gap-2.5">
            {left.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-base text-foreground-muted">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground-faint" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-accent-border bg-accent-muted/30 p-7">
          <h3 className="text-lg font-semibold text-foreground">{right.title}</h3>
          <ul className="flex flex-col gap-2.5">
            {right.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-base text-foreground-muted">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-l-2 border-accent-border pl-6 text-xl font-medium leading-snug text-foreground md:text-2xl">
        {quote}
      </p>
    </div>
  );
}
