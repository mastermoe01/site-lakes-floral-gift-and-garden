/** Click-to-play from the poster; never autoplays, never audible on its own. */
export default function VideoPlayer({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <video
      className="aspect-video w-full rounded-2xl bg-spruce object-cover"
      controls
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
