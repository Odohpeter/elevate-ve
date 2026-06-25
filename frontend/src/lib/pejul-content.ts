import heroImg from "@/assets/hero-cinematic.jpg";
import pillarSoftware from "@/assets/pillar-software.jpg";
import pillarGrowth from "@/assets/pillar-growth.jpg";
import pillarDigi from "@/assets/pillar-digitization.jpg";
import pillarVenture from "@/assets/vb-hero.jpg";
import pillarAI from "@/assets/ai-hero.jpg";
import work1 from "@/assets/kokolet/cover.jpg";
import work2 from "@/assets/billspro/cover.jpg";
import work3 from "@/assets/colala/cover.jpg";
import about from "@/assets/about-boardroom.jpg";

export const img = {
  hero: heroImg,
  software: pillarSoftware,
  growth: pillarGrowth,
  digi: pillarDigi,
  work1,
  work2,
  work3,
  about,
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const heroHeadline = ["Build New Ventures.", "Scale Faster.", "Operate Smarter."];

export const heroSubheadline =
  "Pejul helps ambitious entrepreneurs, investors, and businesses launch technology products, accelerate growth, and digitize operations through software development, startup growth infrastructure, and business transformation solutions.";

export const heroSupporting =
  "Whether you're launching a startup, modernizing an existing business, or exploring new opportunities in the digital economy, we provide the technology, systems, and execution required to turn vision into measurable results.";

export const heroTrustNote = "Software projects start from ₦9.5M";

export const trustIndicators = [
  "Founded in 2016",
  "Registered Nigerian Company",
  "Global Engineering Team",
  "Nigeria + International Talent",
  "Startup Focused",
  "Long-Term Support",
];

export const pillars = [
  {
    n: "01",
    eyebrow: "Software Development",
    title: "Transform ideas into scalable digital products.",
    body: "We design and develop mobile applications, SaaS platforms, marketplaces, enterprise software, fintech solutions, and custom business systems engineered for long-term growth.",
    image: pillarSoftware,
    bullets: ["Mobile Apps", "Web Applications", "SaaS Platforms", "Enterprise Systems", "Fintech Products"],
  },
  {
    n: "02",
    eyebrow: "Startup Growth Infrastructure",
    title: "Building software is only the beginning.",
    body: "We recruit, vet, manage, and oversee the professionals required to grow your startup after launch, allowing founders to focus on strategic decisions instead of operational headaches.",
    image: pillarGrowth,
    bullets: ["Social Media Teams", "Content Creators", "Customer Support", "Paid Advertising", "Growth Strategy", "KPI Management"],
  },
  {
    n: "03",
    eyebrow: "AI Solutions",
    title: "Put AI to work inside your business.",
    body: "Custom AI agents, copilots, automation and intelligent workflows that cut cost, accelerate teams and unlock new revenue — built on top of your existing systems and data.",
    image: pillarAI,
    bullets: ["AI Agents", "Copilots", "Workflow Automation", "RAG & Knowledge", "LLM Integrations"],
  },
  {
    n: "04",
    eyebrow: "Venture Building",
    title: "We build the venture — you keep 100% equity.",
    body: "For investors, business owners, HNWIs and diasporans: we bring the scalable idea, the tech, marketing and operations teams, plus the playbook to raise capital. You fund the build, we run it end-to-end.",
    image: pillarVenture,
    bullets: ["Vetted Ideas", "Full Operating Team", "Strategy & GTM", "Fundraise Coaching", "0% Equity"],
  },
  {
    n: "05",
    eyebrow: "Business Digitization",
    title: "Modernize operations through technology and AI.",
    body: "Modernize operations, improve efficiency, and reduce costs through technology, automation, and AI-powered systems.",
    image: pillarDigi,
    bullets: ["Process Automation", "AI Customer Support", "Internal Portals", "Workflow Management", "CRM Integration", "Business Intelligence"],
  },
];

export const why = [
  ["Strategy First", "Every engagement begins with understanding your business goals."],
  ["Global Talent", "Access local expertise backed by international experience."],
  ["Long-Term Partnership", "We remain invested beyond launch."],
  ["Growth Focused", "Everything is designed around measurable outcomes."],
  ["Operational Excellence", "Systems built to scale efficiently."],
  ["Technology Leadership", "Modern tools, modern architecture, modern thinking."],
] as const;

export const process: Array<[string, string, string]> = [
  ["01", "Discover", "Understand opportunities, goals, and challenges."],
  ["02", "Strategize", "Develop a roadmap aligned with business objectives."],
  ["03", "Build", "Design and develop the required technology."],
  ["04", "Launch", "Deploy, test, and prepare for market adoption."],
  ["05", "Grow", "Build and manage growth infrastructure."],
  ["06", "Optimize", "Improve operations through data and automation."],
];

export const workCategories = [
  "Mobile Applications",
  "Business Management Systems",
  "Educational Platforms",
  "Fintech Products",
  "AI Solutions",
  "Operational Automation Systems",
];

export const workItems = [
  { tag: "Mobile Applications", title: "Kokolet Luxury — sneaker & fashion boutique app with a loyalty circle", img: work1, slug: "kokolet-luxury" },
  { tag: "Fintech Products", title: "BillsPro — crypto, bills & USD virtual cards in one app", img: work2, slug: "billspro-fintech" },
  { tag: "Mobile Applications", title: "Colala Mall — multi-vendor marketplace with 4 connected apps", img: work3, slug: "colala-mall" },
];

export const industries = [
  "Fintech",
  "Education",
  "Healthcare",
  "Logistics",
  "Real Estate",
  "Hospitality",
  "Professional Services",
  "E-Commerce",
  "Manufacturing",
  "Corporate Organizations",
];

export const directions = [
  { id: "7", slug: "mint-marquee", name: "Mint Marquee", tagline: "Default design — mint accents, pill nav, oversized display, italic serif accents.", tone: "light" },
];
