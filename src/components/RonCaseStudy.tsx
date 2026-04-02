import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const metricColors = ['text-signal', 'text-violet', 'text-emerald-400', 'text-pink-400'];

const builtColors = {
  signal: { bg: 'bg-signal/10', icon: 'text-signal', border: 'border-signal/20' },
  violet: { bg: 'bg-violet/10', icon: 'text-violet', border: 'border-violet/20' },
  green:  { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'border-emerald-500/20' },
  pink:   { bg: 'bg-pink-500/10', icon: 'text-pink-400', border: 'border-pink-500/20' },
} as const;

export default function RonCaseStudy() {
  const cs = SITE_DATA.caseStudies.ron;
  return (
    <section id="case-study-ron" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg">
      <div className="glow-blob-violet top-0 left-0 opacity-[0.07]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="mb-12">
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">{cs.label}</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-4">
            5,000 products. <span className="text-glow-animate">Zero limitations.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">{cs.summary}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }} className="animated-border-card mb-6">
          <div className="glass-panel-dark rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-signal bg-signal/10 border border-signal/20 px-3 py-1.5 rounded-full mb-6">
                <span className="size-1.5 rounded-full bg-signal animate-pulse" />E-Commerce
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-1">{cs.client}</h3>
              <p className="text-text-muted text-sm mb-8">{cs.clientTitle}</p>
              <ul className="flex flex-col gap-3">
                {cs.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                    <CheckCircle2 size={16} className="text-signal flex-shrink-0 mt-0.5" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cs.metrics.map((m, i) => (
                <div key={i} className="glass-panel rounded-2xl p-6 text-center border border-white/5">
                  <div className={"text-4xl font-heading font-black leading-none mb-1 " + metricColors[i]}>{m.num}</div>
                  <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                  <div className="text-xs text-text-muted">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {cs.built.map((item, i) => {
            const c = builtColors[item.color];
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className={"glass-panel rounded-2xl p-6 border " + c.border + " hover:shadow-lg transition-all duration-300"}>
                <div className={"size-10 rounded-xl flex items-center justify-center mb-4 " + c.bg}>
                  <item.icon size={18} className={c.icon} />
                </div>
                <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass-panel rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="size-2.5 rounded-full bg-red-500" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-red-400">Before — Hitting a Wall</span>
            </div>
            <ul className="flex flex-col gap-3">
              {cs.before.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                  <XCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-7 border border-signal/20">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="size-2.5 rounded-full bg-signal" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-signal">After — Fully Custom</span>
            </div>
            <ul className="flex flex-col gap-3">
              {cs.after.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircle2 size={15} className="text-signal flex-shrink-0 mt-0.5" />{a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
