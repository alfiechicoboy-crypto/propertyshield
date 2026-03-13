import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyShieldLogo } from "@/components/ui/PropertyShieldLogo";

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
        isScrolled
          ? "bg-[#0d0f14]/97 backdrop-blur-md border-b border-border shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <Link href="/" data-testid="link-home-logo">
            <PropertyShieldLogo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary tracking-wide ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:07753351619"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-phone-header"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold tracking-wide text-sm">07753 351619</span>
            </a>
            <Link href="/contact" className="inline-block" data-testid="link-get-quote-header">
              <Button
                className="font-semibold px-6"
                style={{
                  background: "linear-gradient(135deg, #D4A843 0%, #C9962A 100%)",
                  color: "#0d0f14",
                  boxShadow: "0 0 18px rgba(201,150,42,0.35)",
                }}
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#0d0f14] border-b border-border shadow-2xl px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium py-3 border-b border-border/40 transition-colors ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/contact" className="w-full block" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full text-lg h-14 font-bold"
                style={{ background: "linear-gradient(135deg, #D4A843 0%, #C9962A 100%)", color: "#0d0f14" }}
              >
                Get Free Quote
              </Button>
            </Link>
            <a
              href="tel:07753351619"
              className="flex items-center justify-center gap-2 text-foreground py-3 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 text-primary" />
              Alfie: 07753 351619
            </a>
            <a
              href="tel:07424376189"
              className="flex items-center justify-center gap-2 text-muted-foreground py-2 text-base"
            >
              <Phone className="w-4 h-4 text-primary" />
              Jacob: 07424 376189
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
