// Central source of truth for every business fact shown on /mvp and used to
// qualify leads. Nothing here should be hardcoded elsewhere — import from
// this file instead.
//
// ASSUMPTION FLAGGED FOR REVIEW: `minBudgetBand` was given back to me as the
// full list of valid options ("5-10k | 10-25k | 25-50k") rather than a single
// choice. I've set it to the lowest of the three ("5-10k") — the field's own
// name is "lowest acceptable budget band," and that's the first value in the
// list you sent back. Note this sits below `priceMax` ($25,000) but ABOVE
// `priceMin` ($2,000): the hero shows a $2,000 floor price, but the
// qualification bar only accepts budgets of $5k+. That's a real product
// decision (marketing floor vs. qualification floor) — confirm this is
// intentional, or tell me the actual minimum band.
export const MVP_CONFIG = {
  // Pricing
  priceMin: "$2,000",
  priceMax: "$25,000",
  minBudgetBand: "5-10k" as const,
  discoveryPrice: "$500",
  discoveryDuration: "1 week",
  discoveryCreditedToBuild: true,
  typicalTimeline: "3–6 weeks",

  // Booking & tracking
  calendlyUrl: "https://calendly.com/ishraqqureshi/ai-product-discovery-call",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  // META_CAPI_ACCESS_TOKEN lives in server env only (lib/meta-capi.ts), never here.

  // Identity
  name: "Ishraq Qureshi",
  role: "AI Product Engineer & SaaS Architect",
  location: "Karachi, Pakistan (UTC+5)",
  overlapLine: "5+ hours overlap with US Eastern, full overlap with UK/EU",
  photoPath: "/ishraq/profile.jpg",
  linkedinUrl: "https://www.linkedin.com/in/ishraq-qureshi",
  contactEmail: "hello@ishraqqureshi.com",

  // Social proof — sections render ONLY if these are non-empty/true.
  testimonials: [] as Array<{
    quote: string;
    name: string;
    title: string;
    company: string;
    photo?: string;
    linkedin?: string;
  }>,
  // Confirmed false: the 30+ showrooms / 100+ vehicles figures are seeded/test
  // data, not real onboarded businesses. Those stats must not appear anywhere
  // this flag is checked.
  harakaDataIsReal: false,
};

export const primaryCtaLabel = "Apply for a Free MVP Scoping Call";
export const ctaMicrocopy = "2-minute application · 15-minute call · No obligation";
