import { MVP_CONFIG } from "@/content/mvp-config";

// Verified by Ishraq — used for the /mvp landing page case-study section.
// The full engineering write-up lives at /work/haraka-gari
// (content/case-studies/haraka-gari.ts); this stays a compact, landing-page-scoped
// summary rather than duplicating that full case study shape.
//
// harakaDataIsReal is false (confirmed: the 30+ showrooms / 100+ vehicles
// figures are seeded/test data, not real onboarded businesses) — so this
// stat set uses only verified engineering facts, never those two numbers.
export const automobileMarketplace = {
  eyebrow: "CASE STUDY",
  heading: "A Two-Sided Marketplace, Live in Production in 6 Days",
  body: "A client needed Haraka Gari, an automobile marketplace connecting buyers with vetted showrooms, live fast without cutting corners on security. I built it end-to-end: customer, showroom and admin roles, vehicle search, financing applications, test-drive booking, and admin moderation.",
  stats: MVP_CONFIG.harakaDataIsReal
    ? [
        { value: "6 days", label: "Kickoff to production" },
        { value: "3 user roles", label: "Customers, showrooms, admins" },
        { value: "30+ showrooms", label: "Onboarded on the platform" },
        { value: "2 security bugs", label: "Caught in review before launch" },
      ]
    : [
        { value: "6 days", label: "Kickoff to production" },
        { value: "3 user roles", label: "Customers, showrooms, admins" },
        { value: "8 core modules", label: "Shipped and tested" },
        { value: "2 security bugs", label: "Caught in review before launch" },
      ],
  note: `Six days came from a tightly defined scope and a disciplined AI-assisted workflow. Most client MVPs take ${MVP_CONFIG.typicalTimeline}, depending on scope and integrations.`,
  caseStudyHref: "/work/haraka-gari",
};
