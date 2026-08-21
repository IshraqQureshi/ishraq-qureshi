type Metric = {
  value: string;
  label: string;
};

type MetricGridProps = {
  metrics: Metric[];
  primary?: Metric;
  compact?: Metric;
};

// Short numeric/word stats ("16,000+", "Stripe") read best large and in mono.
// Longer phrases ("Lead Full Stack Developer") need a smaller, non-mono
// treatment so they don't wrap into an oversized, cramped block.
function valueClasses(value: string, size: "sm" | "lg") {
  const scale =
    size === "lg"
      ? { short: "font-mono text-5xl md:text-6xl", long: "text-2xl md:text-3xl leading-snug" }
      : { short: "font-mono text-2xl md:text-3xl", long: "text-lg md:text-xl leading-snug" };

  return value.length > 14 ? scale.long : `${scale.short} [font-variant-numeric:tabular-nums]`;
}

export function MetricGrid({ metrics, primary, compact }: MetricGridProps) {
  if (primary) {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center">
          <span
            className={`font-semibold tracking-tight text-foreground ${valueClasses(primary.value, "lg")}`}
          >
            {primary.value}
          </span>
          <span className="text-base text-foreground-muted">{primary.label}</span>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center gap-1 text-center">
              <span
                className={`font-semibold text-foreground ${valueClasses(metric.value, "sm")}`}
              >
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
          <span className={`font-semibold text-foreground ${valueClasses(metric.value, "sm")}`}>
            {metric.value}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
            {metric.label}
          </span>
        </div>
      ))}
      {compact ? (
        <div className="flex flex-col gap-1 rounded-xl border border-accent-border bg-accent-muted p-5">
          <span className={`font-semibold text-accent-hover ${valueClasses(compact.value, "sm")}`}>
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
