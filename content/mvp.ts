export const mvpHero = {
  eyebrow: "AI Product Engineering for Founders",
  headline: "Turn Your Validated SaaS or AI Idea Into a Working MVP — Without Hiring a Full-Time Engineering Team",
  subheadline:
    "Bring your validated product idea. In 15 minutes, we'll identify what your MVP actually needs, what can wait, and what the technical path could look like.",
  supportingLine: "No obligation. Just a focused conversation about your product.",
  primaryCta: "Get a Free 15-Minute MVP Assessment",
  secondaryCta: "See How It Works",
  trustLine: "9+ Years Building SaaS and Business Software · AI Product Engineering · Full-Stack Architecture",
};

export const mvpValidated = {
  label: "What Does \"Validated\" Mean?",
  paragraph:
    "You don't need a finished product. Validation could mean you've spoken with potential customers, identified a real business problem, received meaningful interest or signups, have existing customers asking for the solution, or have another credible signal that people need what you're building.",
  note: "Still just exploring an idea? That's okay — but your first step may be validation, not development.",
};

export const mvpCallAgenda = {
  label: "Get a Free 15-Minute MVP Assessment",
  intro: "During the call, we'll discuss:",
  items: [
    "What you're building",
    "Who it's for",
    "What you've already validated",
    "What the MVP actually needs",
    "What can be left for later",
    "The likely technical path forward",
  ],
};

export const mvpPreCta = {
  message: "Before you spend months hiring developers or building the wrong features, let's figure out what your MVP actually needs.",
};

export const mvpProblem = {
  headline: "You Don't Need a Full Engineering Team to Find Out If Your Product Can Work.",
  intro:
    "A validated idea can still get stuck. Not because the opportunity isn't real, but because the founder doesn't yet know:",
  points: [
    "What actually needs to be built",
    "What should be excluded from the MVP",
    "Which technology decisions matter",
    "How much development is really required",
    "How to find and manage engineers",
    "How to avoid wasting months building unnecessary features",
  ],
  reframe: "The problem isn't simply finding a developer. It's having someone who can make sound technical decisions and actually execute.",
  closing: "That's where I come in.",
};

export type OfferStage = {
  number: string;
  title: string;
  summary: string;
};

export const mvpOffer = {
  headline: "From Validated Idea to Working MVP",
  stages: [
    {
      number: "01",
      title: "Product Clarification",
      summary:
        "Turn the validated idea into a focused MVP — clarifying the core user journey, defining essential functionality, removing unnecessary features, and identifying technical requirements.",
    },
    {
      number: "02",
      title: "Architecture",
      summary:
        "A technical foundation designed around your actual product requirements — without overbuilding the MVP.",
    },
    {
      number: "03",
      title: "MVP Development",
      summary:
        "Build the actual product — a working MVP your users can log into and use, with the underlying capabilities (authentication, payments, integrations, AI features) built to support the product, not to impress.",
    },
    {
      number: "04",
      title: "Launch",
      summary:
        "Get the MVP into a usable state — testing, production deployment, bug fixing, technical handover, and a clear roadmap for what comes next.",
    },
  ] satisfies OfferStage[],
};

export const mvpDifferentiation = {
  headline: "Not Just Someone Who Writes the Code",
  intro:
    "A development team can build whatever is written in the requirements. The harder part is deciding what should actually be built.",
  typical: {
    label: "A Typical Development Engagement",
    quote: "You provide requirements. Developers implement them.",
  },
  partner: {
    label: "This Engagement",
    quote: "We clarify what should actually be built, make the technical decisions, and then build it.",
  },
  coreMessage: "The goal isn't to build more software. It's to build the right MVP.",
  areas: [
    "Know what to build",
    "Avoid wasted spend on unnecessary features",
    "Skip hiring and managing an engineering team",
    "One experienced technical partner",
    "A working product real users can use",
    "A foundation that can evolve after the MVP",
  ],
};

