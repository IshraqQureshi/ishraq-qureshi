type ArchitectureDiagramProps = {
  flow: string[];
  dataLayer: string[];
  output: string[];
};

function Node({ label, emphasis = false }: { label: string; emphasis?: boolean }) {
  return (
    <div
      className={`rounded-xl border px-6 py-3 text-center text-sm font-semibold tracking-wide ${
        emphasis
          ? "border-accent-border bg-accent-muted text-accent-hover"
          : "border-border-subtle bg-surface text-foreground"
      }`}
    >
      {label.toUpperCase()}
    </div>
  );
}

function Connector() {
  return <span aria-hidden="true" className="h-6 w-px bg-accent-border" />;
}

export function ArchitectureDiagram({ flow, dataLayer, output }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-0 rounded-2xl border border-border-subtle bg-surface/40 p-8 md:p-12">
      {flow.map((label) => (
        <div key={label} className="flex flex-col items-center gap-0">
          <Node label={label} />
          <Connector />
        </div>
      ))}

      <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
        {dataLayer.map((label) => (
          <Node key={label} label={label} />
        ))}
      </div>

      <Connector />

      {output.map((label, index) => (
        <div key={label} className="flex flex-col items-center gap-0">
          <Node label={label} emphasis />
          {index < output.length - 1 ? <Connector /> : null}
        </div>
      ))}
    </div>
  );
}
