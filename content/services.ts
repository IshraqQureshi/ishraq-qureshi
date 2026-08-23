export type ServiceEmphasis = "standard" | "transformation" | "premium";

export type Service = {
  number: string;
  label: string;
  title: string;
  price: string;
  description: string;
  cta: string;
  href: string;
  emphasis: ServiceEmphasis;
};

export const services: Service[] = [
  {
    number: "01",
    label: "VALIDATE",
    title: "AI Product Audit",
    price: "Starting at $99",
    description:
      "Validate the product idea, technical feasibility, AI opportunities, risks, and next steps before committing to development.",
    cta: "Explore AI Product Audit",
    href: "/#services",
    emphasis: "standard",
  },
  {
    number: "02",
    label: "ARCHITECT",
    title: "AI Product Blueprint",
    price: "Starting at $299",
    description:
      "Turn a validated idea into a detailed product, architecture, AI, and development roadmap.",
    cta: "Explore the Blueprint",
    href: "/#services",
    emphasis: "standard",
  },
  {
    number: "03",
    label: "BUILD",
    title: "AI MVP Sprint",
    price: "Custom scoped",
    description:
      "Build and launch the first production-ready version of your product with an AI-native engineering workflow.",
    cta: "Discuss Your MVP",
    href: "/#services",
    emphasis: "transformation",
  },
  {
    number: "04",
    label: "SCALE",
    title: "AI Engineering Partner",
    price: "Custom engagement",
    description:
      "Get ongoing technical leadership, architecture, engineering, and product development as your business grows.",
    cta: "Discuss Partnership",
    href: "/#services",
    emphasis: "premium",
  },
];
