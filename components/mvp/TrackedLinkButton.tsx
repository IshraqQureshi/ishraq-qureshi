"use client";

import { track } from "@vercel/analytics";
import { Button, type ButtonVariant } from "@/components/ui/Button";

type TrackedLinkButtonProps = {
  href: string;
  location: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function TrackedLinkButton({
  href,
  location,
  variant = "secondary",
  className = "",
  children,
}: TrackedLinkButtonProps) {
  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      onClick={() => track("mvp_secondary_cta_click", { location })}
    >
      {children}
    </Button>
  );
}
