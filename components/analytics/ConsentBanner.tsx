"use client";

import { useState } from "react";
import Link from "next/link";
import { usePixelConsent } from "@/components/analytics/PixelConsentProvider";

export function ConsentBanner() {
  const { needsConsent, consentGiven, grantConsent } = usePixelConsent();
  const [dismissed, setDismissed] = useState(false);

  if (!needsConsent) {
    // Non-EU/UK/CH: no gate on loading, just a small, non-blocking notice.
    return (
      <p className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-background/95 px-4 py-2 text-center text-xs text-foreground-faint backdrop-blur-sm">
        This page uses analytics to measure ad performance.{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground-muted">
          Privacy Policy
        </Link>
      </p>
    );
  }

  if (consentGiven || dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-surface px-4 py-4 shadow-2xl"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-foreground-muted">
          We use analytics to measure ad performance. No data is used until you accept.{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="rounded-md border border-border-subtle px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={grantConsent}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
