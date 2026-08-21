export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users, goals, and product idea.",
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Identify risks, opportunities, technical feasibility, and what should actually be built.",
  },
  {
    number: "03",
    title: "Architect",
    description:
      "Design the product, AI strategy, architecture, integrations, and technical roadmap.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the MVP using AI-native engineering workflows.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, test, monitor, and prepare the product for real users.",
  },
  {
    number: "06",
    title: "Scale",
    description: "Improve infrastructure, performance, features, and product capabilities.",
  },
];
