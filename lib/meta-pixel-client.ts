"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/** Facebook's own click-id cookie, set automatically once the Pixel loads. */
export function getFbp(): string | undefined {
  return readCookie("_fbp");
}

/** Facebook's own click-id cookie derived from the ad click (`fbclid`). */
export function getFbc(): string | undefined {
  return readCookie("_fbc");
}

type StandardEvent = "PageView" | "Lead" | "Schedule";
type CustomEvent = "EngagedView" | "ApplyStart" | "UnqualifiedLead";

const STANDARD_EVENTS: ReadonlySet<StandardEvent> = new Set(["PageView", "Lead", "Schedule"]);

// Module-level (not component state) so it survives React StrictMode's
// double-invoked effects, re-renders, and any other double-call source —
// each eventId is fired at most once per page load, full stop.
const firedEventIds = new Set<string>();

/**
 * Fires a browser-side Pixel event exactly once per eventId (no-ops
 * silently if the Pixel script hasn't loaded, or if this eventId already
 * fired). Standard events (PageView, Lead, Schedule) always go through
 * `track` — never `trackCustom` — so they can dedupe against their
 * server-side CAPI counterpart; every other event goes through
 * `trackCustom`.
 */
export function trackPixelEvent(
  event: StandardEvent | CustomEvent,
  eventId: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (firedEventIds.has(eventId)) return;
  firedEventIds.add(eventId);

  const kind = STANDARD_EVENTS.has(event as StandardEvent) ? "track" : "trackCustom";
  window.fbq(kind, event, params ?? {}, { eventID: eventId });
}
