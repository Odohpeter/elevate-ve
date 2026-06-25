import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PillNav, Footer, Eyebrow, PillButton, WordReveal, CountUp, deepInk, mint, mintDeep, easeOut } from "@/components/site/Chrome";
import hero from "@/assets/why-hero.jpg";

export const Route = createFileRoute("/why-pejul")({
  head: () => ({
    meta: [
      { title: "Why Pejul — Pejul" },
      { name: "description", content: "Global senior team. Deep Nigerian market expertise. Real startup operating experience. Long-term partnership and the infrastructure to keep growing." },
      { property: "og:title", content: "Why Pejul — Pejul" },
      { property: "og:description", content: "The credibility page: a global team with Lagos-on-the-ground judgement, built around long-term partnerships." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPejul,
});

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "#050505" }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-16 sm:pt-28 pb-20 sm:pb-32 grid grid-cols-12 gap-6 sm:gap-10">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow color="#fff">Why Pejul</Eyebrow>
          <h1 className="mt-8 text-[clamp(42px,6.4vw,108px)] font-bold leading-[0.95] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                Most firms sell hours.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                We sell <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">outcomes.</span>
              </motion.span>
            </span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }} className="mt-6 sm:mt-10 max-w-[600px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#cfcfcf" }}>
            A global senior team with deep Lagos-on-the-ground judgement, real founder scars, and an operating model designed for partnership measured in years — not invoices.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <PillButton>Book A Strategy Session</PillButton>
            <PillButton variant="ghost" invert to="/portfolio">Read The Receipts</PillButton>
          </motion.div>
        </div>
        <div className="hidden lg:block col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }}
            className="relative h-[520px] rounded-[28px] overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <img src={hero} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">Operating since</div>
                <div className="mt-1 text-[24px] font-bold tabular-nums">2016</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">Countries shipped in</div>
                <div className="mt-1 text-[24px] font-bold tabular-nums"><CountUp to={14} /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Five Pillars ---------- */
const PILLARS = [
  {
    k: "01",
    t: "Global Team",
    d: "Senior engineers, designers, strategists and product leads across Lagos, London, Berlin and New York. Time-zone overlap with whoever you sell to.",
    badge: "4 cities",
  },
  {
    k: "02",
    t: "Nigerian Market Expertise",
    d: "Decade of building for Nigerian consumers, regulators and rails — Paystack, Flutterwave, NIBSS, CBN, NDPR, USSD, agency banking. We don't learn on your dime.",
    badge: "Lagos HQ",
  },
  {
    k: "03",
    t: "Startup Experience",
    d: "Our partners have founded, led and exited companies. We've sat in your seat — the board prep, the burn meetings, the term-sheet negotiations.",
    badge: "Founders, not freelancers",
  },
  {
    k: "04",
    t: "Long-Term Support",
    d: "60% of our revenue comes from clients in year three or later. We're built to stay — same team, same context, year after year.",
    badge: "Avg. relationship: 3.4 yrs",
  },
  {
    k: "05",
    t: "Growth Infrastructure",
    d: "Beyond launch: analytics, growth ops, hiring loops, board reporting, fundraise support. The infrastructure that turns shipped product into a scaling business.",
    badge: "Built-in",
  },
];

