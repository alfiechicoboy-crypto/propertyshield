import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { areaSeoEntries } from "@/lib/area-seo";

export default function AreasPage() {
  const primaryAreas = Object.values(areaSeoEntries).filter(
    (a) => ["darlington", "newton-aycliffe", "bishop-auckland", "stockton-on-tees", "middlesbrough", "hartlepool", "durham"].includes(a.slug)
  );
  const villageAreas = Object.values(areaSeoEntries).filter(
    (a) => ["yarm", "northallerton", "sedgefield", "hurworth", "middleton-st-george", "heighington", "shildon", "spennymoor", "redcar"].includes(a.slug)
  );

  return (
    <div>
      <PageHeader 
        title="Areas We Cover" 
        subtitle="Providing premium roofing services across Darlington and the wider County Durham, Teesside, and North Yorkshire area."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Main Service Areas</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Based in Darlington, we cover all major towns within a 30-mile radius.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
            {primaryAreas.map((area, i) => (
              <motion.div 
                key={area.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
              >
                <Link href={`/areas/${area.slug}`}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer h-full" data-testid={`area-card-${area.slug}`}>
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span className="font-semibold text-foreground">{area.name}</span>
                      <span className="text-xs text-muted-foreground">{area.distance}</span>
                      <span className="text-primary text-sm flex items-center gap-1">
                        View details <ChevronRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Villages and Nearby Towns</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">We also serve surrounding villages and smaller towns across the region.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
            {villageAreas.map((area, i) => (
              <motion.div 
                key={area.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05 }}
              >
                <Link href={`/areas/${area.slug}`}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer text-center py-5" data-testid={`area-card-${area.slug}`}>
                    <CardContent className="p-0 flex flex-col items-center justify-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground text-sm">{area.name}</span>
                      <span className="text-xs text-muted-foreground">{area.postcodes}</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="bg-card p-10 md:p-16 rounded-2xl border border-border max-w-4xl mx-auto text-center shadow-xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Need a Roofer in Your Area?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Darlington, we provide roofing services across Darlington and all surrounding towns within a 45-mile radius. If your area isn't listed, just ask — our team covers County Durham, Teesside, North Yorkshire, and more. Contact us to confirm coverage and arrange a free quote.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer" data-testid="areas-contact-cta">
                Get a Free Quote
              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
