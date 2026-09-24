"use client";

import { useEffect, useState } from "react";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { useQualificationModal } from "@/components/qualification/QualificationModalProvider";
import { primaryCtaLabel } from "@/content/mvp-config";

export function MvpStickyBar() {
  const { isOpen } = useQualificationModal();
  const [pastHero, setPastHero] = useState(false);
  const [nearFinalCta, setNearFinalCta] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("mvp-hero");
    const finalCta = document.getElementById("mvp-final-cta");
    if (!hero || !finalCta) return;

    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    const finalCtaObserver = new IntersectionObserver(([entry]) => setNearFinalCta(entry.isIntersecting));

    heroObserver.observe(hero);
    finalCtaObserver.observe(finalCta);

    return () => {
      heroObserver.disconnect();
      finalCtaObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !nearFinalCta && !isOpen;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-background/95 p-3 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ApplyButton location="sticky_bar" variant="primary" className="w-full justify-center py-3.5 text-base">
        {primaryCtaLabel}
      </ApplyButton>
    </div>
  );
}
