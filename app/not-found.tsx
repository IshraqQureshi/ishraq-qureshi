import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="flex min-h-[60vh] items-center py-24 md:py-32">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">
            404
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Page Not Found
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-foreground-muted">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </Container>
      </section>
    </main>
  );
}
