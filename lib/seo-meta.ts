import { pick, wordCount } from "./content-utils";
import type { SeoPage } from "./pages";
import { locationName } from "./pages";

const BRAND = "IrelandSepticSolutions.com";

export function trimTitle(title: string, max = 60) {
  if (title.length <= max) return title;
  const cut = title.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

export function trimDescription(text: string, min = 150, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max && clean.length >= min) return clean;
  if (clean.length < min) return clean.padEnd(min, ".");
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > min ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

function titleCaseKeyword(keyword: string) {
  return keyword.trim().replace(/\b\w/g, (c) => c.toUpperCase());
}

export function metaTitleFor(page: SeoPage) {
  const kw = titleCaseKeyword(page.keyword || page.slug.replace(/-/g, " "));
  const place = locationName(page);
  let title: string;
  if (page.kind === "city") {
    title = `${kw} ${place} | ${BRAND}`;
  } else if (page.kind === "county") {
    title = `${kw} County ${place} | ${BRAND}`;
  } else {
    title = `${kw} Ireland | ${BRAND}`;
  }
  return trimTitle(title);
}

export function metaDescriptionFor(page: SeoPage, introLead: string, phone: string) {
  const kw = page.keyword.trim();
  const place = locationName(page);
  const cta = `Call ${phone} to book.`;

  const variants = [
    `${kw} in ${place || "Ireland"}—licensed crews, clear pricing drivers, and plain advice. ${cta}`,
    `Need ${kw}${place ? ` in ${place}` : " across Ireland"}? Eircode, access notes, and symptoms help us route fast. ${cta}`,
    `${titleCaseKeyword(kw)}${place ? ` near ${place}` : ""}. Winter rain and busy households fill tanks faster—book early. ${cta}`,
    `Trusted ${kw} help${place ? ` for ${place}` : ""}. We explain the job before we pump, clean, or repair. ${cta}`,
  ];

  const chosen = pick(page.slug, "meta", variants);
  const withIntro = wordCount(chosen) < 20 ? `${introLead.split(/\s+/).slice(0, 18).join(" ")}… ${cta}` : chosen;
  return trimDescription(withIntro);
}

export { BRAND };
