import { useParams, Link } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceContent: Record<string, any> = {
  "roof-repairs": {
    title: "Roof Repairs in Darlington",
    desc: "Expert fault finding and durable repair solutions to protect your property from water damage.",
    bullets: ["Leak detection & isolation", "Ridge tile rebedding & repointing", "Lead valley repairs", "Storm damage repair"],
    why: "A small leak can quickly become a major structural issue. We respond fast and fix it right the first time."
  },
  "re-roofing": {
    title: "Re-Roofing Specialists",
    desc: "Complete roof replacements using premium materials, installed to the highest industry standards.",
    bullets: ["Full strip and re-tile/slate", "Breathable membrane installation", "Treated timber battens", "Insurance backed guarantees"],
    why: "A new roof is a major investment. We ensure yours is built to last for generations, adding significant value to your property."
  },
  "tile-slate-replacement": {
    title: "Tile & Slate Replacement",
    desc: "Seamless replacement of broken, slipped, or missing tiles to restore your roof's integrity.",
    bullets: ["Colour & profile matching", "Slate repairs", "Concrete & clay tile replacements", "Ridge and hip tile repairs"],
    why: "Missing tiles compromise your roof's waterproofing. We source matching materials to ensure an invisible repair."
  },
  "chimney-repairs": {
    title: "Chimney Repairs & Repointing",
    desc: "Comprehensive chimney maintenance to prevent damp ingress and structural failure.",
    bullets: ["Brickwork repointing", "Lead flashing replacement", "Chimney pot securing", "Complete chimney rebuilds"],
    why: "Chimneys bear the brunt of the weather. Our specialized repairs keep them secure and watertight."
  },
  "fascias-soffits-guttering": {
    title: "Fascias, Soffits & Guttering",
    desc: "High-quality UPVC roofline installations to improve drainage and property aesthetics.",
    bullets: ["Full UPVC replacements", "Gutter clearing & repairs", "Dry verge systems", "Cladding installations"],
    why: "A failing roofline causes damp walls. Our modern UPVC solutions are maintenance-free and look fantastic."
  },
  "flat-roofing": {
    title: "Flat Roofing Services",
    desc: "Durable, waterproof flat roofing solutions for garages, extensions, and commercial properties.",
    bullets: ["EPDM Rubber roofing", "GRP Fibreglass", "Traditional felt systems", "Flat roof repairs"],
    why: "Flat roofs require specialist knowledge. We install seamless systems designed to withstand pooling water."
  },
  "roof-cleaning": {
    title: "Roof Cleaning & Moss Removal",
    desc: "Professional cleaning to remove damaging moss, algae, and lichen without harming your tiles.",
    bullets: ["Manual moss scraping", "Biocide soft washing", "Gutter clearing", "Tile protection treatments"],
    why: "Moss retains moisture and damages tiles. Our gentle cleaning methods restore your roof safely."
  },
  "emergency-roofing": {
    title: "Emergency Roof Repairs",
    desc: "24/7 rapid response for critical roof failures, severe leaks, and storm damage across Darlington.",
    bullets: ["Temporary weatherproofing", "Storm damage assessment", "Make-safe repairs", "Insurance reports"],
    why: "When disaster strikes, you need a team you can trust immediately. We are available around the clock."
  }
};

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const data = serviceContent[id || ""];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">Service Not Found</h1>
        <Link href="/services"><Button>View All Services</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={data.title} subtitle={data.desc} />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">What's Included</h2>
              <ul className="space-y-4 mb-10">
                {data.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {data.why} Our team at PropertyShield UK Ltd brings years of expertise to every project in Darlington and surrounding areas. We guarantee premium workmanship and long-lasting results.
              </p>
            </div>

            {/* Sidebar / CTA Card */}
            <div className="lg:pl-10">
              <div className="bg-card border border-border p-8 rounded-2xl shadow-xl sticky top-32">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Request a Quote</h3>
                <p className="text-muted-foreground mb-8">Get a free, no-obligation assessment for your {data.title.toLowerCase()} project.</p>
                
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full">
                    <Button className="w-full bg-primary text-primary-foreground h-14 text-lg font-semibold">
                      Contact Us Now
                    </Button>
                  </Link>
                  <a href="tel:07753351619" className="block w-full">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 h-14 text-lg font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      07753 351619
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
