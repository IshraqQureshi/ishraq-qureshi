"use client";

import { track } from "@vercel/analytics";
import { useEffect, useRef } from "react";
import { generateEventId, trackPixelEvent } from "@/lib/meta-pixel-client";

/**
 * Invisible sentinel — fires the EngagedView event once, the moment the
 * visitor scrolls past whatever section this is placed directly after
 * (the case study, per the tracking spec).
 */
export function EngagedViewTracker() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          track("mvp_engaged_view");
          trackPixelEvent("EngagedView", generateEventId());
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} aria-hidden="true" className="h-px w-full" />;
}
