import type { SeoPage } from "./pages";
import { locationName } from "./pages";

/** Keyword-rich anchor text for internal links (never "click here"). */
export function seoAnchorFor(target: SeoPage): string {
  const keyword = target.keyword.trim() || target.title.split("|")[0].trim();
  const place = locationName(target);

  if (target.kind === "city") {
    return `${keyword} ${place}`;
  }
  if (target.kind === "county") {
    return `${keyword} County ${place}`;
  }
  if (target.kind === "national") {
    return `${keyword} Ireland`;
  }
  return keyword;
}
