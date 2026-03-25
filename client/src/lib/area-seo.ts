export type AreaSeoEntry = {
  slug: string;
  name: string;
  county: string;
  distance: string;
  postcodes: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localInfo: string;
  servicesIntro: string;
  whyUs: string;
  nearbyAreas: string[];
};

export const areaSeoEntries: Record<string, AreaSeoEntry> = {
  darlington: {
    slug: "darlington",
    name: "Darlington",
    county: "County Durham",
    distance: "Based here",
    postcodes: "DL1, DL2, DL3",
    h1: "Roofers in Darlington",
    metaTitle: "Roofers in Darlington | PropertyShield UK Ltd",
    metaDescription:
      "Trusted roofers in Darlington for roof repairs, re-roofing, flat roofing, chimney repairs, and emergency roofing. Free quotes from PropertyShield UK Ltd.",
    intro:
      "PropertyShield UK Ltd is based in Darlington and provides professional roofing services to homeowners and commercial clients across the town and surrounding villages. From Victorian terraces in the town centre to modern estates in Mowden, Haughton, and Cockerton, we understand the roofing challenges that Darlington properties face.",
    localInfo:
      "Darlington has a wide mix of property types, from traditional stone and slate roofs on period homes near the town centre to concrete tile roofs on post-war housing estates. The exposed position in the Tees Valley means roofs take a beating from North Sea winds and heavy rainfall, making regular maintenance essential. We work across all Darlington postcodes including DL1, DL2, and DL3, covering areas such as Mowden, Haughton Le Skerne, Cockerton, Eastbourne, Harrowgate Hill, and Whinfield.",
    servicesIntro:
      "Whether you need a quick repair to stop a leak or a complete re-roof, our Darlington team can help. We offer same-day emergency callouts for storm damage and urgent leaks.",
    whyUs:
      "As a Darlington-based company, we can respond faster than competitors travelling from outside the area. No call-out charges within Darlington, and we carry common replacement tiles on our van for rapid repairs.",
    nearbyAreas: [
      "newton-aycliffe",
      "middleton-st-george",
      "hurworth",
      "heighington",
      "stockton-on-tees",
    ],
  },
  "newton-aycliffe": {
    slug: "newton-aycliffe",
    name: "Newton Aycliffe",
    county: "County Durham",
    distance: "8 miles from Darlington",
    postcodes: "DL5",
    h1: "Roofers in Newton Aycliffe",
    metaTitle: "Roofers in Newton Aycliffe | PropertyShield UK Ltd",
    metaDescription:
      "Professional roofers in Newton Aycliffe for roof repairs, flat roofing, re-roofing, and emergency callouts. Serving DL5 from nearby Darlington.",
    intro:
      "PropertyShield UK Ltd provides a full range of roofing services to Newton Aycliffe, just 8 miles from our Darlington base. We regularly work on properties throughout Aycliffe's residential estates, from the original new town housing to newer developments on the town's outskirts.",
    localInfo:
      "Newton Aycliffe was built as a new town in the 1940s, meaning many properties have concrete tile roofs that are now reaching the end of their lifespan. Common issues include cracked concrete tiles, failing flat roofs on garages and extensions, and deteriorating fascias and soffits. The town's open position also means chimneys and ridge tiles can take significant wind damage during storms.",
    servicesIntro:
      "We provide all roofing services in Newton Aycliffe including full re-roofs for ageing new town properties, flat roof replacements, and UPVC roofline upgrades. Our proximity means we can usually arrange a same-day assessment.",
    whyUs:
      "Many Newton Aycliffe properties share similar construction, so we carry the most common replacement tiles and materials. Our Darlington base means we can reach any DL5 address within 15 minutes.",
    nearbyAreas: [
      "darlington",
      "shildon",
      "bishop-auckland",
      "sedgefield",
      "spennymoor",
    ],
  },
  "bishop-auckland": {
    slug: "bishop-auckland",
    name: "Bishop Auckland",
    county: "County Durham",
    distance: "12 miles from Darlington",
    postcodes: "DL14",
    h1: "Roofers in Bishop Auckland",
    metaTitle: "Roofers in Bishop Auckland | PropertyShield UK Ltd",
    metaDescription:
      "Experienced roofers in Bishop Auckland for slate repairs, chimney work, re-roofing, and emergency roof repairs. Serving DL14 from Darlington.",
    intro:
      "PropertyShield UK Ltd serves Bishop Auckland and the surrounding Wear Valley area with professional roofing services. Bishop Auckland has a rich architectural heritage, from grand Georgian properties around the Market Place to stone-built terraces and former mining village cottages in the outlying areas.",
    localInfo:
      "Many Bishop Auckland properties feature traditional natural slate roofs and stone chimney stacks that require specialist knowledge to repair properly. The town sits at a higher elevation than Darlington, which means greater exposure to wind-driven rain and snow. We frequently repair storm damage, replace weathered slate, and repoint chimneys across the DL14 postcode area.",
    servicesIntro:
      "Our Bishop Auckland services include natural slate repairs, chimney rebuilds and repointing, lead flashing replacement, and complete re-roofs. We also provide flat roofing solutions for extensions and garages using modern EPDM and GRP systems.",
    whyUs:
      "We have extensive experience working with the natural slate and stone construction common in Bishop Auckland and Wear Valley properties. We source matching materials to maintain the character of your property.",
    nearbyAreas: [
      "shildon",
      "spennymoor",
      "newton-aycliffe",
      "darlington",
      "durham",
    ],
  },
  "stockton-on-tees": {
    slug: "stockton-on-tees",
    name: "Stockton-on-Tees",
    county: "County Durham",
    distance: "11 miles from Darlington",
    postcodes: "TS18, TS19, TS20, TS21",
    h1: "Roofers in Stockton-on-Tees",
    metaTitle: "Roofers in Stockton-on-Tees | PropertyShield UK Ltd",
    metaDescription:
      "Reliable roofers in Stockton-on-Tees for repairs, flat roofing, re-roofing, and guttering. Covering TS18-TS21 from our Darlington base.",
    intro:
      "PropertyShield UK Ltd provides roofing services across Stockton-on-Tees and the wider Teesside area. From the traditional terraces near the High Street to the modern housing estates in Ingleby Barwick, Thornaby, and Billingham, we cover all types of roofing work.",
    localInfo:
      "Stockton has one of the most varied housing stocks on Teesside, with everything from Victorian terraces to 1960s flat-roof estates and brand-new builds. The proximity to the Tees estuary brings additional challenges from salt-laden air, which accelerates corrosion of metal flashings and fixings. We commonly replace lead flashings, repair flat roofs, and install new UPVC rooflines across the Stockton area.",
    servicesIntro:
      "We provide all roofing services in Stockton including roof repairs, full re-roofs, flat roofing, chimney work, and fascias and guttering. We also offer emergency callouts for storm damage and severe leaks.",
    whyUs:
      "We understand the specific roofing challenges that Teesside properties face. Our Darlington base puts us within easy reach of all Stockton postcodes, and we provide free, no-obligation quotations.",
    nearbyAreas: [
      "darlington",
      "middlesbrough",
      "yarm",
      "hartlepool",
      "sedgefield",
    ],
  },
  middlesbrough: {
    slug: "middlesbrough",
    name: "Middlesbrough",
    county: "North Yorkshire",
    distance: "16 miles from Darlington",
    postcodes: "TS1, TS3, TS4, TS5, TS6, TS7, TS8",
    h1: "Roofers in Middlesbrough",
    metaTitle: "Roofers in Middlesbrough | PropertyShield UK Ltd",
    metaDescription:
      "Trusted roofers in Middlesbrough for roof repairs, re-roofing, emergency roofing, and roofline services. Covering all TS postcodes.",
    intro:
      "PropertyShield UK Ltd provides roofing services throughout Middlesbrough, from Linthorpe and Acklam to Marton, Nunthorpe, and Hemlington. As Teesside's largest town, Middlesbrough has a huge variety of property types, and we have experience working on all of them.",
    localInfo:
      "Middlesbrough's housing ranges from Victorian terraces with natural slate roofs to inter-war semis and large post-war council estates with concrete tiles. The town's industrial heritage means some properties in older areas can have roofing that has been affected by decades of atmospheric pollution. We frequently carry out full re-roofs, slate repairs, and chimney maintenance across all Middlesbrough postcodes.",
    servicesIntro:
      "Our Middlesbrough services include emergency roof repairs, complete re-roofs, flat roofing for garages and extensions, chimney repointing, and full roofline replacements with UPVC fascias, soffits, and guttering.",
    whyUs:
      "We serve Middlesbrough regularly and understand the common roofing issues found across Teesside properties. All work comes with our multi-year workmanship guarantee, and we carry full public liability insurance.",
    nearbyAreas: [
      "stockton-on-tees",
      "redcar",
      "yarm",
      "darlington",
      "hartlepool",
    ],
  },
  hartlepool: {
    slug: "hartlepool",
    name: "Hartlepool",
    county: "County Durham",
    distance: "22 miles from Darlington",
    postcodes: "TS24, TS25, TS26, TS27",
    h1: "Roofers in Hartlepool",
    metaTitle: "Roofers in Hartlepool | PropertyShield UK Ltd",
    metaDescription:
      "Expert roofers in Hartlepool for coastal property roof repairs, re-roofing, flat roofing, and storm damage. Serving TS24-TS27.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Hartlepool and the surrounding coastal communities. Coastal properties face unique roofing challenges, and our team has the experience to deliver lasting solutions that withstand the harsh North Sea conditions.",
    localInfo:
      "Hartlepool's exposed coastal position means roofs endure salt spray, high winds, and driving rain that can accelerate wear significantly faster than inland properties. We commonly see corroded lead flashings, lifted tiles from wind exposure, and deteriorating mortar on chimney stacks. Properties in the Headland area, with their traditional slate roofs, require specialist repair techniques, while the newer estates around Hartlepool Marina and Seaton Carew benefit from modern roofing solutions.",
    servicesIntro:
      "We offer storm damage repairs, complete re-roofs with wind-rated fixings, lead and zinc flashing work suited to coastal environments, flat roofing using marine-grade materials, and chimney repairs designed to withstand North Sea weather.",
    whyUs:
      "We use marine-grade fixings and salt-resistant materials on coastal properties. Our workmanship guarantees cover weather-related performance, giving you peace of mind against Hartlepool's challenging climate.",
    nearbyAreas: [
      "stockton-on-tees",
      "middlesbrough",
      "sedgefield",
      "darlington",
      "durham",
    ],
  },
  spennymoor: {
    slug: "spennymoor",
    name: "Spennymoor",
    county: "County Durham",
    distance: "14 miles from Darlington",
    postcodes: "DL16",
    h1: "Roofers in Spennymoor",
    metaTitle: "Roofers in Spennymoor | PropertyShield UK Ltd",
    metaDescription:
      "Local roofers in Spennymoor for roof repairs, re-roofing, chimney work, and fascias. Serving DL16 and surrounding villages.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Spennymoor and surrounding villages including Ferryhill, Tudhoe, and Kirk Merrington. This area of south Durham has a mix of traditional stone-built properties and more modern housing that each require different roofing approaches.",
    localInfo:
      "Many Spennymoor properties date from the mining era, with stone walls and natural slate roofs that need specialist maintenance. Common issues include slate slippage, degraded mortar on ridge tiles, and chimneys weakened by years of exposure. The newer estates on the edges of town typically have concrete interlocking tiles which can crack and allow water ingress over time.",
    servicesIntro:
      "We provide roof repairs, re-roofing, chimney repointing and rebuilding, fascia and gutter replacements, and flat roofing solutions across Spennymoor and the DL16 postcode area.",
    whyUs:
      "Our knowledge of south Durham properties means we can quickly identify issues and source the right materials. We carry common slate and tile types on our van for rapid repairs.",
    nearbyAreas: [
      "bishop-auckland",
      "durham",
      "newton-aycliffe",
      "sedgefield",
      "shildon",
    ],
  },
  durham: {
    slug: "durham",
    name: "Durham",
    county: "County Durham",
    distance: "18 miles from Darlington",
    postcodes: "DH1",
    h1: "Roofers in Durham",
    metaTitle: "Roofers in Durham | PropertyShield UK Ltd",
    metaDescription:
      "Professional roofers in Durham City for slate roof repairs, chimney work, re-roofing, and heritage property maintenance. Serving DH1.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Durham City and the surrounding area. Durham's stunning architecture, from medieval buildings near the Cathedral to Georgian townhouses and Victorian terraces, demands careful roofing work that respects the character of each property.",
    localInfo:
      "Durham City has many properties within conservation areas where careful material selection is essential. Natural slate, stone ridge tiles, and traditional lead flashing work are common requirements. The River Wear valley creates a damp microclimate that can accelerate moss growth on north-facing roof slopes, making regular maintenance important for preserving roof lifespan.",
    servicesIntro:
      "Our Durham services include natural slate repairs, lead flashing work, chimney repointing, moss removal, and full re-roofs using materials sympathetic to the local architectural character. We also handle modern roofing requirements for newer developments around the city.",
    whyUs:
      "We have experience working with heritage materials and understand the requirements of properties in conservation areas. All work is carried out to preserve architectural character while ensuring lasting weather protection.",
    nearbyAreas: [
      "spennymoor",
      "bishop-auckland",
      "newton-aycliffe",
      "darlington",
      "sedgefield",
    ],
  },
  yarm: {
    slug: "yarm",
    name: "Yarm",
    county: "North Yorkshire",
    distance: "10 miles from Darlington",
    postcodes: "TS15",
    h1: "Roofers in Yarm",
    metaTitle: "Roofers in Yarm | PropertyShield UK Ltd",
    metaDescription:
      "Quality roofers in Yarm for roof repairs, re-roofing, chimney repairs, and roofline services. Covering TS15 and Eaglescliffe.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Yarm, Eaglescliffe, and the surrounding Leven Valley area. Yarm's attractive cobbled High Street and desirable residential areas feature a mix of period properties and modern homes that we regularly work on.",
    localInfo:
      "Yarm has many period properties with traditional slate roofs, some dating back to the Georgian era. The town's position along the River Tees means properties can experience increased dampness, making good roof maintenance critical. We work across Yarm, Eaglescliffe, and Egglescliffe, handling everything from slate repairs on the High Street to re-roofs on the modern estates around Urlay Nook and Green Lane.",
    servicesIntro:
      "We provide slate and tile repairs, chimney maintenance, flat roofing, UPVC fascias and guttering, and complete re-roofing solutions across Yarm and the TS15 postcode area.",
    whyUs:
      "Our Darlington base puts us just 10 miles from Yarm, allowing fast response times. We have extensive experience with the period properties and material types common in this area.",
    nearbyAreas: [
      "darlington",
      "stockton-on-tees",
      "middlesbrough",
      "northallerton",
      "sedgefield",
    ],
  },
  northallerton: {
    slug: "northallerton",
    name: "Northallerton",
    county: "North Yorkshire",
    distance: "16 miles from Darlington",
    postcodes: "DL6, DL7",
    h1: "Roofers in Northallerton",
    metaTitle: "Roofers in Northallerton | PropertyShield UK Ltd",
    metaDescription:
      "Trusted roofers in Northallerton for roof repairs, slate work, chimney repairs, and rural property roofing. Serving DL6 and DL7.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Northallerton and the surrounding North Yorkshire countryside. As the county town of North Yorkshire, Northallerton has a blend of historic market town architecture and modern residential developments that we regularly service.",
    localInfo:
      "Northallerton and the surrounding rural area have many properties with natural stone slate or clay pantile roofs typical of the North Yorkshire tradition. Farm buildings and rural properties often have unique roofing requirements including larger roof spans and limited access. The exposed position on the Vale of Mowbray means roofs must withstand significant wind loading, particularly on the western side of town.",
    servicesIntro:
      "We provide stone slate and tile repairs, chimney maintenance, flat roofing for farm buildings and extensions, full re-roofs, and emergency storm damage repairs across Northallerton and surrounding villages.",
    whyUs:
      "We understand the roofing traditions of North Yorkshire properties and source appropriate materials to maintain architectural character. Our 16-mile distance from Darlington means quick response times for the Northallerton area.",
    nearbyAreas: [
      "darlington",
      "yarm",
      "middlesbrough",
      "bishop-auckland",
      "stockton-on-tees",
    ],
  },
  sedgefield: {
    slug: "sedgefield",
    name: "Sedgefield",
    county: "County Durham",
    distance: "10 miles from Darlington",
    postcodes: "TS21",
    h1: "Roofers in Sedgefield",
    metaTitle: "Roofers in Sedgefield | PropertyShield UK Ltd",
    metaDescription:
      "Local roofers in Sedgefield for roof repairs, re-roofing, chimney work, and emergency callouts. Serving TS21 and surrounding villages.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Sedgefield and the surrounding villages. This attractive village and former constituency is known for its character properties and traditional architecture that we have extensive experience maintaining.",
    localInfo:
      "Sedgefield village has many period properties with stone and natural slate roofs, while the surrounding villages and hamlets feature a mix of agricultural and residential buildings with varied roofing requirements. Common issues include slate wear from weather exposure, chimney deterioration, and flat roof failures on additions built in the 1970s and 1980s.",
    servicesIntro:
      "We provide roof repairs, natural slate work, chimney repointing, flat roof replacements, and full re-roofs across Sedgefield and the TS21 postcode area. Emergency callouts are available for storm damage.",
    whyUs:
      "Our proximity to Sedgefield means fast response times and no inflated travel charges. We keep common repair materials on our van for efficient same-visit fixes.",
    nearbyAreas: [
      "newton-aycliffe",
      "stockton-on-tees",
      "darlington",
      "hartlepool",
      "spennymoor",
    ],
  },
  hurworth: {
    slug: "hurworth",
    name: "Hurworth-on-Tees",
    county: "County Durham",
    distance: "3 miles from Darlington",
    postcodes: "DL2",
    h1: "Roofers in Hurworth-on-Tees",
    metaTitle: "Roofers in Hurworth | PropertyShield UK Ltd",
    metaDescription:
      "Expert roofers in Hurworth-on-Tees for roof repairs, re-roofing, and maintenance on village properties. Just 3 miles from our Darlington base.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Hurworth-on-Tees and neighbouring Hurworth Place, just 3 miles from our Darlington base. This desirable village on the banks of the River Tees features attractive period properties and higher-value homes that deserve quality roofing work.",
    localInfo:
      "Hurworth has a mix of traditional stone cottages with natural slate roofs, larger detached homes with clay or concrete tiles, and modern developments. The village's riverside location means increased humidity levels that can accelerate moss growth and timber degradation in poorly ventilated roof spaces. Many properties in Hurworth are substantial family homes where maintaining the roof is essential to preserving property value.",
    servicesIntro:
      "We provide slate and tile repairs, chimney maintenance, moss removal and roof cleaning, flat roofing, fascias and guttering, and complete re-roofs. Our proximity means we can usually inspect the same day you call.",
    whyUs:
      "Just 3 miles from our base, Hurworth is one of our closest service areas. We can respond within minutes for emergencies and carry out regular maintenance visits with minimal scheduling overhead.",
    nearbyAreas: [
      "darlington",
      "middleton-st-george",
      "yarm",
      "stockton-on-tees",
      "newton-aycliffe",
    ],
  },
  "middleton-st-george": {
    slug: "middleton-st-george",
    name: "Middleton St George",
    county: "County Durham",
    distance: "4 miles from Darlington",
    postcodes: "DL2",
    h1: "Roofers in Middleton St George",
    metaTitle: "Roofers in Middleton St George | PropertyShield UK Ltd",
    metaDescription:
      "Reliable roofers in Middleton St George for roof repairs, re-roofing, and roofline services. 4 miles from our Darlington base.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Middleton St George, Oak Tree, and the surrounding area near Teesside International Airport. This growing village just 4 miles east of Darlington has seen significant new development alongside its traditional village core.",
    localInfo:
      "Middleton St George has a mix of traditional village properties with slate and tile roofs and newer housing developments. The village's position between Darlington and Yarm means it benefits from good infrastructure but also experiences the weather patterns of the Tees Valley lowlands. Common roofing issues include flat roof failures on 1970s extensions, deteriorating ridge mortar, and gutter blockages from surrounding mature trees.",
    servicesIntro:
      "We provide all roofing services in Middleton St George including repairs, re-roofing, flat roofing, fascias and guttering, chimney work, and emergency callouts for storm damage or leaks.",
    whyUs:
      "At just 4 miles from our base, Middleton St George is one of our fastest-response areas. No call-out charges and we can often provide same-day assessments.",
    nearbyAreas: [
      "darlington",
      "hurworth",
      "yarm",
      "stockton-on-tees",
      "newton-aycliffe",
    ],
  },
  heighington: {
    slug: "heighington",
    name: "Heighington",
    county: "County Durham",
    distance: "5 miles from Darlington",
    postcodes: "DL5",
    h1: "Roofers in Heighington",
    metaTitle: "Roofers in Heighington | PropertyShield UK Ltd",
    metaDescription:
      "Trusted roofers in Heighington village for roof repairs, slate work, chimney maintenance, and re-roofing. Serving DL5 from Darlington.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Heighington and the neighbouring village of Redworth, just 5 miles from our Darlington base. This historic village with its picturesque green and traditional properties requires careful roofing work that maintains its rural character.",
    localInfo:
      "Heighington is one of County Durham's most attractive villages, with many stone-built properties featuring natural slate roofs, stone chimney stacks, and traditional detailing. The exposed position on higher ground north-west of Darlington means properties experience stronger winds than the town itself. Maintaining slate integrity, chimney pointing, and lead flashings is especially important in this location.",
    servicesIntro:
      "We provide natural slate repairs, chimney repointing and rebuilding, lead flashing replacement, moss removal, fascia and gutter maintenance, and full re-roofs using materials appropriate to the village character.",
    whyUs:
      "Our experience with traditional village properties means we understand the importance of using the right materials. We source natural slate and stone to match existing roofing, preserving the appearance of your property.",
    nearbyAreas: [
      "darlington",
      "newton-aycliffe",
      "shildon",
      "bishop-auckland",
      "spennymoor",
    ],
  },
  shildon: {
    slug: "shildon",
    name: "Shildon",
    county: "County Durham",
    distance: "10 miles from Darlington",
    postcodes: "DL4",
    h1: "Roofers in Shildon",
    metaTitle: "Roofers in Shildon | PropertyShield UK Ltd",
    metaDescription:
      "Affordable roofers in Shildon for roof repairs, re-roofing, flat roofing, and chimney repairs. Serving DL4 from our Darlington base.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Shildon and the surrounding area. This historic railway town has a strong community and a housing stock that ranges from traditional terraced properties to more modern developments, all of which we have experience working on.",
    localInfo:
      "Shildon's housing stock largely comprises terraced and semi-detached properties built during the town's railway heyday, many with Welsh slate roofs and brick chimney stacks. Common issues include slate slippage, chimney deterioration, and failing flat roofs on rear kitchen extensions. The town's elevated position means exposure to stronger winds than the Tees Valley floor.",
    servicesIntro:
      "We offer roof repairs, full re-roofs, slate and tile work, chimney repairs, flat roofing, and UPVC fascias and guttering throughout Shildon and the DL4 postcode area.",
    whyUs:
      "We provide honest, competitive pricing and treat every property with the same care regardless of size. Our proximity to Shildon means no inflated travel costs and fast response times.",
    nearbyAreas: [
      "bishop-auckland",
      "newton-aycliffe",
      "darlington",
      "spennymoor",
      "heighington",
    ],
  },
  redcar: {
    slug: "redcar",
    name: "Redcar",
    county: "North Yorkshire",
    distance: "25 miles from Darlington",
    postcodes: "TS10, TS11, TS12",
    h1: "Roofers in Redcar",
    metaTitle: "Roofers in Redcar | PropertyShield UK Ltd",
    metaDescription:
      "Experienced coastal roofers in Redcar for salt-resistant repairs, re-roofing, storm damage, and chimney work. Serving TS10-TS12.",
    intro:
      "PropertyShield UK Ltd provides roofing services to Redcar, Marske-by-the-Sea, and Saltburn-by-the-Sea along the Cleveland coast. Coastal properties demand specialist roofing solutions, and our team understands the unique challenges that North Sea exposure brings.",
    localInfo:
      "Redcar's coastal position subjects roofs to salt spray, sand abrasion, and some of the highest wind speeds in the North East. Standard fixings corrode faster, mortar degrades more quickly, and tiles can be lifted by coastal gusts. We frequently replace rusted fixings with stainless steel alternatives, repoint chimneys with salt-resistant mortar, and install wind-rated tile fixings across the Redcar and Cleveland coast.",
    servicesIntro:
      "Our Redcar services include storm damage repairs, complete re-roofs with marine-grade fixings, salt-resistant chimney repointing, flat roofing designed for coastal exposure, and emergency weatherproofing after storm events.",
    whyUs:
      "We use stainless steel fixings, salt-resistant mortars, and marine-grade materials on all coastal properties. Our storm damage response covers the entire Cleveland coast and we carry emergency materials for rapid make-safe work.",
    nearbyAreas: [
      "middlesbrough",
      "stockton-on-tees",
      "hartlepool",
      "yarm",
      "darlington",
    ],
  },
};
