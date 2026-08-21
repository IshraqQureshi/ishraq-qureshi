type TechItem = {
  category: string;
  value: string;
};

export function TechnologyGrid({ items }: { items: TechItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-3 md:grid-cols-6">
      {items.map((item) => (
        <div key={item.category} className="flex flex-col gap-1 bg-surface/60 p-5 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
            {item.category}
          </span>
          <span className="text-sm font-semibold text-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
