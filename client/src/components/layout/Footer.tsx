import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin, ChevronRight, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground">PropertyShield</span>
                <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">UK Ltd</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium roofing services you can rely on. Protecting homes and businesses with quality workmanship and professional standards across Darlington.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Areas We Cover', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Roof Repairs', path: '/services/roof-repairs' },
                { name: 'Re-Roofing', path: '/services/re-roofing' },
                { name: 'Chimney Repairs', path: '/services/chimney-repairs' },
                { name: 'Flat Roofing', path: '/services/flat-roofing' },
                { name: 'Roof Cleaning', path: '/services/roof-cleaning' },
                { name: 'Emergency Roofing', path: '/services/emergency-roofing' }
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-sm font-semibold text-foreground mb-1">Call Us</span>
                  <a href="tel:01325000000" className="hover:text-primary transition-colors">01325 000000</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-sm font-semibold text-foreground mb-1">Email Us</span>
                  <a href="mailto:info@propertyshielduk.co.uk" className="hover:text-primary transition-colors break-all">info@propertyshielduk.co.uk</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-sm font-semibold text-foreground mb-1">Location</span>
                  <span>Darlington, County Durham<br/>United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>Copyright © {currentYear} PropertyShield UK Ltd. All rights reserved.</p>
          <p>Roofing Services Darlington</p>
        </div>
      </div>
    </footer>
  );
}
