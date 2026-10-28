import Image from "next/image";
import { site } from "@/lib/site";
import PhoneLink from "./PhoneLink";
import { PinIcon } from "./Icons";

/** Address, hours, phone and directions beside the storefront photo. */
export default function VisitBlock({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const a = site.address;
  const H = headingLevel === 1 ? "h1" : "h2";
  return (
    <section className="py-20 md:py-28" aria-labelledby="visit-title">
      <div className="wrap grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:order-2">
          <Image
            src="/photos/staff-storefront.jpg"
            alt="The Lakes Floral team under the string lights at the greenhouse entrance"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="kicker text-xl">Better yet, see us in person</p>
          <H id="visit-title" className="display mt-2 text-4xl md:text-6xl">
            508 Lake Street South
          </H>
          <p className="mt-3 text-lg text-muted">
            {a.city}, {a.region} {a.zip}
          </p>

          <dl className="mt-8 max-w-sm divide-y divide-line border-y border-line">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between py-3">
                <dt>{h.days}</dt>
                <dd className="tabular-nums text-muted">
                  {h.open} – {h.close}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.maps} target="_blank" rel="noopener" className="btn btn-primary">
              <PinIcon /> Get directions
            </a>
            <PhoneLink icon className="btn btn-ghost" />
          </div>
        </div>
      </div>
    </section>
  );
}
