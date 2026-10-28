import { site } from "@/lib/site";
import { StarIcon } from "./Icons";

/** The proof under the promise: Google rating + count, linked to the profile. */
export default function RatingBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { value, count, url } = site.rating;
  const dark = tone === "dark";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center gap-3 rounded-full border py-2 pl-3 pr-4 transition-colors ${
        dark ? "border-linen/25 text-linen hover:border-linen/60" : "border-line bg-white/60 text-ink hover:border-evergreen"
      }`}
      aria-label={`Rated ${value} out of 5 from ${count.toLocaleString("en-US")} Google reviews`}
    >
      <span className="flex text-cedar-soft" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </span>
      <span className="text-[15px] leading-none">
        <strong className="font-semibold">{value}</strong>
        <span className={dark ? "text-linen/70" : "text-muted"}> · {count.toLocaleString("en-US")} Google reviews</span>
      </span>
    </a>
  );
}
