import { useParams, Link } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceSeoEntries } from "@/lib/service-seo";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const data = serviceSeoEntries[id || ""];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">Service Not Found</h1>
        <Link href="/services"><Button>View All Services</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={data.title} subtitle={data.desc} />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground">{data.shortTitle}</span>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: data.shortTitle,
                name: `${data.shortTitle} | PropertyShield UK Ltd`,
                description: data.metaDescription,
                areaServed: ["Darlington", "County Durham", "Teesside", "North Yorkshire"],
                provider: {
                  "@type": "RoofingContractor",
                  name: "PropertyShield UK Ltd",
                  url: "https://propertyshielduk.com",
                  telephone: "+447753351619",
                },
                url: `https://propertyshielduk.com/services/${data.slug}`,
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://propertyshielduk.com/" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://propertyshielduk.com/services" },
                  { "@type": "ListItem", position: 3, name: data.shortTitle, item: `https://propertyshielduk.com/services/${data.slug}` },
                ],
              }),
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">What's Included</h2>
              <ul className="space-y-4 mb-10">
                {data.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {data.why} Our team at PropertyShield UK Ltd brings years of expertise to every project in Darlington and surrounding areas. We guarantee premium workmanship and long-lasting results.
              </p>
            </div>

            {/* Sidebar / CTA Card */}
            <div className="lg:pl-10">
              <div className="bg-card border border-border p-8 rounded-2xl shadow-xl sticky top-32">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Request a Quote</h3>
                <p className="text-muted-foreground mb-8">Get a free, no-obligation assessment for your {data.title.toLowerCase()} project.</p>
                
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full">
                    <Button className="w-full bg-primary text-primary-foreground h-14 text-lg font-semibold">
                      Contact Us Now
                    </Button>
                  </Link>
                  <a href="tel:07753351619" className="block w-full">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 h-14 text-lg font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      07753 351619
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
