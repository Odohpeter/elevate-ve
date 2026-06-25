import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import logoHorizontalDark from "@/assets/brand/pejul-horizontal-dark.png";
import logoHorizontalLight from "@/assets/brand/pejul-horizontal-light.png";


export const mint = "#dff7e7";
export const mintDeep = "#55e6a5";
export const deepInk = "#000000";
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const Eyebrow = ({ children, color = deepInk }: { children: React.ReactNode; color?: string }) => (
  <motion.span
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: easeOut }}
    className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase font-medium"
    style={{ color }}
  >
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="h-px w-8 origin-left"
      style={{ background: color }}
    />
    {children}
  </motion.span>
);

export function PillButton({
  children,
  variant = "solid",
  to = "/strategy-session",
  invert = false,
}: { children: React.ReactNode; variant?: "solid" | "ghost"; to?: string; invert?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };
  const ghostBorder = invert ? "#ffffff" : deepInk;
  const ghostText = invert ? "#ffffff" : deepInk;
  return (
    <Link to={to} style={{ display: "inline-block" }}>
      <motion.span
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{
          x: sx, y: sy,
          ...(variant === "solid"
            ? { background: mintDeep }
            : { borderColor: ghostBorder, color: ghostText }),
        }}
        className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] tracking-wide overflow-hidden ${variant === "solid" ? "text-black" : "border"}`}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </motion.span>
    </Link>
  );
}

export function CountUp({ to, from = 0, suffix = "", prefix = "" }: { to: number; from?: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [val, setVal] = useState(from);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const c = animate(from, to, { duration: 1.6, ease: easeOut, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, from]);
  useEffect(() => {
    // Fallback: if inView never fires (e.g. element already visible on mount in some browsers), trigger after a short delay.
    const t = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      const c = animate(from, to, { duration: 1.6, ease: easeOut, onUpdate: (v) => setVal(Math.round(v)) });
      return () => c.stop();
    }, 600);
    return () => clearTimeout(t);
  }, [from, to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

export function WordReveal({ text, className, style, italic }: { text: string; className?: string; style?: React.CSSProperties; italic?: boolean }) {
  const words = text.split(" ");
  return (
    <span className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="inline-block align-bottom mr-[0.25em] pb-[0.2em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: easeOut }}
            className={`inline-block ${italic ? "italic font-normal" : ""}`}
            style={italic ? { fontFamily: "'Fraunces', serif" } : undefined}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

type NavItem =
  | { l: string; to: string }
  | { l: string; children: { l: string; to: string; d?: string }[] };

const NAV_ITEMS: NavItem[] = [
  { l: "Home", to: "/" },
  {
    l: "Services",
    children: [
      { l: "Venture Building", to: "/venture-building", d: "Idea → scale, with skin in the game" },
      { l: "AI Solutions", to: "/ai-solutions", d: "Support, sales, knowledge & internal agents" },
      { l: "Software Development", to: "/software-development", d: "Product engineering teams on-demand" },
      { l: "Startup Growth", to: "/startup-growth", d: "Full growth org without the overhead" },
      { l: "Business Digitization", to: "/business-digitization", d: "Operations, systems & automation" },
    ],
  },
  {
    l: "Company",
    children: [
      { l: "About", to: "/about", d: "Our story & operating model" },
      { l: "Team", to: "/team", d: "The team behind Pejul" },
      { l: "Industries", to: "/industries", d: "Sectors we know cold" },
      { l: "Why Pejul", to: "/why-pejul", d: "What separates us from agencies" },
    ],
  },
  {
    l: "Work",
    children: [
      { l: "Portfolio", to: "/portfolio", d: "Selected things we've shipped" },
      
    ],
  },
  { l: "Contact", to: "/contact" },
];

function NavLink({ to, l, exact }: { to: string; l: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      className="relative group"
      activeOptions={{ exact: !!exact }}
    >
      {({ isActive }) => (
        <>
          {l}
          <span className={`absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} style={{ background: deepInk }} />
        </>
      )}
    </Link>
  );
}

