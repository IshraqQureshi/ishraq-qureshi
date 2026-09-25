import Image from "next/image";
import { Container } from "@/components/ui/Container";

const credentials = [
  "9+ Years Experience",
  "SaaS & AI Products",
  "Production Systems",
  "Full-Stack Architecture",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:items-end lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
            About
          </span>
          <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[2.5rem]">
            I&apos;m Ishraq — an AI Product Engineer &amp; SaaS Architect.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
            With 9+ years of experience, I&apos;ve built SaaS platforms, marketplaces, education
            systems, and AI-powered products for businesses around the world.
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
            Today, I help founders turn ambitious ideas into production-ready products —
            combining AI-native development with senior engineering judgment.
          </p>

          <ul className="mt-2 flex flex-wrap gap-3">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="rounded-md border border-border-subtle px-3 py-1.5 text-xs font-medium text-foreground-muted"
              >
                {credential}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-4/5 w-full max-w-150 lg:ml-auto">
          <Image
            src="/ishraq/profile.png"
            alt="Ishraq Qureshi"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </Container>
    </section>
  );
}
