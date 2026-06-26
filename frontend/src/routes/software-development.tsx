import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { OtherServices } from "@/components/site/OtherServices";
import heroImg from "@/assets/sd-hero.webp";
import processImg from "@/assets/sd-process.webp";
import caseImg from "@/assets/sd-case.webp";
import industriesImg from "@/assets/sd-industries.webp";
import kokoletCoverImg from "@/assets/kokolet/cover.webp";
import colalaCoverImg from "@/assets/colala/cover.webp";
import earlybazeCoverImg from "@/assets/earlybaze/cover.webp";
import { PillNav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/software-development")({
  head: () => ({
    meta: [
      { title: "Software Development — Pejul" },
      { name: "description", content: "Pejul designs and engineers mobile apps, SaaS platforms, marketplaces, fintech systems, and enterprise software for ambitious teams." },
      { property: "og:title", content: "Software Development — Pejul" },
      { property: "og:description", content: "End-to-end product engineering: strategy, design, build, launch, and scale." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SoftwareDevelopment,
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
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <Link to={to} style={{ display: "inline-block" }}>
      <motion.span
        ref={ref as unknown as React.RefObject<HTMLSpanElement>}
        onMouseMove={onMove as unknown as React.MouseEventHandler<HTMLSpanElement>}
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

function WordReveal({ text, className, style, italic }: { text: string; className?: string; style?: React.CSSProperties; italic?: boolean }) {
  const words = text.split(" ");
  return (
    <span className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="inline-block align-bottom mr-[0.25em] pb-[0.2em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
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
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-6 sm:pt-10 pb-0" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 70%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-14 sm:pb-20">
        <div className="mb-6 sm:mb-8"><Eyebrow>Software Development</Eyebrow></div>
        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-[clamp(34px,6vw,96px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: deepInk }}>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                  Software that
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                  earns its place in
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.2, ease: easeOut }} className="block">
                  the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">market.</span>
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
              className="mt-6 sm:mt-10 max-w-[640px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#1a1a1a" }}
            >
              We design and engineer mobile apps, SaaS platforms, marketplaces, fintech systems, and enterprise software — built to scale on day one and to keep paying dividends years later.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
              className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <PillButton>Start A Project</PillButton>
              <PillButton variant="ghost">See Our Process</PillButton>
            </motion.div>
          </div>

          <div className="hidden lg:block col-span-5 relative h-[480px]">
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }}
              className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <img src={heroImg} alt="" className="w-full h-full object-cover" width={1024} height={1024} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: easeOut }}
              className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#6b6b6b" }}>Products shipped</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none" style={{ color: deepInk }}>
                <CountUp to={60} suffix="+" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Industries We Serve ---------- */
const INDUSTRIES = [
  { t: "Fintech & Payments", d: "Wallets, rails, KYC, lending." },
  { t: "Healthcare & Wellness", d: "Patient platforms, telehealth, clinical ops." },
  { t: "Logistics & Mobility", d: "Dispatch, tracking, last-mile networks." },
  { t: "E-commerce & Retail", d: "Storefronts, OMS, loyalty engines." },
  { t: "Education & EdTech", d: "Learning platforms, assessments, LMS." },
  { t: "Media & Entertainment", d: "Streaming, publishing, creator tools." },
  { t: "Real Estate & PropTech", d: "Listings, leasing, property ops." },
  { t: "Energy & Sustainability", d: "Monitoring, grid software, carbon ops." },
];

