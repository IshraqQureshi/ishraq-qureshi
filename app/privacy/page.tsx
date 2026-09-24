import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MVP_CONFIG } from "@/content/mvp-config";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How data submitted on this site is collected, used, and stored.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// TODO: review — this is standard boilerplate covering what the /mvp
// application form, Calendly, Meta Pixel/CAPI, and email delivery actually
// do. It is not a substitute for real legal review before this goes live to
// paid ad traffic.
export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="py-24 md:py-32">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-hover">Legal</span>
            <h1 className="text-balance max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[3rem]">
              Privacy Policy
            </h1>
            <p className="text-sm text-foreground-faint">Last updated: {new Date().toISOString().slice(0, 10)}</p>
          </div>

          <div className="flex max-w-3xl flex-col gap-8 text-base leading-relaxed text-foreground-muted">
            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Who this covers</h2>
              <p>
                This policy covers {siteConfig.url}, operated by {MVP_CONFIG.name}. Contact{" "}
                <a href={`mailto:${MVP_CONFIG.contactEmail}`} className="underline underline-offset-2 hover:text-foreground">
                  {MVP_CONFIG.contactEmail}
                </a>{" "}
                with any privacy question, including requests to access or delete your data.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Data collected through the application form</h2>
              <p>
                When you apply for a free MVP scoping call, I collect your name, email, role, a description of what
                you&apos;re building, your validation status, budget range, funding status, target timeline, and any
                link you choose to share. I use this to decide whether a scoping call is a good use of both our
                time, and to follow up with you by email.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Scheduling</h2>
              <p>
                If your application qualifies, you&apos;ll book a call through Calendly. Calendly processes the name,
                email, and any details you provide at booking under its own privacy policy.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Analytics and advertising</h2>
              <p>
                This site uses Vercel Analytics for aggregate page-view statistics, and Meta Pixel with the Meta
                Conversions API to measure the performance of Meta (Facebook/Instagram) ad campaigns. This can
                include a hashed version of your email address, your IP address, browser identifiers, and standard
                Meta click identifiers (fbp/fbc), sent to Meta for ad measurement and optimization. Where required
                (EU/EEA/UK/Switzerland), this only happens after you accept the consent banner shown on this site.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Data retention and deletion</h2>
              <p>
                Application data is retained for as long as needed to evaluate and follow up on your inquiry.
                Email me at {MVP_CONFIG.contactEmail} to request deletion of your data at any time.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
