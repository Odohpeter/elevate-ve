import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "motion/react";
import { useMemo, useRef, useState } from "react";
import indHero from "@/assets/ind-hero.jpg";
import { PillNav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Pejul" },
      { name: "description", content: "Pejul has shipped software, digitization, and growth engagements across Fintech, Healthcare, Education, Logistics, Real Estate, Hospitality, Professional Services, E-Commerce, Manufacturing, Government, and NGOs." },
      { property: "og:title", content: "Industries — Pejul" },
      { property: "og:description", content: "Eleven industries. One operating model. The verticals where we build, digitize, and grow." },
    ],
  }),
  component: Industries,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

type Industry = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  signals: string[];
  plays: string[];
  proof: { v: string; l: string };
};

const INDUSTRIES: Industry[] = [
  {
    id: "fintech",
    name: "Fintech",
    tag: "Regulated · High-trust",
    blurb: "Lending platforms, neobanks, payment infrastructure, and wealth tools — built with the audit trail and compliance posture regulators look for.",
    signals: ["KYC / KYB friction", "Manual reconciliations", "Slow fraud feedback loops", "Investor reporting drag"],
    plays: ["Core banking integrations", "Risk & fraud workflows", "Compliance dashboards", "Customer-facing portals"],
    proof: { v: "12+", l: "Fintech builds shipped" },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tag: "Privacy-first · Clinical",
    blurb: "Clinic groups, telemedicine platforms, and digital-health startups. HIPAA-grade infrastructure, patient-facing apps, and the back-office systems behind them.",
    signals: ["Paper-based intake", "No patient touchpoint between visits", "Disconnected EHR data", "Manual scheduling"],
    plays: ["Patient companion apps", "Telehealth platforms", "Clinic operations portals", "Secure messaging"],
    proof: { v: "62%", l: "Avg patient adoption" },
  },
  {
    id: "education",
    name: "Education",
    tag: "Scale · Accessibility",
    blurb: "Schools, universities, ed-tech startups, and corporate learning teams. Course platforms, student portals, and the analytics that prove learning happened.",
    signals: ["Fragmented LMS stack", "Manual enrolment", "No learning analytics", "Outdated student portal"],
    plays: ["Custom LMS builds", "Student information systems", "Live-class infrastructure", "Outcome analytics"],
    proof: { v: "240K+", l: "Learners reached" },
  },
  {
    id: "logistics",
    name: "Logistics",
    tag: "Real-time · Field ops",
    blurb: "Freight, last-mile, warehousing, and supply-chain teams. Live tracking, driver apps, dispatch consoles, and the integrations that hold them together.",
    signals: ["Spreadsheet-run dispatch", "Blind spots in transit", "Manual proof-of-delivery", "Late client updates"],
    plays: ["Dispatch & TMS portals", "Driver mobile apps", "Live tracking + ETAs", "Customer status pages"],
    proof: { v: "−72%", l: "Manual entry removed" },
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tag: "Inventory · Pipeline",
    blurb: "Brokerages, developers, property managers, and proptech founders. Listing platforms, CRM, tenant portals, and the marketing engine that fills them.",
    signals: ["Listings out of sync", "Lead leaks between agents", "Tenant requests by WhatsApp", "No portfolio dashboard"],
    plays: ["Listing platforms", "Agent CRMs", "Tenant portals", "Acquisition funnels"],
    proof: { v: "3.2×", l: "Lead-to-tour rate" },
  },
  {
    id: "hospitality",
    name: "Hospitality",
    tag: "Multi-venue · Live ops",
    blurb: "Restaurant groups, hotels, and venue teams. Unified POS, inventory, reservations, and the live dashboards leadership actually opens every morning.",
    signals: ["Different POS per venue", "Inventory in spreadsheets", "Reservations on phone", "No group-level view"],
    plays: ["POS rollouts", "Inventory & supplier portals", "Loyalty + reservations", "Group dashboards"],
    proof: { v: "11", l: "Venues unified" },
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tag: "Billable · Knowledge work",
    blurb: "Law, accounting, consulting, agencies. Practice management, client portals, time & billing, and the AI assistants that handle the repeatable work.",
    signals: ["Time tracked in memory", "Client docs over email", "Repeated drafting work", "No utilization view"],
    plays: ["Practice management", "Client portals", "AI drafting assistants", "Utilization dashboards"],
    proof: { v: "+28%", l: "Realized billable hours" },
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    tag: "Conversion · Retention",
    blurb: "DTC brands, marketplaces, and omnichannel retailers. Storefronts, post-purchase flows, paid acquisition, and the lifecycle systems that compound revenue.",
    signals: ["Plateaued blended ROAS", "Weak retention curve", "No post-purchase journey", "Manual catalogue ops"],
    plays: ["Headless storefronts", "Lifecycle & CRM", "Paid + creative ops", "Catalogue automation"],
    proof: { v: "2.7×", l: "Repeat-purchase rate" },
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tag: "Plant floor · Throughput",
    blurb: "Factories, contract manufacturers, and industrial suppliers. Production tracking, quality, maintenance, and supplier portals — connecting the shop floor to the C-suite.",
    signals: ["Paper job cards", "Quality issues caught late", "Reactive maintenance", "Supplier emails everywhere"],
    plays: ["Production tracking", "Quality & QC", "Maintenance scheduling", "Supplier portals"],
    proof: { v: "−41%", l: "Unplanned downtime" },
  },
  {
    id: "government",
    name: "Government",
    tag: "Public · Accountable",
    blurb: "Ministries, agencies, and municipalities. Citizen services, internal workflow systems, and the data infrastructure that makes policy decisions defensible.",
    signals: ["Counter-only services", "Paper-based approvals", "No data for decisions", "Legacy intranet"],
    plays: ["Citizen service portals", "Internal workflow systems", "Open data platforms", "Inter-agency dashboards"],
    proof: { v: "8 wk", l: "Avg pilot delivery" },
  },
  {
    id: "ngos",
    name: "NGOs",
    tag: "Mission · Donor-trust",
    blurb: "Foundations, charities, and impact organisations. Donor portals, programme management, M&E dashboards — built with the reporting clarity funders require.",
    signals: ["Donor data in spreadsheets", "Manual M&E reporting", "No field data pipeline", "Programme silos"],
    plays: ["Donor & CRM portals", "Programme management", "M&E dashboards", "Field data collection"],
    proof: { v: "100%", l: "Donor-report on time" },
  },
];

