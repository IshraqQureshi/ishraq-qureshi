import { createHash } from "node:crypto";

const GRAPH_API_VERSION = "v21.0";

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export type MetaCapiEvent = {
  eventName: "Lead" | "UnqualifiedLead" | "Schedule";
  eventId: string;
  eventSourceUrl: string;
  email?: string;
  fbp?: string;
  fbc?: string;
  clientIp?: string;
  userAgent?: string;
  contentName?: string;
};

/**
 * Sends a server-side Conversions API event. No-ops (with a server log)
 * when Pixel/CAPI env vars aren't configured yet, so the rest of the app
 * keeps working before those credentials exist.
 */
export async function sendMetaCapiEvent(event: MetaCapiEvent): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn(
      `[meta-capi] Skipping "${event.eventName}" — NEXT_PUBLIC_META_PIXEL_ID / META_CAPI_ACCESS_TOKEN not set.`
    );
    return;
  }

  const userData: Record<string, unknown> = {};
  if (event.email) userData.em = [sha256(event.email)];
  if (event.fbp) userData.fbp = event.fbp;
  if (event.fbc) userData.fbc = event.fbc;
  if (event.clientIp) userData.client_ip_address = event.clientIp;
  if (event.userAgent) userData.client_user_agent = event.userAgent;

  const payload = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: "website",
        event_source_url: event.eventSourceUrl,
        user_data: userData,
        ...(event.contentName ? { custom_data: { content_name: event.contentName } } : {}),
      },
    ],
    ...(process.env.META_TEST_EVENT_CODE ? { test_event_code: process.env.META_TEST_EVENT_CODE } : {}),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error(`[meta-capi] "${event.eventName}" failed: ${response.status} ${await response.text()}`);
    }
  } catch (error) {
    // Tracking must never break the user-facing flow.
    console.error(`[meta-capi] "${event.eventName}" request failed:`, error);
  }
}
