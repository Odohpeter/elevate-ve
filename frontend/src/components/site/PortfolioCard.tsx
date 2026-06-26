import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

const deepInk = "#000000";
const easeOut = [0.22, 1, 0.36, 1] as const;

interface PortfolioCardProps {
  project: Project;
  index?: number;
}

export function PortfolioCard({ project: p, index = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: easeOut }}
      whileHover={{ y: -6 }}
      className="col-span-12 md:col-span-4"
    >
      <Link
        to="/portfolio/$id"
        params={{ id: p.id }}
        className="group block cursor-pointer rounded-3xl overflow-hidden border bg-white h-full"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          {p.category === "Website" || p.category === "Digitization" ? (
            <div
              className="w-full h-full flex items-center justify-center px-[7%] pt-[8%] pb-[5%]"
              style={{ background: "linear-gradient(135deg, #e8f7ef 0%, #ffffff 55%, #e8f7ef 100%)" }}
            >
              <div className="w-full flex flex-col items-center">
                <div className="w-full rounded-[10px] bg-[#1a1a1a] p-[5px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] ring-1 ring-black/40">
                  <div className="relative mx-auto mb-[2px] h-[3px] w-[16%] rounded-b-sm bg-[#0a0a0a]" />
                  <div className="relative aspect-[16/10] rounded-[2px] overflow-hidden bg-white">
                    <motion.img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover object-top" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: easeOut }} />
                  </div>
                </div>
                <div className="relative w-[110%] -mt-[1px]">
                  <div className="h-[7px] rounded-b-[8px] bg-gradient-to-b from-[#d0d0d0] via-[#b4b4b4] to-[#8a8a8a] shadow-[0_6px_12px_-4px_rgba(0,0,0,0.3)]">
                    <div className="mx-auto h-[3px] w-[14%] rounded-b-[5px] bg-gradient-to-b from-[#6a6a6a] to-[#3a3a3a]" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <motion.img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: easeOut }} />
          )}
          <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-white/90" style={{ color: deepInk }}>{p.category}</div>
          <div className="absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full" style={{ background: "#000", color: "#55e6a5" }}>{p.year}</div>
          {p.category === "Digitization" && (
            <div className="absolute bottom-3 right-3 text-[9px] font-semibold tracking-wide uppercase px-2.5 py-1.5 rounded-md bg-amber-400 text-black shadow-lg flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-black" /> NDA · Not actual image
            </div>
          )}
        </div>
        <div className="p-7">
          <div className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#6b6b6b" }}>{p.client}</div>
          <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-[-0.01em]" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{p.title}</h3>
          <div className="mt-6 flex items-end justify-between">
            <div className="flex gap-5">
              {p.metrics.slice(0, 2).map((m) => (
                <div key={m.l}>
                  <div className="text-[22px] font-bold tabular-nums leading-none" style={{ color: deepInk, fontFamily: "'Inter Tight', sans-serif" }}>{m.v}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mt-1" style={{ color: "#6b6b6b" }}>{m.l}</div>
                </div>
              ))}
            </div>
            <span className="text-[12px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: deepInk }}>View →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
