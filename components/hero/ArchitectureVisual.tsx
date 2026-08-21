type Node = {
  label: string;
  sublabel: string;
  top: string;
  left: string;
  emphasis?: boolean;
};

const nodes: Node[] = [
  { label: "IDEA", sublabel: "the problem", top: "58%", left: "16%" },
  { label: "AI", sublabel: "acceleration", top: "10%", left: "44%" },
  { label: "ARCHITECTURE", sublabel: "the decisions", top: "50%", left: "40%", emphasis: true },
  { label: "PRODUCT", sublabel: "the build", top: "50%", left: "76%", emphasis: true },
  { label: "LAUNCH", sublabel: "in users' hands", top: "86%", left: "76%" },
];

const connections = [
  { d: "M 24 66 C 30 60, 34 56, 38 54" },
  { d: "M 50 24 C 48 33, 46 40, 44 48" },
  { d: "M 60 51 C 65 51, 68 51, 74 51" },
  { d: "M 84 58 C 84 68, 84 76, 84 84" },
];

const flow = [
  { label: "IDEA", sublabel: "the problem" },
  { label: "AI", sublabel: "acceleration" },
  { label: "ARCHITECTURE", sublabel: "the decisions", emphasis: true },
  { label: "PRODUCT", sublabel: "the build", emphasis: true },
  { label: "LAUNCH", sublabel: "in users' hands" },
];

export function ArchitectureVisual() {
  return (
    <div aria-hidden="true">
      {/* Compact stacked flow — small screens, where the free-form diagram has no room to breathe. */}
      <div className="flex flex-col rounded-2xl border border-border-subtle bg-surface/60 p-6 sm:hidden">
        {flow.map((step, index) => (
          <div key={step.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`h-2.5 w-2.5 rounded-full border ${
                  step.emphasis
                    ? "border-accent bg-accent"
                    : "border-border-strong bg-surface"
                }`}
              />
              {index < flow.length - 1 ? (
                <span className="my-1 h-8 w-px flex-1 bg-border-strong" />
              ) : null}
            </div>
            <div className="pb-6">
              <p
                className={`text-xs font-semibold tracking-widest ${
                  step.emphasis ? "text-accent-hover" : "text-foreground"
                }`}
              >
                {step.label}
              </p>
              <p className="text-xs text-foreground-faint">{step.sublabel}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Free-form architecture diagram — tablet and up. */}
      <div className="relative hidden aspect-4/3 w-full max-w-xl rounded-2xl border border-border-subtle bg-surface/60 sm:mx-auto sm:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {connections.map((connection) => (
            <path
              key={connection.d}
              d={connection.d}
              fill="none"
              stroke="var(--accent-border)"
              strokeWidth="0.6"
              className="animate-dash-flow"
            />
          ))}
        </svg>

        {nodes.map((node) => (
          <div
            key={node.label}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 whitespace-nowrap rounded-xl border px-4 py-2.5 text-center backdrop-blur-sm ${
              node.emphasis
                ? "border-accent-border bg-accent-muted"
                : "border-border-subtle bg-surface"
            }`}
            style={{ top: node.top, left: node.left }}
          >
            <span
              className={`text-xs font-semibold tracking-widest ${
                node.emphasis ? "text-accent-hover" : "text-foreground"
              }`}
            >
              {node.label}
            </span>
            <span className="text-[11px] text-foreground-faint">{node.sublabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
