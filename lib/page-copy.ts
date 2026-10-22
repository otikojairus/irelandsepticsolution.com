import { capitalizeSentence, hashSlug, pick, wordCount } from "./content-utils";
import { factsForPage } from "./location-facts";
import type { SeoPage } from "./pages";
import { PHONE_DISPLAY, locationName, serviceBaseSlug } from "./pages";
import { serviceLabelFromSlug } from "./service-labels";

export type FaqItem = { q: string; a: string };
export type ContentSection = { h2: string; paragraphs: string[] };

function isUrgent(page: SeoPage) {
  return serviceBaseSlug(page.slug).includes("repair");
}

function wordTarget(page: SeoPage): number {
  if (page.kind === "national") return 800;
  if (isUrgent(page)) return 500;
  return 400;
}

function keywordPhrase(page: SeoPage) {
  return page.keyword.trim() || serviceLabelFromSlug(page.slug).toLowerCase();
}

export function h1For(page: SeoPage): string {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  if (page.kind === "city") return `${capitalizeSentence(kw)} in ${place}`;
  if (page.kind === "county") return `${capitalizeSentence(kw)} in County ${place}`;
  if (page.kind === "national") return `${capitalizeSentence(kw)} in Ireland`;
  return capitalizeSentence(kw);
}

const serviceHooks: Record<string, string[]> = {
  "septic-tank-replacement": [
    "When concrete fails, replacement is often the only safe option for your family and neighbours.",
    "We measure setbacks from wells and waterways before quoting a new tank in Ireland.",
  ],
  "septic-tank-upgrade": [
    "Registration and percolation rules evolve—upgrades bring older systems in line without guessing.",
    "An upgrade can mean a new tank, a better field, or both; we scope it after a site look.",
  ],
  "septic-tank-servicing": [
    "Servicing ties together emptying, inspection, and notes for your next registration renewal.",
    "Landlords use servicing visits to document tank health between tenants.",
  ],
  "septic-tank-installation": [
    "New builds need the tank sized before driveways and patios cover the percolation area.",
    "We talk builders and homeowners through soil tests and access for future empties.",
  ],
  "septic-tank-pump-replacement": [
    "Pump chambers fail quietly until toilets gurgle on the lowest floor.",
    "We match pump curves to your layout and test alarms before we leave.",
  ],
  "septic-system-repair": [
    "Distribution boxes and crushed pipes mimic tank failure—diagnosis matters.",
    "Saturated soakaways sometimes need repair, not another desludge.",
  ],
  "septic-system-installation": [
    "A full system is more than a tank—it is pipes, fields, and setbacks from your well.",
    "Greenfield sites in Ireland still need percolation tests before you pour slabs.",
  ],
  "septic-tank-emptying": [
    "When sludge builds up, odours reach the house long before the alarm trips.",
    "A full tank stresses baffles and forces solids toward the soakaway.",
    "Regular desludging is cheaper than digging up a failed percolation area.",
  ],
  "septic-tank-cleaning": [
    "Crust on the walls still holds bacteria even after a quick pump-out.",
    "Cleaning targets the scum layer that pumping alone leaves behind.",
    "If showers gurgle after emptying, the tank walls may need a proper wash.",
  ],
  "septic-tank-pumping": [
    "Pumping schedules should follow occupancy, not just the calendar.",
    "Holiday homes in Ireland often need visits before the summer rush.",
    "We measure depth on site so you are not paying for air space.",
  ],
  "septic-tank-maintenance": [
    "A maintenance visit catches alarm faults before they become backups.",
    "Inspection lids get damaged by mowers— we note that for next time.",
    "Soakaways fail slowly; maintenance visits spot wet patches early.",
  ],
  "septic-tank-repair": [
    "Surfacing effluent is a health risk— treat it as urgent.",
    "Collapsed baffles send solids straight to the field.",
    "Tree roots can crack older concrete tanks after wet winters.",
  ],
};

function hookFor(page: SeoPage): string {
  const base = serviceBaseSlug(page.slug);
  const hooks = serviceHooks[base] ?? [
    "Private wastewater systems need honest advice, not a hard sell.",
    "We explain what we see before quoting follow-up work.",
  ];
  return pick(page.slug, "hook", hooks);
}

