type Branch = {
  top: string;
  bottom: string;
};

type CommunicationFlowProps = {
  root: string;
  branches: Branch[];
};

export function CommunicationFlow({ root, branches }: CommunicationFlowProps) {
  return (
    <div className="flex flex-col items-center gap-0 rounded-2xl border border-border-subtle bg-surface/40 p-8 md:p-12">
      <div className="rounded-xl border border-border-subtle bg-surface px-6 py-3 text-center text-sm font-semibold tracking-wide text-foreground">
        {root.toUpperCase()}
      </div>
      <span aria-hidden="true" className="h-6 w-px bg-accent-border" />

      <div className="grid w-full max-w-md grid-cols-2 gap-6">
        {branches.map((branch) => (
          <div key={branch.top} className="flex flex-col items-center gap-0">
            <div className="rounded-lg border border-accent-border bg-accent-muted px-4 py-2.5 text-center text-xs font-semibold tracking-widest text-accent-hover">
              {branch.top.toUpperCase()}
            </div>
            <span aria-hidden="true" className="h-5 w-px bg-accent-border" />
            <div className="rounded-lg border border-border-subtle bg-surface px-4 py-2.5 text-center text-xs font-semibold tracking-widest text-foreground">
              {branch.bottom.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
