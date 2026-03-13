import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Star, Clock, MapPin, 
  Wrench, Home, Layers, Square, 
  Building, Droplets, Sparkles, AlertTriangle,
  Award, Zap, Shield, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* HERO SECTION */}
      {/* landing page hero scenic dark premium modern house */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(15,25,35,0.95)), url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Subtle shield decoration */}
        <Shield className="absolute inset-0 m-auto w-[800px] h-[800px] text-primary/5 -z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm text-primary text-sm tracking-widest uppercase font-semibold"
          >
            Premium Roofing Services
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl leading-tight mb-6"
          >
            Darlington's Trusted <span className="gold-gradient-text">Roofing Specialists</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Repairs • Re-Roofs • Chimneys • Roofline • Emergency Roofing<br/>
            Professional solutions for homeowners and commercial clients.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 font-semibold shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:01325000000" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-lg px-8 h-14 font-semibold">
                Call Now: 01325 000000
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-y border-border py-8 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: ShieldCheck, text: "Fully Insured" },
              { icon: Star, text: "Quality Workmanship" },
              { icon: Clock, text: "Fast Response Times" },
              { icon: MapPin, text: "Local Specialists" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-3">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="text-foreground font-medium text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Roofing Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive roofing solutions tailored to protect and enhance your property.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Roof Repairs", icon: Wrench, path: "/services/roof-repairs", desc: "Expert leak detection and rapid repairs to secure your roof." },
              { title: "Re-Roofing", icon: Home, path: "/services/re-roofing", desc: "Complete roof replacements built to last for generations." },
              { title: "Flat Roofing", icon: Layers, path: "/services/flat-roofing", desc: "Durable EPDM, GRP and felt solutions for flat roofs." },
              { title: "Tile Replacement", icon: Square, path: "/services/tile-slate-replacement", desc: "Matching and replacing broken or slipped tiles." },
              { title: "Chimney Repairs", icon: Building, path: "/services/chimney-repairs", desc: "Repointing, lead flashing, and structural chimney work." },
              { title: "Fascias & Guttering", icon: Droplets, path: "/services/fascias-soffits-guttering", desc: "UPVC roofline upgrades for better water drainage." },
              { title: "Roof Cleaning", icon: Sparkles, path: "/services/roof-cleaning", desc: "Moss removal and soft washing to extend roof life." },
              { title: "Emergency Roofing", icon: AlertTriangle, path: "/services/emergency-roofing", desc: "24/7 rapid response for storm damage and major leaks." },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={service.path}>
                  <Card className="bg-card border-border hover-glow cursor-pointer h-full">
                    <CardContent className="p-8 flex flex-col items-start h-full">
                      <div className="w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow mb-6">{service.desc}</p>
                      <span className="text-primary font-semibold text-sm flex items-center gap-2 group">
                        Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose PropertyShield UK Ltd
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Skilled Workmanship" },
              { icon: Shield, title: "Honest Pricing" },
              { icon: Zap, title: "Fast Response" },
              { icon: ShieldCheck, title: "Professional Standards" },
              { icon: Clock, title: "Built to Last" },
              { icon: Star, title: "Customer Satisfaction" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-background/50 border border-border/50"
              >
                <div className="shrink-0 p-3 bg-primary/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">We take pride in delivering exceptional results on every project, big or small.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                About PropertyShield
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As Darlington's premier roofing specialists, we understand that your roof is your property's first line of defence. That's why we bring an uncompromising commitment to quality, reliability, and professional standards to every job.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Whether you need emergency repairs, a complete re-roof, or routine maintenance, our skilled team treats your property with the utmost respect. We don't just fix roofs; we protect homes.
              </p>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <Shield className="w-full h-full text-primary drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]" strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "James T.", loc: "Darlington", quote: "PropertyShield came out on a Sunday to fix a major leak. Professional, honest pricing, and exceptional work. Highly recommended." },
              { name: "Sarah M.", loc: "Newton Aycliffe", quote: "Had our entire roof replaced. The team was punctual, tidy, and the finished roof looks absolutely incredible. A truly premium service." },
              { name: "David R.", loc: "Stockton", quote: "Excellent chimney repointing job. They communicated clearly throughout the process and left the site immaculate." }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="bg-background border-border/50 h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-muted-foreground text-lg mb-8 italic">"{review.quote}"</p>
                    <div className="mt-auto border-t border-border pt-4">
                      <p className="font-bold text-foreground">{review.name}</p>
                      <p className="text-sm text-primary">{review.loc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="link" className="text-primary hover:text-primary/80">
                Read More Reviews →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS & FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* AREAS */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Areas We Cover
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Based in Darlington, we provide premium roofing services across Darlington and the surrounding areas.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Darlington", "Newton Aycliffe", "Bishop Auckland", "Stockton-on-Tees", "Middlesbrough", "Shildon", "Spennymoor"].map(area => (
                  <span key={area} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                    {area}
                  </span>
                ))}
              </div>
              <Link href="/areas">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View All Areas
                </Button>
              </Link>
            </motion.div>

            {/* FAQ */}
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "What roofing services do you offer?", a: "We offer all aspects of roofing including roof repairs, full re-roofs, flat roofing, chimney repairs, fascias, soffits, guttering, and roof cleaning." },
                  { q: "Do you provide free quotes?", a: "Yes, we provide comprehensive, no-obligation free quotes for all prospective jobs." },
                  { q: "Can you help with emergency roof repairs?", a: "Absolutely. We offer a rapid response emergency service for major leaks, storm damage, and structural roof issues." },
                  { q: "Do you cover Darlington and surrounding areas?", a: "Yes, we are based in Darlington and cover a wide radius including Newton Aycliffe, Stockton, Middlesbrough, and beyond." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
          >
            Need Roofing Work Done?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-primary-foreground/90 mb-10"
          >
            Request your free, no-obligation quote today and discover the PropertyShield difference.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-lg px-8 h-14 font-bold shadow-xl">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:01325000000" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 h-14 font-bold">
                Call: 01325 000000
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
