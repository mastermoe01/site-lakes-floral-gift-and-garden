import { site, storeLinks } from "@/lib/site";
import { BagIcon, PhoneIcon } from "./Icons";

/** Phones: call and order are always one thumb away. */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-linen/95 px-4 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a href={`tel:${site.phone.tel}`} className="btn btn-ghost !min-h-[46px]" aria-label={`Call ${site.phone.display}`}>
          <PhoneIcon /> Call
        </a>
        <a href={storeLinks.home} className="btn btn-primary !min-h-[46px] whitespace-nowrap !px-3">
          <BagIcon /> Order flowers
        </a>
      </div>
    </div>
  );
}
