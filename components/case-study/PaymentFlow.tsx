import { Fragment } from "react";

export function PaymentFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="mx-auto flex w-full max-w-sm flex-col items-stretch gap-0 rounded-2xl border border-border-subtle bg-surface/40 p-6 md:p-8">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <li
            className={`rounded-lg border px-4 py-3 text-center text-sm font-semibold tracking-wide ${
              index === steps.length - 1
                ? "border-accent-border bg-accent-muted text-accent-hover"
                : "border-border-subtle bg-surface text-foreground"
            }`}
          >
            {step.toUpperCase()}
          </li>
          {index < steps.length - 1 ? (
            <div aria-hidden="true" className="flex justify-center py-1.5">
              <span className="h-4 w-px bg-accent-border" />
            </div>
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
