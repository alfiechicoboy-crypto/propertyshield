const SITE_URL = "https://propertyshielduk.com";

type SeoEntry = {
  title: string;
  description: string;
  canonicalPath: string;
};

const defaultSeo: SeoEntry = {
  title: "Darlington Roofers | PropertyShield UK Ltd",
  description:
    "Darlington roofers for roof repairs, re-roofing, chimney repairs, flat roofing, fascias, soffits, and guttering across County Durham.",
  canonicalPath: "/",
};

const staticSeo: Record<string, SeoEntry> = {
  "/": defaultSeo,
  "/about": {
    title: "About PropertyShield UK Ltd | Trusted Roofers in Darlington",
    description:
      "Learn about PropertyShield UK Ltd, a trusted Darlington roofing company focused on reliable workmanship, honest quotations, and long-lasting roofing solutions.",
    canonicalPath: "/about",
  },
  "/services": {
    title: "Roofing Services Darlington | PropertyShield UK Ltd",
    description:
      "Explore our roofing services in Darlington: roof repairs, re-roofing, tile and slate replacement, flat roofing, chimney repairs, and more.",
    canonicalPath: "/services",
  },
  "/gallery": {
    title: "Roofing Project Gallery | PropertyShield UK Ltd",
    description:
      "View recent roofing projects completed by PropertyShield UK Ltd across Darlington and surrounding areas.",
    canonicalPath: "/gallery",
  },
  "/reviews": {
    title: "Customer Reviews | PropertyShield UK Ltd",
    description:
      "Read what customers say about PropertyShield UK Ltd roofing and exterior services in Darlington.",
    canonicalPath: "/reviews",
  },
  "/areas": {
    title: "Areas We Cover | Darlington Roofers | PropertyShield UK Ltd",
    description:
      "Based in Darlington, PropertyShield UK Ltd provides roofing services across Darlington and surrounding areas.",
    canonicalPath: "/areas",
  },
  "/contact": {
    title: "Contact PropertyShield UK Ltd | Free Roofing Quotes",
    description:
      "Contact PropertyShield UK Ltd for roofing and exterior cleaning enquiries in Darlington. Request a free quote today.",
    canonicalPath: "/contact",
  },
  "/terms": {
    title: "Terms & Legal Information | PropertyShield UK Ltd",
    description:
      "Read PropertyShield UK Ltd terms, legal information, and service conditions for roofing works in Darlington and surrounding areas.",
    canonicalPath: "/terms",
  },
  "/privacy": {
    title: "Privacy Policy | PropertyShield UK Ltd",
    description:
      "Read the PropertyShield UK Ltd privacy policy covering website enquiries, analytics consent, and personal data handling.",
    canonicalPath: "/privacy",
  },
  "/blog": {
    title: "Roofing Advice & Guides | PropertyShield UK Ltd",
    description:
      "Helpful articles about roofing costs, maintenance tips, and expert advice for homeowners in Darlington and County Durham.",
    canonicalPath: "/blog",
  },
  "/about-us": {
    title: "About PropertyShield UK Ltd | Trusted Roofers in Darlington",
    description:
      "Learn about PropertyShield UK Ltd, a trusted Darlington roofing company focused on reliable workmanship, honest quotations, and long-lasting roofing solutions.",
    canonicalPath: "/about",
  },
  "/portfolio-projects": {
    title: "Roofing Project Gallery | PropertyShield UK Ltd",
    description:
      "View recent roofing projects completed by PropertyShield UK Ltd across Darlington and surrounding areas.",
    canonicalPath: "/gallery",
  },
  "/contact-us": {
    title: "Contact PropertyShield UK Ltd | Free Roofing Quotes",
    description:
      "Contact PropertyShield UK Ltd for roofing and exterior cleaning enquiries in Darlington. Request a free quote today.",
    canonicalPath: "/contact",
  },
  "/faq": {
    title: "Terms & Legal Information | PropertyShield UK Ltd",
    description:
      "Read PropertyShield UK Ltd terms, legal information, and service conditions for roofing works in Darlington and surrounding areas.",
    canonicalPath: "/terms",
  },
  "/legal-notice": {
    title: "Terms & Legal Information | PropertyShield UK Ltd",
    description:
      "Read PropertyShield UK Ltd terms, legal information, and service conditions for roofing works in Darlington and surrounding areas.",
    canonicalPath: "/terms",
  },
  "/contact-us/privacy-policy": {
    title: "Privacy Policy | PropertyShield UK Ltd",
    description:
      "Read the PropertyShield UK Ltd privacy policy covering website enquiries, analytics consent, and personal data handling.",
    canonicalPath: "/privacy",
  },
};

