import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  applyCookieConsent,
  getStoredCookieConsent,
  storeCookieConsent,
  type CookieConsentStatus,
} from "@/lib/cookie-consent";

export function CookieConsentBanner() {
  const [status, setStatus] = useState<CookieConsentStatus | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedStatus = getStoredCookieConsent();
    if (storedStatus) {
      setStatus(storedStatus);
      applyCookieConsent(storedStatus);
      return;
    }

    setIsOpen(true);
  }, []);

  const handleChoice = (nextStatus: CookieConsentStatus) => {
    storeCookieConsent(nextStatus);
    applyCookieConsent(nextStatus);
    setStatus(nextStatus);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Cookie Preferences
                </p>
                <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                  We use analytics cookies to measure website traffic.
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  PropertyShield UK Ltd uses Google Analytics to understand how visitors use the website and improve our services. You can accept or reject analytics cookies. Essential security and site functionality cookies remain enabled.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Read the full details in our <Link href="/terms" className="text-primary underline underline-offset-4">terms and cookie information</Link>.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
                <button
                  type="button"
                  onClick={() => handleChoice("rejected")}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Reject Analytics
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice("accepted")}
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Accept Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {status ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-[60] rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground shadow-xl transition-colors hover:border-primary hover:text-primary"
        >
          Cookie Settings
        </button>
      ) : null}
    </>
  );
}
