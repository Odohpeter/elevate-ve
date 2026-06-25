import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { OtherServices } from "@/components/site/OtherServices";
import heroImg from "@/assets/sg-hero.jpg";
import frameworkImg from "@/assets/sg-framework.jpg";
import teamImg from "@/assets/sg-team.jpg";
import caseImg from "@/assets/sg-case.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { PillNav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/startup-growth")({
  head: () => ({
    meta: [
      { title: "Startup Growth Infrastructure — Pejul" },
      { name: "description", content: "Pejul recruits, trains and manages the growth team your startup needs after launch — social, community, content, support, and paid ads — measured against your KPIs." },
      { property: "og:title", content: "Startup Growth Infrastructure — Pejul" },
      { property: "og:description", content: "The growth team most agencies don't offer. Done-for-you recruitment, management, and accountability." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StartupGrowth,
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
          <Eyebrow>Startup Growth Infrastructure</Eyebrow>
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full" style={{ background: "#000", color: "#55e6a5" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> Most agencies don't offer this
          </span>
        </div>
        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-[clamp(34px,6vw,96px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: deepInk }}>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                  Launching is easy.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                  Growing is the
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.2, ease: easeOut }} className="block">
                  <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">whole</span> job.
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
              className="mt-6 sm:mt-10 max-w-[640px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#1a1a1a" }}
            >
              We recruit, train, and manage the specialists your startup needs after launch — social, community, content, support, and paid ads — all measured against your KPIs and reported to you weekly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
              className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <PillButton>Book A Growth Audit</PillButton>
              <PillButton variant="ghost">See How It Works</PillButton>
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
              className="absolute -bottom-6 left-2 sm:-left-6 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#6b6b6b" }}>Specialists placed</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none" style={{ color: deepInk }}>
                <CountUp to={120} suffix="+" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85, ease: easeOut }}
              className="absolute -top-6 right-2 sm:-right-6 rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
              style={{ background: "#55e6a5", color: "#000" }}
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0,0,0,0.65)" }}>Avg. ramp</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none">
                <CountUp to={14} suffix=" days" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Why Most Startups Struggle ---------- */
const STRUGGLES = [
  { n: "01", t: "No-one owns growth", d: "Founders ship the product, then realise nobody is responsible for users, content, or community. Momentum stalls in week three." },
  { n: "02", t: "Hiring is a six-month detour", d: "By the time you've shortlisted, interviewed, and onboarded a social or community lead, the launch window has closed." },
  { n: "03", t: "Freelancers don't compound", d: "Disconnected freelancers create disconnected output — no shared KPIs, no playbook, no accountability when a metric slips." },
  { n: "04", t: "Agencies optimise for retainers, not outcomes", d: "Big monthly invoices, generic dashboards, and zero ownership of the numbers that actually move your business." },
];

function Struggle() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>Why Most Startups Struggle After Launch</Eyebrow>
          <h2 className="mt-5 sm:mt-6 text-[clamp(28px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            The product ships. Then <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">nothing happens.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-relaxed max-w-[420px]" style={{ color: "#333333" }}>
            We've seen the same pattern across hundreds of launches. The fix isn't another tool — it's an operating team built for the first 12 months.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {STRUGGLES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className="rounded-3xl border p-6 sm:p-7"
              style={{ borderColor: "rgba(0,0,0,0.1)", background: "#ffffff" }}
            >
              <div className="text-[11px] tracking-[0.3em]" style={{ color: "#6b6b6b" }}>{s.n}</div>
              <h3 className="mt-5 text-[22px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#333333" }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Growth Infrastructure Model ---------- */
