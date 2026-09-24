import { describe, expect, it } from "vitest";
import { qualifyLead, type QualifyLeadInput } from "@/lib/qualifyLead";

const baseQualified: QualifyLeadInput = {
  validation: "paying-customers",
  budget: "10-25k",
  funding: "self-funded",
  timeline: "within-30-days",
};

describe("qualifyLead", () => {
  it("qualifies a strong applicant (paying customers, healthy budget, funded, ready now)", () => {
    const result = qualifyLead(baseQualified);
    expect(result.qualified).toBe(true);
    expect(result.reasons).toEqual([]);
  });

  it("qualifies a second, differently-shaped applicant (waitlist validation, band exactly at the minimum, 1-3 months out)", () => {
    const result = qualifyLead({
      validation: "waitlist-signups",
      budget: "5-10k",
      funding: "raised-pre-seed-seed",
      timeline: "1-3-months",
    });
    expect(result.qualified).toBe(true);
    expect(result.reasons).toEqual([]);
  });

  it("qualifies when budget is 'not sure' but the applicant confirms the price range is realistic", () => {
    const result = qualifyLead({
      ...baseQualified,
      budget: "not-sure",
      budgetRealistic: true,
    });
    expect(result.qualified).toBe(true);
    expect(result.reasons).toEqual([]);
  });

  it("disqualifies when validation is idea-only", () => {
    const result = qualifyLead({ ...baseQualified, validation: "idea-only" });
    expect(result.qualified).toBe(false);
    expect(result.reasons).toContain("idea-only");
  });

  it("disqualifies when budget is below the configured minimum band", () => {
    const result = qualifyLead({ ...baseQualified, budget: "under-5k" });
    expect(result.qualified).toBe(false);
    expect(result.reasons).toContain("budget-too-low");
  });

  it("disqualifies when budget is 'not sure' and the applicant says the range isn't realistic", () => {
    const result = qualifyLead({
      ...baseQualified,
      budget: "not-sure",
      budgetRealistic: false,
    });
    expect(result.qualified).toBe(false);
    expect(result.reasons).toContain("budget-not-sure-unrealistic");
  });

  it("does not disqualify on budget when 'not sure' and budgetRealistic is left undefined (treated as not yet answered, not a hard no)", () => {
    const result = qualifyLead({
      ...baseQualified,
      budget: "not-sure",
      budgetRealistic: undefined,
    });
    expect(result.reasons).not.toContain("budget-not-sure-unrealistic");
  });

  it("disqualifies when still looking for funding", () => {
    const result = qualifyLead({ ...baseQualified, funding: "still-looking" });
    expect(result.qualified).toBe(false);
    expect(result.reasons).toContain("still-looking-for-funding");
  });

  it("disqualifies when timeline is just exploring", () => {
    const result = qualifyLead({ ...baseQualified, timeline: "just-exploring" });
    expect(result.qualified).toBe(false);
    expect(result.reasons).toContain("just-exploring");
  });

  it("accumulates every disqualifying reason, not just the first", () => {
    const result = qualifyLead({
      validation: "idea-only",
      budget: "under-5k",
      funding: "still-looking",
      timeline: "just-exploring",
    });
    expect(result.qualified).toBe(false);
    expect(result.reasons).toEqual([
      "idea-only",
      "budget-too-low",
      "still-looking-for-funding",
      "just-exploring",
    ]);
  });

  it("qualifies at the top budget band and funded by an existing business", () => {
    const result = qualifyLead({
      validation: "existing-business-process",
      budget: "50k-plus",
      funding: "funded-by-business",
      timeline: "3-plus-months",
    });
    expect(result.qualified).toBe(true);
  });
});
