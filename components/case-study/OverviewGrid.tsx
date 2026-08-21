type OverviewItem = {
  label: string;
  value: string;
};

export function OverviewGrid({ items }: { items: OverviewItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1.5 bg-surface/60 p-6">
          <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
            {item.label}
          </span>
          <span className="text-base font-medium text-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
