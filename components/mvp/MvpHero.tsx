import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { MVP_CONFIG, ctaMicrocopy, primaryCtaLabel } from "@/content/mvp-config";
import { mvpHero } from "@/content/mvp";

export function MvpHero() {
  return (
    <section id="mvp-hero" className="glow-accent relative overflow-hidden pb-11 pt-10 md:pb-16 md:pt-16">
      <Container className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">
        <div className="flex flex-col items-start gap-5 md:gap-7">
          <div className="animate-fade-up">
            <Badge>{mvpHero.eyebrow}</Badge>
          </div>

          <h1 className="animate-fade-up text-balance max-w-2xl text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-foreground [animation-delay:80ms] md:text-[3.25rem] lg:text-[3.75rem]">
            {/* Shorter on mobile so the price pills + CTA fit above the fold on a 375×667 viewport; both render server-side, so there's no hydration mismatch. */}
            <span className="sm:hidden">{mvpHero.headlineShort}</span>
            <span className="hidden sm:inline">{mvpHero.headline}</span>
          </h1>

          <p className="animate-fade-up max-w-2xl text-lg leading-relaxed text-foreground-muted [animation-delay:160ms] md:text-xl">
            {mvpHero.sub}
          </p>

          <ul className="animate-fade-up flex flex-wrap gap-2 [animation-delay:200ms]">
            {mvpHero.facts.map((fact) => (
              <li
                key={fact}
                className="rounded-md border border-accent-border bg-accent-muted px-3 py-1.5 text-sm font-medium text-accent-hover"
              >
                {fact}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up flex flex-col items-start gap-2 [animation-delay:240ms]">
            <ApplyButton location="hero" variant="primary" className="px-7 py-3.5 text-base">
              {primaryCtaLabel}
            </ApplyButton>
            <p className="text-sm text-foreground-faint">{ctaMicrocopy}</p>
          </div>

          <p className="animate-fade-up text-sm text-foreground-faint [animation-delay:320ms]">
            {mvpHero.trustStrip}
          </p>
        </div>

        <div className="animate-fade-up flex flex-col items-center gap-3 lg:mt-2 lg:items-end [animation-delay:200ms]">
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-border-subtle bg-linear-to-br from-surface to-surface-elevated">
            <Image
              src={MVP_CONFIG.photoPath}
              alt={MVP_CONFIG.name}
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-foreground-faint">{mvpHero.photoCaption}</p>
        </div>
      </Container>
    </section>
  );
}
