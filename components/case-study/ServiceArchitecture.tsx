function Node({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-border-subtle bg-surface px-6 py-3 text-center text-sm font-semibold tracking-wide text-foreground">
      {label.toUpperCase()}
    </div>
  );
}

function Connector() {
  return <span aria-hidden="true" className="h-6 w-px bg-accent-border" />;
}

type ServiceArchitectureProps = {
  top: string[];
  serviceCount: number;
  bottom?: string[];
};

export function ServiceArchitecture({ top, serviceCount, bottom }: ServiceArchitectureProps) {
  const services = Array.from({ length: serviceCount }, (_, i) => `Service ${String(i + 1).padStart(2, "0")}`);

  return (
    <div className="flex flex-col items-center gap-0 rounded-2xl border border-border-subtle bg-surface/40 p-8 md:p-12">
      {top.map((label) => (
        <div key={label} className="flex flex-col items-center gap-0">
          <Node label={label} />
          <Connector />
        </div>
      ))}

      <div
        aria-label={`${serviceCount} backend microservices`}
        className="grid w-full max-w-2xl grid-cols-3 gap-2.5 sm:grid-cols-4"
      >
        {services.map((service) => (
          <div
            key={service}
            className="rounded-lg border border-accent-border bg-accent-muted px-2 py-2.5 text-center text-[11px] font-semibold tracking-wide text-accent-hover"
          >
            {service.toUpperCase()}
          </div>
        ))}
      </div>

      {bottom ? (
        <>
          <Connector />
          {bottom.map((label) => (
            <Node key={label} label={label} />
          ))}
        </>
      ) : null}
    </div>
  );
}
