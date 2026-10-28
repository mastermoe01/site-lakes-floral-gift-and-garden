import type { Metadata } from "next";
import Image from "next/image";
import { bestSellers, collections, moments, moreProducts, pricesCapturedAt, storeLinks } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import PhoneLink from "@/components/PhoneLink";
import { ArrowIcon, BagIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Shop flowers, plants & gifts",
  description:
    "Order flowers online from Lakes Floral Gift & Garden in Forest Lake, MN — roses, fall arrangements, sympathy flowers, plants, European gardens, gift cards and subscriptions, with same-day delivery.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageHero kicker="Designed in-house, delivered same day" title="Shop flowers & gifts">
        <p>
          Every arrangement is designed by hand in our Forest Lake shop. Choose your delivery date at checkout on our secure order site — or call{" "}
          <PhoneLink /> and we&rsquo;ll help you pick.
        </p>
        <a href={storeLinks.home} className="btn btn-primary mt-6">
          <BagIcon /> Open the order site
        </a>
      </PageHero>

      <section className="py-16 md:py-20" aria-labelledby="moments-title">
        <div className="wrap">
          <h2 id="moments-title" className="display text-3xl md:text-5xl">
            By moment
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {moments.map((m) => (
              <li key={m.title}>
                <a href={m.href} className="group block">
                  <span className="relative block aspect-square overflow-hidden rounded-xl bg-white">
                    <Image src={m.image} alt={m.alt} fill sizes="(max-width: 768px) 50vw, 16vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </span>
                  <span className="mt-3 block font-medium group-hover:text-evergreen">{m.title}</span>
                  <span className="block text-sm text-muted">{m.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20" aria-labelledby="products-title">
        <div className="wrap">
          <h2 id="products-title" className="display text-3xl md:text-5xl">
            Best sellers & favorites
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
            {[...bestSellers, ...moreProducts].map((p, i) => (
              <Reveal as="li" key={p.href} delay={(i % 4) * 0.04}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">Prices as listed on lakesfloral.com, {pricesCapturedAt}.</p>
        </div>
      </section>

      <section className="bg-linen-deep py-16 md:py-20" aria-labelledby="collections-title">
        <div className="wrap">
          <h2 id="collections-title" className="display text-3xl md:text-5xl">
            Every collection
          </h2>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <li key={c.title} className="border-b border-line">
                <a href={c.href} className="group flex items-center justify-between py-4 hover:text-evergreen">
                  {c.title}
                  <ArrowIcon className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-evergreen" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <a href={storeLinks.subscription} className="group rounded-2xl bg-spruce p-8 text-linen">
              <p className="kicker text-lg !text-sage">Flowers on repeat</p>
              <h3 className="display mt-2 text-3xl">Flower subscriptions</h3>
              <p className="mt-3 text-linen/75">Fresh, seasonal arrangements for homes, offices and gifts — you choose the frequency and style.</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-sage">
                Start a subscription <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a href={storeLinks.giftCard} className="group grid grid-cols-[1fr_auto] items-center gap-6 rounded-2xl border border-line bg-linen p-8">
              <div>
                <p className="kicker text-lg">Let them choose</p>
                <h3 className="display mt-2 text-3xl">Gift cards</h3>
                <p className="mt-3 text-muted">For flowers, plants, the gift shop and more.</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-evergreen">
                  Buy a gift card <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <span className="relative hidden h-32 w-32 overflow-hidden rounded-xl sm:block">
                <Image src="/photos/gift-card.jpg" alt="A Lakes Floral Gift & Garden gift card" fill sizes="128px" className="object-cover" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
