import { motion } from 'framer-motion';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const colorClasses = {
  signal: {
    border: 'border-signal/20',
    bg: 'bg-signal/10',
    text: 'text-signal',
    glow: 'group-hover:shadow-[0_30px_80px_rgba(0,180,255,0.12)]',
  },
  violet: {
    border: 'border-violet/20',
    bg: 'bg-violet/10',
    text: 'text-violet',
    glow: 'group-hover:shadow-[0_30px_80px_rgba(139,92,246,0.12)]',
  },
  green: {
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    glow: 'group-hover:shadow-[0_30px_80px_rgba(16,185,129,0.12)]',
  },
  pink: {
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    glow: 'group-hover:shadow-[0_30px_80px_rgba(244,114,182,0.12)]',
  },
} as const;

export default function ProofLedger() {
  const proof = SITE_DATA.proofLedger;

  return (
    <section id="proof-ledger" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg overflow-hidden">
      <div className="glow-blob top-20 right-0 opacity-[0.05]" />
      <div className="glow-blob-violet bottom-0 left-0 opacity-[0.06]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">{proof.label}</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-6 lg:items-end">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter">
              {proof.headline.split('AI')[0]}
              <span className="text-glow-animate">AI</span>
              {proof.headline.split('AI').slice(1).join('AI')}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">{proof.sub}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {proof.cards.map((item, index) => {
            const Icon = item.icon;
            const color = colorClasses[item.color];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.05, ease }}
                className={`group glass-panel rounded-2xl p-6 border ${color.border} ${color.glow} transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`size-11 rounded-xl ${color.bg} flex items-center justify-center`}>
                    <Icon size={19} className={color.text} />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-heading font-black leading-none ${color.text}`}>
                      {item.stat}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-[1.5px] text-text-muted mt-1">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-black text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">{item.body}</p>
                <div className="rounded-xl bg-white/[0.035] border border-white/5 p-4">
                  <p className="text-xs leading-relaxed text-white/80">{item.outcome}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