function NavDropdown({ label, items }: { label: string; items: { l: string; to: string; d?: string }[] }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onEnter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const onLeave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };
  const anyActive = items.some(() => false); // active styling handled per-item; keep label neutral
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button type="button" className="relative group inline-flex items-center gap-1.5" aria-haspopup="true" aria-expanded={open}>
        {label}
        <svg width="9" height="9" viewBox="0 0 12 12" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300 ${anyActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} style={{ background: deepInk }} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: easeOut }}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
        >
          <div className="w-[320px] rounded-2xl border bg-white p-2" style={{ borderColor: "rgba(0,0,0,0.1)", boxShadow: "0 20px 60px -20px rgba(0,0,0,0.25)" }}>
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 hover:bg-black/[0.04] transition group/item"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[12px] tracking-[0.18em] uppercase font-medium" style={{ color: deepInk }}>{it.l}</div>
                  <span className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition" style={{ color: mintDeep }}>→</span>
                </div>
                {it.d && (
                  <div className="mt-1 text-[11px] tracking-normal normal-case leading-snug" style={{ color: "#6b6b6b", fontFamily: "'Inter Tight', sans-serif" }}>{it.d}</div>
                )}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function PillNav() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <>
      <motion.div style={{ scaleX, transformOrigin: "0% 50%", background: deepInk }} className="fixed top-0 left-0 right-0 h-[3px] z-50" />
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: easeOut }} className="sticky top-4 z-40 px-4">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between gap-6 rounded-full border bg-white/85 backdrop-blur-md px-6 md:px-8 py-3" style={{ borderColor: "rgba(0,0,0,0.12)", boxShadow: "0 10px 40px -20px rgba(0,0,0,0.18)" }}>
          <Link to="/" className="flex items-center" style={{ color: deepInk }} aria-label="Pejul Digital Agency — Home">
            <img src={logoHorizontalDark} alt="Pejul Digital Agency" className="h-8 md:h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase" style={{ color: deepInk }}>
            {NAV_ITEMS.map((item) =>
              "children" in item ? (
                <NavDropdown key={item.l} label={item.l} items={item.children} />
              ) : (
                <NavLink key={item.l} to={item.to} l={item.l} exact={item.to === "/"} />
              )
            )}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/strategy-session" className="hidden sm:inline-flex rounded-full px-6 py-3 text-[13px] text-black tracking-wide hover:opacity-90 transition" style={{ background: mintDeep }}>
              Book A Strategy Session
            </Link>
            <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="lg:hidden rounded-full border w-11 h-11 flex flex-col items-center justify-center gap-1" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
              <span className="h-[2px] w-5 transition-transform" style={{ background: deepInk, transform: open ? "translateY(3px) rotate(45deg)" : undefined }} />
              <span className="h-[2px] w-5 transition-transform" style={{ background: deepInk, transform: open ? "translateY(-3px) rotate(-45deg)" : undefined }} />
            </button>
          </div>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden mx-auto max-w-[1400px] mt-2 rounded-3xl border bg-white p-6" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            <nav className="flex flex-col gap-1 text-[13px] tracking-[0.18em] uppercase" style={{ color: deepInk }}>
              {NAV_ITEMS.map((item) =>
                "children" in item ? (
                  <div key={item.l} className="border-b last:border-b-0" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <button
                      type="button"
                      onClick={() => setMobileSub((s) => (s === item.l ? null : item.l))}
                      className="w-full flex items-center justify-between py-3"
                    >
                      <span>{item.l}</span>
                      <svg width="10" height="10" viewBox="0 0 12 12" className={`transition-transform ${mobileSub === item.l ? "rotate-180" : ""}`}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileSub === item.l && (
                      <div className="pb-3 pl-3 flex flex-col gap-2">
                        {item.children.map((c) => (
                          <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="py-1.5 text-[12px]" style={{ color: "#333" }}>
                            {c.l}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.l} to={item.to} onClick={() => setOpen(false)} className="py-3 border-b last:border-b-0" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    {item.l}
                  </Link>
                )
              )}
              <Link to="/strategy-session" onClick={() => setOpen(false)} className="mt-4 rounded-full px-6 py-3 text-[13px] text-black tracking-wide text-center" style={{ background: mintDeep }}>
                Book A Strategy Session
              </Link>
            </nav>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}


export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden" style={{ background: deepInk, color: "#ffffff" }}>
      {/* Top CTA band */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <Eyebrow color={mintDeep}>Let's build something</Eyebrow>
            <h2 className="mt-5 text-[40px] md:text-[64px] leading-[0.95] tracking-tight font-medium" style={{ fontFamily: "'Fraunces', serif" }}>
              Have an idea worth <em className="italic font-normal" style={{ color: mintDeep }}>shipping?</em>
            </h2>
            <p className="mt-5 text-[14px] md:text-[15px] leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter Tight', sans-serif" }}>
              We partner with founders and leaders to design, build and scale digital products that move the needle — not the slide deck.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton to="/strategy-session">Book a strategy session</PillButton>
            <PillButton to="/contact" variant="ghost" invert>Get in touch</PillButton>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-4">
          <Link to="/" className="inline-flex items-center" style={{ color: "#ffffff" }} aria-label="Pejul Digital Agency — Home">
            <img src={logoHorizontalLight} alt="Pejul Digital Agency" className="h-10 w-auto" />
          </Link>

          <p className="mt-6 text-[13px] leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter Tight', sans-serif" }}>
            A venture studio and product team for ambitious founders. We design, engineer, and scale software — with skin in the game.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter Tight', sans-serif" }}>
            <a href="mailto:hi@pejul.com" className="hover:text-white transition">hi@pejul.com</a>
            <a href="tel:+2349063939859" className="hover:text-white transition">+234 906 393 9859</a>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Plot 1, Polyster Building, 128 Remi Olowude St,<br/>Lekki Phase 1, Lagos · Nigeria</span>
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <div className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: mintDeep }}>Services</div>
          <ul className="flex flex-col gap-3 text-[13px]" style={{ color: "rgba(255,255,255,0.75)" }}>
            <li><Link to="/venture-building" className="hover:text-white transition">Venture Building</Link></li>
            <li><Link to="/ai-solutions" className="hover:text-white transition">AI Solutions</Link></li>
            <li><Link to="/software-development" className="hover:text-white transition">Software Development</Link></li>
            <li><Link to="/startup-growth" className="hover:text-white transition">Startup Growth</Link></li>
            <li><Link to="/business-digitization" className="hover:text-white transition">Business Digitization</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <div className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: mintDeep }}>Company</div>
          <ul className="flex flex-col gap-3 text-[13px]" style={{ color: "rgba(255,255,255,0.75)" }}>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/team" className="hover:text-white transition">Team</Link></li>
            <li><Link to="/industries" className="hover:text-white transition">Industries</Link></li>
            <li><Link to="/why-pejul" className="hover:text-white transition">Why Pejul</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 md:col-span-3">
          <div className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: mintDeep }}>Field notes</div>
          <p className="text-[13px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter Tight', sans-serif" }}>
            Occasional dispatches on building, shipping and scaling. No fluff.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-0 rounded-full border overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 bg-transparent px-5 py-3 text-[13px] outline-none placeholder:text-white/40"
              style={{ color: "#ffffff", fontFamily: "'Inter Tight', sans-serif" }}
            />
            <button
              type="submit"
              className="px-5 py-3 text-[12px] tracking-wide text-black hover:opacity-90 transition"
              style={{ background: mintDeep }}
              aria-label="Subscribe"
            >
              →
            </button>
          </form>
          <div className="mt-6 flex items-center gap-3">
            {[
              { l: "Ig", href: "https://www.instagram.com/pejul_digital_agency/" },
              { l: "Fb", href: "https://web.facebook.com/Pejul.Technologies" },
              { l: "Tk", href: "https://www.tiktok.com/@pejul_digital_agency" },
              { l: "In", href: "https://www.linkedin.com/company/pejul-digital-agency" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.l}
                className="w-9 h-9 rounded-full border flex items-center justify-center text-[11px] hover:bg-white hover:text-black transition"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="border-t pt-10 pb-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div
            className="text-[18vw] md:text-[14vw] leading-[0.85] tracking-tight font-medium select-none"
            style={{ fontFamily: "'Fraunces', serif", color: "rgba(255,255,255,0.07)" }}
          >
            PEJUL<span style={{ color: mintDeep, opacity: 0.5 }}>.</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
          <div>© {year} Pejul Technologies Ltd — All rights reserved.</div>
          <div className="flex items-center gap-6 flex-wrap">
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: mintDeep }} />
              Available for new work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
