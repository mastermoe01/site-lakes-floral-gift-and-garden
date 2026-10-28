import type { Metadata } from "next";
import { deliveryCities, site, storeLinks } from "@/lib/site";
import PageHero from "@/components/PageHero";
import PhoneLink from "@/components/PhoneLink";
import { BagIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Same-day flower delivery — Forest Lake & Twin Cities",
  description:
    "Same-day flower delivery 7 days a week, 362 days a year from Lakes Floral Gift & Garden in Forest Lake, MN to Hugo, Wyoming, Stillwater, White Bear Lake, Blaine, Minneapolis, St. Paul and the whole Twin Cities metro.",
  alternates: { canonical: "/delivery" },
};

// From the Delivery Policy on lakesfloral.com product pages.
const policy = [
  {
    title: "Timing",
    body: "We are unable to guarantee delivery at a specific time, but we are normally able to deliver within four hours on orders. You may request a time frame in the special instruction box when ordering, and we will do our best to accommodate your request.",
  },
  {
    title: "If no one is home",
    body: "Depending on the delivery location, if the recipient is not available at the time of delivery, the delivery person may leave the gift in a safe place for the recipient to retrieve when they return, such as with a neighbor, or leave a message for the recipient to call to arrange for delivery.",
  },
  {
    title: "Recipient may be contacted",
    body: "In some cases, the florist may contact the recipient to ensure they will be home to accept the delivery.",
  },
  {
    title: "Delivery details",
    body: "Customers are responsible for providing accurate delivery information. If the recipient is unavailable or incorrect information is provided, the arrangement will be returned to our store for customer pick up or further instructions. Re-delivery fees may apply.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      <PageHero kicker="7 days a week · 362 days a year" title="Same-day flower delivery">
        <p>
          We pride ourselves on same-day delivery — not only locally in Forest Lake, but to the greater Twin Cities metro. Pick your delivery date when you add an arrangement to your cart.
        </p>
        <a href={storeLinks.home} className="btn btn-primary mt-6">
          <BagIcon /> Order for delivery
        </a>
      </PageHero>

      <section className="py-16 md:py-24" aria-labelledby="area-title">
        <div className="wrap">
          <h2 id="area-title" className="display text-4xl md:text-5xl">
            Where we deliver
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Plus hospitals, care homes, churches, schools and funeral homes across the metro. Don&rsquo;t see your town? Call <PhoneLink /> — we&rsquo;ll tell you.
          </p>
          <ul className="mt-10 columns-2 gap-8 text-[15.5px] sm:columns-3 lg:columns-5">
            {deliveryCities.map((c) => (
              <li key={c} className="break-inside-avoid py-1">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-linen-deep py-16 md:py-24" aria-labelledby="policy-title">
        <div className="wrap">
          <h2 id="policy-title" className="display text-4xl md:text-5xl">
            Delivery policy
          </h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-2">
            {policy.map((p) => (
              <div key={p.title}>
                <dt className="text-lg font-semibold">{p.title}</dt>
                <dd className="mt-2 text-muted">{p.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-muted">
            Full delivery, substitution and care details are in the{" "}
            <a href={storeLinks.faq} className="link">
              FAQ
            </a>
            . Questions? Call {site.phone.display}.
          </p>
        </div>
      </section>
    </>
  );
}
