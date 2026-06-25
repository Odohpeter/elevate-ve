import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect, useCallback, useId } from "react";
import { PillNav, Footer } from "@/components/site/Chrome";
import { PROJECTS, getProject, type Project } from "@/data/projects";

export const Route = createFileRoute("/portfolio/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Pejul" }] };
    return {
      meta: [
        { title: `${p.client} — ${p.title} · Pejul` },
        { name: "description", content: p.outcome },
        { property: "og:title", content: `${p.client} — Pejul` },
        { property: "og:description", content: p.outcome },
        { property: "og:image", content: p.cover },
        { property: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen bg-white">
      <PillNav />
      <section className="mx-auto max-w-[900px] px-5 sm:px-8 py-40 text-center">
        <div className="text-[11px] tracking-[0.32em] uppercase text-black/60">404</div>
        <h1 className="mt-6 text-[clamp(40px,5vw,72px)] font-bold tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Project <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">not on file.</span>
        </h1>
        <Link to="/portfolio" className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-[13px] tracking-wide text-white">
          ← Back to portfolio
        </Link>
      </section>
      <Footer />
    </main>
  ),
  errorComponent: ({ error, reset }) => (
    <main className="min-h-screen bg-white">
      <PillNav />
      <section className="mx-auto max-w-[900px] px-5 sm:px-8 py-40 text-center">
        <h1 className="text-3xl font-bold">Something went wrong.</h1>
        <p className="mt-4 text-black/60">{error.message}</p>
        <button onClick={reset} className="mt-8 rounded-full bg-black px-7 py-4 text-[13px] tracking-wide text-white">Try again</button>
      </section>
      <Footer />
    </main>
  ),
  component: ProjectDetail,
});

const mint = "#dff7e7";
const mintDeep = "#55e6a5";
const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase font-medium" style={{ color: deepInk }}>
    <span className="h-px w-8" style={{ background: deepInk }} />
    {children}
  </span>
);

/** iPhone 15 Pro–style frame wrapping a portrait screenshot. */
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]" style={{ aspectRatio: "9 / 19.5" }}>
      <div className="absolute inset-0 rounded-[44px] bg-[#0a0a0a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5),0_10px_30px_-10px_rgba(0,0,0,0.4)] p-[6px]">
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black">
          <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
          {/* Dynamic Island */}
          <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 h-[22px] w-[90px] rounded-full bg-black/95" />
        </div>
      </div>
    </div>
  );
}

/** Sleek MacBook-style device frame wrapping a website screenshot. */
function MacFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={"w-full flex flex-col items-center " + className}>
      <div className="w-full rounded-[14px] bg-[#1a1a1a] p-[8px] sm:p-[10px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/40">
        <div className="relative mx-auto mb-[4px] h-[5px] w-[16%] rounded-b-md bg-[#0a0a0a]" />
        <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden bg-white">
          <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="relative w-[108%] -mt-[2px]">
        <div className="h-[10px] sm:h-[14px] rounded-b-[12px] bg-gradient-to-b from-[#d0d0d0] via-[#b4b4b4] to-[#8a8a8a] shadow-[0_8px_18px_-6px_rgba(0,0,0,0.35)]">
          <div className="mx-auto h-[5px] sm:h-[7px] w-[14%] rounded-b-[8px] bg-gradient-to-b from-[#6a6a6a] to-[#3a3a3a]" />
        </div>
      </div>
    </div>
  );
}

/** macOS-style browser window frame wrapping a website screenshot. */
function BrowserFrame({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="relative w-full rounded-2xl bg-[#1a1a1a] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.45),0_15px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden border border-black/10">
      <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2a] border-b border-black/40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-md bg-[#1a1a1a] text-[11px] text-white/60 max-w-[60%] truncate">
            {url || "https://example.com"}
          </div>
        </div>
        <div className="w-12" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
    </div>
  );
}

