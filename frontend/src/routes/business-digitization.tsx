import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { OtherServices } from "@/components/site/OtherServices";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { getProject } from "@/data/projects";
import heroImg from "@/assets/bd-hero.webp";
import workflowImg from "@/assets/bd-workflow.webp";
import dashboardImg from "@/assets/bd-dashboard.webp";
import caseImg from "@/assets/bd-case.webp";
import { PillNav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/business-digitization")({
  head: () => ({
    meta: [
      { title: "Business Digitization — Pejul" },
      { name: "description", content: "Pejul digitizes established businesses — CRMs, automation, AI customer support, workflow systems, reporting dashboards, WhatsApp automation and internal portals — for measurable ROI." },
      { property: "og:title", content: "Business Digitization — Pejul" },
      { property: "og:description", content: "Move your operations off spreadsheets and into systems that compound. Digitization built around your workflow, not the other way around." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessDigitization,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

/* ---------- shared atoms ---------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: easeOut }}
    className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium"
    style={{ color: deepInk }}
  >
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="h-px w-8 origin-left"
      style={{ background: deepInk }}
    />
    {children}
  </motion.span>
);

function PillButton({ children, variant = "solid", to = "/strategy-session" }: { children: React.ReactNode; variant?: "solid" | "ghost"; to?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <Link to={to} style={{ display: "inline-block" }}>
      <motion.span
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ x: sx, y: sy, ...(variant === "solid" ? { background: "#55e6a5" } : { borderColor: deepInk, color: deepInk }) }}
        className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] tracking-wide overflow-hidden ${variant === "solid" ? "text-black" : "border"}`}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          <motion.svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </motion.svg>
        </span>
        {variant === "solid" && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" style={{ background: mintDeep, mixBlendMode: "screen", opacity: 0.4 }} />
        )}
      </motion.span>
    </Link>
  );
}

function CountUp({ to, from = 0, suffix = "", prefix = "" }: { to: number; from?: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [val, setVal] = useState(from);
  useEffect(() => {
    if (!inView) return;
    const c = animate(from, to, { duration: 1.6, ease: easeOut, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, from]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

function WordReveal({ text, className, style, italic, immediate }: { text: string; className?: string; style?: React.CSSProperties; italic?: boolean; immediate?: boolean }) {
  const words = text.split(" ");
  const motionProps = immediate
    ? { initial: { y: "110%" }, animate: { y: "0%" } }
    : { initial: { y: "110%" }, animate: { y: "0%" } };
  return (
    <span className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="inline-block align-bottom mr-[0.25em] pb-[0.2em]">
          <motion.span
            {...motionProps}
            transition={{ duration: 0.7, delay: i * 0.05, ease: easeOut }}
            className={`inline-block ${italic ? "italic font-normal" : ""}`}
            style={italic ? { fontFamily: "'Fraunces', serif" } : undefined}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------- nav ---------- */
/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-6 sm:pt-10 pb-0" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 70%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-14 sm:pb-20">
        <div className="mb-6 sm:mb-8 flex items-center gap-4 flex-wrap">
          <Eyebrow>Business Digitization</Eyebrow>
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full" style={{ background: "#000", color: "#55e6a5" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> For established businesses
          </span>
        </div>
        <div className="grid grid grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-[clamp(34px,6vw,96px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: deepInk }}>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                  Your business runs.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                  Your systems
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.2, ease: easeOut }} className="block">
                  haven't <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">caught up.</span>
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
              className="mt-6 sm:mt-10 max-w-[640px] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#1a1a1a" }}
            >
              We move established businesses off spreadsheets, WhatsApp groups, and tribal knowledge — into CRMs, automation, AI support, and dashboards that compound every quarter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
              className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <PillButton>Book A Digitization Audit</PillButton>
              <PillButton variant="ghost">See Our Approach</PillButton>
            </motion.div>
          </div>

          <div className="hidden lg:block col-span-5 relative h-[480px]">
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }}
              className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <img src={heroImg} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: easeOut }}
              className="absolute -bottom-3 left-2 sm:-bottom-6 sm:-left-6 rounded-2xl bg-white px-4 py-3 sm:px-5 sm:py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#6b6b6b" }}>Hours saved / wk</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none" style={{ color: deepInk }}>
                <CountUp to={180} suffix="+" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85, ease: easeOut }}
              className="absolute -top-3 right-2 sm:-top-6 sm:-right-6 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
              style={{ background: "#55e6a5", color: "#000" }}
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0,0,0,0.65)" }}>Avg. ROI yr 1</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none">
                <CountUp to={312} suffix="%" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Signs Your Business Needs Digitization ---------- */
