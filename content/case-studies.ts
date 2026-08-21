export type CaseStudy = {
  title: string;
  proof?: string;
  proofLabel?: string;
  tags: string[];
  description: string;
  stack?: string;
  role?: string;
  cta: string;
  href: string;
};

export const featuredCaseStudy: CaseStudy = {
  title: "AI-Powered Digital Library",
  proof: "16,000+ Books",
  proofLabel: "indexed & searchable",
  tags: ["RAG", "Semantic Search", "Multilingual AI"],
  description:
    "Rebuilt a legacy digital library into a modern AI-powered platform with semantic search, multilingual AI chat, and RAG across 16,000+ books.",
  stack: "NestJS · Next.js · PostgreSQL · OpenAI Embeddings · pgvector",
  role: "SME & Team Lead",
  cta: "View Case Study",
  href: "/work/ai-digital-library",
};

export const supportingCaseStudies: CaseStudy[] = [
  {
    title: "Multi-Vendor Marketplace",
    proof: "30+ Modules",
    tags: ["Microservices", "Stripe Connect", "RabbitMQ"],
    description:
      "Built a two-sided marketplace with microservices architecture, payment splitting, API gateway routing, and event-driven communication.",
    cta: "View Case Study",
    href: "/work/marketplace",
  },
  {
    title: "GCSE Learning Platform",
    tags: ["LMS", "React", "NestJS", "Firebase", "Azure"],
    description:
      "Led the development of a modern learning platform supporting students, educators, content, and scalable cloud infrastructure.",
    cta: "View Case Study",
    href: "/work/lms",
  },
];
