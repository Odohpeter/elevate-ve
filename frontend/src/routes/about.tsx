import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import storyImg from "@/assets/about-story.webp";
import globeImg from "@/assets/about-globe.webp";
import futureImg from "@/assets/about-future.webp";
import craftImg from "@/assets/about-craft.webp";
import {
  PillNav,
  Footer,
  Eyebrow,
  PillButton,
  CountUp,
  deepInk,
  mint,
  mintDeep,
  easeOut,
} from "@/components/site/Chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pejul — Builders of Ventures, Growth & Digital Transformation" },
      { name: "description", content: "Pejul is a Nigerian-founded, globally-staffed technology partner building ventures, scaling startups, and digitizing operations since 2016." },
      { property: "og:title", content: "About Pejul" },
      { property: "og:description", content: "Our story, mission, vision, leadership, global team structure, and the values that drive Pejul." },
      { property: "og:image", content: storyImg },
      { name: "twitter:image", content: storyImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "#050505" }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-24 sm:pt-28 pb-20 sm:pb-32 grid grid-cols-12 gap-6 sm:gap-10">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow color="#fff">About Pejul</Eyebrow>
          <h1 className="mt-8 text-[clamp(34px,6.4vw,108px)] font-bold leading-[0.95] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                Nine years building
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                what <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">matters.</span>
              </motion.span>
            </span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }} className="mt-10 max-w-[600px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#cfcfcf" }}>
            Pejul is a Nigerian-founded, globally-staffed technology partner — building ventures, scaling startups, and digitizing operations across four continents since 2016.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }} className="mt-10 flex flex-wrap items-center gap-4">
            <PillButton to="/contact">Work With Us</PillButton>
            <PillButton variant="ghost" invert to="/team">Meet The Team</PillButton>
          </motion.div>
        </div>
        <div className="hidden lg:block lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }}
            className="relative h-[520px] rounded-[28px] overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <img src={storyImg} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">Founded</div>
                <div className="mt-1 text-[24px] font-bold tabular-nums">2016</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">Cities</div>
                <div className="mt-1 text-[24px] font-bold tabular-nums">4</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Five Beliefs (mirrors Pillars) ---------- */
const BELIEFS = [
  { k: "01", t: "Built In Lagos", d: "Founded in Nigeria with a decade of operating context — Paystack, Flutterwave, NIBSS, CBN, NDPR. We don't import playbooks; we wrote ours here.", badge: "Lagos HQ" },
  { k: "02", t: "Staffed Globally", d: "Senior engineers, designers and strategists across Lagos, London, Berlin and New York. Time-zone overlap with whoever you sell to.", badge: "4 cities" },
  { k: "03", t: "Partners, Not Vendors", d: "Our partners have founded, run and exited companies. We sit in the founder's seat — board prep, burn meetings, hard calls — because we've done it.", badge: "Founders" },
  { k: "04", t: "Three Practices, One Bench", d: "Venture-building, growth scaling and digital transformation share the same senior pod. No handoffs, no re-onboarding, one accountable team.", badge: "Integrated" },
  { k: "05", t: "Measured In Years", d: "60% of our revenue comes from clients in year three or later. We're built to stay — same team, same context, year after year.", badge: "3.4 yr avg" },
];

