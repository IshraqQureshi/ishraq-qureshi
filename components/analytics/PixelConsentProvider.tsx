"use client";

import { createContext, useCallback, useContext, useState, useSyncExternalStore, type ReactNode } from "react";

const STORAGE_KEY = "mvp_pixel_consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getStoredConsent(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}

function getServerConsent(): boolean {
  return false;
}

type PixelConsentContextValue = {
  /** True for visitors in a region where we must ask before loading the Pixel. */
  needsConsent: boolean;
  /** True once the Pixel is allowed to load (never needed, or explicitly granted). */
  consentGiven: boolean;
  grantConsent: () => void;
};

const PixelConsentContext = createContext<PixelConsentContextValue | null>(null);

export function PixelConsentProvider({
  needsConsent,
  children,
}: {
  needsConsent: boolean;
  children: ReactNode;
}) {
  // Reads any consent stored on a previous visit — SSR-safe (server snapshot
  // is always `false`, so the first client render matches the server render;
  // the real value is picked up on the client's own render pass).
  const storedConsent = useSyncExternalStore(subscribe, getStoredConsent, getServerConsent);
  // `localStorage.setItem` doesn't fire a same-tab "storage" event, so a
  // fresh accept within this tab needs its own bit of state to react
  // immediately, rather than waiting on the external store.
  const [grantedThisSession, setGrantedThisSession] = useState(false);

  const consentGiven = !needsConsent || storedConsent || grantedThisSession;

  const grantConsent = useCallback(() => {
    setGrantedThisSession(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "granted");
    } catch {
      // Non-fatal — consent still applies for this session via state.
    }
  }, []);

  return (
    <PixelConsentContext.Provider value={{ needsConsent, consentGiven, grantConsent }}>
      {children}
    </PixelConsentContext.Provider>
  );
}

export function usePixelConsent(): PixelConsentContextValue {
  const context = useContext(PixelConsentContext);
  if (!context) {
    throw new Error("usePixelConsent must be used within a PixelConsentProvider");
  }
  return context;
}
