import { bestSellers, site } from "@/lib/site";

/** Florist (a LocalBusiness subtype) — real data only. aggregateRating is backed by the
 *  captured Google profile (4.9 / 1,089 on 2026-10-28). */
export default function JsonLd() {
  const a = site.address;
  const data = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/logo.png`,
    image: [`${site.url}/opengraph-image.jpg`, `${site.url}/photos/storefront-gable.jpg`],
    telephone: "+1-651-464-2134",
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: a.lat, longitude: a.lng },
    hasMap: site.maps,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    paymentAccepted: "Visa, Mastercard, American Express, Discover, Google Pay, Apple Pay",
    areaServed: [
      { "@type": "City", name: "Forest Lake, MN" },
      { "@type": "Place", name: "Minneapolis–Saint Paul metro area" },
    ],
    sameAs: [...site.socials.map((s) => s.href), site.store],
    makesOffer: bestSellers.map((p) => ({
      "@type": "Offer",
      url: p.href,
      price: p.price,
      priceCurrency: "USD",
      itemOffered: { "@type": "Product", name: p.name },
    })),
    description:
      "Family-owned florist in Forest Lake, Minnesota since 1930, with an onsite greenhouse and gift shop. Same-day flower delivery 7 days a week to Forest Lake and the Twin Cities metro.",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
