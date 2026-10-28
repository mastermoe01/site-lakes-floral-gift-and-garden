import Image from "next/image";
import Link from "next/link";
import { bestSellers, moments, pricesCapturedAt, site, storeLinks, workshop } from "@/lib/site";
import HeroCanvas from "@/components/three/HeroCanvas";
import RatingBadge from "@/components/RatingBadge";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import PhotoStrip from "@/components/PhotoStrip";
import Timeline from "@/components/Timeline";
import WorkshopDates from "@/components/WorkshopDates";
import VideoSlot from "@/components/VideoSlot";
import VisitBlock from "@/components/VisitBlock";
import { ArrowIcon, BagIcon, PhoneIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero — the promise, then the proof directly under it, then the two errands. */}
      <section className="paper relative overflow-hidden">
        <div className="wrap grid min-h-[calc(100svh-112px)] items-center gap-6 pb-14 pt-10 md:grid-cols-[1.3fr_1fr] md:pb-20 md:pt-6">
          <div className="relative z-10">
            <p className="label text-muted">508 Lake Street South · Forest Lake, MN</p>
            <h1 className="display mt-5 text-[3.1rem] sm:text-7xl lg:text-[5.4rem]">
              Forest Lake&rsquo;s florist <span className="kicker !text-cedar">since 1930.</span>
              <br />
              <span className="lg:whitespace-nowrap">Same-day delivery.</span>
            </h1>
            <div className="mt-6">
              <RatingBadge />
            </div>
            <p className="mt-6 max-w-md text-lg text-muted">
              Designed by hand in our shop and delivered 7 days a week — across Forest Lake and the greater Twin Cities metro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={storeLinks.home} className="btn btn-primary">
                <BagIcon /> Order flowers
              </a>
              <a href={`tel:${site.phone.tel}`} className="btn btn-ghost" aria-label={`Call ${site.phone.display}`}>
                <PhoneIcon /> {site.phone.display}
              </a>
            </div>
          </div>
          <div className="relative -mx-5 aspect-square md:mx-0 md:aspect-[5/6]">
            <HeroCanvas />
          </div>
        </div>
      </section>

      {/* Send flowers for… */}
      <section className="py-20 md:py-28" aria-labelledby="moments-title">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="kicker text-xl">Order online, delivered today</p>
              <h2 id="moments-title" className="display mt-2 text-4xl md:text-6xl">
                Send flowers for…
              </h2>
            </div>
            <a href={storeLinks.occasions} className="link text-[15px]">
              Every occasion
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {moments.map((m, i) => (
              <Reveal as="li" key={m.title} delay={(i % 3) * 0.06}>
                <a href={m.href} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-white md:aspect-[5/4]">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-settle)] group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-spruce/85 via-spruce/20 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-linen md:p-6">
                    <span className="display block text-2xl md:text-4xl">{m.title}</span>
                    <span className="mt-1 hidden text-sm text-linen/80 sm:block">{m.note}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Best sellers */}
      <section className="border-t border-line py-20 md:py-28" aria-labelledby="best-title">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="kicker text-xl">Most ordered</p>
              <h2 id="best-title" className="display mt-2 text-4xl md:text-6xl">
                Best sellers
              </h2>
            </div>
            <Link href="/shop" className="link text-[15px]">
              Browse the full shop
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {bestSellers.map((p, i) => (
              <Reveal as="li" key={p.href} delay={(i % 4) * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">Prices as listed on lakesfloral.com, {pricesCapturedAt}. Checkout, delivery date and card message are handled there.</p>
        </div>
      </section>

      <PhotoStrip />

      {/* Workshops */}
      <section className="mt-16 bg-spruce py-20 text-linen md:mt-24 md:py-28" aria-labelledby="diy-title">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/photos/greenhouse-event-night.jpg"
              alt="Guests building containers at a DIY night in the heated Lakes Floral greenhouse"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-left"
            />
          </Reveal>
          <div>
            <p className="kicker text-xl !text-sage">A night out you take home</p>
            <h2 id="diy-title" className="display mt-2 text-4xl md:text-6xl">
              {workshop.title}
            </h2>
            <p className="mt-5 text-lg text-linen/80">
              Create your own winter container in our heated greenhouse — demonstration and step-by-step instruction, a 12&Prime; outdoor container, spruce tips and seasonal accents.
              ${workshop.price} per person.
            </p>
            <div className="mt-8">
              <WorkshopDates />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/workshops" className="btn btn-light">
                Workshop details <ArrowIcon />
              </Link>
              <a href={storeLinks.events} className="btn btn-outline-light">
                All events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Greenhouse & gift shop */}
      <section className="py-20 md:py-28" aria-labelledby="greenhouse-title">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="kicker text-xl">Open March through December</p>
            <h2 id="greenhouse-title" className="display mt-2 text-4xl md:text-6xl">
              A greenhouse, a gift shop, a destination.
            </h2>
            <p className="mt-5 text-lg text-muted">
              Hand-selected outdoor plants and décor for every season, a gift shop with something for anyone and all occasions — and Silo Apparel, a clothing boutique for women, men and children, right inside.
            </p>
            <Link href="/greenhouse" className="btn btn-ghost mt-8">
              Inside the greenhouse <ArrowIcon />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image src="/photos/gift-shop.jpg" alt="The Lakes Floral gift shop: hanging plants, home décor and gifts" fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
            </Reveal>
            <Reveal className="relative aspect-square overflow-hidden rounded-2xl" delay={0.06}>
              <Image src="/photos/european-garden.jpg" alt="A European garden planted in-house in a ceramic container" fill sizes="(max-width: 768px) 50vw, 27vw" className="object-cover" />
            </Reveal>
            <Reveal className="relative aspect-square overflow-hidden rounded-2xl" delay={0.12}>
              <Image src="/photos/storefront-urn.jpg" alt="Seasonal planters at the Lakes Floral entrance" fill sizes="(max-width: 768px) 50vw, 27vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <VideoSlot slug="508-lake-st-s" fallbackPoster="/photos/storefront-gable.jpg" />

      <Reviews limit={6} />

      {/* Since 1930 */}
      <section className="py-20 md:py-28" aria-labelledby="story-title">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="kicker text-xl">Rooted locally</p>
            <h2 id="story-title" className="display mt-2 text-4xl md:text-6xl">
              Delivering smiles since 1930.
            </h2>
            <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl">
              <Image src="/photos/roberts-family.jpg" alt="The Roberts family, owners of Lakes Floral Gift & Garden" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
            </div>
            <Link href="/about" className="link mt-6 inline-block">
              Our story
            </Link>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Same-day delivery */}
      <section className="bg-sage/60 py-20 md:py-24" aria-labelledby="delivery-title">
        <div className="wrap grid gap-10 md:grid-cols-3 md:items-end">
          <div className="md:col-span-2">
            <p className="kicker text-xl">Same day, 7 days a week, 362 days a year</p>
            <h2 id="delivery-title" className="display mt-2 text-4xl md:text-6xl">
              Forest Lake to the whole Twin Cities metro.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              From Forest Lake, Hugo and Wyoming to Minneapolis, St. Paul and Woodbury — plus hospitals, care homes, churches, schools and funeral homes across the metro. We&rsquo;re normally able to deliver within four hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={storeLinks.home} className="btn btn-primary">
              <BagIcon /> Order for delivery
            </a>
            <Link href="/delivery" className="link">
              See the delivery area
            </Link>
          </div>
        </div>
      </section>

      <VisitBlock />
    </>
  );
}
