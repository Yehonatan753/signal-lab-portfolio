import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { SITE_DATA } from '../data';
import { useLeadPopup } from './LeadCapturePopup';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { openPopup } = useLeadPopup();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = SITE_DATA.nav.links.map(l => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed top-5 left-0 right-0 z-40 mx-auto w-[95%] max-w-5xl rounded-full transition-all duration-500 ${
          isScrolled
            ? 'glass-panel py-3 px-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10'
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group z-50">
            <div className="size-8 rounded-lg bg-signal flex items-center justify-center shadow-[0_0_20px_rgba(0,180,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] transition-shadow">
              <Zap size={16} className="fill-white text-white" />
            </div>
            <span className="font-heading font-black text-white text-lg tracking-tight">
              Signal <span className="text-signal">Lab</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {SITE_DATA.nav.links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 inset-x-0 mx-auto w-3/4 h-[2px] bg-signal rounded-full shadow-[0_0_8px_rgba(0,180,255,0.8)]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={openPopup}
              className="btn-magnetic bg-signal text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] transition-shadow"
            >
              {SITE_DATA.nav.cta}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-30 bg-bg/96 backdrop-blur-xl pt-28 px-8 flex flex-col gap-5 md:hidden"
          >
            {SITE_DATA.nav.links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, ease }}
                onClick={() => setMobileOpen(false)}
                className={`text-3xl font-heading font-black border-b border-white/5 pb-4 transition-colors ${
                  activeSection === link.href.slice(1) ? 'text-signal' : 'text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: SITE_DATA.nav.links.length * 0.08, ease }}
              onClick={() => { setMobileOpen(false); openPopup(); }}
              className="mt-4 w-full bg-signal text-white py-4 rounded-2xl font-bold text-center text-xl shadow-[0_10px_40px_rgba(0,180,255,0.3)]"
            >
              {SITE_DATA.nav.cta} →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
