import { Fragment } from "react";

export function StageFlow({ stages }: { stages: string[] }) {
  return (
    <ol className="flex flex-col gap-3 md:flex-row md:items-center md:gap-3">
      {stages.map((stage, index) => (
        <Fragment key={stage}>
          <li className="flex items-center gap-3 md:flex-col md:gap-2 md:text-center">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent md:hidden" />
            <span className="text-xs font-semibold tracking-widest text-foreground-faint">
              {stage.toUpperCase()}
            </span>
          </li>
          {index < stages.length - 1 ? (
            <span
              aria-hidden="true"
              className="ml-0.75 h-6 w-px bg-accent-border md:ml-0 md:h-px md:w-full md:flex-1"
            />
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
