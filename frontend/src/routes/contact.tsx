import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { PillNav, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pejul" },
      { name: "description", content: "Address, phone, email and a direct inquiry line to a Pejul partner." },
      { property: "og:title", content: "Contact — Pejul" },
      { property: "og:description", content: "One office. One inbox. One partner who reads every message." },
    ],
  }),
  component: ContactPage,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 55%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-16 pb-16 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }} className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase" style={{ borderColor: "rgba(0,0,0,0.18)", color: deepInk }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
          Contact · One inbox · One partner
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05, ease: easeOut }} className="mt-6 text-[clamp(34px,6vw,88px)] leading-[0.92] tracking-tight font-semibold max-w-[1100px]">
          Say hello. <br />
          <span className="italic font-normal" style={{ color: "#3a7d5c" }}>A partner</span> replies.
        </motion.h1>
        <p className="mt-8 max-w-[640px] text-[15px] sm:text-[18px] leading-[1.6]" style={{ color: "#2b2b2b" }}>
          No ticket queues, no "we'll route your message". Drop a line, send a brief
          or stop by the studio — a Pejul partner reads everything that comes in,
          usually within the same working day.
        </p>
      </div>
    </section>
  );
}

/* ---------- CONTACT TILES ---------- */
function ContactTiles() {
  const tiles = [
    {
      k: "Studio",
      title: "Pejul HQ",
      lines: ["Plot 1, Polyster Building", "128 Remi Olowude St", "Lekki Phase 1, Lagos · Nigeria"],
      cta: { label: "Open in Maps →", href: "https://maps.google.com/?q=Plot+1+Polyster+Building+128+Remi+Olowude+Street+Lekki+Phase+1+Lagos" },
    },
    {
      k: "Phone",
      title: "+234 906 393 9859",
      lines: ["Mon — Fri · 09:00 — 18:00 GMT+1", "Voicemail forwarded to a partner."],
      cta: { label: "Call now →", href: "tel:+2349063939859" },
    },
    {
      k: "Email",
      title: "hi@pejul.com",
      lines: ["For briefs, NDAs and press.", "Avg. reply within 4 hours."],
      cta: { label: "Write an email →", href: "mailto:hi@pejul.com" },
    },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6">
          {tiles.map((t, i) => (
            <motion.a
              key={t.k}
              href={t.cta.href}
              target={t.cta.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="group col-span-12 lg:col-span-4 rounded-3xl border p-6 sm:p-8 flex flex-col bg-white hover:bg-[#0a0a0a] hover:text-white transition-colors"
              style={{ borderColor: "rgba(0,0,0,0.12)" }}
            >
              <div className="text-[11px] tracking-[0.3em] uppercase text-[#6b6b6b] group-hover:text-[#55e6a5]">{t.k}</div>
              <div className="mt-5 text-[26px] font-semibold leading-tight">{t.title}</div>
              <div className="mt-4 text-[14px] leading-relaxed text-[#2b2b2b] group-hover:text-white/70">
                {t.lines.map((l) => <div key={l}>{l}</div>)}
              </div>
              <div className="mt-8 text-[13px] tracking-wide">{t.cta.label}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MAP ---------- */
function MapBlock() {
  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28" style={{ background: "white" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>The studio</div>
            <h2 className="mt-3 text-[clamp(28px,5vw,48px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>
              Lekki Phase 1, Lagos.
            </h2>
          </div>
          <a href="https://maps.google.com/?q=Plot+1+Polyster+Building+128+Remi+Olowude+Street+Lekki+Phase+1+Lagos" target="_blank" rel="noreferrer" className="rounded-full border px-6 py-3 text-[13px]" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>
            Get directions →
          </a>
        </div>
        <div className="relative rounded-[28px] overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.25)" }}>
          <iframe
            title="Pejul HQ map"
            src="https://www.google.com/maps?q=Plot%201%20Polyster%20Building%2C%20128%20Remi%20Olowude%20Street%2C%20Lekki%20Phase%201%2C%20Lagos&output=embed"
            width="100%"
            height="520"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
            style={{ border: 0 }}
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl border bg-white px-5 py-4 max-w-[280px]" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 20px 50px -20px rgba(0,0,0,0.2)" }}>
            <div className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "#6b6b6b" }}>Visit</div>
            <div className="text-[18px] font-semibold leading-tight mt-1" style={{ color: deepInk }}>By appointment only</div>
            <div className="text-[13px] mt-2 text-[#2b2b2b]">Coffee on us. Book a slot first so a partner is in.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- INQUIRY FORM ---------- */
const TOPICS = ["New project", "Partnership", "Press / Media", "Careers", "General inquiry"];

function Field({ label, children, required, className }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-[11px] tracking-[0.22em] uppercase mb-2" style={{ color: "#6b6b6b" }}>
        {label}{required && <span style={{ color: mintDeep }}> *</span>}
      </span>
      {children}
    </label>
  );
}

