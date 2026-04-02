import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function ScreenPreview({ theme, accent }: { theme: string; accent: string }) {
  if (theme === 'energy') {
    return (
      <div className="w-full h-full rounded-xl overflow-hidden relative" style={{ background: "#0d0d0d" }}>
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="size-2 rounded-full" style={{ background: accent }} />
          <div className="h-1.5 w-16 rounded-full bg-white/10" />
          <div className="h-1.5 w-10 rounded-full bg-white/10 ml-auto" />
        </div>
        <div className="px-4 pt-4 pb-2">
          <div className="h-3 w-3/4 rounded-full mb-2" style={{ background: accent, opacity: 0.8 }} />
          <div className="h-2 w-1/2 rounded-full bg-white/20 mb-4" />
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full" style={{ background: accent }} />
            <div className="h-6 w-20 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="px-4 pt-3 grid grid-cols-3 gap-2">
          {[0,1,2].map(i => <div key={i} className="h-10 rounded-lg bg-white/5 border border-white/5" />)}
        </div>
        <div className="absolute top-0 right-0 size-32 rounded-full blur-3xl opacity-25" style={{ background: accent }} />
      </div>
    );
  }
  if (theme === 'health') {
    return (
      <div className="w-full h-full flex items-center justify-center relative" style={{ background: "#050f0a" }}>
        <div className="w-[80px] h-[140px] rounded-[18px] border-2 border-white/15 relative overflow-hidden flex flex-col z-10" style={{ background: "#0a1f14" }}>
          <div className="h-3 w-12 mx-auto mt-1.5 rounded-full bg-white/10" />
          <div className="flex-1 px-2 py-2 flex flex-col gap-1.5">
            <div className="h-12 rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: accent + "25", color: accent }}>AI</div>
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="grid grid-cols-2 gap-1 mt-1">
              <div className="h-6 rounded bg-white/5" />
              <div className="h-6 rounded bg-white/5" />
            </div>
          </div>
          <div className="h-5 flex items-center justify-center mb-1">
            <div className="size-2.5 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="absolute inset-0 blur-3xl opacity-15" style={{ background: accent }} />
      </div>
    );
  }
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative" style={{ background: "#060c14" }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
        <div className="size-2 rounded-full bg-red-500/40" />
        <div className="size-2 rounded-full bg-yellow-500/40" />
        <div className="size-2 rounded-full bg-green-500/40" />
        <div className="flex-1 mx-2 h-3 rounded-full bg-white/5 flex items-center px-2">
          <div className="h-1 w-20 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        {[0,1,2,3,4,5].map(i => (
          <div key={i} className="aspect-square rounded-lg border border-white/5 flex flex-col justify-end p-1 gap-0.5" style={{ background: "#0a1525" }}>
            <div className="h-1 w-full rounded-full bg-white/10" />
            <div className="h-1 w-2/3 rounded-full" style={{ background: accent + "60" }} />
          </div>
        ))}
      </div>
      <div className="absolute top-4 left-4 size-20 rounded-full blur-3xl opacity-15" style={{ background: accent }} />
    </div>
  );
}

function ShowcaseCard({ item, index }: { item: typeof SITE_DATA.showcase[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const cfg = { stiffness: 200, damping: 22 };
  const rotateX = useSpring(useTransform(rawY, [-80, 80], [8, -8]), cfg);
  const rotateY = useSpring(useTransform(rawX, [-80, 80], [-8, 8]), cfg);

  function onMove(e: React.MouseEvent) {
    const r = cardRef.current!.getBoundingClientRect();
    rawX.set(e.clientX - r.left - r.width / 2);
    rawY.set(e.clientY - r.top - r.height / 2);
  }
  function onLeave() { rawX.set(0); rawY.set(0); }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12, ease }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="glass-panel rounded-2xl border border-white/5 overflow-hidden group h-full flex flex-col cursor-default"
        whileHover={{ borderColor: item.accentHex + "50", boxShadow: `0 30px 80px ${item.accentHex}18` }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-52 overflow-hidden">
          <ScreenPreview theme={item.theme} accent={item.accentHex} />
          <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-full border z-10"
            style={{ background: item.accentHex + "18", borderColor: item.accentHex + "40", color: item.accentHex }}>
            {item.type}
          </span>
          <span className="absolute bottom-3 right-3 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full z-10"
            style={{ background: item.accentHex + "25", color: item.accentHex }}>
            {item.metric}
            <span className="opacity-60 font-normal text-[10px]"> {item.metricLabel}</span>
          </span>
        </div>

        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-heading font-black text-white leading-tight group-hover:text-signal transition-colors duration-300">
              {item.title}
            </h3>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="size-8 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 hover:border-signal/50 hover:bg-signal/10 transition-all">
                <ExternalLink size={13} className="text-text-muted" />
              </a>
            ) : (
              <div className="size-8 rounded-full flex-shrink-0 flex items-center justify-center border border-white/5">
                <ArrowUpRight size={13} className="text-white/15" />
              </div>
            )}
          </div>
          <p className="text-sm text-text-muted leading-relaxed flex-1">{item.desc}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.stack.map(tag => (
              <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-text-muted">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-surface/20">
      <div className="glow-blob top-0 right-0 opacity-[0.06]" />
      <div className="glow-blob-violet bottom-0 left-0 opacity-[0.05]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="mb-16">
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">Our Work</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter max-w-xl">
              Built by us.<br /><span className="text-glow-animate">Owned by you.</span>
            </h2>
            <p className="text-lg text-text-muted max-w-sm leading-relaxed">
              Every project is custom-built. No templates, no shortcuts. Here is what we have shipped.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_DATA.showcase.map((item, i) => <ShowcaseCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
