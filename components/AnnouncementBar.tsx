"use client";

import { useSyncExternalStore } from "react";
import { storeLinks, upcoming, workshop } from "@/lib/site";

const subscribe = () => () => {};

/** Workshop seats strip. Disappears on its own once the last date has passed. */
export default function AnnouncementBar() {
  // Server renders against build time; the client re-checks against today.
  const live = useSyncExternalStore(
    subscribe,
    () => upcoming(workshop.dates).length > 0,
    () => upcoming(workshop.dates).length > 0,
  );
  if (!live) return null;
  const dates = upcoming(workshop.dates).map((d) => d.date.replace("Nov ", "")).join(", ");
  return (
    <div className="bg-spruce text-linen">
      <a
        href={storeLinks.events}
        className="wrap flex min-h-10 items-center justify-center gap-2 py-2 text-center text-[13.5px] hover:underline sm:text-sm"
      >
        <span className="kicker whitespace-nowrap !text-sage">
          Winter DIY<span className="hidden sm:inline"> Container</span> nights
        </span>
        <span aria-hidden="true">·</span>
        <span className="whitespace-nowrap">
          Nov {dates} · ${workshop.price}
          <span className="hidden sm:inline"> a seat — reserve yours</span>
        </span>
      </a>
    </div>
  );
}
