import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AreasPage() {
  const areas = [
    "Darlington", "Newton Aycliffe", "Bishop Auckland", 
    "Stockton-on-Tees", "Middlesbrough", "Shildon", 
    "Spennymoor", "Ferryhill", "Sedgefield", "Aycliffe Village"
  ];

  return (
    <div>
      <PageHeader 
        title="Areas We Cover" 
        subtitle="Providing premium roofing services across Darlington and the wider County Durham area."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors text-center py-6">
                  <CardContent className="p-0 flex flex-col items-center justify-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">{area}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-card p-10 md:p-16 rounded-2xl border border-border max-w-4xl mx-auto text-center shadow-xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Need a Roofer in Your Area?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Darlington, we provide roofing services across Darlington and all surrounding towns within a 40 mile radius. If your area isn't listed, just ask—our team covers County Durham, Teesside, North Yorkshire, and more. Contact us to confirm coverage and arrange a free quote.
            </p>
            <p className="text-sm text-muted-foreground">
              SEO Keywords: roofing company Darlington, roof repairs Darlington, re-roofing Darlington, emergency roofer Darlington, chimney repairs Darlington, roofers Newton Aycliffe, roofers Bishop Auckland, roofers Stockton, roofers Middlesbrough, roofers Durham, roofers Yarm, roofers Redcar, roofers Hartlepool, roofers Northallerton.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
