import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PillNav, Footer } from "@/components/site/Chrome";
import peterImg from "@/assets/team/peter.png.asset.json";
import julianaImg from "@/assets/team/juliana.png.asset.json";
import sameerImg from "@/assets/team/sameer.png.asset.json";
import blaiseImg from "@/assets/team/blaise.png.asset.json";
import {
  heroSubheadline,
  trustIndicators,
  pillars,
  why,
  process as processSteps,
  workItems,
  industries,
  img,
} from "@/lib/pejul-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pejul — Build New Ventures. Scale Faster. Operate Smarter." },
      { name: "description", content: "Pejul helps entrepreneurs, investors, and businesses launch technology products, accelerate growth, and digitize operations — one integrated partner." },
      { property: "og:title", content: "Pejul — Build New Ventures. Scale Faster. Operate Smarter." },
      { property: "og:description", content: "Software development, startup growth infrastructure, and business digitization — one integrated partner." },
    ],
  }),
  component: Home,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

/* ---------- atoms ---------- */
const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <motion.span
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: easeOut }}
    className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium"
    style={{ color: light ? "rgba(0,0,0,0.7)" : deepInk }}
  >
    <span className="h-px w-8" style={{ background: light ? "#000" : deepInk }} />
    {children}
  </motion.span>
);

function PillButton({ children, variant = "solid", onClick }: { children: React.ReactNode; variant?: "solid" | "ghost" | "dark"; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };
  const styles =
    variant === "solid"
      ? { background: mintDeep, color: "#000" }
      : variant === "dark"
        ? { background: "#000", color: mintDeep }
        : { borderColor: deepInk, color: deepInk };
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, ...styles }}
      className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] tracking-wide overflow-hidden ${variant === "ghost" ? "border" : ""}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </motion.button>
  );
}

