import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/services";
import { supportingCaseStudies, featuredCaseStudy } from "@/content/case-studies";
import { siteConfig, socialLinks } from "@/content/site";

const workLinks = [featuredCaseStudy, ...supportingCaseStudies];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container className="grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-sm text-foreground-muted">{siteConfig.role}</span>
        </div>

        <nav aria-label="Services">
          <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">
            SERVICES
          </p>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Work">
          <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">WORK</p>
          <ul className="flex flex-col gap-2">
            {workLinks.map((project) => (
              <li key={project.href}>
                <Link
                  href={project.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <p className="mb-3 text-xs font-semibold tracking-widest text-foreground-faint">
            CONNECT
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={socialLinks.linkedin}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={socialLinks.github}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border-subtle py-6 text-xs text-foreground-faint md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </span>
      </Container>
    </footer>
  );
}
