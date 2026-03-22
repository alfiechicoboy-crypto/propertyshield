import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import ServiceDetailPage from "@/pages/ServiceDetail";
import GalleryPage from "@/pages/Gallery";
import ReviewsPage from "@/pages/Reviews";
import AreasPage from "@/pages/Areas";
import ContactPage from "@/pages/Contact";
import TermsPage from "@/pages/Terms";
import PrivacyPage from "@/pages/Privacy";
import { serviceSeoEntries } from "@/lib/service-seo";

const SITE_URL = "https://propertyshielduk.com";

type SeoEntry = {
  title: string;
  description: string;
  canonicalPath: string;
};

const defaultSeo: SeoEntry = {
  title: "PropertyShield UK Ltd | Roofing Company Darlington",
  description:
    "PropertyShield UK Ltd provides premium roofing services in Darlington, including roof repairs, re-roofs, chimney work, flat roofing, and roofline services.",
  canonicalPath: "/",
};

const seoByPath: Record<string, SeoEntry> = {
  "/": defaultSeo,
  "/about": {
    title: "About PropertyShield UK Ltd | Trusted Roofers in Darlington",
    description:
      "Learn about PropertyShield UK Ltd, a trusted Darlington roofing company focused on reliable workmanship, honest quotations, and long-lasting roofing solutions.",
    canonicalPath: "/about",
  },
  "/about-us": {
    title: "About PropertyShield UK Ltd | Trusted Roofers in Darlington",
    description:
      "Learn about PropertyShield UK Ltd, a trusted Darlington roofing company focused on reliable workmanship, honest quotations, and long-lasting roofing solutions.",
    canonicalPath: "/about",
  },
  "/services": {
    title: "Roofing Services Darlington | PropertyShield UK Ltd",
    description:
      "Explore our roofing services in Darlington: roof repairs, re-roofing, tile and slate replacement, flat roofing, chimney repairs, and more.",
    canonicalPath: "/services",
  },
  "/gallery": {
    title: "Roofing Project Gallery | PropertyShield UK Ltd",
    description:
      "View recent roofing projects completed by PropertyShield UK Ltd across Darlington and surrounding areas.",
    canonicalPath: "/gallery",
  },
  "/portfolio-projects": {
    title: "Roofing Project Gallery | PropertyShield UK Ltd",
    description:
      "View recent roofing projects completed by PropertyShield UK Ltd across Darlington and surrounding areas.",
    canonicalPath: "/gallery",
  },
  "/reviews": {
    title: "Customer Reviews | PropertyShield UK Ltd",
    description:
      "Read what customers say about PropertyShield UK Ltd roofing and exterior services in Darlington.",
    canonicalPath: "/reviews",
  },
  "/areas": {
    title: "Areas We Cover | Darlington Roofers | PropertyShield UK Ltd",
    description:
      "Based in Darlington, PropertyShield UK Ltd provides roofing services across Darlington and surrounding areas.",
    canonicalPath: "/areas",
  },
  "/contact": {
    title: "Contact PropertyShield UK Ltd | Free Roofing Quotes",
    description:
      "Contact PropertyShield UK Ltd for roofing and exterior cleaning enquiries in Darlington. Request a free quote today.",
    canonicalPath: "/contact",
  },
  "/contact-us": {
    title: "Contact PropertyShield UK Ltd | Free Roofing Quotes",
    description:
      "Contact PropertyShield UK Ltd for roofing and exterior cleaning enquiries in Darlington. Request a free quote today.",
    canonicalPath: "/contact",
  },
  "/terms": {
    title: "Terms & Legal Information | PropertyShield UK Ltd",
    description:
      "Read PropertyShield UK Ltd terms, legal information, and service conditions for roofing works in Darlington and surrounding areas.",
    canonicalPath: "/terms",
  },
  "/privacy": {
    title: "Privacy Policy | PropertyShield UK Ltd",
    description:
      "Read the PropertyShield UK Ltd privacy policy covering website enquiries, analytics consent, and personal data handling.",
    canonicalPath: "/privacy",
  },
  "/faq": {
    title: "Terms & Legal Information | PropertyShield UK Ltd",
    description:
      "Read PropertyShield UK Ltd terms, legal information, and service conditions for roofing works in Darlington and surrounding areas.",
    canonicalPath: "/terms",
  },
  "/legal-notice": {
    title: "Terms & Legal Information | PropertyShield UK Ltd",
    description:
      "Read PropertyShield UK Ltd terms, legal information, and service conditions for roofing works in Darlington and surrounding areas.",
    canonicalPath: "/terms",
  },
  "/contact-us/privacy-policy": {
    title: "Privacy Policy | PropertyShield UK Ltd",
    description:
      "Read the PropertyShield UK Ltd privacy policy covering website enquiries, analytics consent, and personal data handling.",
    canonicalPath: "/privacy",
  },
};

function getSeoForPath(pathname: string): SeoEntry {
  if (seoByPath[pathname]) {
    return seoByPath[pathname];
  }

  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "");
    const service = serviceSeoEntries[slug];

    if (service) {
      return {
        title: service.metaTitle,
        description: service.metaDescription,
        canonicalPath: `/services/${service.slug}`,
      };
    }
  }

  return defaultSeo;
}

function upsertMeta(
  attributeName: "name" | "property",
  attributeValue: string,
  content: string,
) {
  const selector = `meta[${attributeName}="${attributeValue}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    const pathname = location.split("?")[0]?.split("#")[0] || "/";
    const seo = getSeoForPath(pathname);
    const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [location]);

  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/:id" component={ServiceDetailPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/portfolio-projects" component={GalleryPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/areas" component={AreasPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/faq" component={TermsPage} />
        <Route path="/legal-notice" component={TermsPage} />
        <Route path="/contact-us/privacy-policy" component={PrivacyPage} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
