import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Phone } from "lucide-react";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <a 
        href="tel:01325000000" 
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.4)] z-50 animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
