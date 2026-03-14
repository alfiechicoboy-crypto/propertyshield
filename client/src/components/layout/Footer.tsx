import { Link } from "wouter";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram } from "lucide-react";
import { PropertyShieldLogo } from "@/components/ui/PropertyShieldLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080a0d] border-t border-border pt-20 pb-10">
      {/* Gold top accent line */}
      <div className="gold-divider mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <PropertyShieldLogo size="md" textSize="text-xl" />
            <p className="text-muted-foreground leading-relaxed text-sm">
              Premium roofing services you can rely on. Protecting homes and businesses with quality workmanship and professional standards across Darlington and the North East.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border/50">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Areas We Cover", href: "/areas" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors text-sm group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border/50">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Roof Repairs", path: "/services/roof-repairs" },
                { name: "Re-Roofing", path: "/services/re-roofing" },
                { name: "Chimney Repairs", path: "/services/chimney-repairs" },
                { name: "Flat Roofing", path: "/services/flat-roofing" },
                { name: "Roof Cleaning", path: "/services/roof-cleaning" },
                { name: "Emergency Roofing", path: "/services/emergency-roofing" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border/50">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li>
                <a href="tel:07753351619" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-0.5">Call Alfie</span>
                    <span className="text-sm">07753 351619</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:07424376189" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-0.5">Call Jacob</span>
                    <span className="text-sm">07424 376189</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:propertyshield128@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-0.5">Email Us</span>
                    <span className="text-sm break-all">propertyshield128@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-0.5">Location</span>
                    <span className="text-sm">Darlington, County Durham</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>Copyright © {currentYear} PropertyShield UK Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <span className="text-primary/40">|</span>
            <span className="text-primary/70">Roofing &amp; Pressure Washing Services — Darlington</span>
          </div>
          {/* Legal & Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
            <span className="bg-primary/10 px-2 py-1 rounded font-semibold text-primary/80">Company No: 15707554</span>
            <span className="bg-primary/10 px-2 py-1 rounded font-semibold text-primary/80">Fully Insured</span>
            <span className="bg-primary/10 px-2 py-1 rounded font-semibold text-primary/80">Checkatrade Rated: 9.44/10</span>
            <span className="bg-primary/10 px-2 py-1 rounded font-semibold text-primary/80">Family-run Business</span>
            <span className="bg-primary/10 px-2 py-1 rounded font-semibold text-primary/80">Not affiliated with PropertyShield Ltd (Preston) or Shield AI UK Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
