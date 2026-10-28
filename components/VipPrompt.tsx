"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { CloseIcon } from "./Icons";

const KEY = "lf-vip-dismissed";
const DELAY_MS = 30_000;
const SNOOZE_MS = 30 * 24 * 3600_000;

function snoozed() {
  try {
    const t = Number(localStorage.getItem(KEY));
    return Number.isFinite(t) && Date.now() - t < SNOOZE_MS;
  } catch {
    return false;
  }
}

/** VIP invite — never on arrival. Opens on exit intent (desktop) or after 30 seconds,
 *  whichever comes first, then stays quiet for 30 days once closed. */
export default function VipPrompt() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (snoozed()) return;
    let shown = false;
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) show();
    };
    const cleanup = () => {
      window.clearTimeout(timer);
      document.documentElement.removeEventListener("mouseout", onLeave);
    };
    const show = () => {
      if (shown || snoozed() || !ref.current) return;
      if (document.querySelector("dialog[open]")) return;
      shown = true;
      ref.current.showModal();
      cleanup();
    };
    const timer = window.setTimeout(show, DELAY_MS);
    document.documentElement.addEventListener("mouseout", onLeave);
    return cleanup;
  }, []);

  const close = () => {
    try {
      localStorage.setItem(KEY, String(Date.now()));
    } catch {
      // Private mode: the prompt may return next visit, which is acceptable.
    }
    if (ref.current?.open) ref.current.close();
  };

  return (
    <dialog
      ref={ref}
      onClose={close}
      onClick={(e) => e.target === ref.current && close()}
      aria-labelledby="vip-title"
      className="m-auto w-[min(92vw,460px)] overflow-hidden rounded-2xl bg-linen p-0 text-ink shadow-2xl backdrop:bg-spruce/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative bg-spruce px-7 pb-7 pt-9 text-linen">
        <button type="button" onClick={close} className="absolute right-3 top-3 rounded-full p-2 text-linen/80 hover:text-linen" aria-label="Close">
          <CloseIcon />
        </button>
        <p className="kicker text-lg !text-sage">Lakes Floral V.I.P.</p>
        <h2 id="vip-title" className="display mt-2 text-[2.1rem]">
          A little something on your birthday.
        </h2>
      </div>
      <div className="px-7 pb-7 pt-6">
        <p className="text-muted">Become a Lakes Floral V.I.P.! Receive a special offer on your birthday, event notifications and more!</p>
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <a href={site.vipUrl} className="btn btn-primary flex-1" onClick={close}>
            Click here to join
          </a>
          <button type="button" className="btn flex-1 text-muted hover:text-ink" onClick={close}>
            Not now
          </button>
        </div>
      </div>
    </dialog>
  );
}
