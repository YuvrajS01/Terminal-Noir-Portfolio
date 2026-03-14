import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scrollMsg, setScrollMsg] = useState<{ text: string, show: boolean } | null>(null);
  const isTransitioning = useRef(false);
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showScrollMessage = useCallback((text: string, duration = 1500) => {
    setScrollMsg({ text, show: true });
    if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    if (duration > 0) {
      messageTimeoutRef.current = setTimeout(() => {
        setScrollMsg(prev => prev ? { ...prev, show: false } : null);
      }, duration);
    }
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let touchCurrentY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;

      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50;
      const isAtTop = window.scrollY <= 50;

      const TABS = ['home', 'projects', 'experience', 'about'];
      const currentIndex = TABS.indexOf(activeTab);

      if (e.deltaY > 50 && isAtBottom) {
        if (currentIndex < TABS.length - 1) {
          isTransitioning.current = true;
          showScrollMessage(`Moving to ${TABS[currentIndex + 1]}...`);
          setActiveTab(TABS[currentIndex + 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      } else if (e.deltaY < -50 && isAtTop) {
        if (currentIndex > 0) {
          isTransitioning.current = true;
          showScrollMessage(`Moving to ${TABS[currentIndex - 1]}...`);
          setActiveTab(TABS[currentIndex - 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      }
    };
  
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchCurrentY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning.current) return;
      
      touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;
      
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50;
      const isAtTop = window.scrollY <= 50;

      const TABS = ['home', 'projects', 'experience', 'about'];
      const currentIndex = TABS.indexOf(activeTab);

      if (deltaY > 30 && isAtBottom && currentIndex < TABS.length - 1) {
        setScrollMsg({ text: 'Release to move to next section', show: true });
      } else if (deltaY < -30 && isAtTop && currentIndex > 0) {
        setScrollMsg({ text: 'Release to move to previous section', show: true });
      } else {
        setScrollMsg(prev => prev?.text.startsWith('Release') ? null : prev);
      }
    };

    const handleTouchEnd = () => {
      if (isTransitioning.current) return;
      
      const deltaY = touchStartY - touchCurrentY;
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50;
      const isAtTop = window.scrollY <= 50;

      const TABS = ['home', 'projects', 'experience', 'about'];
      const currentIndex = TABS.indexOf(activeTab);

      // Clear release message
      setScrollMsg(prev => prev?.text.startsWith('Release') ? null : prev);

      if (deltaY > 50 && isAtBottom) {
        if (currentIndex < TABS.length - 1) {
          isTransitioning.current = true;
          showScrollMessage(`Moving to ${TABS[currentIndex + 1]}...`);
          setActiveTab(TABS[currentIndex + 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      } else if (deltaY < -50 && isAtTop) {
        if (currentIndex > 0) {
          isTransitioning.current = true;
          showScrollMessage(`Moving to ${TABS[currentIndex - 1]}...`);
          setActiveTab(TABS[currentIndex - 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      }
      
      touchStartY = 0;
      touchCurrentY = 0;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeTab, showScrollMessage]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-bg-dark text-slate-100 selection:bg-primary selection:text-bg-dark">
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0"></div>
      <div className="fixed inset-0 noise-overlay z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 flex flex-col">
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            {activeTab === 'home' && <Hero key="home" setActiveTab={setActiveTab} />}
            {activeTab === 'projects' && <Projects key="projects" />}
            {activeTab === 'experience' && <Experience key="experience" />}
            {activeTab === 'about' && <About key="about" />}
          </AnimatePresence>
        </main>
        
        <Footer />

        {/* Scroll Notification */}
        <AnimatePresence>
          {scrollMsg?.show && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 bg-[#12140a]/80 text-primary border border-primary/20 rounded-full text-sm font-mono backdrop-blur-md shadow-[0_0_15px_rgba(191,255,0,0.15)] flex items-center gap-3 pointer-events-none"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              {scrollMsg.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
