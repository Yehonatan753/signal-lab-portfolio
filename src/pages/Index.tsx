import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import NoiseOverlay from '../components/NoiseOverlay';
import LeadCapturePopup from '../components/LeadCapturePopup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';
import PainPoint from '../components/PainPoint';
import Capabilities from '../components/Capabilities';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import CaseStudy from '../components/CaseStudy';
import RonCaseStudy from '../components/RonCaseStudy';
import Testimonials from '../components/Testimonials';
import AuditCta from '../components/AuditCta';
import Process from '../components/Process';
import CtaSection from '../components/CtaSection';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return Math.min(p + Math.floor(Math.random() * 10) + 5, 100);
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              animate={{ boxShadow: ['0 0 40px rgba(0,180,255,0.4)', '0 0 80px rgba(0,180,255,0.7)', '0 0 40px rgba(0,180,255,0.4)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="size-20 rounded-2xl bg-[#1a2535] flex items-center justify-center"
            >
              <img src="/logo.jpg" alt="Signal Lab" className="size-14 rounded-xl" />
            </motion.div>
            <p className="font-heading font-black text-white text-2xl tracking-tight">
              Signal <span className="text-signal">Lab</span>
            </p>
            <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-signal rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-text-muted font-mono text-xs tracking-[3px]">{progress}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page */}
      <div className="relative w-full min-h-screen">
        <NoiseOverlay />
        <LeadCapturePopup />
        <Header />
        <main>
          <Hero />
          <TechTicker />
          <PainPoint />
          <Capabilities />
          <Services />
          <Showcase />
          <CaseStudy />
          <RonCaseStudy />
          <Testimonials />
          <AuditCta />
          <Process />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
