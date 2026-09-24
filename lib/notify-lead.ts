import { Resend } from "resend";
import { MVP_CONFIG } from "@/content/mvp-config";
import type { MvpApplyInput } from "@/lib/mvp-apply-schema";
import type { QualifyLeadResult } from "@/lib/qualifyLead";

function formatFieldsAsHtml(input: MvpApplyInput, result: QualifyLeadResult): string {
  const rows: Array<[string, string]> = [
    ["Name", input.fullName],
    ["Email", input.email],
    ["Role", input.role],
    ["What they're building", input.whatBuilding],
    ["Validation", input.validation],
    ["Budget", input.budget],
    ...(input.budget === "not-sure" ? [["Budget realistic?", String(input.budgetRealistic)] as [string, string]] : []),
    ["Funding", input.funding],
    ["Timeline", input.timeline],
    ["Link", input.link || "—"],
    ["Qualified", result.qualified ? "Yes" : "No"],
    ...(result.reasons.length ? [["Disqualification reasons", result.reasons.join(", ")] as [string, string]] : []),
    ["UTM source", input.utm?.utm_source ?? "—"],
    ["UTM medium", input.utm?.utm_medium ?? "—"],
    ["UTM campaign", input.utm?.utm_campaign ?? "—"],
    ["UTM content", input.utm?.utm_content ?? "—"],
    ["UTM term", input.utm?.utm_term ?? "—"],
    ["fbclid", input.utm?.fbclid ?? "—"],
    ["Landing URL", input.landingUrl ?? "—"],
    ["Referrer", input.referrer ?? "—"],
    ["Submitted at", input.submittedAt ?? new Date().toISOString()],
  ];

  return `<table>${rows
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${value}</td></tr>`)
    .join("")}</table>`;
}

/**
 * Emails every submission to the configured contact address, and POSTs the
 * raw JSON to LEAD_WEBHOOK_URL if set (e.g. Zapier/Make/Sheets). Both are
 * best-effort: a failure here must never fail the user's submission, so
 * every branch only logs.
 */
export async function notifyLead(input: MvpApplyInput, result: QualifyLeadResult): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const isProduction =
    process.env.VERCEL_ENV === "production" || (!process.env.VERCEL_ENV && process.env.NODE_ENV === "production");

  if (isProduction && !apiKey && !webhookUrl) {
    // Neither delivery path is configured — this submission is about to be
    // computed and thrown away with no record anywhere. Loud on purpose.
    console.error(
      `LEAD NOT DELIVERED — no RESEND_API_KEY or LEAD_WEBHOOK_URL configured in production. ` +
        `Lead from ${input.email} (${input.fullName}) was not emailed or forwarded anywhere.`
    );
  }

  if (!apiKey) {
    console.warn("[notify-lead] RESEND_API_KEY not set — skipping email notification.");
  } else {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `MVP Landing Page <onboarding@resend.dev>`,
        to: MVP_CONFIG.contactEmail,
        subject: `[MVP Lead — ${result.qualified ? "QUALIFIED" : "Not qualified"}] ${input.fullName}`,
        html: formatFieldsAsHtml(input, result),
        replyTo: input.email,
      });
    } catch (error) {
      console.error("[notify-lead] Resend send failed:", error);
    }
  }

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, qualified: result.qualified, reasons: result.reasons }),
      });
    } catch (error) {
      console.error("[notify-lead] Webhook POST failed:", error);
    }
  }
}
