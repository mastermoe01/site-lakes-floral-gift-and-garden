import type { Metadata } from "next";
import { site, storeLinks } from "@/lib/site";
import VisitBlock from "@/components/VisitBlock";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Visit & contact",
  description: "Lakes Floral Gift & Garden, 508 Lake Street South, Forest Lake, MN 55025. Call (651) 464-2134. Open Mon–Fri 9–6, Sat 9–4, Sun 10–2.",
  alternates: { canonical: "/contact" },
};

const ways = [
  { title: "Call the shop", body: `The fastest way to reach a designer — ${site.phone.display}.`, href: `tel:${site.phone.tel}`, cta: "Call now" },
  { title: "Order online", body: "Choose an arrangement and a delivery date on our secure order site.", href: storeLinks.home, cta: "Order flowers" },
  { title: "Send a message", body: "Questions, special requests, weddings and events — use our contact form.", href: storeLinks.contact, cta: "Contact form" },
];

export default function ContactPage() {
  return (
    <>
      <VisitBlock headingLevel={1} />
      <section className="border-t border-line bg-linen-deep py-16 md:py-20">
        <div className="wrap">
          <ul className="grid gap-6 md:grid-cols-3">
            {ways.map((w) => (
              <li key={w.title}>
                <a href={w.href} className="group flex h-full flex-col rounded-2xl border border-line bg-linen p-7 transition-colors hover:border-evergreen">
                  <h2 className="display text-2xl">{w.title}</h2>
                  <p className="mt-2 flex-1 text-muted">{w.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-evergreen">
                    {w.cta} <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
