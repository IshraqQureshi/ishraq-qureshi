export const lms = {
  slug: "lms",
  eyebrow: "Product Engineering",
  title: "LMS Platform",
  tagline: "A Modular Monolith Built for a Complete Learning Experience",
  description:
    "Built and delivered a full-stack learning platform using React, NestJS, MySQL, Firebase, Stripe, Docker, Jenkins CI/CD, and Azure.",
  stack: ["React", "NestJS", "MySQL", "Firebase", "Stripe", "Docker", "Azure"],

  proofMetrics: [
    { value: "4", label: "Team Members" },
    { value: "4 Months", label: "Project Duration" },
    { value: "Modular Monolith", label: "Architecture" },
  ],
  teamMetric: { value: "Lead Full Stack Developer", label: "Role" },

  heroFlow: ["React", "NestJS Application", "Modular Monolith", "MySQL"],

  overview: [
    { label: "Project", value: "LMS Platform" },
    { label: "Role", value: "Lead Full Stack Developer" },
    { label: "Team", value: "4 members" },
    { label: "Duration", value: "4 months" },
    { label: "Architecture", value: "Modular Monolithic" },
    { label: "Frontend", value: "React" },
    { label: "Backend", value: "NestJS" },
    { label: "Database", value: "MySQL" },
    { label: "Authentication", value: "JWT" },
    { label: "Payments", value: "Stripe" },
    { label: "Communication", value: "Firebase FCM + Chat" },
    { label: "Cloud", value: "Azure" },
    { label: "DevOps", value: "Docker + Jenkins CI/CD" },
  ],

  challenge: {
    headline: "Build a Complete Product Without Overengineering the Architecture.",
    description:
      "The platform needed a structured backend, authentication, payments, communication, and cloud delivery within a four-month project timeline. The architecture needed enough internal separation to keep the codebase maintainable without introducing unnecessary distributed-system complexity.",
    cards: [
      {
        number: "01",
        title: "Product Complexity",
        description: "The platform needed multiple technical capabilities to work together as one product.",
      },
      {
        number: "02",
        title: "Maintainable Structure",
        description: "The backend needed clear internal boundaries while remaining a single application.",
      },
      {
        number: "03",
        title: "Production Delivery",
        description:
          "The product needed repeatable deployment through Docker and Jenkins CI/CD and cloud infrastructure on Azure.",
      },
    ],
  },

  decision: {
    eyebrow: "Architecture Decision",
    headline: "Modular Monolith by Design.",
    description:
      "The platform was structured as a modular monolith: one application with clear internal boundaries between functional areas.",
    left: {
      title: "Distributed Architecture",
      points: [
        "Multiple deployable services",
        "Network communication",
        "More operational complexity",
        "More infrastructure overhead",
      ],
    },
    right: {
      title: "Modular Monolith",
      points: [
        "One application",
        "Clear internal modules",
        "Simpler deployment",
        "Lower distributed-system complexity",
      ],
    },
    quote:
      "The goal wasn't to use the most fashionable architecture. It was to use the architecture that fit the product.",
  },

  architecture: {
    eyebrow: "System Architecture",
    headline: "One Application. Clear Boundaries.",
    description:
      "The backend was structured as a single NestJS application with internally separated modules, rather than a distributed set of independently deployed services.",
    flow: ["React", "NestJS Application"],
    modules: ["Module A", "Module B", "Module C", "Module D", "Module E", "Module F"],
    output: ["MySQL"],
  },

  authentication: {
    eyebrow: "Authentication",
    headline: "Secure Access With JWT.",
    description: "JWT-based authentication was used to secure access to the application.",
    flow: ["User", "Login", "Authentication", "JWT", "Authenticated Request", "NestJS"],
  },

  communication: {
    eyebrow: "Communication",
    headline: "Notifications and Chat Through Firebase.",
    description:
      "Firebase was used for FCM notifications and chat capabilities, providing communication features within the learning platform.",
    root: "LMS Platform",
    branches: [
      { top: "FCM", bottom: "Notifications" },
      { top: "Chat", bottom: "Communication" },
    ],
  },

  payments: {
    eyebrow: "Payment Engineering",
    headline: "Stripe Payments Integrated Into the Product.",
    description: "Stripe was integrated into the platform to support payment processing.",
    flow: ["User", "React", "NestJS", "Stripe", "Payment"],
  },

  delivery: {
    eyebrow: "DevOps",
    headline: "From Code to Cloud.",
    description:
      "The application was containerized with Docker and supported by Jenkins CI/CD before deployment to Azure.",
    flow: ["Code", "Jenkins", "CI/CD", "Docker", "Azure", "Application"],
  },

  decisions: {
    headline: "The Stack Was Chosen to Keep the Product Practical.",
    cards: [
      { title: "React", description: "Frontend application framework." },
      { title: "NestJS", description: "Backend framework for the modular monolithic application." },
      { title: "MySQL", description: "Relational database layer." },
      { title: "JWT", description: "Application authentication mechanism." },
      { title: "Firebase", description: "FCM notifications and chat capabilities." },
      { title: "Docker + Jenkins", description: "Containerization and CI/CD workflow." },
    ],
  },

  realChallenge: {
    headline: "The Challenge Was Keeping Complexity Inside the Product — Not the Infrastructure.",
    description:
      "The project combined a full-stack application, authentication, payments, communication, CI/CD, and cloud deployment while keeping the backend organized as a modular monolith.",
    cards: [
      {
        title: "Architecture",
        description: "Maintain internal separation without introducing unnecessary distributed-system complexity.",
      },
      {
        title: "Integration",
        description: "Bring Stripe and Firebase capabilities into the core application experience.",
      },
      {
        title: "Delivery",
        description: "Use Docker and Jenkins CI/CD to create a repeatable delivery workflow for Azure.",
      },
    ],
  },

  role: {
    eyebrow: "My Contribution",
    headline: "Lead Full Stack Developer",
    areas: [
      { title: "Full-Stack Development", description: "Worked across the React frontend and NestJS backend." },
      { title: "Architecture", description: "Implemented and worked within the modular-monolithic architecture." },
      {
        title: "Integrations",
        description: "Worked with JWT authentication, Stripe payments, and Firebase communication capabilities.",
      },
      {
        title: "Delivery",
        description: "Worked with Docker and Jenkins CI/CD as part of the production delivery workflow.",
      },
    ],
  },

  snapshot: {
    eyebrow: "Project Snapshot",
    headline: "Built in Four Months.",
    metrics: [
      { value: "4", label: "Team Members" },
      { value: "4 Months", label: "Project Duration" },
      { value: "Modular Monolith", label: "Architecture" },
      { value: "Lead Full Stack Developer", label: "Role" },
    ],
    stack: "React · NestJS · MySQL · Firebase · Stripe · Docker · Jenkins · Azure",
  },

  technology: [
    { category: "Frontend", value: "React" },
    { category: "Backend", value: "NestJS" },
    { category: "Database", value: "MySQL" },
    { category: "Authentication", value: "JWT" },
    { category: "Communication", value: "Firebase FCM + Chat" },
    { category: "Payments", value: "Stripe" },
    { category: "DevOps", value: "Docker + Jenkins CI/CD" },
    { category: "Cloud", value: "Azure" },
    { category: "Architecture", value: "Modular Monolith" },
  ],

  cta: {
    eyebrow: "Building a Product?",
    headline: "Let's Talk Architecture.",
    description:
      "Have a product that needs a strong technical foundation without unnecessary complexity? Let's figure out the right architecture.",
    primaryCta: "Start With an AI Product Audit",
    secondaryCta: "Back to Case Studies",
  },
};

export type Lms = typeof lms;
