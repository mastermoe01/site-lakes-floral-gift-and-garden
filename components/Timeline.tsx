"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";

const entries = [
  { year: "1930", title: "Lakes Floral opens in Forest Lake", body: "A local, small-town flower shop — and it has stayed in the family ever since." },
  { year: "3 generations", title: "Still family-owned", body: "Owned and operated today by the original owner’s two grandsons, Blake and Kelly Roberts." },
  { year: "2005", title: "Roberts Family Life Celebration Home", body: "The Roberts brothers built a first-class facility offering complete funeral and cremation care, also in Forest Lake." },
  {
    year: "Today",
    title: "Greenhouse, gift shop & same-day delivery",
    body: `An onsite greenhouse, a gift shop housing Silo Apparel, same-day delivery 7 days a week — and a ${site.rating.value}-star Google rating across ${site.rating.count.toLocaleString("en-US")} reviews.`,
  },
];

/** "Since 1930" — the line draws itself as you scroll through the family's story. */
export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <ol ref={ref} className="relative ml-2 border-l border-line pl-8 md:ml-0">
      <motion.span
        aria-hidden="true"
        className="absolute -left-px top-0 h-full w-[2px] origin-top bg-cedar"
        style={reduce ? undefined : { scaleY }}
      />
      {entries.map((e) => (
        <li key={e.year} className="relative pb-12 last:pb-0">
          <span aria-hidden="true" className="absolute -left-[39px] top-2 h-3 w-3 rounded-full border-2 border-cedar bg-linen" />
          <p className="display text-4xl text-cedar md:text-5xl">{e.year}</p>
          <h3 className="mt-2 text-xl font-semibold">{e.title}</h3>
          <p className="mt-1 max-w-lg text-muted">{e.body}</p>
        </li>
      ))}
    </ol>
  );
}