/** Browser frame that auto-scrolls a tall full-page screenshot on a loop. */
function ScrollingBrowserFrame({ src, alt, url, durationSec = 55 }: { src: string; alt: string; url?: string; durationSec?: number }) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollEnd, setScrollEnd] = useState(0);
  const rawId = useId();
  const animName = `abv-scroll-${rawId.replace(/:/g, "")}`;

  const recalc = useCallback(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;
    const end = frame.clientHeight - img.clientHeight;
    setScrollEnd(end < 0 ? end : 0);
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  return (
    <div className="relative w-full rounded-2xl bg-[#1a1a1a] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.45),0_15px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden border border-black/10">
      <style>{`
        @keyframes ${animName} {
          0%, 6% { transform: translateY(0); }
          47%, 53% { transform: translateY(${scrollEnd}px); }
          94%, 100% { transform: translateY(0); }
        }
      `}</style>
      <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2a] border-b border-black/40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-md bg-[#1a1a1a] text-[11px] text-white/60 max-w-[60%] truncate">
            {url || "https://example.com"}
          </div>
        </div>
        <div className="w-12" />
      </div>
      <div ref={frameRef} className="relative w-full bg-white aspect-[16/10] overflow-hidden">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={recalc}
          className="block w-full h-auto will-change-transform absolute top-0 left-0"
          style={{
            animation: scrollEnd < 0 ? `${animName} ${durationSec}s linear infinite` : undefined,
          }}
        />
      </div>
    </div>
  );
}


function AppStoreBadge({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white hover:bg-black/85 transition">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.05 12.04c-.02-2.05 1.67-3.04 1.75-3.09-.95-1.39-2.43-1.58-2.96-1.6-1.26-.13-2.46.74-3.1.74-.64 0-1.63-.72-2.68-.7-1.38.02-2.65.8-3.36 2.03-1.43 2.48-.37 6.16 1.03 8.18.68.99 1.5 2.1 2.55 2.06 1.02-.04 1.41-.66 2.65-.66 1.23 0 1.58.66 2.66.64 1.1-.02 1.8-1 2.47-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.13-3.28zM15.04 5.7c.56-.68.94-1.62.84-2.55-.81.03-1.79.54-2.37 1.21-.52.6-.98 1.57-.86 2.48.9.07 1.83-.46 2.39-1.14z"/></svg>
      <span className="leading-tight text-left">
        <span className="block text-[9px] tracking-[0.18em] uppercase opacity-70">Download on the</span>
        <span className="block text-[15px] font-semibold">App Store</span>
      </span>
    </a>
  );
}

