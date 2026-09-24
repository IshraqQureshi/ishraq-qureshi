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

/**
 * Fires a browser-side Pixel event (no-ops silently if the Pixel script
 * hasn't loaded — e.g. consent not yet given, or Pixel ID unset).
 */
export function trackPixelEvent(
  event: StandardEvent | CustomEvent,
  eventId: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  const isStandard: readonly string[] = ["PageView", "Lead", "Schedule"];
  const kind = isStandard.includes(event) ? "track" : "trackCustom";
  window.fbq(kind, event, params ?? {}, { eventID: eventId });
}
