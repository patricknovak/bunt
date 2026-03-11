import { offices } from "@/lib/data/offices";

export default function JsonLd() {
  const hq = offices.find((o) => o.isHeadquarters) || offices[0];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bunt & Associates Engineering Ltd.",
    url: "https://www.bunteng.com",
    logo: "https://www.bunteng.com/images/bunt-logo.svg",
    description:
      "Western Canada's leading transportation planning and engineering consulting firm with over 30 years of expertise.",
    foundingDate: "1993",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.address.split(",")[0],
      addressLocality: hq.city,
      addressRegion: hq.province,
      addressCountry: "CA",
    },
    telephone: hq.phone,
    email: "info@bunteng.com",
    sameAs: [
      "https://www.linkedin.com/company/buntandassociates",
      "https://www.instagram.com/buntengineering/",
      "https://bsky.app/profile/bunteng.bsky.social",
    ],
    areaServed: [
      { "@type": "Province", name: "British Columbia" },
      { "@type": "Province", name: "Alberta" },
    ],
    knowsAbout: [
      "Transportation Planning",
      "Traffic Engineering",
      "Road Safety",
      "Parking Planning",
      "Sustainable Transportation",
      "Transportation Design",
      "Public Engagement",
    ],
  };

  const localBusinesses = offices.map((office) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.bunteng.com/#office-${office.city.toLowerCase()}`,
    name: `Bunt & Associates - ${office.city}`,
    telephone: office.phone,
    email: office.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address.split(",")[0],
      addressLocality: office.city,
      addressRegion: office.province,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.coordinates[0],
      longitude: office.coordinates[1],
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Bunt & Associates Engineering Ltd.",
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {localBusinesses.map((biz, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(biz) }}
        />
      ))}
    </>
  );
}
