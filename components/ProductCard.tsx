import Image from "next/image";
import type { Product } from "@/lib/site";

/** A live lakesfloral.com product — the click lands on the page that takes payment. */
export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <a href={product.href} className="group block" aria-label={`${product.name}, $${product.price} — order on lakesfloral.com`}>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
        <Image
          src={product.image}
          alt={`${product.name} — arrangement by Lakes Floral Gift & Garden`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-settle)] group-hover:scale-[1.04]"
          priority={priority}
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="text-[15.5px] font-medium leading-snug group-hover:text-evergreen">{product.name}</h3>
        <p className="shrink-0 tabular-nums text-muted">${product.price}</p>
      </div>
    </a>
  );
}
