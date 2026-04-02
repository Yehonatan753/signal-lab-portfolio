import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data';
import { useLeadPopup } from './LeadCapturePopup';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Capabilities() {
  const { capabilities } = SITE_DATA;
  const { openPopup } = useLeadPopup();

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-surface/30">
      <div className="glow-blob top-0 right-0 opacity-[0.07]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">
              {capabilities.label}
            </p>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-6">
              {capabilities.headline}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {capabilities.sub}
            </p>
            <button
              onClick={openPopup}
              className="btn-magnetic inline-flex items-center gap-3 bg-signal text-white px-7 py-3.5 rounded-full font-bold shadow-[0_10px_40px_rgba(0,180,255,0.35)] hover:shadow-[0_10px_50px_rgba(0,180,255,0.5)] transition-shadow"
            >
              {"Let's scope your project →"}
            </button>
          </motion.div>

          {/* Right — capabilities grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {capabilities.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
                className="flex items-center gap-3 py-3 px-4 glass-panel rounded-xl border border-white/5 group hover:border-signal/25 transition-colors"
              >
                <CheckCircle2 size={16} className="text-signal flex-shrink-0" />
                <span className="text-sm font-medium text-text-muted group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
