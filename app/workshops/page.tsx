import type { Metadata } from "next";
import Image from "next/image";
import { site, storeLinks, workshop } from "@/lib/site";
import PageHero from "@/components/PageHero";
import WorkshopDates from "@/components/WorkshopDates";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "DIY workshops & events",
  description:
    "Winter DIY Container nights in the heated Lakes Floral greenhouse, Forest Lake MN — $75 per person, November 14, 18 and 19. Private spruce-pot parties for friends and co-workers.",
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        kicker="DIY classes & events"
        title="Workshops in the greenhouse"
        image="/photos/greenhouse-event-night.jpg"
        alt="A DIY evening under string lights in the heated Lakes Floral greenhouse"
      >
        <p>Seasonal DIY nights in our heated greenhouse — come together, learn something new and take home something beautiful.</p>
      </PageHero>

      <section className="py-16 md:py-24" aria-labelledby="winter-title">
        <div className="wrap grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="kicker text-xl">Now booking</p>
            <h2 id="winter-title" className="display mt-2 text-4xl md:text-6xl">
              {workshop.title}
            </h2>
            <p className="display mt-4 text-3xl text-cedar">${workshop.price} per person</p>
            <div className="prose-lf mt-6 max-w-xl text-lg">
              <p>{workshop.description}</p>
              <p className="text-muted">{workshop.refreshments}</p>
            </div>
            <div className="mt-10">
              <h3 className="label text-muted">Pick your night</h3>
              <div className="mt-4">
                <WorkshopDates tone="light" />
              </div>
              <p className="mt-4 text-sm text-muted">Seats are booked on lakesfloral.com. {workshop.checkoutNote}</p>
            </div>
          </div>
          <div className="relative aspect-[2/3] overflow-hidden rounded-2xl">
            <Image
              src="/photos/winter-diy-flyer.jpg"
              alt="Winter DIY Container Events flyer: Saturday November 14 10:30 AM, Wednesday November 18 6:00 PM, Thursday November 19 6:00 PM, $75 per person"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-spruce py-16 text-linen md:py-24" aria-labelledby="private-title">
        <div className="wrap grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="kicker text-xl !text-sage">Friends · family · coworkers</p>
            <h2 id="private-title" className="display mt-2 text-4xl md:text-5xl">
              Private events available
            </h2>
            <p className="mt-5 text-lg text-linen/80">{workshop.private}</p>
            <p className="mt-4 text-lg text-linen/80">
              We host events in our greenhouse year-round, too — DIY events for each season, birthday parties, graduation parties, even weddings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phone.tel}`} className="btn btn-light">
                Call {site.phone.display}
              </a>
              <a href={storeLinks.contact} className="btn btn-outline-light">
                Send us a message
              </a>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image src="/photos/staff-greenhouse.jpg" alt="The Lakes Floral team in the greenhouse" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap max-w-3xl text-center">
          <p className="text-lg text-muted">
            Want first word on the next workshop? Join the{" "}
            <a href={site.vipUrl} className="link">
              Lakes Floral V.I.P. list
            </a>{" "}
            for class and event notices and a special offer on your birthday — or call <PhoneLink />.
          </p>
        </div>
      </section>
    </>
  );
}