const serviceSeo: Record<string, SeoEntry> = {
  "roof-repairs": {
    title: "Roof Repairs Darlington | PropertyShield UK Ltd",
    description:
      "Darlington roof repair specialists for leaks, storm damage, broken tiles, ridge tiles and urgent roofing repairs across County Durham.",
    canonicalPath: "/services/roof-repairs",
  },
  "re-roofing": {
    title: "Re-Roofing Darlington | PropertyShield UK Ltd",
    description:
      "Complete re-roofing services in Darlington from PropertyShield UK Ltd. Full roof replacements using premium tiles and slate.",
    canonicalPath: "/services/re-roofing",
  },
  "flat-roofing": {
    title: "Flat Roofing Darlington | PropertyShield UK Ltd",
    description:
      "Flat roofing specialists in Darlington. EPDM rubber, GRP fibreglass and felt flat roof installation and repairs.",
    canonicalPath: "/services/flat-roofing",
  },
  "tile-slate-replacement": {
    title: "Tile & Slate Replacement Darlington | PropertyShield UK Ltd",
    description:
      "Tile and slate replacement in Darlington. Matching and replacing cracked, slipped, or broken roof tiles and slates.",
    canonicalPath: "/services/tile-slate-replacement",
  },
  "chimney-repairs": {
    title: "Chimney Repairs Darlington | PropertyShield UK Ltd",
    description:
      "Chimney repair and repointing in Darlington. Lead flashing, chimney stack rebuilds, and cowl installation.",
    canonicalPath: "/services/chimney-repairs",
  },
  "fascias-soffits-guttering": {
    title: "Fascias, Soffits & Guttering Darlington | PropertyShield UK Ltd",
    description:
      "UPVC fascias, soffits, and guttering in Darlington. Roofline replacements and new installations across County Durham.",
    canonicalPath: "/services/fascias-soffits-guttering",
  },
  "roof-cleaning": {
    title: "Roof Cleaning Darlington | PropertyShield UK Ltd",
    description:
      "Professional roof cleaning and moss removal in Darlington. Soft wash roof treatments to extend roof life.",
    canonicalPath: "/services/roof-cleaning",
  },
  "emergency-roofing": {
    title: "Emergency Roofers Darlington | PropertyShield UK Ltd",
    description:
      "24/7 emergency roofers in Darlington for storm damage, major leaks, and urgent roof repairs. Fast response times.",
    canonicalPath: "/services/emergency-roofing",
  },
};

