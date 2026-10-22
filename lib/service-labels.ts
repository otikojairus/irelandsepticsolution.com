/** Display names for national service slugs (sheet 1). */
export const SERVICE_LABELS: Record<string, string> = {
  "septic-tank-emptying": "Septic tank emptying",
  "septic-tank-cleaning": "Septic tank cleaning",
  "septic-tank-pumping": "Septic tank pumping",
  "septic-tank-maintenance": "Septic tank maintenance",
  "septic-tank-upgrade": "Septic tank upgrade",
  "septic-tank-replacement": "Septic tank replacement",
  "septic-tank-servicing": "Septic tank servicing",
  "septic-tank-installation": "Septic tank installation",
  "septic-tank-pump-replacement": "Septic tank pump replacement",
  "septic-system-repair": "Septic system repair",
  "septic-system-installation": "Septic system installation",
  "septic-tank-repair": "Septic tank repair",
};

export function serviceLabelFromSlug(slug: string) {
  const base = slug.includes("-county-") ? slug.split("-county-")[0]! : slug;
  for (const city of ["dublin", "cork", "galway", "limerick", "waterford"]) {
    if (base.endsWith(`-${city}`)) {
      return SERVICE_LABELS[base.slice(0, -(city.length + 1))] ?? base.replace(/-/g, " ");
    }
  }
  return SERVICE_LABELS[base] ?? base.replace(/-/g, " ");
}