function Beliefs() {
  return (
    <section className="relative py-20 sm:py-32" style={{ background: "#0a0a0a", color: "#fff" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow color="#fff">What We Believe</Eyebrow>
            <h2 className="mt-6 text-[clamp(34px,4.5vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Five convictions shaped by a <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">decade of building.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed self-end" style={{ color: "#bcbcbc" }}>
            Each is the residue of a hard lesson, not a tagline. They explain how we work and who we work with.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {BELIEFS.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl border p-9 overflow-hidden transition-colors ${i === 0 ? "col-span-12 lg:col-span-8" : "col-span-12 lg:col-span-4"}`}
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

/* ---------- Numbers (Receipts) ---------- */
function Numbers() {
  const data = [
    { v: 9, suffix: "", l: "Years operating" },
    { v: 120, suffix: "+", l: "Products shipped" },
    { v: 42, suffix: "M+", prefix: "$", l: "Capital raised by clients" },
    { v: 14, suffix: "", l: "Countries shipped in" },
  ];
  return (
    <section className="bg-white py-16 sm:py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-10">
        {data.map((s) => (
          <div key={s.l} className="col-span-6 md:col-span-3">
            <div className="text-[44px] md:text-[64px] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              <CountUp to={s.v} suffix={s.suffix} prefix={s.prefix ?? ""} />
            </div>
            <div className="mt-3 text-[11px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Story Timeline ---------- */
const STORY = [
  ["2016", "Founded in Lagos", "Started as a two-person shop building for Nigerian fintech and SME teams."],
  ["2018", "First product exits", "Two early client products acquired. We start formalising the venture-building practice."],
  ["2020", "Pan-African expansion", "Shipped into Ghana, Kenya, South Africa. Built our remote senior operating model."],
  ["2022", "Global bench", "Senior team across Lagos, London, Berlin and NYC. Time-zone overlap with any market."],
  ["2024", "Three practices, one firm", "Venture-building, startup growth and business digitization merge into one integrated pod."],
];

function Story() {
  return (
    <section className="py-20 sm:py-32 border-t" style={{ background: "#f7f7f5", borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-6 text-[clamp(32px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            From a Lagos two-desk shop to a <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">four-continent firm.</span>
          </h2>
          <p className="mt-8 text-[16px] leading-relaxed max-w-md" style={{ color: "#444" }}>
            No fundraise, no acquisition, no theatre — just nine years of shipping for the kinds of founders and leaders we like to keep around.
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <img src={globeImg} alt="" className="w-full h-72 object-cover" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <ol className="relative border-l" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            {STORY.map(([year, title, body], i) => (
              <motion.li
                key={year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: easeOut }}
                className="pl-8 pb-12 last:pb-0 relative"
              >
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full" style={{ background: mintDeep }} />
                <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{year}</div>
                <div className="mt-2 text-[22px] md:text-[26px] font-bold tracking-[-0.015em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{title}</div>
                <div className="mt-2 text-[15px] leading-relaxed" style={{ color: "#444" }}>{body}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Global Team strip ---------- */
function GlobalTeam() {
  const cities = [
    { c: "Lagos", r: "Headquarters · Engineering · Strategy" },
    { c: "London", r: "Partnerships · Finance · Fundraise support" },
    { c: "Berlin", r: "Product design · Platform engineering" },
    { c: "New York", r: "Go-to-market · Venture network" },
  ];
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12 items-center">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>Where We Operate</Eyebrow>
          <h2 className="mt-6 text-[clamp(32px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            One firm, <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">four cities,</span> shared bench.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed max-w-md" style={{ color: "#555" }}>
            Hire one team, get global coverage. Senior partners in the rooms that matter, on the time zones your customers buy in.
          </p>
          <div className="mt-10"><PillButton to="/team">Meet the partners</PillButton></div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {cities.map((c, i) => (
              <motion.div
                key={c.c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: easeOut }}
                className="col-span-12 md:col-span-6 rounded-3xl border p-7 group hover:-translate-y-1 transition-transform"
                style={{ borderColor: "rgba(0,0,0,0.1)", background: "#fafafa" }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ background: mintDeep }} />
                  <span className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>City {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-5 text-[26px] font-bold tracking-[-0.015em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{c.c}</div>
                <div className="mt-2 text-[14px]" style={{ color: "#555" }}>{c.r}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mission / Vision split ---------- */
function MissionVision() {
  return (
    <section className="py-20 sm:py-32 border-t" style={{ background: "#0a0a0a", color: "#fff", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-10">
        <div className="col-span-12 lg:col-span-6 rounded-3xl p-10 border relative overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)" }}>
          <Eyebrow color="#fff">Mission</Eyebrow>
          <h3 className="mt-8 text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Build the operating layer for <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">ambitious African and global founders.</span>
          </h3>
          <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#cfcfcf" }}>
            Strategy, software and growth infrastructure — delivered by senior partners who'll still be in the room a year from now.
          </p>
          <img src={craftImg} alt="" className="mt-10 rounded-2xl w-full h-56 object-cover opacity-90" />
        </div>
        <div className="col-span-12 lg:col-span-6 rounded-3xl p-10 border relative overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)" }}>
          <Eyebrow color="#fff">Vision</Eyebrow>
          <h3 className="mt-8 text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            A generation of category-defining companies built <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">from here, for everywhere.</span>
          </h3>
          <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#cfcfcf" }}>
            We measure success in the durability of what our clients become — not the polish of what we hand over.
          </p>
          <img src={futureImg} alt="" className="mt-10 rounded-2xl w-full h-56 object-cover opacity-90" />
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
        <blockquote className="mt-10 text-[clamp(24px,2.6vw,38px)] leading-[1.25] tracking-[-0.015em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          <span style={{ fontFamily: "'Fraunces', serif" }} className="italic">"Pejul started because we wanted a firm that thought like a builder and shipped like a startup.</span>
          <span className="block mt-6">Nine years on, we judge ourselves by one number — what our clients are still doing three years after we shipped. Everything else is decoration."</span>
        </blockquote>
        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
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
        <Eyebrow>Let's Build</Eyebrow>
        <h2 className="mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(38px,5.4vw,84px)]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          Now you know who <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">we are.</span>
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-[17px] leading-relaxed" style={{ color: "#333" }}>
          Tell us what you're trying to build. Thirty minutes, no decks — just a sharp read on what's worth doing next.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PillButton to="/contact">Book A Strategy Session</PillButton>
          <PillButton variant="ghost" to="/why-pejul">Why Pejul</PillButton>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-white">
      <PillNav />
      <Hero />
      <Beliefs />
      <Numbers />
      <Story />
      <GlobalTeam />
      <MissionVision />
      <FoundersNote />
      <CTA />
      <Footer />
    </div>
  );
}
