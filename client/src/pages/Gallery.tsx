import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

export default function GalleryPage() {
  // Placeholders for the gallery
  const projects = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    category: i % 2 === 0 ? "Re-Roofing" : "Roof Repairs",
    location: i % 3 === 0 ? "Darlington" : "Newton Aycliffe",
  }));

  return (
    <div>
      <PageHeader 
        title="Our Work" 
        subtitle="A selection of our premium roofing projects completed across Darlington and the surrounding areas."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-card to-muted flex flex-col items-center justify-center text-muted-foreground p-6 text-center group-hover:scale-105 transition-transform duration-500">
                  <span className="opacity-50">[ Project Image Placeholder ]</span>
                </div>
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-bold text-sm tracking-wider uppercase mb-1">{project.category}</span>
                  <span className="text-foreground text-lg font-medium">{project.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