function localFactParagraph(page: SeoPage): string {
  const place = locationName(page);
  if (page.kind === "city") {
    const f = factsForPage(page.area, "city");
    if (!f) return `In ${place}, access lanes and busy family homes shape how we schedule tankers.`;
    return `In ${place} (${f.population}), crews often work near ${f.landmark} and suburbs like ${f.neighbourhood}. ${f.climate} changes how quickly tanks fill after heavy rain.`;
  }
  if (page.kind === "county") {
    const f = factsForPage(page.area, "county");
    if (!f) return `Across County ${place}, farm tracks and one-off houses need clear Eircodes before we dispatch.`;
    return `County ${place} has ${f.population} spread across ${f.neighbourhood}. Near ${f.landmark}, ${f.climate} is something we factor into soakaway advice.`;
  }
  return "";
}

const closings = [
  `Ring ${PHONE_DISPLAY} with your Eircode and we will line up a visit.`,
  `Call ${PHONE_DISPLAY}—tell us what the drains are doing and who can meet the crew.`,
  `You can reach us on ${PHONE_DISPLAY} for a straight answer on timing and price drivers.`,
];

export function introFor(page: SeoPage): string {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  const parts: string[] = [];

  parts.push(hookFor(page));

  if (page.kind === "national") {
    parts.push(
      pick(page.slug, "nat1", [
        `This page is for anyone searching ${kw} across the Republic—homeowners, landlords, and small commercial yards off mains sewer.`,
        `We coordinate ${kw} nationwide, from one-off empties to repeat maintenance contracts.`,
      ]),
    );
    parts.push(
      pick(page.slug, "nat2", [
        `Irish registration rules and percolation tests matter; we ask about them up front so paperwork is not a surprise later.`,
        `Tank size, occupancy, and last service date help us send the right tanker the first time.`,
      ]),
    );
  } else if (page.kind === "city") {
    parts.push(
      pick(page.slug, "city-book", [
        `You are booking ${kw} in ${place}—crews see both commuter estates and older rural pockets inside the city limit.`,
        `This ${kw} visit in ${place} often means tight driveways near new estates and older tanks off main roads.`,
      ]),
    );
    parts.push(localFactParagraph(page));
    parts.push(
      pick(page.slug, "city-extra", [
        `Newer estates and older rural pockets inside the city boundary both show up on our routes.`,
        `If your lid is under paving, mention it when you call so we allow time on site.`,
      ]),
    );
  } else if (page.kind === "county") {
    parts.push(
      pick(page.slug, "co-book", [
        `This guide covers ${kw} in County ${place}—one-off houses, farms, and coastal lets share one booking line.`,
        `For ${kw} across County ${place}, we route tankers using parish names, townlands, and your Eircode.`,
      ]),
    );
    parts.push(localFactParagraph(page));
    parts.push(`Share gate codes, laneway width, and whether the property is a permanent home or a holiday let.`);
  }

  if (page.secondary.length) {
    parts.push(`Related searches such as ${page.secondary[0]} are covered on this line as well.`);
  }

  parts.push(pick(page.slug, "close", closings));

  let text = parts.join(" ");
  const fillers = [
    ` We document tank depth, alarms, and soakaway condition in plain language after every visit.`,
    ` If you are unsure which service you need, describe symptoms and we will guide you.`,
    ` Receipts help with house sales and registration—ask us to note tank condition on the invoice.`,
  ];
  let i = 0;
  while (wordCount(text) < 80 && i < fillers.length) {
    text += fillers[i++] ?? "";
  }
  return text;
}

function extraParagraph(page: SeoPage, salt: string): string {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  return pick(page.slug, salt, [
    `Before we arrive for ${kw}, stop running dishwashers if indoor drains are slow—that protects the soakaway.`,
    `Photos of the lid area help when ${place} addresses are hard to spot from the road.`,
    `If you are selling in ${place || "Ireland"}, keep service receipts—solicitors often ask for them.`,
    `Children’s play areas downhill from the tank should stay clear until we confirm the system is safe.`,
    `Winter storms in Ireland push extra water into older systems; mention recent flooding when you call.`,
  ]);
}

