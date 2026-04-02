import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-surface/20">
      <div className="glow-blob bottom-0 left-1/2 -translate-x-1/2 opacity-[0.06]" />

      <div className="max-w-4xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold tracking-[3px] uppercase text-signal mb-4">How It Works</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter">
            From idea to results —<br />
            <span className="text-glow-animate">4 steps.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-signal via-violet to-signal/50 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {SITE_DATA.process.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease }}
                  className={`relative flex items-center ${
                    isLeft
                      ? 'md:flex-row flex-col md:text-right text-left'
                      : 'md:flex-row-reverse flex-col md:text-left text-left'
                  } gap-8 md:gap-12`}
                >
                  {/* Card */}
                  <div className="flex-1 glass-panel rounded-2xl p-7 border border-white/5 hover:border-signal/25 transition-all duration-300 group">
                    <span className="text-xs font-bold tracking-[3px] uppercase text-signal mb-3 block">
                      Step {step.num}
                    </span>
                    <h3 className="text-2xl font-heading font-black text-white mb-3 group-hover:text-signal transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex size-14 rounded-full border-2 border-signal bg-bg flex-shrink-0 items-center justify-center font-heading font-black text-signal text-lg shadow-[0_0_20px_rgba(0,180,255,0.3)] z-10">
                    {step.num}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
