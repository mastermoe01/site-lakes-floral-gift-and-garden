"use client";

import { useSyncExternalStore } from "react";
import { storeLinks, upcoming, workshop } from "@/lib/site";
import { ArrowIcon } from "./Icons";

const subscribe = () => () => {};

/** Dated seats, each linked to its own checkout page. Past dates drop off by themselves. */
export default function WorkshopDates({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const count = useSyncExternalStore(
    subscribe,
    () => upcoming(workshop.dates).length,
    () => upcoming(workshop.dates).length,
  );
  const dates = upcoming(workshop.dates);
  const dark = tone === "dark";

  if (count === 0) {
    return (
      <p className={dark ? "text-linen/80" : "text-muted"}>
        This season&rsquo;s nights have wrapped.{" "}
        <a href={storeLinks.events} className="underline underline-offset-4">
          See what&rsquo;s next on the events page
        </a>
        .
      </p>
    );
  }

  return (
    <ul className={`divide-y ${dark ? "divide-linen/15 border-y border-linen/15" : "divide-line border-y border-line"}`}>
      {dates.map((d) => (
        <li key={d.iso}>
          <a
            href={d.href}
            className={`group grid grid-cols-[3rem_1fr_auto] items-center gap-3 py-4 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-4 transition-colors ${dark ? "hover:bg-linen/5" : "hover:bg-sage/30"}`}
            aria-label={`Reserve a seat — ${d.label} at ${d.time}, $${workshop.price}`}
          >
            <span className="display text-3xl leading-none">
              <span className={`label block text-[11px] ${dark ? "text-sage" : "text-cedar"}`}>{d.weekday}</span>
              {d.date.replace("Nov ", "")}
            </span>
            <span>
              <span className="block font-medium">
                <span className="sm:hidden">{d.label.split(",")[0]}</span>
                <span className="hidden sm:inline">{d.label}</span>
              </span>
              <span className={dark ? "text-linen/70" : "text-muted"}>
                {d.time} · ${workshop.price}
                <span className="hidden sm:inline"> per person</span>
              </span>
            </span>
            <span className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-sage" : "text-evergreen"}`}>
              Reserve <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
