#!/usr/bin/env python3
"""Regenerate lib/pages.ts from scripts/pseo-ireland-septic.xlsx (sheet 1)."""

from __future__ import annotations

import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "scripts" / "pseo-ireland-septic.xlsx"
OUT = ROOT / "lib" / "pages.ts"

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
CITIES = ("Dublin", "Cork", "Galway", "Limerick", "Waterford")
PILLAR = "septic-tank-emptying"


def col_index(letters: str) -> int:
    n = 0
    for c in letters:
        n = n * 26 + (ord(c) - 64)
    return n


def load_shared_strings(z: zipfile.ZipFile) -> list[str]:
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    strings: list[str] = []
    for si in root.findall(".//m:si", NS):
        t = si.find("m:t", NS)
        if t is not None and t.text:
            strings.append(t.text)
            continue
        parts: list[str] = []
        for r in si.findall("m:r", NS):
            tt = r.find("m:t", NS)
            parts.append(tt.text if tt is not None and tt.text else "")
        strings.append("".join(parts))
    return strings


def parse_rows() -> list[dict]:
    with zipfile.ZipFile(XLSX) as z:
        strings = load_shared_strings(z)
        root = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))
        rows = root.findall(".//m:sheetData/m:row", NS)
        pages: list[dict] = []
        for row in rows[2:]:
            cells: dict[int, str] = {}
            for c in row.findall("m:c", NS):
                ref = c.get("r", "")
                m = re.match(r"([A-Z]+)", ref)
                if not m:
                    continue
                t = c.get("t")
                v = c.find("m:v", NS)
                if v is None or v.text is None:
                    continue
                val = v.text
                if t == "s":
                    val = strings[int(val)]
                cells[col_index(m.group(1))] = val

            slug_raw = cells.get(3, "")
            if not slug_raw or not str(slug_raw).startswith("/"):
                continue

            slug = str(slug_raw).strip("/")
            area = cells.get(6, "") or ""
            vol = float(cells.get(9, 0) or 0)

            if "National" in area:
                kind = "national"
            elif area.startswith("County "):
                kind = "county"
            elif area in CITIES:
                kind = "city"
            else:
                kind = "county" if area.startswith("County") else "city"

            if slug == PILLAR or vol >= 500:
                priority = "Top Priority"
            elif vol >= 150:
                priority = "High"
            else:
                priority = "Medium"

            secondary = cells.get(5, "") or ""
            pages.append(
                {
                    "id": int(float(cells.get(1, len(pages) + 1))),
                    "title": cells.get(2, ""),
                    "slug": slug,
                    "keyword": cells.get(4, ""),
                    "secondary": secondary,
                    "area": area,
                    "priority": priority,
                    "kind": kind,
                    "vol": vol,
                }
            )
    return pages


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def emit(pages: list[dict]) -> None:
    lines = [
        'export type PageKind = "national" | "city" | "county";',
        "",
        'export type SeoPage = {',
        "  id: number;",
        "  title: string;",
        "  slug: string;",
        "  keyword: string;",
        "  secondary: string[];",
        "  area: string;",
        '  priority: "Top Priority" | "High" | "Medium";',
        "  kind: PageKind;",
        "  volume?: number;",
        "};",
        "",
        "const row = (",
        "  id: number,",
        "  title: string,",
        "  slug: string,",
        "  keyword: string,",
        "  secondary: string,",
        "  area = \"Ireland\",",
        '  priority: SeoPage["priority"] = "Medium",',
        '  kind: PageKind = "city",',
        "  volume?: number,",
        "): SeoPage => ({",
        "  id,",
        "  title,",
        "  slug,",
        "  keyword,",
        "  secondary: secondary ? secondary.split(\"|\").map((s) => s.trim()).filter(Boolean) : [],",
        "  area,",
        "  priority,",
        "  kind,",
        "  volume,",
        "});",
        "",
        "export const PILLAR_SLUG = \"septic-tank-emptying\";",
        "",
        "export const PAGES: SeoPage[] = [",
    ]

    for p in pages:
        sec = p["secondary"].replace("|", "|") if p["secondary"] else ""
        vol = p["vol"]
        vol_part = f", {vol:g}" if vol else ""
        lines.append(
            f'  row({p["id"]}, "{esc(p["title"])}", "{esc(p["slug"])}", "{esc(p["keyword"])}", '
            f'"{esc(sec)}", "{esc(p["area"])}", "{p["priority"]}", "{p["kind"]}"{vol_part}),'
        )

    lines.extend(
        [
            "];",
            "",
            'export const NATIONAL_PAGES = PAGES.filter((page) => page.kind === "national");',
            'export const CITY_PAGES = PAGES.filter((page) => page.kind === "city");',
            'export const COUNTY_PAGES = PAGES.filter((page) => page.kind === "county");',
            "",
            'const PHONE_DISPLAY_DEFAULT = "1800-XXX-XXXX";',
            'const PHONE_E164_DEFAULT = "+3531800XXXXXX";',
            "",
            "function isPlaceholderPhone(value?: string) {",
            '  return !value || /x{2,}/i.test(value) || value.includes("XXX");',
            "}",
            "",
            "export const PHONE_DISPLAY = isPlaceholderPhone(process.env.NEXT_PUBLIC_PHONE_DISPLAY)",
            "  ? PHONE_DISPLAY_DEFAULT",
            "  : process.env.NEXT_PUBLIC_PHONE_DISPLAY!;",
            "export const PHONE_E164 = isPlaceholderPhone(process.env.NEXT_PUBLIC_PHONE_E164)",
            "  ? PHONE_E164_DEFAULT",
            "  : process.env.NEXT_PUBLIC_PHONE_E164!;",
            'export const SITE_NAME = "Ireland Septic Solutions";',
            "",
            "export function getPage(slug: string) {",
            "  return PAGES.find((page) => page.slug === slug);",
            "}",
            "",
            "export function cleanTitle(title: string) {",
            '  return title.split("|")[0].trim();',
            "}",
            "",
            "export function locationName(page: SeoPage) {",
            '  if (page.area.startsWith("Ireland")) return "Ireland";',
            '  if (page.area.startsWith("County ")) return page.area.replace("County ", "");',
            "  return page.area;",
            "}",
            "",
            'export { pageLinkLabel as linkLabelFor } from "./link-labels";',
            "",
            "export function blurbFor(page: SeoPage) {",
            "  const place = locationName(page);",
            '  if (page.kind === "city") {',
            "    return `Rural one-offs and busy suburbs in ${place}—we schedule tankers with access notes up front.`;",
            "  }",
            '  if (page.kind === "county") {',
            "    return `Farmsteads, holiday homes, and villages across ${place}—same number, local routing.`;",
            "  }",
            "  const blurbs: Record<string, string> = {",
            '    "septic-tank-emptying": "Full desludge visits with lids located and levels checked before we leave.",',
            '    "septic-tank-cleaning": "Wash-down and inspection when odours or slow drains suggest buildup.",',
            '    "septic-tank-pumping": "Pump-out service sized to your tank and soakaway condition.",',
            '    "septic-tank-maintenance": "Scheduled care to avoid winter backups and EPA inspection surprises.",',
            '    "septic-tank-repair": "Baffles, pipes, alarms, and pumps—urgent when waste surfaces.",',
            "  };",
            '  return blurbs[page.slug] ?? "Matched to your site, tank type, and timeline.";',
            "}",
            "",
            "export function eyebrowFor(page: SeoPage) {",
            '  if (page.kind === "city") return `${page.area} · Republic of Ireland`;',
            '  if (page.kind === "county") return page.area;',
            '  if (page.slug === PILLAR_SLUG) return "National dispatch";',
            '  return "Ireland-wide";',
            "}",
            "",
            'export { introFor, faqsFor, faqHeadingFor, h1For, heroLeadFor, pageSeoMeta, internalLinksFor } from "./seo-content";',
            'export { internalLinksFor as relatedPages } from "./seo-content";',
            "",
            "export function absoluteUrl(path = \"\") {",
            '  const root = process.env.NEXT_PUBLIC_SITE_URL || "https://irelandsepticsolutions.com";',
            '  return `${root.replace(/\\/$/, "")}/${path.replace(/^\\//, "")}`;',
            "}",
            "",
            "export function serviceBaseSlug(slug: string) {",
            "  for (const city of [\"dublin\", \"cork\", \"galway\", \"limerick\", \"waterford\"]) {",
            '    if (slug.endsWith(`-${city}`)) return slug.slice(0, -(city.length + 1));',
            "  }",
            '  if (slug.includes("-county-")) {',
            '    return slug.split("-county-")[0];',
            "  }",
            "  return slug;",
            "}",
            "",
        ]
    )

    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {len(pages)} pages to {OUT}")


if __name__ == "__main__":
    emit(parse_rows())
