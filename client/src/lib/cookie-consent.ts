export const COOKIE_CONSENT_KEY = "ps_cookie_consent";

export type CookieConsentStatus = "accepted" | "rejected";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function getStoredCookieConsent(): CookieConsentStatus | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

export function storeCookieConsent(status: CookieConsentStatus) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(COOKIE_CONSENT_KEY, status);
}

export function applyCookieConsent(status: CookieConsentStatus) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: status === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