function Model() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: "#55e6a5", borderColor: "rgba(0,0,0,0.85)" }}>
      <img src={frameworkImg} alt="" loading="lazy" width={1280} height={1280} className="absolute -right-32 -top-20 w-[55%] pointer-events-none opacity-30 mix-blend-screen" style={{ maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)" }} />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <motion.span initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: easeOut }} className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>
              <span className="h-px w-8" style={{ background: "#000" }} /> Our Growth Infrastructure Model
            </motion.span>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.02] tracking-[-0.03em] text-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="A full growth team," /><br />
              <WordReveal text="without the overhead." italic />
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed text-black/70">
            One contract. One point of accountability. A senior strategist on top, and a recruited, trained, and managed pod underneath — replaced if anyone underperforms.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {[
            { n: "Recruit", d: "We source, vet, and onboard specialists against your stage, market, and stack — usually in 14 days." },
            { n: "Train", d: "Pejul playbooks, brand immersion, and KPI rituals before they touch a single channel." },
            { n: "Manage", d: "Daily standups, weekly reports, and a senior strategist holding the team to the numbers." },
            { n: "Replace", d: "If a specialist isn't hitting targets, we replace them — no charge, no awkward conversations." },
          ].map((m, i) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className="col-span-12 md:col-span-6 lg:col-span-3 rounded-3xl p-6 sm:p-7 border"
              style={{ borderColor: "rgba(0,0,0,0.85)", background: "transparent" }}
            >
              <div className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(0,0,0,0.65)" }}>0{i + 1}</div>
              <h3 className="text-[26px] font-bold tracking-[-0.01em] text-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{m.n}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/70">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- What We Recruit ---------- */
const ROLES = [
  { t: "Social Media Managers", d: "Channel strategy, calendars, posting, engagement, and analytics across the platforms that matter for your audience.", tag: "01" },
  { t: "Community Managers", d: "Discord, Slack, Telegram, WhatsApp — moderation, rituals, events, and member growth that turns users into advocates.", tag: "02" },
  { t: "Content Creators", d: "Short-form video, long-form writing, design, and editing — produced on-brand and on-cadence, ready to ship." },
  { t: "Customer Support", d: "Tier-1 and tier-2 support across email, chat, and social — SLAs, macros, and quality scoring baked in.", tag: "04" },
  { t: "Paid Ads Specialists", d: "Meta, Google, TikTok, LinkedIn — creative testing, audience building, and budget management against CAC targets.", tag: "05" },
];

function Recruit() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, ${mint} 0%, #fafafa 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>What We Recruit</Eyebrow>
            <h2 className="mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="Five core roles." />{" "}
              <WordReveal text="One growth engine." italic />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "#1a1a1a" }}>
            Mix and match. Start with one hire, scale to a full pod as the metrics earn it. You only pay for the seats you fill.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {ROLES.map((s, i) => (
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

/* ---------- What We Manage ---------- */
const MANAGE = [
  { t: "KPIs", d: "Every specialist works to weekly, measurable targets — CAC, retention, follower velocity, response time, content output." },
  { t: "Strategy", d: "A senior strategist owns the growth roadmap — channels, experiments, content pillars, and budget allocation." },
  { t: "Reporting", d: "Weekly written reports, a live dashboard, and a monthly strategy call. No black boxes, no \"trust us\"." },
  { t: "Hiring", d: "We source, vet, and onboard every hire — no job ads, no agencies, no awkward founder interviews." },
  { t: "Replacement", d: "If someone underperforms, we replace them at our cost. The team you signed up for is the team you keep." },
];

function Manage() {
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>What We Manage</Eyebrow>
          <h2 className="mt-5 sm:mt-6 text-[clamp(28px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            We hold the team to the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">numbers.</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="mt-8 sm:mt-10 overflow-hidden rounded-3xl"
          >
            <img src={teamImg} alt="" loading="lazy" width={1280} height={1280} className="w-full h-[240px] sm:h-[360px] object-cover" />
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            {MANAGE.map((m, i) => (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
                className="grid grid-cols-12 gap-3 sm:gap-6 py-6 sm:py-8 border-b"
                style={{ borderColor: "rgba(0,0,0,0.12)" }}
              >
                <div className="col-span-3 sm:col-span-2 text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>0{i + 1}</div>
                <div className="col-span-9 md:col-span-3 text-[22px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{m.t}</div>
                <p className="col-span-12 md:col-span-7 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "#333333" }}>{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Growth Framework ---------- */
const FRAMEWORK = [
  { n: "01", t: "Audit", d: "30-day deep dive into your product, audience, funnel, and current channels. We surface the leaks and the levers." },
  { n: "02", t: "Plan", d: "A 90-day growth plan with channel mix, content cadence, paid budgets, and a hire-by-hire team roadmap." },
  { n: "03", t: "Recruit", d: "We source and onboard the specialists your plan needs — typically inside two weeks per role." },
  { n: "04", t: "Execute", d: "Daily standups, weekly sprints, and experiments shipped against your KPIs by the team we manage on your behalf." },
  { n: "05", t: "Compound", d: "Quarterly strategy resets, new specialist additions, and budget reallocation as the channels prove themselves." },
];

function Framework() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, #fafafa 0%, ${mint} 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>Growth Framework</Eyebrow>
          <h2 className="mt-5 sm:mt-6 text-[clamp(28px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            From audit to <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">compounding growth.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-relaxed max-w-[340px]" style={{ color: "#333333" }}>
            A five-stage system designed for startups in their first 18 months — repeatable, measurable, and never reliant on a single channel.
          </p>
        </div>

        <div ref={ref} className="col-span-12 lg:col-span-8 relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px" style={{ background: "rgba(0,0,0,0.12)" }} />
          <motion.div style={{ height: lineH }} className="absolute left-[27px] top-2 w-px">
            <div className="w-px h-full" style={{ background: deepInk }} />
          </motion.div>

          <ol className="space-y-8 sm:space-y-10">
            {FRAMEWORK.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
                className="relative flex gap-6 sm:gap-8 pl-[64px] sm:pl-[72px]"
              >
                <div className="absolute left-0 top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] tracking-[0.2em] font-semibold" style={{ background: "white", color: deepInk, border: "1px solid rgba(0,0,0,0.15)" }}>{p.n}</div>
                <div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{p.t}</h3>
                  <p className="mt-2 sm:mt-3 text-[15px] sm:text-[16px] leading-relaxed max-w-[560px]" style={{ color: "#333333" }}>{p.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies ---------- */
const CASES = [
  { img: work1, tag: "Consumer App", t: "Built a 4-person growth pod for a fintech app — 0 → 80k MAU in 6 months.", metric: "+412%", metricL: "MoM signups" },
  { img: work2, tag: "Marketplace", t: "Community-led GTM took a marketplace from cold launch to 12k waitlist in 8 weeks.", metric: "12K", metricL: "Waitlist / 8wk" },
  { img: work3, tag: "B2B SaaS", t: "Paid ads + content engine cut CAC by 61% while doubling pipeline volume.", metric: "−61%", metricL: "CAC reduction" },
];

function CaseStudies() {
  return (
    <section className="relative bg-white py-20 sm:py-32 border-t overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Case Studies</Eyebrow>
            <h2 className="mt-5 sm:mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Numbers we've <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">put on the board.</span>
            </h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOut }} className="col-span-12 lg:col-span-5 rounded-3xl overflow-hidden">
            <img src={caseImg} alt="" loading="lazy" width={1280} height={1280} className="w-full h-[160px] sm:h-[200px] object-cover" />
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
                <h3 className="text-[18px] sm:text-[19px] font-semibold leading-snug" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{c.t}</h3>
                <div className="mt-5 sm:mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                  <div>
                    <div className="text-[28px] sm:text-[32px] font-bold tabular-nums leading-none truncate" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{c.metric}</div>
                    <div className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase mt-1 truncate" style={{ color: "#6b6b6b" }}>{c.metricL}</div>
                  </div>
                  <span className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" style={{ color: deepInk }}>Read →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing Structure ---------- */
const TIERS = [
  {
    name: "Launch Pod",
    price: 6500,
    suffix: "/mo",
    dur: "1–2 specialists",
    desc: "Best for pre-seed and seed startups going from zero to first traction.",
    points: ["1 senior strategist", "1–2 recruited specialists", "Weekly reporting", "Replacement guarantee"],
  },
  {
    name: "Growth Pod",
    price: 14500,
    suffix: "/mo",
    dur: "3–4 specialists",
    desc: "Multi-channel team — social, community, content, and paid — managed end-to-end.",
    points: ["Senior strategist + lead", "3–4 recruited specialists", "Weekly + monthly reporting", "Live KPI dashboard", "Quarterly strategy reset"],
    featured: true,
  },
  {
    name: "Scale Pod",
    price: 28000,
    suffix: "/mo",
    dur: "5+ specialists",
    desc: "Full growth org for Series A+ startups scaling across markets, products, and channels.",
    points: ["Dedicated growth lead", "5+ recruited specialists", "Daily standups", "Cross-channel attribution", "Executive monthly review"],
  },
];

function Pricing() {
  return (
    <section className="relative py-20 sm:py-32 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, ${mint} 0%, #fafafa 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Pricing Structure</Eyebrow>
            <h2 className="mt-5 sm:mt-6 text-[clamp(30px,4.5vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              One contract. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">No surprises.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "#333333" }}>
            Monthly retainer covers strategy, recruitment, training, management, and replacement. Paid ad spend is billed separately at cost.
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
              className={`col-span-12 md:col-span-4 rounded-3xl p-6 sm:p-8 flex flex-col ${t.featured ? "text-white" : "border"}`}
              style={t.featured ? { background: "#55e6a5" } : { borderColor: "rgba(0,0,0,0.12)", background: "white" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] tracking-[0.3em] uppercase" style={t.featured ? { color: mintDeep } : { color: "#6b6b6b" }}>{t.name}</div>
                {t.featured && <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-full" style={{ background: mintDeep, color: deepInk }}>Most common</span>}
              </div>
              <div className="mt-6 sm:mt-8 flex items-baseline gap-2">
                <span className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tabular-nums leading-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  <CountUp to={t.price} prefix="$" />
                </span>
                <span className="text-[14px] opacity-70">{t.suffix}</span>
              </div>
              <div className="mt-2 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase opacity-70">{t.dur}</div>
              <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-relaxed opacity-90">{t.desc}</p>
              <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-[14px]">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full" style={{ background: t.featured ? mintDeep : deepInk }} />
                    <span className="opacity-90">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <button className={`w-full rounded-full px-6 py-3 text-[13px] tracking-wide transition ${t.featured ? "bg-white text-[#0e2a22] hover:opacity-90" : "border hover:bg-[#0e2a22] hover:text-white"}`} style={!t.featured ? { borderColor: deepInk, color: deepInk } : undefined}>
                  Book a scoping call
                </button>
              </div>
            </motion.div>
          ))}
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
        <Eyebrow>Plug In A Growth Team</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mt-6 sm:mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(30px,5.4vw,84px)]"
          style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}
        >
          Stop running growth <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">on the side.</span>
        </motion.h2>
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-relaxed" style={{ color: "#333333" }}>
          Book a 30-minute growth audit. We'll show you the gaps in your current setup and what a Pejul pod would cost to fill them.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PillButton>Book A Growth Audit</PillButton>
          <PillButton variant="ghost">Talk To Our Team</PillButton>
        </div>
      </div>
    </section>
  );
}

function StartupGrowth() {
  return (
    <div className="min-h-screen bg-white">
      <PillNav />
      <Hero />
      <Struggle />
      <Model />
      <Recruit />
      <Manage />
      <Framework />
      <CaseStudies />
      <Pricing />
      <FinalCTA />
      <OtherServices current="growth" />
      <Footer />
    </div>
  );
}
