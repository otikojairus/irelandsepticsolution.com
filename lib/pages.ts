export type PageKind = "national" | "city" | "county";

export type SeoPage = {
  id: number;
  title: string;
  slug: string;
  keyword: string;
  secondary: string[];
  area: string;
  priority: "Top Priority" | "High" | "Medium";
  kind: PageKind;
  volume?: number;
};

const row = (
  id: number,
  title: string,
  slug: string,
  keyword: string,
  secondary: string,
  area = "Ireland",
  priority: SeoPage["priority"] = "Medium",
  kind: PageKind = "city",
  volume?: number,
): SeoPage => ({
  id,
  title,
  slug,
  keyword,
  secondary: secondary ? secondary.split("|").map((s) => s.trim()).filter(Boolean) : [],
  area,
  priority,
  kind,
  volume,
});

export const PILLAR_SLUG = "septic-tank-emptying";

export const PAGES: SeoPage[] = [
  row(1, "Septic Tank Emptying Ireland | Call Now", "septic-tank-emptying", "septic tank emptying", "septic tank emptying near me", "Ireland (National)", "Top Priority", "national", 700),
  row(2, "Septic Tank Cleaning Ireland | Call Now", "septic-tank-cleaning", "septic tank cleaning", "", "Ireland (National)", "High", "national", 200),
  row(3, "Septic Tank Pumping Ireland | Call Now", "septic-tank-pumping", "septic tank pumping", "", "Ireland (National)", "High", "national", 150),
  row(4, "Septic Tank Maintenance Ireland | Call Now", "septic-tank-maintenance", "septic tank maintenance", "", "Ireland (National)", "High", "national", 150),
  row(5, "Septic Tank Upgrade Ireland | Call Now", "septic-tank-upgrade", "septic tank upgrade", "", "Ireland (National)", "Medium", "national", 100),
  row(6, "Septic Tank Replacement Ireland | Call Now", "septic-tank-replacement", "septic tank replacement", "", "Ireland (National)", "Medium", "national", 40),
  row(7, "Septic Tank Servicing Ireland | Call Now", "septic-tank-servicing", "septic tank servicing", "", "Ireland (National)", "Medium", "national", 30),
  row(8, "Septic Tank Installation Ireland | Call Now", "septic-tank-installation", "septic tank installation", "septic tank installation near me", "Ireland (National)", "Medium", "national", 20),
  row(9, "Septic Tank Pump Replacement Ireland | Call Now", "septic-tank-pump-replacement", "septic tank pump replacement", "", "Ireland (National)", "Medium", "national", 20),
  row(10, "Septic System Repair Ireland | Call Now", "septic-system-repair", "septic system repair", "", "Ireland (National)", "Medium", "national", 20),
  row(11, "Septic System Installation Ireland | Call Now", "septic-system-installation", "septic system installation", "", "Ireland (National)", "Medium", "national", 10),
  row(12, "Septic Tank Repair Ireland | Call Now", "septic-tank-repair", "septic tank repair", "septic tank repair near me", "Ireland (National)", "Medium", "national", 10),
  row(13, "Septic Tank Emptying Dublin | Call Now", "septic-tank-emptying-dublin", "septic tank emptying", "", "Dublin", "Medium", "city"),
  row(14, "Septic Tank Cleaning Dublin | Call Now", "septic-tank-cleaning-dublin", "septic tank cleaning", "", "Dublin", "Medium", "city"),
  row(15, "Septic Tank Pumping Dublin | Call Now", "septic-tank-pumping-dublin", "septic tank pumping", "", "Dublin", "Medium", "city"),
  row(16, "Septic Tank Maintenance Dublin | Call Now", "septic-tank-maintenance-dublin", "septic tank maintenance", "", "Dublin", "Medium", "city"),
  row(17, "Septic Tank Upgrade Dublin | Call Now", "septic-tank-upgrade-dublin", "septic tank upgrade", "", "Dublin", "Medium", "city"),
  row(18, "Septic Tank Replacement Dublin | Call Now", "septic-tank-replacement-dublin", "septic tank replacement", "", "Dublin", "Medium", "city"),
  row(19, "Septic Tank Servicing Dublin | Call Now", "septic-tank-servicing-dublin", "septic tank servicing", "", "Dublin", "Medium", "city"),
  row(20, "Septic Tank Installation Dublin | Call Now", "septic-tank-installation-dublin", "septic tank installation", "", "Dublin", "Medium", "city"),
  row(21, "Septic Tank Pump Replacement Dublin | Call Now", "septic-tank-pump-replacement-dublin", "septic tank pump replacement", "", "Dublin", "Medium", "city"),
  row(22, "Septic System Repair Dublin | Call Now", "septic-system-repair-dublin", "septic system repair", "", "Dublin", "Medium", "city"),
  row(23, "Septic System Installation Dublin | Call Now", "septic-system-installation-dublin", "septic system installation", "", "Dublin", "Medium", "city"),
  row(24, "Septic Tank Repair Dublin | Call Now", "septic-tank-repair-dublin", "septic tank repair", "", "Dublin", "Medium", "city"),
  row(25, "Septic Tank Emptying Cork | Call Now", "septic-tank-emptying-cork", "septic tank emptying", "", "Cork", "Medium", "city"),
  row(26, "Septic Tank Cleaning Cork | Call Now", "septic-tank-cleaning-cork", "septic tank cleaning", "", "Cork", "Medium", "city"),
  row(27, "Septic Tank Pumping Cork | Call Now", "septic-tank-pumping-cork", "septic tank pumping", "", "Cork", "Medium", "city"),
  row(28, "Septic Tank Maintenance Cork | Call Now", "septic-tank-maintenance-cork", "septic tank maintenance", "", "Cork", "Medium", "city"),
  row(29, "Septic Tank Upgrade Cork | Call Now", "septic-tank-upgrade-cork", "septic tank upgrade", "", "Cork", "Medium", "city"),
  row(30, "Septic Tank Replacement Cork | Call Now", "septic-tank-replacement-cork", "septic tank replacement", "", "Cork", "Medium", "city"),
  row(31, "Septic Tank Servicing Cork | Call Now", "septic-tank-servicing-cork", "septic tank servicing", "", "Cork", "Medium", "city"),
  row(32, "Septic Tank Installation Cork | Call Now", "septic-tank-installation-cork", "septic tank installation", "", "Cork", "Medium", "city"),
  row(33, "Septic Tank Pump Replacement Cork | Call Now", "septic-tank-pump-replacement-cork", "septic tank pump replacement", "", "Cork", "Medium", "city"),
  row(34, "Septic System Repair Cork | Call Now", "septic-system-repair-cork", "septic system repair", "", "Cork", "Medium", "city"),
  row(35, "Septic System Installation Cork | Call Now", "septic-system-installation-cork", "septic system installation", "", "Cork", "Medium", "city"),
  row(36, "Septic Tank Repair Cork | Call Now", "septic-tank-repair-cork", "septic tank repair", "", "Cork", "Medium", "city"),
  row(37, "Septic Tank Emptying Galway | Call Now", "septic-tank-emptying-galway", "septic tank emptying", "", "Galway", "Medium", "city"),
  row(38, "Septic Tank Cleaning Galway | Call Now", "septic-tank-cleaning-galway", "septic tank cleaning", "", "Galway", "Medium", "city"),
  row(39, "Septic Tank Pumping Galway | Call Now", "septic-tank-pumping-galway", "septic tank pumping", "", "Galway", "Medium", "city"),
  row(40, "Septic Tank Maintenance Galway | Call Now", "septic-tank-maintenance-galway", "septic tank maintenance", "", "Galway", "Medium", "city"),
  row(41, "Septic Tank Upgrade Galway | Call Now", "septic-tank-upgrade-galway", "septic tank upgrade", "", "Galway", "Medium", "city"),
  row(42, "Septic Tank Replacement Galway | Call Now", "septic-tank-replacement-galway", "septic tank replacement", "", "Galway", "Medium", "city"),
  row(43, "Septic Tank Servicing Galway | Call Now", "septic-tank-servicing-galway", "septic tank servicing", "", "Galway", "Medium", "city"),
  row(44, "Septic Tank Installation Galway | Call Now", "septic-tank-installation-galway", "septic tank installation", "", "Galway", "Medium", "city"),
  row(45, "Septic Tank Pump Replacement Galway | Call Now", "septic-tank-pump-replacement-galway", "septic tank pump replacement", "", "Galway", "Medium", "city"),
  row(46, "Septic System Repair Galway | Call Now", "septic-system-repair-galway", "septic system repair", "", "Galway", "Medium", "city"),
  row(47, "Septic System Installation Galway | Call Now", "septic-system-installation-galway", "septic system installation", "", "Galway", "Medium", "city"),
  row(48, "Septic Tank Repair Galway | Call Now", "septic-tank-repair-galway", "septic tank repair", "", "Galway", "Medium", "city"),
  row(49, "Septic Tank Emptying Limerick | Call Now", "septic-tank-emptying-limerick", "septic tank emptying", "", "Limerick", "Medium", "city"),
  row(50, "Septic Tank Cleaning Limerick | Call Now", "septic-tank-cleaning-limerick", "septic tank cleaning", "", "Limerick", "Medium", "city"),
  row(51, "Septic Tank Pumping Limerick | Call Now", "septic-tank-pumping-limerick", "septic tank pumping", "", "Limerick", "Medium", "city"),
  row(52, "Septic Tank Maintenance Limerick | Call Now", "septic-tank-maintenance-limerick", "septic tank maintenance", "", "Limerick", "Medium", "city"),
  row(53, "Septic Tank Upgrade Limerick | Call Now", "septic-tank-upgrade-limerick", "septic tank upgrade", "", "Limerick", "Medium", "city"),
  row(54, "Septic Tank Replacement Limerick | Call Now", "septic-tank-replacement-limerick", "septic tank replacement", "", "Limerick", "Medium", "city"),
  row(55, "Septic Tank Servicing Limerick | Call Now", "septic-tank-servicing-limerick", "septic tank servicing", "", "Limerick", "Medium", "city"),
  row(56, "Septic Tank Installation Limerick | Call Now", "septic-tank-installation-limerick", "septic tank installation", "", "Limerick", "Medium", "city"),
  row(57, "Septic Tank Pump Replacement Limerick | Call Now", "septic-tank-pump-replacement-limerick", "septic tank pump replacement", "", "Limerick", "Medium", "city"),
  row(58, "Septic System Repair Limerick | Call Now", "septic-system-repair-limerick", "septic system repair", "", "Limerick", "Medium", "city"),
  row(59, "Septic System Installation Limerick | Call Now", "septic-system-installation-limerick", "septic system installation", "", "Limerick", "Medium", "city"),
  row(60, "Septic Tank Repair Limerick | Call Now", "septic-tank-repair-limerick", "septic tank repair", "", "Limerick", "Medium", "city"),
  row(61, "Septic Tank Emptying Waterford | Call Now", "septic-tank-emptying-waterford", "septic tank emptying", "", "Waterford", "Medium", "city"),
  row(62, "Septic Tank Cleaning Waterford | Call Now", "septic-tank-cleaning-waterford", "septic tank cleaning", "", "Waterford", "Medium", "city"),
  row(63, "Septic Tank Pumping Waterford | Call Now", "septic-tank-pumping-waterford", "septic tank pumping", "", "Waterford", "Medium", "city"),
  row(64, "Septic Tank Maintenance Waterford | Call Now", "septic-tank-maintenance-waterford", "septic tank maintenance", "", "Waterford", "Medium", "city"),
  row(65, "Septic Tank Upgrade Waterford | Call Now", "septic-tank-upgrade-waterford", "septic tank upgrade", "", "Waterford", "Medium", "city"),
  row(66, "Septic Tank Replacement Waterford | Call Now", "septic-tank-replacement-waterford", "septic tank replacement", "", "Waterford", "Medium", "city"),
  row(67, "Septic Tank Servicing Waterford | Call Now", "septic-tank-servicing-waterford", "septic tank servicing", "", "Waterford", "Medium", "city"),
  row(68, "Septic Tank Installation Waterford | Call Now", "septic-tank-installation-waterford", "septic tank installation", "", "Waterford", "Medium", "city"),
  row(69, "Septic Tank Pump Replacement Waterford | Call Now", "septic-tank-pump-replacement-waterford", "septic tank pump replacement", "", "Waterford", "Medium", "city"),
  row(70, "Septic System Repair Waterford | Call Now", "septic-system-repair-waterford", "septic system repair", "", "Waterford", "Medium", "city"),
  row(71, "Septic System Installation Waterford | Call Now", "septic-system-installation-waterford", "septic system installation", "", "Waterford", "Medium", "city"),
  row(72, "Septic Tank Repair Waterford | Call Now", "septic-tank-repair-waterford", "septic tank repair", "", "Waterford", "Medium", "city"),
  row(73, "Septic Tank Emptying County Carlow | Call Now", "septic-tank-emptying-county-carlow", "septic tank emptying", "", "County Carlow", "Medium", "county"),
  row(74, "Septic Tank Emptying County Cavan | Call Now", "septic-tank-emptying-county-cavan", "septic tank emptying", "", "County Cavan", "Medium", "county"),
  row(75, "Septic Tank Emptying County Clare | Call Now", "septic-tank-emptying-county-clare", "septic tank emptying", "", "County Clare", "Medium", "county"),
  row(76, "Septic Tank Emptying County Cork | Call Now", "septic-tank-emptying-county-cork", "septic tank emptying", "", "County Cork", "Medium", "county"),
  row(77, "Septic Tank Emptying County Donegal | Call Now", "septic-tank-emptying-county-donegal", "septic tank emptying", "", "County Donegal", "Medium", "county"),
  row(78, "Septic Tank Emptying County Dublin | Call Now", "septic-tank-emptying-county-dublin", "septic tank emptying", "", "County Dublin", "Medium", "county"),
  row(79, "Septic Tank Emptying County Galway | Call Now", "septic-tank-emptying-county-galway", "septic tank emptying", "", "County Galway", "Medium", "county"),
  row(80, "Septic Tank Emptying County Kerry | Call Now", "septic-tank-emptying-county-kerry", "septic tank emptying", "", "County Kerry", "Medium", "county"),
  row(81, "Septic Tank Emptying County Kildare | Call Now", "septic-tank-emptying-county-kildare", "septic tank emptying", "", "County Kildare", "Medium", "county"),
  row(82, "Septic Tank Emptying County Kilkenny | Call Now", "septic-tank-emptying-county-kilkenny", "septic tank emptying", "", "County Kilkenny", "Medium", "county"),
  row(83, "Septic Tank Emptying County Laois | Call Now", "septic-tank-emptying-county-laois", "septic tank emptying", "", "County Laois", "Medium", "county"),
  row(84, "Septic Tank Emptying County Leitrim | Call Now", "septic-tank-emptying-county-leitrim", "septic tank emptying", "", "County Leitrim", "Medium", "county"),
  row(85, "Septic Tank Emptying County Limerick | Call Now", "septic-tank-emptying-county-limerick", "septic tank emptying", "", "County Limerick", "Medium", "county"),
  row(86, "Septic Tank Emptying County Longford | Call Now", "septic-tank-emptying-county-longford", "septic tank emptying", "", "County Longford", "Medium", "county"),
  row(87, "Septic Tank Emptying County Louth | Call Now", "septic-tank-emptying-county-louth", "septic tank emptying", "", "County Louth", "Medium", "county"),
  row(88, "Septic Tank Emptying County Mayo | Call Now", "septic-tank-emptying-county-mayo", "septic tank emptying", "", "County Mayo", "Medium", "county"),
  row(89, "Septic Tank Emptying County Meath | Call Now", "septic-tank-emptying-county-meath", "septic tank emptying", "", "County Meath", "Medium", "county"),
  row(90, "Septic Tank Emptying County Monaghan | Call Now", "septic-tank-emptying-county-monaghan", "septic tank emptying", "", "County Monaghan", "Medium", "county"),
  row(91, "Septic Tank Emptying County Offaly | Call Now", "septic-tank-emptying-county-offaly", "septic tank emptying", "", "County Offaly", "Medium", "county"),
  row(92, "Septic Tank Emptying County Roscommon | Call Now", "septic-tank-emptying-county-roscommon", "septic tank emptying", "", "County Roscommon", "Medium", "county"),
  row(93, "Septic Tank Emptying County Sligo | Call Now", "septic-tank-emptying-county-sligo", "septic tank emptying", "", "County Sligo", "Medium", "county"),
  row(94, "Septic Tank Emptying County Tipperary | Call Now", "septic-tank-emptying-county-tipperary", "septic tank emptying", "", "County Tipperary", "Medium", "county"),
  row(95, "Septic Tank Emptying County Waterford | Call Now", "septic-tank-emptying-county-waterford", "septic tank emptying", "", "County Waterford", "Medium", "county"),
  row(96, "Septic Tank Emptying County Westmeath | Call Now", "septic-tank-emptying-county-westmeath", "septic tank emptying", "", "County Westmeath", "Medium", "county"),
  row(97, "Septic Tank Emptying County Wexford | Call Now", "septic-tank-emptying-county-wexford", "septic tank emptying", "", "County Wexford", "Medium", "county"),
  row(98, "Septic Tank Emptying County Wicklow | Call Now", "septic-tank-emptying-county-wicklow", "septic tank emptying", "", "County Wicklow", "Medium", "county"),
  row(99, "Septic Tank Installation County Carlow | Call Now", "septic-tank-installation-county-carlow", "septic tank installation", "", "County Carlow", "Medium", "county"),
  row(100, "Septic Tank Installation County Cavan | Call Now", "septic-tank-installation-county-cavan", "septic tank installation", "", "County Cavan", "Medium", "county"),
  row(101, "Septic Tank Installation County Clare | Call Now", "septic-tank-installation-county-clare", "septic tank installation", "", "County Clare", "Medium", "county"),
  row(102, "Septic Tank Installation County Cork | Call Now", "septic-tank-installation-county-cork", "septic tank installation", "", "County Cork", "Medium", "county"),
  row(103, "Septic Tank Installation County Donegal | Call Now", "septic-tank-installation-county-donegal", "septic tank installation", "", "County Donegal", "Medium", "county"),
  row(104, "Septic Tank Installation County Dublin | Call Now", "septic-tank-installation-county-dublin", "septic tank installation", "", "County Dublin", "Medium", "county"),
  row(105, "Septic Tank Installation County Galway | Call Now", "septic-tank-installation-county-galway", "septic tank installation", "", "County Galway", "Medium", "county"),
  row(106, "Septic Tank Installation County Kerry | Call Now", "septic-tank-installation-county-kerry", "septic tank installation", "", "County Kerry", "Medium", "county"),
  row(107, "Septic Tank Installation County Kildare | Call Now", "septic-tank-installation-county-kildare", "septic tank installation", "", "County Kildare", "Medium", "county"),
  row(108, "Septic Tank Installation County Kilkenny | Call Now", "septic-tank-installation-county-kilkenny", "septic tank installation", "", "County Kilkenny", "Medium", "county"),
  row(109, "Septic Tank Installation County Laois | Call Now", "septic-tank-installation-county-laois", "septic tank installation", "", "County Laois", "Medium", "county"),
  row(110, "Septic Tank Installation County Leitrim | Call Now", "septic-tank-installation-county-leitrim", "septic tank installation", "", "County Leitrim", "Medium", "county"),
  row(111, "Septic Tank Installation County Limerick | Call Now", "septic-tank-installation-county-limerick", "septic tank installation", "", "County Limerick", "Medium", "county"),
  row(112, "Septic Tank Installation County Longford | Call Now", "septic-tank-installation-county-longford", "septic tank installation", "", "County Longford", "Medium", "county"),
  row(113, "Septic Tank Installation County Louth | Call Now", "septic-tank-installation-county-louth", "septic tank installation", "", "County Louth", "Medium", "county"),
  row(114, "Septic Tank Installation County Mayo | Call Now", "septic-tank-installation-county-mayo", "septic tank installation", "", "County Mayo", "Medium", "county"),
  row(115, "Septic Tank Installation County Meath | Call Now", "septic-tank-installation-county-meath", "septic tank installation", "", "County Meath", "Medium", "county"),
  row(116, "Septic Tank Installation County Monaghan | Call Now", "septic-tank-installation-county-monaghan", "septic tank installation", "", "County Monaghan", "Medium", "county"),
  row(117, "Septic Tank Installation County Offaly | Call Now", "septic-tank-installation-county-offaly", "septic tank installation", "", "County Offaly", "Medium", "county"),
  row(118, "Septic Tank Installation County Roscommon | Call Now", "septic-tank-installation-county-roscommon", "septic tank installation", "", "County Roscommon", "Medium", "county"),
  row(119, "Septic Tank Installation County Sligo | Call Now", "septic-tank-installation-county-sligo", "septic tank installation", "", "County Sligo", "Medium", "county"),
  row(120, "Septic Tank Installation County Tipperary | Call Now", "septic-tank-installation-county-tipperary", "septic tank installation", "", "County Tipperary", "Medium", "county"),
  row(121, "Septic Tank Installation County Waterford | Call Now", "septic-tank-installation-county-waterford", "septic tank installation", "", "County Waterford", "Medium", "county"),
  row(122, "Septic Tank Installation County Westmeath | Call Now", "septic-tank-installation-county-westmeath", "septic tank installation", "", "County Westmeath", "Medium", "county"),
  row(123, "Septic Tank Installation County Wexford | Call Now", "septic-tank-installation-county-wexford", "septic tank installation", "", "County Wexford", "Medium", "county"),
  row(124, "Septic Tank Installation County Wicklow | Call Now", "septic-tank-installation-county-wicklow", "septic tank installation", "", "County Wicklow", "Medium", "county"),
  row(125, "Septic Tank Replacement County Carlow | Call Now", "septic-tank-replacement-county-carlow", "septic tank replacement", "", "County Carlow", "Medium", "county"),
  row(126, "Septic Tank Replacement County Cavan | Call Now", "septic-tank-replacement-county-cavan", "septic tank replacement", "", "County Cavan", "Medium", "county"),
  row(127, "Septic Tank Replacement County Clare | Call Now", "septic-tank-replacement-county-clare", "septic tank replacement", "", "County Clare", "Medium", "county"),
  row(128, "Septic Tank Replacement County Cork | Call Now", "septic-tank-replacement-county-cork", "septic tank replacement", "", "County Cork", "Medium", "county"),
  row(129, "Septic Tank Replacement County Donegal | Call Now", "septic-tank-replacement-county-donegal", "septic tank replacement", "", "County Donegal", "Medium", "county"),
  row(130, "Septic Tank Replacement County Dublin | Call Now", "septic-tank-replacement-county-dublin", "septic tank replacement", "", "County Dublin", "Medium", "county"),
  row(131, "Septic Tank Replacement County Galway | Call Now", "septic-tank-replacement-county-galway", "septic tank replacement", "", "County Galway", "Medium", "county"),
  row(132, "Septic Tank Replacement County Kerry | Call Now", "septic-tank-replacement-county-kerry", "septic tank replacement", "", "County Kerry", "Medium", "county"),
  row(133, "Septic Tank Replacement County Kildare | Call Now", "septic-tank-replacement-county-kildare", "septic tank replacement", "", "County Kildare", "Medium", "county"),
  row(134, "Septic Tank Replacement County Kilkenny | Call Now", "septic-tank-replacement-county-kilkenny", "septic tank replacement", "", "County Kilkenny", "Medium", "county"),
  row(135, "Septic Tank Replacement County Laois | Call Now", "septic-tank-replacement-county-laois", "septic tank replacement", "", "County Laois", "Medium", "county"),
  row(136, "Septic Tank Replacement County Leitrim | Call Now", "septic-tank-replacement-county-leitrim", "septic tank replacement", "", "County Leitrim", "Medium", "county"),
  row(137, "Septic Tank Replacement County Limerick | Call Now", "septic-tank-replacement-county-limerick", "septic tank replacement", "", "County Limerick", "Medium", "county"),
  row(138, "Septic Tank Replacement County Longford | Call Now", "septic-tank-replacement-county-longford", "septic tank replacement", "", "County Longford", "Medium", "county"),
  row(139, "Septic Tank Replacement County Louth | Call Now", "septic-tank-replacement-county-louth", "septic tank replacement", "", "County Louth", "Medium", "county"),
  row(140, "Septic Tank Replacement County Mayo | Call Now", "septic-tank-replacement-county-mayo", "septic tank replacement", "", "County Mayo", "Medium", "county"),
  row(141, "Septic Tank Replacement County Meath | Call Now", "septic-tank-replacement-county-meath", "septic tank replacement", "", "County Meath", "Medium", "county"),
  row(142, "Septic Tank Replacement County Monaghan | Call Now", "septic-tank-replacement-county-monaghan", "septic tank replacement", "", "County Monaghan", "Medium", "county"),
  row(143, "Septic Tank Replacement County Offaly | Call Now", "septic-tank-replacement-county-offaly", "septic tank replacement", "", "County Offaly", "Medium", "county"),
  row(144, "Septic Tank Replacement County Roscommon | Call Now", "septic-tank-replacement-county-roscommon", "septic tank replacement", "", "County Roscommon", "Medium", "county"),
  row(145, "Septic Tank Replacement County Sligo | Call Now", "septic-tank-replacement-county-sligo", "septic tank replacement", "", "County Sligo", "Medium", "county"),
  row(146, "Septic Tank Replacement County Tipperary | Call Now", "septic-tank-replacement-county-tipperary", "septic tank replacement", "", "County Tipperary", "Medium", "county"),
  row(147, "Septic Tank Replacement County Waterford | Call Now", "septic-tank-replacement-county-waterford", "septic tank replacement", "", "County Waterford", "Medium", "county"),
  row(148, "Septic Tank Replacement County Westmeath | Call Now", "septic-tank-replacement-county-westmeath", "septic tank replacement", "", "County Westmeath", "Medium", "county"),
  row(149, "Septic Tank Replacement County Wexford | Call Now", "septic-tank-replacement-county-wexford", "septic tank replacement", "", "County Wexford", "Medium", "county"),
  row(150, "Septic Tank Replacement County Wicklow | Call Now", "septic-tank-replacement-county-wicklow", "septic tank replacement", "", "County Wicklow", "Medium", "county"),
  row(151, "Septic Tank Repair County Carlow | Call Now", "septic-tank-repair-county-carlow", "septic tank repair", "", "County Carlow", "Medium", "county"),
  row(152, "Septic Tank Repair County Cavan | Call Now", "septic-tank-repair-county-cavan", "septic tank repair", "", "County Cavan", "Medium", "county"),
  row(153, "Septic Tank Repair County Clare | Call Now", "septic-tank-repair-county-clare", "septic tank repair", "", "County Clare", "Medium", "county"),
  row(154, "Septic Tank Repair County Cork | Call Now", "septic-tank-repair-county-cork", "septic tank repair", "", "County Cork", "Medium", "county"),
  row(155, "Septic Tank Repair County Donegal | Call Now", "septic-tank-repair-county-donegal", "septic tank repair", "", "County Donegal", "Medium", "county"),
  row(156, "Septic Tank Repair County Dublin | Call Now", "septic-tank-repair-county-dublin", "septic tank repair", "", "County Dublin", "Medium", "county"),
  row(157, "Septic Tank Repair County Galway | Call Now", "septic-tank-repair-county-galway", "septic tank repair", "", "County Galway", "Medium", "county"),
  row(158, "Septic Tank Repair County Kerry | Call Now", "septic-tank-repair-county-kerry", "septic tank repair", "", "County Kerry", "Medium", "county"),
  row(159, "Septic Tank Repair County Kildare | Call Now", "septic-tank-repair-county-kildare", "septic tank repair", "", "County Kildare", "Medium", "county"),
  row(160, "Septic Tank Repair County Kilkenny | Call Now", "septic-tank-repair-county-kilkenny", "septic tank repair", "", "County Kilkenny", "Medium", "county"),
  row(161, "Septic Tank Repair County Laois | Call Now", "septic-tank-repair-county-laois", "septic tank repair", "", "County Laois", "Medium", "county"),
  row(162, "Septic Tank Repair County Leitrim | Call Now", "septic-tank-repair-county-leitrim", "septic tank repair", "", "County Leitrim", "Medium", "county"),
  row(163, "Septic Tank Repair County Limerick | Call Now", "septic-tank-repair-county-limerick", "septic tank repair", "", "County Limerick", "Medium", "county"),
  row(164, "Septic Tank Repair County Longford | Call Now", "septic-tank-repair-county-longford", "septic tank repair", "", "County Longford", "Medium", "county"),
  row(165, "Septic Tank Repair County Louth | Call Now", "septic-tank-repair-county-louth", "septic tank repair", "", "County Louth", "Medium", "county"),
  row(166, "Septic Tank Repair County Mayo | Call Now", "septic-tank-repair-county-mayo", "septic tank repair", "", "County Mayo", "Medium", "county"),
  row(167, "Septic Tank Repair County Meath | Call Now", "septic-tank-repair-county-meath", "septic tank repair", "", "County Meath", "Medium", "county"),
  row(168, "Septic Tank Repair County Monaghan | Call Now", "septic-tank-repair-county-monaghan", "septic tank repair", "", "County Monaghan", "Medium", "county"),
  row(169, "Septic Tank Repair County Offaly | Call Now", "septic-tank-repair-county-offaly", "septic tank repair", "", "County Offaly", "Medium", "county"),
  row(170, "Septic Tank Repair County Roscommon | Call Now", "septic-tank-repair-county-roscommon", "septic tank repair", "", "County Roscommon", "Medium", "county"),
  row(171, "Septic Tank Repair County Sligo | Call Now", "septic-tank-repair-county-sligo", "septic tank repair", "", "County Sligo", "Medium", "county"),
  row(172, "Septic Tank Repair County Tipperary | Call Now", "septic-tank-repair-county-tipperary", "septic tank repair", "", "County Tipperary", "Medium", "county"),
  row(173, "Septic Tank Repair County Waterford | Call Now", "septic-tank-repair-county-waterford", "septic tank repair", "", "County Waterford", "Medium", "county"),
  row(174, "Septic Tank Repair County Westmeath | Call Now", "septic-tank-repair-county-westmeath", "septic tank repair", "", "County Westmeath", "Medium", "county"),
  row(175, "Septic Tank Repair County Wexford | Call Now", "septic-tank-repair-county-wexford", "septic tank repair", "", "County Wexford", "Medium", "county"),
  row(176, "Septic Tank Repair County Wicklow | Call Now", "septic-tank-repair-county-wicklow", "septic tank repair", "", "County Wicklow", "Medium", "county"),
];

