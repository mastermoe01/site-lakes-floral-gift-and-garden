import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Our story — family-owned since 1930",
  description:
    "Lakes Floral Gift & Garden was established in 1930 in Forest Lake, Minnesota and has remained in the family for three generations. Owned and operated by Blake and Kelly Roberts.",
  alternates: { canonical: "/about" },
};

const neighbors = [
  { name: "Roberts Family Life Celebration Home", href: "https://robertsfamilyfh.com/" },
  { name: "Silo Apparel", href: "https://siloapparel.com/collections/new-arrivals" },
  { name: "Big Apple Bagels", href: "https://bigapplebagels.com/" },
  { name: "The Greenhouse Cannabis Co.", href: "https://www.thegreenhousecannabisco.com/" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Delivering smiles since 1930"
        title="Three generations in Forest Lake"
        image="/photos/roberts-family.jpg"
        alt="The Roberts family, owners of Lakes Floral Gift & Garden"
      >
        <p>
          Lakes Floral Gift & Garden was established way back in 1930. Our local, small-town business has remained in the family for three generations and is currently owned and operated by the
          original owner&rsquo;s two grandsons, Blake and Kelly Roberts.
        </p>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div className="prose-lf text-lg">
            <p>
              We have a talented and creative team ready to cater to all your design needs. Our beautiful onsite greenhouse allows us to provide the best in plants and décor for all seasons and
              holidays. Our unique and trendy gift shop offers a wide variety of items suitable for anyone and all occasions. We are proud to house Silo Apparel within our gift shop — a clothing
              boutique for women, men and children.
            </p>
            <p>
              Whichever gift you decide upon, we pride ourselves on same-day delivery 7 days a week, 362 days a year! We not only deliver locally but to the greater metro area.
            </p>
            <p>
              Along with owning the floral, gift and garden shop, in 2005 the Roberts brothers built a first-class facility offering complete funeral and cremation care within our community —
              Roberts Family Life Celebration Home, also located in Forest Lake.
            </p>
            <p className="kicker text-2xl">The best compliment is a referral.</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src="/photos/staff-storefront.jpg" alt="The Lakes Floral team at the greenhouse entrance" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-linen-deep py-16 md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <h2 className="display text-4xl md:text-6xl">The short version</h2>
          <Timeline />
        </div>
      </section>

      <Reviews limit={3} />

      <section className="py-16 md:py-20">
        <div className="wrap">
          <h2 className="label text-muted">Neighbors & family businesses</h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {neighbors.map((n) => (
              <li key={n.name}>
                <a href={n.href} target="_blank" rel="noopener" className="link">
                  {n.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
