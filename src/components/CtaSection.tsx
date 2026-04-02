import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
import { SITE_DATA } from '../data';
import { useLeadPopup } from './LeadCapturePopup';
import type { MouseEvent } from 'react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CtaSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { openPopup } = useLeadPopup();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-bg">
      <div className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="animated-border-card"
        >
          <div
            className="glass-panel-dark rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group"
            onMouseMove={handleMouseMove}
          >
            {/* Mouse glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    500px circle at ${mouseX}px ${mouseY}px,
                    rgba(0, 180, 255, 0.08),
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Top radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-60 rounded-full bg-signal/20 blur-[80px] pointer-events-none" />

            <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-6 relative">
              Ready to Start?
            </p>

            <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-5 relative">
              {SITE_DATA.cta.headline}
            </h2>

            <p className="text-lg text-text-muted mb-10 max-w-lg mx-auto leading-relaxed relative">
              {SITE_DATA.cta.sub}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <button
                onClick={openPopup}
                className="btn-magnetic w-full sm:w-auto flex items-center justify-center gap-3 bg-signal text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(0,180,255,0.35)] hover:shadow-[0_10px_50px_rgba(0,180,255,0.5)] transition-shadow"
              >
                <Mail size={20} />
                {SITE_DATA.cta.primary}
              </button>
              <a
                href={SITE_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Instagram size={20} />
                {SITE_DATA.cta.secondary}
              </a>
            </div>

            <p className="text-xs text-text-muted mt-8 relative">
              No commitment · Free first call · Worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