function padSections(page: SeoPage, sections: ContentSection[], intro: string): ContentSection[] {
  const target = wordTarget(page);
  const out = sections.map((s) => ({ ...s, paragraphs: [...s.paragraphs] }));
  let total = wordCount(intro) + out.reduce((n, s) => n + wordCount(s.paragraphs.join(" ")), 0);
  let salt = 0;
  while (total < target && salt < 60) {
    const idx = salt % out.length;
    out[idx].paragraphs.push(extraParagraph(page, `pad-${salt}`));
    total = wordCount(intro) + out.reduce((n, s) => n + wordCount(s.paragraphs.join(" ")), 0);
    salt++;
  }
  return out;
}

export function sectionsFor(page: SeoPage): ContentSection[] {
  const place = locationName(page);
  const kw = keywordPhrase(page);
  const intro = introFor(page);

  const sections: ContentSection[] = [];

  if (page.kind === "city" || page.kind === "county") {
    const label = page.kind === "county" ? `County ${place}` : place;
    sections.push({
      h2: `Why ${label} is different for ${kw}`,
      paragraphs: [
        localFactParagraph(page),
        pick(page.slug, "local2", [
          `Holiday lets that sit empty for months still need a plan—stagnant tanks surprise owners in spring.`,
          `Clay and peat soils in this part of Ireland hold water; we check whether the field is accepting effluent.`,
        ]),
      ],
    });
  } else {
    sections.push({
      h2: `${capitalizeSentence(kw)} routes we run weekly`,
      paragraphs: [
        pick(page.slug, "routes1", [
          `Crews fan out from regional hubs; ${kw} bookings need accurate Eircodes and lane access notes.`,
          `We batch ${kw} visits by county when possible to keep rural lead times honest.`,
        ]),
        pick(page.slug, "routes2", [
          `Winter groundwater stresses older soakaways—mention recent flooding when you book ${kw}.`,
          `Holiday lets spike summer demand for ${kw}; book ahead if the house was vacant for months.`,
        ]),
      ],
    });
    sections.push({
      h2: `How ${kw} works in Ireland`,
      paragraphs: [
        pick(page.slug, "how1", [
          `Licensed waste carriers handle desludge where required; we confirm what applies to your address.`,
          `EPA registration and Irish Water mains checks sometimes confuse buyers—we clarify on the phone.`,
        ]),
        pick(page.slug, "how2", [
          `We do not rush a pump-out without looking at baffles, alarms, and the condition of the soakaway.`,
          `If repair makes more sense than another empty, we say so before you spend money.`,
        ]),
      ],
    });
  }

  if (isUrgent(page)) {
    sections.push({
      h2: "When to call straight away",
      paragraphs: [
        `Indoor backups, wet ground above the tank, or sewage near wells are urgent—mention them immediately on ${PHONE_DISPLAY}.`,
        `If anyone feels unwell from fumes, keep people away from the area until the system is isolated.`,
      ],
    });
  }

  sections.push({
    h2: "What to tell us on the phone",
    paragraphs: [
      `Your Eircode, ${kw} needs, number of people using the system, and when it was last serviced.`,
      `Access notes for ${place || "your lane"}—electric gates, narrow bridges, and dogs all matter for routing.`,
    ],
  });

  sections.push({
    h2: "On site",
    paragraphs: [
      `We locate lids safely, complete the ${kw} work, and explain anything that looks worn or non-compliant.`,
      `You get a verbal summary suitable for insurers, landlords, or registration paperwork.`,
    ],
  });

  sections.push({
    h2: "After the visit",
    paragraphs: [
      pick(page.slug, "after1", [
        `We suggest a realistic return interval based on your household—not a generic three-year rule.`,
        `If you need a different service in ${place || "Ireland"}, ask on the call; we can often combine trips.`,
      ]),
      extraParagraph(page, "after2"),
    ],
  });

  return padSections(page, sections, intro);
}

