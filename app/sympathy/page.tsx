import type { Metadata } from "next";
import { reviews, site, storeLinks } from "@/lib/site";
import PageHero from "@/components/PageHero";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sympathy & funeral flowers",
  description:
    "Sympathy and funeral flowers from Lakes Floral Gift & Garden, Forest Lake MN — for the service, the home, and the casket or urn. Same-day delivery to funeral homes and churches across the Twin Cities metro.",
  alternates: { canonical: "/sympathy" },
};

const groups = [
  { title: "For the service", note: "Standing sprays, wreaths and arrangements delivered to the funeral home or church.", href: storeLinks.sympathyService },
  { title: "For the home", note: "Bouquets and plants sent to the family.", href: storeLinks.sympathyHome },
  { title: "For the casket or urn", note: "Casket sprays and urn arrangements.", href: storeLinks.sympathyCasket },
];

export default function SympathyPage() {
  const quotes = reviews.filter((r) => r.name === "Angela Naser" || r.name === "Marge");
  return (
    <>
      <PageHero kicker="With care" title="Sympathy & funeral flowers">
        <p>
          When it matters most, talk to a person. Call us and we&rsquo;ll guide you — or order online for same-day delivery to the service or the home.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`tel:${site.phone.tel}`} className="btn btn-primary">
            <PhoneIcon /> Call {site.phone.display}
          </a>
          <a href={storeLinks.sympathy} className="btn btn-ghost">
            View sympathy flowers
          </a>
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <ul className="grid gap-6 md:grid-cols-3">
            {groups.map((g) => (
              <li key={g.title}>
                <a href={g.href} className="group flex h-full flex-col rounded-2xl border border-line bg-white/50 p-8 transition-colors hover:border-evergreen">
                  <h2 className="display text-3xl">{g.title}</h2>
                  <p className="mt-3 flex-1 text-muted">{g.note}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-evergreen">
                    Browse <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-linen-deep py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.name}>
              <blockquote className="display whitespace-pre-line text-2xl leading-snug md:text-3xl">&ldquo;{q.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                — {q.name}, {q.source === "Google" ? "Google review" : "via lakesfloral.com"}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap max-w-3xl">
          <h2 className="display text-3xl md:text-4xl">Delivered to funeral homes across the metro</h2>
          <p className="mt-4 text-lg text-muted">
            We deliver same day, 7 days a week, to funeral homes and churches throughout Forest Lake and the Twin Cities. The Roberts family also owns{" "}
            <a href="https://robertsfamilyfh.com/" target="_blank" rel="noopener" className="link">
              Roberts Family Life Celebration Home
            </a>{" "}
            in Forest Lake, built in 2005 to offer complete funeral and cremation care in our community.
          </p>
        </div>
      </section>
    </>
  );
}
