import { MVP_CONFIG, primaryCtaLabel, ctaMicrocopy } from "@/content/mvp-config";

export { primaryCtaLabel, ctaMicrocopy };

export const mvpHero = {
  eyebrow: "FOR FOUNDERS WITH A VALIDATED SAAS OR AI IDEA",
  headline: "Turn Your Validated SaaS or AI Idea Into a Working MVP — Without Hiring a Full-Time Engineering Team",
  // Mobile-only variant so the price pills + CTA fit above the fold on a
  // 375×667 viewport — see components/mvp/MvpHero.tsx.
  headlineShort: "Turn Your Validated SaaS or AI Idea Into a Working MVP",
  sub: `I'm Ishraq, a senior full-stack and AI product engineer with 9+ years building SaaS platforms and marketplaces. I scope, architect and build your MVP end-to-end, so you get a product real users can log into, not a demo.`,
  facts: [
    `Typical MVP: ${MVP_CONFIG.priceMin}–${MVP_CONFIG.priceMax}`,
    MVP_CONFIG.typicalTimeline,
    "You own 100% of the code",
  ],
  photoCaption: `${MVP_CONFIG.name} · ${MVP_CONFIG.location}`,
  trustStrip: "9+ years in production software · Next.js · Supabase/Postgres · OpenAI & Anthropic APIs · Stripe",
};

export const mvpFitCheck = {
  heading: "This Is for You If…",
  good: {
    label: "Good fit",
    items: [
      "You've validated demand: paying customers, pre-orders/LOIs, a real waitlist, 10+ customer interviews, or an existing business process you own",
      `You have a realistic budget in the ${MVP_CONFIG.priceMin}–${MVP_CONFIG.priceMax} range, or can get there in the next 3 months`,
      "You want one senior engineer who makes technical decisions, not a team you have to manage",
      "You want to launch in weeks, not quarters",
    ],
  },
  notFit: {
    label: "Not a fit",
    items: [
      "You only have an idea and haven't talked to potential customers yet",
      "You're looking for the cheapest developer available",
      "You need a marketing website, not a product",
      "You want unlimited features without a defined scope",
    ],
  },
};

export const mvpProblem = {
  heading: "Validated Ideas Still Die in the Build",
  body: "Not because the market isn't there, but because founders build the wrong thing, hire the wrong team, or spend six months on features nobody asked for. Before a single line of code, someone has to decide what the MVP actually is and how it should be built. That's the job I do first.",
};

export const mvpAiObjection = {
  heading: `"Why Not Just Build It With Lovable, Bolt or Cursor?"`,
  bodyOne:
    "You can, for a demo. AI tools are excellent at producing screens that look finished. They are much worse at the parts that decide whether real users can trust your product: authentication that doesn't leak data, permissions that hold up, payments that reconcile, and a data model that survives your first thousand users.",
  bodyTwo:
    "I use AI agents every day. That's how I build fast. But every change goes through tests and review. On my last marketplace build, review caught an authorization bug that would have let users access data they shouldn't have, before it ever reached production. AI gives me speed; 9 years of engineering judgment decides what ships.",
  comparison: {
    aiAlone: {
      label: "AI tools on their own",
      items: ["Fast demo", "Security and permissions left to chance", "Hard to extend past v1", "You debug it yourself"],
    },
    aiAccelerated: {
      label: "AI-accelerated engineering",
      items: [
        "Fast and production-grade",
        "Auth and permissions enforced at the database",
        "Architecture built to evolve",
        "A senior engineer accountable for it",
      ],
    },
  },
};

export const mvpHowItWorks = {
  heading: "How We Work Together",
  steps: [
    {
      number: "01",
      title: "Free 15-Minute Scoping Call",
      description:
        "We talk through what you're building, who it's for, and what you've validated. You leave knowing whether an MVP makes sense now and roughly what it involves.",
    },
    {
      number: "02",
      title: `Discovery & Architecture — ${MVP_CONFIG.discoveryPrice}, ${MVP_CONFIG.discoveryDuration}`,
      description:
        `I turn your idea into a scoped MVP: core user journeys, a feature list with clear in/out decisions, the technical architecture, and a fixed quote and timeline.${
          MVP_CONFIG.discoveryCreditedToBuild ? " The full fee is credited toward your build." : ""
        }`,
    },
    {
      number: "03",
      title: `MVP Build — ${MVP_CONFIG.priceMin}–${MVP_CONFIG.priceMax}, ${MVP_CONFIG.typicalTimeline}`,
      description:
        "Fixed-price milestones. Your code lives in your GitHub from day one, with a staging link you can click through and a short demo every week.",
    },
    {
      number: "04",
      title: "Launch & Beyond",
      description:
        "Production deployment, testing, documentation and handover. After launch, you can keep me on as your ongoing technical partner, or take the codebase to your own team with zero lock-in.",
    },
  ],
};

export const mvpWhatYouGet = {
  heading: "What's Included",
  items: [
    "100% code and IP ownership",
    "Repo in your GitHub from day one",
    "Weekly demo and progress update",
    "Staging environment you can test anytime",
    "Documentation and technical handover",
    "A roadmap for what comes after the MVP",
  ],
};

export const mvpAbout = {
  heading: "Who You'll Be Working With",
  body: "I'm Ishraq Qureshi, an AI product engineer and SaaS architect. For 9+ years I've built SaaS platforms, marketplaces, LMS products, AI-powered applications and business automation systems. You work directly with me, not an account manager and not a rotating team.",
  locationLine: `Based in ${MVP_CONFIG.location} · ${MVP_CONFIG.overlapLine}`,
};

export const mvpFaq = [
  {
    question: "How much does an MVP cost?",
    answer: `Most MVPs I build land between ${MVP_CONFIG.priceMin} and ${MVP_CONFIG.priceMax}. Discovery & Architecture is ${MVP_CONFIG.discoveryPrice}, and you get a fixed quote at the end of it, before committing to the build.`,
  },
  {
    question: "How long does it take?",
    answer: `Typically ${MVP_CONFIG.typicalTimeline}. Tight scopes can be faster; complex integrations take longer. You'll get a specific timeline after Discovery.`,
  },
  {
    question: "I'm not technical. Is that a problem?",
    answer:
      "No. Most of my clients aren't. I translate between product and engineering, make the technical decisions, and explain the trade-offs in plain language.",
  },
  {
    question: "Where are you based, and how does working remotely work?",
    answer: `I'm based in ${MVP_CONFIG.location}, with ${MVP_CONFIG.overlapLine}. We communicate async on Slack or email, plus a live check-in each week.`,
  },
  {
    question: "Who owns the code?",
    answer: "You do, completely. It lives in your GitHub from day one.",
  },
  {
    question: "What if my scope changes mid-build?",
    answer: "Changes are logged, estimated, and approved by you before any work starts on them. No surprise invoices.",
  },
  {
    question: "Can you work with my existing team?",
    answer: "Yes. I can lead the build, work alongside your developers, or set up the architecture for them to build on.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You can keep me on as an ongoing technical partner for new features and scaling, or hand the codebase to your own team with full documentation.",
  },
  {
    question: "Do you only build AI products?",
    answer: "No. I build SaaS and marketplace products too. AI is added only where it gives the product a real advantage.",
  },
];

export const mvpFinalCta = {
  heading: "Have a Validated Idea? Let's See If It's Ready to Build.",
  sub: "Apply in 2 minutes. If it's a fit, you'll book a 15-minute call right away. If it's not, I'll tell you honestly what to do first.",
};
