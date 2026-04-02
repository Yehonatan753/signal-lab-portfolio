import { motion } from 'framer-motion';
import { SITE_DATA } from '../data';

export default function TechTicker() {
  const items = [...SITE_DATA.ticker, ...SITE_DATA.ticker];
  return (
    <section className="relative py-4 overflow-hidden border-y border-white/5 bg-surface/20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-mono font-medium text-text-muted whitespace-nowrap px-1">
            <span className="size-1.5 rounded-full bg-signal/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
