export const aiDigitalLibrary = {
  slug: "ai-digital-library",
  eyebrow: "AI Product Engineering",
  title: "AI-Powered Digital Library",
  tagline: "RAG Search Across 16,000+ Books",
  description:
    "Rebuilt a legacy digital library into a modern AI-powered platform, enabling multilingual semantic search and conversational discovery across a collection of 16,000+ books.",
  stack: ["Next.js", "NestJS", "PostgreSQL", "OpenAI", "pgvector", "RAG"],

  proofMetrics: [
    { value: "16,000+", label: "Books" },
    { value: "5", label: "Languages" },
    { value: "3 Months", label: "Delivery" },
  ],
  teamMetric: { value: "6", label: "Team Members" },

  heroFlow: ["User Query", "Semantic Search", "Retrieval", "AI / RAG", "Grounded Response"],

  overview: [
    { label: "Project", value: "AI-Powered Digital Library" },
    { label: "Role", value: "SME & Team Lead" },
    { label: "Team", value: "6 people" },
    { label: "Duration", value: "3 months" },
    { label: "Scale", value: "16,000+ books" },
    { label: "Languages", value: "English · Urdu · Arabic · Farsi · Gujarati" },
    { label: "Stack", value: "Next.js · NestJS · PostgreSQL · OpenAI · pgvector" },
  ],

  challenge: {
    headline: "A Large Library Isn't Useful If People Can't Find What They're Looking For.",
    description:
      "The existing product was built on a legacy .NET platform and needed to evolve into a more modern digital experience. With more than 16,000 books across five languages, traditional discovery mechanisms were not enough for users looking for information by meaning, context, or natural language.",
    cards: [
      {
        number: "01",
        title: "Legacy Platform",
        description:
          "A mature .NET-based platform needed modernization while preserving the core digital-library experience.",
      },
      {
        number: "02",
        title: "Discovery at Scale",
        description: "Users needed a better way to discover relevant information across 16,000+ books.",
      },
      {
        number: "03",
        title: "AI-Powered Search",
        description:
          "The platform needed semantic understanding and conversational interaction rather than relying solely on conventional keyword-based discovery.",
      },
    ],
  },

  transformation: {
    headline: "From Digital Archive to Intelligent Discovery Platform",
    flow: ["Legacy Platform", "Modern Application", "Semantic Search", "RAG", "AI-Powered Discovery"],
    stages: [
      {
        number: "01",
        title: "Modernize",
        description:
          "The legacy .NET platform was rebuilt around a modern Next.js and NestJS application architecture.",
      },
      {
        number: "02",
        title: "Understand",
        description:
          "Library content was processed into semantic representations that could be searched by meaning.",
      },
      {
        number: "03",
        title: "Answer",
        description:
          "Retrieval and AI were combined to provide conversational discovery grounded in the library content.",
      },
    ],
  },

  architecture: {
    eyebrow: "System Architecture",
    headline: "Designed for Search. Built for AI.",
    description:
      "The platform combines a modern application stack with vector search and retrieval-augmented generation to turn a large digital library into an intelligent discovery experience.",
    flow: ["User", "Next.js", "NestJS"],
    dataLayer: ["PostgreSQL", "pgvector", "OpenAI"],
    output: ["RAG Pipeline", "AI Search / Conversational Discovery"],
  },

  ragPipeline: {
    eyebrow: "AI Engineering",
    headline: "The AI Doesn't Guess. It Retrieves.",
    description:
      "Instead of relying solely on a language model's general knowledge, the system retrieves relevant information from the library and uses that context to generate responses grounded in the underlying content.",
    steps: [
      { number: "01", title: "Books", description: "Library content" },
      { number: "02", title: "Content Processing", description: "Prepare content for retrieval" },
      { number: "03", title: "Chunking", description: "Break content into searchable sections" },
      { number: "04", title: "Embeddings", description: "Convert content into semantic representations" },
      { number: "05", title: "pgvector", description: "Store and search vector representations" },
      { number: "06", title: "Semantic Retrieval", description: "Find relevant content for the user's query" },
      { number: "07", title: "Context", description: "Assemble relevant information" },
      { number: "08", title: "LLM", description: "Generate a response from retrieved context" },
      { number: "09", title: "Grounded Response", description: "Return an AI response based on library content" },
    ],
  },

  semanticSearch: {
    headline: "Search by Meaning, Not Just Keywords.",
    traditional: {
      label: "Traditional",
      query: "machine learning",
      description: "System primarily looks for matching terms.",
    },
    semantic: {
      label: "Semantic",
      query: "How can computers learn from examples?",
      description:
        "The system can identify conceptually relevant content even when the exact words differ.",
    },
  },

  multilingual: {
    eyebrow: "Multilingual AI",
    headline: "One Library. Five Languages.",
    description:
      "The AI-powered discovery experience supports English, Urdu, Arabic, Farsi, and Gujarati, allowing users to interact with a multilingual collection through semantic search and conversational discovery.",
    languages: ["English", "Urdu", "Arabic", "Farsi", "Gujarati"],
  },

  decisions: {
    eyebrow: "Architecture Decisions",
    headline: "Technology Choices With a Reason.",
    cards: [
      {
        title: "PostgreSQL + pgvector",
        description:
          "Vector search was integrated alongside the application's relational data layer using PostgreSQL and pgvector.",
      },
      {
        title: "NestJS",
        description: "NestJS provided a structured backend foundation for the modernized application.",
      },
      {
        title: "OpenAI Embeddings",
        description:
          "Embeddings allow library content and user queries to be represented semantically for similarity-based retrieval.",
      },
      {
        title: "RAG",
        description:
          "Retrieval-Augmented Generation allows AI responses to be grounded in relevant library content instead of relying exclusively on general model knowledge.",
      },
    ],
  },

  realChallenge: {
    headline: "The Hard Part Wasn't Adding AI.",
    description:
      "The challenge was integrating AI into an existing digital product while modernizing the underlying platform and making a large multilingual collection easier to explore.",
    cards: [
      {
        title: "Product Integration",
        description:
          "AI capabilities needed to become part of the actual library experience rather than a disconnected AI demonstration.",
      },
      {
        title: "Retrieval Quality",
        description: "The system needed to retrieve relevant library content before generating useful responses.",
      },
      {
        title: "Platform Modernization",
        description: "The AI capabilities needed to fit into a broader modernization of the existing application.",
      },
    ],
  },

  results: {
    eyebrow: "The Result",
    headline: "A Modern AI-Powered Discovery Experience",
    primary: { value: "16,000+", label: "Books available for AI-powered discovery" },
    secondary: [
      { value: "5", label: "Languages" },
      { value: "3 Months", label: "Project duration" },
      { value: "6", label: "Team members" },
      { value: "RAG", label: "Retrieval-Augmented Generation" },
    ],
  },

  role: {
    eyebrow: "My Contribution",
    headline: "From Architecture to Implementation.",
    roleTitle: "SME & Team Lead",
    areas: [
      { title: "Architecture", description: "Led technical architecture and modernization decisions." },
      { title: "AI Engineering", description: "Worked on the AI-powered search and RAG capabilities." },
      {
        title: "Backend Engineering",
        description: "Worked with NestJS and PostgreSQL as part of the modernized application.",
      },
      {
        title: "Technical Leadership",
        description: "Provided technical direction and helped guide implementation across the team.",
      },
    ],
  },

  technology: [
    { category: "Frontend", value: "Next.js" },
    { category: "Backend", value: "NestJS" },
    { category: "Database", value: "PostgreSQL" },
    { category: "Vector Search", value: "pgvector" },
    { category: "AI", value: "OpenAI" },
    { category: "Architecture", value: "RAG" },
  ],

  cta: {
    eyebrow: "Build Something Complex?",
    headline: "Let's Talk Architecture.",
    description:
      "Have an AI product idea that needs more than a prototype? Let's figure out what it should take to build it properly.",
    primaryCta: "Start With an AI Product Audit",
    secondaryCta: "Back to Case Studies",
  },
};

export type AiDigitalLibrary = typeof aiDigitalLibrary;
