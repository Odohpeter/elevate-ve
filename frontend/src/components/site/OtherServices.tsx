import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const ALL = [
  { to: "/software-development", label: "Software Development", k: "software", blurb: "Mobile, SaaS, marketplaces, fintech, enterprise." },
  { to: "/startup-growth", label: "Startup Growth", k: "growth", blurb: "Recruit, train and run the growth team after launch." },
  { to: "/business-digitization", label: "Business Digitization", k: "digitization", blurb: "Operations, workflows and systems, modernised." },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function OtherServices({ current, theme = "light" }: { current: "software" | "growth" | "digitization"; theme?: "light" | "mint" }) {
  const items = ALL.filter((s) => s.k !== current);
  const isMint = theme === "mint";
  return (
    <section
      className="relative border-t py-24"
      style={{
        background: isMint ? "#dff7e7" : "#ffffff",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium text-black">
              <span className="h-px w-8 bg-black" /> Continue exploring
            </span>
            <h2
              className="mt-5 text-[clamp(28px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.025em] text-black"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Other ways we work with you.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.2em] uppercase text-black border-b border-black/40 hover:border-black pb-1 transition"
          >
            Or just talk to us →
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {items.map((s, i) => (
            <motion.div
              key={s.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-3xl border bg-white p-9"
              style={{ borderColor: "rgba(0,0,0,0.12)" }}
            >
              <Link to={s.to} className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.3em] uppercase text-black/60">Service</span>
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-black/15 text-black transition-transform group-hover:rotate-45">
                    →
                  </span>
                </div>
                <h3
                  className="mt-12 text-[clamp(24px,2.4vw,34px)] font-bold leading-tight tracking-[-0.015em] text-black"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {s.label}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/70 max-w-[420px]">{s.blurb}</p>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-black" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
