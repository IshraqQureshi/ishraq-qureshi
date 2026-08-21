import { Container } from "@/components/ui/Container";

export function AudienceStatement() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-20 md:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance max-w-3xl text-[2rem] font-semibold leading-[1.2] tracking-tight text-foreground md:text-[2.75rem]">
          Built for founders, businesses &amp; agencies building their next AI-powered product.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">
          Whether you&apos;re starting from an idea, running a business that needs a technical
          edge, or already have a prototype or product that needs experienced direction — I help
          you figure out what to build and how to build it right.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {["Founders", "Businesses", "Agencies"].map((audience) => (
            <span
              key={audience}
              className="rounded-md border border-border-subtle px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground-muted"
            >
              {audience}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
