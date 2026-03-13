import { PageHeader } from "@/components/ui/PageHeader";
import { Shield, Target, Users, CheckCircle, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    { icon: Award, title: "Quality First", desc: "We use only premium materials and proven techniques." },
    { icon: Shield, title: "Trust & Integrity", desc: "Honest quotes, clear communication, and no hidden costs." },
    { icon: Users, title: "Customer Focus", desc: "Your satisfaction is the ultimate measure of our success." },
    { icon: Target, title: "Precision", desc: "Meticulous attention to detail in every repair and installation." },
  ];

  return (
    <div>
      <PageHeader 
        title="About PropertyShield UK Ltd"
        subtitle="Built on reliability, quality, and service. We are Darlington's premium roofing specialists."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At PropertyShield UK Ltd, our mission is simple: to protect properties with roofing solutions that combine outstanding durability with aesthetic excellence.
                </p>
                <p>
                  Based in Darlington, we recognized a gap in the market for a truly professional, premium roofing service that homeowners and businesses could rely on without hesitation. We set out to build a company that shatters the stereotypes of the trade industry.
                </p>
                <p>
                  When you hire PropertyShield, you are investing in peace of mind. Our team brings decades of combined experience, strict adherence to health and safety, and an unwavering commitment to leaving your property immaculate.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((value, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-lg">
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">Who We Help</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Homeowners", "Landlords", "Letting Agents", "Commercial Clients", "Property Managers"].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border/50 text-foreground font-semibold shadow-md"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Protect Your Property?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Get in touch with our expert team today for a comprehensive, free quotation.</p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground px-10 h-14 text-lg">Contact Us Now</Button>
        </Link>
      </section>
    </div>
  );
}
