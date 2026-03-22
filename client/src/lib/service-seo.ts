export type ServiceSeoEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  bullets: string[];
  why: string;
  metaTitle: string;
  metaDescription: string;
};

export const serviceSeoEntries: Record<string, ServiceSeoEntry> = {
  "roof-repairs": {
    slug: "roof-repairs",
    title: "Roof Repairs in Darlington",
    shortTitle: "Roof Repairs",
    description:
      "Expert fault finding and durable repair solutions to protect your property from water damage.",
    bullets: [
      "Leak detection and isolation",
      "Ridge tile rebedding and repointing",
      "Lead valley repairs",
      "Storm damage repair",
    ],
    why:
      "A small leak can quickly become a major structural issue. We respond fast and fix it right the first time.",
    metaTitle: "Roof Repairs Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Darlington roof repair specialists for leaks, storm damage, broken tiles, ridge tiles and urgent roofing repairs across County Durham.",
  },
  "re-roofing": {
    slug: "re-roofing",
    title: "Re-Roofing Specialists",
    shortTitle: "Re-Roofing",
    description:
      "Complete roof replacements using premium materials, installed to the highest industry standards.",
    bullets: [
      "Full strip and re-tile or slate",
      "Breathable membrane installation",
      "Treated timber battens",
      "Insurance backed guarantees",
    ],
    why:
      "A new roof is a major investment. We ensure yours is built to last for generations, adding significant value to your property.",
    metaTitle: "Re-Roofing Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Complete re-roofing in Darlington with premium materials, breathable membranes, new battens and long-lasting installation standards.",
  },
  "tile-slate-replacement": {
    slug: "tile-slate-replacement",
    title: "Tile and Slate Replacement",
    shortTitle: "Tile and Slate Replacement",
    description:
      "Seamless replacement of broken, slipped, or missing tiles to restore your roof's integrity.",
    bullets: [
      "Colour and profile matching",
      "Slate repairs",
      "Concrete and clay tile replacements",
      "Ridge and hip tile repairs",
    ],
    why:
      "Missing tiles compromise your roof's waterproofing. We source matching materials to ensure an invisible repair.",
    metaTitle: "Tile Replacement Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Broken or slipped tile and slate replacement in Darlington with matching materials to restore waterproofing and roof appearance.",
  },
  "chimney-repairs": {
    slug: "chimney-repairs",
    title: "Chimney Repairs and Repointing",
    shortTitle: "Chimney Repairs",
    description:
      "Comprehensive chimney maintenance to prevent damp ingress and structural failure.",
    bullets: [
      "Brickwork repointing",
      "Lead flashing replacement",
      "Chimney pot securing",
      "Complete chimney rebuilds",
    ],
    why:
      "Chimneys bear the brunt of the weather. Our specialized repairs keep them secure and watertight.",
    metaTitle: "Chimney Repairs Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Chimney repairs in Darlington including repointing, flashing replacement, pot securing and chimney rebuild work.",
  },
  "fascias-soffits-guttering": {
    slug: "fascias-soffits-guttering",
    title: "Fascias, Soffits and Guttering",
    shortTitle: "Fascias, Soffits and Guttering",
    description:
      "High-quality UPVC roofline installations to improve drainage and property aesthetics.",
    bullets: [
      "Full UPVC replacements",
      "Gutter clearing and repairs",
      "Dry verge systems",
      "Cladding installations",
    ],
    why:
      "A failing roofline causes damp walls. Our modern UPVC solutions are maintenance-free and look fantastic.",
    metaTitle: "Fascias and Guttering Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Darlington fascias, soffits and guttering services including new UPVC roofline installations, repairs, and drainage improvements.",
  },
  "flat-roofing": {
    slug: "flat-roofing",
    title: "Flat Roofing Services",
    shortTitle: "Flat Roofing",
    description:
      "Durable, waterproof flat roofing solutions for garages, extensions, and commercial properties.",
    bullets: [
      "EPDM rubber roofing",
      "GRP fibreglass",
      "Traditional felt systems",
      "Flat roof repairs",
    ],
    why:
      "Flat roofs require specialist knowledge. We install seamless systems designed to withstand pooling water.",
    metaTitle: "Flat Roofing Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Flat roofing specialists in Darlington for EPDM, GRP fibreglass, felt systems, repairs, and replacements.",
  },
  "roof-cleaning": {
    slug: "roof-cleaning",
    title: "Roof Cleaning and Moss Removal",
    shortTitle: "Roof Cleaning",
    description:
      "Professional cleaning to remove damaging moss, algae, and lichen without harming your tiles.",
    bullets: [
      "Manual moss scraping",
      "Biocide soft washing",
      "Gutter clearing",
      "Tile protection treatments",
    ],
    why:
      "Moss retains moisture and damages tiles. Our gentle cleaning methods restore your roof safely.",
    metaTitle: "Roof Cleaning Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Roof cleaning and moss removal in Darlington using safe manual and soft-wash methods that protect tiles and improve roof life.",
  },
  "emergency-roofing": {
    slug: "emergency-roofing",
    title: "Emergency Roof Repairs",
    shortTitle: "Emergency Roofing",
    description:
      "Rapid response for critical roof failures, severe leaks, and storm damage across Darlington.",
    bullets: [
      "Temporary weatherproofing",
      "Storm damage assessment",
      "Make-safe repairs",
      "Insurance reports",
    ],
    why:
      "When urgent roof damage hits, you need a team you can trust immediately to make the property safe and limit further damage.",
    metaTitle: "Emergency Roofer Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Emergency roof repairs in Darlington for storm damage, severe leaks, temporary weatherproofing, and urgent make-safe works.",
  },
};