import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const lm = SITE_DATA.leadMagnet;

type FormState = 'idle' | 'submitting' | 'success';

export default function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', business: '' });
  const [state, setState] = useState<FormState>('idle');

  const trigger = useCallback(() => {
    if (dismissed) return;
    setOpen(true);
  }, [dismissed]);

  // Manual trigger via custom event (used by Header CTA, AuditCta, etc.)
  useEffect(() => {
    const handleManual = () => {
      setDismissed(false);
      setOpen(true);
    };
    window.addEventListener('signal-lab-open-lead', handleManual);
    return () => window.removeEventListener('signal-lab-open-lead', handleManual);
  }, []);

  useEffect(() => {
    // 1. Scroll trigger
    const handleScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (pct >= lm.scrollTrigger) trigger();
    };

    // 2. Exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // 3. Time-based trigger
    const timer = setTimeout(trigger, lm.delayTrigger * 1000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (lm.exitIntent) document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [trigger]);

  function dismiss() {
    setOpen(false);
    setDismissed(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');

    // Build mailto body
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.business ? `Business: ${form.business}` : '',
      '',
      'Please send me my Free AI Growth Audit.',
    ].filter(Boolean).join('\n');

    const mailto = `mailto:${SITE_DATA.personal.email}?subject=${encodeURIComponent(SITE_DATA.personal.emailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    // Show success after short delay (email client should open)
    setTimeout(() => {
      setState('success');
    }, 800);
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.5, ease }}
            className="relative w-full max-w-lg z-10"
          >
            {/* Rotating border */}
            <div className="animated-border-card">
              <div className="glass-panel-dark rounded-3xl overflow-hidden">

                {/* Close */}
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 z-20 size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-muted hover:text-white transition-all"
                >
                  <X size={16} />
                </button>

                {/* Top glow bar */}
                <div className="h-1 w-full bg-gradient-to-r from-signal via-violet-500 to-signal" />

                <div className="p-8">
                  {state !== 'success' ? (
                    <>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal/10 border border-signal/25 mb-5">
                        <Zap size={12} className="text-signal fill-signal" />
                        <span className="text-xs font-bold tracking-[2px] uppercase text-signal">{lm.badge}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-heading font-black text-white leading-tight tracking-tighter mb-3">
                        {lm.headline}
                      </h2>

                      <p className="text-sm font-semibold text-text-muted mb-3">{lm.subheadline}</p>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-2 mb-5">
                        {lm.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                            <CheckCircle2 size={15} className="text-signal flex-shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Why */}
                      <p className="text-xs text-text-muted/70 italic border-l-2 border-signal/40 pl-3 mb-6 leading-relaxed">
                        {lm.why}
                      </p>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder={lm.namePlaceholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-signal/50 transition-colors"
                        />
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder={lm.emailPlaceholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-signal/50 transition-colors"
                        />
                        <input
                          type="text"
                          value={form.business}
                          onChange={e => setForm({ ...form, business: e.target.value })}
                          placeholder={lm.businessPlaceholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-signal/50 transition-colors"
                        />

                        <motion.button
                          type="submit"
                          disabled={state === 'submitting'}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-magnetic flex items-center justify-center gap-2.5 bg-signal text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-[0_10px_40px_rgba(0,180,255,0.35)] disabled:opacity-60 mt-1"
                        >
                          {state === 'submitting' ? (
                            <span className="flex items-center gap-2">
                              <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Opening your email...
                            </span>
                          ) : (
                            <>
                              <span>{lm.ctaLabel}</span>
                              <ArrowRight size={16} />
                            </>
                          )}
                        </motion.button>

                        <p className="text-center text-xs text-text-muted/50">{lm.disclaimer}</p>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease }}
                      className="py-8 text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                        className="size-16 rounded-full bg-signal/15 border border-signal/30 flex items-center justify-center mx-auto mb-5"
                      >
                        <CheckCircle2 size={32} className="text-signal" />
                      </motion.div>
                      <h3 className="text-2xl font-heading font-black text-white mb-3">{lm.successTitle}</h3>
                      <p className="text-text-muted leading-relaxed text-sm">{lm.successSub}</p>
                      <button
                        onClick={dismiss}
                        className="mt-6 text-xs text-text-muted/60 hover:text-text-muted transition-colors underline underline-offset-2"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Also export a hook to manually trigger the popup from anywhere
export function useLeadPopup() {
  function openPopup() {
    window.dispatchEvent(new CustomEvent('signal-lab-open-lead'));
  }
  return { openPopup };
}
