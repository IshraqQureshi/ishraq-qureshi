import { NextResponse, type NextRequest } from "next/server";
import { sendMetaCapiEvent } from "@/lib/meta-capi";
import { mvpApplySchema } from "@/lib/mvp-apply-schema";
import { notifyLead } from "@/lib/notify-lead";
import { qualifyLead } from "@/lib/qualifyLead";
import { isRateLimited } from "@/lib/rate-limit";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = mvpApplySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const input = parsed.data;

  // Honeypot: bots fill every field, including ones hidden from real users.
  // Respond as if it succeeded so the bot doesn't learn to avoid the field,
  // but do nothing further.
  if (input.company) {
    return NextResponse.json({ qualified: false, honeypot: true });
  }

  // Authoritative qualification decision — always computed server-side,
  // regardless of anything the client believes about itself.
  const result = qualifyLead({
    validation: input.validation,
    budget: input.budget,
    budgetRealistic: input.budgetRealistic,
    funding: input.funding,
    timeline: input.timeline,
  });

  await notifyLead(input, result);

  await sendMetaCapiEvent({
    eventName: result.qualified ? "Lead" : "UnqualifiedLead",
    eventId: input.eventId,
    eventSourceUrl: input.landingUrl || request.headers.get("referer") || "https://www.ishraqqureshi.com/mvp",
    email: input.email,
    fbp: input.fbp,
    fbc: input.fbc,
    clientIp,
    userAgent: request.headers.get("user-agent") ?? undefined,
    ...(result.qualified ? { contentName: "mvp_qualified" } : {}),
  });

  return NextResponse.json({ qualified: result.qualified, reasons: result.reasons });
}
