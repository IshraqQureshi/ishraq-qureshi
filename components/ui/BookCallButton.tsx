"use client";

import type { ButtonHTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";
import { buttonClasses, type ButtonVariant } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

type BookCallButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function BookCallButton({
  variant = "primary",
  className = "",
  children,
  onClick,
  ...props
}: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={buttonClasses(variant, className)}
        onClick={(event) => {
          onClick?.(event);
          setOpen(true);
        }}
        {...props}
      >
        {children}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a discovery call"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="relative h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-2xl">
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close booking dialog"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-md border border-border-subtle bg-background/80 text-foreground transition-colors hover:border-accent-border"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ×
              </span>
            </button>
            <iframe
              title="Schedule a discovery call"
              src={`${siteConfig.calendlyUrl}?hide_gdpr_banner=1`}
              className="h-full w-full"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
