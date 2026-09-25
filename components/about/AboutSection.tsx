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
    <section id="about" className="relative overflow-hidden py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:max-w-lg">
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
      </Container>

      <div className="relative mx-auto mt-10 aspect-4/5 w-full max-w-150 lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:mt-0 lg:w-150">
        <Image
          src="/ishraq/profile.png"
          alt="Ishraq Qureshi"
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}
