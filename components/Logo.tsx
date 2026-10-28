import Image from "next/image";

/** The client's own logo (brush script + spaced caps). Inverted on spruce grounds. */
export default function Logo({
  invert = false,
  priority = false,
  className = "h-11 w-auto",
}: {
  invert?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Lakes Floral Gift & Garden"
      width={891}
      height={360}
      sizes="160px"
      className={`${className} ${invert ? "invert" : ""}`}
      priority={priority}
    />
  );
}
