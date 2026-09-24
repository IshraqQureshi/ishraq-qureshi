import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MVP_CONFIG } from "@/content/mvp-config";

/** Renders nothing unless real, verified testimonials exist in MVP_CONFIG. */
export function MvpTestimonials() {
  if (MVP_CONFIG.testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading title="What Clients Say" />
        <div className="grid gap-6 md:grid-cols-3">
          {MVP_CONFIG.testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-5 rounded-2xl border border-border-subtle bg-surface/60 p-7"
            >
              <p className="flex-1 text-base leading-relaxed text-foreground-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {testimonial.photo ? (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border-subtle">
                    <Image src={testimonial.photo} alt={testimonial.name} fill sizes="40px" className="object-cover" />
                  </div>
                ) : null}
                <div className="flex flex-col">
                  {testimonial.linkedin ? (
                    <a
                      href={testimonial.linkedin}
                      className="text-sm font-medium text-foreground hover:text-accent-hover"
                    >
                      {testimonial.name}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-foreground">{testimonial.name}</span>
                  )}
                  <span className="text-xs text-foreground-faint">
                    {testimonial.title} · {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
