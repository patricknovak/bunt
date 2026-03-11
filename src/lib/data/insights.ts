export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string[];
}

export const posts: InsightPost[] = [
  {
    slug: "ai-traffic-analysis-future",
    title: "How AI is Transforming Traffic Analysis: A Practitioner's Perspective",
    excerpt:
      "AI-powered tools are revolutionizing how we analyze traffic patterns and predict future conditions. Here's what it means for transportation planning.",
    date: "2026-03-01",
    category: "AI & Technology",
    readTime: "5 min read",
    author: "Christephen Cheng",
    content: [
      "Artificial intelligence is fundamentally changing how transportation engineers approach traffic analysis. At Bunt & Associates, we've been at the forefront of integrating AI into our practice, and the results have been remarkable.",
      "Traditional traffic analysis relies on manual data collection, static models, and time-consuming calculations. AI-powered tools can process vast amounts of data in real-time, identify patterns that humans might miss, and generate forecasts with greater accuracy.",
      "## Key Applications of AI in Traffic Analysis",
      "**Predictive Traffic Modelling** — Machine learning algorithms can analyze historical traffic data alongside variables like weather, events, and land use changes to predict future traffic conditions with significantly higher accuracy than traditional growth factor methods.",
      "**Automated Data Collection** — Computer vision and sensor fusion technologies enable continuous, automated collection of traffic counts, turning movements, pedestrian volumes, and vehicle classifications. This eliminates the cost and limitations of manual counting programs.",
      "**Signal Timing Optimization** — AI can evaluate millions of signal timing combinations to identify optimal plans that minimize delay and maximize throughput. Our AI tools can generate preliminary signal timing recommendations in seconds rather than hours.",
      "**Safety Pattern Recognition** — Machine learning excels at identifying crash patterns and contributing factors across large datasets. This enables proactive safety interventions before serious incidents occur.",
      "## What This Means for Our Clients",
      "For our clients, AI integration means faster project turnaround times, more accurate analysis, and better-informed decision-making. A parking demand analysis that previously took days can now provide preliminary results in minutes. A traffic impact assessment can quickly evaluate dozens of mitigation scenarios.",
      "However, AI doesn't replace professional engineering judgment — it augments it. Our engineers use AI tools as a starting point, then apply their expertise in local conditions, regulatory requirements, and stakeholder needs to develop final recommendations.",
      "## Try It Yourself",
      "We've made several of our AI-powered analysis tools available on our website. From traffic simulation to parking demand forecasting, these tools demonstrate the potential of AI in transportation planning. Try them at our AI Tools page and experience the future of transportation analysis.",
    ],
  },
  {
    slug: "complete-streets-design-guide",
    title: "Complete Streets Design: Balancing All Road Users",
    excerpt:
      "A practical guide to designing streets that work for pedestrians, cyclists, transit users, and drivers — based on our project experience across Western Canada.",
    date: "2026-02-15",
    category: "Design",
    readTime: "7 min read",
    author: "Yulia Liem",
    content: [
      "Complete Streets is more than a design philosophy — it's a practical approach to creating transportation infrastructure that serves everyone. At Bunt & Associates, we've applied complete streets principles on dozens of projects across British Columbia and Alberta.",
      "## What Makes a Street 'Complete'?",
      "A complete street is designed to enable safe access for all users, regardless of age, ability, or how they choose to travel. This includes pedestrians, cyclists, transit riders, and motorists. The specific design elements vary based on context — a complete street in downtown Vancouver looks very different from one in rural Kelowna.",
      "## Key Design Principles",
      "**Context Sensitivity** — The surrounding land use, traffic volumes, and community character should drive design decisions. A commercial main street requires different treatments than a residential collector.",
      "**Protected Facilities** — Separated cycling infrastructure and wide sidewalks with buffer zones are essential in high-traffic environments. Our designs typically include protected bike lanes on arterials with volumes over 5,000 vehicles per day.",
      "**Universal Accessibility** — All designs must accommodate people of all ages and abilities. This means accessible pedestrian signals, curb ramps that meet current standards, tactile walking surface indicators, and adequate crossing times.",
      "**Transit Integration** — Bus stops and transit facilities should be integrated into the street design, not treated as afterthoughts. We design bus bulbs, shelters, and accessible boarding areas as core elements.",
      "## Lessons from Our Projects",
      "From Victoria's downtown cycling network to Calgary's East Village redevelopment, we've learned that community engagement is essential to complete streets success. Early and meaningful engagement with businesses, residents, and advocacy groups builds support and identifies concerns before they become obstacles.",
      "We've also found that phased implementation is more effective than trying to transform an entire corridor at once. Quick-build projects using temporary materials allow communities to experience the benefits before committing to permanent infrastructure.",
      "## The Business Case",
      "Research consistently shows that complete streets improvements increase property values, boost retail activity, and reduce collision rates. Our analysis of several completed projects shows a 15-25% reduction in serious injuries on redesigned corridors.",
    ],
  },
  {
    slug: "parking-right-sizing-strategies",
    title: "Right-Sizing Parking: Reducing Oversupply Without Underserving",
    excerpt:
      "How modern parking analysis techniques and shared parking strategies can reduce parking requirements by 20-40% while meeting actual demand.",
    date: "2026-02-01",
    category: "Parking",
    readTime: "6 min read",
    author: "Jason Dunn",
    content: [
      "Parking oversupply is one of the most persistent problems in urban development. Studies consistently show that many developments provide 20-40% more parking than peak demand requires. This excess supply increases construction costs, reduces developable area, and undermines sustainable transportation goals.",
      "## The Problem with Traditional Parking Standards",
      "Most municipal parking bylaws are based on suburban ITE rates from decades ago. These rates assume near-universal car ownership and limited transit access. In urban and transit-oriented contexts, they dramatically overestimate actual parking demand.",
      "## Modern Right-Sizing Approaches",
      "**Observed Demand Studies** — Surveying actual parking utilization at comparable developments provides the most reliable demand estimates. We conduct occupancy surveys across multiple days and times to capture peak demand patterns.",
      "**Transit Adjustment Factors** — Developments near rapid transit consistently show 15-30% lower parking demand than suburban equivalents. Our analysis adjusts ITE base rates based on transit proximity and service frequency.",
      "**Shared Parking Analysis** — Mixed-use developments can share parking between uses with complementary peak periods. A residential-commercial development might reduce total supply by 20-30% through shared parking, since residents park overnight while retail customers park during the day.",
      "**TDM Integration** — Transportation Demand Management measures like subsidized transit passes, car-share memberships, and cycling facilities can reduce parking demand by an additional 10-20%. We incorporate TDM effectiveness into our supply recommendations.",
      "## Case Study: East Village Calgary",
      "For the East Village redevelopment in Calgary, our shared parking analysis demonstrated that a 40% reduction from bylaw requirements would still meet projected peak demand. This saved the developer millions in underground parking construction costs while supporting the neighborhood's walkable, transit-oriented vision.",
      "## The EV Factor",
      "Electric vehicle adoption is changing parking design requirements. While the number of spaces may decrease, the need for EV charging infrastructure is growing rapidly. We recommend EV-ready conduit in at least 50% of spaces for new developments, with active charging in 10-20% of spaces.",
      "## Try Our AI Tool",
      "Our Parking Demand Analyzer uses ITE rates with intelligent context adjustments to provide preliminary demand estimates. Try it on our AI Tools page to see how right-sizing could work for your project.",
    ],
  },
  {
    slug: "vision-zero-implementation",
    title: "Implementing Vision Zero: Lessons from Canadian Cities",
    excerpt:
      "Examining the successes and challenges of Vision Zero programs across Canada, with practical recommendations for municipalities.",
    date: "2026-01-15",
    category: "Safety",
    readTime: "8 min read",
    author: "Glen Pardoe",
    content: [
      "Vision Zero — the goal of eliminating all traffic fatalities and severe injuries — has been adopted by numerous Canadian municipalities. While the aspiration is universal, the path to implementation varies significantly between communities.",
      "## The Canadian Context",
      "Canada's Vision Zero efforts have shown mixed results. Some cities have seen meaningful reductions in severe collisions, while others have struggled to translate policy commitments into infrastructure changes. The difference often comes down to funding, political will, and a systematic approach to identifying and addressing high-risk locations.",
      "## What Works: Evidence-Based Countermeasures",
      "**Speed Management** — Reducing vehicle speeds is the single most effective intervention. Research shows that a pedestrian struck at 50 km/h has a 45% chance of dying, compared to just 5% at 30 km/h. Effective speed management combines design elements (narrower lanes, raised crossings) with enforcement and posted speed reductions.",
      "**Protected Intersections** — Intersections account for approximately 60% of severe pedestrian and cyclist collisions. Protected intersection designs that separate turning vehicles from vulnerable road users have shown collision reductions of 50-75%.",
      "**Systematic Safety Analysis** — Rather than waiting for collisions to occur, systemic analysis identifies locations with risk factors associated with severe outcomes. This proactive approach targets infrastructure improvements where they'll have the greatest impact.",
      "**Road Safety Audits** — Independent safety audits identify hazards in both existing and proposed road designs. At Bunt & Associates, we conduct road safety audits following FHWA and TAC guidelines, providing actionable recommendations prioritized by severity and feasibility.",
      "## Common Challenges",
      "The most common barrier to Vision Zero implementation is the tension between traffic throughput and safety. Measures like speed reductions and protected intersections sometimes conflict with level-of-service targets. Our experience suggests that reframing 'level of service' to include safety metrics — not just vehicle delay — helps municipalities make better decisions.",
      "## Recommendations for Municipalities",
      "Based on our safety planning work across Western Canada, we recommend: starting with quick-build interventions at the highest-risk locations, investing in systemic safety analysis rather than reactive improvements, and engaging communities early in the process. Vision Zero is a long-term commitment that requires sustained investment and political support.",
    ],
  },
  {
    slug: "transit-oriented-development-tips",
    title: "Making TOD Work: Transportation Planning for Transit-Oriented Development",
    excerpt:
      "Key transportation planning considerations for successful transit-oriented development, from TIA methodology to parking strategies.",
    date: "2026-01-01",
    category: "Planning",
    readTime: "6 min read",
    author: "Daniel Fung",
    content: [
      "Transit-oriented development (TOD) promises higher-density, mixed-use communities centered around high-quality transit. But making TOD work requires transportation planning that's fundamentally different from conventional suburban development.",
      "## Rethinking the TIA",
      "Traditional Traffic Impact Assessments assume that most trips are made by car. For TOD, this dramatically overestimates vehicle trip generation and parking demand. Our approach adjusts ITE base rates using local mode split data, transit ridership projections, and TDM commitments to provide more realistic trip generation estimates.",
      "## Parking Strategy is Critical",
      "Parking is often the make-or-break factor for TOD. Too much parking undermines the transit-oriented vision and adds enormous construction costs. Too little creates overflow issues and community opposition. Our approach uses observed demand data from comparable TOD projects, shared parking analysis, and phased supply strategies.",
      "## Multi-Modal Access Planning",
      "Successful TOD requires excellent pedestrian and cycling connections to the transit station. This means protected cycling facilities, wide sidewalks, wayfinding, and secure bicycle parking. We design access plans that prioritize the 'last mile' connection — the journey between a person's origin/destination and the transit stop.",
      "## Managing Construction Impacts",
      "TOD projects near active transit stations face unique construction challenges. We develop traffic accommodation strategies that maintain transit access throughout construction, including temporary bus stops, pedestrian detour routes, and phased construction plans.",
      "## The Calgary and Vancouver Experience",
      "In Calgary, TOD around CTrain stations has demonstrated that developments near rapid transit can successfully operate with 40-50% less parking than suburban equivalents. In Vancouver, the integration of land use and transportation planning around SkyTrain stations continues to evolve with each new project.",
      "## Key Takeaways",
      "The most successful TOD projects are those where transportation planning is integrated from the earliest design stages — not applied as an afterthought. Engaging with transit agencies, municipalities, and communities early ensures that the transportation network supports the development vision.",
    ],
  },
  {
    slug: "micro-simulation-best-practices",
    title: "Micro-Simulation Modelling: When, Why, and How",
    excerpt:
      "A guide to when micro-simulation modelling adds value over traditional HCM analysis, and best practices for effective modelling.",
    date: "2025-12-15",
    category: "Engineering",
    readTime: "7 min read",
    author: "Stuart Thornley",
    content: [
      "Micro-simulation modelling has become an increasingly common tool in transportation engineering, but it's not always the right approach. Understanding when micro-simulation adds value — and when simpler methods suffice — is essential for effective practice.",
      "## When to Use Micro-Simulation",
      "Micro-simulation is most valuable when: intersection or corridor operations involve complex interactions that HCM methods don't capture well, queue spillback between adjacent intersections affects operations, unusual geometries or traffic control make standard analysis unreliable, or stakeholders need visual communication of traffic impacts.",
      "## When HCM Analysis Suffices",
      "For isolated intersections with standard geometries and control types, HCM analysis typically provides reliable results more quickly and at lower cost. Don't assume that micro-simulation is always better — it's a tool, not a default.",
      "## Calibration is Everything",
      "The single most important factor in micro-simulation quality is calibration. An uncalibrated model can produce results that look impressive but bear little relationship to reality. Our calibration process includes: matching observed volumes within 5%, replicating measured travel times within 15%, validating queue lengths against field observations, and sensitivity testing of key parameters.",
      "## Common Pitfalls",
      "**Over-Reliance on Default Parameters** — Every micro-simulation tool ships with default driver behavior parameters calibrated to specific conditions. Using defaults for Canadian conditions, particularly winter driving, can produce unreliable results.",
      "**Insufficient Warm-Up Period** — Simulation results from the first 10-15 minutes are typically unreliable as the network fills with vehicles. We use warm-up periods of at least 15 minutes and exclude this period from analysis.",
      "**Single-Run Analysis** — Micro-simulation includes stochastic elements, meaning results vary between runs. We conduct a minimum of 10 runs with different random seeds and report average performance with confidence intervals.",
      "**Ignoring Pedestrians** — Many models focus exclusively on vehicle operations. In urban environments, pedestrian signal timing and crossing patterns significantly affect intersection capacity. We model pedestrian demand explicitly.",
      "## Software Selection",
      "We use multiple micro-simulation platforms including Vissim, Synchro/SimTraffic, and Paramics, selecting the most appropriate tool for each project. The choice depends on the analysis scope, required outputs, and client/agency preferences.",
      "## The AI Connection",
      "Our AI-powered traffic simulation tool provides quick, preliminary analysis that can help determine whether full micro-simulation modelling is warranted for a project. Try it on our AI Tools page to see AI-assisted traffic analysis in action.",
    ],
  },
];

export function getPostBySlug(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}
