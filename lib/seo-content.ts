import { seoAnchorFor } from "./seo-anchors";
import {
  breadcrumbLabels,
  faqHeadingFor,
  faqsFor,
  h1For,
  heroLeadFor,
  introFor,
  sectionsFor,
  type ContentSection,
  type FaqItem,
} from "./page-copy";
import { metaDescriptionFor, metaTitleFor } from "./seo-meta";
import {
  CITY_PAGES,
  COUNTY_PAGES,
  NATIONAL_PAGES,
  PILLAR_SLUG,
  type SeoPage,
  PAGES,
  PHONE_DISPLAY,
  getPage,
  serviceBaseSlug,
} from "./pages";

export type { FaqItem, ContentSection };
export type InternalLink = { href: string; anchor: string };

export {
  breadcrumbLabels,
  faqHeadingFor,
  faqsFor,
  h1For,
  heroLeadFor,
  introFor,
  sectionsFor,
};

function nationalForBase(base: string) {
  return NATIONAL_PAGES.find((p) => p.slug === base);
}

export function internalLinksFor(page: SeoPage): InternalLink[] {
  const links: InternalLink[] = [];
  const seen = new Set<string>();
  const base = serviceBaseSlug(page.slug);
  const national = nationalForBase(base);
  const pillar = getPage(PILLAR_SLUG)!;
  const repairNational = getPage("septic-tank-repair");

  const add = (target: SeoPage | undefined, anchor?: string) => {
    if (!target) return;
    const href = `/${target.slug}`;
    if (href === `/${page.slug}` || seen.has(href)) return;
    seen.add(href);
    links.push({ href, anchor: anchor ?? seoAnchorFor(target) });
  };

  if (page.kind === "national") {
    if (page.slug !== PILLAR_SLUG) add(pillar, seoAnchorFor(pillar));
    for (const city of CITY_PAGES.filter((c) => serviceBaseSlug(c.slug) === base)) add(city);
    for (const county of COUNTY_PAGES.filter((c) => serviceBaseSlug(c.slug) === base)) add(county);
    if (base !== "septic-tank-repair" && repairNational) add(repairNational, seoAnchorFor(repairNational));
    const siblings = NATIONAL_PAGES.filter((p) => p.slug !== page.slug).slice(0, 3);
    for (const s of siblings) add(s);
    return links;
  }

  if (page.kind === "city") {
    if (national) add(national, seoAnchorFor(national));
    if (base !== PILLAR_SLUG) add(pillar, seoAnchorFor(pillar));
    for (const s of CITY_PAGES.filter((c) => c.area === page.area && c.slug !== page.slug)) add(s);
    if (repairNational) add(repairNational, seoAnchorFor(repairNational));
    return links;
  }

  if (page.kind === "county") {
    if (national) add(national, seoAnchorFor(national));
    add(pillar, seoAnchorFor(pillar));
    for (const s of COUNTY_PAGES.filter((c) => c.area === page.area && c.slug !== page.slug)) add(s);
    const cityName = page.area.replace(/^County /, "");
    const cityPage = CITY_PAGES.find((c) => c.area === cityName && serviceBaseSlug(c.slug) === base);
    add(cityPage, cityPage ? seoAnchorFor(cityPage) : undefined);
    return links;
  }

  add(pillar);
  return links;
}

export function pageSeoMeta(page: SeoPage) {
  const intro = introFor(page);
  return {
    title: metaTitleFor(page),
    description: metaDescriptionFor(page, intro, PHONE_DISPLAY),
  };
}

export function allSlugsLinkedFromPillar() {
  return PAGES.map((p) => p.slug);
}
