#!/usr/bin/env npx tsx
/**
 * Pre-launch SEO checks for all programmatic pages.
 * Run: npx tsx scripts/validate-seo.ts
 */
import { wordCount } from "../lib/content-utils";
import { faqsFor, h1For, introFor, internalLinksFor, sectionsFor } from "../lib/seo-content";
import { pageSeoMeta } from "../lib/seo-content";
import { PAGES, type SeoPage } from "../lib/pages";
import { serviceBaseSlug } from "../lib/pages";

const errors: string[] = [];
const h1Set = new Set<string>();
const introSet = new Set<string>();

function bodyWords(page: SeoPage) {
  const intro = introFor(page);
  const sections = sectionsFor(page);
  const sectionText = sections.flatMap((s) => s.paragraphs).join(" ");
  return wordCount(`${intro} ${sectionText}`);
}

function minWords(page: SeoPage) {
  if (page.kind === "national") return 800;
  if (serviceBaseSlug(page.slug).includes("repair")) return 500;
  return 400;
}

const inbound = new Map<string, number>();
for (const p of PAGES) inbound.set(p.slug, 0);

function markLink(from: string, to: string) {
  if (from !== to) inbound.set(to, (inbound.get(to) ?? 0) + 1);
}

for (const page of PAGES) {
  for (const link of internalLinksFor(page)) {
    markLink(page.slug, link.href.replace(/^\//, ""));
  }
}
markLink("home", "services");
for (const p of PAGES.filter((p) => p.kind === "national")) markLink("services", p.slug);
markLink("home", "locations");
for (const p of PAGES.filter((p) => p.slug.startsWith("septic-tank-emptying-"))) {
  if (p.kind === "city" || p.slug.includes("-county-")) markLink("locations", p.slug);
}

for (const page of PAGES) {
  const h1 = h1For(page);
  const intro = introFor(page);
  const faqs = faqsFor(page);
  const { title, description } = pageSeoMeta(page);

  if (h1Set.has(h1)) errors.push(`Duplicate H1: ${page.slug} -> ${h1}`);
  h1Set.add(h1);

  const introKey = intro.slice(0, 200);
  if (introSet.has(introKey)) errors.push(`Near-duplicate intro start: ${page.slug}`);
  introSet.add(introKey);

  if (wordCount(intro) < 80) errors.push(`Intro < 80 words: ${page.slug} (${wordCount(intro)})`);
  if (faqs.length < 3) errors.push(`FAQ < 3: ${page.slug}`);
  if (title.length > 60) errors.push(`Title > 60 chars: ${page.slug} (${title.length})`);
  if (description.length < 140 || description.length > 165)
    errors.push(`Meta description length: ${page.slug} (${description.length})`);

  const words = bodyWords(page);
  if (words < minWords(page)) errors.push(`Body < ${minWords(page)} words: ${page.slug} (${words})`);

  if ((inbound.get(page.slug) ?? 0) < 1) errors.push(`Orphan (no internal inlinks counted): ${page.slug}`);
}

if (errors.length) {
  console.error(`SEO validation failed (${errors.length} issues):\n`);
  for (const e of errors.slice(0, 40)) console.error(" -", e);
  if (errors.length > 40) console.error(` ... and ${errors.length - 40} more`);
  process.exit(1);
}

console.log(`OK: ${PAGES.length} pages passed SEO validation.`);
