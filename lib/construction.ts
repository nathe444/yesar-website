export const constructionNav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#safety", label: "Safety" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
] as const;

export const constructionStats = [
  { value: "35+", label: "YEARS OF OPERATION" },
  { value: "100+", label: "PROJECTS COMPLETED" },
  { value: "5+", label: "SECTORS INVOLVED IN" },
  { value: "6+", label: "REGIONS REACHED" },
] as const;

export const constructionServices = [
  {
    index: "01",
    title: "Residential Construction",
    body: "Custom homes and multi-unit residential developments built to last generations.",
    bordered: true,
  },
  {
    index: "02",
    title: "Commercial Construction",
    body: "Offices, retail spaces, and mixed-use buildings designed for business needs.",
    bordered: false,
  },
  {
    index: "03",
    title: "Infrastructure & Civil Works",
    body: "Custom homes and multi-unit residential developments built to last generations.",
    bordered: false,
  },
  {
    index: "04",
    title: "Renovation & Remodeling",
    body: "Breathing new life into existing structures with minimal disruption.",
    bordered: false,
  },
  {
    index: "05",
    title: "Project Management",
    body: "Custom homes and multi-unit residential developments built to last generations.",
    bordered: false,
  },
  {
    index: "06",
    title: "Design & Build",
    body: "Custom homes and multi-unit residential developments built to last generations.",
    bordered: false,
  },
] as const;

export const projectFilters = [
  "ALL PROJECTS",
  "RESIDENTIAL",
  "COMMERCIAL",
  "INFRASTRUCTURE",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const constructionProjects = [
  {
    category: "RESIDENTIAL" as const,
    title: "Highland Residences",
    image: "/construction/project-highland.png",
    width: 187,
    height: 159,
  },
  {
    category: "COMMERCIAL" as const,
    title: "Yesar Business Tower",
    image: "/construction/project-tower.png",
    width: 187,
    height: 160,
  },
  {
    category: "INFRASTRUCTURE" as const,
    title: "Highland Residences",
    image: "/construction/project-infra.png",
    width: 187,
    height: 160,
  },
];

export const constructionReasons = [
  {
    index: "01",
    title: "Experienced Team",
    body: "Licensed engineers and skilled crews with decades of combined field experience.",
  },
  {
    index: "02",
    title: "On-Time Delivery",
    body: "Proven project management systems that keep timelines predictable.",
  },
  {
    index: "03",
    title: "Quality Materials",
    body: "Licensed engineers and skilled crews with decades of combined field experience.",
  },
  {
    index: "04",
    title: "Backed by Yesar Group",
    body: "Licensed engineers and skilled crews with decades of combined field experience.",
  },
] as const;

export const constructionBadges = [
  "ISO 9001 CERTIFIED",
  "OSHA COMPLIANT",
  "QUALITY AUDITED",
  "ZERO-INCIDENT TARGET",
] as const;

export const constructionPerks = [
  "Free initial site assessment",
  "No-obligation project quote",
  "Dedicated project manager assigned",
] as const;

export const constructionFooter = {
  blurb: [
    "One line group descriptor — reinforcing",
    "the multi-business identity one final time",
    "before the visitor leaves the page.",
  ],
  businesses: ["Construction", "Energy", "Manufacturing", "Agriculture", "Logistics"],
  company: ["About Us", "Leadership", "Careers", "News", "Sustainability"],
  touch: [
    "Contact Us",
    "Regions / Offices",
    "Customer Support",
    "09342342342 / Ethiopia, Addis Ababa",
  ],
  legal: ["Terms", "Privacy Policy", "Cookies"],
} as const;

export const constructionSocial = [
  {
    src: "/construction/social-facebook.svg",
    label: "Facebook",
    width: 32,
    height: 32,
    boxed: false,
  },
  {
    src: "/construction/social-linkedin.svg",
    label: "LinkedIn",
    width: 16,
    height: 16,
    boxed: true,
  },
  {
    src: "/construction/social-instagram.svg",
    label: "Instagram",
    width: 32,
    height: 32,
    boxed: false,
  },
  {
    src: "/construction/social-youtube.svg",
    label: "YouTube",
    width: 16.309,
    height: 16.31,
    boxed: true,
  },
] as const;
