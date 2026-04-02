import { motion } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLeadPopup } from './LeadCapturePopup';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const BULLETS = [
  'Which AI systems would 10x your specific revenue stream',
  'Your #1 bottleneck — and the exact fix',
  'A prioritized build roadmap: what to do first and why',
  'Honest verdict: what we would build if it were our business',
];

export default function AuditCta() {
  const { openPopup } = useLeadPopup();

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Background gradient stripe */}
      <div className="absolute inset-0 bg-gradient-to-r from-signal/5 via-violet-500/5 to-signal/5" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-signal/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal/10 border border-signal/25 mb-5">
              <Zap size={12} className="text-signal fill-signal" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-signal">Free · Limited Spots</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-black text-white leading-[1.15] tracking-tighter mb-4">
              Get your free{' '}
              <span className="text-glow-animate">AI Growth Audit</span>
              {' '}— before your competitor does.
            </h2>

            <p className="text-text-muted leading-relaxed mb-6">
              Most agencies send a proposal before they understand your business. We do the homework first — so you get a real plan, not a sales deck. Zero pressure. Zero fluff.
            </p>

            <motion.button
              onClick={openPopup}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-magnetic inline-flex items-center gap-2.5 bg-signal text-white px-7 py-3.5 rounded-xl font-bold shadow-[0_10px_40px_rgba(0,180,255,0.35)] hover:shadow-[0_10px_50px_rgba(0,180,255,0.5)] transition-shadow"
            >
              <span>Claim My Free Audit</span>
              <ArrowRight size={17} />
            </motion.button>

            <p className="text-xs text-text-muted/50 mt-3">
              Delivered within 48h. No spam. No pitch.
            </p>
          </motion.div>

          {/* Right: what you get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="animated-border-card"
          >
            <div className="glass-panel-dark rounded-2xl p-7">
              <p className="text-xs font-bold tracking-[2px] uppercase text-signal mb-5">
                What you get
              </p>
              <ul className="flex flex-col gap-4">
                {BULLETS.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.07, ease }}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <CheckCircle2 size={16} className="text-signal flex-shrink-0 mt-0.5" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs text-text-muted/60 italic leading-relaxed">
                  "He is not just a contractor — he is a partner who delivers real results."
                </p>
                <p className="text-xs text-signal font-semibold mt-1.5">— Tomer Friedman, Nutritionist</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
