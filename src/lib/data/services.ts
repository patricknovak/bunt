export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  features: string[];
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "transportation-engineering",
    title: "Transportation Engineering",
    shortTitle: "Engineering",
    description:
      "Comprehensive transportation engineering services including impact assessments, demand forecasting, micro-simulation modelling, and corridor analysis. Our team delivers data-driven solutions for complex urban and rural transportation challenges.",
    icon: "Route",
    color: "#0f4c75",
    image: "/images/services/transportation-engineering.png",
    features: [
      "Transportation Impact Assessments",
      "Studies and Master Plans",
      "Transportation Demand Forecasting",
      "Traffic and Pedestrian Micro-Simulation Modelling",
      "Corridor Analysis",
      "Signal Timing Plan Development",
      "Traffic/Active Modes/Parking Data Collection and Analysis",
      "Noise Abatement Studies",
      "Expert Witness Testimony",
    ],
    highlights: [
      "AI-powered traffic prediction with 90%+ accuracy",
      "Real-time micro-simulation visualization",
      "Data-driven signal optimization",
    ],
  },
  {
    slug: "sustainable-transportation",
    title: "Sustainable Transportation Planning",
    shortTitle: "Sustainable",
    description:
      "Forward-thinking sustainable transportation solutions that prioritize active transportation, transit integration, and multimodal networks. We help communities build transportation systems that are equitable, accessible, and environmentally responsible.",
    icon: "Bike",
    color: "#1b998b",
    image: "/images/services/sustainable-planning.png",
    features: [
      "Active and Multimodal Transportation Plans",
      "Cycling Facility Planning and Design",
      "Travel Demand Management Plans",
      "Transit-Oriented Development Planning",
      "Complete Streets Design",
      "Accessibility and Universal Design",
    ],
    highlights: [
      "Complete streets methodology",
      "Mode shift analysis and forecasting",
      "Climate-responsive planning",
    ],
  },
  {
    slug: "safety",
    title: "Safety",
    shortTitle: "Safety",
    description:
      "Evidence-based safety analysis and planning services that protect all road users. From comprehensive road safety audits to traffic calming strategies, we apply proven methodologies to identify risks and implement effective countermeasures.",
    icon: "Shield",
    color: "#e8630a",
    image: "/images/services/safety.png",
    features: [
      "Road Safety Audits and Reviews",
      "Railway Crossing Safety Audits and Reviews",
      "Traffic Accommodation Strategies",
      "Traffic Calming Plans",
      "Event Management Plans",
      "Construction Detour Planning",
      "Digital Advertising Display Road Safety Analysis",
    ],
    highlights: [
      "AI-assisted safety risk screening",
      "Vision Zero planning expertise",
      "Systemic safety analysis",
    ],
  },
  {
    slug: "parking",
    title: "Parking",
    shortTitle: "Parking",
    description:
      "Strategic parking planning that balances supply with demand. Our data-driven approach helps clients right-size parking, reduce costs, and support sustainable transportation goals through innovative parking management strategies.",
    icon: "ParkingCircle",
    color: "#3282b8",
    image: "/images/services/parking.png",
    features: [
      "Right-sizing Supply Analysis",
      "Parking Demand Forecasting",
      "Parking Layout Planning",
      "Parking Master Planning",
      "Shared Parking Analysis",
      "Municipal Bylaw Reviews",
    ],
    highlights: [
      "AI-powered demand forecasting",
      "Shared parking optimization",
      "EV infrastructure planning",
    ],
  },
  {
    slug: "design",
    title: "Design",
    shortTitle: "Design",
    description:
      "Creative and technically excellent transportation design services, from conceptual road layouts to detailed intersection designs. We bring engineering precision and innovative thinking to every design challenge.",
    icon: "PenTool",
    color: "#6c5ce7",
    image: "/images/services/design.png",
    features: [
      "Conceptual and Functional Road/Intersection Design",
      "Transit Facility Planning and Design",
      "Vehicle Swept Path Analysis",
      "Traffic Control Plans",
      "Pavement Marking Plans",
      "Geometric Design",
    ],
    highlights: [
      "3D visualization and modelling",
      "Context-sensitive design approach",
      "Multi-modal integration",
    ],
  },
  {
    slug: "public-participation",
    title: "Public Participation",
    shortTitle: "Engagement",
    description:
      "Meaningful community engagement that builds consensus and supports better outcomes. We design and facilitate inclusive participation processes that amplify diverse voices and foster informed decision-making.",
    icon: "Users",
    color: "#00b894",
    image: "/images/services/design.png",
    features: [
      "Council/Committee/Public Meeting Presentations",
      "Stakeholder and Public Surveys",
      "Online Engagement Platforms",
      "Indigenous Community Engagement",
      "Workshop Facilitation",
      "Visual Communication and Infographics",
    ],
    highlights: [
      "Digital engagement platforms",
      "Inclusive participation design",
      "Real-time feedback analysis",
    ],
  },
];
