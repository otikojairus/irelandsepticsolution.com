import { CITY_PAGES, COUNTY_PAGES, PILLAR_SLUG, type SeoPage } from "./pages";

const CITIES = ["Dublin", "Cork", "Galway", "Limerick", "Waterford"] as const;

/** One link per city — leads to the main local emptying guide. */
export function cityLocationEntries(): { name: string; href: string }[] {
  return CITIES.map((name) => ({
    name,
    href: `/${PILLAR_SLUG}-${name.toLowerCase()}`,
  }));
}

/** One link per county — leads to the county emptying guide. */
export function countyLocationEntries(): { name: string; href: string }[] {
  const seen = new Map<string, string>();
  for (const page of COUNTY_PAGES) {
    if (!page.slug.startsWith("septic-tank-emptying-county-")) continue;
    const name = page.area.replace(/^County /, "");
    if (!seen.has(name)) seen.set(name, `/${page.slug}`);
  }
  return [...seen.entries()]
    .map(([name, href]) => ({ name, href }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function hubForArea(page: SeoPage): string {
  if (page.kind === "city") return `/${PILLAR_SLUG}-${page.area.toLowerCase()}`;
  if (page.kind === "county" && page.area.startsWith("County ")) {
    const slugPart = page.area.replace(/^County /, "").toLowerCase().replace(/\s+/g, "-");
    return `/septic-tank-emptying-county-${slugPart}`;
  }
  return `/${PILLAR_SLUG}`;
}
