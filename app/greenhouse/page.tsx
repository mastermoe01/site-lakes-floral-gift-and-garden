import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { storeLinks } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Greenhouse, garden center & gift shop",
  description:
    "The Lakes Floral greenhouse in Forest Lake, MN is open March–December: annuals, perennials, hanging baskets, mums, spruce-tip containers, Christmas trees and poinsettias — plus a gift shop and Silo Apparel.",
  alternates: { canonical: "/greenhouse" },
};

// Lakes Floral Garden Center page (lakesfloral.com/galleries/garden-center.html), verbatim lists.
const seasons = [
  { name: "Late winter / early spring", items: ["Easter lilies", "Hydrangea", "Calla lilies", "Pansies", "Bulb gardens", "And so much more"] },
  { name: "Spring / summer", items: ["Annuals", "Perennials", "Tropicals", "Vegetables", "Herbs", "Container gardens", "Hanging baskets", "Soil", "Plant aid", "Mulch", "Seeds"] },
  { name: "Fall / autumn", items: ["Mums", "Asters", "Pansies", "Corn stalks", "Straw bales", "Bittersweet", "Pumpkins", "Novelty décor"] },
  {
    name: "Winter / Christmas",
    items: ["Spruce tips", "Spruce tip containers", "Spruce tip hanging baskets", "Fresh winter greens", "Christmas trees", "Garland", "Poinsettias", "Christmas cactus", "And more"],
  },
];

export default function GreenhousePage() {
  return (
    <>
      <PageHero
        kicker="Open 10 months of the year · March – December"
        title="The greenhouse & gift shop"
        image="/photos/gift-shop.jpg"
        alt="Inside the Lakes Floral gift shop and greenhouse"
      >
        <p>Hand-selected outdoor plants and décor, the best product at a great value, and customer service that goes above and beyond. A place of sanctuary and a breath of fresh air.</p>
      </PageHero>

      <section className="py-16 md:py-24" aria-labelledby="seasons-title">
        <div className="wrap">
          <h2 id="seasons-title" className="display text-4xl md:text-6xl">
            Something for every season
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 0.06} className="rounded-2xl border border-line bg-white/50 p-6">
                <h3 className="kicker text-2xl">{s.name}</h3>
                <ul className="mt-4 space-y-1.5 text-[15.5px]">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-linen-deep py-16 md:py-24" aria-labelledby="plantings-title">
        <div className="wrap grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src="/photos/winter-container.jpg" alt="A spruce-tip winter container made at Lakes Floral" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="kicker text-xl">Leave the design and mess to us</p>
            <h2 id="plantings-title" className="display mt-2 text-4xl md:text-5xl">
              Delivery, offsite plantings & custom containers
            </h2>
            <p className="mt-5 text-lg text-muted">
              We deliver all of our products, and offer offsite residential and commercial plantings. We also do custom plantings on request — your ideas and your containers, for every season.
            </p>
            <a href={storeLinks.gardenCenter} className="btn btn-primary mt-8">
              Request a consultation
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="gifts-title">
        <div className="wrap grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="kicker text-xl">Unique & trendy</p>
            <h2 id="gifts-title" className="display mt-2 text-4xl md:text-5xl">
              The gift shop — and Silo Apparel
            </h2>
            <p className="mt-5 text-lg text-muted">
              Our gift shop offers a wide variety of items suitable for anyone and all occasions. We&rsquo;re proud to house Silo Apparel inside it — a clothing boutique for women, men and children.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://siloapparel.com/collections/new-arrivals" target="_blank" rel="noopener" className="btn btn-ghost">
                Silo Apparel new arrivals
              </a>
              <a href={storeLinks.chocolates} className="btn btn-ghost">
                Minnesota-made chocolates
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/photos/tropical-arrangement.jpg" alt="A tropical arrangement designed at Lakes Floral" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-spruce py-16 text-linen md:py-20">
        <div className="wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="display max-w-2xl text-3xl md:text-4xl">Birthday parties, graduations, even weddings — the greenhouse can be heated year-round.</p>
          <Link href="/workshops" className="btn btn-light shrink-0">
            Workshops & private events
          </Link>
        </div>
      </section>
    </>
  );
}
