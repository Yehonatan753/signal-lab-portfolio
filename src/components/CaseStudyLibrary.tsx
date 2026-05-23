import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const colorClasses = {
  signal: {
    border: 'border-signal/20',
    bg: 'bg-signal/10',
    text: 'text-signal',
    glow: 'hover:shadow-[0_30px_80px_rgba(0,180,255,0.12)]',
  },
  violet: {
    border: 'border-violet/20',
    bg: 'bg-violet/10',
    text: 'text-violet',
    glow: 'hover:shadow-[0_30px_80px_rgba(139,92,246,0.12)]',
  },
  green: {
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    glow: 'hover:shadow-[0_30px_80px_rgba(16,185,129,0.12)]',
  },
  pink: {
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    glow: 'hover:shadow-[0_30px_80px_rgba(244,114,182,0.12)]',
  },
} as const;

export default function CaseStudyLibrary() {
  const library = SITE_DATA.caseStudyLibrary;

  return (
    <section id="case-study-library" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-surface/20 overflow-hidden">
      <div className="glow-blob top-0 left-1/4 opacity-[0.05]" />
      <div className="glow-blob-violet bottom-0 right-0 opacity-[0.05]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">{library.label}</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.82fr] gap-6 lg:items-end">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter">
              Every project gets its <span className="text-glow-animate">own proof.</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">{library.sub}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {library.studies.map((study, index) => {
            const Icon = study.icon;
            const color = colorClasses[study.color];

            return (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.05, ease }}
                className={`group glass-panel rounded-2xl border ${color.border} ${color.glow} p-6 md:p-7 transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`size-12 rounded-2xl ${color.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={21} className={color.text} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-[10px] font-bold tracking-[2px] uppercase ${color.text}`}>
                          {study.type}
                        </span>
                        {'confidential' in study && study.confidential && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[1.5px] uppercase text-amber-300 bg-amber-400/10 border border-amber-300/20 px-2 py-1 rounded-full">
                            <ShieldCheck size={11} />
                            Classified
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading font-black text-white leading-tight">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[1.8px] text-text-muted mb-2">Context</p>
                    <p className="text-sm text-white/80 leading-relaxed">{study.context}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[1.8px] text-text-muted mb-2">Built</p>
                    <p className="text-sm text-white/80 leading-relaxed">{study.built}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[1.8px] text-text-muted mb-2">Outcome</p>
                    <p className="text-sm text-white/80 leading-relaxed">{study.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.metrics.map((metric) => (
                    <span key={metric} className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${color.bg} ${color.text}`}>
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
