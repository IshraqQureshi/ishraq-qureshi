export const marketplace = {
  slug: "marketplace",
  eyebrow: "Commerce Engineering",
  title: "Multi-Vendor Marketplace",
  tagline: "Microservices Architecture for Multi-Vendor Commerce",
  description:
    "Built a multi-vendor commerce platform around a 12-service microservices architecture, with Next.js, NestJS, MySQL, Stripe payments, recurring billing, and AWS infrastructure.",
  stack: ["Next.js", "NestJS", "MySQL", "Stripe", "AWS", "Microservices"],

  proofMetrics: [
    { value: "12", label: "Microservices" },
    { value: "5", label: "Team Members" },
    { value: "4 Months", label: "Project Duration" },
  ],
  teamMetric: { value: "Stripe", label: "Payments & Recurring Billing" },

  heroFlow: ["Client", "Next.js", "API Gateway", "12 Microservices", "MySQL", "Stripe"],

  overview: [
    { label: "Project", value: "Multi-Vendor Marketplace" },
    { label: "Role", value: "Lead Developer & SME" },
    { label: "Team", value: "5 members" },
    { label: "Duration", value: "4 months" },
    { label: "Architecture", value: "12 microservices" },
    { label: "Frontend", value: "Next.js" },
    { label: "Backend", value: "NestJS" },
    { label: "Database", value: "MySQL" },
    { label: "Payments", value: "Stripe Checkout + Webhooks" },
    { label: "Billing", value: "Recurring payments" },
    { label: "Cloud", value: "AWS" },
    { label: "Language", value: "English" },
  ],

  challenge: {
    headline: "A Marketplace Is More Than an Online Store.",
    description:
      "A multi-vendor marketplace has more moving parts than a conventional single-store commerce application. The platform needed a backend architecture capable of separating business responsibilities while supporting commerce workflows and payment operations.",
    cards: [
      {
        number: "01",
        title: "Multi-Vendor Complexity",
        description: "Multiple business responsibilities needed to coexist within one commerce platform.",
      },
      {
        number: "02",
        title: "Service Separation",
        description:
          "The backend needed to be organized into independently structured services rather than becoming one increasingly complex application.",
      },
      {
        number: "03",
        title: "Payment Operations",
        description:
          "The platform needed reliable Stripe Checkout integration, webhook handling, and recurring payment workflows.",
      },
    ],
  },

  transformation: {
    headline: "From One Commerce Platform to Twelve Focused Services",
    description:
      "The platform was structured as 12 microservices, with NestJS providing the backend foundation and Next.js powering the frontend experience.",
    flow: [
      "Commerce Platform",
      "Domain Separation",
      "Microservices",
      "Payment Integration",
      "AWS Deployment",
    ],
  },

  microservices: {
    eyebrow: "System Architecture",
    headline: "Twelve Services. One Marketplace.",
    description:
      "The backend was divided into 12 microservices, creating a distributed architecture for the marketplace rather than concentrating the entire system inside a single backend application.",
    top: ["Next.js", "API Gateway"],
    serviceCount: 12,
    bottom: ["MySQL"],
  },

  whyMicroservices: {
    headline: "Architecture Should Solve a Problem.",
    description:
      "The marketplace was structured around 12 microservices to separate the system's backend responsibilities into focused services.",
    cards: [
      {
        title: "Separation",
        description: "Break a complex commerce platform into focused backend services.",
      },
      {
        title: "Maintainability",
        description:
          "Keep responsibilities isolated instead of allowing the backend to become one increasingly complex codebase.",
      },
      {
        title: "Independent Structure",
        description: "Give distinct areas of the platform their own service boundaries.",
      },
    ],
  },

  apiGateway: {
    eyebrow: "Request Flow",
    headline: "One Entry Point. Twelve Services Behind It.",
    description:
      "The API Gateway provided a central routing layer between the frontend application and the distributed backend services.",
    top: ["Client", "API Gateway"],
    serviceCount: 12,
  },

  payments: {
    eyebrow: "Payment Engineering",
    headline: "Payments Designed Around Stripe.",
    description:
      "Stripe Checkout was integrated into the marketplace to handle payment flows, with webhooks used to process Stripe events and recurring payments supported as part of the billing experience.",
    flow: [
      "Customer",
      "Next.js",
      "Stripe Checkout",
      "Payment",
      "Stripe Webhook",
      "Backend",
      "Application State",
    ],
  },

  recurring: {
    headline: "Commerce Beyond the First Transaction.",
    description:
      "In addition to one-time Checkout flows, the platform supported recurring payments through Stripe.",
    flow: ["Recurring Billing", "Stripe", "Webhook", "Backend"],
  },

  cloud: {
    eyebrow: "Cloud Infrastructure",
    headline: "Built for the Cloud.",
    description: "The application was deployed on AWS, providing the cloud infrastructure behind the marketplace platform.",
  },

  decisions: {
    headline: "Technology Choices With a Reason.",
    cards: [
      { title: "NestJS", description: "Structured backend foundation for the distributed service architecture." },
      { title: "Next.js", description: "Frontend application framework for the marketplace experience." },
      { title: "MySQL", description: "Relational database layer supporting the application." },
      { title: "Microservices", description: "12-service architecture for separating backend responsibilities." },
      { title: "Stripe", description: "Checkout, webhook processing, and recurring payment capabilities." },
      { title: "AWS", description: "Cloud infrastructure for the deployed platform." },
    ],
  },

  realChallenge: {
    headline: "The Complexity Was in the System, Not the UI.",
    description:
      "The core engineering challenge was coordinating a multi-vendor commerce product across a distributed backend, payment workflows, recurring billing, and cloud infrastructure.",
    cards: [
      {
        title: "Distributed Architecture",
        description: "12 backend services needed to form one coherent product.",
      },
      {
        title: "Payment Integration",
        description: "Stripe Checkout and webhook-driven payment processing needed to integrate with the application.",
      },
      {
        title: "Product Complexity",
        description: "The marketplace combined multiple commerce responsibilities within one platform.",
      },
    ],
  },

  role: {
    eyebrow: "My Contribution",
    headline: "Lead Developer & SME",
    areas: [
      {
        title: "Architecture",
        description: "Contributed to the design and implementation of the 12-service microservices architecture.",
      },
      { title: "Backend Engineering", description: "Worked with NestJS across the distributed backend." },
      {
        title: "Payment Engineering",
        description: "Implemented/integrated Stripe Checkout, webhook handling, and recurring payment capabilities.",
      },
      {
        title: "Technical Leadership",
        description: "Worked as Lead Developer & SME within the five-person team.",
      },
    ],
  },

  outcome: {
    headline: "Engineering Quality Doesn't Always Control Business Outcomes.",
    description:
      "The business ultimately did not succeed commercially. The project nevertheless demonstrates the engineering work required to design and build a complex multi-vendor platform within a four-month delivery window.",
    metrics: [
      { value: "12", label: "Microservices" },
      { value: "5-Person", label: "Team" },
      { value: "4-Month", label: "Delivery" },
      { value: "Stripe", label: "Payments" },
    ],
  },

  snapshot: {
    headline: "The Engineering Snapshot",
    metrics: [
      { value: "12", label: "Microservices" },
      { value: "5", label: "Team Members" },
      { value: "4 Months", label: "Project Duration" },
      { value: "Stripe", label: "Checkout + Webhooks + Recurring Payments" },
    ],
    stack: "Next.js · NestJS · MySQL · Stripe · AWS",
  },

  technology: [
    { category: "Frontend", value: "Next.js" },
    { category: "Backend", value: "NestJS" },
    { category: "Database", value: "MySQL" },
    { category: "Payments", value: "Stripe" },
    { category: "Cloud", value: "AWS" },
    { category: "Architecture", value: "12 Microservices" },
  ],

  cta: {
    eyebrow: "Building Something Complex?",
    headline: "Let's Talk Architecture.",
    description:
      "Have a product that needs more than a basic implementation? Let's figure out the right architecture before the complexity gets expensive.",
    primaryCta: "Start With an AI Product Audit",
    secondaryCta: "Back to Case Studies",
  },
};

export type Marketplace = typeof marketplace;
