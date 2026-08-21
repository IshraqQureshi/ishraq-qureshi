import { MetricGrid } from "@/components/case-study/MetricGrid";

type Metric = { value: string; label: string };

type OutcomeSectionProps = {
  headline: string;
  description: string;
  metrics: Metric[];
};

export function OutcomeSection({ headline, description, metrics }: OutcomeSectionProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.5rem]">
          {headline}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">{description}</p>
      </div>
      <MetricGrid metrics={metrics} />
    </div>
  );
}
