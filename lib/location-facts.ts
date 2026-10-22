export type LocationFacts = {
  population: string;
  climate: string;
  neighbourhood: string;
  landmark: string;
};

export const CITY_FACTS: Record<string, LocationFacts> = {
  Dublin: {
    population: "about 1.27 million in Dublin city and suburbs (CSO 2022)",
    climate: "mild, damp Atlantic influence with wet winters and sudden summer downpours",
    neighbourhood: "Dundrum, Swords, Tallaght, and older septic estates on the northside fringe",
    landmark: "Phoenix Park and the Dublin Mountains foothills",
  },
  Cork: {
    population: "roughly 222,000 in Cork city (CSO 2022)",
    climate: "humid maritime weather with steady rain that keeps soakaways busy",
    neighbourhood: "Ballincollig, Douglas, and harbour villages east of the city",
    landmark: "the English Market and the Lee valley",
  },
  Galway: {
    population: "near 85,000 in Galway city (CSO 2022)",
    climate: "frequent Atlantic showers and wind off Galway Bay",
    neighbourhood: "Salthill, Knocknacarra, and commuter pockets toward Oranmore",
    landmark: "Spanish Arch and the Claddagh waterfront",
  },
  Limerick: {
    population: "about 100,000 in Limerick city (CSO 2022)",
    climate: "Shannon estuary dampness with winter flooding risk on low plots",
    neighbourhood: "Castletroy, Raheen, and rural enclaves between motorways",
    landmark: "King John's Castle and the Curragower Falls",
  },
  Waterford: {
    population: "around 60,000 in Waterford city (CSO 2022)",
    climate: "southeast Ireland—somewhat drier than the west but still soakaway-sensitive",
    neighbourhood: "Ferrybank, Dunmore Road, and coastal cottages toward Tramore",
    landmark: "the Quays and Reginald's Tower",
  },
};

