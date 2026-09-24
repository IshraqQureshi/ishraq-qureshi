import { z } from "zod";
import { BUDGET_OPTIONS, FUNDING_OPTIONS, TIMELINE_OPTIONS, VALIDATION_OPTIONS } from "@/lib/qualifyLead";

export const ROLE_OPTIONS = [
  "non-technical-founder",
  "technical-founder",
  "leading-new-product",
  "agency",
  "other",
] as const;

const utmSchema = z.object({
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  fbclid: z.string().max(500).optional(),
});

export const mvpApplySchema = z
  .object({
    // Generated client-side and echoed back through the CAPI call so the
    // browser Pixel event and the server CAPI event dedupe as one event.
    eventId: z.string().min(1).max(200),
    fullName: z.string().trim().min(2, "Enter your full name").max(200),
    email: z.string().trim().email("Enter a valid email"),
    role: z.enum(ROLE_OPTIONS),
    whatBuilding: z.string().trim().min(40, "Please share a bit more detail (40+ characters)").max(2000),
    validation: z.enum(VALIDATION_OPTIONS),
    budget: z.enum(BUDGET_OPTIONS),
    budgetRealistic: z.boolean().optional(),
    funding: z.enum(FUNDING_OPTIONS),
    timeline: z.enum(TIMELINE_OPTIONS),
    link: z.string().trim().max(500).optional().or(z.literal("")),
    // Honeypot — must stay empty. Real users never see or fill this field.
    company: z.string().max(200).optional().or(z.literal("")),
    utm: utmSchema.optional(),
    fbp: z.string().max(200).optional(),
    fbc: z.string().max(200).optional(),
    landingUrl: z.string().max(1000).optional(),
    referrer: z.string().max(1000).optional(),
    submittedAt: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.budget === "not-sure" && data.budgetRealistic === undefined) {
      ctx.addIssue({
        code: "custom",
        path: ["budgetRealistic"],
        message: "Let us know if that range is realistic for you",
      });
    }
  });

export type MvpApplyInput = z.infer<typeof mvpApplySchema>;