function Pillars() {
  return (
    <section className="relative py-20 sm:py-32" style={{ background: "#0a0a0a", color: "#fff" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow color="#fff">The Five Pillars</Eyebrow>
            <h2 className="mt-6 text-[clamp(28px,4.5vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              What separates us from the firm <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">across town.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed lg:self-end" style={{ color: "#bcbcbc" }}>
            Five non-negotiables. Each is the result of a hard lesson learned, not a tagline. Hover any pillar to see the proof.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl border p-9 overflow-hidden transition-colors ${i === 0 ? "col-span-12 lg:col-span-8" : i === 1 ? "col-span-12 md:col-span-6 lg:col-span-4" : i === 2 ? "col-span-12 md:col-span-6 lg:col-span-4" : i === 3 ? "col-span-12 md:col-span-6 lg:col-span-4" : "col-span-12 md:col-span-6 lg:col-span-4"}`}
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[12px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>{p.k}</span>
                <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#cfcfcf" }}>{p.badge}</span>
              </div>
              <h3 className="mt-10 text-[28px] md:text-[32px] font-bold tracking-[-0.015em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{p.t}</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#cfcfcf" }}>{p.d}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: mintDeep }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Receipts (numbers) ---------- */
function Receipts() {
  const data = [
    { v: 120, suffix: "+", l: "Products shipped" },
    { v: 42, suffix: "M+", prefix: "$", l: "Capital raised by clients" },
    { v: 14, suffix: "", l: "Countries shipped in" },
    { v: 9, suffix: "", l: "Years operating" },
  ];
  return (
    <section className="bg-white py-16 sm:py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {data.map((s) => (
          <div key={s.l}>
            <div className="text-[clamp(32px,6vw,64px)] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <CountUp to={s.v} suffix={s.suffix} prefix={s.prefix ?? ""} />
            </div>
            <div className="mt-3 text-[11px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Comparison ---------- */
function Compared() {
  const rows = [
    ["Senior staffing", "Senior end-to-end — no juniors in disguise", "Sold senior, delivered junior"],
    ["Local market context", "Lagos team, Lagos rails, Lagos regulators", "Outsourced or learned on your dime"],
    ["Skin in the game", "Co-build, equity available, retainers for the long game", "Bill hours, leave"],
    ["After launch", "Growth, ops, hiring, reporting baked in", "Project closes, you're on your own"],
    ["Decision speed", "Founder-led pods, decisions in hours", "Account managers, decisions in weeks"],
  ];
  return (
    <section className="py-20 sm:py-32 border-t" style={{ background: "#f7f7f5", borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Eyebrow>Pejul vs. The Default</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-[clamp(26px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          The honest comparison nobody puts <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">on a slide.</span>
        </h2>

        <div className="mt-14 rounded-3xl overflow-hidden border bg-white" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          <div className="grid grid-cols-12 text-[11px] tracking-[0.28em] uppercase py-5 px-7 border-b" style={{ background: "#fafafa", color: "#6b6b6b", borderColor: "rgba(0,0,0,0.08)" }}>
            <div className="col-span-12 lg:col-span-4">Dimension</div>
            <div className="col-span-12 lg:col-span-4" style={{ color: deepInk }}>Pejul</div>
            <div className="col-span-12 lg:col-span-4">Typical agency</div>
          </div>
          {rows.map(([dim, us, them], i) => (
            <motion.div
              key={dim}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
              className="grid grid-cols-12 gap-4 py-6 px-7 border-b last:border-b-0 items-start"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div className="col-span-12 lg:col-span-4 text-[14px] tracking-[0.05em] uppercase" style={{ color: "#6b6b6b" }}>{dim}</div>
              <div className="col-span-12 lg:col-span-4 text-[15px]" style={{ color: deepInk }}>
                <span className="inline-flex w-5 h-5 mr-2 -mb-0.5 items-center justify-center rounded-full text-[10px] font-bold text-black align-middle" style={{ background: mintDeep }}>✓</span>
                {us}
              </div>
              <div className="col-span-12 lg:col-span-4 text-[15px]" style={{ color: "#777" }}>
                <span className="inline-flex w-5 h-5 mr-2 -mb-0.5 items-center justify-center rounded-full text-[10px] font-bold text-white align-middle bg-black/30">×</span>
                {them}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founders' note ---------- */
function FoundersNote() {
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[980px] px-5 sm:px-8">
        <Eyebrow>A Note From The Partners</Eyebrow>
        <blockquote className="mt-10 text-[clamp(20px,2.6vw,38px)] leading-[1.25] tracking-[-0.015em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          <span style={{ fontFamily: "'Fraunces', serif" }} className="italic">"We started Pejul because we kept watching brilliant founders pay six figures to firms that handed them a beautiful login screen and an empty Slack channel.</span>
          <span className="block mt-6">Nine years later, we measure ourselves by one thing — what our clients are still doing three years after we shipped. That's the whole pitch."</span>
        </blockquote>
        <div className="mt-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full" style={{ background: mintDeep }} />
          <div>
            <div className="text-[14px] font-semibold" style={{ color: deepInk }}>The Pejul Partners</div>
            <div className="text-[12px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>Lagos · London · Berlin · NYC</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 border-t" style={{ background: `linear-gradient(180deg, ${mint} 0%, #ffffff 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <Eyebrow>Now You Know</Eyebrow>
        <h2 className="mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(30px,5.4vw,84px)]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          Let's talk about <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">your move.</span>
        </h2>
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-relaxed" style={{ color: "#333" }}>
          A 30-minute conversation — no decks, no pitch theatre. Just sharp questions and an honest read on what's worth building.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PillButton>Book A Strategy Session</PillButton>
          <PillButton variant="ghost" to="/contact">Or Email Us Direct</PillButton>
        </div>
      </div>
    </section>
  );
}

function WhyPejul() {
  return (
    <div className="min-h-screen bg-white">
      <PillNav />
      <Hero />
      <Pillars />
      <Receipts />
      <Compared />
      <FoundersNote />
      <CTA />
      <Footer />
    </div>
  );
}
