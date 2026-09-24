"use client";

import { track } from "@vercel/analytics";
import { BookCallButton } from "@/components/ui/BookCallButton";
import type { ButtonVariant } from "@/components/ui/Button";

type TrackedBookCallButtonProps = {
  location: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function TrackedBookCallButton({
  location,
  variant = "primary",
  className = "",
  children,
}: TrackedBookCallButtonProps) {
  return (
    <BookCallButton
      variant={variant}
      className={className}
      onClick={() => track("mvp_book_call_click", { location })}
    >
      {children}
    </BookCallButton>
  );
}
