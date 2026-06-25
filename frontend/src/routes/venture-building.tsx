import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PillNav, Footer, Eyebrow, PillButton, WordReveal, CountUp, deepInk, mint, mintDeep, easeOut } from "@/components/site/Chrome";
import hero from "@/assets/vb-hero.jpg";

export const Route = createFileRoute("/venture-building")({
  head: () => ({
    meta: [
      { title: "Venture Building — Pejul" },
      { name: "description", content: "For investors, business owners, HNWIs and diasporans: we provide the idea, the team and the playbook to launch and scale your new venture. You fund the build — we run everything else. No equity taken." },
      { property: "og:title", content: "Venture Building — Pejul" },
      { property: "og:description", content: "We bring the idea, tech team, marketing team and operators. You fund product, marketing and salaries. We don't take equity — the venture is 100% yours." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VentureBuilding,
});

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-6 sm:pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 70%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-14 sm:pb-20">
        <div className="mb-6 sm:mb-8"><Eyebrow>Venture Building</Eyebrow></div>
        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-[clamp(34px,6vw,96px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: deepInk }}>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
                  You bring the capital.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
                  We build the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">venture.</span>
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
              className="mt-6 sm:mt-10 max-w-[640px] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#1a1a1a" }}
            >
              For investors, business owners, high-net-worth individuals and diasporans who want to launch a new venture without quitting their day job. We bring the scalable, profitable idea, the tech team to build it, the marketers to grow it, and the operators to run it. You fund the build — we run everything else. <strong>We don't take equity. The company is 100% yours.</strong>
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }} className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <PillButton>Start A Venture With Us</PillButton>
              <PillButton variant="ghost" to="/portfolio">See What We've Built</PillButton>
            </motion.div>
          </div>

          <div className="hidden lg:block col-span-5 relative h-[520px]">
            <motion.div
              style={{ y: imgY }}
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }}
              className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <img src={hero} alt="" className="w-full h-full object-cover" width={1280} height={1280} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: easeOut }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#6b6b6b" }}>Ventures co-built</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none" style={{ color: deepInk }}>
                <CountUp to={17} suffix="" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85, ease: easeOut }}
              className="absolute -top-4 -right-4 rounded-2xl bg-black text-white px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: mintDeep }}>Capital raised</div>
              <div className="mt-1 text-[28px] font-bold tabular-nums leading-none">$<CountUp to={42} suffix="M+" /></div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- The Model ---------- */
function Model() {
  const items = [
    { k: "01", t: "The Idea", d: "We bring you a vetted, highly scalable and profitable venture thesis — market sized, competition mapped, economics modelled. Or we pressure-test your own." },
    { k: "02", t: "The Team", d: "A full operating company in a box: senior product, engineering, design, marketing and operations talent — deployed to your venture from day one." },
    { k: "03", t: "No Equity", d: "We don't take a single share. You fund product build, marketing and team salaries — we run the venture end-to-end. 100% of the upside stays with you." },
  ];
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>The Model</Eyebrow>
            <h2 className="mt-5 sm:mt-6 text-[clamp(28px,4.5vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              You fund it. We build, launch and <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">run it.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "#333" }}>
            Most investors don't have time to be founders. Most founders don't have the team. Pejul is the operating partner sitting between them — bringing the idea, the people and the playbook, while you keep full ownership of the company.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="col-span-12 md:col-span-4 relative rounded-3xl border bg-white p-6 sm:p-9 overflow-hidden"
              style={{ borderColor: "rgba(0,0,0,0.12)" }}
            >
              <div className="text-[12px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{it.k}</div>
              <h3 className="mt-6 sm:mt-10 text-[24px] sm:text-[28px] font-bold tracking-[-0.015em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{it.t}</h3>
              <p className="mt-3 sm:mt-4 text-[15px] leading-relaxed" style={{ color: "#333" }}>{it.d}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: mintDeep }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stages (Roadmap) ---------- */
