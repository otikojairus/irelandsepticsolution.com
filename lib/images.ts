/**
 * Service photos in `public/images/`.
 * Septic / vacuum-truck / drainage imagery (Wikimedia Commons + LibreShot).
 * See public/images/ATTRIBUTION.md for licenses.
 */

export type ImageKey =
  | "hero-home"
  | "hero-service"
  | "hero-local"
  | "emptying"
  | "cleaning"
  | "pumping"
  | "maintenance"
  | "servicing"
  | "install"
  | "system-install"
  | "repair"
  | "system-repair"
  | "upgrade"
  | "replacement"
  | "pump-replacement"
  | "rural";

type Photo = { src: string; alt: string; caption: string; credit: string };

const photos: Record<ImageKey, Photo> = {
  "hero-home": {
    src: "/images/hero-home.webp",
    alt: "Concrete septic tank beside a rural property",
    caption: "Most Irish homes off mains sewer rely on a tank like this.",
    credit: "Wikideas1 / Wikimedia Commons (CC0)",
  },
  "hero-service": {
    src: "/images/hero-service.webp",
    alt: "Vacuum truck used to empty septic tanks",
    caption: "Tankers like this remove sludge from your tank.",
    credit: "CambridgeBayWeather / Wikimedia Commons (CC BY-SA 3.0)",
  },
  "hero-local": {
    src: "/images/hero-local.webp",
    alt: "Septic tank installation at ground level",
    caption: "Local visits cover access, lids, and soakaway checks.",
    credit: "Wikideas1 / Wikimedia Commons (CC0)",
  },
  emptying: {
    src: "/images/emptying.webp",
    alt: "Honey wagon vacuum truck pumping a septic tank",
    caption: "Emptying — vacuum truck removing waste from the tank.",
    credit: "CambridgeBayWeather / Wikimedia Commons (CC BY-SA 3.0)",
  },
  cleaning: {
    src: "/images/cleaning.webp",
    alt: "Drain and sewer cleaning equipment at work",
    caption: "Cleaning — clearing lines and buildup around the system.",
    credit: "Geograph UK / Wikimedia Commons",
  },
  pumping: {
    src: "/images/pumping.webp",
    alt: "Second vacuum truck at a septic pumping job",
    caption: "Pumping — desludging the tank on site.",
    credit: "CambridgeBayWeather / Wikimedia Commons (CC BY-SA 3.0)",
  },
  maintenance: {
    src: "/images/maintenance.webp",
    alt: "Septic tank with access covers for inspection",
    caption: "Maintenance — checking levels, lids, and soakaway health.",
    credit: "Wikideas1 / Wikimedia Commons (CC0)",
  },
  servicing: {
    src: "/images/maintenance.webp",
    alt: "Septic tank ready for a routine service visit",
    caption: "Servicing — scheduled care to avoid backups.",
    credit: "Wikideas1 / Wikimedia Commons (CC0)",
  },
  install: {
    src: "/images/install.webp",
    alt: "Diagram of a typical septic tank and drain field layout",
    caption: "Installation — tank, pipes, and percolation area.",
    credit: "Opioła Jerzy / Wikimedia Commons (CC BY-SA 4.0)",
  },
  "system-install": {
    src: "/images/system-install.webp",
    alt: "Vacuum sewage truck for wastewater systems",
    caption: "Full system work — tank plus drainage field.",
    credit: "Martin Vorel / LibreShot (CC0)",
  },
  repair: {
    src: "/images/repair.webp",
    alt: "Septic tank unit needing inspection or repair",
    caption: "Repair — fixing tanks, pipes, or failed components.",
    credit: "Wikideas1 / Wikimedia Commons (CC0)",
  },
  "system-repair": {
    src: "/images/system-repair.webp",
    alt: "Drain cleaning for blocked sewer lines",
    caption: "System repair — distribution lines and drainage.",
    credit: "Geograph UK / Wikimedia Commons",
  },
  upgrade: {
    src: "/images/upgrade.webp",
    alt: "Septic system layout diagram for upgrades",
    caption: "Upgrades — meeting modern percolation standards.",
    credit: "Opioła Jerzy / Wikimedia Commons (CC BY-SA 4.0)",
  },
  replacement: {
    src: "/images/install.webp",
    alt: "New septic tank system layout",
    caption: "Replacement — new tank and connected drainage.",
    credit: "Opioła Jerzy / Wikimedia Commons (CC BY-SA 4.0)",
  },
  "pump-replacement": {
    src: "/images/pump-replacement.webp",
    alt: "Vacuum truck at a pumping station visit",
    caption: "Pump replacement — chamber pumps and alarms.",
    credit: "CambridgeBayWeather / Wikimedia Commons (CC BY-SA 3.0)",
  },
  rural: {
    src: "/images/rural.webp",
    alt: "Rural septic tank beside a dwelling",
    caption: "Rural properties across Ireland.",
    credit: "Wikideas1 / Wikimedia Commons (CC0)",
  },
};

export function imageForServiceSlug(slug: string): ImageKey {
  let base = slug;
  if (base.includes("-county-")) base = base.split("-county-")[0]!;
  base = base.replace(/-(dublin|cork|galway|limerick|waterford)$/, "");

  if (base === "septic-tank-pump-replacement") return "pump-replacement";
  if (base === "septic-system-installation") return "system-install";
  if (base === "septic-system-repair") return "system-repair";
  if (base === "septic-tank-replacement") return "replacement";
  if (base === "septic-tank-upgrade") return "upgrade";
  if (base === "septic-tank-installation") return "install";
  if (base === "septic-tank-servicing") return "servicing";
  if (base === "septic-tank-repair") return "repair";
  if (base === "septic-tank-maintenance") return "maintenance";
  if (base === "septic-tank-pumping") return "pumping";
  if (base === "septic-tank-cleaning") return "cleaning";
  if (base === "septic-tank-emptying") return "emptying";

  return "rural";
}

export function getPhoto(key: ImageKey): Photo {
  return photos[key];
}
