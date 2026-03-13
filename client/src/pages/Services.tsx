import { PageHeader } from "@/components/ui/PageHeader";
import { Wrench, Home, Layers, Droplets, Sparkles, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const categories = [
    {
      title: "Roofing & Re-Roofing",
      items: [
        { name: "Re-Roofing", path: "/services/re-roofing", icon: Home, desc: "Full roof replacements with premium materials." },
        { name: "Flat Roofing", path: "/services/flat-roofing", icon: Layers, desc: "EPDM, GRP and traditional felt flat roofs." },
        { name: "Tile & Slate Replacement", path: "/services/tile-slate-replacement", icon: Home, desc: "Sourcing and fitting matching tiles." },
      ]
    },
    {
      title: "Repairs & Maintenance",
      items: [
        { name: "Roof Repairs", path: "/services/roof-repairs", icon: Wrench, desc: "Leak detection and lasting structural repairs." },
        { name: "Chimney Repairs", path: "/services/chimney-repairs", icon: Home, desc: "Repointing, lead flashing, and structural fixes." },
        { name: "Roof Cleaning", path: "/services/roof-cleaning", icon: Sparkles, desc: "Moss removal to extend the lifespan of your roof." },
      ]
    },
    {
      title: "Specialist Services",
      items: [
        { name: "Fascias & Guttering", path: "/services/fascias-soffits-guttering", icon: Droplets, desc: "UPVC roofline installations and repairs." },
        { name: "Emergency Roofing", path: "/services/emergency-roofing", icon: AlertTriangle, desc: "24/7 rapid response for storm damage." },
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Premium Roofing Services"
        subtitle="Comprehensive solutions delivered with exceptional craftsmanship."
      />

      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {categories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="font-serif text-3xl font-bold text-foreground">{category.title}</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={service.path}>
                      <Card className="bg-card border-border hover-glow cursor-pointer h-full transition-colors group">
                        <CardContent className="p-8">
                          <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
                          <p className="text-muted-foreground mb-6">{service.desc}</p>
                          <span className="text-primary font-semibold text-sm">View Details →</span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