const STAGES = [
  { p: "00", t: "Thesis", d: "We bring a vetted, scalable venture idea — or pressure-test yours — across market, competition and unit economics in a 2-week sprint. If it breaks here, you save 18 months.", out: "Validated brief + go/no-go" },
  { p: "01", t: "MVP", d: "Our tech team designs, engineers and ships the product to real users in 8–12 weeks. Built on the stack that will scale — no throwaway prototypes. Funded by you, owned by you.", out: "Live product + first 100 users" },
  { p: "02", t: "Traction", d: "Our marketing team runs growth experiments, paid loops, content, partnerships and sales — until we find the channels that compound. Operators take over day-to-day running of the business.", out: "Repeatable acquisition channel" },
  { p: "03", t: "Capital", d: "When it's time to raise, we prepare the investor materials, coach the founder through VC programs and accelerators, make warm intros from our network, and sit in the rooms during term-sheet negotiation.", out: "Pre-seed or seed close" },
  { p: "04", t: "Scale", d: "We keep providing the team for ongoing growth — engineering, marketing and operations — as long as you want us. You stay in full control of the company; we stay accountable for execution.", out: "Operating company, fully yours" },
];
function Stages() {
  return (
    <section className="relative py-20 sm:py-32" style={{ background: "#0a0a0a", color: "#fff" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-6">
            <Eyebrow color="#fff">The Journey</Eyebrow>
            <h2 className="mt-5 sm:mt-6 text-[clamp(28px,4.5vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Five stages. One <span style={{ fontFamily: "'Fraunces', serif", color: mintDeep }} className="italic font-normal">company.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-6 text-[15px] sm:text-[16px] leading-relaxed lg:self-end" style={{ color: "#bcbcbc" }}>
            Each stage has its own outcome and decision gate. You aren't locked in past a stage that doesn't earn its keep.
          </p>
        </div>
        <ol className="space-y-2">
          {STAGES.map((s, i) => (
            <motion.li
              key={s.p}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="group grid grid-cols-12 gap-3 sm:gap-6 items-start lg:items-center border-t py-6 sm:py-8"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="col-span-3 sm:col-span-2 lg:col-span-1 text-[11px] sm:text-[12px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>{s.p}</div>
              <div className="col-span-9 sm:col-span-10 lg:col-span-3 text-[22px] sm:text-[24px] md:text-[30px] font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{s.t}</div>
              <p className="col-span-12 lg:col-span-5 text-[15px] leading-relaxed" style={{ color: "#cfcfcf" }}>{s.d}</p>
              <div className="col-span-12 lg:col-span-3 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase" style={{ color: "#fff" }}>
                <span className="opacity-60">Outcome — </span>{s.out}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- What you get ---------- */
function Bundle() {
  const items = [
    "A vetted, scalable venture idea (or validation of yours)",
    "Senior tech team: product, engineering and design",
    "Brand, identity and marketing site",
    "In-house marketing team and first paid channel",
    "Operations team running the business day-to-day",
    "Full strategy: GTM, pricing, hiring, finance, legal",
    "Fundraise narrative, deck, data room and VC program coaching",
    "Warm investor intros (VC, family office, angels)",
    "Ongoing growth team after raise — for as long as you want",
  ];
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-8 sm:gap-12 items-start">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>What You Get</Eyebrow>
          <h2 className="mt-5 sm:mt-6 text-[clamp(26px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            A full operating company, <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">without hiring one.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-relaxed max-w-[440px]" style={{ color: "#333" }}>
            You provide the funding for product build, marketing spend and team salaries. We provide everything else a venture needs in its first 18 months — and stay on for the growth phase if you want us to.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-10">
            {items.map((it, i) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: easeOut }}
                className="flex items-start gap-3 py-3 sm:py-4 border-b"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <span className="mt-2 inline-block w-2 h-2 shrink-0 rounded-full" style={{ background: mintDeep }} />
                <span className="text-[15px] sm:text-[16px] leading-snug" style={{ color: deepInk }}>{it}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Split: You fund / We run ---------- */
function Split() {
  const you = [
    "Capital for product design & engineering",
    "Marketing & advertising spend",
    "Salaries for the operating team",
    "Vision, domain expertise & final say",
  ];
  const we = [
    "The vetted, scalable venture idea",
    "Tech, marketing & operations teams",
    "Full strategy, GTM & fundraising playbook",
    "Day-to-day execution, end-to-end",
  ];
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow>The Split</Eyebrow>
          <h2 className="mt-5 sm:mt-6 text-[clamp(26px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            You fund it. We <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">run it.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-relaxed max-w-[640px]" style={{ color: "#333" }}>
            A clean line between what the backer provides and what Pejul provides. No equity changes hands — only execution.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="col-span-12 md:col-span-6 rounded-3xl border bg-[#f7f7f5] p-6 sm:p-9"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>You Provide</span>
              <span className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
            </div>
            <div className="mt-5 sm:mt-6 text-[22px] sm:text-[26px] font-bold tracking-[-0.015em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              The Capital
            </div>
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              {you.map((y) => (
                <li key={y} className="flex items-start gap-3 border-b pb-3 sm:pb-4" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <span className="mt-2 inline-block w-2 h-2 shrink-0 rounded-full" style={{ background: deepInk }} />
                  <span className="text-[15px] sm:text-[16px]" style={{ color: deepInk }}>{y}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="col-span-12 md:col-span-6 rounded-3xl bg-black text-white p-6 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>We Provide</span>
              <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.18)" }} />
            </div>
            <div className="mt-5 sm:mt-6 text-[22px] sm:text-[26px] font-bold tracking-[-0.015em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              The Company
            </div>
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              {we.map((y) => (
                <li key={y} className="flex items-start gap-3 border-b pb-3 sm:pb-4" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  <span className="mt-2 inline-block w-2 h-2 shrink-0 rounded-full" style={{ background: mintDeep }} />
                  <span className="text-[15px] sm:text-[16px]" style={{ color: "#e9e9e9" }}>{y}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 sm:mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] tracking-[0.18em] uppercase" style={{ background: mintDeep, color: "#000" }}>
              0% equity to Pejul
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



/* ---------- Who we build with ---------- */
function Who() {
  const yes = [
    "Investors looking to deploy capital into an operated venture",
    "Business owners launching a new line outside their core",
    "High-net-worth individuals diversifying into tech and startups",
    "Diasporans backing ventures in their home market",
  ];
  const no = [
    "Anyone wanting us to fund the venture for them",
    "\"Get rich quick\" or hype-cycle plays with no real economics",
    "Backers unwilling to fund product, marketing and salaries",
    "Anything we wouldn't proudly put our name on",
  ];
  return (
    <section className="bg-[#f7f7f5] py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Eyebrow>Who We Build With</Eyebrow>
        <h2 className="mt-5 sm:mt-6 max-w-3xl text-[clamp(26px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          The honest version of <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">our filter.</span>
        </h2>
        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12 md:col-span-6 rounded-3xl bg-white border p-6 sm:p-9" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
            <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: mintDeep, filter: "brightness(0.65)" }}>We're In When</div>
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex w-5 h-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-black" style={{ background: mintDeep }}>✓</span>
                  <span className="text-[15px]" style={{ color: deepInk }}>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-3xl bg-black text-white p-6 sm:p-9">
            <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#aaa" }}>We Pass On</div>
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              {no.map((y) => (
                <li key={y} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex w-5 h-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white border" style={{ borderColor: "rgba(255,255,255,0.4)" }}>×</span>
                  <span className="text-[15px]" style={{ color: "#e5e5e5" }}>{y}</span>
                </li>
              ))}
            </ul>
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
        <Eyebrow>Start The Conversation</Eyebrow>
        <h2 className="mt-6 sm:mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(30px,5.4vw,84px)]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          Your next venture, fully built and <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">100% yours.</span>
        </h2>
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-relaxed" style={{ color: "#333" }}>
          30 minutes. NDA available. You leave with a clear view of the idea, the team, the budget and the timeline — and zero equity given up.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PillButton>Start A Venture With Us</PillButton>
          <PillButton variant="ghost" to="/contact">Or Just Email Us</PillButton>
        </div>
      </div>
    </section>
  );
}

function VentureBuilding() {
  return (
    <div className="min-h-screen bg-white">
      <PillNav />
      <Hero />
      <Model />
      <Stages />
      <Bundle />
      <Split />
      <Who />
      <CTA />
      <Footer />
    </div>
  );
}
