import { ArchitectureVisual } from "@/components/hero/ArchitectureVisual";
import { Badge } from "@/components/ui/Badge";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta, siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="glow-accent relative overflow-hidden pb-16 pt-14 md:pb-20 md:pt-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col items-start gap-7">
          <div className="animate-fade-up">
            <Badge>{siteConfig.role.toUpperCase()}</Badge>
          </div>

          <h1 className="animate-fade-up text-balance max-w-2xl text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-foreground [animation-delay:80ms] md:text-[3.5rem] lg:text-[4rem]">
            Turn Your AI Idea Into a Production-Ready Product
          </h1>

          <p className="animate-fade-up max-w-xl text-lg leading-relaxed text-foreground-muted [animation-delay:160ms] md:text-xl">
            {siteConfig.description}
          </p>

          <div className="animate-fade-up flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <BookCallButton variant="primary" className="px-7 py-3.5 text-base">
              {cta.primary}
            </BookCallButton>
            <Button href="#work" variant="secondary">
              {cta.secondary}
            </Button>
          </div>

          <p className="animate-fade-up text-sm text-foreground-faint [animation-delay:320ms]">
            9+ Years Engineering Experience · SaaS · AI · Cloud · Production Systems
          </p>
        </div>

        <div className="animate-fade-up lg:mt-2 [animation-delay:200ms]">
          <ArchitectureVisual />
        </div>
      </Container>
    </section>
  );
}
