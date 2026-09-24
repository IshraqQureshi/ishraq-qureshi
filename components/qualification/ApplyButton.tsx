"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonClasses, type ButtonVariant } from "@/components/ui/Button";
import { useQualificationModal } from "@/components/qualification/QualificationModalProvider";

type ApplyButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  variant?: ButtonVariant;
  location: string;
  children: ReactNode;
};

/** The single CTA everywhere on /mvp and the Haraka Gari case study — opens the qualification modal. */
export function ApplyButton({ variant = "primary", location, className = "", children, onClick, ...props }: ApplyButtonProps) {
  const { openModal } = useQualificationModal();

  return (
    <button
      type="button"
      className={buttonClasses(variant, className)}
      onClick={(event) => {
        onClick?.(event);
        openModal(location);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