/* ---------- atoms ---------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.6, ease: easeOut }}
    className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium"
    style={{ color: deepInk }}
  >
    <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOut }} className="h-px w-8 origin-left" style={{ background: deepInk }} />
    {children}
  </motion.span>
);

function PillButton({ children, variant = "solid", onClick, to }: { children: React.ReactNode; variant?: "solid" | "ghost"; onClick?: () => void; to?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };
  const inner = (
    <motion.button
      ref={ref} onClick={onClick} onMouseMove={onMove} onMouseLeave={reset}
      style={{ x: sx, y: sy, ...(variant === "solid" ? { background: mintDeep, borderColor: "rgba(0,0,0,0.85)" } : { borderColor: deepInk, color: deepInk }) }}
      className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] tracking-wide border ${variant === "solid" ? "text-black" : ""}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </motion.button>
  );
  return to ? <Link to={to}>{inner}</Link> : inner;
}

/* ---------- nav ---------- */
/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 60%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-16 pb-16">
        <div className="mb-8 flex items-center gap-4 flex-wrap">
          <Eyebrow>Industries · Verticals</Eyebrow>
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full" style={{ background: "#000", color: mintDeep }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> 11 industries served
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-[clamp(34px,6vw,96px)] font-bold leading-[0.95] tracking-[-0.04em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: deepInk }}>
              <span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">Eleven industries.</motion.span></span>
              <span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">One operating</motion.span></span>
              <span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.2, ease: easeOut }} className="block"><span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">model.</span></motion.span></span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }} className="mt-10 max-w-[620px] text-[15px] sm:text-[15px] sm:text-[18px] leading-relaxed" style={{ color: "#1a1a1a" }}>
              We don't pretend to be specialists in everything. We're specialists in building software, digitizing operations, and growing brands — and we've now done it inside these eleven verticals enough times to know where the leverage lives in each.
            </motion.p>
          </div>

          <div className="hidden lg:block col-span-5 relative h-[520px]">
            <motion.div style={{ y: imgY }} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }} className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] border-4 border-white">
              <img src={indHero} alt="Industries Pejul serves" className="w-full h-full object-cover" width={1280} height={1280} />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.9, ease: easeOut }} className="absolute -top-4 left-2 lg:-left-4 rounded-2xl border px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]" style={{ background: mintDeep, borderColor: "rgba(0,0,0,0.85)", color: "#000" }}>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0,0,0,0.7)" }}>Verticals</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none">11</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1, ease: easeOut }} className="absolute -bottom-5 right-2 lg:right-4 rounded-2xl border px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]" style={{ background: "#000", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: mintDeep }}>Engagements</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none">140+</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- INDEX STRIP ---------- */
