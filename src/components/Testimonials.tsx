import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const avatarColors = {
  signal: 'bg-signal/20 border-signal/30 text-signal',
  violet: 'bg-violet/20 border-violet/30 text-violet',
} as const;

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg">
      <div className="glow-blob-violet top-1/4 right-0 opacity-[0.06]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">What Clients Say</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter">
            Not promises.<br />
            <span className="text-glow-animate">Proof.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_DATA.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease }}
              className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-signal/25 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Large quote decoration */}
              <Quote
                size={80}
                className="absolute -top-4 -right-4 text-white/3 rotate-180"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="size-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-base text-text-muted leading-relaxed italic mb-8 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-full border flex items-center justify-center font-heading font-black text-sm flex-shrink-0 ${avatarColors[t.color]}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-10 glass-panel rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-heading font-black text-white">100%</span>
            <span className="text-xs text-text-muted">Client Satisfaction</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-3xl font-heading font-black text-white">0</span>
            <span className="text-xs text-text-muted">Projects Abandoned</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-3xl font-heading font-black text-white">Full</span>
            <span className="text-xs text-text-muted">Transparency, Always</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
