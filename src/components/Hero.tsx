import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { useCountUp } from '../hooks/useCountUp';
import { useLeadPopup } from './LeadCapturePopup';
import type { MouseEvent } from 'react';

function AnimatedStat({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { count, start } = useCountUp(num, 1600);
  return (
    <motion.div
      ref={ref}
      onViewportEnter={start}
      className="flex flex-col"
    >
      <span className="text-3xl font-heading font-black text-white leading-none tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-text-muted mt-1">{label}</span>
    </motion.div>
  );
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 2.0 },
  },
};

const itemVariants = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 1.2, ease } },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { openPopup } = useLeadPopup();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center pb-0 px-6 md:px-16 lg:px-24 overflow-hidden bg-bg group"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-tracking radial glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 180, 255, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Ambient glow blobs */}
      <div className="glow-blob top-[-100px] right-[-80px]" />
      <div className="glow-blob-violet bottom-[-80px] left-[-60px]" />

      {/* Signal wave background SVG */}
      <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden pointer-events-none opacity-[0.04]">
        <svg width="900" height="400" viewBox="0 0 900 400" fill="none">
          <polyline
            points="0,200 80,120 160,240 240,80 320,270 400,50 480,270 560,110 640,240 720,130 800,200 900,160"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            className="signal-wave"
          />
          <polyline
            points="0,240 80,160 160,280 240,120 320,300 400,90 480,300 560,150 640,280 720,170 800,240 900,200"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            className="signal-wave"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start gap-6 pt-24"
      >
        {/* Badge */}
        <div className="overflow-hidden pb-1">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 glass-panel-dark"
          >
            <div className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-signal" />
            </div>
            <span className="text-xs font-bold tracking-[3px] text-text-muted uppercase">
              {SITE_DATA.hero.badge}
            </span>
          </motion.div>
        </div>

        {/* Eyebrow */}
        <div className="overflow-hidden pb-1">
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-signal font-semibold tracking-tight"
          >
            {SITE_DATA.hero.eyebrow}
          </motion.p>
        </div>

        {/* Main headline */}
        <div className="overflow-hidden pb-4">
          <motion.h1
            variants={itemVariants}
            className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] font-heading font-black text-white leading-[1.0] tracking-tighter"
          >
            {SITE_DATA.hero.headline1}{' '}
            <span className="text-glow-animate">{SITE_DATA.hero.headline2}</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <div className="overflow-hidden pb-2">
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed border-l-2 border-signal pl-6"
          >
            {SITE_DATA.hero.sub}
          </motion.p>
        </div>

        {/* CTAs */}
        <div className="overflow-hidden pt-4 pb-2">
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={openPopup}
              className="btn-magnetic group w-full sm:w-auto bg-signal text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(0,180,255,0.4)] flex items-center justify-center gap-3"
            >
              <span>Book a Free Call</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="btn-magnetic w-full sm:w-auto group bg-white/5 backdrop-blur-md border border-white/15 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            >
              <span>See what we build</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-signal" />
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="flex gap-10 mt-8 flex-wrap"
        >
          {SITE_DATA.hero.stats.map((stat) => (
            <AnimatedStat key={stat.label} num={stat.num} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-signal"
          />
        </div>
      </motion.div>
    </section>
  );
}
