export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  province: string;
  coordinates: [number, number];
  services: string[];
  year: number;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "ubc-campus-transportation",
    title: "UBC Campus Transportation Master Plan",
    client: "University of British Columbia",
    location: "Vancouver, BC",
    province: "BC",
    coordinates: [49.2606, -123.246],
    services: ["transportation-engineering", "sustainable-transportation"],
    year: 2024,
    description:
      "Comprehensive transportation master plan for one of Canada's largest university campuses, integrating transit, cycling, pedestrian, and vehicle access for 65,000+ daily users.",
    challenge:
      "UBC needed to accommodate growing enrollment while reducing single-occupancy vehicle trips by 30% and improving safety for pedestrians and cyclists across the campus.",
    solution:
      "Developed an integrated multi-modal transportation plan using AI-powered demand forecasting, micro-simulation modelling, and extensive stakeholder engagement with students, faculty, and surrounding communities.",
    results: [
      "20% projected reduction in vehicle trips within 5 years",
      "New cycling network connecting all campus zones",
      "Enhanced transit integration with TransLink",
      "Improved pedestrian safety at 15 key intersections",
    ],
    image: "/images/projects/ubc-campus.jpg",
    featured: true,
  },
  {
    slug: "calgary-green-line-lrt",
    title: "Green Line LRT Integration Studies",
    client: "City of Calgary",
    location: "Calgary, AB",
    province: "AB",
    coordinates: [51.0447, -114.0619],
    services: ["transportation-engineering", "design"],
    year: 2024,
    description:
      "Traffic impact and integration studies for Calgary's $5.5 billion Green Line LRT project, ensuring seamless multimodal connections and minimal construction disruption.",
    challenge:
      "Assessing traffic impacts along the 46-km LRT corridor and designing intersection modifications to accommodate both LRT operations and existing traffic patterns.",
    solution:
      "Utilized advanced micro-simulation modelling to test hundreds of signal timing scenarios, developed construction detour plans, and designed transit-oriented development access strategies.",
    results: [
      "Signal timing optimized for LRT priority at 23 intersections",
      "Construction impact reduced by 35% through phased approach",
      "Multimodal access plans for 14 station areas",
      "TIA support for adjacent development applications",
    ],
    image: "/images/projects/calgary-greenline.jpg",
    featured: true,
  },
  {
    slug: "kelowna-active-transportation",
    title: "Kelowna Active Transportation Master Plan",
    client: "City of Kelowna",
    location: "Kelowna, BC",
    province: "BC",
    coordinates: [49.8863, -119.4966],
    services: ["sustainable-transportation", "public-participation"],
    year: 2023,
    description:
      "A city-wide active transportation plan creating a connected network of cycling and pedestrian infrastructure for Kelowna's growing population.",
    challenge:
      "Kelowna needed to transform from a car-dependent city to one that supports safe, comfortable cycling and walking for residents of all ages and abilities.",
    solution:
      "Conducted comprehensive community engagement, analyzed travel patterns using AI-powered demand models, and designed a phased implementation plan prioritizing safety and connectivity.",
    results: [
      "250+ km of planned cycling network",
      "Priority corridor identification using safety data",
      "Community-supported implementation phasing",
      "Integration with transit and trail systems",
    ],
    image: "/images/projects/kelowna-active.jpg",
    featured: true,
  },
  {
    slug: "rogers-place-arena",
    title: "Rogers Place Arena Event Management",
    client: "City of Edmonton",
    location: "Edmonton, AB",
    province: "AB",
    coordinates: [53.5469, -113.4978],
    services: ["transportation-engineering", "safety"],
    year: 2023,
    description:
      "Event transportation management planning for Rogers Place Arena, accommodating up to 18,347 spectators with safe and efficient access.",
    challenge:
      "Managing pedestrian safety and traffic flow for major events while maintaining downtown access and minimizing neighborhood impacts.",
    solution:
      "Developed dynamic event management plans with real-time signal coordination, pedestrian safety zones, and multi-modal access strategies for events of varying sizes.",
    results: [
      "Safe egress plans for 18,000+ attendees",
      "30% improvement in post-event traffic clearance",
      "Integrated transit coordination with Edmonton Transit",
      "Scalable plans for events of varying sizes",
    ],
    image: "/images/projects/rogers-place.jpg",
    featured: false,
  },
  {
    slug: "east-village-redevelopment",
    title: "East Village Urban Redevelopment",
    client: "Calgary Municipal Land Corporation",
    location: "Calgary, AB",
    province: "AB",
    coordinates: [51.0427, -114.0489],
    services: ["transportation-engineering", "parking", "design"],
    year: 2023,
    description:
      "Transportation planning for Calgary's transformative East Village redevelopment, creating a vibrant, walkable urban neighborhood from former industrial land.",
    challenge:
      "Designing a complete transportation network for a new mixed-use neighborhood with 6,000+ residential units while managing construction-phase traffic impacts.",
    solution:
      "Created a comprehensive transportation framework with right-sized parking, complete streets, and multi-modal connections to downtown Calgary and the Bow River pathway system.",
    results: [
      "40% parking reduction through shared strategies",
      "Complete streets design for all neighborhood roads",
      "Pathway integration with Bow River trail system",
      "Phased TIA support for 15+ development applications",
    ],
    image: "/images/projects/east-village.jpg",
    featured: true,
  },
  {
    slug: "sfu-burnaby-mountain",
    title: "SFU Burnaby Mountain Master Plan",
    client: "Simon Fraser University",
    location: "Burnaby, BC",
    province: "BC",
    coordinates: [49.2781, -122.9199],
    services: ["transportation-engineering", "sustainable-transportation", "parking"],
    year: 2022,
    description:
      "Campus transportation master plan for SFU's mountaintop campus, addressing unique topographic and access challenges while promoting sustainable transportation.",
    challenge:
      "SFU's isolated mountaintop location creates unique transportation challenges with limited road access and significant elevation changes affecting cycling and pedestrian travel.",
    solution:
      "Developed an innovative multi-modal strategy leveraging the Burnaby Mountain Gondola project, enhanced bus service, and improved cycling infrastructure with e-bike considerations.",
    results: [
      "Gondola integration planning for campus access",
      "E-bike charging infrastructure recommendations",
      "Parking demand management strategy",
      "Improved wayfinding for all travel modes",
    ],
    image: "/images/projects/sfu-campus.jpg",
    featured: false,
  },
  {
    slug: "victoria-downtown-cycling",
    title: "Victoria Downtown Cycling Network",
    client: "City of Victoria",
    location: "Victoria, BC",
    province: "BC",
    coordinates: [48.4284, -123.3656],
    services: ["sustainable-transportation", "design", "public-participation"],
    year: 2024,
    description:
      "Design and implementation support for Victoria's all-ages-and-abilities cycling network in the downtown core.",
    challenge:
      "Creating protected cycling infrastructure within the constrained right-of-way of Victoria's historic downtown while maintaining parking and loading access for businesses.",
    solution:
      "Developed context-sensitive protected bikeway designs, conducted extensive business and community engagement, and used micro-simulation to optimize signal timing for cycling.",
    results: [
      "8 km of new protected bikeways",
      "Signal priority for cyclists at 12 intersections",
      "Business access plans maintaining loading zones",
      "Community support through innovative engagement",
    ],
    image: "/images/projects/victoria-cycling.jpg",
    featured: false,
  },
  {
    slug: "edmonton-warehouse-district",
    title: "Edmonton Warehouse District Redevelopment",
    client: "Private Developer",
    location: "Edmonton, AB",
    province: "AB",
    coordinates: [53.5402, -113.5001],
    services: ["transportation-engineering", "parking", "design"],
    year: 2024,
    description:
      "Transportation impact assessment and parking strategy for a major mixed-use redevelopment in Edmonton's historic Warehouse District.",
    challenge:
      "Converting heritage warehouse buildings into a vibrant mixed-use development while managing parking demands and integrating with the Valley Line LRT.",
    solution:
      "Provided comprehensive TIA with shared parking analysis, LRT integration planning, and innovative loading strategies for the mixed-use development.",
    results: [
      "35% parking reduction through shared parking",
      "LRT station access improvements",
      "Heritage-sensitive loading zone design",
      "TDM plan achieving 25% mode shift target",
    ],
    image: "/images/projects/edmonton-warehouse.jpg",
    featured: false,
  },
];

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.services.includes(serviceSlug));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