export const NATIONAL_PAGES = PAGES.filter((page) => page.kind === "national");
export const CITY_PAGES = PAGES.filter((page) => page.kind === "city");
export const COUNTY_PAGES = PAGES.filter((page) => page.kind === "county");

const PHONE_DISPLAY_DEFAULT = "+18889710910";
const PHONE_E164_DEFAULT = "+18889710910";

function isPlaceholderPhone(value?: string) {
  return !value || /x{2,}/i.test(value) || value.includes("XXX");
}

export const PHONE_DISPLAY = isPlaceholderPhone(process.env.NEXT_PUBLIC_PHONE_DISPLAY)
  ? PHONE_DISPLAY_DEFAULT
  : process.env.NEXT_PUBLIC_PHONE_DISPLAY!;
export const PHONE_E164 = isPlaceholderPhone(process.env.NEXT_PUBLIC_PHONE_E164)
  ? PHONE_E164_DEFAULT
  : process.env.NEXT_PUBLIC_PHONE_E164!;
export const SITE_NAME = "Ireland Septic Solutions";

export function getPage(slug: string) {
  return PAGES.find((page) => page.slug === slug);
}

export function cleanTitle(title: string) {
  return title.split("|")[0].trim();
}

export function locationName(page: SeoPage) {
  if (page.area.startsWith("Ireland")) return "Ireland";
  if (page.area.startsWith("County ")) return page.area.replace("County ", "");
  return page.area;
}