function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const c = animate(0, to, { duration: 1.6, ease: easeOut, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  useEffect(() => {
    const t = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      const c = animate(0, to, { duration: 1.6, ease: easeOut, onUpdate: (v) => setVal(Math.round(v)) });
      return () => c.stop();
    }, 600);
    return () => clearTimeout(t);
  }, [to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

function WordReveal({ text, italic, immediate }: { text: string; italic?: boolean; immediate?: boolean }) {
  const words = text.split(" ");
  const mp = immediate
    ? { initial: { y: "110%" }, animate: { y: "0%" } }
    : { initial: { y: "110%" }, animate: { y: "0%" } };
  return (
    <span>
      {words.map((w, i) => (
        <span key={i} className="inline-block align-bottom mr-[0.25em] pb-[0.2em]">
          <motion.span
            {...mp}
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
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 55%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-16 pb-20 grid lg:grid-cols-12 gap-6 sm:gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase whitespace-nowrap" style={{ borderColor: "rgba(0,0,0,0.18)", color: deepInk }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
            One integrated partner · Build · Scale · Operate
          </motion.div>
          <motion.h1 style={{ x: wordX }} className="mt-6 text-[44px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-tight font-semibold">
            Build, scale, <br />
            <span className="italic font-normal" style={{ color: "#3a7d5c" }}>operate</span> — as one.
          </motion.h1>

          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.6]" style={{ color: "#2b2b2b" }}>
            {heroSubheadline}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[560px]">
            {[
              { v: "9+", l: "Years operating" },
              { v: "120+", l: "Projects shipped" },
              { v: "1", l: "Accountable partner" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[28px] font-semibold leading-none" style={{ color: deepInk }}>{s.v}</div>
                <div className="mt-2 text-[11px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/strategy-session" className="rounded-full border px-7 py-4 text-[14px] hover:opacity-90 transition" style={{ background: deepInk, color: "white", borderColor: deepInk }}>
              Book A Strategy Session →
            </Link>
            <Link to="/portfolio" className="rounded-full border px-7 py-4 text-[14px] hover:opacity-90 transition" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>
              See Our Work
            </Link>
          </div>
        </div>
        <motion.div style={{ y: imgY }} className="lg:col-span-5 relative">
          <div className="relative rounded-[28px] overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.35)" }}>
            <img src={img.hero} alt="Pejul" width={1024} height={1024} className="block w-full h-auto" />
          </div>
          <div className="absolute -bottom-3 left-2 sm:-bottom-6 sm:-left-6 rounded-2xl border bg-white px-4 py-3 sm:px-5 sm:py-4 max-w-[220px] sm:max-w-[260px]" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 20px 50px -20px rgba(0,0,0,0.2)" }}>
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>Years operating</div>
            <div className="text-[16px] sm:text-[20px] font-semibold leading-tight" style={{ color: deepInk }}>Since 2016</div>
          </div>
          <div className="absolute -top-3 right-2 sm:-top-6 sm:-right-6 rounded-2xl border px-4 py-3 sm:px-5 sm:py-4" style={{ background: mintDeep, borderColor: "rgba(0,0,0,0.85)" }}>
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-black/70">Shipped</div>
            <div className="text-[16px] sm:text-[20px] font-semibold leading-tight text-black">120+ projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ---------- TRUSTED BY ---------- */
function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-t border-b py-10" style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center gap-10">
        <div className="hidden md:block text-[11px] tracking-[0.32em] uppercase shrink-0" style={{ color: mintDeep }}>
          Trusted Across
        </div>
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          >
            {[...trustIndicators, ...trustIndicators, ...trustIndicators].map((t, i) => (
              <div key={i} className="flex items-center gap-6 text-[16px] md:text-[20px] font-medium tracking-tight text-white">
                <span>{t}</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  const items = [
    { n: "01", t: "The agency", d: "Ships a product, then disappears. No accountability for the numbers.", fix: "We stay on the metric." },
    { n: "02", t: "The freelancers", d: "Disconnected output. No shared KPIs. No-one owns the outcome.", fix: "One contract. One owner." },
    { n: "03", t: "The in-house team", d: "Slow to hire. Months of detour before a single deliverable ships.", fix: "Embedded in week one." },
    { n: "04", t: "The no-code stack", d: "Works until volume arrives. Then turns into a maintenance liability.", fix: "Built to outlive launch." },
  ];
  return (
    <section className="relative bg-white py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12 items-start">
        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
          <Eyebrow>The Problem We Solve</Eyebrow>
          <h2 className="mt-6 text-[clamp(34px,4.2vw,64px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            Building is one thing. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">Operating it is another.</span>
          </h2>
          <p className="mt-8 max-w-[460px] text-[17px] leading-relaxed" style={{ color: "#333333" }}>
            Most teams stitch together an agency, a few freelancers, and a no-code tool — and end up owning the integration risk themselves. Pejul replaces that with one accountable partner across software, growth, and digitization.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <PillButton variant="dark">Talk To Us</PillButton>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 flex flex-col gap-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className="group relative grid grid-cols-12 gap-x-4 gap-y-3 sm:gap-6 items-center rounded-2xl border bg-white px-5 py-6 sm:px-6 sm:py-7 hover:bg-[#fafafa] transition-colors"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <div className="col-span-3 sm:col-span-2 text-[36px] sm:text-[44px] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{it.n}</div>
              <div className="col-span-9 sm:col-span-6 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-[#c34a4a] text-[18px] shrink-0">✕</span>
                  <h3 className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{it.t}</h3>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "#555" }}>{it.d}</p>
              </div>
              <div className="col-span-12 sm:col-span-4 flex items-center gap-2 sm:justify-end sm:text-right">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase" style={{ background: mintDeep, color: "#000" }}>
                  ✓ {it.fix}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- PILLARS ---------- */
function Pillars() {
  const pillarLinks = [
    "/software-development",
    "/startup-growth",
    "/ai-solutions",
    "/venture-building",
    "/business-digitization",
  ] as const;
  // Balanced 3x2 grid — all cards col-span-4 on desktop
  const spans = [
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-4",
  ];
  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ background: `linear-gradient(180deg, #fafafa 0%, ${mint} 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Six Ways We Partner</Eyebrow>

            <h2 className="mt-6 text-[clamp(36px,4.8vw,80px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="What we do," />{" "}
              <WordReveal text="end to end." italic />
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed" style={{ color: "#1a1a1a" }}>
            Five pillars plus a custom track — one operating partner. Each runs on its own, but the value compounds when you combine them under a single contract and a single point of accountability.
          </p>

        </div>

        <div className="grid grid-cols-12 gap-5">
          {pillars.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className={`${spans[i]} group relative overflow-hidden rounded-3xl border bg-white flex flex-col`}
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img src={p.image} alt="" loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: easeOut }} />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full" style={{ background: "#000", color: mintDeep }}>{p.n}</div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{p.eyebrow}</div>
                <h3 className="mt-4 text-[22px] font-bold leading-tight tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#333333" }}>{p.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="text-[11px] tracking-wide px-3 py-1 rounded-full border" style={{ borderColor: "rgba(0,0,0,0.12)", color: deepInk }}>{b}</li>
                  ))}
                </ul>
                <Link to={pillarLinks[i]} className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase font-semibold group/link" style={{ color: deepInk }}>
                  Explore
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: deepInk }} />
            </motion.article>
          ))}

          {/* 6th card — custom/strategy CTA, column style to match the others */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
            whileHover={{ y: -6 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-3xl border flex flex-col"
            style={{ borderColor: "rgba(0,0,0,0.1)", background: deepInk, color: "white" }}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="relative" style={{ background: deepInk }}>
                    {i === 4 && (
                      <div className="absolute inset-0 flex items-center justify-center text-[64px] font-bold" style={{ color: mintDeep, fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>?</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full" style={{ background: mintDeep, color: deepInk }}>06</div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>Something Else</div>
              <h3 className="mt-4 text-[22px] font-bold leading-tight tracking-[-0.01em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Can't find what you need?</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                If it touches technology, marketing, operations or growth — we've probably built it before. Tell us what you're trying to ship and we'll scope a custom engagement around it.
              </p>
              <Link to="/strategy-session" className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase font-semibold group/link" style={{ color: mintDeep }}>
                Book a strategy call
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: mintDeep }} />
          </motion.article>

        </div>
      </div>
    </section>
  );
}


/* ---------- WHY PEJUL ---------- */
function WhyPejul() {
  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.06)", color: "white" }}>
      {/* ambient mint glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-[0.18] blur-3xl" style={{ background: mintDeep }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full opacity-[0.10] blur-3xl" style={{ background: mintDeep }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-20">
          <div className="col-span-12 lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: easeOut }}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium" style={{ color: mintDeep }}
            >
              <span className="h-px w-8" style={{ background: mintDeep }} /> Why Pejul
            </motion.span>
            <h2 className="mt-6 text-[clamp(40px,5.4vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="Six reasons" />{" "}
              <span style={{ color: mintDeep, fontFamily: "'Fraunces', serif" }} className="italic font-normal"><WordReveal text="they stay." italic /></span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 text-[15px] leading-relaxed text-white/60">
            We don't pitch a deck and disappear. We embed, hold the team to the numbers, and replace anything that under-performs at our cost.
          </p>
        </div>

        <ul className="divide-y" style={{ borderColor: "rgba(255,255,255,0.08)", borderTopWidth: 1 }}>
          {why.map(([t, d], i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: easeOut }}
              className="group relative grid grid-cols-12 gap-3 sm:gap-8 items-baseline py-8 border-b cursor-default"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="absolute inset-x-0 inset-y-0 -z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms]" style={{ background: "linear-gradient(90deg, rgba(85,230,165,0.10), transparent)", transformOrigin: "left" }} />
              <div className="relative col-span-2 lg:col-span-1 text-[12px] tracking-[0.3em] font-semibold" style={{ color: mintDeep }}>
                / 0{i + 1}
              </div>
              <h3 className="relative col-span-10 lg:col-span-5 text-[26px] sm:text-[34px] font-semibold tracking-[-0.02em] leading-[1.05] transition-transform duration-500 group-hover:translate-x-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {t}
              </h3>
              <p className="relative col-span-12 lg:col-span-5 text-[15px] leading-relaxed text-white/65">
                {d}
              </p>
              <div className="relative col-span-12 lg:col-span-1 lg:justify-self-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[20px]" style={{ color: mintDeep }}>→</div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-6 text-[12px] tracking-[0.22em] uppercase text-white/50">
          <span className="inline-flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> Founder-led teams</span>
          <span className="inline-flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> Outcome guaranteed</span>
          <span className="inline-flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> Quarterly business reviews</span>
        </div>
      </div>
    </section>
  );
}


/* ---------- PROCESS ---------- */
const stepMeta = [
  { tag: "Workshop", out: "Opportunity map" },
  { tag: "Strategy", out: "Roadmap + KPIs" },
  { tag: "Sprint", out: "Working product" },
  { tag: "Launch", out: "Live + monitored" },
  { tag: "Growth", out: "Acquisition engine" },
  { tag: "Ongoing", out: "Quarterly review" },
];
function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  return (
    <section className="relative bg-white py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 self-start">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-6 text-[clamp(32px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            Six steps from idea to <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">compounding outcome.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed max-w-[340px]" style={{ color: "#333333" }}>
            One playbook used across every engagement — adapted to your stage, your stack, and the metric that actually matters.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[11px] tracking-[0.22em] uppercase" style={{ borderColor: "rgba(0,0,0,0.18)", color: deepInk }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> Avg. first deliverable · 14 days
          </div>
        </div>

        <div ref={ref} className="col-span-12 lg:col-span-8 relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px" style={{ background: "rgba(0,0,0,0.12)" }} />
          <motion.div style={{ height: lineH }} className="absolute left-[27px] top-2 w-px">
            <div className="w-px h-full" style={{ background: deepInk }} />
          </motion.div>

          <ol className="space-y-6">
            {processSteps.map(([n, t, d], i) => {
              const meta = stepMeta[i];
              return (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: easeOut }}
                  className="relative pl-[72px] rounded-2xl border bg-white px-6 py-6 hover:border-black transition-colors"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <div className="absolute left-[7px] top-6 w-10 h-10 rounded-full flex items-center justify-center text-[11px] tracking-[0.18em] font-semibold" style={{ background: i === 0 ? deepInk : "white", color: i === 0 ? mintDeep : deepInk, border: "1.5px solid #000" }}>{n}</div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{meta.tag}</span>
                      <h3 className="text-[22px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{t}</h3>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: "#000", color: mintDeep }}>
                      → {meta.out}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed max-w-[560px]" style={{ color: "#444" }}>{d}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED WORK ---------- */
const workMeta = [
  { metric: "4+", metricLabel: "Years partnered", year: "2025", role: "Build + Operate" },
  { metric: "3-in-1", metricLabel: "Cards · Bills · Crypto", year: "2026", role: "Build + Launch" },
  { metric: "4", metricLabel: "Connected apps shipped", year: "2025", role: "Build + Operate" },
];

function Work() {
  return (
    <section className="relative bg-white py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-16">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>Featured Work</Eyebrow>
            <h2 className="mt-6 text-[clamp(36px,4.6vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="Recent things" />{" "}
              <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal"><WordReveal text="we've shipped." italic /></span>
            </h2>
          </div>
          <Link to="/portfolio" className="col-span-12 lg:col-span-4 lg:justify-self-end inline-flex items-center gap-3 text-[12px] tracking-[0.22em] uppercase font-semibold group" style={{ color: deepInk }}>
            See full portfolio
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="flex flex-col">
          {workItems.map((w, i) => {
            const meta = workMeta[i] ?? workMeta[0];
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={w.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="group grid grid-cols-12 gap-4 sm:gap-8 items-stretch py-10 border-t"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                {/* index + meta column */}
                <div className={`col-span-12 lg:col-span-2 flex lg:flex-col justify-between lg:justify-start ${reverse ? "lg:order-3" : ""}`}>
                  <div className="text-[64px] lg:text-[88px] font-bold leading-none tracking-[-0.04em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                    0{i + 1}
                  </div>
                  <div className="lg:mt-6 text-[10px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>
                    <div>{meta.year}</div>
                    <div className="mt-1">{meta.role}</div>
                  </div>
                </div>

                {/* image */}
                <Link
                  to="/portfolio/$id"
                  params={{ id: w.slug }}
                  className={`col-span-12 lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden rounded-2xl ${reverse ? "lg:order-2" : ""}`}
                >
                  <motion.img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.9, ease: easeOut }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                </Link>

                {/* content */}
                <div className={`col-span-12 lg:col-span-4 flex flex-col justify-between ${reverse ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase px-3 py-1 rounded-full border" style={{ borderColor: "rgba(0,0,0,0.15)", color: deepInk }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> {w.tag}
                    </span>
                    <h3 className="mt-5 text-[28px] sm:text-[34px] font-bold leading-[1.05] tracking-[-0.02em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                      {w.title}
                    </h3>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-baseline gap-4">
                      <div className="text-[44px] font-bold leading-none tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{meta.metric}</div>
                      <div className="text-[12px] uppercase tracking-[0.2em] max-w-[160px]" style={{ color: "#555" }}>{meta.metricLabel}</div>
                    </div>
                    <Link to="/portfolio/$id" params={{ id: w.slug }} className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase font-semibold group/link" style={{ color: deepInk }}>
                      Read case study
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- TEAM ---------- */
const team = [
  { name: "Peter", role: "CEO · Founding Partner", bio: "Sets the direction for every Pejul engagement and reads every inbound brief personally.", tag: "CEO", photo: peterImg.url },
  { name: "Juliana", role: "COO · Partner", bio: "Runs operations end-to-end so the team can keep shipping. Owns delivery, hiring and client success.", tag: "COO", photo: julianaImg.url },
  { name: "Sameer", role: "CTO · Partner", bio: "Sets the technical bar across the bench — architecture, code review and the way we ship.", tag: "CTO", photo: sameerImg.url },
  { name: "Blaise", role: "Project Manager", bio: "Keeps scope, timelines and stakeholders aligned without ever raising a voice.", tag: "PM", photo: blaiseImg.url },
];

function Team() {
  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ background: mint, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>The Team</Eyebrow>
            <h2 className="mt-6 text-[clamp(36px,4.6vw,72px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <WordReveal text="Leaders," />{" "}
              <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal"><WordReveal text="not just advisors." italic /></span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed" style={{ color: "#333" }}>
            A senior team that has built, scaled and operated the same kinds of businesses we partner with. No juniors hidden behind a slide.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className="col-span-12 sm:col-span-6 lg:col-span-3 group relative rounded-3xl overflow-hidden bg-white border flex flex-col"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "linear-gradient(160deg, #1a1a1a 0%, #333 100%)" }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.65)", color: mintDeep, backdropFilter: "blur(6px)" }}>
                  {m.tag}
                </div>
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45" style={{ background: mintDeep, color: "#000" }}>↗</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[20px] font-bold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{m.name}</h3>
                <div className="mt-1 text-[12px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>{m.role}</div>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: "#444" }}>{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <div className="text-[14px]" style={{ color: "#333" }}>
            Plus a network of <span className="font-semibold" style={{ color: deepInk }}>40+ specialists</span> across engineering, design, growth and ops.
          </div>
          <Link to="/team" className="inline-flex items-center gap-3 text-[12px] tracking-[0.22em] uppercase font-semibold group" style={{ color: deepInk }}>
            Meet the full team
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
function Industries() {
  return (
    <section className="relative bg-white py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Industries We Serve</Eyebrow>
            <h2 className="mt-6 text-[clamp(34px,4.2vw,64px)] font-bold leading-[1.0] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Cross-industry, <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">never generic.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed" style={{ color: "#333333" }}>
            We've embedded inside ten verticals — and every engagement is shaped by the operating realities of that industry, not a template from the last one.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((it, i) => (
            <motion.div
              key={it}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: easeOut }}
              className="group relative aspect-[5/4] rounded-2xl border p-5 flex flex-col justify-between overflow-hidden hover:bg-black transition-colors cursor-default"
              style={{ borderColor: "rgba(0,0,0,0.15)", color: deepInk }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 group-hover:text-[#55e6a5] transition" style={{ color: "inherit" }}>0{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                <span className="w-2 h-2 rounded-full transition-colors" style={{ background: mintDeep }} />
              </div>
              <div className="text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] leading-tight group-hover:text-white transition-colors" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{it}</div>
              <div className="text-[10px] tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition" style={{ color: mintDeep }}>Explore →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { q: "They didn't just build the product — they ran the launch with us and stayed for the second cohort. Rare.", a: "Adaeze N.", r: "Co-founder, fintech (Series A)" },
  { q: "We replaced an agency, two freelancers, and a no-code tool with one Pejul contract. Cost dropped 38%.", a: "Marcus O.", r: "COO, logistics scale-up" },
  { q: "First working deliverable in twelve days. The board stopped asking when, and started asking what's next.", a: "Helena R.", r: "CEO, hospitality group" },
];
function Testimonials() {
  return (
    <section className="relative py-28 border-t" style={{ background: "#fafafa", borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Eyebrow>What clients say</Eyebrow>
            <h2 className="mt-6 text-[clamp(34px,4.2vw,60px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Quiet partners. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">Loud results.</span>
            </h2>
          </div>
          <div className="text-[12px] tracking-[0.22em] uppercase" style={{ color: "#6b6b6b" }}>3 of 40+ partnerships</div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              className={`col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between border ${i === 1 ? "" : "bg-white"}`}
              style={i === 1 ? { background: "#000", color: "white", borderColor: "#000" } : { borderColor: "rgba(0,0,0,0.1)" }}
            >
              <div className="text-[40px] leading-none" style={{ color: mintDeep, fontFamily: "'Fraunces', serif" }}>"</div>
              <blockquote className="mt-2 text-[18px] leading-[1.45] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t flex items-center justify-between" style={{ borderColor: i === 1 ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)" }}>
                <div>
                  <div className="text-[13px] font-semibold">{t.a}</div>
                  <div className="text-[11px] tracking-[0.18em] uppercase mt-1" style={{ color: i === 1 ? "rgba(255,255,255,0.6)" : "#6b6b6b" }}>{t.r}</div>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] tracking-[0.18em]" style={{ background: mintDeep, color: "#000" }}>★</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- ABOUT SNAPSHOT ---------- */
function AboutSnapshot() {
  return (
    <section className="relative py-32 md:py-40 border-t overflow-hidden" style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 space-y-8">
            <motion.span
              initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: easeOut }}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase font-medium"
              style={{ color: mintDeep }}
            >
              <span className="h-px w-8" style={{ background: mintDeep }} /> About Pejul
            </motion.span>

            <h2 className="text-white text-[clamp(40px,5.4vw,76px)] leading-[1.05] font-light tracking-[-0.02em]" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>
              Artistry meeting<br />
              <span className="not-italic font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif", letterSpacing: "-0.03em" }}>
                technical precision.
              </span>
            </h2>

            <div className="max-w-xl space-y-6 text-[17px] leading-relaxed text-white/65">
              <p>
                Founded in 2016, Pejul pairs Nigerian insight with international execution — building, scaling, and operating software, growth, and digitization for founders and enterprises across ten industries.
              </p>
              <p>
                We work at the intersection of engineering discipline and editorial-grade craft. Every system we ship is a study in balance, rhythm, and purpose — and we stay invested long after launch.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-[520px] pt-2">
              {[
                { v: 9, s: "+", l: "Years" },
                { v: 120, s: "+", l: "Projects" },
                { v: 10, s: "", l: "Industries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[clamp(28px,3.5vw,44px)] font-bold tabular-nums leading-none text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    <CountUp to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-[10px] tracking-[0.25em] uppercase mt-2" style={{ color: "rgba(255,255,255,0.55)" }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/about" className="inline-flex items-center gap-4 group">
                <span className="h-px w-12 transition-all duration-300 group-hover:w-20" style={{ background: mintDeep }} />
                <span className="text-white text-[12px] uppercase tracking-[0.28em] font-semibold transition-colors group-hover:text-[color:var(--mint)]" style={{ ["--mint" as never]: mintDeep }}>
                  Read the full story
                </span>
              </Link>
            </div>
          </div>

          {/* Image composition */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] w-full max-w-[520px] mx-auto">
              {/* Offset frame */}
              <div className="absolute -top-6 -right-6 w-full h-full z-0 border" style={{ borderColor: "rgba(85,230,165,0.25)" }} />

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: easeOut }}
                className="relative z-10 w-full h-full overflow-hidden bg-zinc-900 group"
              >
                <img
                  src={img.about}
                  alt="Pejul leadership"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Since badge */}
              <div className="absolute -bottom-8 -left-8 z-20 px-6 py-5 hidden lg:block" style={{ background: mintDeep }}>
                <p className="text-[#000] text-[26px] leading-[0.95] font-semibold" style={{ fontFamily: "'Fraunces', serif" }}>
                  Since<br />2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 border-t" style={{ background: `linear-gradient(180deg, ${mint} 0%, #ffffff 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <Eyebrow>Start The Conversation</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(40px,5.6vw,92px)]"
          style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}
        >
          Build it. Scale it. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">Operate it.</span>
        </motion.h2>
        <p className="mt-8 mx-auto max-w-2xl text-[17px] leading-relaxed" style={{ color: "#333333" }}>
          Tell us the outcome you want. We'll come back with the team, the system, and the timeline to put it on the board.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PillButton>Book A Strategy Session</PillButton>
          <PillButton variant="ghost">Email The Team</PillButton>
        </div>
        <div className="mt-10 text-[12px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>
          Build New Ventures · Scale Faster · Operate Smarter
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Home() {
  return (
    <main className="min-h-screen" style={{ background: "white" }}>
      <PillNav />
      <Hero />
      <TrustedBy />
      <Problem />
      <Pillars />
      <WhyPejul />
      <Process />
      <Work />
      <Industries />
      <AboutSnapshot />
      <Testimonials />
      <Team />


      <FinalCTA />
      <Footer />
    </main>
  );
}