const SIGNS = [
  { n: "01", t: "Spreadsheets run the business", d: "Critical data lives in five Excel files, three Google Sheets, and one founder's head — and they don't agree with each other." },
  { n: "02", t: "Staff repeat the same task daily", d: "Quotes, invoices, follow-ups, status updates — copy-pasted by hand because no system connects to the next." },
  { n: "03", t: "Customers wait too long", d: "Replies take hours, requests fall through cracks, and the team spends more time chasing tickets than resolving them." },
  { n: "04", t: "You can't answer simple questions fast", d: "How many active customers? What's this month's gross margin? Which sales rep is underperforming? Nobody knows without a meeting." },
  { n: "05", t: "Hiring is the only way to scale", d: "Every new client means another headcount, because the business has no leverage from systems — only from people." },
  { n: "06", t: "Tools don't talk to each other", d: "Accounting, CRM, support, inventory, marketing — five logins, zero integration, weekly reconciliation pain." },
];

function Signs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>Signs Your Business Needs Digitization</Eyebrow>
          <h2 className="mt-6 text-[clamp(28px,4.5vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            If three of these sound familiar, <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">we need to talk.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-relaxed max-w-[420px]" style={{ color: "#333333" }}>
            Most businesses don't have a software problem — they have a systems problem. Digitization is what fixes it.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-4 sm:gap-5">
          {SIGNS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
              className="col-span-12 sm:col-span-6 rounded-3xl border p-6 sm:p-7"
              style={{ borderColor: "rgba(0,0,0,0.1)", background: "#ffffff" }}
            >
              <div className="text-[11px] tracking-[0.3em]" style={{ color: "#6b6b6b" }}>{s.n}</div>
              <h3 className="mt-5 text-[20px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#333333" }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Problems We Solve ---------- */
const PROBLEMS = [
  { t: "Manual Operations", d: "Quotes, invoices, onboarding, scheduling — anything done by hand becomes the bottleneck the moment volume grows." },
  { t: "Fragmented Communication", d: "Customer threads scattered across WhatsApp, email, and DMs. Nothing logged, nothing searchable, nothing handed off cleanly." },
  { t: "Customer Service Bottlenecks", d: "Tickets pile up, SLA targets slip, and your best agents burn out covering for the absence of a real support system." },
  { t: "Data Silos", d: "Sales, finance, operations, and marketing each own a slice — and no-one owns the full picture of the customer or the business." },
  { t: "Operational Inefficiencies", d: "Hours lost to status meetings, manual reports, duplicated data entry, and chasing approvals through email chains." },
];

function Problems() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: "#55e6a5", borderColor: "rgba(0,0,0,0.85)" }}>
      <img src={workflowImg} alt="" loading="lazy" width={1280} height={1280} className="hidden lg:block absolute -right-32 -top-20 w-[55%] pointer-events-none opacity-30 mix-blend-screen" style={{ maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)" }} />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <motion.span initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: easeOut }} className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>
              <span className="h-px w-8" style={{ background: "#000" }} /> Problems We Solve
            </motion.span>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.02] tracking-[-0.03em] text-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="The five drags" /><br />
              <WordReveal text="on every business." italic />
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed text-black/70">
            We don't sell software. We diagnose what's slowing you down, and we replace it with systems that quietly do the work in the background.
          </p>
        </div>

        <div className="grid grid grid-cols-12 gap-4 sm:gap-5">
          {PROBLEMS.map((m, i) => (
            <motion.div
              key={m.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl p-6 sm:p-7 border"
              style={{ borderColor: "rgba(0,0,0,0.85)", background: "transparent" }}
            >
              <div className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(0,0,0,0.65)" }}>0{i + 1}</div>
              <h3 className="text-[24px] font-bold tracking-[-0.01em] text-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{m.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/70">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Solutions ---------- */
const SOLUTIONS = [
  { t: "CRM Systems", d: "Unified customer record. Pipeline visibility. No more deals lost between the cracks of inboxes and spreadsheets." },
  { t: "Business Automation", d: "Quote-to-cash, onboarding, renewals, approvals — automated end-to-end with humans in the loop only where it matters." },
  { t: "AI Customer Support", d: "Trained on your knowledge base, your tone, and your product. Resolves tier-1 instantly and routes the rest intelligently." },
  { t: "Workflow Automation", d: "Cross-tool automations that connect accounting, CRM, ops, and marketing — built on Zapier, Make, n8n, or custom code." },
  { t: "Reporting Dashboards", d: "Live KPIs for revenue, ops, support, and marketing. One screen, one truth, no monthly reconciliation rituals." },
  { t: "WhatsApp Automation", d: "Order updates, appointment reminders, support intake — fully automated on the channel your customers already live on." },
  { t: "Internal Portals", d: "Custom dashboards for staff, partners, or clients — replacing the email-and-spreadsheet workflows that don't scale." },
];

function Solutions() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, ${mint} 0%, #fafafa 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="Seven systems." />{" "}
              <WordReveal text="One digital backbone." italic />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "#1a1a1a" }}>
            Mix and match. Start with the one that hurts most, and let the others snap in as your operations earn them.
          </div>
        </div>

        <div className="grid grid grid-cols-12 gap-4 sm:gap-5">
          {SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="group col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl border bg-white p-6 sm:p-8 cursor-pointer"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-[0.3em]" style={{ color: "#6b6b6b" }}>0{i + 1}</span>
                <motion.span className="inline-flex items-center justify-center w-9 h-9 rounded-full border" style={{ borderColor: "rgba(0,0,0,0.15)", color: deepInk }}>→</motion.span>
              </div>
              <h3 className="mt-10 text-[24px] font-bold leading-tight tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{s.t}</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#333333" }}>{s.d}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: deepInk }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ROI ---------- */
