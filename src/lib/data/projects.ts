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
    slug: "calgary-event-centre",
    title: "Calgary Event Centre",
    client: "Calgary Municipal Land Corporation",
    location: "Calgary, AB",
    province: "AB",
    coordinates: [51.0447, -114.0619],
    services: ["transportation-engineering", "safety"],
    year: 2024,
    description:
      "Transportation planning and safety analysis for Calgary's new event centre, managing access and circulation for major events in the heart of the city.",
    challenge:
      "Designing transportation access and event management strategies for a major urban venue while minimizing impacts on the surrounding community and maintaining downtown connectivity.",
    solution:
      "Developed comprehensive transportation impact assessments, event management plans, and multi-modal access strategies to ensure safe and efficient movement of spectators and residents.",
    results: [
      "Comprehensive event transportation management plan",
      "Multi-modal access strategy for major events",
      "Safety analysis for pedestrian and vehicle circulation",
      "Integration with Calgary Transit services",
    ],
    image: "/images/services/transportation-engineering.png",
    featured: true,
  },
  {
    slug: "rogers-place-arena",
    title: "Rogers Place Arena & Ice District",
    client: "City of Edmonton",
    location: "Edmonton, AB",
    province: "AB",
    coordinates: [53.5469, -113.4978],
    services: ["transportation-engineering", "safety"],
    year: 2023,
    description:
      "Event transportation management planning for Rogers Place Arena and the surrounding Ice District development, accommodating up to 18,347 spectators.",
    challenge:
      "Managing pedestrian safety and traffic flow for major events while maintaining downtown access and minimizing neighborhood impacts in Edmonton's core.",
    solution:
      "Developed dynamic event management plans with real-time signal coordination, pedestrian safety zones, and multi-modal access strategies for events of varying sizes.",
    results: [
      "Safe egress plans for 18,000+ attendees",
      "30% improvement in post-event traffic clearance",
      "Integrated transit coordination with Edmonton Transit",
      "Scalable plans for events of varying sizes",
    ],
    image: "/images/services/safety.png",
    featured: true,
  },
  {
    slug: "sfu-campus-master-plan",
    title: "SFU Campus Master Plan",
    client: "Simon Fraser University",
    location: "Burnaby, BC",
    province: "BC",
    coordinates: [49.2781, -122.9199],
    services: ["transportation-engineering", "sustainable-transportation", "parking"],
    year: 2023,
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
    image: "/images/services/sustainable-planning.png",
    featured: true,
  },
  {
    slug: "ubc-okanagan-master-plan",
    title: "UBC Okanagan Master Plan",
    client: "University of British Columbia",
    location: "Kelowna, BC",
    province: "BC",
    coordinates: [49.9396, -119.3965],
    services: ["transportation-engineering", "sustainable-transportation"],
    year: 2024,
    description:
      "Comprehensive transportation master plan for UBC's Okanagan campus, integrating transit, cycling, pedestrian, and vehicle access for a growing campus community.",
    challenge:
      "UBC Okanagan needed to accommodate rapid campus growth while reducing vehicle dependency and improving safety for pedestrians and cyclists.",
    solution:
      "Developed an integrated multi-modal transportation plan using demand forecasting, micro-simulation modelling, and extensive stakeholder engagement.",
    results: [
      "Projected reduction in single-occupancy vehicle trips",
      "New cycling network connecting all campus zones",
      "Enhanced transit integration",
      "Improved pedestrian safety at key intersections",
    ],
    image: "/images/services/sustainable-planning.png",
    featured: true,
  },
  {
    slug: "east-village-redevelopment",
    title: "East Village Area Redevelopment",
    client: "Calgary Municipal Land Corporation",
    location: "Calgary, AB",
    province: "AB",
    coordinates: [51.0427, -114.0489],
    services: ["transportation-engineering", "parking", "design"],
    year: 2023,
    description:
      "Transportation planning for Calgary's transformative East Village redevelopment, creating a vibrant, walkable urban neighborhood from former industrial land.",
    challenge:
      "Designing a complete transportation network for a new mixed-use neighborhood with thousands of residential units while managing construction-phase traffic impacts.",
    solution:
      "Created a comprehensive transportation framework with right-sized parking, complete streets, and multi-modal connections to downtown Calgary and the Bow River pathway system.",
    results: [
      "40% parking reduction through shared strategies",
      "Complete streets design for all neighborhood roads",
      "Pathway integration with Bow River trail system",
      "Phased TIA support for 15+ development applications",
    ],
    image: "/images/services/parking.png",
    featured: false,
  },
  {
    slug: "senakw-master-plan",
    title: "Senakw Master Plan",
    client: "Westbank/Nch'kay Corp",
    location: "Vancouver, BC",
    province: "BC",
    coordinates: [49.2727, -123.1367],
    services: ["transportation-engineering"],
    year: 2024,
    description:
      "Transportation engineering for the Senakw development on the Squamish Nation reserve lands near the Burrard Bridge, one of the largest developments in Vancouver.",
    challenge:
      "Developing transportation solutions for a high-density development on First Nations land with constrained access points and proximity to a major bridge.",
    solution:
      "Provided comprehensive transportation impact assessment and access planning, integrating with transit and active transportation networks.",
    results: [
      "Transportation impact assessment for major development",
      "Multi-modal access strategy",
      "Transit integration planning",
      "Pedestrian and cycling connectivity",
    ],
    image: "/images/services/transportation-engineering.png",
    featured: false,
  },
  {
    slug: "island-corridor-atp",
    title: "Island Corridor Active & Alternative Transportation Study",
    client: "Snaw-Naw-As Nanoose First Nation",
    location: "Vancouver Island, BC",
    province: "BC",
    coordinates: [49.2345, -124.1876],
    services: ["sustainable-transportation"],
    year: 2024,
    description:
      "Active and alternative transportation study for the Island Corridor, working with the Snaw-Naw-As Nanoose First Nation to improve connectivity and mobility options.",
    challenge:
      "Creating equitable, culturally sensitive transportation solutions for Indigenous communities along the Island Corridor with limited existing infrastructure.",
    solution:
      "Developed a community-driven active transportation plan through meaningful engagement with First Nation communities and stakeholders.",
    results: [
      "Community-driven active transportation plan",
      "Culturally sensitive engagement process",
      "Improved connectivity for First Nations communities",
      "Sustainable transportation alternatives identified",
    ],
    image: "/images/services/sustainable-planning.png",
    featured: false,
  },
  {
    slug: "peace-river-atp",
    title: "Peace River Active Transportation Plan",
    client: "Town of Peace River",
    location: "Peace River, AB",
    province: "AB",
    coordinates: [56.2370, -117.2930],
    services: ["sustainable-transportation", "public-participation"],
    year: 2023,
    description:
      "Active transportation master plan for the Town of Peace River, creating a connected network of cycling and pedestrian infrastructure in northern Alberta.",
    challenge:
      "Developing an active transportation network for a northern community with seasonal climate challenges and dispersed land use patterns.",
    solution:
      "Conducted comprehensive community engagement and designed a phased implementation plan suitable for northern Alberta conditions.",
    results: [
      "Connected active transportation network plan",
      "Climate-appropriate design solutions",
      "Community-supported implementation phasing",
      "Integration with existing trail systems",
    ],
    image: "/images/services/design.png",
    featured: false,
  },
  {
    slug: "fernie-atp",
    title: "Active Transportation Master Plan - Fernie",
    client: "City of Fernie",
    location: "Fernie, BC",
    province: "BC",
    coordinates: [49.5040, -115.0631],
    services: ["sustainable-transportation", "public-participation"],
    year: 2023,
    description:
      "Active transportation master plan for the mountain community of Fernie, balancing tourism, recreation, and daily transportation needs.",
    challenge:
      "Creating an active transportation network that serves both residents and visitors in a compact mountain community with terrain challenges.",
    solution:
      "Designed a connected network leveraging Fernie's compact urban form, integrating trails and on-street facilities for year-round use.",
    results: [
      "Comprehensive cycling and pedestrian network",
      "Tourism and recreation integration",
      "Year-round active transportation solutions",
      "Strong community engagement and support",
    ],
    image: "/images/services/sustainable-planning.png",
    featured: false,
  },
  {
    slug: "coquitlam-bicycle-parking",
    title: "Coquitlam Bicycle Parking Design Guidelines",
    client: "City of Coquitlam",
    location: "Coquitlam, BC",
    province: "BC",
    coordinates: [49.2838, -122.7932],
    services: ["sustainable-transportation", "parking"],
    year: 2024,
    description:
      "Development of comprehensive bicycle parking design guidelines for the City of Coquitlam to support growing cycling ridership.",
    challenge:
      "Creating practical, enforceable bicycle parking standards that accommodate diverse building types and encourage cycling as a primary mode of transportation.",
    solution:
      "Developed detailed design guidelines based on best practices, including specifications for short-term and long-term bicycle parking across all land uses.",
    results: [
      "Comprehensive bicycle parking design guidelines",
      "Standards for all land use categories",
      "Implementation framework for development approvals",
      "Support for cycling mode share growth",
    ],
    image: "/images/services/parking.png",
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
