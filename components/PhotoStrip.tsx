"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const photos = [
  { src: "/photos/storefront-gable.jpg", alt: "The Lakes Floral storefront on Lake Street South with a flowering urn", w: 3, h: 4 },
  { src: "/photos/greenhouse-event-night.jpg", alt: "An evening workshop under string lights in the Lakes Floral greenhouse", w: 4, h: 3 },
  { src: "/photos/tropical-arrangement.jpg", alt: "A tropical arrangement with bird of paradise and orchids, designed in-house", w: 1, h: 1 },
  { src: "/photos/gift-shop.jpg", alt: "Inside the Lakes Floral gift shop — plants, décor and gifts", w: 4, h: 3 },
  { src: "/photos/winter-container.jpg", alt: "A winter spruce-tip container with birch, pinecones and berries", w: 1, h: 1 },
];

/** Real photos of the shop, drifting at two speeds as the page scrolls. */
export default function PhotoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-14%"]);

  return (
    <div ref={ref} className="overflow-hidden py-4" aria-label="Photos from the shop">
      <motion.ul style={reduce ? undefined : { x }} className="flex w-max items-end gap-4 px-5 md:gap-6 md:px-10">
        {photos.map((p, i) => (
          <li
            key={p.src}
            className="relative shrink-0 overflow-hidden rounded-2xl"
            style={{ height: i % 2 ? "min(42vw, 320px)" : "min(56vw, 420px)", aspectRatio: `${p.w} / ${p.h}` }}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 60vw, 34vw" className="object-cover" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