export function faqsFor(page: SeoPage): FaqItem[] {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  const areaLabel = page.kind === "county" ? `County ${place}` : place || "Ireland";

  const base: FaqItem[] = [
    {
      q: pick(page.slug, "fq1", [
        `How much does ${kw} cost in ${areaLabel}?`,
        `What affects the price of ${kw} in ${areaLabel}?`,
        `Is ${kw} in ${areaLabel} priced per litre or per visit?`,
      ]),
      a: pick(page.slug, "fa1", [
        `Price depends on tank size, access, and how full the system is. Call ${PHONE_DISPLAY} with your Eircode for a quote range before we book.`,
        `We do not publish one national price because lanes, lids, and distance vary. ${PHONE_DISPLAY} can outline typical costs for ${areaLabel}.`,
      ]),
    },
    {
      q: pick(page.slug, "fq2", [
        `How soon can you do ${kw} in ${areaLabel}?`,
        `What is the lead time for ${kw} near ${areaLabel}?`,
        `Can you prioritise ${kw} if drains are backing up in ${areaLabel}?`,
      ]),
      a: pick(page.slug, "fa2", [
        `Lead time depends on routes that week and whether you have an emergency. Share symptoms when you dial ${PHONE_DISPLAY}.`,
        `Backups and odours indoors move you up the queue—say so clearly when you call ${PHONE_DISPLAY}.`,
      ]),
    },
    {
      q: pick(page.slug, "fq3", [
        `Do I need to be home for ${kw} in ${areaLabel}?`,
        `Can you find the tank if I am unsure where it is in ${areaLabel}?`,
        `What should I prepare before ${kw} in ${areaLabel}?`,
      ]),
      a: pick(page.slug, "fa3", [
        `Someone on site who knows the lid location saves time. If you are unsure, builder plans or a sketch help—call ${PHONE_DISPLAY} either way.`,
        `Clear vehicles from the lid area if you can. We bring lifting tools when you mention buried covers.`,
      ]),
    },
    {
      q: pick(page.slug, "fq4", [
        `Is ${kw} in ${areaLabel} the same line as the rest of Ireland?`,
        `Does this page change the phone number for ${kw}?`,
        `Can I book ${kw} for a rental property in ${areaLabel}?`,
      ]),
      a: pick(page.slug, "fa4", [
        `Yes—${PHONE_DISPLAY} is the same nationwide. This page adds local context for ${areaLabel}.`,
        `Landlords can book; tell us tenant access windows and we will note them for the crew.`,
      ]),
    },
  ];

  if (page.kind === "city") {
    const f = factsForPage(page.area, "city");
    if (f) {
      base.push({
        q: `Does weather around ${f.landmark} affect my tank?`,
        a: `Yes—${f.climate} Often shows up as slow drains or soggy ground near the soakaway. Mention recent weather when you call ${PHONE_DISPLAY}.`,
      });
    }
  }

  if (page.kind === "county") {
    const f = factsForPage(page.area, "county");
    if (f) {
      base.push({
        q: `Do you cover rural areas near ${f.landmark} in County ${place}?`,
        a: `We route across ${f.neighbourhood} and surrounding parishes. Give your Eircode on ${PHONE_DISPLAY} and we will confirm coverage.`,
      });
    }
  }

  return base.slice(0, 4 + (page.id % 2));
}

export function faqHeadingFor(page: SeoPage) {
  const place = locationName(page);
  if (page.kind === "city") return `FAQs about ${keywordPhrase(page)} in ${place}`;
  if (page.kind === "county") return `FAQs about ${keywordPhrase(page)} in County ${place}`;
  return `FAQs about ${keywordPhrase(page)} in Ireland`;
}

export function heroLeadFor(page: SeoPage, maxWords = 40) {
  const words = introFor(page).split(/\s+/);
  const slice = words.slice(0, maxWords).join(" ");
  return words.length > maxWords ? `${slice}…` : slice;
}

export function breadcrumbLabels(page: SeoPage) {
  const place = locationName(page);
  const kw = capitalizeSentence(keywordPhrase(page));
  if (page.kind === "national") {
    return { hub: "Services", hubPath: "/services", parent: null, current: `${kw} Ireland` };
  }
  if (page.kind === "city") {
    return { hub: "Areas", hubPath: "/locations", parent: place, current: `${kw} ${place}` };
  }
  return { hub: "Areas", hubPath: "/locations", parent: `County ${place}`, current: `${kw} County ${place}` };
}