function PlayStoreBadge({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white hover:bg-black/85 transition">
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <path fill="#34A853" d="M3.6 20.5l10.2-10.2 2.9 2.9-9.7 5.6c-1.3.7-2.7.3-3.4-.8-.1-.2 0-1.5 0-1.5z"/>
        <path fill="#FBBC04" d="M16.7 13.2L13.8 10.3l5.7-3.3c1.2-.7 2.4 0 2.4 1.3 0 .4-.1.8-.3 1.1L16.7 13.2z"/>
        <path fill="#4285F4" d="M3.6 3.5c-.1.2-.2.5-.2.8v15.4c0 .3.1.6.2.8L13.8 10.3 3.6 3.5z"/>
        <path fill="#EA4335" d="M13.8 10.3L3.6 3.5c.7-1.1 2.1-1.5 3.4-.8l9.7 5.6-2.9 2z"/>
      </svg>
      <span className="leading-tight text-left">
        <span className="block text-[9px] tracking-[0.18em] uppercase opacity-70">Get it on</span>
        <span className="block text-[15px] font-semibold">Google Play</span>
      </span>
    </a>
  );
}

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const related = PROJECTS.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 3);
  const fallback = PROJECTS.filter((x) => x.id !== p.id).slice(0, 3);
  const more = related.length >= 2 ? related : fallback;

  const idx = PROJECTS.findIndex((x) => x.id === p.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <main className="min-h-screen bg-white">
      <PillNav />

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, #ffffff 0%, ${mint} 100%)` }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:pl-28 pt-10 sm:pt-16 pb-8 sm:pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>
            <Link to="/portfolio" className="hover:text-black transition">Portfolio</Link>
            <span>/</span>
            <span style={{ color: deepInk }}>{p.category}</span>
          </div>

          <div className="grid grid-cols-12 gap-6 sm:gap-10 mt-8 sm:mt-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3 flex-wrap mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full" style={{ background: deepInk, color: mintDeep }}>{p.category}</span>
                <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border" style={{ borderColor: "rgba(0,0,0,0.15)", color: deepInk }}>{p.year}</span>
                <span className="text-[11px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>{p.client}</span>
              </div>
              <h1 className="text-[clamp(30px,5.4vw,88px)] font-bold leading-[0.98] tracking-[-0.035em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                <span className="block overflow-hidden">
                  <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, ease: easeOut }} className="block">
                    {p.title}
                  </motion.span>
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
                className="mt-8 max-w-[640px] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed" style={{ color: "#1a1a1a" }}
              >
                {p.outcome}
              </motion.p>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="rounded-2xl bg-black/[0.03] border p-6" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                {[
                  { l: "Client", v: p.client },
                  { l: "Year", v: p.year },
                  ...(p.duration ? [{ l: "Duration", v: p.duration }] : []),
                  ...(p.team ? [{ l: "Team", v: p.team }] : []),
                  ...(p.website ? [{ l: "Live", v: p.website }] : []),
                ].map((row) => (
                  <div key={row.l} className="flex items-baseline justify-between gap-4 py-3 border-b last:border-b-0" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <div className="text-[10px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>{row.l}</div>
                    <div className="text-[13px] text-right" style={{ color: deepInk }}>{row.v}</div>
                  </div>
                ))}
              </div>
              {p.website && p.category === "Website" && (
                <a
                  href={`https://${p.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-black text-white px-5 py-4 hover:bg-neutral-800 transition group"
                >
                  <span className="flex flex-col">
                    <span className="text-[10px] tracking-[0.28em] uppercase opacity-70">Live site</span>
                    <span className="text-[14px] font-medium">Visit {p.website}</span>
                  </span>
                  <span className="text-lg transition group-hover:translate-x-1">↗</span>
                </a>
              )}
              {(p.appStoreUrl || p.playStoreUrl) && (
                <div className="mt-4 flex flex-col gap-3">
                  {(p.sellerAppStoreUrl || p.sellerPlayStoreUrl) && (
                    <div className="text-[10px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>Buyer App</div>
                  )}
                  {p.appStoreUrl && <AppStoreBadge href={p.appStoreUrl} />}
                  {p.playStoreUrl && <PlayStoreBadge href={p.playStoreUrl} />}
                  {(p.sellerAppStoreUrl || p.sellerPlayStoreUrl) && (
                    <>
                      <div className="mt-2 text-[10px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>Seller App</div>
                      {p.sellerAppStoreUrl && <AppStoreBadge href={p.sellerAppStoreUrl} />}
                      {p.sellerPlayStoreUrl && <PlayStoreBadge href={p.sellerPlayStoreUrl} />}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pb-12 sm:pb-20">
          <motion.div
            style={
              p.category === "Website" || p.category === "Digitization"
                ? { y: imgY, scale: imgScale, background: `linear-gradient(135deg, ${mint} 0%, #ffffff 55%, ${mint} 100%)` }
                : { y: imgY, scale: imgScale }
            }
            initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: easeOut }}
            className={
              p.category === "Website" || p.category === "Digitization"
                ? "relative rounded-[28px] overflow-hidden aspect-[16/9] flex items-center justify-center px-[6%] sm:px-[10%] pt-[5%] pb-[3%] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.25)]"
                : "relative rounded-[28px] overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.5)] aspect-[16/9]"
            }
          >
            {p.category === "Website" || p.category === "Digitization" ? (
              <>
                <MacFrame src={p.cover} alt={p.client} />
                {p.category === "Digitization" && (
                  <div className="absolute top-5 right-5 z-10 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase px-3.5 py-2 rounded-md bg-amber-400 text-black shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black" /> NDA · Not actual image
                  </div>
                )}
              </>
            ) : (
              <img src={p.cover} alt="" className="w-full h-full object-cover" />
            )}
          </motion.div>
        </div>
      </section>


      {/* ===== METRICS ===== */}
      <section className="bg-white border-y" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {p.metrics.map((m, i) => (
              <motion.div
                key={m.l}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: easeOut }}
                className="py-8 sm:py-12 md:py-16 px-5 sm:px-10 text-center border-b md:border-b-0 md:border-r last:border-r-0" style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <div className="text-[clamp(32px,5vw,72px)] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{m.v}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase mt-4" style={{ color: "#6b6b6b" }}>{m.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 space-y-24">
          {[
            { eyebrow: "The Challenge", body: p.challenge },
            { eyebrow: "Our Approach", body: p.solution },
            { eyebrow: "The Outcome", body: p.outcome },
          ].map((b, i) => (
            <motion.div
              key={b.eyebrow}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-16"
            >
              <div className="col-span-12 md:col-span-4">
                <Eyebrow>{b.eyebrow}</Eyebrow>
                <div className="mt-4 text-[clamp(18px,2.4vw,32px)] font-bold leading-tight tracking-[-0.02em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                  {i === 0 && <>Where they <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">started.</span></>}
                  {i === 1 && <>How we <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">built it.</span></>}
                  {i === 2 && <>What <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">shipped.</span></>}
                </div>
              </div>
              <p className="col-span-12 md:col-span-8 text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed" style={{ color: "#1a1a1a" }}>{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      {p.kind === "mobile" && p.mobileShots ? (
        <section className="relative py-20 sm:py-28 border-y overflow-hidden" style={{ background: `linear-gradient(180deg, #06311c 0%, #0a4a2a 100%)`, borderColor: "rgba(0,0,0,0.2)" }}>
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="mb-14 max-w-[700px]">
              <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase font-medium text-white/80">
                <span className="h-px w-8 bg-white/50" />
                Inside the app
              </span>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,56px)] font-bold tracking-[-0.025em] text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Every screen, <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal text-[#a5f3c8]">crafted.</span>
              </h2>
              <p className="mt-5 text-[15px] sm:text-[17px] leading-relaxed text-white/70">
                {p.mobileShots.length} core surfaces of {p.client.split(" (")[0]} — from the home dashboard to crypto wallets and USD virtual cards.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14 sm:gap-x-10 sm:gap-y-20">
              {p.mobileShots.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: easeOut }}
                  className="flex flex-col items-center"
                >
                  <PhoneFrame src={s.src} alt={`${p.client} — ${s.label}`} />
                  <div className="mt-6 text-center max-w-[260px]">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#a5f3c8]">{String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-2 text-[16px] font-semibold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{s.label}</div>
                    {s.caption && <div className="mt-2 text-[13px] leading-relaxed text-white/65">{s.caption}</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#fafafa] py-20 sm:py-28 border-y" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="mb-12 flex items-end justify-between flex-wrap gap-6">
              <div>
                <Eyebrow>Inside the build</Eyebrow>
                <h2 className="mt-4 text-[clamp(24px,3.4vw,48px)] font-bold tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                  A look at the <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">work.</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:gap-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl p-5 sm:p-10 lg:p-16">
              {p.fullpage ? (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: easeOut }}
                >
                  <ScrollingBrowserFrame
                    src={p.fullpage}
                    alt={`${p.client} — full site scroll`}
                    url={p.website ? `https://${p.website}` : undefined}
                  />
                </motion.div>
              ) : (
                p.shots.slice(1).map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: easeOut }}
                  >
                    <BrowserFrame src={s} alt={`${p.client} — screen ${i + 2}`} url={p.website ? `https://${p.website}` : undefined} />
                  </motion.div>
                ))
              )}
            </div>
            {p.website && (
              <div className="mt-10 flex justify-center">
                <a
                  href={`https://${p.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-black text-white px-7 py-4 text-[13px] sm:text-[14px] font-medium tracking-wide hover:bg-neutral-800 transition shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]"
                >
                  <span>Explore the live site</span>
                  <span className="text-base transition group-hover:translate-x-1">→</span>
                  <span className="opacity-60 text-[11px] hidden sm:inline">{p.website}</span>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== FEATURES (mobile only) ===== */}
      {p.features && p.features.length > 0 && (
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="mb-12 max-w-[700px]">
              <Eyebrow>What it does</Eyebrow>
              <h2 className="mt-4 text-[clamp(24px,3.4vw,48px)] font-bold tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                The whole stack of <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">features.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeOut }}
                  className="rounded-3xl border p-6 sm:p-7 bg-[#fafafa]" style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: mintDeep }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-3 text-[19px] font-semibold leading-tight" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{f.title}</div>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#3a3a3a" }}>{f.body}</p>
                </motion.div>
              ))}
            </div>
            {(p.appStoreUrl || p.playStoreUrl) && (
              <div className="mt-14 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                  {(p.sellerAppStoreUrl || p.sellerPlayStoreUrl) && (
                    <div className="text-[10px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>Buyer App</div>
                  )}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {p.appStoreUrl && <AppStoreBadge href={p.appStoreUrl} />}
                    {p.playStoreUrl && <PlayStoreBadge href={p.playStoreUrl} />}
                  </div>
                </div>
                {(p.sellerAppStoreUrl || p.sellerPlayStoreUrl) && (
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[10px] tracking-[0.28em] uppercase" style={{ color: "#6b6b6b" }}>Seller App</div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {p.sellerAppStoreUrl && <AppStoreBadge href={p.sellerAppStoreUrl} />}
                      {p.sellerPlayStoreUrl && <PlayStoreBadge href={p.sellerPlayStoreUrl} />}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== TECH & SERVICES ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid grid-cols-12 gap-6 sm:gap-12">
          <div className="col-span-12 md:col-span-6">
            <Eyebrow>Technologies</Eyebrow>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="inline-flex items-center px-4 py-2 rounded-full border text-[12px] tracking-wide" style={{ borderColor: "rgba(0,0,0,0.15)", color: deepInk, background: "#fafafa" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          {p.services && (
            <div className="col-span-12 md:col-span-6">
              <Eyebrow>What we delivered</Eyebrow>
              <ul className="mt-8 space-y-3">
                {p.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[16px]" style={{ color: deepInk }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: mintDeep }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ===== PREV / NEXT ===== */}
      <section className="bg-white border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2">
          <Link to="/portfolio/$id" params={{ id: prev.id }} className="group block p-6 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>← Previous Project</div>
            <div className="mt-4 text-[clamp(18px,2.4vw,32px)] font-bold tracking-[-0.02em] group-hover:translate-x-[-4px] transition-transform" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              {prev.client}
            </div>
            <div className="mt-2 text-[14px]" style={{ color: "#6b6b6b" }}>{prev.title}</div>
          </Link>
          <Link to="/portfolio/$id" params={{ id: next.id }} className="group block p-6 sm:p-10 md:p-14 text-right">
            <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>Next Project →</div>
            <div className="mt-4 text-[clamp(18px,2.4vw,32px)] font-bold tracking-[-0.02em] group-hover:translate-x-[4px] transition-transform" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
              {next.client}
            </div>
            <div className="mt-2 text-[14px]" style={{ color: "#6b6b6b" }}>{next.title}</div>
          </Link>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      {more.length > 0 && (
        <section className="bg-[#fafafa] py-20 sm:py-28 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="mb-12">
              <Eyebrow>More work</Eyebrow>
              <h2 className="mt-4 text-[clamp(24px,3.4vw,48px)] font-bold tracking-[-0.025em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
                Other things we've <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">shipped.</span>
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-4 sm:gap-5">
              {more.map((m) => (
                <Link key={m.id} to="/portfolio/$id" params={{ id: m.id }} className="col-span-12 md:col-span-4 group rounded-3xl overflow-hidden border bg-white" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={m.cover} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-white/90" style={{ color: deepInk }}>{m.category}</div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{m.client}</div>
                    <div className="mt-3 text-[18px] font-semibold leading-snug" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{m.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="relative py-20 sm:py-28 border-t" style={{ background: `linear-gradient(180deg, ${mint} 0%, #ffffff 100%)`, borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 text-center">
          <Eyebrow>Got something like this?</Eyebrow>
          <h2 className="mt-8 font-bold leading-[1.02] tracking-[-0.03em] text-[clamp(28px,4.8vw,72px)]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>
            Let's put your project <span style={{ fontFamily: "'Fraunces', serif" }} className="italic font-normal">on this page.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] tracking-wide text-black" style={{ background: mintDeep }}>
              Start a project →
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border px-7 py-4 text-[13px] tracking-wide" style={{ borderColor: deepInk, color: deepInk }}>
              ← All work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
