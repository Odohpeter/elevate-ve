import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { useMemo, useRef, useState } from "react";
import pf1 from "@/assets/pf-1.jpg";
import pf2 from "@/assets/pf-2.jpg";
import pf3 from "@/assets/pf-3.jpg";
import { PillNav, Footer } from "@/components/site/Chrome";
import { PROJECTS, type Category } from "@/data/projects";


export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Pejul" },
      { name: "description", content: "Selected work from Pejul — software projects, business digitization deployments, and startup growth engagements. Outcomes, screenshots, and the stack behind each." },
      { property: "og:title", content: "Portfolio — Pejul" },
      { property: "og:description", content: "Software, digitization, and growth projects — with the numbers and the systems behind them." },
    ],
  }),
  component: Portfolio,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;


const CATEGORIES: Array<{ key: "All" | Category; label: string }> = [
  { key: "All", label: "All Work" },
  { key: "Software", label: "Software Projects" },
  { key: "Digitization", label: "Business Digitization" },
  { key: "Website", label: "Website Projects" },
];

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

function PillButton({ children, variant = "solid", onClick }: { children: React.ReactNode; variant?: "solid" | "ghost"; onClick?: () => void }) {
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
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
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
    </motion.button>
  );
}

/* ---------- nav ---------- */
/* ---------- HERO ---------- */
function Hero({ count }: { count: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-6 sm:pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 60%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-10 sm:pb-16">
        <div className="mb-8 flex items-center gap-4 flex-wrap">
          <Eyebrow>Selected Work</Eyebrow>
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full" style={{ background: "#000", color: "#55e6a5" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} /> {count} projects shipped
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 min-w-0">
            <h1 className="text-[clamp(34px,6.4vw,108px)] font-bold leading-[0.95] tracking-[-0.04em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: deepInk }}>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                  The work.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                  The systems.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.2, ease: easeOut }} className="block">
                  The <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">numbers.</span>
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
              className="mt-10 max-w-[620px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#1a1a1a" }}
            >
              A cross-section of recent engagements — software we've shipped, businesses we've digitized, and startups we've scaled. Each one with the challenge, the system, and the outcome on record.
            </motion.p>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative h-[520px]">
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }}
              className="absolute top-0 right-0 w-[78%] h-[340px] rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <img src={pf1} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              className="absolute bottom-0 left-0 w-[58%] h-[260px] rounded-[24px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)] border-4 border-white"
            >
              <img src={pf3} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: easeOut }}
              className="absolute bottom-10 right-2 w-[40%] h-[200px] rounded-[20px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)] border-4 border-white"
            >
              <img src={pf2} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.9, ease: easeOut }}
              className="absolute -top-4 -left-4 rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
              style={{ background: "#55e6a5", color: "#000" }}
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0,0,0,0.65)" }}>Projects</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none">{count}+</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}


/* ---------- Filter + Grid ---------- */
function Grid() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="bg-white py-16 sm:py-24 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Browse By Category</Eyebrow>
            <h2 className="mt-4 text-[clamp(24px,3.4vw,48px)] font-bold tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              {visible.length} {visible.length === 1 ? "project" : "projects"} <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">in view.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => {
              const active = filter === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`rounded-full px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase transition border`}
                  style={
                    active
                      ? { background: "#55e6a5", color: deepInk, borderColor: deepInk }
                      : { background: "white", color: deepInk, borderColor: "rgba(0,0,0,0.15)" }
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: easeOut }}
                whileHover={{ y: -6 }}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <Link
                  to="/portfolio/$id"
                  params={{ id: p.id }}
                  className="group block cursor-pointer rounded-3xl overflow-hidden border bg-white h-full"
                  style={{ borderColor: "rgba(0,0,0,0.1)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {p.category === "Website" || p.category === "Digitization" ? (
                      <div
                        className="w-full h-full flex items-center justify-center px-[7%] pt-[8%] pb-[5%]"
                        style={{ background: "linear-gradient(135deg, #e8f7ef 0%, #ffffff 55%, #e8f7ef 100%)" }}
                      >
                        <div className="w-full flex flex-col items-center">
                          <div className="w-full rounded-[10px] bg-[#1a1a1a] p-[5px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] ring-1 ring-black/40">
                            <div className="relative mx-auto mb-[2px] h-[3px] w-[16%] rounded-b-sm bg-[#0a0a0a]" />
                            <div className="relative aspect-[16/10] rounded-[2px] overflow-hidden bg-white">
                              <motion.img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover object-top" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: easeOut }} />
                            </div>
                          </div>
                          <div className="relative w-[110%] -mt-[1px]">
                            <div className="h-[7px] rounded-b-[8px] bg-gradient-to-b from-[#d0d0d0] via-[#b4b4b4] to-[#8a8a8a] shadow-[0_6px_12px_-4px_rgba(0,0,0,0.3)]">
                              <div className="mx-auto h-[3px] w-[14%] rounded-b-[5px] bg-gradient-to-b from-[#6a6a6a] to-[#3a3a3a]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <motion.img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: easeOut }} />
                    )}
                    <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-white/90" style={{ color: deepInk }}>{p.category}</div>
                    <div className="absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full" style={{ background: "#000", color: "#55e6a5" }}>{p.year}</div>
                    {p.category === "Digitization" && (
                      <div className="absolute bottom-3 right-3 text-[9px] font-semibold tracking-wide uppercase px-2.5 py-1.5 rounded-md bg-amber-400 text-black shadow-lg flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-black" /> NDA · Not actual image
                      </div>
                    )}
                  </div>
                  <div className="p-7">
                    <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{p.client}</div>
                    <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{p.title}</h3>
                    <div className="mt-6 flex items-end justify-between">
                      <div className="flex gap-5">
                        {p.metrics.slice(0, 2).map((m) => (
                          <div key={m.l}>
                            <div className="text-[22px] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{m.v}</div>
                            <div className="text-[10px] tracking-[0.22em] uppercase mt-1" style={{ color: "#6b6b6b" }}>{m.l}</div>
                          </div>
                        ))}
                      </div>
                      <span className="text-[12px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: deepInk }}>View →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}





/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 border-t" style={{ background: `linear-gradient(180deg, ${mint} 0%, #ffffff 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <Eyebrow>Have A Project In Mind</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(30px,5.4vw,84px)]"
          style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}
        >
          Your project could be <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">next on this page.</span>
        </motion.h2>
        <p className="mt-8 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-relaxed" style={{ color: "#333333" }}>
          Tell us the outcome you want. We'll come back with the team, the system, and the timeline to put it on the board.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PillButton>Start A Project</PillButton>
          <PillButton variant="ghost">Talk To Our Team</PillButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Portfolio() {
  return (
    <main className="min-h-screen" style={{ background: "white" }}>
      <PillNav />
      <Hero count={PROJECTS.length} />
      <Grid />
      <FinalCTA />
      <Footer />
    </main>
  );
}

