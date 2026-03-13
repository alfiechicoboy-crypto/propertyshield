import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Areas", href: "/areas" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
              <Shield className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">PropertyShield</span>
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">UK Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold tracking-wide">01325 000000</span>
            </div>
            <Link href="/contact" className="inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-[0_0_15px_rgba(201,168,76,0.2)] hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] transition-all">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-background border-b border-border shadow-xl px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-lg font-medium py-2 border-b border-border/50 ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <Link href="/contact" className="w-full block" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground text-lg py-6">
                Get Free Quote
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-2 text-foreground py-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">01325 000000</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
