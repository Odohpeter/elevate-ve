import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { PillNav, Footer } from "@/components/site/Chrome";

import abdumalikImg from "@/assets/team/abdumalik.png";
import ayazImg from "@/assets/team/ayaz.png";
import blaiseImg from "@/assets/team/blaise.png";
import hamzaImg from "@/assets/team/hamza.png";
import hassanImg from "@/assets/team/hassan.png";
import julianaImg from "@/assets/team/juliana.png";
import peterImg from "@/assets/team/peter.png";
import ramizImg from "@/assets/team/ramiz.png";
import rohailImg from "@/assets/team/rohail.png";
import sajjadImg from "@/assets/team/sajjad.png";
import sameerImg from "@/assets/team/sameer.png";
import sohaibImg from "@/assets/team/sohaib.png";
import subhanImg from "@/assets/team/subhan.png";
import zainImg from "@/assets/team/zain.png";
import ziadImg from "@/assets/team/ziad.png";


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Pejul" },
      { name: "description", content: "The partners, engineers and strategists behind every Pejul engagement." },
      { property: "og:title", content: "Team — Pejul" },
      { property: "og:description", content: "Small senior crew. No juniors hidden behind account managers." },
    ],
  }),
  component: TeamPage,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

/* ---------- NAV ---------- */
/* ---------- HERO ---------- */
function Hero() {
  const stats = [
    { v: "15", k: "Partners & engineers" },
    { v: "9", k: "Avg. years in craft" },
    { v: "0", k: "Outsourced delivery" },
    { v: "2", k: "Time zones, one room" },
  ];

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10" style={{ background: `linear-gradient(180deg, #ffffff 0%, #fafafa 55%, ${mint} 100%)` }}>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }} className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase" style={{ borderColor: "rgba(0,0,0,0.18)", color: deepInk }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
          Team · Senior · Hands-on
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05, ease: easeOut }} className="mt-6 text-[clamp(34px,6vw,88px)] leading-[0.92] tracking-tight font-semibold max-w-[1100px]">
          The people who <br />
          <span className="italic font-normal" style={{ color: "#3a7d5c" }}>actually</span> ship the work.
        </motion.h1>
        <p className="mt-8 max-w-[640px] text-[15px] sm:text-[17px] leading-[1.6]" style={{ color: "#2b2b2b" }}>
          No layered agencies, no offshore handoffs, no "the team will get back to you."
          The names below are the people you brief on day one — and the same people
          pushing code, pixels and decks on day ninety.
        </p>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
              className="border-t pt-5"
              style={{ borderColor: "rgba(0,0,0,0.18)" }}
            >
              <div className="text-[44px] font-semibold leading-none" style={{ color: deepInk }}>{s.v}</div>
              <div className="mt-3 text-[12px] tracking-[0.22em] uppercase" style={{ color: "#6b6b6b" }}>{s.k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PARTNERS ---------- */
type Member = {
  name: string;
  role: string;
  bio: string;
  city: string;
  tags: string[];
  initials: string;
  hue: string;
};

type CrewMember = Member & { photo: string };

const PARTNERS: CrewMember[] = [
  {
    name: "Peter",
    role: "CEO · Founding Partner",
    bio: "Sets the direction for every Pejul engagement and reads every inbound brief personally.",
    city: "Nigeria",
    tags: ["Strategy", "Product", "Clients"],
    initials: "PT",
    hue: "#dff7e7",
    photo: peterImg,
  },
  {
    name: "Juliana",
    role: "COO · Partner",
    bio: "Runs operations end-to-end so the team can keep shipping. Owns delivery, hiring and client success.",
    city: "Nigeria",
    tags: ["Operations", "Delivery", "People"],
    initials: "JL",
    hue: "#fff1da",
    photo: julianaImg,
  },
  {
    name: "Sameer",
    role: "CTO · Partner",
    bio: "Sets the technical bar across the bench — architecture, code review and the way we ship.",
    city: "Pakistan",
    tags: ["Architecture", "Platforms", "DX"],
    initials: "SM",
    hue: "#e8f1ff",
    photo: sameerImg,
  },
];

const CREW: CrewMember[] = [
  { name: "Blaise", role: "Project Manager", bio: "Keeps scope, timelines and stakeholders aligned without ever raising a voice.", city: "Nigeria", tags: ["Delivery", "Planning"], initials: "BL", hue: "#dff7e7", photo: blaiseImg },
  { name: "Abdumalik", role: "UI & UX Designer", bio: "Turns rough product thinking into interfaces that feel obvious in hindsight.", city: "Nigeria", tags: ["UI", "UX"], initials: "AB", hue: "#e8f1ff", photo: abdumalikImg },
  { name: "Ayaz", role: "Full Stack Developer", bio: "End-to-end product engineer. Comfortable from schema design to pixel-perfect UI.", city: "Pakistan", tags: ["React", "Node"], initials: "AY", hue: "#e8f1ff", photo: ayazImg },
  { name: "Ramiz", role: "Full Stack Developer", bio: "Builds the boring middle layer so the product feels effortless on top.", city: "Pakistan", tags: ["TypeScript", "APIs"], initials: "RM", hue: "#fff1da", photo: ramizImg },
  { name: "Sajjad", role: "Full Stack Developer", bio: "Pragmatic generalist — ships features across the stack without ceremony.", city: "Pakistan", tags: ["Full Stack", "Postgres"], initials: "SJ", hue: "#f7e0e8", photo: sajjadImg },
  { name: "Subhan", role: "Full Stack Developer", bio: "Goes deep on tricky integrations and the long tail of edge cases.", city: "Pakistan", tags: ["Integrations", "Backend"], initials: "SB", hue: "#e6e6ff", photo: subhanImg },
  { name: "Ziad", role: "Full Stack Developer", bio: "Loves a clean data model and a tight feedback loop.", city: "Pakistan", tags: ["Node", "DB"], initials: "ZD", hue: "#dff7e7", photo: ziadImg },
  { name: "Hamza", role: "Front End Developer", bio: "Treats interface polish as a craft, not a final pass.", city: "Pakistan", tags: ["React", "UI"], initials: "HM", hue: "#e8f1ff", photo: hamzaImg },
  { name: "Rohail", role: "Front End Developer", bio: "Designs in the browser and gets pixels, motion and a11y right the first time.", city: "Pakistan", tags: ["React", "CSS"], initials: "RH", hue: "#fff1da", photo: rohailImg },
  { name: "Sohaib", role: "Front End Developer", bio: "Builds component systems that scale with the product and the team.", city: "Pakistan", tags: ["Design Systems", "React"], initials: "SH", hue: "#f7e0e8", photo: sohaibImg },
  { name: "Hassan", role: "Cybersecurity Expert", bio: "Threat-models everything we ship and hardens the boring infra most teams ignore.", city: "Pakistan", tags: ["Security", "Audits"], initials: "HS", hue: "#e6e6ff", photo: hassanImg },
  { name: "Zain", role: "Quality Assurance Expert", bio: "The last set of eyes before anything leaves the bench. Breaks things on purpose.", city: "Pakistan", tags: ["QA", "Automation"], initials: "ZN", hue: "#dff7e7", photo: zainImg },
];


function Avatar({ m, size = 96 }: { m: Member; size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl border font-semibold"
      style={{
        width: size,
        height: size,
        background: m.hue,
        borderColor: "rgba(0,0,0,0.12)",
        fontSize: size * 0.32,
        color: deepInk,
        letterSpacing: "0.04em",
      }}
    >
      {m.initials}
    </div>
  );
}

function PartnersBlock() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>Partners</div>
            <h2 className="mt-3 text-[clamp(28px,5vw,56px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>
              The three signatures <br /> on every contract.
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#2b2b2b" }}>
            Every Pejul engagement is co-signed by at least one of these three.
            They stay close from brief to handover.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {PARTNERS.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="group relative overflow-hidden rounded-[28px] bg-white border"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: m.hue }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                />
                {/* C-suite badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black text-white px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
                  {m.role.split("·")[0].trim()}
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur text-[11px] tracking-[0.18em] uppercase px-3 py-1.5" style={{ color: deepInk }}>
                  {m.city}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 text-white">
                  <div className="text-[30px] sm:text-[34px] font-semibold leading-[1.02] tracking-tight">{m.name}</div>
                  <div className="mt-2 text-[13px] tracking-wide" style={{ color: mintDeep }}>{m.role}</div>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-white/80 max-w-[36ch]">{m.bio}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 px-7 py-5 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                {m.tags.map((t) => (
                  <span key={t} className="rounded-full border px-3 py-1 text-[11px] tracking-wide" style={{ borderColor: "rgba(0,0,0,0.16)", color: deepInk }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- CREW GRID ---------- */
function CrewGrid() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: mint }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#3a7d5c" }}>The crew</div>
            <h2 className="mt-3 text-[clamp(28px,5vw,56px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>
              Senior people, <span className="italic font-normal" style={{ color: "#3a7d5c" }}>no proxies</span>.
            </h2>
          </div>
          <p className="max-w-[440px] text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#2b2b2b" }}>
            One small bench of long-tenured engineers, designers and strategists.
            You meet them in week one and work with them through launch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CREW.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 6) * 0.05, ease: easeOut }}
              className="group relative overflow-hidden rounded-[28px] bg-white border"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              {/* Big image */}
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: m.hue }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                />
                {/* Location chip */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ color: deepInk }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
                  {m.city}
                </div>
                {/* Initials mark */}
                <div className="absolute top-4 right-4 rounded-full bg-black/70 backdrop-blur text-white text-[11px] tracking-[0.18em] font-semibold px-3 py-1.5">
                  {m.initials}
                </div>
                {/* Gradient base */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {/* Name + role overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white">
                  <div className="text-[26px] sm:text-[28px] font-semibold leading-[1.05] tracking-tight">{m.name}</div>
                  <div className="mt-1.5 text-[13px] tracking-wide" style={{ color: mintDeep }}>{m.role}</div>
                </div>
              </div>

              {/* Footer strip */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span key={t} className="rounded-full px-2.5 py-0.5 text-[10px] tracking-wide" style={{ background: m.hue, color: deepInk }}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="shrink-0 text-[18px] leading-none text-[#6b6b6b] group-hover:text-[#3a7d5c] group-hover:translate-x-0.5 transition-all">→</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
function Values() {
  const items = [
    { n: "01", t: "Senior or nothing", d: "We don't bench junior staff against client budgets. Every name on the contract has shipped real work for a decade." },
    { n: "02", t: "Few clients, deep work", d: "Five to seven active engagements at any time. Anything more and the quality drops in ways the client feels first." },
    { n: "03", t: "Show the seams", d: "Estimates, trade-offs, and mistakes are shared in the open. No theatrical confidence." },
    { n: "04", t: "Outlast the project", d: "We optimize for the team that inherits the code, the brand and the playbook after we leave." },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: deepInk, color: "white" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-white/60">How we work</div>
            <h2 className="mt-3 text-[clamp(28px,5vw,56px)] leading-[0.95] font-semibold">
              Four rules <span style={{ color: mintDeep }}>nobody breaks.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.12)" }}>
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
              className="p-6 sm:p-10 bg-black"
            >
              <div className="text-[12px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>{it.n}</div>
              <div className="mt-4 text-[28px] font-semibold leading-tight">{it.t}</div>
              <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-white/70 max-w-[520px]">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CAREERS ---------- */
function Careers() {
  const roles = [
    { t: "Senior Product Engineer", c: "Barcelona · Remote EU" },
    { t: "Staff Designer (Brand + Product)", c: "Remote EU / LATAM" },
    { t: "Growth Strategist", c: "Barcelona" },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>Careers</div>
          <h2 className="mt-3 text-[clamp(28px,5vw,52px)] leading-[0.95] font-semibold" style={{ color: deepInk }}>
            Want a seat <br /> at the table?
          </h2>
          <p className="mt-6 text-[14px] sm:text-[15px] leading-relaxed max-w-[440px]" style={{ color: "#2b2b2b" }}>
            We hire roughly two people a year. Senior, opinionated, kind. If that
            sounds like you, the door's open — even if your role isn't listed.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full px-6 py-3 text-[13px]" style={{ background: deepInk, color: "white" }}>
            Send a note →
          </Link>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            {roles.map((r, i) => (
              <motion.li
                key={r.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                className="flex items-center justify-between gap-6 py-7 border-t"
                style={{ borderColor: "rgba(0,0,0,0.12)" }}
              >
                <div>
                  <div className="text-[22px] sm:text-[26px] font-semibold leading-tight" style={{ color: deepInk }}>{r.t}</div>
                  <div className="mt-1 text-[12px] tracking-[0.18em] uppercase" style={{ color: "#6b6b6b" }}>{r.c}</div>
                </div>
                <Link to="/contact" className="shrink-0 rounded-full border px-5 py-2.5 text-[13px] hover:bg-black hover:text-white transition-colors" style={{ borderColor: "rgba(0,0,0,0.2)", color: deepInk }}>
                  Apply →
                </Link>
              </motion.li>
            ))}
            <li className="border-t border-b" style={{ borderColor: "rgba(0,0,0,0.12)" }} />
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function TeamPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: deepInk }}>
      <PillNav />
      <Hero />
      <PartnersBlock />
      <CrewGrid />
      <Values />
      <Careers />
      <Footer />
    </div>
  );
}
