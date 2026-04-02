import { motion } from 'framer-motion';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function PainPoint() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden bg-bg">
      <div className="glow-blob-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">The Problem</p>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-5">
              {SITE_DATA.painPoint.headline}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed border-l-2 border-signal/50 pl-5">
              {SITE_DATA.painPoint.sub}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SITE_DATA.painPoint.pains.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="glass-panel rounded-2xl p-6 flex items-start gap-5 group hover:border-signal/30 border border-white/5 transition-colors duration-300"
            >
              <div className="size-12 rounded-xl bg-signal/10 border border-signal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-signal/15 transition-colors">
                <item.icon size={22} className="text-signal" />
              </div>
              <p className="text-base text-text-muted leading-relaxed pt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