export const mvpExperience = {
  headline: "9+ Years Building Business Software",
  description:
    "Experience across SaaS platforms, marketplaces, AI-powered applications, LMS platforms, business automation, API-driven systems, and cloud deployments — evidence of the technical depth behind every MVP.",
  areas: [
    "SaaS Platforms",
    "Marketplaces",
    "AI-Powered Applications",
    "LMS Platforms",
    "Business Automation",
    "API-Driven Systems",
    "Cloud Deployments",
  ],
};

export const mvpAi = {
  eyebrow: "AI-Accelerated Engineering",
  headline: "AI Helps Me Move Faster. Experience Keeps the Product Grounded.",
  description:
    "AI-assisted development accelerates prototyping, code generation, refactoring, documentation, testing, and day-to-day workflows.",
  caveat: "AI doesn't replace architecture, engineering judgment, product decisions, or testing.",
  panels: {
    speed: {
      label: "AI Speed",
      items: ["Faster prototyping", "Code generation", "Refactoring & documentation", "Testing workflows"],
    },
    judgment: {
      label: "Engineering Judgment",
      items: ["Architecture decisions", "Product trade-offs", "Security & scalability", "Real-world testing"],
    },
  },
};

export const mvpFit = {
  headline: "This Is a Good Fit If...",
  good: {
    label: "Good Fit",
    items: [
      "You have a SaaS or AI product idea",
      "You've identified a real problem",
      "You've already spoken to potential users/customers, or have another meaningful validation signal",
      "You need technical execution",
      "You don't want to build and manage a full engineering team",
      "You're ready to invest in turning the idea into a real product",
    ],
  },
  notFit: {
    label: "Probably Not a Fit If...",
    items: [
      "You only have a vague idea with no validation",
      "You're looking for the cheapest developer available",
      "You only need a simple marketing website",
      "You expect unlimited features without a defined scope",
      "You're not currently ready to invest in development",
    ],
  },
};

export const mvpCallSteps = {
  headline: "Start With 15 Minutes",
  note: "This call is not a hard sales pitch.",
  steps: [
    {
      number: "01",
      title: "Tell Me About the Product",
      description: "Explain what you're building and who it's for.",
    },
    {
      number: "02",
      title: "We Identify the MVP",
      description: "Discuss what needs to be built first and what can wait.",
    },
    {
      number: "03",
      title: "Decide the Next Step",
      description: "If there's a genuine fit, I'll explain the technical path forward.",
    },
  ],
};

export const mvpFaq = [
  {
    question: "Do I need a fully documented product?",
    answer:
      "No. You should have a reasonably validated idea, but the product can still be refined together.",
  },
  {
    question: "Do you only work on AI products?",
    answer:
      "No. SaaS and other software products are also supported. AI is used where it provides a genuine product advantage.",
  },
  {
    question: "Can you work with an existing team?",
    answer: "Yes. The engagement can be structured around an existing technical team when appropriate.",
  },
  {
    question: "Do you handle architecture as well as development?",
    answer: "Yes. Architecture and technical decision-making are part of the engagement.",
  },
  {
    question: "How long does an MVP take?",
    answer:
      "It depends on scope, integrations, complexity, and how ready the requirements are — there's no single universal timeline.",
  },
  {
    question: "How much does an MVP cost?",
    answer:
      "Every MVP is scoped differently. After understanding the product and required functionality, I can recommend the appropriate engagement and provide a clear estimate.",
  },
  {
    question: "Do you work with founders outside your country?",
    answer: "Yes. Remote collaboration is supported.",
  },
];

export const mvpFinalCta = {
  eyebrow: "Ready When You Are",
  headline: "You Have the Validated Idea. Let's Figure Out What It Takes to Build It.",
  description: "Get a free 15-minute MVP assessment and leave with a clearer understanding of your next technical step.",
  primaryCta: "Get a Free 15-Minute MVP Assessment",
  supportingLine: "No obligation. Just a focused conversation about your product.",
};
