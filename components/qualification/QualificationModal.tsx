"use client";

import { track } from "@vercel/analytics";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  budgetLabels,
  fundingLabels,
  roleLabels,
  timelineLabels,
  validationLabels,
} from "@/content/mvp-apply-options";
import { MVP_CONFIG } from "@/content/mvp-config";
import { getAttribution } from "@/lib/attribution";
import { generateEventId, getFbc, getFbp, trackPixelEvent } from "@/lib/meta-pixel-client";
import { ROLE_OPTIONS } from "@/lib/mvp-apply-schema";
import {
  BUDGET_OPTIONS,
  FUNDING_OPTIONS,
  TIMELINE_OPTIONS,
  VALIDATION_OPTIONS,
  type BudgetOption,
  type DisqualificationReason,
  type FundingOption,
  type TimelineOption,
  type ValidationOption,
} from "@/lib/qualifyLead";
import { CalendlyEmbed } from "@/components/qualification/CalendlyEmbed";

type RoleOptionValue = (typeof ROLE_OPTIONS)[number];

type FormState = {
  fullName: string;
  email: string;
  role: RoleOptionValue | "";
  whatBuilding: string;
  validation: ValidationOption | "";
  budget: BudgetOption | "";
  budgetRealistic: boolean | undefined;
  funding: FundingOption | "";
  timeline: TimelineOption | "";
  link: string;
  company: string; // honeypot — must stay empty
};

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  role: "",
  whatBuilding: "",
  validation: "",
  budget: "",
  budgetRealistic: undefined,
  funding: "",
  timeline: "",
  link: "",
  company: "",
};

type ResultState =
  | { status: "form" }
  | { status: "submitting" }
  | { status: "error"; message: string }
  | { status: "qualified" }
  | { status: "scheduled" }
  | { status: "unqualified"; reasons: DisqualificationReason[] };

const inputClasses =
  "w-full rounded-md border border-border-subtle bg-background px-4 py-3 text-base text-foreground placeholder:text-foreground-faint focus:border-accent-border focus:outline-none";
const labelClasses = "text-sm font-medium text-foreground";

const STEP_COUNT = 3;

function summarize(form: FormState): string {
  const parts = [
    form.validation ? validationLabels[form.validation] : "",
    form.budget ? budgetLabels[form.budget] : "",
    form.timeline ? timelineLabels[form.timeline] : "",
  ].filter(Boolean);
  return parts.join(" · ");
}

