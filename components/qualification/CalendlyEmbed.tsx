"use client";

import { useEffect, useRef } from "react";
import { MVP_CONFIG } from "@/content/mvp-config";
import { getAttribution } from "@/lib/attribution";
import { generateEventId, getFbc, getFbp, trackPixelEvent } from "@/lib/meta-pixel-client";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const WIDGET_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyEmbedProps = {
  name: string;
  email: string;
  whatBuilding: string;
  summaryLine: string;
  onScheduled: () => void;
};

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.Calendly) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export function CalendlyEmbed({ name, email, whatBuilding, summaryLine, onScheduled }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    loadCalendlyScript().then(() => {
      if (cancelled || !containerRef.current || !window.Calendly) return;

      const attribution = getAttribution();

      window.Calendly.initInlineWidget({
        url: MVP_CONFIG.calendlyUrl,
        parentElement: containerRef.current,
        prefill: {
          name,
          email,
          a1: whatBuilding.slice(0, 300),
          a2: summaryLine,
        },
        utm: {
          utmSource: attribution?.utm_source,
          utmMedium: attribution?.utm_medium,
          utmCampaign: attribution?.utm_campaign,
          utmContent: attribution?.utm_content,
          utmTerm: attribution?.utm_term,
        },
      });
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.origin.indexOf("calendly.com") === -1) return;
      if (event.data?.event !== "calendly.event_scheduled") return;

      const eventId = generateEventId();
      trackPixelEvent("Schedule", eventId, { content_name: "mvp_scoping_call" });

      try {
        await fetch("/api/mvp-schedule", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventId,
            email,
            fbp: getFbp(),
            fbc: getFbc(),
            landingUrl: window.location.href,
          }),
        });
      } catch {
        // Booking already succeeded on Calendly's side — a failed CAPI call
        // here must never block the user's confirmation.
      }

      onScheduled();
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [email, onScheduled]);

  return <div ref={containerRef} className="h-[650px] w-full" />;
}
