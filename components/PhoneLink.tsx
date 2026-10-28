import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

/** Every phone number on the site is tap-to-call. */
export default function PhoneLink({ className = "link", icon = false }: { className?: string; icon?: boolean }) {
  return (
    <a href={`tel:${site.phone.tel}`} className={className} aria-label={`Call Lakes Floral at ${site.phone.display}`}>
      {icon && <PhoneIcon />}
      {site.phone.display}
    </a>
  );
}
