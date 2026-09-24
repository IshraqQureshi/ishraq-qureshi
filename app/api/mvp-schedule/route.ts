import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { sendMetaCapiEvent } from "@/lib/meta-capi";

const scheduleSchema = z.object({
  eventId: z.string().min(1).max(200),
  email: z.string().email().optional(),
  fbp: z.string().max(200).optional(),
  fbc: z.string().max(200).optional(),
  landingUrl: z.string().max(1000).optional(),
});

/**
 * Called by the client the moment Calendly's `calendly.event_scheduled`
 * postMessage fires, so the `Schedule` conversion has a server-side CAPI
 * event dedup'd against the browser Pixel event via the same `eventId`.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = scheduleSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const input = parsed.data;
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0].trim();

  await sendMetaCapiEvent({
    eventName: "Schedule",
    eventId: input.eventId,
    eventSourceUrl: input.landingUrl || "https://www.ishraqqureshi.com/mvp",
    email: input.email,
    fbp: input.fbp,
    fbc: input.fbc,
    clientIp,
    userAgent: request.headers.get("user-agent") ?? undefined,
  });

  return NextResponse.json({ ok: true });
}
