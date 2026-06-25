import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { PillNav, Footer, Eyebrow, PillButton, WordReveal, CountUp, deepInk, mint, mintDeep, easeOut } from "@/components/site/Chrome";
import hero from "@/assets/ai-hero.jpg";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI For Business — Pejul" },
      { name: "description", content: "Pejul ships production-grade AI agents and assistants — support, sales, internal ops and knowledge — wired into your existing stack." },
      { property: "og:title", content: "AI For Business — Pejul" },
      { property: "og:description", content: "AI agents that actually work — answering tickets, qualifying leads, briefing teams and powering knowledge — running 24/7." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AIPage,
});

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return (
    <section ref={ref} className="relative overflow-hidden text-white" style={{ background: "#050505" }}>
      <motion.img
        src={hero}
        alt=""
        style={{ y: imgY }}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        width={1280} height={1280}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 70%, #050505 100%)" }} />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-24 sm:pt-32 pb-16 sm:pb-28">
        <Eyebrow color="#fff">AI For Business</Eyebrow>
        <h1 className="mt-8 text-[clamp(34px,6.4vw,108px)] font-bold leading-[0.95] tracking-[-0.035em] max-w-[1100px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          <span className="block overflow-hidden">
            <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: easeOut }} className="block">
              AI that does the
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.1, ease: easeOut }} className="block">
              <span style={{ color: mintDeep, fontFamily: "'Fraunces', serif" }} className="italic font-normal">actual</span> work.
            </motion.span>
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: easeOut }} className="mt-10 max-w-[680px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#cfcfcf" }}>
          We build, ship and operate production-grade AI agents wired into your real systems — Slack, your CRM, your help desk, your knowledge base. No demos that fall apart on day two.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: easeOut }} className="mt-10 flex flex-wrap items-center gap-4">
          <PillButton>Scope An AI Project</PillButton>
          <PillButton variant="ghost" invert to="/portfolio">See AI In Production</PillButton>
        </motion.div>

        <div className="mt-12 sm:mt-20 grid grid-cols-12 gap-4 sm:gap-8 max-w-[900px]">
          {[
            { v: "63%", l: "Avg. ticket deflection" },
            { v: "4.1×", l: "Sales qualification speed" },
            { v: "24/7", l: "Always-on coverage" },
            { v: "2-6w", l: "Time to production" },
          ].map((s) => (
            <div key={s.l} className="col-span-6 md:col-span-3">
              <div className="text-[32px] md:text-[44px] font-bold tabular-nums leading-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{s.v}</div>
              <div className="mt-2 text-[10px] tracking-[0.28em] uppercase" style={{ color: "#9a9a9a" }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- Four Products ---------- */
const PRODUCTS = [
  {
    k: "01",
    t: "AI Support Agents",
    one: "Deflect tickets without losing your brand voice.",
    d: "24/7 first-line support across web, WhatsApp, in-app and email. Trained on your help docs, past tickets and SOPs — escalates cleanly when it needs a human.",
    bullets: ["Multi-channel (web, WhatsApp, email)", "Tone-matched to your brand", "Confidence-based human handoff", "Full audit trail for compliance"],
  },
  {
    k: "02",
    t: "AI Sales Assistants",
    one: "Qualify leads in seconds — book the right calls only.",
    d: "Lives in your inbox, website chat and CRM. Researches the lead, asks the qualifying questions, books straight into the right rep's calendar.",
    bullets: ["Auto-research before reply", "Custom qualification framework", "Calendar + CRM (HubSpot, Salesforce)", "Hand-off summaries for the rep"],
  },
  {
    k: "03",
    t: "AI Knowledge Bases",
    one: "Turn your docs, drives and tickets into one source of truth.",
    d: "Indexed, versioned and searchable in plain English. Cites the source on every answer — no hallucinated policies.",
    bullets: ["Notion, Drive, Confluence, Slack ingest", "Source-cited answers", "Role-based access control", "Stale-content alerts to owners"],
  },
  {
    k: "04",
    t: "AI Internal Assistants",
    one: "An ops sidekick every team member can DM in Slack.",
    d: "Briefings, drafting, reporting, data pulls, scheduled summaries. Connected to the tools your team already uses.",
    bullets: ["Slack / Teams / WhatsApp native", "Action-taking via tool calls", "Per-team permissions", "Weekly impact reports to leadership"],
  },
];

function Products() {
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-10 items-end mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="mt-6 text-[clamp(34px,4.5vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              Four AI products. One <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">delivery team.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[16px] leading-relaxed" style={{ color: "#333" }}>
            Pick one, pick all four. Each ships standalone and composes cleanly with the others — same data layer, same observability, same support team.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="group col-span-12 lg:col-span-6 relative rounded-3xl border bg-white p-9 overflow-hidden transition-colors hover:bg-black hover:text-white"
              style={{ borderColor: "rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-start justify-between">
                <div className="text-[12px] tracking-[0.3em] uppercase opacity-60">{p.k}</div>
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" style={{ borderColor: "currentColor" }}>→</span>
              </div>
              <h3 className="mt-10 text-[28px] md:text-[32px] font-bold tracking-[-0.015em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{p.t}</h3>
              <p className="mt-3 text-[16px] leading-snug" style={{ color: "inherit", opacity: 0.85 }}>{p.one}</p>
              <p className="mt-6 text-[14px] leading-relaxed opacity-70">{p.d}</p>
              <ul className="mt-7 space-y-2 text-[13px] opacity-80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How We Deploy ---------- */
const STEPS = [
  { p: "Week 1", t: "Audit & Scope", d: "We map your workflows, data, tools and risk surface. Output: a costed scope with KPIs your CFO will accept." },
  { p: "Week 2-3", t: "Build & Train", d: "We build the agent on your stack, ingest your knowledge, and run it in a private sandbox against real historic tickets." },
  { p: "Week 4", t: "Pilot", d: "Live with a controlled cohort — internal team or 10% of traffic. We tune prompts, tools and guardrails against real outcomes." },
  { p: "Week 5+", t: "Roll Out & Operate", d: "Full rollout with on-call coverage, monthly reviews, prompt versioning, and a quarterly model/stack refresh." },
];

function HowWeDeploy() {
  return (
    <section className="relative py-20 sm:py-32" style={{ background: mint }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Eyebrow>How We Deploy</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-[clamp(34px,4.5vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          From kick-off to production in <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">4–6 weeks.</span>
        </h2>
        <div className="mt-10 sm:mt-16 grid grid-cols-12 gap-4 sm:gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="col-span-12 md:col-span-6 lg:col-span-3 rounded-3xl bg-white p-7 border"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div className="text-[11px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>{s.p}</div>
              <h3 className="mt-8 text-[22px] font-bold" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{s.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#333" }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stack / Trust ---------- */
function Stack() {
  const groups = [
    { h: "Models", items: ["OpenAI", "Anthropic", "Google Gemini", "Open-source via vLLM"] },
    { h: "Orchestration", items: ["LangGraph", "OpenAI Agents SDK", "Custom routers", "Eval harnesses"] },
    { h: "Data & Retrieval", items: ["pgvector / Pinecone", "Postgres / Supabase", "Knowledge ingest pipelines", "Source-cited RAG"] },
    { h: "Channels", items: ["Web / in-app", "WhatsApp Business", "Slack / Teams", "Email / SMS / voice"] },
  ];
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12 items-start">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>The Stack</Eyebrow>
          <h2 className="mt-6 text-[clamp(30px,3.5vw,52px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            Model-agnostic. Stack-pragmatic. <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">Yours-by-default.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed max-w-[380px]" style={{ color: "#333" }}>
            We pick the right model and tools for the job — and you keep the keys, the data, the prompts and the evals.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 sm:gap-5">
          {groups.map((g) => (
            <div key={g.h} className="col-span-12 sm:col-span-6 rounded-2xl border p-6" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{g.h}</div>
              <ul className="mt-4 space-y-2">
                {g.items.map((x) => (
                  <li key={x} className="text-[15px]" style={{ color: deepInk }}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Live numbers ---------- */
function Numbers() {
  return (
    <section className="relative py-20 sm:py-28" style={{ background: "#0a0a0a", color: "#fff" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-10">
        {[
          { v: 1.2, suffix: "M+", l: "Conversations handled" },
          { v: 63, suffix: "%", l: "Avg. ticket deflection" },
          { v: 41, suffix: "%", l: "Faster lead response" },
          { v: 18, suffix: "", l: "AI agents in production" },
        ].map((s) => (
          <div key={s.l} className="col-span-6 md:col-span-3">
            <div className="text-[44px] md:text-[64px] font-bold tabular-nums leading-none" style={{ fontFamily: "'Inter Tight', sans-serif", color: mintDeep }}>
              <CountUp to={s.v} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-[11px] tracking-[0.28em] uppercase" style={{ color: "#aaa" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "Will the AI make up answers?", a: "Our retrieval pipelines force source-cited responses and a confidence threshold. Below threshold, the agent escalates — it does not guess." },
  { q: "Whose models do we use?", a: "Whichever performs best per task. We're model-agnostic and run side-by-side evals before committing. You own the prompts, the eval set, and the keys." },
  { q: "What about data privacy?", a: "Your data stays in your tenancy where possible. We default to providers with no-training data commitments, and offer fully self-hosted variants on request." },
  { q: "How is this priced?", a: "Fixed-fee build, then a monthly run rate based on volume + on-call coverage. We share the pricing model in the audit week — no surprises." },
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 sm:py-32 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Eyebrow>FAQs</Eyebrow>
        <h2 className="mt-6 text-[clamp(32px,3.8vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          The questions buyers <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">always ask.</span>
        </h2>
        <div className="mt-10 border-t" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:gap-6 py-7 text-left">
                <span className="min-w-0 text-[15px] sm:text-[18px] md:text-[22px] font-semibold tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3, ease: easeOut }} className="inline-flex w-10 h-10 items-center justify-center rounded-full border shrink-0" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" /></svg>
                </motion.span>
              </button>
              <motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.4, ease: easeOut }} className="overflow-hidden">
                <p className="pb-7 pr-14 text-[16px] leading-relaxed" style={{ color: "#333" }}>{f.a}</p>
              </motion.div>
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
    <section className="relative overflow-hidden py-20 sm:py-32 border-t" style={{ background: `linear-gradient(180deg, ${mint} 0%, #ffffff 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <Eyebrow>Get An AI Audit</Eyebrow>
        <h2 className="mt-8 mx-auto max-w-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(32px,5.4vw,84px)]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
          Tell us the workflow. We'll tell you the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">ROI.</span>
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-[17px] leading-relaxed" style={{ color: "#333" }}>
          45 minutes, deeply technical, and you walk away with a costed plan whether we work together or not.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PillButton>Book An AI Audit</PillButton>
          <PillButton variant="ghost" to="/contact">Send Us A Brief</PillButton>
        </div>
      </div>
    </section>
  );
}

function AIPage() {
  return (
    <div className="min-h-screen bg-white">
      <PillNav />
      <Hero />
      <Products />
      <HowWeDeploy />
      <Stack />
      <Numbers />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
