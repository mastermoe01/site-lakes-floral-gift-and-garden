import Image from "next/image";
import type { ReactNode } from "react";

/** Inner-page opener: kicker, display title, lede, optional real photo. */
export default function PageHero({
  kicker,
  title,
  children,
  image,
  alt,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="paper border-b border-line">
      <div className={`wrap grid gap-10 py-14 md:py-20 ${image ? "md:grid-cols-[1.15fr_1fr] md:items-end" : ""}`}>
        <div>
          <p className="kicker text-xl">{kicker}</p>
          <h1 className="display mt-3 text-[2.75rem] sm:text-6xl lg:text-7xl">{title}</h1>
          {children && <div className="mt-6 max-w-xl text-lg text-muted">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={image} alt={alt ?? ""} fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
