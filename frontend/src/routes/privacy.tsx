import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Eyebrow, Footer, PillNav, deepInk, mintDeep, easeOut } from "@/components/site/Chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pejul" },
      { name: "description", content: "How Pejul collects, uses, and protects personal information across our website and client engagements." },
      { property: "og:title", content: "Privacy Policy — Pejul" },
      { property: "og:description", content: "How Pejul handles personal data, cookies, and the rights you have over your information." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "01 — Information we collect",
    p: "We collect information you provide directly — name, email, company, and the contents of any message — when you submit a form, book a strategy session, or correspond with us. We also collect limited technical data automatically, including IP address, browser type, device information, and pages visited.",
  },
  {
    h: "02 — How we use information",
    p: "We use the information to respond to enquiries, deliver and improve our services, send relevant updates you've opted into, protect our platform from abuse, and meet legal obligations. We never sell personal data.",
  },
  {
    h: "03 — Cookies & analytics",
    p: "Our site uses essential cookies and lightweight analytics to understand how visitors use the site. You can disable cookies in your browser; some site features may not work as expected if you do.",
  },
  {
    h: "04 — Sharing & processors",
    p: "We share data only with vetted service providers who help us operate the site and deliver work (hosting, email, analytics, payments). They are bound by confidentiality and process data only on our instructions.",
  },
  {
    h: "05 — Data retention",
    p: "We keep personal information only for as long as needed to fulfil the purpose it was collected for, comply with legal obligations, resolve disputes, and enforce agreements. You can request earlier deletion at any time.",
  },
  {
    h: "06 — Your rights",
    p: "You can access, correct, export, or delete your personal information, object to certain processing, and withdraw consent where applicable. To exercise any right, email privacy@pejul.com — we respond within 30 days.",
  },
  {
    h: "07 — Security",
    p: "We use industry-standard safeguards — encryption in transit, least-privilege access, and regular reviews — to protect your information. No system is perfectly secure; we'll notify affected users of any breach as required by law.",
  },
  {
    h: "08 — Changes to this policy",
    p: "We may update this policy as our services evolve. Material changes will be flagged on this page with a revised effective date. Continued use of the site means you accept the updated terms.",
  },
];

function PrivacyPage() {
  return (
    <div style={{ background: "#fafaf7" }}>
      <PillNav />

      <section className="relative overflow-hidden text-white" style={{ background: deepInk }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-16 sm:pt-32 pb-14 sm:pb-24 grid grid-cols-12 gap-6 sm:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow color="#fff">Legal · Privacy</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="mt-6 text-[clamp(34px,6vw,88px)] leading-[0.92] tracking-tight font-medium"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Privacy <em className="italic font-normal" style={{ color: mintDeep }}>Policy.</em>
            </motion.h1>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter Tight', sans-serif" }}>
              Pejul respects your privacy. This policy explains what we collect, why we collect it, and the control you have over your information. Plain language, no dark patterns.
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
              <Eyebrow>On this page</Eyebrow>
              <ul className="mt-6 flex flex-col gap-3 text-[13px]" style={{ color: "rgba(0,0,0,0.65)", fontFamily: "'Inter Tight', sans-serif" }}>
                {sections.map((s) => (
                  <li key={s.h} className="border-b pb-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    {s.h}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl p-6" style={{ background: deepInk, color: "#fff" }}>
                <div className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: mintDeep }}>Contact DPO</div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter Tight', sans-serif" }}>
                  Questions about your data? Email <a href="mailto:privacy@pejul.com" className="underline text-white">privacy@pejul.com</a>.
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
