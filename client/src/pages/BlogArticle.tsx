import { Link, useParams, Redirect } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "./Blog";

const articleContent: Record<string, string[]> = {
  "how-much-does-new-roof-cost-darlington": [
    "If you're a homeowner in Darlington considering a new roof, understanding the costs involved is essential for budgeting. Roof replacement is one of the most significant investments you'll make in your property, and prices can vary substantially depending on several factors.",
    "A typical terraced house in areas like Haughton, Cockerton, or central Darlington will usually cost between £4,500 and £7,000 for a full re-roof. Semi-detached properties in Mowden, Whinfield, or Hummersknott tend to range from £6,000 to £9,000. Detached homes — common in Hurworth, Middleton St George, and Heighington — can cost between £8,000 and £14,000 depending on roof complexity.",
    "The main cost factors include the size of your roof (measured in square metres), the pitch and complexity (dormers, valleys, and hip ends add cost), your choice of materials (concrete tiles, natural slate, or clay tiles), the condition of the existing roof structure (rotten timbers need replacing), scaffolding requirements, and skip hire for waste removal.",
    "In County Durham, concrete interlocking tiles are the most cost-effective option at around £30-50 per square metre installed. Natural slate — popular on older properties in Darlington town centre and conservation areas — costs £60-90 per square metre. Marley or Redland branded tiles sit in the middle at £40-65 per square metre.",
    "Many Darlington homeowners ask whether they should repair or replace. As a general rule, if repairs would cost more than 30-40% of a full re-roof, or if your roof is over 50 years old with widespread issues, replacement usually offers better value. A new roof typically lasts 50-80 years with proper maintenance.",
    "At PropertyShield UK Ltd, we provide free, no-obligation quotations for all re-roofing work across Darlington and the surrounding area. Every quote includes materials, labour, scaffolding, and waste removal — no hidden extras. Call us on 07753 351619 to arrange your free survey.",
  ],
  "signs-your-roof-needs-repair": [
    "Your roof silently protects your home from everything the British weather throws at it. But when problems develop, catching them early can save you thousands of pounds compared to leaving them until major damage occurs.",
    "The first warning sign is missing, cracked, or slipping tiles or slates. After storms — common across the North East — check your roof from ground level for any obvious gaps or displaced tiles. Even a single missing slate can let in enough water to cause significant damage to timbers and ceilings over time.",
    "Damp patches or water stains on upstairs ceilings are a clear indicator of a roof leak. Don't ignore small marks — they typically indicate a problem that's been developing for weeks or months. The actual entry point on the roof is often some distance from where the damp appears inside.",
    "Sagging or bowing in your roofline is a serious structural warning. This can indicate rotten timbers, failed supports, or excessive weight from accumulated moss and debris. If you notice any sag, get a professional inspection immediately — this is not a DIY situation.",
    "Blocked or damaged guttering might not seem like a roof problem, but overflowing gutters can cause water to back up under tiles, saturate fascia boards, and damage the roof structure from below. Regular gutter clearing is one of the most cost-effective forms of roof maintenance.",
    "Daylight visible through your roof space is an obvious concern. If you can see light coming through the roof boards when you're in the loft, water can get in the same way. Check your loft space on a bright day — any pinpoints of light need investigating.",
    "Rising energy bills can sometimes be traced back to poor roof insulation or gaps where warm air escapes. If your heating costs have increased without an obvious cause, your roof could be the culprit.",
    "Moss and algae growth, while common on North East roofs, can lift tiles and retain moisture if left unchecked. A small amount is normal, but heavy moss growth should be professionally cleaned to prevent damage.",
  ],
  "flat-roof-vs-pitched-roof-which-is-right": [
    "When building an extension, garage, or replacing an existing roof, one of the biggest decisions is whether to go with a flat or pitched design. Both have distinct advantages, and the right choice depends on your property, budget, and intended use.",
    "Flat roofs are typically cheaper to install — a single-storey extension flat roof might cost £2,000-4,000, whereas a pitched roof for the same space could be £4,000-8,000. However, flat roofs traditionally have a shorter lifespan. Modern EPDM rubber and GRP fibreglass systems have changed this significantly, with lifespans of 30-50 years when properly installed.",
    "Pitched roofs excel in the North East climate. The angle naturally sheds rain and snow, reducing the chance of standing water. They also provide loft space for storage or additional insulation. For main house roofs, pitched designs using quality tiles or slates can last 60-80+ years with minimal maintenance.",
    "Flat roofs are ideal for extensions, garages, dormers, and areas where height restrictions apply. They're also excellent for creating usable outdoor space — green roofs and roof terraces are increasingly popular on flat roof extensions across properties in Darlington and surrounding towns.",
    "One common issue with older flat roofs (pre-2000) is that many were built using felt, which degrades over 10-15 years. If you have an older felt flat roof that's ponding water or showing blisters, upgrading to EPDM or GRP is usually more cost-effective than repeated felt repairs.",
    "At PropertyShield UK Ltd, we install and repair both flat and pitched roofs across Darlington and County Durham. We use Firestone EPDM and Topseal GRP for flat roofing, and source quality tiles and slates from leading UK manufacturers for pitched work. Get in touch for a free assessment of your options.",
  ],
  "emergency-roof-repairs-darlington-what-to-do": [
    "A sudden roof leak or storm damage can feel overwhelming, especially outside of normal working hours. Here's what to do if you're facing a roof emergency in Darlington or the surrounding area.",
    "First, protect your belongings. Place buckets or containers under any leaks, move furniture and electronics away from the affected area, and use towels or old sheets to absorb standing water. If water is near electrics, turn off the power to that circuit at your consumer unit — don't take risks.",
    "Next, if it's safe to do so, try to identify where the water is coming in from your loft space. Don't climb onto the roof yourself — it's dangerous, especially in wet or windy conditions. From the loft, you may be able to place a temporary container under the leak point or use a tarp over the affected timbers to redirect water.",
    "Call a professional emergency roofer. At PropertyShield UK Ltd, we provide emergency callout services across Darlington, Newton Aycliffe, Bishop Auckland, Stockton, and surrounding areas. We can usually attend the same day for genuine emergencies — call 07753 351619.",
    "If the damage is from a storm, take photos of the damage for your insurance company before any temporary repairs are made. Most buildings insurance policies cover storm damage to roofs, but you'll need evidence of the damage as it was found.",
    "Common emergency roof situations we deal with include: tiles or slates blown off in high winds, lead flashing lifted or torn away, chimney stack damage, fallen tree branches causing structural damage, and water ingress through failed flat roof membranes.",
    "After the emergency repair, we'll provide a full assessment and quote for any permanent repairs needed. Emergency patches are designed to keep your home watertight until a proper repair can be scheduled — they're not a long-term solution. We'll always be honest about what's needed and what it will cost.",
  ],
  "choosing-right-roofing-contractor-county-durham": [
    "Hiring the wrong roofer can be an expensive and stressful mistake. Unfortunately, the roofing industry attracts its share of unreliable operators. Here's how to protect yourself and find a trustworthy contractor in County Durham.",
    "Always get at least three written quotations. A legitimate roofer will visit your property, inspect the roof, and provide a detailed written quote specifying materials, labour, timescales, and payment terms. Be wary of anyone who quotes over the phone or gives a verbal-only price.",
    "Check for insurance. Any roofer working on your property should have public liability insurance (minimum £2 million) and employer's liability insurance if they have staff. Ask to see certificates and check they're current — don't just take their word for it.",
    "Look for verifiable reviews. Google reviews are the hardest to fake — check for specific, detailed reviews from named customers. Be cautious of roofers with only generic, one-line reviews or reviews that all appeared on the same day. Platforms like Checkatrade and MyBuilder also provide verified reviews from completed jobs.",
    "Ask about guarantees. A reputable roofer should offer workmanship guarantees (typically 5-15 years depending on the work) in addition to manufacturer material warranties. Get the guarantee in writing before work starts.",
    "Beware of red flags: demanding full payment upfront (a reasonable deposit is 10-25%), pressure selling ('this price is only available today'), unmarked vehicles, no business address, and reluctance to provide references or show previous work.",
    "Consider trade body membership. While not essential, membership of organisations like the National Federation of Roofing Contractors (NFRC), Federation of Master Builders, or Competent Roofer scheme provides additional reassurance that the contractor has been vetted.",
    "At PropertyShield UK Ltd, we're fully insured, provide written quotations for every job, and stand behind our work with multi-year guarantees. We're happy to show you examples of completed projects and connect you with previous customers. Honest, transparent, and professional — that's our commitment.",
  ],
  "roof-maintenance-checklist-north-east": [
    "Living in the North East means your roof faces some of the harshest weather conditions in England. Cold winters, driving rain, and occasional heavy snowfall all take their toll. Regular maintenance can extend your roof's lifespan by decades and prevent costly emergency repairs.",
    "In spring, carry out a visual inspection from ground level. Look for any tiles or slates that have slipped, cracked, or gone missing over winter. Check that your ridge tiles are still firmly in place and that no lead flashing has lifted. Spring is the ideal time to schedule any repairs before summer.",
    "Summer is the best time for major roof work if needed. The dry, warmer conditions are ideal for re-roofing, chimney repairs, and flat roof installations. Book ahead — good roofers in Darlington get busy during the summer months.",
    "In autumn, clear your gutters thoroughly. Fallen leaves from nearby trees are the number one cause of blocked gutters across properties in County Durham. Blocked gutters cause water to overflow, potentially damaging fascia boards, soffits, and even the roof structure. Consider fitting gutter guards if your property has overhanging trees.",
    "Before winter, check that your loft insulation is adequate (the recommended depth is 270mm) and that any loft ventilation is clear and working. Good insulation prevents ice dams forming on the roof edge — a common problem in the North East where temperatures regularly drop below freezing.",
    "Year-round, keep an eye on moss growth. While a thin layer of moss is mainly cosmetic, heavy moss growth can lift tiles, block gutters, and retain moisture against your roof surface. Professional roof cleaning every few years prevents this becoming a structural issue.",
    "For flat roofs, check for ponding water after heavy rain. A properly installed flat roof should drain within 48 hours. Persistent ponding accelerates membrane degradation and can cause leaks. If water is pooling, the falls may need adjusting.",
    "PropertyShield UK Ltd offers free roof inspections for homeowners across Darlington and surrounding areas. Regular professional inspections catch small problems before they become expensive emergencies. Call 07753 351619 to book yours.",
  ],
};

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === params.slug);
  const content = params.slug ? articleContent[params.slug] : undefined;

  if (!article || !content) {
    return <Redirect to="/blog" />;
  }

  const relatedArticles = blogArticles
    .filter(a => a.slug !== params.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "PropertyShield UK Ltd",
      "url": "https://propertyshielduk.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PropertyShield UK Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://propertyshielduk.com/logo-full-512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://propertyshielduk.com/blog/${article.slug}`
    }
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="py-24 pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <span className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 cursor-pointer mb-8" data-testid="link-back-blog">
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </span>
            </Link>

            <div className="flex items-center gap-2 mb-4 mt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                {article.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              {article.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {article.location}
                </span>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              {content.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Need roofing work in Darlington?
              </h3>
              <p className="text-muted-foreground mb-6">
                PropertyShield UK Ltd provides free, no-obligation quotes for all roofing work across Darlington and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" data-testid="button-article-quote">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:07753351619">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold" data-testid="button-article-call">
                    <Phone className="w-4 h-4 mr-2" />
                    07753 351619
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            More Roofing Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(a => (
              <Link key={a.slug} href={`/blog/${a.slug}`}>
                <div className="p-5 rounded-xl border border-border/50 bg-background hover:border-primary/30 transition-colors cursor-pointer" data-testid={`card-related-${a.slug}`}>
                  <span className="text-xs font-semibold text-primary">{a.category}</span>
                  <h3 className="text-sm font-bold text-foreground mt-2 leading-snug">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
