type ComparisonSide = {
  label: string;
  query: string;
  description: string;
};

export function SearchComparison({
  traditional,
  semantic,
}: {
  traditional: ComparisonSide;
  semantic: ComparisonSide;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface/40 p-7">
        <span className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
          {traditional.label}
        </span>
        <p className="text-lg font-medium text-foreground">&ldquo;{traditional.query}&rdquo;</p>
        <p className="text-base leading-relaxed text-foreground-muted">{traditional.description}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-accent-border bg-accent-muted/30 p-7">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
          {semantic.label}
        </span>
        <p className="text-lg font-medium text-foreground">&ldquo;{semantic.query}&rdquo;</p>
        <p className="text-base leading-relaxed text-foreground-muted">{semantic.description}</p>
      </div>
    </div>
  );
}