const areaSeo: Record<string, SeoEntry> = {
  darlington: {
    title: "Roofers in Darlington | PropertyShield UK Ltd",
    description:
      "Trusted roofers in Darlington for roof repairs, re-roofing, flat roofing, chimney repairs, and emergency roofing. Free quotes from PropertyShield UK Ltd.",
    canonicalPath: "/areas/darlington",
  },
  "newton-aycliffe": {
    title: "Roofers in Newton Aycliffe | PropertyShield UK Ltd",
    description:
      "Professional roofers in Newton Aycliffe for roof repairs, flat roofing, re-roofing, and emergency callouts. Serving DL5 from nearby Darlington.",
    canonicalPath: "/areas/newton-aycliffe",
  },
  "bishop-auckland": {
    title: "Roofers in Bishop Auckland | PropertyShield UK Ltd",
    description:
      "Experienced roofers in Bishop Auckland for slate repairs, chimney work, re-roofing, and emergency roof repairs. Serving DL14 from Darlington.",
    canonicalPath: "/areas/bishop-auckland",
  },
  "stockton-on-tees": {
    title: "Roofers in Stockton-on-Tees | PropertyShield UK Ltd",
    description:
      "Reliable roofers in Stockton-on-Tees for repairs, flat roofing, re-roofing, and guttering. Covering TS18-TS21 from our Darlington base.",
    canonicalPath: "/areas/stockton-on-tees",
  },
  middlesbrough: {
    title: "Roofers in Middlesbrough | PropertyShield UK Ltd",
    description:
      "Trusted roofers in Middlesbrough for roof repairs, re-roofing, emergency roofing, and roofline services. Covering all TS postcodes.",
    canonicalPath: "/areas/middlesbrough",
  },
  hartlepool: {
    title: "Roofers in Hartlepool | PropertyShield UK Ltd",
    description:
      "Expert roofers in Hartlepool for coastal property roof repairs, re-roofing, flat roofing, and storm damage. Serving TS24-TS27.",
    canonicalPath: "/areas/hartlepool",
  },
  spennymoor: {
    title: "Roofers in Spennymoor | PropertyShield UK Ltd",
    description:
      "Local roofers in Spennymoor for roof repairs, re-roofing, chimney work, and fascias. Serving DL16 and surrounding villages.",
    canonicalPath: "/areas/spennymoor",
  },
  durham: {
    title: "Roofers in Durham | PropertyShield UK Ltd",
    description:
      "Professional roofers in Durham City for slate roof repairs, chimney work, re-roofing, and heritage property maintenance. Serving DH1.",
    canonicalPath: "/areas/durham",
  },
  yarm: {
    title: "Roofers in Yarm | PropertyShield UK Ltd",
    description:
      "Quality roofers in Yarm for roof repairs, re-roofing, chimney repairs, and roofline services. Covering TS15 and Eaglescliffe.",
    canonicalPath: "/areas/yarm",
  },
  northallerton: {
    title: "Roofers in Northallerton | PropertyShield UK Ltd",
    description:
      "Trusted roofers in Northallerton for roof repairs, slate work, chimney repairs, and rural property roofing. Serving DL6 and DL7.",
    canonicalPath: "/areas/northallerton",
  },
  sedgefield: {
    title: "Roofers in Sedgefield | PropertyShield UK Ltd",
    description:
      "Local roofers in Sedgefield for roof repairs, re-roofing, chimney work, and emergency callouts. Serving TS21 and surrounding villages.",
    canonicalPath: "/areas/sedgefield",
  },
  hurworth: {
    title: "Roofers in Hurworth | PropertyShield UK Ltd",
    description:
      "Expert roofers in Hurworth-on-Tees for roof repairs, re-roofing, and maintenance on village properties. Just 3 miles from our Darlington base.",
    canonicalPath: "/areas/hurworth",
  },
  "middleton-st-george": {
    title: "Roofers in Middleton St George | PropertyShield UK Ltd",
    description:
      "Reliable roofers in Middleton St George for roof repairs, re-roofing, and roofline services. 4 miles from our Darlington base.",
    canonicalPath: "/areas/middleton-st-george",
  },
  heighington: {
    title: "Roofers in Heighington | PropertyShield UK Ltd",
    description:
      "Trusted roofers in Heighington village for roof repairs, slate work, chimney maintenance, and re-roofing. Serving DL5 from Darlington.",
    canonicalPath: "/areas/heighington",
  },
  shildon: {
    title: "Roofers in Shildon | PropertyShield UK Ltd",
    description:
      "Affordable roofers in Shildon for roof repairs, re-roofing, flat roofing, and chimney repairs. Serving DL4 from our Darlington base.",
    canonicalPath: "/areas/shildon",
  },
  redcar: {
    title: "Roofers in Redcar | PropertyShield UK Ltd",
    description:
      "Experienced coastal roofers in Redcar for salt-resistant repairs, re-roofing, storm damage, and chimney work. Serving TS10-TS12.",
    canonicalPath: "/areas/redcar",
  },
};

