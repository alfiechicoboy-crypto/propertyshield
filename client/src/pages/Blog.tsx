import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  location?: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "how-much-does-new-roof-cost-darlington",
    title: "How Much Does a New Roof Cost in Darlington? (2026 Guide)",
    excerpt: "A full re-roof in Darlington typically costs between £5,000 and £12,000 depending on property size, materials, and access. We break down the costs for terraced, semi-detached, and detached homes across County Durham so you know exactly what to expect.",
    date: "2026-03-26",
    readTime: "8 min read",
    category: "Pricing Guide",
    location: "Darlington",
  },
  {
    slug: "signs-your-roof-needs-repair",
    title: "7 Warning Signs Your Roof Needs Repair Before It Gets Worse",
    excerpt: "From missing slates to damp patches on your ceiling, these seven signs indicate your roof needs professional attention. Catching problems early can save you thousands compared to a full re-roof. Here's what to look for and when to call a roofer.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Homeowner Tips",
  },
  {
    slug: "flat-roof-vs-pitched-roof-which-is-right",
    title: "Flat Roof vs Pitched Roof: Which Is Right for Your Property?",
    excerpt: "Both flat and pitched roofs have distinct advantages for North East properties. Flat roofs suit extensions and garages, while pitched roofs offer better longevity and insulation. We compare costs, lifespan, maintenance, and which works best in County Durham's climate.",
    date: "2026-03-14",
    readTime: "7 min read",
    category: "Roofing Guide",
  },
  {
    slug: "emergency-roof-repairs-darlington-what-to-do",
    title: "Emergency Roof Repairs in Darlington — What to Do When Your Roof Leaks",
    excerpt: "Storm damage or a sudden leak can feel overwhelming. Here's a step-by-step guide on what to do immediately, how to minimise damage to your property, and how to get emergency roofing help in Darlington and surrounding areas fast.",
    date: "2026-03-08",
    readTime: "5 min read",
    category: "Emergency Guide",
    location: "Darlington",
  },
  {
    slug: "choosing-right-roofing-contractor-county-durham",
    title: "How to Choose the Right Roofing Contractor in County Durham",
    excerpt: "Not all roofers are equal. Learn the key questions to ask, what credentials to look for, and red flags to avoid when hiring a roofing contractor in the Darlington and County Durham area. Protect yourself from cowboy builders.",
    date: "2026-03-01",
    readTime: "6 min read",
    category: "Advice",
    location: "County Durham",
  },
  {
    slug: "roof-maintenance-checklist-north-east",
    title: "Seasonal Roof Maintenance Checklist for North East Homeowners",
    excerpt: "The North East's harsh winters and driving rain put roofs under real pressure. This seasonal checklist covers what to inspect in spring, summer, autumn, and winter to keep your roof in top condition and avoid costly emergency repairs.",
    date: "2026-02-22",
    readTime: "5 min read",
    category: "Maintenance",
    location: "North East",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-24 pt-32 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3" data-testid="text-blog-label">
              Roofing Insights
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Roofing Advice & Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Helpful articles about roofing costs, maintenance tips, and expert advice for homeowners in Darlington and County Durham.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <Card
                    className="bg-background border-border/50 h-full cursor-pointer group hover:border-primary/30 transition-colors"
                    data-testid={`card-blog-${article.slug}`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        {article.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {article.location}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need roofing work done? Get a free, no-obligation quote from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8" data-testid="button-blog-quote">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:07753351619">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8" data-testid="button-blog-call">
                  Call 07753 351619
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
