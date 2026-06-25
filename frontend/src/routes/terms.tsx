import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Eyebrow, Footer, PillNav, deepInk, mintDeep, easeOut } from "@/components/site/Chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pejul" },
      { name: "description", content: "The terms that govern your use of the Pejul website and our engagements with clients and partners." },
      { property: "og:title", content: "Terms of Service — Pejul" },
      { property: "og:description", content: "Read the terms that apply to using pejul.com and working with the Pejul team." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "01 — Acceptance of terms",
    p: "By accessing pejul.com or engaging Pejul for services, you agree to these terms. If you don't agree, please don't use the site or our services. We may update these terms; continued use means you accept the changes.",
  },
  {
    h: "02 — Use of the website",
    p: "You agree to use the site lawfully and not to attempt to disrupt it, reverse-engineer it, scrape it at scale, or use it to transmit malicious code. We may suspend access to anyone abusing the site.",
  },
  {
    h: "03 — Intellectual property",
    p: "All site content — copy, design, code, marks, and imagery — is owned by Pejul or its licensors and protected by intellectual-property laws. You may not copy, modify, or redistribute it without written permission.",
  },
  {
    h: "04 — Engagements & deliverables",
    p: "Project-specific terms are governed by a separate signed agreement (SOW or MSA) that takes precedence over these general terms. Deliverables, IP ownership, payment terms, and confidentiality are defined there.",
  },
  {
    h: "05 — Fees & payment",
    p: "Fees, invoicing, and payment schedules are set out in the relevant engagement agreement. Late payments may pause active work and incur reasonable interest where permitted by law.",
  },
  {
    h: "06 — Confidentiality",
    p: "Both parties agree to protect non-public information shared during an engagement. Confidentiality obligations survive the end of the engagement for a period defined in your signed agreement.",
  },
  {
    h: "07 — Warranties & liability",
    p: "The site and our services are provided as-is, without implied warranties beyond those required by law. To the maximum extent permitted, Pejul's liability is limited to the fees paid for the engagement giving rise to the claim.",
  },
  {
    h: "08 — Indemnification",
    p: "You agree to indemnify Pejul against claims arising from your misuse of the site or breach of these terms. We will indemnify you for IP-infringement claims related to our original deliverables, subject to the engagement agreement.",
  },
  {
    h: "09 — Termination",
    p: "We may suspend or terminate site access at any time for breach of these terms. Engagement termination is governed by the signed agreement and survives obligations like confidentiality and payment.",
  },
  {
    h: "10 — Governing law",
    p: "These terms are governed by the laws of the jurisdiction stated in your engagement agreement, or by the laws of Nigeria for general site use. Disputes will be resolved through good-faith negotiation, then arbitration where applicable.",
  },
];

function TermsPage() {
  return (
    <div style={{ background: "#fafaf7" }}>
      <PillNav />

      <section className="relative overflow-hidden text-white" style={{ background: deepInk }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-16 sm:pt-32 pb-14 sm:pb-24 grid grid-cols-12 gap-6 sm:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow color="#fff">Legal · Terms</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="mt-6 text-[clamp(34px,6vw,88px)] leading-[0.92] tracking-tight font-medium"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Terms of <em className="italic font-normal" style={{ color: mintDeep }}>Service.</em>
            </motion.h1>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter Tight', sans-serif" }}>
              These terms cover your use of the Pejul website and our general approach to engagements. Project-specific terms in a signed agreement always take precedence.
            </p>
            <div className="mt-10 text-[11px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
              Effective · January 2025
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 sm:gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Index</Eyebrow>
              <ul className="mt-6 flex flex-col gap-3 text-[13px]" style={{ color: "rgba(0,0,0,0.65)", fontFamily: "'Inter Tight', sans-serif" }}>
                {sections.map((s) => (
                  <li key={s.h} className="border-b pb-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    {s.h}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl p-6" style={{ background: deepInk, color: "#fff" }}>
                <div className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: mintDeep }}>Legal team</div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter Tight', sans-serif" }}>
                  Questions about these terms? Email <a href="mailto:legal@pejul.com" className="underline text-white">legal@pejul.com</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
            {sections.map((s, i) => (
              <motion.div
                key={s.h}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.04 }}
              >
                <h2 className="text-[clamp(22px,4vw,34px)] leading-tight tracking-tight font-medium" style={{ fontFamily: "'Fraunces', serif", color: deepInk }}>
                  {s.h}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.75] max-w-2xl" style={{ color: "rgba(0,0,0,0.7)", fontFamily: "'Inter Tight', sans-serif" }}>
                  {s.p}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
