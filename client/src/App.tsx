import { Switch, Route } from "wouter";
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

function Router() {
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
        <Route path="/faq" component={TermsPage} />
        <Route path="/legal-notice" component={TermsPage} />
        <Route path="/contact-us/privacy-policy" component={TermsPage} />
        
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
