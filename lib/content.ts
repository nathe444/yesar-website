export const nav = [
  { href: "#businesses", label: "Our Businesses" },
  { href: "#about", label: "About" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#news", label: "News" },
  { href: "#careers", label: "Careers" },
] as const;

export const stats = [
  { value: "35+", label: "Years of operation" },
  { value: "100+", label: "Projects completed" },
  { value: "5+", label: "Sectors involved in" },
  { value: "6+", label: "Regions reached" },
] as const;

export const businesses = [
  {
    unit: "Business unit 01",
    title: "Yesar Construction and Engineering",
    body: "Delivering residential, commercial, and infrastructure projects across the region, from groundbreaking to handover.",
    featured: true,
  },
  {
    unit: "Business unit 02",
    title: "WCCC (Trading)",
    body: "Sourcing and supplying construction materials, equipment, and project inputs that keep Yesar sites moving on schedule.",
    featured: false,
  },
  {
    unit: "Business unit 03",
    title: "Yesar Project Finance",
    body: "Structuring capital and financial partnerships that take complex developments from feasibility through to delivery.",
    featured: false,
  },
  {
    unit: "Business unit 04",
    title: "Yesar MEP",
    body: "Designing and installing mechanical, electrical, and plumbing systems built for long-term building performance.",
    featured: false,
  },
  {
    unit: "Business unit 05",
    title: "Yesar Pre-Stressing",
    body: "Specialist prestressed and post-tensioned concrete solutions for longer spans, leaner structures, and stronger frames.",
    featured: false,
  },
  {
    unit: "Business unit 06",
    title: "Yesar Fit-Out",
    body: "Interior fit-out for hotels, offices, and civic spaces — finishing spaces to the same standard as the structure itself.",
    featured: false,
  },
] as const;

export const footer = {
  blurb:
    "One line group descriptor — reinforcing the multi-business identity one final time before the visitor leaves the page.",
  businesses: [
    "Construction & Engineering",
    "WCCC (Trading)",
    "Project Finance",
    "MEP",
    "Pre-Stressing",
    "Fit-Out",
  ],
  company: ["About Us", "Leadership", "Careers", "News", "Sustainability"],
  touch: [
    "Contact Us",
    "Regions / Offices",
    "Customer Support",
    "09342342342 / Gazebo Street, Addis Ababa",
  ],
  legal: ["Terms", "Privacy Policy", "Cookies"],
} as const;

export const images = {
  tower: "/figma/tower.png",
  wordmark: "/figma/wordmark.svg?v=5",
  towerGlow: "/figma/tower-glow.svg",
  heroVector: "/figma/hero-vector.svg",
  heroAccent: "/figma/hero-accent.svg",
  logo: "/figma/logo.svg",
  logoFooter: "/figma/logo-footer.svg",
  aboutTower: "/images/zhc-hotel.webp",
  lobby: "/images/adama-hotel.webp",
  apartments: "/figma/news-apartments.webp",
  aerial: "/figma/news-aerial.webp",
  dining: "/figma/news-dining.webp",
  ctaGraphic: "/figma/cta-graphic.svg",
  social: [
    { src: "/figma/social-1.svg", label: "Facebook", box: 32 },
    { src: "/figma/social-2.svg", label: "LinkedIn", box: 16 },
    { src: "/figma/social-3.svg", label: "Instagram", box: 32 },
    { src: "/figma/social-4.svg", label: "YouTube", box: 16 },
  ],
} as const;
