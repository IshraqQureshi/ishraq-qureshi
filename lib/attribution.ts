"use client";

const STORAGE_KEY = "mvp_attribution";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  landingUrl: string;
  referrer: string;
};

/**
 * Captures UTM params, fbclid, landing URL and referrer on FIRST load of the
 * session and persists them to sessionStorage. Safe to call on every page
 * mount — it's a no-op once attribution has already been captured this
 * session, so first-touch data survives internal navigation.
 */
export function captureAttributionOnce(): void {
  if (typeof window === "undefined") return;

  try {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const attribution: Attribution = {
      utm_source: params.get("utm_source") ?? undefined,
      utm_medium: params.get("utm_medium") ?? undefined,
      utm_campaign: params.get("utm_campaign") ?? undefined,
      utm_content: params.get("utm_content") ?? undefined,
      utm_term: params.get("utm_term") ?? undefined,
      fbclid: params.get("fbclid") ?? undefined,
      landingUrl: window.location.href,
      referrer: document.referrer || "",
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Storage can throw in private-browsing contexts — attribution is
    // best-effort, never required for the form to work.
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}
