import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border-subtle bg-surface/60 p-7">
      {caseStudy.proof ? (
        <span className="text-base font-semibold text-accent-hover">{caseStudy.proof}</span>
      ) : null}

      <h3 className="text-xl font-semibold text-foreground">{caseStudy.title}</h3>

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

      <p className="flex-1 text-base leading-relaxed text-foreground-muted">
        {caseStudy.description}
      </p>

      <div>
        <Button href={caseStudy.href} variant="secondary" className="text-sm">
          {caseStudy.cta}
        </Button>
      </div>
    </div>
  );
}
