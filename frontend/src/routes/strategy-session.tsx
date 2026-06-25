import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import heroImg from "@/assets/ss-hero.webp";
import { PillNav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/strategy-session")({
  head: () => ({
    meta: [
      { title: "Book A Private Strategy Session — Pejul" },
      { name: "description", content: "Not a sales call. A private 45-minute working session with a Pejul partner to pressure-test your idea, your roadmap, or your operation." },
      { property: "og:title", content: "Book A Private Strategy Session — Pejul" },
      { property: "og:description", content: "45 minutes. One partner. A clear next move you can act on Monday morning." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: StrategyPage,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

/* ---------- nav (kept consistent with the rest of the site) ---------- */
/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 55%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-14 sm:pb-20 grid grid-cols-12 gap-6 sm:gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }} className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase" style={{ borderColor: "rgba(0,0,0,0.18)", color: deepInk }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
            Strategy Session · 45 minutes · Free
          </motion.div>
          <motion.h1 style={{ x: wordX }} className="mt-6 text-[clamp(34px,6vw,88px)] leading-[0.92] tracking-tight font-semibold" >
            Book a private <br />
            <span className="italic font-normal" style={{ color: "#3a7d5c" }}>strategy</span> session.
          </motion.h1>
          <p className="mt-6 sm:mt-8 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.6]" style={{ color: "#2b2b2b" }}>
            This isn't a sales call. It's a working session with a Pejul partner —
            we read what you send ahead, then spend 45 minutes pressure-testing the
            move you're actually about to make. You leave with a written next step,
            whether or not we end up working together.
          </p>
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-[560px]">
            {[
              { v: "45 min", l: "Working session" },
              { v: "1:1", l: "With a partner" },
              { v: "₦0", l: "No obligation" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[20px] sm:text-[28px] font-semibold leading-none" style={{ color: deepInk }}>{s.v}</div>
                <div className="mt-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a href="#form" className="rounded-full border px-7 py-4 text-[14px] hover:opacity-90 transition" style={{ background: deepInk, color: "white", borderColor: deepInk }}>
              Request a slot →
            </a>
            <a href="#what" className="rounded-full border px-7 py-4 text-[14px] hover:opacity-90 transition" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>
              What we'll cover
            </a>
          </div>
        </div>
        <motion.div style={{ y: imgY }} className="col-span-12 lg:col-span-5 relative">
          <div className="relative rounded-[28px] overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.35)" }}>
            <img src={heroImg} alt="Strategy session workspace" width={1024} height={1024} className="block w-full h-auto" />
          </div>
          <div className="absolute -bottom-3 left-2 sm:-bottom-6 sm:-left-6 rounded-2xl border bg-white px-5 py-4 max-w-[260px]" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 20px 50px -20px rgba(0,0,0,0.2)" }}>
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>Avg. reply</div>
            <div className="text-[16px] sm:text-[20px] font-semibold leading-tight" style={{ color: deepInk }}>Under 4 hours</div>
          </div>
          <div className="absolute -top-3 right-2 sm:-top-6 sm:-right-6 rounded-2xl border px-5 py-4" style={{ background: mintDeep, borderColor: "rgba(0,0,0,0.85)" }}>
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-black/70">This week</div>
            <div className="text-[16px] sm:text-[20px] font-semibold leading-tight text-black">4 slots left</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- "What you'll leave with" ---------- */
function WhatWeCover() {
  const items = [
    { k: "01", t: "An honest read", d: "We tell you what we actually think — the parts of your plan that are working, and the parts we'd shelve before spending another naira." },
    { k: "02", t: "A sharper next move", d: "One clear thing to do next, sized to the team and budget you actually have. Not a 40-slide deck of options." },
    { k: "03", t: "A written summary", d: "Sent within 48 hours. Yours to keep, share with co-founders, or use as a brief — even if you never speak to us again." },
  ];
  return (
    <section id="what" className="relative py-16 sm:py-28 px-5 sm:px-8" style={{ background: deepInk, color: "white" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 sm:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>What you leave with</div>
            <h2 className="mt-4 text-[clamp(32px,5vw,56px)] leading-[0.95] font-semibold">Three deliverables. Every time.</h2>
            <p className="mt-6 text-white/70 text-[15px] leading-relaxed max-w-[420px]">
              We've run this exact session hundreds of times. The shape doesn't change —
              only the answers do.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {items.map((it) => (
              <div key={it.k} className="rounded-3xl border p-7 flex flex-col" style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.03)" }}>
                <div className="text-[12px] tracking-[0.3em]" style={{ color: mintDeep }}>{it.k}</div>
                <div className="mt-6 text-[22px] font-semibold leading-tight">{it.t}</div>
                <div className="mt-3 text-[14px] leading-relaxed text-white/70">{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FORM ---------- */
const INDUSTRIES = ["Fintech", "Healthcare", "Education", "Logistics", "Real Estate", "Hospitality", "Professional Services", "E-Commerce", "Manufacturing", "Government", "NGO", "Other"];
const PROJECT_TYPES = ["New software product", "Rebuild / re-platform", "Business digitization", "Startup growth & launch", "Internal tooling", "Not sure yet"];
const REVENUE = ["Pre-revenue", "< ₦150M", "₦150M – ₦750M", "₦750M – ₦3B", "₦3B – ₦15B", "₦15B+"];
const BUDGETS = ["< ₦25M", "₦25M – ₦85M", "₦85M – ₦250M", "₦250M – ₦850M", "₦850M+", "Need help scoping"];
const TIMELINES = ["ASAP / this month", "Within 1–3 months", "3–6 months", "Exploring options"];

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[0.22em] uppercase mb-2" style={{ color: "#6b6b6b" }}>
        {label}{required && <span style={{ color: mintDeep }}> *</span>}
      </span>
      {children}
    </label>
  );
}

function StrategyForm() {
  const [sent, setSent] = useState(false);
  const inputCls = "w-full rounded-2xl border bg-white px-5 py-4 text-[15px] outline-none focus:border-black/70 transition";
  const inputStyle = { borderColor: "rgba(0,0,0,0.18)", color: deepInk } as React.CSSProperties;
  return (
    <section id="form" className="relative py-16 sm:py-28 px-5 sm:px-8" style={{ background: mint }}>
      <div className="mx-auto max-w-[1100px] grid grid-cols-12 gap-6 sm:gap-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#3a7d5c" }}>Request a slot</div>
          <h2 className="mt-4 text-[clamp(32px,5vw,52px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>
            Tell us where you are.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#2b2b2b" }}>
            The more honest the answers, the better the session. We read every
            submission ourselves — no chatbot, no SDR queue.
          </p>
          <div className="mt-10 rounded-2xl border p-5 bg-white/60" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            <div className="text-[12px] tracking-[0.22em] uppercase" style={{ color: "#6b6b6b" }}>What happens next</div>
            <ol className="mt-3 space-y-2 text-[14px]" style={{ color: deepInk }}>
              <li>1 · We reply within 4 hours.</li>
              <li>2 · You pick a slot that fits.</li>
              <li>3 · We meet — and you leave with a plan.</li>
            </ol>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          {sent ? (
            <div className="rounded-3xl border bg-white p-10" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
              <div className="text-[12px] tracking-[0.3em] uppercase" style={{ color: "#3a7d5c" }}>Received</div>
              <h3 className="mt-3 text-[32px] font-semibold leading-tight" style={{ color: deepInk }}>Thank you — we've got it.</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#2b2b2b" }}>
                A partner will read your brief and reply within 4 hours with two
                or three slots that fit. If anything is urgent, mention it in your
                reply and we'll move things around.
              </p>
              <button onClick={() => setSent(false)} className="mt-8 rounded-full border px-6 py-3 text-[13px]" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>Send another</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border bg-white p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 30px 80px -40px rgba(0,0,0,0.3)" }}
            >
              <Field label="Name" required>
                <input required maxLength={100} className={inputCls} style={inputStyle} placeholder="Your full name" />
              </Field>
              <Field label="Company" required>
                <input required maxLength={120} className={inputCls} style={inputStyle} placeholder="Company name" />
              </Field>
              <Field label="Work email" required>
                <input type="email" required maxLength={160} className={inputCls} style={inputStyle} placeholder="you@company.com" />
              </Field>
              <Field label="Industry" required>
                <select required className={inputCls} style={inputStyle} defaultValue="">
                  <option value="" disabled>Select an industry</option>
                  {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="Current revenue" required>
                <select required className={inputCls} style={inputStyle} defaultValue="">
                  <option value="" disabled>Select a range</option>
                  {REVENUE.map((i) => <option key={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="Project type" required>
                <select required className={inputCls} style={inputStyle} defaultValue="">
                  <option value="" disabled>What are you building?</option>
                  {PROJECT_TYPES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="Budget range" required>
                <select required className={inputCls} style={inputStyle} defaultValue="">
                  <option value="" disabled>Pick a budget</option>
                  {BUDGETS.map((i) => <option key={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="Timeline" required>
                <select required className={inputCls} style={inputStyle} defaultValue="">
                  <option value="" disabled>When do you want to start?</option>
                  {TIMELINES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Goals" required>
                  <textarea required maxLength={1500} rows={5} className={inputCls + " resize-none"} style={inputStyle} placeholder="What does success look like in the next 6 months? What's the single thing that, if we solved it together, would matter most?" />
                </Field>
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-[12px] max-w-[420px]" style={{ color: "#6b6b6b" }}>
                  By submitting you agree we may reply by email. We don't share, sell,
                  or sync your details with any third party.
                </p>
                <button type="submit" className="rounded-full px-5 sm:px-8 py-4 text-[14px] hover:opacity-90 transition" style={{ background: deepInk, color: "white" }}>
                  Request session →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "Is this really free?", a: "Yes. We run a small number of these every week because the best projects start with a real conversation, not a pitch deck. There's no follow-up sales sequence." },
    { q: "Who will I actually speak to?", a: "A Pejul partner — the same person who would lead the engagement if we worked together. No account managers, no junior researchers." },
    { q: "What if I'm not ready to commit to a project?", a: "Most people we speak to aren't, yet. The session is genuinely useful as a second opinion before you decide anything." },
    { q: "Do you sign NDAs?", a: "Happy to. Send one with your request and we'll countersign before the call." },
  ];
  return (
    <section className="py-16 py-16 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-12 gap-6 sm:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>Questions, answered</div>
          <h2 className="mt-4 text-[clamp(32px,5vw,52px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>The fine print, up front.</h2>
        </div>
        <div className="col-span-12 lg:col-span-8 divide-y" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          {items.map((it) => (
            <details key={it.q} className="group py-6 border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-[18px] font-medium" style={{ color: deepInk }}>{it.q}</span>
                <span className="text-[22px] transition-transform group-open:rotate-45" style={{ color: deepInk }}>+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed max-w-[640px]" style={{ color: "#2b2b2b" }}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function StrategyPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: deepInk }}>
      <PillNav />
      <Hero />
      <WhatWeCover />
      <StrategyForm />
      <FAQ />
      <Footer />
    </div>
  );
}
