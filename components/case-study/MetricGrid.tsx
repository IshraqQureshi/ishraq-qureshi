type Metric = {
  value: string;
  label: string;
};

type MetricGridProps = {
  metrics: Metric[];
  primary?: Metric;
  compact?: Metric;
};

export function MetricGrid({ metrics, primary, compact }: MetricGridProps) {
  if (primary) {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center">
          <span className="font-mono text-5xl font-semibold tracking-tight text-foreground [font-variant-numeric:tabular-nums] md:text-6xl">
            {primary.value}
          </span>
          <span className="text-base text-foreground-muted">{primary.label}</span>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-mono text-2xl font-semibold text-foreground [font-variant-numeric:tabular-nums]">
                {metric.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col gap-1 rounded-xl border border-border-subtle bg-surface/60 p-5"
        >
          <span className="font-mono text-2xl font-semibold text-foreground [font-variant-numeric:tabular-nums] md:text-3xl">
            {metric.value}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
            {metric.label}
          </span>
        </div>
      ))}
      {compact ? (
        <div className="flex flex-col gap-1 rounded-xl border border-accent-border bg-accent-muted p-5">
          <span className="font-mono text-2xl font-semibold text-accent-hover [font-variant-numeric:tabular-nums] md:text-3xl">
            {compact.value}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
            {compact.label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
