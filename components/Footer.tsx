import Link from "next/link";
import { nav, site, storeLinks } from "@/lib/site";
import Logo from "./Logo";
import PhoneLink from "./PhoneLink";

export default function Footer() {
  const a = site.address;
  return (
    <footer className="bg-spruce pb-28 pt-20 text-linen md:pb-12">
      <div className="wrap grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo invert className="h-14 w-auto" />
          <p className="kicker mt-5 text-xl !text-sage">{site.tagline}</p>
          <p className="mt-3 max-w-xs text-[15px] text-linen/70">
            Family-owned for three generations. Same-day delivery 7 days a week, 362 days a year.
          </p>
        </div>

        <div>
          <h2 className="label text-linen/60">Visit</h2>
          <address className="mt-4 not-italic leading-relaxed">
            <a href={site.maps} target="_blank" rel="noopener" className="hover:underline">
              {a.street}
              <br />
              {a.city}, {a.region} {a.zip}
            </a>
          </address>
          <p className="mt-3">
            <PhoneLink className="text-lg font-semibold hover:underline" />
          </p>
        </div>

        <div>
          <h2 className="label text-linen/60">Hours</h2>
          <dl className="mt-4 space-y-1.5 text-[15px]">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-linen/70">{h.short}</dt>
                <dd>
                  {h.open} – {h.close}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="label text-linen/60">Explore</h2>
          <ul className="mt-4 space-y-1.5 text-[15px]">
            <li>
              <a href={storeLinks.home} className="hover:underline">
                Order flowers
              </a>
            </li>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.vipUrl} className="hover:underline">
                Join the V.I.P. list
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-16 flex flex-col gap-4 border-t border-linen/15 pt-6 text-[13.5px] text-linen/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · Forest Lake, Minnesota
        </p>
        <ul className="flex flex-wrap gap-5">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener" className="hover:text-linen">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
