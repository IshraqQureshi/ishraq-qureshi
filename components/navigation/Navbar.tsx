"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { Container } from "@/components/ui/Container";
import { cta, navLinks, siteConfig } from "@/content/site";
import { primaryCtaLabel } from "@/content/mvp-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  // /mvp is a dedicated paid-traffic landing page: no exit links, logo isn't
  // clickable, and the CTA opens the qualification modal instead of Calendly
  // directly.
  const isLandingPage = pathname?.startsWith("/mvp") ?? false;
  // The Haraka Gari case study feeds the same funnel — its header CTA opens
  // the same modal, but its nav/logo behave like every other page.
  const isHarakaGari = pathname?.startsWith("/work/haraka-gari") ?? false;
  const usesQualificationModal = isLandingPage || isHarakaGari;
  const ctaLabel = usesQualificationModal ? primaryCtaLabel : cta.primary;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const logo = (
    <span className="flex flex-col leading-tight">
      <span className="text-base font-semibold tracking-tight text-foreground">{siteConfig.name}</span>
      <span className="hidden text-xs text-foreground-muted sm:block">{siteConfig.role}</span>
    </span>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border-subtle bg-background/90 backdrop-blur-sm"
          : "border-transparent bg-background/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        {isLandingPage ? logo : <Link href="/">{logo}</Link>}

        {isLandingPage ? null : (
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="hidden md:block">
          {usesQualificationModal ? (
            <ApplyButton location="navbar" variant="primary" className="px-5 py-2.5 text-sm">
              {ctaLabel}
            </ApplyButton>
          ) : (
            <BookCallButton variant="primary" className="px-5 py-2.5 text-sm">
              {ctaLabel}
            </BookCallButton>
          )}
        </div>

        {isLandingPage ? (
          // On the landing page, the mobile nav has nothing left to reveal
          // (no links, same CTA) — show the CTA directly instead of gating
          // it behind a hamburger tap.
          <div className="md:hidden">
            <ApplyButton location="navbar_mobile" variant="primary" className="px-4 py-2 text-sm">
              {ctaLabel}
            </ApplyButton>
          </div>
        ) : (
          <button
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle text-foreground md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        )}
      </Container>

      {menuOpen && !isLandingPage ? (
        <div
          id="mobile-nav"
          ref={menuRef}
          className="border-t border-border-subtle bg-background md:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            {usesQualificationModal ? (
              <ApplyButton
                location="navbar_mobile_menu"
                variant="primary"
                className="mt-3 w-full"
                onClick={() => setMenuOpen(false)}
              >
                {ctaLabel}
              </ApplyButton>
            ) : (
              <BookCallButton
                variant="primary"
                className="mt-3 w-full"
                onClick={() => setMenuOpen(false)}
              >
                {ctaLabel}
              </BookCallButton>
            )}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