/** County facts keyed by county name without the "County " prefix. */
export const COUNTY_FACTS: Record<string, LocationFacts> = {
  Carlow: {
    population: "about 61,000 (CSO 2022)",
    climate: "Leinster rainfall with Barrow valley fog in winter",
    neighbourhood: "Tullow, Hacketstown, and farmlets off the N80",
    landmark: "Brownshill Dolmen",
  },
  Cavan: {
    population: "about 81,000 (CSO 2022)",
    climate: "lake-country damp soil that drains slowly in spring",
    neighbourhood: "Bailieborough, Virginia, and drumlin farmland",
    landmark: "Lough Oughter and Cloughoughter Castle",
  },
  Clare: {
    population: "about 127,000 (CSO 2022)",
    climate: "Atlantic spray on the west coast and boggy fields inland",
    neighbourhood: "Ennis, Shannon, and the Burren edge",
    landmark: "the Cliffs of Moher",
  },
  Cork: {
    population: "about 577,000 in County Cork (CSO 2022)",
    climate: "mild, wet south-coast winters",
    neighbourhood: "West Cork villages, Mallow, and harbour towns",
    landmark: "Blarney Castle and Cork Harbour",
  },
  Donegal: {
    population: "about 167,000 (CSO 2022)",
    climate: "exposed northerly winds and heavy hillside run-off",
    neighbourhood: "Letterkenny, Bundoran, and remote Atlantic lanes",
    landmark: "Slieve League cliffs",
  },
  Dublin: {
    population: "about 1.46 million in County Dublin (CSO 2022)",
    climate: "urban heat pockets plus coastal rain from Dublin Bay",
    neighbourhood: "Howth peninsula, Rathfarnham, and commuter belts in Fingal",
    landmark: "Howth Head and the Dublin Bay biosphere",
  },
  Galway: {
    population: "about 202,000 in County Galway (CSO 2022)",
    climate: "Connemara rain and boggy percolation zones",
    neighbourhood: "Tuam, Ballinasloe, and Connemara holiday homes",
    landmark: "Connemara National Park",
  },
  Kerry: {
    population: "about 156,000 (CSO 2022)",
    climate: "Gulf Stream mildness with mountain rainfall",
    neighbourhood: "Killarney, Dingle, and lakeside holdings",
    landmark: "Carrauntoohil and the Ring of Kerry",
  },
  Kildare: {
    population: "about 246,000 (CSO 2022)",
    climate: "central plains with clay that holds water after storms",
    neighbourhood: "Naas, Newbridge, and stud farms on deep plots",
    landmark: "the Curragh and Castletown House",
  },
  Kilkenny: {
    population: "about 103,000 (CSO 2022)",
    climate: "sunny-ish Leinster summers but saturated winter fields",
    neighbourhood: "Castlecomer, Thomastown, and Nore valley farms",
    landmark: "Kilkenny Castle",
  },
  Laois: {
    population: "about 91,000 (CSO 2022)",
    climate: "inland frost and spring thaw that tests older tanks",
    neighbourhood: "Portlaoise, Mountmellick, and cross-border lanes",
    landmark: "the Rock of Dunamase",
  },
  Leitrim: {
    population: "about 35,000 (CSO 2022)",
    climate: "wet drumlin country with high water tables",
    neighbourhood: "Carrick-on-Shannon, Manorhamilton, and lakeside cabins",
    landmark: "Lough Allen",
  },
  Limerick: {
    population: "about 205,000 in County Limerick (CSO 2022)",
    climate: "Shannon floodplain humidity",
    neighbourhood: "Newcastle West, Adare, and estuary villages",
    landmark: "the Hunt Museum and Adare Manor district",
  },
  Longford: {
    population: "about 46,000 (CSO 2022)",
    climate: "midland rain and slow-draining pasture",
    neighbourhood: "Granard, Edgeworthstown, and small holdings",
    landmark: "Corlea Trackway Visitor Centre",
  },
  Louth: {
    population: "about 139,000 (CSO 2022)",
    climate: "east-coast drizzle and coastal sand soils",
    neighbourhood: "Drogheda, Dundalk, and Cooley Peninsula farms",
    landmark: "the Boyne valley monuments",
  },
  Mayo: {
    population: "about 137,000 (CSO 2022)",
    climate: "wild Atlantic downpours and peat-heavy ground",
    neighbourhood: "Westport, Ballina, and Achill holiday homes",
    landmark: "Croagh Patrick",
  },
  Meath: {
    population: "about 220,000 (CSO 2022)",
    climate: "Boyne valley fog and commuter-belt clay",
    neighbourhood: "Navan, Ashbourne, and new estates on former farmland",
    landmark: "Newgrange and the Hill of Tara",
  },
  Monaghan: {
    population: "about 65,000 (CSO 2022)",
    climate: "border drumlins with heavy autumn rain",
    neighbourhood: "Clones, Castleblayney, and cross-border farms",
    landmark: "Rossmore Forest Park",
  },
  Offaly: {
    population: "about 82,000 (CSO 2022)",
    climate: "Bog of Allen dampness and cold inland winters",
    neighbourhood: "Tullamore, Birr, and Shannon-side plots",
    landmark: "Birr Castle and its telescope heritage",
  },
  Roscommon: {
    population: "about 69,000 (CSO 2022)",
    climate: "lough-lined counties with spring waterlogging",
    neighbourhood: "Boyle, Roscommon town, and lakeland retreats",
    landmark: "Lough Key Forest Park",
  },
  Sligo: {
    population: "about 70,000 (CSO 2022)",
    climate: "Benbulben catchment rain and fast hillside runoff",
    neighbourhood: "Strandhill, Enniscrone, and Benbulben foothills",
    landmark: "Benbulben and Yeats country",
  },
  Tipperary: {
    population: "about 167,000 (CSO 2022)",
    climate: "Golden Vale grassland with clay pans after storms",
    neighbourhood: "Clonmel, Nenagh, and Thurles hinterland",
    landmark: "the Rock of Cashel",
  },
  Waterford: {
    population: "about 127,000 in County Waterford (CSO 2022)",
    climate: "southeast showers and Copper Coast spray",
    neighbourhood: "Dungarvan, Lismore, and coastal one-off houses",
    landmark: "the Copper Coast UNESCO geopark",
  },
  Westmeath: {
    population: "about 96,000 (CSO 2022)",
    climate: "lake belt humidity around Lough Ree",
    neighbourhood: "Athlone, Mullingar, and lakeside sites",
    landmark: "Lough Ree and Belvedere House",
  },
  Wexford: {
    population: "about 163,000 (CSO 2022)",
    climate: "sunny southeast with coastal sand and holiday-home peaks",
    neighbourhood: "Gorey, Enniscorthy, and Wexford town fringe",
    landmark: "the Hook Lighthouse",
  },
  Wicklow: {
    population: "about 154,000 (CSO 2022)",
    climate: "mountain rainfall rushing into valley soakaways",
    neighbourhood: "Bray, Greystones, and upland Wicklow Way cottages",
    landmark: "Glendalough and the Wicklow Mountains",
  },
};

export function factsForPage(area: string, kind: "city" | "county"): LocationFacts | undefined {
  if (kind === "city") return CITY_FACTS[area];
  const name = area.replace(/^County /, "");
  return COUNTY_FACTS[name];
}
