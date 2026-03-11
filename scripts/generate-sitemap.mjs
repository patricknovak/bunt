// Run after build: node scripts/generate-sitemap.mjs
import { writeFileSync } from "fs";

const BASE_URL = "https://patricknovak.github.io/bunt";

const staticPages = [
  "",
  "/about",
  "/people",
  "/services",
  "/services/transportation-engineering",
  "/services/sustainable-transportation",
  "/services/safety",
  "/services/parking",
  "/services/design",
  "/services/public-participation",
  "/projects",
  "/projects/calgary-event-centre",
  "/projects/rogers-place-arena",
  "/projects/sfu-campus-master-plan",
  "/projects/ubc-okanagan-master-plan",
  "/projects/east-village-redevelopment",
  "/projects/senakw-master-plan",
  "/projects/island-corridor-atp",
  "/projects/peace-river-atp",
  "/projects/fernie-atp",
  "/projects/coquitlam-bicycle-parking",
  "/ai-tools",
  "/ai-tools/traffic-simulator",
  "/ai-tools/parking-analyzer",
  "/ai-tools/safety-audit",
  "/ai-tools/trip-generator",
  "/ai-tools/report-assistant",
  "/insights",
  "/insights/ai-traffic-analysis-future",
  "/insights/complete-streets-design-guide",
  "/insights/parking-right-sizing-strategies",
  "/insights/vision-zero-implementation",
  "/insights/transit-oriented-development-tips",
  "/insights/micro-simulation-best-practices",
  "/careers",
  "/contact",
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : page.split("/").length <= 2 ? "0.8" : "0.6"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("out/sitemap.xml", xml);
console.log(`Sitemap generated with ${staticPages.length} URLs`);
