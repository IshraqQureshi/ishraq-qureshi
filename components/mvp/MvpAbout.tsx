import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MVP_CONFIG } from "@/content/mvp-config";
import { mvpAbout } from "@/content/mvp";

export function MvpAbout() {
  return (
    <section className="relative overflow-hidden py-0 md:py-[145px]">
      <Container>
        <div className="flex flex-col gap-6 lg:max-w-lg">
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
      </Container>

      <div className="relative mx-auto mt-10 aspect-4/5 w-full max-w-150 lg:absolute lg:top-0 lg:right-[300px] lg:mx-0 lg:mt-0 lg:w-150">
        <Image
          src={MVP_CONFIG.photoPath}
          alt={MVP_CONFIG.name}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-contain object-bottom"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 75% at 50% 45%, #000 30%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 70% 75% at 50% 45%, #000 30%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
