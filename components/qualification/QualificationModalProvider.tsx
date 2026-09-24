"use client";

import { track } from "@vercel/analytics";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { captureAttributionOnce } from "@/lib/attribution";
import { generateEventId, trackPixelEvent } from "@/lib/meta-pixel-client";
import { QualificationModal } from "@/components/qualification/QualificationModal";

type QualificationModalContextValue = {
  isOpen: boolean;
  openModal: (source: string) => void;
  closeModal: () => void;
};

const QualificationModalContext = createContext<QualificationModalContextValue | null>(null);

export function QualificationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    captureAttributionOnce();
  }, []);

  const openModal = (source: string) => {
    setIsOpen(true);
    track("mvp_apply_start", { location: source });
    trackPixelEvent("ApplyStart", generateEventId(), { location: source });
  };

  const closeModal = () => setIsOpen(false);

  return (
    <QualificationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <QualificationModal isOpen={isOpen} onClose={closeModal} />
    </QualificationModalContext.Provider>
  );
}

export function useQualificationModal(): QualificationModalContextValue {
  const context = useContext(QualificationModalContext);
  if (!context) {
    throw new Error("useQualificationModal must be used within a QualificationModalProvider");
  }
  return context;
}