export function QualificationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [result, setResult] = useState<ResultState>({ status: "form" });

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerFocusRef = useRef<Element | null>(null);

  // --- Open/close lifecycle: body scroll lock, initial focus, restore focus ---
  useEffect(() => {
    if (!isOpen) return;

    triggerFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      if (triggerFocusRef.current instanceof HTMLElement) triggerFocusRef.current.focus();
    };
  }, [isOpen]);

  // --- Esc to close + focus trap ---
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const stepValid = useMemo(() => {
    if (step === 0) {
      return form.fullName.trim().length >= 2 && /\S+@\S+\.\S+/.test(form.email) && form.role !== "";
    }
    if (step === 1) {
      const budgetOk = form.budget !== "" && (form.budget !== "not-sure" || form.budgetRealistic !== undefined);
      return form.whatBuilding.trim().length >= 40 && form.validation !== "" && budgetOk;
    }
    return form.funding !== "" && form.timeline !== "";
  }, [step, form]);

  async function handleSubmit() {
    if (form.company) {
      // Honeypot tripped — pretend to succeed, do nothing further.
      setResult({ status: "unqualified", reasons: ["just-exploring"] });
      return;
    }

    setResult({ status: "submitting" });
    const eventId = generateEventId();
    const attribution = getAttribution();

    try {
      const response = await fetch("/api/mvp-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          fullName: form.fullName,
          email: form.email,
          role: form.role,
          whatBuilding: form.whatBuilding,
          validation: form.validation,
          budget: form.budget,
          budgetRealistic: form.budgetRealistic,
          funding: form.funding,
          timeline: form.timeline,
          link: form.link,
          company: form.company,
          utm: attribution
            ? {
                utm_source: attribution.utm_source,
                utm_medium: attribution.utm_medium,
                utm_campaign: attribution.utm_campaign,
                utm_content: attribution.utm_content,
                utm_term: attribution.utm_term,
                fbclid: attribution.fbclid,
              }
            : undefined,
          fbp: getFbp(),
          fbc: getFbc(),
          landingUrl: attribution?.landingUrl ?? window.location.href,
          referrer: attribution?.referrer,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        setResult({ status: "error", message: "Something went wrong submitting the form. Please try again." });
        return;
      }

      const data: { qualified: boolean; reasons: DisqualificationReason[] } = await response.json();

      if (data.qualified) {
        track("mvp_apply_qualified");
        trackPixelEvent("Lead", eventId, { content_name: "mvp_qualified" });
        setResult({ status: "qualified" });
      } else {
        track("mvp_apply_unqualified", { reasons: data.reasons.join(",") });
        trackPixelEvent("UnqualifiedLead", eventId, { reasons: data.reasons.join(",") });
        setResult({ status: "unqualified", reasons: data.reasons });
      }
    } catch {
      setResult({ status: "error", message: "Something went wrong submitting the form. Please check your connection and try again." });
    }
  }

  function handleClose() {
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qualification-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close application form"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-md border border-border-subtle bg-background/80 text-foreground transition-colors hover:border-accent-border"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <h2 id="qualification-modal-title" className="sr-only">
            Apply for a Free MVP Scoping Call
          </h2>

          {result.status === "qualified" || result.status === "scheduled" ? (
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-foreground">
                {result.status === "scheduled"
                  ? "You're booked. Check your email for the invite. Before the call, have your validation evidence and any mockups ready to share."
                  : "Great, this looks like a fit. Pick a time below."}
              </p>
              {result.status === "qualified" ? (
                <CalendlyEmbed
                  name={form.fullName}
                  email={form.email}
                  whatBuilding={form.whatBuilding}
                  summaryLine={summarize(form)}
                  onScheduled={() => setResult({ status: "scheduled" })}
                />
              ) : null}
            </div>
          ) : result.status === "unqualified" ? (
            <UnqualifiedMessage reasons={result.reasons} />
          ) : (
            <FormSteps
              step={step}
              form={form}
              update={update}
              stepValid={stepValid}
              submitting={result.status === "submitting"}
              errorMessage={result.status === "error" ? result.message : undefined}
              onBack={() => setStep((s) => Math.max(0, s - 1))}
              onNext={() => setStep((s) => Math.min(STEP_COUNT - 1, s + 1))}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function UnqualifiedMessage({ reasons }: { reasons: DisqualificationReason[] }) {
  const messages: string[] = [];

  if (reasons.includes("idea-only")) {
    messages.push(
      "Talk to 10–15 potential customers about the problem before building. If you can get a few to pre-order or join a waitlist, you'll have much stronger footing."
    );
  }
  if (
    reasons.includes("budget-too-low") ||
    reasons.includes("budget-not-sure-unrealistic") ||
    reasons.includes("still-looking-for-funding")
  ) {
    messages.push(
      `A focused MVP in the ${MVP_CONFIG.priceMin}–${MVP_CONFIG.priceMax} range is where I can give you a production-grade result. If that's not realistic yet, a no-code prototype can help you validate first.`
    );
  }
  if (reasons.includes("just-exploring")) {
    messages.push("When you're ready to start within the next few months, apply again. I'd be glad to talk then.");
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold text-foreground">
        Thanks for sharing. Being honest: based on your answers, a full MVP build probably isn&apos;t the right next
        step yet.
      </p>
      <ul className="flex flex-col gap-3">
        {messages.map((message) => (
          <li key={message} className="text-base leading-relaxed text-foreground-muted">
            {message}
          </li>
        ))}
      </ul>
      <p className="text-sm text-foreground-faint">
        Still think it&apos;s a fit? Email me at{" "}
        <a href={`mailto:${MVP_CONFIG.contactEmail}`} className="underline underline-offset-2 hover:text-foreground">
          {MVP_CONFIG.contactEmail}
        </a>
        .
      </p>
    </div>
  );
}

type FormStepsProps = {
  step: number;
  form: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  stepValid: boolean;
  submitting: boolean;
  errorMessage?: string;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

function FormSteps({ step, form, update, stepValid, submitting, errorMessage, onBack, onNext, onSubmit }: FormStepsProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground-faint">
          Step {step + 1} of {STEP_COUNT}
        </p>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${((step + 1) / STEP_COUNT) * 100}%` }}
          />
        </div>
      </div>

      {/* Honeypot — hidden from real users, always in the DOM. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      {step === 0 ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className={labelClasses}>
              Full name
            </label>
            <input
              id="fullName"
              className={inputClasses}
              value={form.fullName}
              onChange={(event) => update("fullName", event.target.value)}
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={inputClasses}
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="role" className={labelClasses}>
              Your role
            </label>
            <select
              id="role"
              className={inputClasses}
              value={form.role}
              onChange={(event) => update("role", event.target.value as RoleOptionValue)}
            >
              <option value="" disabled>
                Select one
              </option>
              {ROLE_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {roleLabels[value]}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="whatBuilding" className={labelClasses}>
              What are you building, and who is it for?
            </label>
            <textarea
              id="whatBuilding"
              rows={4}
              className={inputClasses}
              value={form.whatBuilding}
              onChange={(event) => update("whatBuilding", event.target.value)}
            />
            <p className="text-xs text-foreground-faint">{form.whatBuilding.trim().length}/40 characters minimum</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="validation" className={labelClasses}>
              What validation do you have?
            </label>
            <select
              id="validation"
              className={inputClasses}
              value={form.validation}
              onChange={(event) => update("validation", event.target.value as ValidationOption)}
            >
              <option value="" disabled>
                Select one
              </option>
              {VALIDATION_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {validationLabels[value]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="budget" className={labelClasses}>
              Budget for the MVP
            </label>
            <select
              id="budget"
              className={inputClasses}
              value={form.budget}
              onChange={(event) =>
                setFormBudget(update, event.target.value as BudgetOption)
              }
            >
              <option value="" disabled>
                Select one
              </option>
              {BUDGET_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {budgetLabels[value]}
                </option>
              ))}
            </select>
          </div>
          {form.budget === "not-sure" ? (
            <div className="flex flex-col gap-2 rounded-md border border-border-subtle bg-background p-4">
              <p className="text-sm text-foreground-muted">
                Most MVPs I build cost {MVP_CONFIG.priceMin}–{MVP_CONFIG.priceMax}. Is that realistic for you within
                the next 3 months?
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => update("budgetRealistic", true)}
                  className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                    form.budgetRealistic === true
                      ? "border-accent-border bg-accent-muted text-accent-hover"
                      : "border-border-subtle text-foreground-muted hover:text-foreground"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => update("budgetRealistic", false)}
                  className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                    form.budgetRealistic === false
                      ? "border-accent-border bg-accent-muted text-accent-hover"
                      : "border-border-subtle text-foreground-muted hover:text-foreground"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="funding" className={labelClasses}>
              How is this funded?
            </label>
            <select
              id="funding"
              className={inputClasses}
              value={form.funding}
              onChange={(event) => update("funding", event.target.value as FundingOption)}
            >
              <option value="" disabled>
                Select one
              </option>
              {FUNDING_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {fundingLabels[value]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="timeline" className={labelClasses}>
              When do you want to start?
            </label>
            <select
              id="timeline"
              className={inputClasses}
              value={form.timeline}
              onChange={(event) => update("timeline", event.target.value as TimelineOption)}
            >
              <option value="" disabled>
                Select one
              </option>
              {TIMELINE_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {timelineLabels[value]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="link" className={labelClasses}>
              Website, LinkedIn, deck or waitlist <span className="text-foreground-faint">(optional)</span>
            </label>
            <input
              id="link"
              className={inputClasses}
              value={form.link}
              onChange={(event) => update("link", event.target.value)}
              placeholder="https://"
            />
          </div>
        </div>
      ) : null}

      {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}

      <div className="flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={onBack}
            disabled={submitting}
            className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-border disabled:opacity-50"
          >
            Back
          </button>
        ) : (
          <span />
        )}

        {step < STEP_COUNT - 1 ? (
          <button
            type="button"
            onClick={onNext}
            disabled={!stepValid}
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={!stepValid || submitting}
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Submitting…" : "Submit Application"}
          </button>
        )}
      </div>
    </div>
  );
}

function setFormBudget(
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void,
  value: BudgetOption
) {
  update("budget", value);
  update("budgetRealistic", undefined);
}
