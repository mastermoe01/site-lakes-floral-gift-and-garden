import { existsSync } from "node:fs";
import path from "node:path";
import VideoPlayer from "./VideoPlayer";
import Reveal from "./Reveal";

// Video-slot contract (studio-wide): videos live at
// public/videos/<subject-slug>/{walkthrough,flyover}.mp4 with poster-<family>.jpg.
// Checked at build time — a pushed file enables its section on the next deploy.
const hasFile = (slug: string, file: string) => existsSync(path.join(process.cwd(), "public", "videos", slug, file));

type Family = "walkthrough" | "flyover";

function source(slug: string, family: Family, fallbackPoster: string) {
  if (!hasFile(slug, `${family}.mp4`)) return null;
  const poster = hasFile(slug, `poster-${family}.jpg`) ? `/videos/${slug}/poster-${family}.jpg` : fallbackPoster;
  return { src: `/videos/${slug}/${family}.mp4`, poster };
}

/** "Inside Lakes Floral" — renders only when a walkthrough or flyover has been delivered. */
export default function VideoSlot({ slug, fallbackPoster }: { slug: string; fallbackPoster: string }) {
  const walk = source(slug, "walkthrough", fallbackPoster);
  const fly = source(slug, "flyover", fallbackPoster);
  if (!walk && !fly) return null;

  return (
    <section className="py-20 md:py-28" aria-labelledby="tour-title">
      <div className="wrap">
        <p className="kicker text-xl">Come on in</p>
        <h2 id="tour-title" className="display mt-2 text-4xl md:text-6xl">
          Inside Lakes Floral
        </h2>
        <div className={`mt-10 grid gap-6 ${walk && fly ? "md:grid-cols-2" : ""}`}>
          {walk && (
            <Reveal>
              <VideoPlayer {...walk} label="Walkthrough video of the Lakes Floral greenhouse and gift shop" />
            </Reveal>
          )}
          {fly && (
            <Reveal delay={0.06}>
              <VideoPlayer {...fly} label="Aerial video of Lakes Floral Gift & Garden, 508 Lake Street South" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
