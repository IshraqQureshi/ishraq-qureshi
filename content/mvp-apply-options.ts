import { ROLE_OPTIONS } from "@/lib/mvp-apply-schema";
import { BUDGET_OPTIONS, FUNDING_OPTIONS, TIMELINE_OPTIONS, VALIDATION_OPTIONS } from "@/lib/qualifyLead";

export const roleLabels: Record<(typeof ROLE_OPTIONS)[number], string> = {
  "non-technical-founder": "Non-technical founder",
  "technical-founder": "Technical founder",
  "leading-new-product": "Leading a new product inside a company",
  agency: "Agency / building for a client",
  other: "Other",
};

export const validationLabels: Record<(typeof VALIDATION_OPTIONS)[number], string> = {
  "paying-customers": "Paying customers, pre-orders or signed LOIs",
  "waitlist-signups": "Waitlist, signups or pilot interest",
  "customer-conversations": "10+ conversations with potential customers",
  "existing-business-process": "An existing business process I run and need software for",
  "idea-only": "Just an idea so far",
};

export const budgetLabels: Record<(typeof BUDGET_OPTIONS)[number], string> = {
  "under-5k": "Under $5k",
  "5-10k": "$5k–$10k",
  "10-25k": "$10k–$25k",
  "25-50k": "$25k–$50k",
  "50k-plus": "$50k+",
  "not-sure": "Not sure yet",
};

export const fundingLabels: Record<(typeof FUNDING_OPTIONS)[number], string> = {
  "self-funded": "Self-funded, budget set aside",
  "raised-pre-seed-seed": "Raised pre-seed/seed",
  "funded-by-business": "Funded by an existing business",
  "still-looking": "Still looking for funding",
};

export const timelineLabels: Record<(typeof TIMELINE_OPTIONS)[number], string> = {
  "within-30-days": "Within 30 days",
  "1-3-months": "1–3 months",
  "3-plus-months": "3+ months",
  "just-exploring": "Just exploring",
};