function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 border-t" style={{ background: "#050505", color: "#fff", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <motion.span initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: easeOut }} className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium" style={{ color: mintDeep }}>
              <span className="h-px w-8" style={{ background: mintDeep }} /> Industries We Serve
            </motion.span>
            <h2 className="mt-6 text-[clamp(28px,4.6vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Eight sectors. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">One standard of craft.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed text-white/65">
            Hover a sector to bring it into focus. We ship into regulated environments and high-stakes operations — and we know the difference.
          </p>
        </div>

        <ul className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {INDUSTRIES.map((it, i) => {
            const isActive = active === i;
            return (
              <motion.li
                key={it.t}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: easeOut }}
                className="group grid grid-cols-12 items-center gap-3 sm:gap-6 border-b cursor-pointer py-6 sm:py-8 px-2 md:px-4 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: isActive ? "rgba(85,230,165,0.06)" : "transparent" }}
              >
                <span className="col-span-3 sm:col-span-2 lg:col-span-1 text-[12px] tabular-nums tracking-[0.25em] text-white/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-9 sm:col-span-10 lg:col-span-5 text-[20px] sm:text-[24px] md:text-[30px] font-semibold tracking-[-0.015em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: isActive ? mintDeep : "#fff" }}>
                  {it.t}
                </span>
                <span className="hidden lg:block col-span-5 text-[15px] text-white/55">{it.d}</span>
                <motion.span
                  className="col-span-12 lg:col-span-1 justify-self-end text-[18px]"
                  animate={{ x: isActive ? 4 : 0, opacity: isActive ? 1 : 0.3 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  style={{ color: mintDeep }}
                >
                  →
                </motion.span>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-10">
          <Link to="/industries" className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase border-b pb-1 transition" style={{ color: mintDeep, borderColor: "rgba(85,230,165,0.4)" }}>
            See all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}



/* ---------- Solutions ---------- */
const SOLUTIONS = [
  { t: "Mobile Apps", d: "iOS & Android products built with React Native and Swift/Kotlin where it counts — beautiful, fast, store-ready.", tag: "01" },
  { t: "SaaS Platforms", d: "Multi-tenant web platforms with billing, analytics, and admin tooling that scale from MVP to enterprise.", tag: "02" },
  { t: "Marketplaces", d: "Two-sided marketplaces with matching, payments, escrow, ratings, and dispute flows engineered for trust.", tag: "03" },
  { t: "Fintech Systems", d: "Wallets, payment rails, KYC/AML pipelines, lending, and compliance-grade infrastructure.", tag: "04" },
  { t: "Enterprise Software", d: "Internal platforms, ERP integrations, dashboards, and workflow automation for operations at scale.", tag: "05" },
  { t: "Custom Systems", d: "Bespoke engineering for problems no off-the-shelf tool solves — booking engines, IoT, real-time data, AI.", tag: "06" },
];

function Solutions() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, ${mint} 0%, #fafafa 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-6 text-[clamp(28px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="Six core product practices." />{" "}
              <WordReveal text="One execution standard." italic />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "#1a1a1a" }}>
            Every Pejul build is shipped by a senior-led pod — product, design, and engineering working as one team from kickoff to launch and beyond.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
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
                <span className="text-[11px] tracking-[0.3em]" style={{ color: "#6b6b6b" }}>{s.tag}</span>
                <motion.span className="inline-flex items-center justify-center w-9 h-9 rounded-full border" style={{ borderColor: "rgba(0,0,0,0.15)", color: deepInk }}>→</motion.span>
              </div>
              <h3 className="mt-10 text-[26px] font-bold leading-tight tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{s.t}</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#333333" }}>{s.d}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: deepInk }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const PROCESS = [
  { n: "01", t: "Discover", d: "Strategy sprint to align on users, market, business goals, and the constraints that will shape the build." },
  { n: "02", t: "Design", d: "Product architecture, UX flows, and high-fidelity interfaces — validated with prototypes before code." },
  { n: "03", t: "Build", d: "Senior-led pods shipping in weekly iterations against a clear roadmap, with quality gates at every release." },
  { n: "04", t: "Launch", d: "Soft launch, instrumentation, observability, and a go-to-market handoff that protects the runway." },
  { n: "05", t: "Scale", d: "Ongoing engineering, growth experiments, infrastructure hardening, and roadmap planning as the product matures." },
];

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>Development Process</Eyebrow>
          <h2 className="mt-6 text-[clamp(26px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            A repeatable system for <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">shipping well.</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="mt-6 sm:mt-10 overflow-hidden rounded-3xl"
          >
            <img src={processImg} alt="" loading="lazy" width={1024} height={1024} className="w-full h-[360px] object-cover" />
          </motion.div>
        </div>

        <div ref={ref} className="col-span-12 lg:col-span-8 relative">
          <div className="absolute left-[23px] sm:left-[27px] top-2 bottom-2 w-px" style={{ background: "rgba(0,0,0,0.12)" }} />
          <motion.div style={{ height: lineH }} className="absolute left-[23px] sm:left-[27px] top-2 w-px origin-top" >
            <div className="w-px h-full" style={{ background: deepInk }} />
          </motion.div>

          <ol className="space-y-6 sm:space-y-10">
            {PROCESS.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
                className="relative flex gap-4 sm:gap-8 pl-16 sm:pl-[72px]"
              >
                <div className="absolute left-0 top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[12px] tracking-[0.2em] font-semibold" style={{ background: mint, color: deepInk, border: "1px solid rgba(0,0,0,0.15)" }}>{p.n}</div>
                <div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{p.t}</h3>
                  <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed max-w-[560px]" style={{ color: "#333333" }}>{p.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech Stack ---------- */
const STACK: Record<string, { blurb: string; items: string[] }> = {
  Frontend: { blurb: "Interfaces engineered for speed, accessibility, and longevity.", items: ["React", "Next.js", "TanStack", "React Native", "Swift", "Kotlin", "TypeScript", "Tailwind"] },
  Backend: { blurb: "Reliable services and APIs that hold up under real-world load.", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL", "REST", "tRPC"] },
  Cloud: { blurb: "Infrastructure as code — repeatable, observable, regional by default.", items: ["AWS", "Cloudflare", "GCP", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  Data: { blurb: "Pipelines, warehouses, and analytics that make products smarter.", items: ["Postgres", "BigQuery", "Snowflake", "Kafka", "ClickHouse", "Supabase", "Prisma", "Drizzle"] },
};

function TechStack() {
  const cats = Object.keys(STACK);
  const [active, setActive] = useState(cats[0]);
  const data = STACK[active];
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 border-t" style={{ background: "#fafafa", borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Technology Stack</Eyebrow>
            <h2 className="mt-6 text-[clamp(28px,4.5vw,72px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Boring tech where it matters. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">Sharp tech where it wins.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed text-black/65">
            We pick proven, well-understood tools by default — and reach for the edge only when the product genuinely benefits.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Category rail */}
          <div className="col-span-12 lg:col-span-4">
            <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible -mx-2 px-2">
              {cats.map((c, i) => {
                const isActive = active === c;
                return (
                  <li key={c} className="shrink-0">
                    <button
                      onClick={() => setActive(c)}
                      className="group relative flex items-center gap-4 w-full text-left py-4 sm:py-5 pr-6 border-b transition"
                      style={{ borderColor: isActive ? deepInk : "rgba(0,0,0,0.12)" }}
                    >
                      <span className="text-[11px] tabular-nums tracking-[0.25em] opacity-50" style={{ color: deepInk }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[20px] sm:text-[20px] sm:text-[24px] md:text-[30px] font-semibold tracking-[-0.015em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: isActive ? deepInk : "rgba(0,0,0,0.4)" }}>
                        {c}
                      </span>
                      <motion.span
                        layoutId="stack-dot"
                        className="ml-auto w-2 h-2 rounded-full"
                        style={{ background: mintDeep, opacity: isActive ? 1 : 0 }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="col-span-12 lg:col-span-8 relative rounded-[28px] p-6 sm:p-10 md:p-14 overflow-hidden"
            style={{ background: deepInk, color: "#fff" }}
          >
            <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30" style={{ background: mintDeep }} />
            <div className="relative">
              <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>{active}</div>
              <p className="mt-5 text-[18px] sm:text-[20px] md:text-[26px] leading-snug tracking-[-0.01em] max-w-[560px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {data.blurb}
              </p>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4">
                {data.items.map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: easeOut }}
                    className="flex items-baseline gap-3 border-b py-3"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <span className="text-[10px] tabular-nums text-white/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] font-medium">{t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ---------- Investment ---------- */
const TIERS = [
  { name: "Website Development", label: "₦1.5M", dur: "3 Weeks", desc: "A fully responsive, SEO-optimized website built to convert visitors into clients — fast, beautiful, and easy to manage.", points: ["Responsive design (mobile + desktop)", "SEO optimization & page speed", "Content management integration", "Analytics & conversion tracking"] },
  { name: "Mobile App Development", label: "₦9.5M", dur: "3 Months", desc: "Cross-platform iOS & Android apps engineered for performance, smooth UX, and store approval from day one.", points: ["iOS & Android (React Native)", "UI/UX design & prototyping", "Backend API & push notifications", "App Store & Play Store launch"], featured: true },
  { name: "Web App Development", label: "₦6.5M", dur: "2 Months", desc: "Custom web applications with robust backends, user authentication, dashboards, and scalable cloud infrastructure.", points: ["Custom UI & dashboard design", "Authentication & role management", "Database design & API integration", "Cloud deployment & scalability"] },
];

function Investment() {
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Investment Range</Eyebrow>
            <h2 className="mt-6 text-[clamp(28px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Pricing that reflects the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">value at stake.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed" style={{ color: "#333333" }}>
            Engagements are scoped against business outcomes. The ranges below give you a directional sense — final pricing comes after the discovery call.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className={`col-span-12 md:col-span-4 rounded-3xl p-6 sm:p-8 flex flex-col ${t.featured ? "text-black ring-2 ring-black/90" : "border"}`}
              style={t.featured ? { background: "#55e6a5" } : { borderColor: "rgba(0,0,0,0.12)", background: "#ffffff" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] tracking-[0.3em] uppercase" style={t.featured ? { color: "rgba(0,0,0,0.7)" } : { color: "#6b6b6b" }}>{t.name}</div>
                {t.featured && <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-full" style={{ background: deepInk, color: mintDeep }}>Most projects</span>}
              </div>
              <div className="mt-8">
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-60 mb-1">Starting from</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[36px] sm:text-[44px] md:text-[56px] font-bold tabular-nums leading-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    {t.label}
                  </span>
                  <span className="text-[14px] opacity-70">+</span>
                </div>
              </div>
              <div className="mt-2 text-[12px] tracking-[0.2em] uppercase opacity-70">{t.dur}</div>
              <p className="mt-5 text-[15px] leading-relaxed opacity-90">{t.desc}</p>
              <ul className="mt-6 space-y-3 text-[14px]">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full" style={{ background: t.featured ? deepInk : deepInk }} />
                    <span className="opacity-90">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Link to="/strategy-session" className={`block w-full text-center rounded-full px-6 py-3 text-[13px] tracking-wide transition ${t.featured ? "bg-black text-white hover:opacity-90" : "border hover:bg-black hover:text-white"}`} style={!t.featured ? { borderColor: deepInk, color: deepInk } : undefined}>
                  Book a scoping call
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies ---------- */
const CASES = [
  { img: kokoletCoverImg, tag: "Fashion & Retail", t: "Sneaker & fashion boutique app with a built-in loyalty circle — 4 tiers, live on iOS & Android.", metric: "4", metricL: "Loyalty tiers", to: "/portfolio/kokolet-luxury" },
  { img: colalaCoverImg, tag: "Marketplace", t: "Commission-free marketplace for Nigerian buyers & sellers — Buyer app, Seller app & PWA.", metric: "0%", metricL: "Per-sale commission", to: "/portfolio/colala-mall" },
  { img: earlybazeCoverImg, tag: "Crypto", t: "Buy, sell & swap crypto direct to Naira and ZAR — 5-year partnership across 2 markets.", metric: "10+", metricL: "Supported assets", to: "/portfolio/earlybaze-crypto" },
];

function CaseStudies() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, #fafafa 0%, ${mint} 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-10 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Case Studies</Eyebrow>
            <h2 className="mt-6 text-[clamp(28px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Products in the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">wild.</span>
            </h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOut }} className="col-span-12 lg:col-span-5 rounded-3xl overflow-hidden">
            <img src={caseImg} alt="" loading="lazy" width={1024} height={1024} className="w-full h-[200px] object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {CASES.map((c, i) => (
            <motion.article
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="col-span-12 md:col-span-4 group rounded-3xl overflow-hidden bg-white border"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img src={c.img} alt="" loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: easeOut }} />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-white/90" style={{ color: deepInk }}>{c.tag}</div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[17px] sm:text-[19px] font-semibold leading-snug" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{c.t}</h3>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-[28px] sm:text-[32px] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{c.metric}</div>
                    <div className="text-[11px] tracking-[0.25em] uppercase mt-1" style={{ color: "#6b6b6b" }}>{c.metricL}</div>
                  </div>
                  <span className="text-[12px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: deepInk }}>Read →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border px-7 py-4 text-[13px] tracking-wide hover:bg-black hover:text-white transition" style={{ borderColor: deepInk, color: deepInk }}>
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */
const FAQS = [
  { q: "How long until we launch?", a: "Most MVPs ship in 8–12 weeks. Full products typically launch within 3–6 months. Discovery happens in week one and shapes the entire roadmap." },
  { q: "Do you work with non-technical founders?", a: "Yes — most of our clients are. We translate your business vision into product architecture, then walk you through every decision in plain language." },
  { q: "Who owns the code and IP?", a: "You do, fully. All source code, designs, and intellectual property are transferred to you under a written agreement at the start of the engagement." },
  { q: "What stack do you use?", a: "We default to React/Next/TanStack on the web, React Native (with native modules where needed) on mobile, and Node/Python/Go backends on AWS or Cloudflare." },
  { q: "Do you offer ongoing support after launch?", a: "Yes — 30 days of post-launch support is included on every project. Retainers, on-call SLAs, and dedicated pods are available for products that need them." },
  { q: "Can you take over an existing codebase?", a: "Often, yes. We start with a 1-week audit to assess code quality, infrastructure, and team handoff before quoting any work." },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: easeOut }}
      className="border-b"
      style={{ borderColor: "rgba(0,0,0,0.12)" }}
    >
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-6 py-5 sm:py-7 text-left">
        <span className="text-[17px] sm:text-[18px] md:text-[22px] font-semibold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3, ease: easeOut }} className="inline-flex items-center justify-center w-10 h-10 rounded-full border shrink-0" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" /></svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="overflow-hidden"
      >
        <p className="pb-5 sm:pb-7 pr-4 sm:pr-14 text-[15px] sm:text-[16px] leading-relaxed max-w-[820px]" style={{ color: "#333333" }}>{a}</p>
      </motion.div>
    </motion.div>
  );
}

function FAQs() {
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-6 text-[clamp(26px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            The questions we hear <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">most.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed max-w-[340px]" style={{ color: "#333333" }}>
            Don't see yours? Book a 30-minute call and we'll answer it directly — no sales pitch.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            {FAQS.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} i={i} />)}
          </div>
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
        <Eyebrow>Let's Build</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(30px,5.4vw,84px)]"
          style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}
        >
          Got a product worth <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">building?</span>
        </motion.h2>
        <p className="mt-8 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-relaxed" style={{ color: "#333333" }}>
          Tell us what you're imagining. We'll come back with a scoped plan, a realistic timeline, and a senior pod ready to ship.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PillButton>Start A Project</PillButton>
          <PillButton variant="ghost">Book A Strategy Call</PillButton>
        </div>
        <div className="mt-10 text-[12px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>
          Build New Ventures · Scale Faster · Operate Smarter
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <PillNav />
      <Hero />
      <Industries />
      <Solutions />
      <Process />
      <TechStack />
      <Investment />
      <CaseStudies />
      <FAQs />
      <FinalCTA />
      <OtherServices current="software" theme="mint" />
      <Footer />
    </div>
  );
}
