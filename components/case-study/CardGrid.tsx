type Card = {
  number?: string;
  eyebrow?: string;
  title: string;
  description: string;
};

export function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className={`grid gap-6 ${cards.length > 3 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex flex-1 flex-col gap-3 rounded-2xl border border-border-subtle bg-surface/40 p-7"
        >
          {card.number ? (
            <span className="text-sm font-semibold text-accent-hover">{card.number}</span>
          ) : null}
          {card.eyebrow ? (
            <span className="text-xs font-medium uppercase tracking-widest text-accent-hover">
              {card.eyebrow}
            </span>
          ) : null}
          <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
          <p className="text-base leading-relaxed text-foreground-muted">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
