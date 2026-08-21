import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/content/case-studies";

export function FeaturedCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-border-subtle bg-surface/60 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-7 p-9 md:p-12">
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border-subtle px-2 py-1 text-xs text-foreground-faint"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {caseStudy.title}
        </h3>

        <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
          {caseStudy.description}
        </p>

        <div className="flex flex-col gap-1 text-sm text-foreground-faint">
          {caseStudy.stack ? <p>{caseStudy.stack}</p> : null}
          {caseStudy.role ? <p className="text-foreground-muted">{caseStudy.role}</p> : null}
        </div>

        <div>
          <Button href={caseStudy.href} variant="secondary">
            {caseStudy.cta}
          </Button>
        </div>
      </div>

      <div className="glow-accent flex flex-col items-center justify-center gap-3 border-t border-border-subtle p-10 lg:border-l lg:border-t-0">
        {caseStudy.proof ? (
          <>
            <span className="font-mono text-5xl font-semibold tracking-tight text-foreground [font-variant-numeric:tabular-nums] md:text-6xl">
              {caseStudy.proof}
            </span>
            {caseStudy.proofLabel ? (
              <span className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
                {caseStudy.proofLabel}
              </span>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
