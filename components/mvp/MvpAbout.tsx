import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MVP_CONFIG } from "@/content/mvp-config";
import { mvpAbout } from "@/content/mvp";

export function MvpAbout() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-14 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">About</span>
          <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.5rem]">
            {mvpAbout.heading}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">{mvpAbout.body}</p>
          <p className="text-base text-foreground-faint">{mvpAbout.locationLine}</p>
          <a
            href={MVP_CONFIG.linkedinUrl}
            className="text-sm font-medium text-accent-hover underline underline-offset-4 hover:text-accent"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div>
          <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-border-subtle bg-linear-to-br from-surface to-surface-elevated lg:mx-auto">
            <Image
              src={MVP_CONFIG.photoPath}
              alt={MVP_CONFIG.name}
              fill
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
