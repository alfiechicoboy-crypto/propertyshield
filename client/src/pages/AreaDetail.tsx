import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { areaSeoEntries } from "@/lib/area-seo";
import { serviceSeoEntries } from "@/lib/service-seo";
import { MapPin, Phone, Wrench, Home, Layers, Building, Droplets, Sparkles, AlertTriangle, Square, ChevronRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const serviceIcons: Record<string, typeof Wrench> = {
  "roof-repairs": Wrench,
  "re-roofing": Home,
  "flat-roofing": Layers,
  "tile-slate-replacement": Square,
  "chimney-repairs": Building,
  "fascias-soffits-guttering": Droplets,
  "roof-cleaning": Sparkles,
  "emergency-roofing": AlertTriangle,
};

export default function AreaDetailPage() {
  const params = useParams<{ slug: string }>();
  const area = params.slug ? areaSeoEntries[params.slug] : null;

  useEffect(() => {
    if (!area) {
      let meta = document.head.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", "noindex, nofollow");
      return () => {
        meta?.remove();
      };
    }
  }, [area]);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the area you're looking for.</p>
          <Link href="/areas">
            <Button className="bg-primary text-primary-foreground">View All Areas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const services = Object.values(serviceSeoEntries);
  const nearbyAreaData = area.nearbyAreas
    .map((slug) => areaSeoEntries[slug])
    .filter(Boolean);

  return (
    <div>
      <PageHeader
        title={area.h1}
        subtitle={`Professional roofing services in ${area.name}, ${area.county}. ${area.distance}.`}
      />

      <section className="py-16 bg-background" data-testid="area-intro-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/areas" className="hover:text-primary">Areas</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-foreground font-medium">{area.name}</li>
            </ol>
          </nav>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://propertyshielduk.com/" },
                  { "@type": "ListItem", position: 2, name: "Areas We Cover", item: "https://propertyshielduk.com/areas" },
                  { "@type": "ListItem", position: 3, name: area.name, item: `https://propertyshielduk.com/areas/${area.slug}` },
                ],
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Roofing",
                name: `Roofers in ${area.name}`,
                description: area.metaDescription,
                areaServed: {
                  "@type": "City",
                  name: area.name,
                  containedInPlace: { "@type": "AdministrativeArea", name: area.county },
                },
                provider: {
                  "@type": "RoofingContractor",
                  name: "PropertyShield UK Ltd",
                  url: "https://propertyshielduk.com",
                  telephone: "+447753351619",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "9 Frosterley Drive",
                    addressLocality: "Darlington",
                    addressRegion: "County Durham",
                    postalCode: "DL1 2JA",
                    addressCountry: "GB",
                  },
                },
                url: `https://propertyshielduk.com/areas/${area.slug}`,
              }),
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-primary font-medium">{area.distance} &middot; {area.postcodes}</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{area.intro}</p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Roofing in {area.name} — Local Knowledge
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{area.localInfo}</p>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Why Choose PropertyShield for {area.name}?</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.whyUs}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border" data-testid="area-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Roofing Services in {area.name}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {area.servicesIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] || Wrench;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="bg-background border-border hover:border-primary/50 transition-colors cursor-pointer h-full" data-testid={`area-service-${service.slug}`}>
                    <CardContent className="p-6 flex flex-col items-start">
                      <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.shortTitle}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="area-nearby-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Nearby Areas We Cover
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreaData.map((nearby) => (
              <Link key={nearby.slug} href={`/areas/${nearby.slug}`}>
                <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer" data-testid={`nearby-area-${nearby.slug}`}>
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{nearby.name}</span>
                  <span className="text-xs text-muted-foreground">({nearby.distance})</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="area-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Roofer in {area.name}?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Get a free, no-obligation quote for your roofing project. We cover {area.name} and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-lg px-8 h-14 font-bold shadow-xl" data-testid="area-cta-quote">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:07753351619" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 h-14 font-bold" data-testid="area-cta-call">
                <Phone className="w-5 h-5 mr-2" />
                07753 351619
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
