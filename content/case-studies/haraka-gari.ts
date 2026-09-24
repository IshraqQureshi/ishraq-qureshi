import { primaryCtaLabel } from "@/content/mvp-config";

export const harakaGari = {
  slug: "haraka-gari",
  eyebrow: "AI-Accelerated Engineering",
  title: "Haraka Gari",
  tagline: "A Two-Sided Automobile Marketplace MVP, Built in a 6-Day AI-Agent-Driven Sprint",
  description:
    "Haraka Gari is a two-sided automobile marketplace connecting customers with vetted showrooms: browse and search vehicles, inquire directly, apply for financing, and book test drives, while showrooms manage their own inventory and admins moderate the platform. Built end-to-end — frontend, backend, database, security, and QA — as a Next.js + Supabase application, developed under an AI-agent-driven engineering process (Claude Code) that enforced its own quality gates: mandatory PR review, automated testing, and staged release checkpoints, all defined in a single project constitution.",
  stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS 4"],

  resultSummary:
    "The result: a two-sided marketplace with customer, showroom and admin roles, live in production 6 days after kickoff, with security enforced at the database level and two authorization bugs caught in review before launch.",

  proofMetrics: [
    { value: "6 Days", label: "MVP Build" },
    { value: "268", label: "Commits" },
    { value: "103", label: "Pull Requests" },
  ],
  teamMetric: { value: "630/630", label: "Unit & Integration Tests Passing" },

  heroFlow: ["Client", "Next.js 16", "Server Actions", "Supabase", "PostgreSQL"],

  overview: [
    { label: "Project", value: "Haraka Gari — Automobile Marketplace" },
    { label: "Role", value: "Solo Engineer, AI-Agent-Assisted" },
    { label: "Timeline", value: "6-day MVP build + release day" },
    { label: "Frontend", value: "Next.js 16 (App Router), React 19" },
    { label: "Backend & Data", value: "Supabase — Postgres, Auth, Storage" },
    { label: "Testing", value: "630 unit/integration + 30 E2E specs" },
    { label: "Hosting", value: "Vercel" },
    { label: "Language", value: "English" },
  ],

  challenge: {
    headline: "One Engineer. Six Days. No Room for Shortcuts.",
    description:
      "The brief: ship a production-ready MVP — functional, secure, tested, and visually matched to Figma — on a compressed engineering schedule, with no room for over-engineering. Three constraints shaped every decision.",
    cards: [
      {
        number: "01",
        title: "One Engineer, AI-Agent-Assisted",
        description:
          "Covering architecture, frontend, backend, security, QA, and release engineering, with no dedicated team to split the work across.",
      },
      {
        number: "02",
        title: "A Hard Ban on Scope Creep",
        description:
          "The project's engineering constitution explicitly forbids premature Phase 2 infrastructure — microservices, Redis, queues, API gateways — and requires every feature to trace back to an approved requirement.",
      },
      {
        number: "03",
        title: "A Non-Negotiable Quality Bar",
        description:
          "Every feature needed unit/integration tests, E2E coverage for critical journeys, database-enforced authorization, and independent code review before merge — no shortcuts for speed.",
      },
    ],
  },

  approach: {
    headline: "A Written Constitution, Not Just a Schedule",
    description:
      "The project ran under a written engineering constitution that assigned each phase of work to a specialized agent role — Architect, Frontend, Backend/Data, Full-Stack, Code, QA, E2E, Security, Performance, Code Review, and Release — so no single pass through a feature skipped testing, security, or review. Every feature moved through the same lifecycle: inspect existing code, plan, implement, unit/integration test, E2E test, security review, open a PR, get independent code-review approval, merge, then update the live progress tracker.",
    days: [
      { day: "01", focus: "Foundation, authentication, UI shell, test infrastructure." },
      { day: "02", focus: "Showrooms, vehicle CRUD, admin foundation." },
      { day: "03", focus: "Marketplace: vehicle and showroom discovery, search, filters." },
      { day: "04", focus: "Finance calculator, inquiry flow, admin dashboard." },
      { day: "05", focus: "Integration, security and performance review, release-candidate prep." },
      { day: "06", focus: "Dedicated QA and full E2E regression." },
      { day: "07", focus: "Production deploy and smoke tests." },
    ],
    scopeNote:
      "Two features grew past the original plan mid-build: a full appointment/test-drive booking system with database-level double-booking prevention, and admin/showroom analytics dashboards. Both were added only after being logged as explicit client requests and independently reviewed and approved — not silent scope creep.",
  },

  architecture: {
    eyebrow: "System Architecture",
    headline: "A Modular Monolith, Not a Microservices Head Start",
    description:
      "The architecture layers UI, business logic, and data access on top of Supabase and PostgreSQL — clean boundaries left open for a future migration to a dedicated backend, but nothing built prematurely for that future. No Redis, no message queues, no microservices.",
    cards: [
      {
        title: "Database-Enforced Authorization",
        description:
          "A Postgres trigger blocks showroom self-approval, and a BEFORE UPDATE trigger blocks customers from tampering with their own appointment status or schedule — hardened twice after a gap surfaced in review.",
      },
      {
        title: "Double-Booking Prevention",
        description:
          "A range-overlap exclusion constraint at the database layer prevents appointment double-booking, rather than relying on application-level checks alone.",
      },
      {
        title: "55 Migrations to Production",
        description:
          "The schema evolved through 55 migrations applied to the production database by launch, tracked alongside every feature that depended on it.",
      },
    ],
  },

  technology: [
    { category: "Frontend", value: "Next.js 16, React 19, TypeScript" },
    { category: "Backend & Data", value: "Supabase (Postgres, Auth, Storage)" },
    { category: "Validation", value: "Zod" },
    { category: "Testing", value: "Vitest + Playwright" },
    { category: "Integrations", value: "Recharts · Nodemailer" },
    { category: "Hosting", value: "Vercel" },
  ],

  features: {
    headline: "What Shipped",
    cards: [
      {
        title: "Authentication",
        description:
          "Registration, login/logout, password reset, session handling, and role-based access for customer, showroom, and admin.",
      },
      {
        title: "Showrooms",
        description:
          "Registration, profile management, admin approval workflow, and a public showroom directory with detail pages.",
      },
      {
        title: "Vehicles",
        description:
          "Add/edit/soft-delete, image uploads, specifications, pricing, status, listing, and SEO-friendly detail pages.",
      },
      {
        title: "Marketplace Discovery",
        description:
          "Homepage, vehicle search/filter/sort/pagination, SEO-friendly URLs, sitemap, and structured data (JSON-LD).",
      },
      {
        title: "Finance Calculator",
        description:
          "Loan amount, interest, term, and monthly payment, plus a full \"Apply for Financing\" flow with insurance and tracker options.",
      },
      {
        title: "Appointment Booking",
        description:
          "Test-drive scheduling with conflict-free time slots, rescheduling, and multi-vehicle bookings — added mid-build on client request.",
      },
      {
        title: "Inquiries",
        description:
          "A vehicle inquiry form to showrooms, currently email-based; a WhatsApp Business API redirect was scoped but not yet implemented.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Showroom and vehicle moderation, user management, brand/model/type catalog CRUD, and analytics/reports for admins and showrooms.",
      },
    ],
  },

  quality: {
    headline: "A Quality Bar the Timeline Didn't Get to Skip",
    description:
      "Every PR went through independent code review before merge, and review caught real, fixable issues pre-production — including an unauthorized service-role data path in an owner-search feature, and two rounds of hardening on a database trigger that let customers self-confirm or reschedule their own appointments.",
    metrics: [
      { value: "630/630", label: "Unit & Integration Tests Passing" },
      { value: "30", label: "Playwright E2E Spec Files" },
      { value: "103", label: "Pull Requests, Independently Reviewed" },
      { value: "268", label: "Commits" },
    ],
  },

  outcome: {
    headline: "What's Next for the Platform",
    description:
      "The application is live in production on Vercel, backed by a production Supabase project with 55 database migrations applied. Homepage, vehicle listings, vehicle detail, showroom directory, and admin were all smoke-tested successfully post-deploy. In the interest of accuracy: deployment happened, but the project's own formal release gate was not fully closed out at last check — authentication, the finance calculator, inquiries, and login were not yet re-verified against production, and the tracker records status as \"live, partially verified — not yet a formal release-gate pass.\" Nine items remain open, most notably: no live WhatsApp Business API integration (inquiries currently go by email), no production Google OAuth or SMTP, placeholder legal pages, and a Next.js routing quirk that returns HTTP 200 instead of a proper 404 on some routes.",
    metrics: [
      { value: "Live", label: "Production (Vercel + Supabase)" },
      { value: "55", label: "DB Migrations Applied" },
      { value: "9 Open", label: "Items Before Formal Release Gate" },
      { value: "6 Days", label: "From Foundation to Deploy" },
    ],
  },

  lessons: {
    headline: "What This Sprint Confirmed",
    cards: [
      {
        title: "A Written Constitution Holds the Line",
        description:
          "An agent-enforced constitution kept quality gates from eroding under time pressure — code review and security review caught real authorization bugs, not hypothetical ones, before they reached production.",
      },
      {
        title: "A Living Tracker Beats Commit History",
        description:
          "A progress tracker updated after nearly every PR made real status knowable at any point — commit history alone doesn't say whether a feature is tested, reviewed, or production-verified.",
      },
      {
        title: "Release Gates Are the Easiest Thing to Under-Run",
        description:
          "Both remain open here, so closing out security/performance sign-off and full production re-verification is the clearest next step.",
      },
      {
        title: "Scope Changes Worked Because They Were Logged",
        description:
          "Mid-build additions — appointment booking, analytics — worked because they were logged, justified against the requirements doc, and independently reviewed, not because they were skipped.",
      },
    ],
  },

  cta: {
    eyebrow: "Building Something on a Deadline?",
    headline: "Let's Talk About Your MVP Timeline.",
    description:
      "Have a validated idea and a real deadline? Let's figure out what a disciplined, AI-accelerated build actually looks like for your product.",
    primaryCta: primaryCtaLabel,
    secondaryCta: "Back to Case Studies",
  },
};

export type HarakaGari = typeof harakaGari;