const ROI = [
  { metric: 180, suffix: "+", label: "Hours reclaimed per week across operations" },
  { metric: 62, suffix: "%", label: "Average reduction in customer response time" },
  { metric: 312, suffix: "%", label: "Average first-year ROI on digitization spend" },
  { metric: 9, suffix: "mo", label: "Median payback period across our deployments" },
];

function ROISection() {
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>The ROI</Eyebrow>
          <h2 className="mt-6 text-[clamp(28px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            Numbers our clients <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">put to the board.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed max-w-[380px]" style={{ color: "#333333" }}>
            Digitization isn't a cost line. It's leverage. Every system we deploy is scoped against a measurable business outcome — and we report against it monthly.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="mt-10 overflow-hidden rounded-3xl"
          >
            <img src={dashboardImg} alt="" loading="lazy" width={1280} height={1280} className="w-full h-[280px] object-cover" />
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 sm:gap-5">
          {ROI.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className="col-span-6 rounded-3xl border p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px]"
              style={{ borderColor: "rgba(0,0,0,0.12)", background: "#fafafa" }}
            >
              <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>0{i + 1}</div>
              <div>
                <div className="text-[clamp(48px,6vw,84px)] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                  <CountUp to={r.metric} suffix={r.suffix} />
                </div>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#333333" }}>{r.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies ---------- */
const BD_PROJECTS = ["kokolet-pos", "wcss-erp", "mainservice-logistics-erp"].map(getProject).filter(Boolean);

function CaseStudies() {
  return (
    <section className="relative bg-white py-20 sm:py-32 border-t overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Case Studies</Eyebrow>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Businesses we've <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">re-platformed.</span>
            </h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOut }} className="col-span-12 lg:col-span-5 rounded-3xl overflow-hidden">
            <img src={caseImg} alt="" loading="lazy" width={1280} height={1280} className="w-full h-[200px] object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {BD_PROJECTS.map((p, i) => p && <PortfolioCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 border-t" style={{ background: `linear-gradient(180deg, ${mint} 0%, #ffffff 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <Eyebrow>Digitize Your Operations</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mt-6 sm:mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(30px,5.4vw,84px)]"
          style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}
        >
          Stop scaling with headcount. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">Scale with systems.</span>
        </motion.h2>
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-relaxed" style={{ color: "#333333" }}>
          Book a 45-minute digitization audit. We'll walk your current ops, surface the three biggest leverage points, and tell you what it costs to fix them.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PillButton>Book A Digitization Audit</PillButton>
          <PillButton variant="ghost">Talk To Our Team</PillButton>
        </div>
        <div className="mt-10 text-[12px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>
          Build New Ventures · Scale Faster · Operate Smarter
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function BusinessDigitization() {
  return (
    <main className="min-h-screen" style={{ background: "white" }}>
      <PillNav />
      <Hero />
      <Signs />
      <Problems />
      <Solutions />
      <ROISection />
      <CaseStudies />
      <FinalCTA />
      <OtherServices current="digitization" theme="mint" />
      <Footer />
    </main>
  );
}