export { pageLinkLabel as linkLabelFor } from "./link-labels";

export function blurbFor(page: SeoPage) {
  const place = locationName(page);
  if (page.kind === "city") {
    return `Rural one-offs and busy suburbs in ${place}—we schedule tankers with access notes up front.`;
  }
  if (page.kind === "county") {
    return `Farmsteads, holiday homes, and villages across ${place}—same number, local routing.`;
  }
  const blurbs: Record<string, string> = {
    "septic-tank-emptying": "Full desludge visits with lids located and levels checked before we leave.",
    "septic-tank-cleaning": "Wash-down and inspection when odours or slow drains suggest buildup.",
    "septic-tank-pumping": "Pump-out service sized to your tank and soakaway condition.",
    "septic-tank-maintenance": "Scheduled care to avoid winter backups and EPA inspection surprises.",
    "septic-tank-repair": "Baffles, pipes, alarms, and pumps—urgent when waste surfaces.",
  };
  return blurbs[page.slug] ?? "Matched to your site, tank type, and timeline.";
}

export function eyebrowFor(page: SeoPage) {
  if (page.kind === "city") return `${page.area} · Republic of Ireland`;
  if (page.kind === "county") return page.area;
  if (page.slug === PILLAR_SLUG) return "National dispatch";
  return "Ireland-wide";
}

export function absoluteUrl(path = "") {
  const root = process.env.NEXT_PUBLIC_SITE_URL || "https://irelandsepticsolutions.com";
  return `${root.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export function serviceBaseSlug(slug: string) {
  for (const city of ["dublin", "cork", "galway", "limerick", "waterford"]) {
    if (slug.endsWith(`-${city}`)) return slug.slice(0, -(city.length + 1));
  }
  if (slug.includes("-county-")) {
    return slug.split("-county-")[0];
  }
  return slug;
}