export function getSeoForPath(rawUrl: string): SeoEntry {
  const pathname = rawUrl.split("?")[0].split("#")[0];

  if (staticSeo[pathname]) {
    return staticSeo[pathname];
  }

  const serviceMatch = pathname.match(/^\/services\/([a-z0-9-]+)$/);
  if (serviceMatch && serviceSeo[serviceMatch[1]]) {
    return serviceSeo[serviceMatch[1]];
  }

  const areaMatch = pathname.match(/^\/areas\/([a-z0-9-]+)$/);
  if (areaMatch && areaSeo[areaMatch[1]]) {
    return areaSeo[areaMatch[1]];
  }

  const blogMatch = pathname.match(/^\/blog\/([a-z0-9-]+)$/);
  if (blogMatch) {
    const blogSeoEntries: Record<string, SeoEntry> = {
      "how-much-does-new-roof-cost-darlington": {
        title: "How Much Does a New Roof Cost in Darlington? (2026 Guide) | PropertyShield UK Ltd",
        description: "A full re-roof in Darlington typically costs between £5,000 and £12,000. We break down costs for terraced, semi-detached, and detached homes across County Durham.",
        canonicalPath: "/blog/how-much-does-new-roof-cost-darlington",
      },
      "signs-your-roof-needs-repair": {
        title: "7 Warning Signs Your Roof Needs Repair | PropertyShield UK Ltd",
        description: "From missing slates to damp patches, these seven signs indicate your roof needs professional attention. Catching problems early saves thousands.",
        canonicalPath: "/blog/signs-your-roof-needs-repair",
      },
      "flat-roof-vs-pitched-roof-which-is-right": {
        title: "Flat Roof vs Pitched Roof: Which Is Right? | PropertyShield UK Ltd",
        description: "Compare flat and pitched roofs for North East properties — costs, lifespan, maintenance, and which works best in County Durham's climate.",
        canonicalPath: "/blog/flat-roof-vs-pitched-roof-which-is-right",
      },
      "emergency-roof-repairs-darlington-what-to-do": {
        title: "Emergency Roof Repairs Darlington — What to Do | PropertyShield UK Ltd",
        description: "Step-by-step guide on what to do when your roof leaks. How to minimise damage and get emergency roofing help in Darlington fast.",
        canonicalPath: "/blog/emergency-roof-repairs-darlington-what-to-do",
      },
      "choosing-right-roofing-contractor-county-durham": {
        title: "How to Choose a Roofing Contractor in County Durham | PropertyShield UK Ltd",
        description: "Key questions to ask, credentials to check, and red flags to avoid when hiring a roofing contractor in Darlington and County Durham.",
        canonicalPath: "/blog/choosing-right-roofing-contractor-county-durham",
      },
      "roof-maintenance-checklist-north-east": {
        title: "Seasonal Roof Maintenance Checklist for North East Homeowners | PropertyShield UK Ltd",
        description: "Spring, summer, autumn, and winter roof care tips for North East properties. Prevent costly repairs with this seasonal checklist.",
        canonicalPath: "/blog/roof-maintenance-checklist-north-east",
      },
    };
    if (blogSeoEntries[blogMatch[1]]) {
      return blogSeoEntries[blogMatch[1]];
    }
  }

  return defaultSeo;
}

export function injectSeoIntoHtml(html: string, pathname: string): string {
  const seo = getSeoForPath(pathname);
  const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`
  );

  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );

  return html;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
