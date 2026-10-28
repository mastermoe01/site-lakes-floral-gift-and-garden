import { reviews, site } from "@/lib/site";
import RatingBadge from "./RatingBadge";
import Reveal from "./Reveal";
import { StarIcon } from "./Icons";

/** Real reviews only, verbatim — Google (5★) and the ones lakesfloral.com publishes. */
export default function Reviews({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section className="bg-linen-deep py-20 md:py-28" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker text-xl">In their words</p>
            <h2 id="reviews-title" className="display mt-2 text-4xl md:text-6xl">
              {site.rating.value} stars across {site.rating.count.toLocaleString("en-US")} Google reviews.
            </h2>
          </div>
          <RatingBadge />
        </div>

        <ul className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
          {list.map((r, i) => (
            <Reveal as="li" key={r.name} delay={(i % 3) * 0.06} className="mb-5 break-inside-avoid">
              <figure className="rounded-2xl border border-line bg-linen p-6">
                {r.source === "Google" && (
                  <div className="flex text-cedar-soft" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, k) => (
                      <StarIcon key={k} className="h-4 w-4" />
                    ))}
                  </div>
                )}
                <blockquote className="mt-3 whitespace-pre-line text-[15.5px] leading-relaxed">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted">
                    {" "}
                    · {r.source === "Google" ? `Google review${r.when ? `, ${r.when}` : ""}` : "via lakesfloral.com"}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          <a href={site.rating.url} target="_blank" rel="noopener" className="link">
            Read all {site.rating.count.toLocaleString("en-US")} reviews on Google
          </a>
        </p>
      </div>
    </section>
  );
}
