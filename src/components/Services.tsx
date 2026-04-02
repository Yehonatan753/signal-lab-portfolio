import { motion } from 'framer-motion';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const colorMap = {
  signal: {
    bg: 'bg-signal/10',
    border: 'border-signal/20',
    icon: 'text-signal',
    hover: 'hover:border-signal/40 hover:shadow-[0_20px_60px_rgba(0,180,255,0.1)]',
  },
  violet: {
    bg: 'bg-violet/10',
    border: 'border-violet/20',
    icon: 'text-violet',
    hover: 'hover:border-violet/40 hover:shadow-[0_20px_60px_rgba(120,80,200,0.1)]',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    icon: 'text-pink-400',
    hover: 'hover:border-pink-500/40 hover:shadow-[0_20px_60px_rgba(236,72,153,0.1)]',
  },
  green: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-400',
    hover: 'hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)]',
  },
} as const;

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg">
      <div className="glow-blob-violet bottom-0 left-0 opacity-[0.06]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">What We Build</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter max-w-xl">
              Six weapons.<br />
              <span className="text-glow-animate">One agency.</span>
            </h2>
            <p className="text-lg text-text-muted max-w-md leading-relaxed">
              We don't offer one service. We build complete revenue systems — every component working together.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_DATA.services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className={`glass-panel rounded-2xl p-7 flex flex-col gap-5 border border-white/5 ${colors.hover} transition-all duration-300 group cursor-default`}
              >
                {/* Icon */}
                <div className={`size-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                  <service.icon size={22} className={colors.icon} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-signal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{service.desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full ${colors.bg} ${colors.icon} font-mono font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
