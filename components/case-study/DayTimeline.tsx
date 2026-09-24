type Day = {
  day: string;
  focus: string;
};

export function DayTimeline({ days }: { days: Day[] }) {
  return (
    <ol className="flex flex-col">
      {days.map((entry, index) => (
        <li key={entry.day} className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-muted text-xs font-semibold text-accent-hover">
              {entry.day}
            </span>
            {index < days.length - 1 ? (
              <span aria-hidden="true" className="my-1 h-full w-px flex-1 bg-accent-border" />
            ) : null}
          </div>
          <div className="pb-8">
            <p className="pt-1.5 text-base leading-relaxed text-foreground-muted">{entry.focus}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
