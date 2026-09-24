import { MVP_CONFIG } from "@/content/mvp-config";

export const VALIDATION_OPTIONS = [
  "paying-customers",
  "waitlist-signups",
  "customer-conversations",
  "existing-business-process",
  "idea-only",
] as const;
export type ValidationOption = (typeof VALIDATION_OPTIONS)[number];

export const BUDGET_OPTIONS = ["under-5k", "5-10k", "10-25k", "25-50k", "50k-plus", "not-sure"] as const;
export type BudgetOption = (typeof BUDGET_OPTIONS)[number];

// Ordered lowest to highest so a band's index can be compared against the
// configured minimum. "not-sure" is handled separately via the conditional
// follow-up question, not by position in this list.
const BUDGET_ORDER: readonly BudgetOption[] = ["under-5k", "5-10k", "10-25k", "25-50k", "50k-plus"];

export const FUNDING_OPTIONS = [
  "self-funded",
  "raised-pre-seed-seed",
  "funded-by-business",
  "still-looking",
] as const;
export type FundingOption = (typeof FUNDING_OPTIONS)[number];

export const TIMELINE_OPTIONS = ["within-30-days", "1-3-months", "3-plus-months", "just-exploring"] as const;
export type TimelineOption = (typeof TIMELINE_OPTIONS)[number];

export type QualifyLeadInput = {
  validation: ValidationOption;
  budget: BudgetOption;
  /** Only meaningful when budget === "not-sure". */
  budgetRealistic?: boolean;
  funding: FundingOption;
  timeline: TimelineOption;
};

export type DisqualificationReason =
  | "idea-only"
  | "budget-too-low"
  | "budget-not-sure-unrealistic"
  | "still-looking-for-funding"
  | "just-exploring";

export type QualifyLeadResult = {
  qualified: boolean;
  reasons: DisqualificationReason[];
};

function isBudgetBelowMinimum(budget: BudgetOption): boolean {
  const minIndex = BUDGET_ORDER.indexOf(MVP_CONFIG.minBudgetBand);
  const budgetIndex = BUDGET_ORDER.indexOf(budget as (typeof BUDGET_ORDER)[number]);
  // "not-sure" isn't in BUDGET_ORDER (index -1) and is judged by
  // `budgetRealistic` instead, never by position here.
  if (budgetIndex === -1) return false;
  return budgetIndex < minIndex;
}

/**
 * Pure qualification check — reasons accumulate so the UI (and the
 * "not qualified" messaging) can address every disqualifying factor, not
 * just the first one found.
 */
export function qualifyLead(input: QualifyLeadInput): QualifyLeadResult {
  const reasons: DisqualificationReason[] = [];

  if (input.validation === "idea-only") {
    reasons.push("idea-only");
  }

  if (input.budget === "not-sure") {
    if (input.budgetRealistic === false) {
      reasons.push("budget-not-sure-unrealistic");
    }
  } else if (isBudgetBelowMinimum(input.budget)) {
    reasons.push("budget-too-low");
  }

  if (input.funding === "still-looking") {
    reasons.push("still-looking-for-funding");
  }

  if (input.timeline === "just-exploring") {
    reasons.push("just-exploring");
  }

  return { qualified: reasons.length === 0, reasons };
}