function IndexStrip({ onPick, active }: { onPick: (id: string) => void; active: string }) {
  return (
    <section className="border-y" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.1)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-6 flex flex-wrap gap-2">
        {INDUSTRIES.map((i, idx) => (
          <button
            key={i.id}
            onClick={() => onPick(i.id)}
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] tracking-wide transition"
            style={{
              borderColor: active === i.id ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.15)",
              background: active === i.id ? mintDeep : "#fff",
              color: "#000",
            }}
          >
            <span className="text-[10px] tabular-nums opacity-50">{String(idx + 1).padStart(2, "0")}</span>
            {i.name}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------- VERTICAL LIST ---------- */
function IndustryRow({ ind, idx, refMap }: { ind: Industry; idx: number; refMap: React.MutableRefObject<Record<string, HTMLElement | null>> }) {
  const isGreen = idx % 3 === 1;
  const isDark = idx % 3 === 2;
  const bg = isDark ? "#000" : isGreen ? mintDeep : "#fff";
  const fg = isDark ? "#fff" : "#000";
  const subFg = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)";
  const borderC = isGreen || isDark ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.12)";
  const chipBg = isDark ? "rgba(255,255,255,0.06)" : isGreen ? "rgba(0,0,0,0.06)" : "#f6f6f6";

  return (
    <section
      id={ind.id}
      ref={(el) => { refMap.current[ind.id] = el; }}
      className="relative scroll-mt-28"
      style={{ background: bg, color: fg, borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24 grid grid-cols-12 gap-6 sm:gap-10 items-start">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="text-[12px] tabular-nums tracking-[0.25em]" style={{ color: subFg }}>{String(idx + 1).padStart(2, "0")}</span>
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase rounded-full px-3 py-1 border" style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.85)", color: fg }}>{ind.tag}</span>
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: 0.8, ease: easeOut }}
            className="mt-6 font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(32px,5.6vw,72px)]"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            {ind.name}
          </motion.h3>
          <div className="mt-8 inline-flex items-end gap-3 rounded-2xl border px-5 py-4" style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.6)", borderColor: borderC }}>
            <span className="text-[34px] leading-none font-bold tabular-nums">{ind.proof.v}</span>
            <span className="text-[11px] tracking-[0.2em] uppercase pb-1" style={{ color: subFg }}>{ind.proof.l}</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <p className="text-[15px] sm:text-[15px] sm:text-[18px] leading-relaxed max-w-[760px]" style={{ color: fg }}>{ind.blurb}</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: subFg }}>Signals you'll recognise</div>
              <ul className="space-y-2">
                {ind.signals.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: fg }} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: subFg }}>How we engage</div>
              <div className="flex flex-wrap gap-2">
                {ind.plays.map((p) => (
                  <span key={p} className="rounded-full border px-3 py-2 text-[12px]" style={{ background: chipBg, borderColor: borderC, color: fg }}>{p}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[12px] tracking-wide" style={{ borderColor: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.85)", color: fg }}>
              See work in {ind.name}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[12px] tracking-wide" style={{ background: isDark ? mintDeep : "#000", color: isDark ? "#000" : "#fff", border: `1px solid ${isDark ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.85)"}` }}>
              Talk to the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CROSS-INDUSTRY PRINCIPLE ---------- */
function Principle() {
  return (
    <section className="relative" style={{ background: "#000", color: "#fff" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24 grid grid-cols-12 gap-6 sm:gap-10">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow><span style={{ color: mintDeep }}>The thread</span></Eyebrow>
          <h3 className="mt-6 font-bold leading-[0.95] tracking-[-0.03em] text-[clamp(28px,4.4vw,56px)]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Different verticals.<br /><span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal" >Same operating model.</span>
          </h3>
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { t: "Find the leverage", d: "Every industry has 2–3 places where time, money, or trust leaks. We map them in the first two weeks and rank by ROI." },
            { t: "Ship the system", d: "Software, automations, or operations playbook — whichever moves the metric fastest. We don't sell tools; we install outcomes." },
            { t: "Hand it over clean", d: "Documentation, training, and a maintenance path your team can own. No black boxes, no lock-in." },
            { t: "Stay accountable", d: "We measure the same metric you do. If it doesn't move, we don't pretend the engagement worked." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border p-6" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)" }}>
              <div className="text-[12px] tracking-[0.25em] uppercase mb-3" style={{ color: mintDeep }}>{c.t}</div>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: mintDeep }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-20 sm:py-28 border-y" style={{ borderColor: "rgba(0,0,0,0.85)" }}>
        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>Your industry not listed?</Eyebrow>
            <h3 className="mt-6 font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(34px,6vw,96px)]" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#000" }}>
              Then it's the<br /><span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">twelfth</span>.
            </h3>
            <p className="mt-8 max-w-[620px] text-[15px] sm:text-[18px] leading-relaxed" style={{ color: "rgba(0,0,0,0.78)" }}>
              The model travels. If your sector has manual work to remove, software to build, or growth to engineer, the playbook applies. Tell us what you're trying to move.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <PillButton to="/portfolio">See the work</PillButton>
            <PillButton variant="ghost" to="/about">About Pejul</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function Industries() {
  const refMap = useRef<Record<string, HTMLElement | null>>({});
  const [active, setActive] = useState(INDUSTRIES[0].id);
  const onPick = (id: string) => {
    setActive(id);
    refMap.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const list = useMemo(() => INDUSTRIES, []);
  return (
    <div style={{ background: "#fafafa", color: deepInk, fontFamily: "Inter, system-ui, sans-serif" }}>
      <PillNav />
      <Hero />
      <IndexStrip onPick={onPick} active={active} />
      <div>
        {list.map((ind, idx) => (
          <IndustryRow key={ind.id} ind={ind} idx={idx} refMap={refMap} />
        ))}
      </div>
      <Principle />
      <CTA />
      <Footer />
    </div>
  );
}