function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputCls = "w-full rounded-2xl border bg-white px-5 py-4 text-[15px] outline-none focus:border-black/70 transition";
  const inputStyle = { borderColor: "rgba(0,0,0,0.18)", color: deepInk } as React.CSSProperties;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const form = e.currentTarget;
      const payload = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        company: (form.elements.namedItem("company") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
      } else {
        setError(json.message ?? "Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(`Unable to send (${msg}). Please email us directly.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="form" className="relative py-20 sm:py-28 px-5 sm:px-8" style={{ background: mint }}>
      <div className="mx-auto max-w-[1100px] grid grid-cols-12 gap-6 sm:gap-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#3a7d5c" }}>Inquiry form</div>
          <h2 className="mt-4 text-[clamp(32px,5vw,52px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>
            Send a message.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#2b2b2b" }}>
            Tell us what's on your mind. Two or three sentences is plenty — we'll
            ask the right follow-ups when we reply.
          </p>
          <div className="mt-10 rounded-2xl border p-5 bg-white/60" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            <div className="text-[12px] tracking-[0.22em] uppercase" style={{ color: "#6b6b6b" }}>Looking for a working session?</div>
            <p className="mt-2 text-[14px]" style={{ color: deepInk }}>
              Skip the form and request a free 45-minute strategy slot.
            </p>
            <Link to="/strategy-session" className="mt-4 inline-flex rounded-full px-5 py-2.5 text-[13px]" style={{ background: deepInk, color: "white" }}>
              Book a session →
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="rounded-3xl border bg-white p-10"
              style={{ borderColor: "rgba(0,0,0,0.12)" }}
            >
              <div className="text-[12px] tracking-[0.3em] uppercase" style={{ color: "#3a7d5c" }}>Received</div>
              <h3 className="mt-3 text-[32px] font-semibold leading-tight" style={{ color: deepInk }}>Thanks — message landed.</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#2b2b2b" }}>
                A partner will reply personally, usually within 4 hours.
              </p>
              <button onClick={() => setSent(false)} className="mt-8 rounded-full border px-6 py-3 text-[13px]" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>Send another</button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border bg-white p-6 sm:p-10 grid grid-cols-12 gap-4 sm:gap-5"
              style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 30px 80px -40px rgba(0,0,0,0.3)" }}
            >
              <Field label="Name" className="col-span-12 sm:col-span-6" required>
                <input name="name" required maxLength={100} className={inputCls} style={inputStyle} placeholder="Your full name" />
              </Field>
              <Field label="Company" className="col-span-12 sm:col-span-6">
                <input name="company" maxLength={120} className={inputCls} style={inputStyle} placeholder="Optional" />
              </Field>
              <Field label="Email" className="col-span-12 sm:col-span-6" required>
                <input name="email" type="email" required maxLength={160} className={inputCls} style={inputStyle} placeholder="you@company.com" />
              </Field>
              <Field label="Phone" className="col-span-12 sm:col-span-6">
                <input name="phone" type="tel" maxLength={40} className={inputCls} style={inputStyle} placeholder="Optional" />
              </Field>
              <div className="col-span-12">
                <Field label="What's it about?" required>
                  <select name="topic" required className={inputCls} style={inputStyle} defaultValue="">
                    <option value="" disabled>Pick a topic</option>
                    {TOPICS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
              </div>
              <div className="col-span-12">
                <Field label="Message" required>
                  <textarea name="message" required maxLength={1500} rows={6} className={inputCls + " resize-none"} style={inputStyle} placeholder="A couple of sentences about what you'd like to talk about." />
                </Field>
              </div>
              {error && (
                <div className="col-span-12 rounded-xl px-4 py-3 text-[13px]" style={{ background: "#fff0f0", color: "#c0392b", border: "1px solid #fcc" }}>
                  {error}
                </div>
              )}
              <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-[12px] max-w-[420px]" style={{ color: "#6b6b6b" }}>
                  By submitting you agree we may reply by email. We never share or
                  sync your details with third parties.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full w-full sm:w-auto px-8 py-4 text-[14px] hover:opacity-90 transition disabled:opacity-60"
                  style={{ background: deepInk, color: "white" }}
                >
                  {loading ? "Sending…" : "Send message →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function ContactPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: deepInk }}>
      <PillNav />
      <Hero />
      <ContactTiles />
      <MapBlock />
      <InquiryForm />
      <Footer />
    </div>
  );
}
