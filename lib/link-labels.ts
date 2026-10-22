import type { SeoPage } from "./pages";
import { locationName, serviceBaseSlug } from "./pages";
import { serviceLabelFromSlug } from "./service-labels";

export function pageLinkLabel(page: SeoPage) {
  if (page.kind === "city" || page.kind === "county") {
    return locationName(page);
  }
  const short: Record<string, string> = {
    "septic-tank-emptying": "Emptying",
    "septic-tank-cleaning": "Cleaning",
    "septic-tank-pumping": "Pumping",
    "septic-tank-maintenance": "Maintenance",
    "septic-tank-upgrade": "Upgrades",
    "septic-tank-replacement": "Replacement",
    "septic-tank-servicing": "Servicing",
    "septic-tank-installation": "New installs",
    "septic-tank-pump-replacement": "Pump replacement",
    "septic-system-repair": "System repair",
    "septic-system-installation": "New systems",
    "septic-tank-repair": "Repairs",
  };
  return short[page.slug] ?? serviceLabelFromSlug(page.slug);
}

export function serviceTableTitle(page: SeoPage) {
  if (page.kind === "national") return serviceLabelFromSlug(page.slug);
  return locationName(page);
}
