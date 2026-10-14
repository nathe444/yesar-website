export const tradingNav = [
  { href: "#about", label: "About" },
  { href: "#import", label: "Import" },
  { href: "#export", label: "Export" },
  { href: "#markets", label: "Markets" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
] as const;

export const tradingStats = [
  { value: "35+", label: "YEARS OF OPERATION" },
  { value: "100+", label: "PROJECTS COMPLETED" },
  { value: "5+", label: "SECTORS INVOLVED IN" },
  { value: "6+", label: "REGIONS REACHED" },
] as const;

export const tradingImports = [
  {
    category: "CATEGORY 01",
    title: "Construction Materials",
    image: "/trading/1c6de.png",
    wide: false,
  },
  {
    category: "CATEGORY 02",
    title: "Machinery & Equipment",
    image: "/trading/a7d9b.png",
    wide: false,
  },
  {
    category: "CATEGORY 03",
    title: "Consumer Goods",
    image: "/trading/8b42c.png",
    wide: false,
  },
  {
    category: "CATEGORY 04",
    title: "Agricultural Products",
    image: "/trading/2b37b.png",
    wide: true,
  },
] as const;

export const tradingExports = [
  {
    category: "CATEGORY 01",
    title: "Coffee & Agricultural Products",
    image: "/trading/56e5b.png",
  },
  {
    category: "CATEGORY 02",
    title: "Textiles & Garments",
    image: "/trading/e6fb6.png",
  },
  {
    category: "CATEGORY 03",
    title: "Minerals & Raw Materials",
    image: "/trading/d7242.png",
  },
] as const;

export const tradingRegions = [
  "East Africa",
  "Middle East",
  "South Asia",
  "East Africa",
  "Europe",
  "East Asia",
] as const;

export const tradingReasons = [
  {
    index: "01",
    title: "Established Network",
    body: "Long-standing supplier and buyer relationships across multiple regions.",
  },
  {
    index: "02",
    title: "Reliable Logistics",
    body: "Proven project management systems that keep timelines predictable.",
  },
  {
    index: "03",
    title: "Quality Assurance",
    body: "The financial and operational strength of Yesar Group behind every deal.",
  },
  {
    index: "04",
    title: "Group-Backed Stability",
    body: "Licensed engineers and skilled crews with decades of combined field experience.",
  },
] as const;

export const tradingPartners = [
  { src: "/trading/319b0.svg", width: 58, height: 58 },
  { src: "/trading/e4cc3.svg", width: 62.573, height: 60.126 },
  { src: "/trading/15da1.svg", width: 60, height: 61 },
  { src: "/trading/f20d6.svg", width: 60.066, height: 60.066 },
  { src: "/trading/3b4e6.svg", width: 80.089, height: 60.067 },
  { src: "/trading/532cc.svg", width: 63, height: 61 },
  { src: "/trading/d03e9.svg", width: 61, height: 61 },
  { src: "/trading/bd08f.svg", width: 60.627, height: 60.626 },
  { src: "/trading/581a7.svg", width: 74.625, height: 61 },
  { src: "/trading/15da1.svg", width: 60, height: 61 },
] as const;

export const tradingPerks = [
  "[Office Address, City, Country]",
  "[Country] [Phone Number]",
  "[trade@yesartrading.com]",
] as const;

export const tradingFooter = {
  businesses: ["Construction", "Energy", "Manufacturing", "Agriculture", "Logistics"],
  company: ["About Us", "Leadership", "Careers", "News", "Sustainability"],
  touch: ["Contact Us", "Regions / Offices", "Customer Support", "09342342342 / Ethiopia, Addis Ababa"],
  legal: ["Terms", "Privacy Policy", "Cookies"],
} as const;

export const tradingSocial = [
  { src: "/trading/bc87e.svg", label: "Facebook", boxed: false },
  { src: "/trading/8eb8c.svg", label: "LinkedIn", boxed: true },
  { src: "/trading/e6201.svg", label: "Instagram", boxed: false },
  { src: "/trading/f1a08.svg", label: "YouTube", boxed: true },
] as const;
